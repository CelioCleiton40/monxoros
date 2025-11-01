import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Send } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { ccpaRequestSchema, CCPARequestFormData } from '../../schemas/ccpaRequestSchema';
import { REQUEST_TYPE_OPTIONS, VERIFICATION_METHOD_OPTIONS, CCPARequestProps } from '../../types/ccpaRequest';
import { CSRFTokenField } from '../form/CSRFTokenField';

const CCPARequestForm: React.FC<CCPARequestProps> = ({ onSubmit, isSubmitting = false }) => {
  const { register, handleSubmit, formState: { errors }, watch } = useForm<CCPARequestFormData>({
    resolver: zodResolver(ccpaRequestSchema),
    defaultValues: {
      authorizedAgent: false,
      consent: false
    }
  });

  const watchAuthorizedAgent = watch('authorizedAgent');
  const watchRequestType = watch('requestType');

  const getRequestTypeDescription = (type: string) => {
    switch (type) {
      case 'access':
        return 'Request access to your personal information we have collected, including categories of data, sources, and how it\'s used.';
      case 'delete':
        return 'Request deletion of your personal information from our records and systems.';
      case 'opt-out':
        return 'Opt-out of the sale or sharing of your personal information for targeted advertising.';
      default:
        return '';
    }
  };

  const handleFormSubmit = (data: CCPARequestFormData) => {
    if (onSubmit) {
      onSubmit(data);
    }
  };

  return (
    <main className="max-w-4xl mx-auto px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* Information Banner */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
          <div className="flex items-start">
            <Shield className="w-6 h-6 text-blue-600 mr-3 mt-1 flex-shrink-0" />
            <div>
              <h3 className="font-medium text-blue-900 mb-2">Important Information</h3>
              <p className="text-blue-800 text-sm leading-relaxed">
                This form is for California residents to exercise their rights under the CCPA. 
                We may need to verify your identity before processing your request. 
                All requests will be processed within 45 days as required by law.
              </p>
            </div>
          </div>
        </div>

        {/* Form */}
        <div className="bg-white rounded-lg shadow-sm p-8">
          <form onSubmit={handleSubmit(handleFormSubmit)} className="space-y-8">
            {/* CSRF Protection */}
            <CSRFTokenField />
            
            {/* Request Type */}
            <div>
              <label className="block text-sm font-medium text-stone-700 mb-4">
                Type of Request *
              </label>
              <div className="space-y-4">
                {REQUEST_TYPE_OPTIONS.map((option) => (
                  <label key={option.value} className="flex items-start space-x-3 cursor-pointer">
                    <input
                      type="radio"
                      value={option.value}
                      {...register('requestType')}
                      className="mt-1 text-stone-600 focus:ring-stone-500"
                    />
                    <div className="flex-1">
                      <div className="flex items-center space-x-2">
                        <span className="font-medium text-stone-800">{option.label}</span>
                      </div>
                      {watchRequestType === option.value && (
                        <p className="text-stone-600 text-sm mt-1 ml-6">
                          {getRequestTypeDescription(option.value)}
                        </p>
                      )}
                    </div>
                  </label>
                ))}
              </div>
              {errors.requestType && (
                <p className="text-red-600 text-sm mt-2">{errors.requestType.message}</p>
              )}
            </div>

            {/* Personal Information */}
            <div>
              <h3 className="text-lg font-medium text-stone-800 mb-4">Personal Information</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-stone-700 mb-2">
                    First Name *
                  </label>
                  <input
                    type="text"
                    {...register('firstName')}
                    className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-stone-500 focus:border-transparent"
                  />
                  {errors.firstName && (
                    <p className="text-red-600 text-sm mt-1">{errors.firstName.message}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-stone-700 mb-2">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    {...register('lastName')}
                    className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-stone-500 focus:border-transparent"
                  />
                  {errors.lastName && (
                    <p className="text-red-600 text-sm mt-1">{errors.lastName.message}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-stone-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    {...register('email')}
                    className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-stone-500 focus:border-transparent"
                  />
                  {errors.email && (
                    <p className="text-red-600 text-sm mt-1">{errors.email.message}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-stone-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    {...register('phone')}
                    className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-stone-500 focus:border-transparent"
                  />
                </div>
              </div>
            </div>

            {/* Address Information */}
            <div>
              <h3 className="text-lg font-medium text-stone-800 mb-4">Address Information (Optional)</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-stone-700 mb-2">
                    Street Address
                  </label>
                  <input
                    type="text"
                    {...register('address')}
                    className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-stone-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-stone-700 mb-2">
                    City
                  </label>
                  <input
                    type="text"
                    {...register('city')}
                    className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-stone-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-stone-700 mb-2">
                    State
                  </label>
                  <input
                    type="text"
                    {...register('state')}
                    className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-stone-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-stone-700 mb-2">
                    ZIP Code
                  </label>
                  <input
                    type="text"
                    {...register('zipCode')}
                    className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-stone-500 focus:border-transparent"
                  />
                </div>
              </div>
            </div>

            {/* Verification Method */}
            <div>
              <label className="block text-sm font-medium text-stone-700 mb-4">
                Preferred Verification Method *
              </label>
              <div className="space-y-3">
                {VERIFICATION_METHOD_OPTIONS.map((option) => (
                  <label key={option.value} className="flex items-center space-x-3 cursor-pointer">
                    <input
                      type="radio"
                      value={option.value}
                      {...register('verificationMethod')}
                      className="text-stone-600 focus:ring-stone-500"
                    />
                    <span className="text-stone-700">{option.label}</span>
                  </label>
                ))}
              </div>
              {errors.verificationMethod && (
                <p className="text-red-600 text-sm mt-2">{errors.verificationMethod.message}</p>
              )}
            </div>

            {/* Authorized Agent */}
            <div>
              <label className="flex items-center space-x-3 cursor-pointer">
                <input
                  type="checkbox"
                  {...register('authorizedAgent')}
                  className="text-stone-600 focus:ring-stone-500"
                />
                <span className="text-stone-700">I am submitting this request through an authorized agent</span>
              </label>

              {watchAuthorizedAgent && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  className="mt-4 space-y-4 pl-6 border-l-2 border-stone-200"
                >
                  <div>
                    <label className="block text-sm font-medium text-stone-700 mb-2">
                      Agent Name
                    </label>
                    <input
                      type="text"
                      {...register('agentName')}
                      className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-stone-500 focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-stone-700 mb-2">
                      Agent Email
                    </label>
                    <input
                      type="email"
                      {...register('agentEmail')}
                      className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-stone-500 focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-stone-700 mb-2">
                      Authorization Details
                    </label>
                    <textarea
                      {...register('agentAuthorization')}
                      rows={3}
                      className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-stone-500 focus:border-transparent"
                      placeholder="Please describe the authorization provided to the agent..."
                    />
                  </div>
                </motion.div>
              )}
            </div>

            {/* Additional Information */}
            <div>
              <label className="block text-sm font-medium text-stone-700 mb-2">
                Additional Information
              </label>
              <textarea
                {...register('additionalInfo')}
                rows={4}
                className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-stone-500 focus:border-transparent"
                placeholder="Please provide any additional details about your request..."
              />
            </div>

            {/* Consent */}
            <div className="bg-stone-50 rounded-lg p-6">
              <label className="flex items-start space-x-3 cursor-pointer">
                <input
                  type="checkbox"
                  {...register('consent')}
                  className="mt-1 text-stone-600 focus:ring-stone-500"
                />
                <div className="text-sm text-stone-700">
                  <span className="font-medium">I acknowledge that:</span>
                  <ul className="mt-2 space-y-1 text-stone-600">
                    <li>• I understand that identity verification may be required</li>
                    <li>• The response will be provided within 45 days as required by law</li>
                    <li>• I have the right to appeal if my request is denied</li>
                    <li>• This information will be used solely for processing my CCPA request</li>
                  </ul>
                </div>
              </label>
              {errors.consent && (
                <p className="text-red-600 text-sm mt-2">{errors.consent.message}</p>
              )}
            </div>

            {/* Submit Button */}
            <div className="flex justify-end space-x-4 pt-6">
              <Link
                to="/consumer-rights"
                className="px-6 py-3 border border-stone-300 text-stone-700 rounded-lg hover:bg-stone-50 transition-colors"
              >
                Cancel
              </Link>
              <button
                type="submit"
                disabled={isSubmitting}
                className={`px-6 py-3 rounded-lg transition-all duration-200 flex items-center space-x-2 ${
                  isSubmitting 
                    ? "bg-stone-400 cursor-not-allowed text-white" 
                    : "bg-stone-800 hover:bg-stone-700 text-white hover:shadow-lg"
                }`}
              >
                {isSubmitting ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>Submitting...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Submit Request</span>
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      </motion.div>
    </main>
  );
};

export default CCPARequestForm;