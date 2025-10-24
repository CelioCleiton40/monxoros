// Newsletter service for Mailchimp integration

import type { 
  NewsletterSubscription, 
  MailchimpMember, 
  NewsletterServiceResponse,
  NewsletterConfig,
  MailchimpError
} from '../types/newsletter';
import { validateAndNormalizeEmail, isDisposableEmail } from '../utils/validation';

class NewsletterService {
  private config: NewsletterConfig;

  constructor(config: NewsletterConfig) {
    this.config = config;
  }

  /**
   * Subscribes a user to the newsletter via Mailchimp API
   * @param subscription - Newsletter subscription data
   * @returns Promise with service response
   */
  async subscribe(subscription: NewsletterSubscription): Promise<NewsletterServiceResponse> {
    try {
      // Validate and normalize email
      const validation = validateAndNormalizeEmail(subscription.email);
      
      if (!validation.isValid) {
        return {
          success: false,
          message: validation.error || 'Email inválido'
        };
      }

      // Check for disposable email
      if (isDisposableEmail(validation.normalizedEmail)) {
        return {
          success: false,
          message: 'Por favor, use um endereço de email válido'
        };
      }

      // Prepare Mailchimp member data
      const memberData: MailchimpMember = {
        email_address: validation.normalizedEmail,
        status: 'subscribed',
        merge_fields: {
          FNAME: subscription.firstName || '',
          LNAME: subscription.lastName || ''
        },
        tags: subscription.tags || ['Sertão Expedition']
      };

      // Make API call to Mailchimp
      const response = await this.callMailchimpAPI(memberData);
      
      if (response.success) {
        return {
          success: true,
          message: 'Inscrição realizada com sucesso! Obrigado por se juntar à nossa expedição.',
          data: response.data
        };
      } else {
        return {
          success: false,
          message: this.getErrorMessage(response.error),
          error: response.error
        };
      }

    } catch (error) {
      console.error('Newsletter subscription error:', error);
      return {
        success: false,
        message: 'Erro interno. Tente novamente mais tarde.'
      };
    }
  }

  /**
   * Makes the actual API call to Mailchimp
   * @param memberData - Mailchimp member data
   * @returns Promise with API response
   */
  private async callMailchimpAPI(memberData: MailchimpMember): Promise<NewsletterServiceResponse> {
    const url = `https://${this.config.serverPrefix}.api.mailchimp.com/3.0/lists/${this.config.audienceId}/members`;
    
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${this.config.apiKey}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(memberData)
      });

      const data = await response.json();

      if (response.ok) {
        return {
          success: true,
          message: 'Success',
          data
        };
      } else {
        return {
          success: false,
          message: 'API Error',
          error: data
        };
      }

    } catch (error) {
      console.error('Mailchimp API call failed:', error);
      return {
        success: false,
        message: 'Network error'
      };
    }
  }

  /**
   * Converts Mailchimp error to user-friendly message
   * @param error - Mailchimp error object
   * @returns User-friendly error message
   */
  private getErrorMessage(error: unknown): string {
    if (!error) return 'Unknown error';

    // Type guard to check if error has status property
    const isMailchimpError = (err: unknown): err is MailchimpError => {
      return typeof err === 'object' && err !== null && 'status' in err;
    };

    // Handle common Mailchimp errors
    if (isMailchimpError(error)) {
      switch (error.status) {
        case 400:
          return 'Invalid data. Please check and try again.';
        case 404:
          return 'Newsletter list not found. Please contact administrator.';
        case 409:
          return 'This email is already subscribed to our newsletter!';
        case 422:
          return 'Invalid email. Please check and try again.';
        case 429:
          return 'Too many requests. Please wait before trying again.';
        default:
          return 'Error processing subscription. Please try again later.';
      }
    }

    return 'Error processing subscription. Please try again later.';
  }

  /**
   * Checks if a user is already subscribed
   * @param email - Email to check
   * @returns Promise with subscription status
   */
  async isSubscribed(email: string): Promise<boolean> {
    const validation = validateAndNormalizeEmail(email);
    
    if (!validation.isValid) {
      return false;
    }

    const url = `https://${this.config.serverPrefix}.api.mailchimp.com/3.0/lists/${this.config.audienceId}/members/${this.getMemberHash(validation.normalizedEmail)}`;
    
    try {
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${this.config.apiKey}`
        }
      });

      if (response.ok) {
        const data = await response.json();
        return data.status === 'subscribed';
      }

      return false;
    } catch (error) {
      console.error('Error checking subscription status:', error);
      return false;
    }
  }

  /**
   * Generates MD5 hash for Mailchimp member ID
   * @param email - Email address
   * @returns MD5 hash string
   */
  private getMemberHash(email: string): string {
    // For production, you should use a proper MD5 library
    // This is a simplified version for demonstration
    return btoa(email).replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
  }
}

// Factory function to create newsletter service instance
export const createNewsletterService = (config: NewsletterConfig): NewsletterService => {
  return new NewsletterService(config);
};

// Default export
export default NewsletterService;