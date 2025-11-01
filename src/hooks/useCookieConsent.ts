import { useState, useEffect } from 'react';

export function useCookieConsent() {
  const [hasConsent, setHasConsent] = useState<boolean | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Verifica o consentimento armazenado no localStorage
    const consent = localStorage.getItem('cookie-consent');
    if (consent) {
      setHasConsent(consent === 'accepted');
    }
    setIsLoading(false);
  }, []);

  const updateConsent = (consent: boolean) => {
    setHasConsent(consent);
    localStorage.setItem('cookie-consent', consent ? 'accepted' : 'declined');
  };

  const clearConsent = () => {
    setHasConsent(null);
    localStorage.removeItem('cookie-consent');
  };

  return {
    hasConsent,
    isLoading,
    updateConsent,
    clearConsent
  };
}