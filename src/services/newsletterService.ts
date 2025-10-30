import type { 
  NewsletterSubscription, 
  NewsletterServiceResponse,
  NewsletterConfig,
  GoogleScriptResponse
} from '../types/newsletter';
import { validateAndNormalizeEmail, isDisposableEmail } from '../utils/validation';
import { SCRIPT_URL, NEWSLETTER_MESSAGES } from '../config/newsletter';

class NewsletterService {
  private config: NewsletterConfig;

  constructor(config: NewsletterConfig) {
    this.config = config;
  }

  /**
   * Subscribes a user to the newsletter via Google Apps Script
   * @param subscription - Newsletter subscription data
   * @returns Promise with service response
   */
  async subscribe(subscription: NewsletterSubscription): Promise<NewsletterServiceResponse> {
    try {
      // ✅ Validate and normalize email
      const validation = validateAndNormalizeEmail(subscription.email);
      if (!validation.isValid) {
        return {
          success: false,
          message: validation.error || NEWSLETTER_MESSAGES.INVALID_EMAIL
        };
      }

      // 🚫 Block disposable emails
      if (isDisposableEmail(validation.normalizedEmail)) {
        return {
          success: false,
          message: NEWSLETTER_MESSAGES.DISPOSABLE_EMAIL
        };
      }

      // 📤 Send via Google Apps Script
      const response = await this.sendViaGoogleScript(validation.normalizedEmail);

      // ✅ Handle success
      if (response.success) {
        return {
          success: true,
          message: response.message || NEWSLETTER_MESSAGES.SUCCESS,
          data: response
        };
      }

      // ⚠️ Handle error response
      return {
        success: false,
        message: response.error || NEWSLETTER_MESSAGES.INTERNAL_ERROR,
        error: {
          success: false,
          error: response.error || 'Unknown error'
        }
      };

    } catch (error) {
      if (error instanceof Error) {
        // 🌐 Network issues
        if (error.message.includes('fetch') || error.message.includes('network')) {
          return {
            success: false,
            message: NEWSLETTER_MESSAGES.NETWORK_ERROR
          };
        }
      }

      return {
        success: false,
        message: NEWSLETTER_MESSAGES.UNKNOWN_ERROR,
        error: {
          success: false,
          error: error instanceof Error ? error.message : 'Unknown error'
        }
      };
    }
  }

  /**
   * Sends email via Google Apps Script
   * @param email - User email to subscribe
   * @returns Promise with Google Apps Script response
   */
  private async sendViaGoogleScript(email: string): Promise<GoogleScriptResponse> {
    try {
      const formData = new FormData();
      formData.append('email', email);

      const response = await fetch(SCRIPT_URL, {
        method: 'POST',
        body: formData
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      return result;
    } catch (error: unknown) {
      if (error instanceof Error) {
        throw new Error(`Erro ao conectar com o Google Apps Script: ${error.message}`);
      }
      
      throw new Error('Erro desconhecido ao conectar com o Google Apps Script');
    }
  }

  /**
   * Validates if the service is properly configured
   */
  isConfigured(): boolean {
    return !!SCRIPT_URL && SCRIPT_URL.includes('script.google.com');
  }

  /**
   * Gets current configuration (for debugging)
   */
  getConfigStatus(): { configured: boolean; scriptUrl: string } {
    return {
      configured: this.isConfigured(),
      scriptUrl: SCRIPT_URL
    };
  }
}

export default NewsletterService;
