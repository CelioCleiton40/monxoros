// Newsletter configuration management

import type { NewsletterConfig } from '../types/newsletter';

/**
 * Gets newsletter configuration from environment variables
 * @returns NewsletterConfig object
 */
export const getNewsletterConfig = (): NewsletterConfig => {
  const config: NewsletterConfig = {
    apiKey: import.meta.env.VITE_MAILCHIMP_API_KEY || '',
    audienceId: import.meta.env.VITE_MAILCHIMP_AUDIENCE_ID || '',
    serverPrefix: import.meta.env.VITE_MAILCHIMP_SERVER_PREFIX || 'us1'
  };

  // Validate required configuration in development
  if (import.meta.env.DEV) {
    const missingVars: string[] = [];
    
    if (!config.apiKey) missingVars.push('VITE_MAILCHIMP_API_KEY');
    if (!config.audienceId) missingVars.push('VITE_MAILCHIMP_AUDIENCE_ID');
    if (!config.serverPrefix) missingVars.push('VITE_MAILCHIMP_SERVER_PREFIX');
    
    if (missingVars.length > 0) {
      console.warn(
        `Newsletter: Missing environment variables: ${missingVars.join(', ')}\n` +
        'Newsletter functionality will be limited. Please check your .env file.'
      );
    }
  }

  return config;
};

/**
 * Checks if newsletter is properly configured
 * @returns boolean indicating if configuration is complete
 */
export const isNewsletterConfigured = (): boolean => {
  const config = getNewsletterConfig();
  return !!(config.apiKey && config.audienceId && config.serverPrefix);
};

/**
 * Gets development mode status
 * @returns boolean indicating if in development mode
 */
export const isDevMode = (): boolean => {
  return import.meta.env.VITE_NEWSLETTER_DEV_MODE === 'true' || import.meta.env.DEV;
};

/**
 * Default newsletter configuration
 */
export const DEFAULT_NEWSLETTER_CONFIG: Partial<NewsletterConfig> = {
  serverPrefix: 'us1'
};

/**
 * Newsletter service endpoints
 */
export const NEWSLETTER_ENDPOINTS = {
  MEMBERS: (serverPrefix: string, audienceId: string) => 
    `https://${serverPrefix}.api.mailchimp.com/3.0/lists/${audienceId}/members`,
  MEMBER: (serverPrefix: string, audienceId: string, memberHash: string) => 
    `https://${serverPrefix}.api.mailchimp.com/3.0/lists/${audienceId}/members/${memberHash}`
};

/**
 * Default tags for newsletter subscribers
 */
export const DEFAULT_SUBSCRIBER_TAGS = [
  'Sertão Expedition',
  'Website Signup'
];

/**
 * Newsletter error messages in English
 */
export const NEWSLETTER_MESSAGES = {
  SUCCESS: 'Successfully subscribed! Thank you for joining our expedition.',
  INVALID_EMAIL: 'Please enter a valid email address',
  REQUIRED_EMAIL: 'Email is required',
  DISPOSABLE_EMAIL: 'Please use a valid email address',
  ALREADY_SUBSCRIBED: 'This email is already subscribed to our newsletter!',
  NETWORK_ERROR: 'Connection error. Please check your internet and try again.',
  INTERNAL_ERROR: 'Internal error. Please try again later.',
  UNKNOWN_ERROR: 'Unknown error. Please try again later.'
};