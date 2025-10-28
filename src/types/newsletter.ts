/**
 * Dados enviados pelo usuário ao se inscrever na newsletter.
 */
export interface NewsletterSubscription {
  email: string;
  name?: string;
}

/**
 * Estrutura enviada ao Google Sheets via Apps Script.
 */
export interface GoogleSheetsSubscriber {
  name?: string;
  email: string;
  timestamp?: string; // opcional - pode ser adicionado no backend
}

/**
 * Estrutura de resposta padrão da API do Apps Script.
 * Pode retornar texto simples ou objeto JSON.
 */
export interface GoogleSheetsResponse {
  success: boolean;
  message: string;
  timestamp?: string;
  insertedRow?: number;
}

/**
 * Estrutura de erro padronizada para erros do Google Sheets.
 */
export interface GoogleSheetsError {
  success: false;
  error: string;
  code?: number;
}

/**
 * Estrutura de resposta principal do serviço de newsletter no frontend.
 */
export interface NewsletterServiceResponse {
  success: boolean;
  message: string;
  data?: GoogleSheetsResponse;
  error?: GoogleSheetsError;
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
  apiUrl: string;
  sheetId?: string; // opcional - para controle interno
  scriptVersion?: string; // versão do Apps Script, se quiser rastrear
}