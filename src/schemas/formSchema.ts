import { z } from 'zod';

// Regex para validação de telefone brasileiro
const phoneRegex = /^\(\d{2}\)\s\d{4,5}-\d{4}$/;

export const formSchema = z.object({
  title: z.string().optional(),
  firstName: z.string()
    .min(1, 'First name is required')
    .max(50, 'First name must be less than 50 characters')
    .regex(/^[a-zA-ZÀ-ÿ\s'-]+$/, 'First name contains invalid characters'),
  lastName: z.string()
    .min(1, 'Last name is required')
    .max(50, 'Last name must be less than 50 characters')
    .regex(/^[a-zA-ZÀ-ÿ\s'-]+$/, 'Last name contains invalid characters'),
  email: z.string()
    .email('Invalid email address')
    .max(100, 'Email must be less than 100 characters'),
  phone: z.string()
    .optional()
    .refine((val) => !val || phoneRegex.test(val), {
      message: 'Phone must be in format (XX) XXXXX-XXXX'
    }),
  destinationsOfInterest: z.array(z.string()).optional(),
  typeOfTour: z.string().optional(),
  howDidYouHearAboutUs: z.string().optional(),
  pleaseSendMe: z.array(z.string()).optional(),
  yourEnquiry: z.string()
    .optional()
    .refine((val) => !val || val.length <= 1000, {
      message: 'Enquiry must be less than 1000 characters'
    }),
  recommendedTourMailer: z.boolean().optional(),
});

export type FormSchemaType = z.infer<typeof formSchema>;