import { z } from 'zod';

// Schema for CCPA request form
export const ccpaRequestSchema = z.object({
  requestType: z.enum(['access', 'delete', 'opt-out'], {
    message: 'Please select a request type'
  }),
  firstName: z.string().min(1, 'First name is required'),
  lastName: z.string().min(1, 'Last name is required'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().optional(),
  address: z.string().optional(),
  city: z.string().optional(),
  state: z.string().optional(),
  zipCode: z.string().optional(),
  verificationMethod: z.enum(['email', 'phone', 'address'], {
    message: 'Please select a verification method'
  }),
  additionalInfo: z.string().optional(),
  authorizedAgent: z.boolean(),
  agentName: z.string().optional(),
  agentEmail: z.string().optional(),
  agentAuthorization: z.string().optional(),
  consent: z.boolean().refine(val => val === true, {
    message: 'You must acknowledge the verification process'
  })
});

export type CCPARequestFormData = z.infer<typeof ccpaRequestSchema>;