import { CCPARequestFormData } from '../schemas/ccpaRequestSchema';

export interface CCPARequestOption {
  value: string;
  label: string;
  icon?: string;
}

export interface VerificationMethodOption {
  value: 'email' | 'phone' | 'address';
  label: string;
}

export interface CCPARequestProps {
  onSubmit?: (data: CCPARequestFormData) => void;
  isSubmitting?: boolean;
}

export interface CCPARequestSuccessProps {
  onReturnHome?: () => void;
}

export interface CCPARequestHeaderProps {
  title?: string;
  subtitle?: string;
  backLink?: string;
  backText?: string;
}

export const REQUEST_TYPE_OPTIONS: CCPARequestOption[] = [
  { value: 'access', label: 'Right to Know (Access Request)' },
  { value: 'delete', label: 'Right to Delete' },
  { value: 'opt-out', label: 'Right to Opt-Out' }
];

export const VERIFICATION_METHOD_OPTIONS: VerificationMethodOption[] = [
  { value: 'email', label: 'Email verification' },
  { value: 'phone', label: 'Phone verification' },
  { value: 'address', label: 'Address verification' }
];