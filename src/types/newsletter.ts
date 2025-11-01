/**
 * Data sent by the user when subscribing to the newsletter.
 */
export interface NewsletterSubscription {
  email: string;
  name?: string;
}

/**
 * Google Apps Script response structure.
 */
export interface GoogleScriptResponse {
  success: boolean;
  message?: string;
  error?: string;
}

/**
 * Standardized error structure for Google Apps Script errors.
 */
export interface GoogleScriptError {
  success: false;
  error: string;
  status?: number;
}

/**
 * Main response structure of the newsletter service on the frontend.
 */
export interface NewsletterServiceResponse {
  success: boolean;
  message: string;
  data?: GoogleScriptResponse;
  error?: GoogleScriptError;
  status?: number; // Optional HTTP status (200, 400, 500)
}

/**
 * Newsletter subscription form state on the frontend.
 */
export interface NewsletterFormState {
  email: string;
  name?: string;
  isLoading: boolean;
  isSubmitted: boolean;
  error: string | null;
  successMessage: string | null;
}

/**
 * General newsletter service configuration.
 */
export interface NewsletterConfig {
  scriptUrl: string;
}