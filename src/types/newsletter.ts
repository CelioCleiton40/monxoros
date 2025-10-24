// Types for newsletter functionality and Mailchimp integration

export interface NewsletterSubscription {
  email: string;
  firstName?: string;
  lastName?: string;
  tags?: string[];
}

export interface MailchimpMember {
  email_address: string;
  status: 'subscribed' | 'unsubscribed' | 'cleaned' | 'pending';
  merge_fields?: {
    FNAME?: string;
    LNAME?: string;
    [key: string]: string | number | boolean | null | undefined;
  };
  tags?: string[];
}

export interface MailchimpResponse {
  id: string;
  email_address: string;
  unique_email_id: string;
  status: string;
  merge_fields: {
    FNAME: string;
    LNAME: string;
    [key: string]: string | number | boolean | null | undefined;
  };
  timestamp_signup?: string;
  timestamp_opt?: string;
}

export interface MailchimpError {
  type: string;
  title: string;
  status: number;
  detail: string;
  instance: string;
}

export interface NewsletterServiceResponse {
  success: boolean;
  message: string;
  data?: MailchimpResponse;
  error?: MailchimpError;
}

export interface NewsletterFormState {
  email: string;
  isLoading: boolean;
  isSubmitted: boolean;
  error: string | null;
  successMessage: string | null;
}

export interface NewsletterConfig {
  apiKey: string;
  audienceId: string;
  serverPrefix: string;
}