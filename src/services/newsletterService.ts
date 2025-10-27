import type { 
  NewsletterSubscription, 
  GoogleSheetsSubscriber,
  NewsletterServiceResponse,
  NewsletterConfig,
  GoogleSheetsResponse
} from '../types/newsletter';
import { validateAndNormalizeEmail, isDisposableEmail } from '../utils/validation';
import { NEWSLETTER_MESSAGES } from '../config/newsletter';

class NewsletterService {
  private config: NewsletterConfig;

  constructor(config: NewsletterConfig) {
    this.config = config;
  }

  /**
   * Subscribes a user to the newsletter via Google Sheets API
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

      // 🧾 Prepare subscriber data
      const subscriberData: GoogleSheetsSubscriber = {
        name: subscription.name?.trim() || '',
        email: validation.normalizedEmail
      };

      // 📤 Send to Google Sheets (Apps Script)
      const response = await this.sendToGoogleSheets(subscriberData);

      // ✅ Handle success and duplicate cases
      if (response.message?.includes('sucesso')) {
        return {
          success: true,
          message: NEWSLETTER_MESSAGES.SUCCESS,
          data: response
        };
      }

      if (response.message?.includes('já cadastrado')) {
        return {
          success: false,
          message: NEWSLETTER_MESSAGES.ALREADY_SUBSCRIBED
        };
      }

      // ⚠️ Fallback for unknown responses
      return {
        success: !!response.success,
        message: response.message || NEWSLETTER_MESSAGES.INTERNAL_ERROR
      };

    } catch (error) {
      console.error('Newsletter subscription error:', error);

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
        message: NEWSLETTER_MESSAGES.UNKNOWN_ERROR
      };
    }
  }

  /**
   * Sends subscriber data to Google Sheets via Apps Script API
   * @param subscriberData - Subscriber data to send
   * @returns Promise with Google Sheets response
   */
  private async sendToGoogleSheets(subscriberData: GoogleSheetsSubscriber): Promise<GoogleSheetsResponse> {
    if (!this.config.apiUrl) {
      throw new Error('Google Sheets API URL not configured');
    }

    // 🔒 Ensure proper HTTPS call
    const cleanUrl = this.config.apiUrl.trim();
    const response = await fetch(cleanUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'no-cache'
      },
      body: JSON.stringify(subscriberData)
    });

    if (!response.ok) {
      const text = await response.text();
      throw new Error(`API error ${response.status}: ${text}`);
    }

    // 🔍 Handle potential plain text or JSON responses
    const text = await response.text();
    try {
      return JSON.parse(text) as GoogleSheetsResponse;
    } catch {
      return { success: true, message: text } as GoogleSheetsResponse;
    }
  }

  /**
   * Validates if the service is properly configured
   */
  isConfigured(): boolean {
    return Boolean(this.config.apiUrl?.startsWith('https://'));
  }

  /**
   * Gets current configuration (for debugging)
   */
  getConfigStatus(): { configured: boolean; hasApiUrl: boolean } {
    return {
      configured: this.isConfigured(),
      hasApiUrl: !!this.config.apiUrl
    };
  }
}

export default NewsletterService;
