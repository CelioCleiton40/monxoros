/**
 * Utility functions for input sanitization and security
 */

/**
 * Sanitizes text input by removing potentially dangerous characters
 * while preserving international characters and common punctuation
 */
export const sanitizeTextInput = (input: string): string => {
  if (!input) return '';
  
  // Remove HTML tags and script content
  const withoutHtml = input.replace(/<[^>]*>/g, '');
  
  // Remove potentially dangerous characters but keep international chars
  const sanitized = withoutHtml
    .replace(/[<>{}[\]\\]/g, '')
    .replace(/javascript:/gi, '')
    .replace(/data:/gi, '')
    .replace(/vbscript:/gi, '')
    .replace(/on\w+=/gi, '');
  
  // Trim whitespace and limit length
  return sanitized.trim().slice(0, 1000);
};

/**
 * Sanitizes email input with enhanced validation
 */
export const sanitizeEmail = (email: string): string => {
  if (!email) return '';
  
  // Remove spaces and convert to lowercase
  const cleaned = email.trim().toLowerCase();
  
  // Remove potentially dangerous characters and scripts
  const sanitized = cleaned
    .replace(/[<>{}[\]\\]/g, '')
    .replace(/javascript:/gi, '')
    .replace(/data:/gi, '')
    .replace(/vbscript:/gi, '');
  
  return sanitized.slice(0, 100);
};

/**
 * Sanitizes phone number input (Brazilian format)
 */
export const sanitizePhone = (phone: string): string => {
  if (!phone) return '';
  
  // Remove all non-numeric characters
  const numbersOnly = phone.replace(/\D/g, '');
  
  // Format as (XX) XXXXX-XXXX or (XX) XXXX-XXXX
  if (numbersOnly.length <= 2) {
    return numbersOnly;
  } else if (numbersOnly.length <= 7) {
    return `(${numbersOnly.slice(0, 2)}) ${numbersOnly.slice(2)}`;
  } else if (numbersOnly.length <= 10) {
    return `(${numbersOnly.slice(0, 2)}) ${numbersOnly.slice(2, 6)}-${numbersOnly.slice(6, 10)}`;
  } else {
    return `(${numbersOnly.slice(0, 2)}) ${numbersOnly.slice(2, 7)}-${numbersOnly.slice(7, 11)}`;
  }
};

/**
 * Validates and sanitizes form data before submission
 */
export const sanitizeFormData = (data: Record<string, string>): Record<string, string> => {
  const sanitized = { ...data };
  
  // Sanitize text fields
  if (sanitized.firstName) {
    sanitized.firstName = sanitizeTextInput(sanitized.firstName);
  }
  
  if (sanitized.lastName) {
    sanitized.lastName = sanitizeTextInput(sanitized.lastName);
  }
  
  if (sanitized.email) {
    sanitized.email = sanitizeEmail(sanitized.email);
  }
  
  if (sanitized.phone) {
    sanitized.phone = sanitizePhone(sanitized.phone);
  }
  
  if (sanitized.yourEnquiry) {
    sanitized.yourEnquiry = sanitizeTextInput(sanitized.yourEnquiry);
  }
  
  return sanitized;
};

/**
 * Rate limiting utility (simple in-memory implementation)
 */
class RateLimiter {
  private attempts: Map<string, number[]> = new Map();
  private readonly maxAttempts: number;
  private readonly windowMs: number;
  
  constructor(maxAttempts: number = 5, windowMs: number = 60000) {
    this.maxAttempts = maxAttempts;
    this.windowMs = windowMs;
  }
  
  isAllowed(identifier: string): boolean {
    const now = Date.now();
    const attempts = this.attempts.get(identifier) || [];
    
    // Remove old attempts outside the window
    const recentAttempts = attempts.filter(time => now - time < this.windowMs);
    
    if (recentAttempts.length >= this.maxAttempts) {
      return false;
    }
    
    // Add current attempt
    recentAttempts.push(now);
    this.attempts.set(identifier, recentAttempts);
    
    return true;
  }
  
  reset(identifier: string): void {
    this.attempts.delete(identifier);
  }
}

export const formRateLimiter = new RateLimiter(3, 60000); // 3 attempts per minute