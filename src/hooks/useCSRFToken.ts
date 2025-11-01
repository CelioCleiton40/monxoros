import { useState, useEffect } from 'react';

/**
 * Hook para gerenciar tokens CSRF
 * Gera um token único por sessão para proteção contra ataques CSRF
 */
export const useCSRFToken = () => {
  const [csrfToken, setCSRFToken] = useState<string>('');

  useEffect(() => {
    // Verifica se já existe um token na sessão
    let token = sessionStorage.getItem('csrf_token');
    
    if (!token) {
      // Gera um novo token usando crypto API
      const array = new Uint8Array(32);
      crypto.getRandomValues(array);
      token = Array.from(array, byte => byte.toString(16).padStart(2, '0')).join('');
      
      // Armazena o token na sessão
      sessionStorage.setItem('csrf_token', token);
    }
    
    setCSRFToken(token);
  }, []);

  /**
   * Valida se o token fornecido corresponde ao token da sessão
   */
  const validateToken = (providedToken: string): boolean => {
    const sessionToken = sessionStorage.getItem('csrf_token');
    return sessionToken === providedToken && providedToken.length > 0;
  };

  /**
   * Regenera o token CSRF (útil após operações sensíveis)
   */
  const regenerateToken = (): void => {
    const array = new Uint8Array(32);
    crypto.getRandomValues(array);
    const newToken = Array.from(array, byte => byte.toString(16).padStart(2, '0')).join('');
    
    sessionStorage.setItem('csrf_token', newToken);
    setCSRFToken(newToken);
  };

  return {
    csrfToken,
    validateToken,
    regenerateToken
  };
};