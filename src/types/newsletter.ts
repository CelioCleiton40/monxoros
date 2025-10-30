/**
 * Dados enviados pelo usuário ao se inscrever na newsletter.
 */
export interface NewsletterSubscription {
  email: string;
  name?: string;
}

/**
 * Estrutura de resposta do Google Apps Script.
 */
export interface GoogleScriptResponse {
  success: boolean;
  message?: string;
  error?: string;
}

/**
 * Estrutura de erro padronizada para erros do Google Apps Script.
 */
export interface GoogleScriptError {
  success: false;
  error: string;
  status?: number;
}

/**
 * Estrutura de resposta principal do serviço de newsletter no frontend.
 */
export interface NewsletterServiceResponse {
  success: boolean;
  message: string;
  data?: GoogleScriptResponse;
  error?: GoogleScriptError;
  status?: number; // status HTTP opcional (200, 400, 500)
}

/**
 * Estado do formulário de inscrição da newsletter no frontend.
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
 * Configuração geral do serviço de newsletter.
 */
export interface NewsletterConfig {
  scriptUrl: string;
}