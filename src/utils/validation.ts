// Email validation utilities

/**
 * Validates email format using a comprehensive regex pattern
 * @param email - The email address to validate
 * @returns boolean indicating if email is valid
 */
export const isValidEmail = (email: string): boolean => {
  if (!email || typeof email !== 'string') {
    return false;
  }

  // Comprehensive email regex pattern
  const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
  
  return emailRegex.test(email.trim());
};

/**
 * Normalizes email address by trimming and converting to lowercase
 * @param email - The email address to normalize
 * @returns normalized email address
 */
export const normalizeEmail = (email: string): string => {
  if (!email || typeof email !== 'string') {
    return '';
  }
  
  return email.trim().toLowerCase();
};

/**
 * Validates and normalizes email address
 * @param email - The email address to process
 * @returns object with validation result and normalized email
 */
export const validateAndNormalizeEmail = (email: string): {
  isValid: boolean;
  normalizedEmail: string;
  error?: string;
} => {
  const normalizedEmail = normalizeEmail(email);
  
  if (!normalizedEmail) {
    return {
      isValid: false,
      normalizedEmail: '',
      error: 'Email é obrigatório'
    };
  }
  
  if (!isValidEmail(normalizedEmail)) {
    return {
      isValid: false,
      normalizedEmail,
      error: 'Por favor, insira um email válido'
    };
  }
  
  return {
    isValid: true,
    normalizedEmail
  };
};

/**
 * Checks if email domain is from a disposable email service
 * @param email - The email address to check
 * @returns boolean indicating if email is from disposable service
 */
export const isDisposableEmail = (email: string): boolean => {
  const disposableDomains = [
    '10minutemail.com',
    'guerrillamail.com',
    'mailinator.com',
    'tempmail.org',
    'yopmail.com',
    'temp-mail.org',
    'throwaway.email'
  ];
  
  const normalizedEmail = normalizeEmail(email);
  const domain = normalizedEmail.split('@')[1];
  
  return disposableDomains.includes(domain);
};