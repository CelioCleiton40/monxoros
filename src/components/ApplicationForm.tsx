import React, { useEffect, useMemo, useState } from 'react';
import { useForm } from 'react-hook-form';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Check } from 'lucide-react';
import { zodResolver } from '@hookform/resolvers/zod';
import { FormField } from './form/FormField';
import { formSchema, FormSchemaType } from '../schemas/formSchema';
import { 
  DESTINATIONS, 
  TITLE_OPTIONS, 
  HEAR_ABOUT_OPTIONS, 
  TOUR_TYPES, 
  SEND_ME_OPTIONS 
} from '../constants/formOptions';

interface ApplicationFormProps {
  isOpen: boolean;
  onClose: () => void;
  isSubmitted: boolean;
  onSubmit: (data: FormSchemaType) => void;
}

export const ApplicationForm: React.FC<ApplicationFormProps> = ({
  isOpen,
  onClose,
  isSubmitted,
  onSubmit
}) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const { register, handleSubmit, formState: { errors }, reset, setValue } = useForm<FormSchemaType>({
    resolver: zodResolver(formSchema)
  });

  // Phone number formatting function
  const formatPhoneNumber = (value: string) => {
    // Remove all non-numeric characters
    const phoneNumber = value.replace(/\D/g, '');
    
    // Format as (XX) XXXXX-XXXX
    if (phoneNumber.length <= 2) {
      return phoneNumber;
    } else if (phoneNumber.length <= 7) {
      return `(${phoneNumber.slice(0, 2)}) ${phoneNumber.slice(2)}`;
    } else {
      return `(${phoneNumber.slice(0, 2)}) ${phoneNumber.slice(2, 7)}-${phoneNumber.slice(7, 11)}`;
    }
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatPhoneNumber(e.target.value);
    setValue('phone', formatted);
  };

  // Memoized static arrays for better performance
  const destinations = useMemo(() => DESTINATIONS, []);
  const titleOptions = useMemo(() => TITLE_OPTIONS, []);
  const hearAboutOptions = useMemo(() => HEAR_ABOUT_OPTIONS, []);
  const tourTypes = useMemo(() => TOUR_TYPES, []);
  const sendMeOptions = useMemo(() => SEND_ME_OPTIONS, []);

  // Handle form submission with loading state
  const handleFormSubmit = async (data: FormSchemaType) => {
    setIsSubmitting(true);
    try {
      await onSubmit(data);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Handle ESC key to close modal
  useEffect(() => {
    const handleEscKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscKey);
      // Focus on first input when modal opens
      const firstInput = document.getElementById('firstName');
      if (firstInput) {
        setTimeout(() => firstInput.focus(), 100);
      }
    }

    return () => {
      document.removeEventListener('keydown', handleEscKey);
    };
  }, [isOpen, onClose]);

  // Reset form when modal closes
  useEffect(() => {
    if (!isOpen) {
      reset();
      setIsSubmitting(false);
    }
  }, [isOpen, reset]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.2 }}
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded-2xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            role="dialog"
            aria-modal="true"
            aria-labelledby="form-title"
          >
        {!isSubmitted ? (
          <>
            <div className="flex justify-between items-center mb-6">
              <h3 id="form-title" className="text-2xl font-light text-stone-900">
                Application Form
              </h3>
              <button
                onClick={onClose}
                className="text-stone-500 hover:text-stone-700 p-1 rounded-full hover:bg-stone-100 transition-colors"
                aria-label="Close form"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <form onSubmit={handleSubmit(handleFormSubmit)} className="space-y-6">
              {/* Title */}
              <FormField label="Title">
                <select
                  {...register('title')}
                  className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-stone-500 focus:border-transparent transition-colors text-stone-900"
                  aria-describedby="title-help"
                >
                  {titleOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </FormField>

              {/* Name */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormField 
                  label="First Name" 
                  error={errors.firstName?.message}
                  required
                >
                  <input
                  id="firstName"
                  {...register('firstName')}
                  className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-stone-500 focus:border-transparent transition-colors text-stone-900"
                  placeholder="First"
                  aria-required="true"
                  aria-invalid={!!errors.firstName}
                />
                </FormField>

                <FormField 
                  label="Last Name" 
                  error={errors.lastName?.message}
                  required
                >
                  <input
                    {...register('lastName')}
                    className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-stone-500 focus:border-transparent transition-colors text-stone-900"
                    placeholder="Last"
                    aria-required="true"
                    aria-invalid={!!errors.lastName}
                  />
                </FormField>
              </div>

              {/* Email */}
              <FormField 
                label="Email" 
                error={errors.email?.message}
                required
              >
                <input
                  {...register('email')}
                  type="email"
                  className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-stone-500 focus:border-transparent transition-colors text-stone-900"
                  placeholder="your@email.com"
                  aria-required="true"
                  aria-invalid={!!errors.email}
                />
              </FormField>

              {/* Phone */}
              <FormField label="Phone" error={errors.phone?.message}>
                <input
                  type="tel"
                  {...register('phone')}
                  onChange={handlePhoneChange}
                  className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-stone-500 focus:border-transparent transition-colors text-stone-900"
                  placeholder="(11) 99999-9999"
                  maxLength={15}
                  aria-label="Phone number"
                  aria-describedby={errors.phone ? "phone-error" : undefined}
                  aria-invalid={!!errors.phone}
                />
              </FormField>

              {/* Destinations of Interest */}
              <FormField label="Destinations of Interest">
                <div 
                  className="grid grid-cols-2 md:grid-cols-3 gap-2 max-h-48 overflow-y-auto border border-stone-300 rounded-lg p-4"
                  role="group"
                  aria-labelledby="destinations-label"
                >
                  {destinations.map((destination) => (
                    <label key={destination} className="flex items-center space-x-2 text-sm text-stone-700 cursor-pointer hover:bg-stone-50 p-1 rounded">
                      <input
                        type="checkbox"
                        {...register('destinationsOfInterest')}
                        value={destination}
                        className="rounded border-stone-300 text-stone-600 focus:ring-stone-500"
                      />
                      <span>{destination}</span>
                    </label>
                  ))}
                </div>
              </FormField>

              {/* Type of tour */}
              <FormField label="Type of tour">
                <div className="space-y-2" role="radiogroup" aria-labelledby="tour-type-label">
                  {tourTypes.map((tourType) => (
                    <label key={tourType.value} className="flex items-center space-x-2 text-stone-700 cursor-pointer hover:bg-stone-50 p-2 rounded">
                      <input
                        type="radio"
                        {...register('typeOfTour')}
                        value={tourType.value}
                        className="text-stone-600 focus:ring-stone-500"
                      />
                      <span>{tourType.label}</span>
                    </label>
                  ))}
                </div>
              </FormField>

              {/* How did you hear about us? */}
              <FormField label="How did you hear about us?">
                <select
                  {...register('howDidYouHearAboutUs')}
                  className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-stone-500 focus:border-transparent transition-colors text-stone-900"
                >
                  {hearAboutOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </FormField>

              {/* Please send me */}
              <FormField label="Please send me">
                <div className="space-y-2" role="group" aria-labelledby="send-me-label">
                  {sendMeOptions.map((option) => (
                    <label key={option.value} className="flex items-center space-x-2 text-stone-700 cursor-pointer hover:bg-stone-50 p-2 rounded">
                      <input
                        type="checkbox"
                        {...register('pleaseSendMe')}
                        value={option.value}
                        className="rounded border-stone-300 text-stone-600 focus:ring-stone-500"
                      />
                      <span>{option.label}</span>
                    </label>
                  ))}
                </div>
              </FormField>

              {/* Your enquiry */}
              <FormField label="Your enquiry">
                <textarea
                  {...register('yourEnquiry')}
                  rows={4}
                  className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-stone-500 focus:border-transparent transition-colors resize-vertical text-stone-900"
                  placeholder="Please share your enquiry or any additional information..."
                />
              </FormField>

              {/* Recommended Tour Mailer */}
              <div>
                <label className="flex items-center space-x-2 cursor-pointer hover:bg-stone-50 p-2 rounded">
                  <input
                    type="checkbox"
                    {...register('recommendedTourMailer')}
                    className="rounded border-stone-300 text-stone-600 focus:ring-stone-500"
                  />
                  <span className="text-sm font-medium text-stone-700">
                    Recommended Tour Mailer - Please include me
                  </span>
                </label>
              </div>

              {/* Submit Button */}
              <div className="flex justify-end space-x-4 pt-4">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-6 py-3 border border-stone-300 text-stone-700 rounded-lg hover:bg-stone-50 transition-colors"
                  disabled={isSubmitting}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`px-6 py-3 rounded-lg transition-all duration-200 ${
                    isSubmitting 
                      ? "bg-stone-400 cursor-not-allowed text-white" 
                      : "bg-stone-800 hover:bg-stone-700 text-white hover:shadow-lg"
                  }`}
                >
                  {isSubmitting ? (
                    <div className="flex items-center space-x-2">
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>Submitting...</span>
                    </div>
                  ) : (
                    "Submit Application"
                  )}
                </button>
              </div>
            </form>
          </>
        ) : (
          <div className="text-center py-8">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4"
            >
              <Check className="w-8 h-8 text-green-600" />
            </motion.div>
            <h3 className="text-2xl font-light text-stone-800 mb-4">Application Submitted!</h3>
            <p className="text-stone-600 mb-6">
              Thank you for your interest in joining our expedition. We'll review your application and get back to you soon.
            </p>
            <button
              onClick={onClose}
              className="px-6 py-3 bg-stone-800 text-white rounded-lg hover:bg-stone-700 transition-colors"
            >
              Close
            </button>
          </div>
        )}
      </motion.div>
    </motion.div>
  )}
</AnimatePresence>
  );
};

export default ApplicationForm;