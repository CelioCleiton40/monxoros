import React from 'react';
import { useCSRFToken } from '../../hooks/useCSRFToken';

interface CSRFTokenFieldProps {
  /**
   * Nome do campo (padrão: 'csrf_token')
   */
  name?: string;
  /**
   * Callback chamado quando o token é carregado
   */
  onTokenReady?: (token: string) => void;
}

/**
 * Componente que adiciona automaticamente um campo oculto com token CSRF
 * Deve ser incluído em todos os formulários para proteção contra CSRF
 */
export const CSRFTokenField: React.FC<CSRFTokenFieldProps> = ({ 
  name = 'csrf_token',
  onTokenReady 
}) => {
  const { csrfToken } = useCSRFToken();

  // Notifica quando o token está pronto
  React.useEffect(() => {
    if (csrfToken && onTokenReady) {
      onTokenReady(csrfToken);
    }
  }, [csrfToken, onTokenReady]);

  if (!csrfToken) {
    return null;
  }

  return (
    <input
      type="hidden"
      name={name}
      value={csrfToken}
      readOnly
      aria-hidden="true"
    />
  );
};