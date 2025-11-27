// Newsletter configuration management for Google Apps Script integration

import type { NewsletterConfig } from '../types/newsletter';

/**
 * Google Apps Script URL for newsletter subscription
 */
export const SCRIPT_URL = import.meta.env.VITE_NEWSLETTER_URL;

/**
 * Gets newsletter configuration
 * @returns NewsletterConfig object
 */
export const getNewsletterConfig = (): NewsletterConfig => {
  const config: NewsletterConfig = {
    scriptUrl: SCRIPT_URL
  };

  return config;
};

/**
 * Checks if newsletter is properly configured
 * @returns boolean indicating if configuration is complete
 */
export const isNewsletterConfigured = (): boolean => {
  return !!SCRIPT_URL;
};

/**
 * Gets development mode status
 * @returns boolean indicating if in development mode
 */
export const isDevMode = (): boolean => {
  return import.meta.env.VITE_NEWSLETTER_DEV_MODE === 'true' || import.meta.env.DEV;
};

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
