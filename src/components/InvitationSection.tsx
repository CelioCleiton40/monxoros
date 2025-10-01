import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { X, Calendar, Users, MapPin, DollarSign, Check } from 'lucide-react';
import { useForm } from 'react-hook-form';

interface FormData {
  name: string;
  email: string;
  phone: string;
  experience: string;
  motivation: string;
  dietary: string;
}

export default function InvitationSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    // Simulate form submission
    console.log('Form submitted:', data);
    setIsSubmitted(true);
    setTimeout(() => {
      setIsModalOpen(false);
      setIsSubmitted(false);
      reset();
    }, 2000);
  };

  const expeditionDetails = [
    {
      icon: <Calendar className="w-6 h-6" />,
      label: "Dates",
      value: "January 15-21, 2025"
    },
    {
      icon: <Users className="w-6 h-6" />,
      label: "Group Size",
      value: "5 Photographers Only"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      label: "Location",
      value: "Northeast Brazil"
    },
    {
      icon: <DollarSign className="w-6 h-6" />,
      label: "Investment",
      value: "To Be Agreed"
    }
  ];

  const included = [
    "7 days of guided photography instruction",
    "All accommodation (boutique hotels & eco-lodges)",
    "All meals featuring regional cuisine",
    "Private transportation throughout",
    "Professional photography guide",
    "Cultural experiences & community visits",
    "Portfolio review & critique sessions",
    "Digital resource library"
  ];

  return (
    <section id="invitation" className="py-20 bg-stone-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light mb-6">
            Your Invitation Awaits
          </h2>
          <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto font-light leading-relaxed">
            Join us for an intimate photographic journey through Brazil's most captivating landscape. 
            Limited to just 5 photographers for a truly personal experience.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Expedition Details */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-light mb-8">Expedition Details</h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              {expeditionDetails.map((detail, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex items-center space-x-4 p-4 bg-white/5 rounded-lg backdrop-blur-sm"
                >
                  <div className="text-white/70">
                    {detail.icon}
                  </div>
                  <div>
                    <p className="text-sm text-white/60 font-medium">{detail.label}</p>
                    <p className="text-white font-light">{detail.value}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* What's Included */}
            <div className="mb-8">
              <h4 className="text-xl font-light mb-4">What's Included</h4>
              <div className="space-y-3">
                {included.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.05 }}
                    className="flex items-start space-x-3"
                  >
                    <Check className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                    <span className="text-white/80 font-light">{item}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:pl-8"
          >
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h3 className="text-2xl font-light mb-6 text-center">Reserve Your Place</h3>
              
              <div className="text-center mb-8">
                <div className="text-4xl font-light mb-2">Only 5 Spots</div>
                <div className="text-white/70 font-light">Available for this exclusive expedition</div>
                <div className="mt-4 text-sm text-white/60">
                  <span className="inline-block w-2 h-2 bg-green-400 rounded-full mr-2"></span>
                  3 spots remaining
                </div>
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsModalOpen(true)}
                className="w-full bg-white text-stone-900 py-4 rounded-full font-medium tracking-wide hover:bg-white/90 transition-colors duration-300 mb-6"
              >
                Apply Now
              </motion.button>

              <div className="text-center text-sm text-white/60 space-y-2">
                <p>• No payment required to apply</p>
                <p>• Personal interview process</p>
                <p>• Full refund if not selected</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Application Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setIsModalOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-2xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            >
              {!isSubmitted ? (
                <>
                  <div className="flex justify-between items-center mb-6">
                    <h3 className="text-2xl font-light text-stone-800">Application Form</h3>
                    <button
                      onClick={() => setIsModalOpen(false)}
                      className="text-stone-500 hover:text-stone-700"
                    >
                      <X className="w-6 h-6" />
                    </button>
                  </div>

                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-stone-700 mb-2">
                          Full Name *
                        </label>
                        <input
                          {...register('name', { required: 'Name is required' })}
                          className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-stone-500 focus:border-transparent"
                          placeholder="Your full name"
                        />
                        {errors.name && (
                          <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
                        )}
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-stone-700 mb-2">
                          Email Address *
                        </label>
                        <input
                          {...register('email', { 
                            required: 'Email is required',
                            pattern: {
                              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                              message: 'Invalid email address'
                            }
                          })}
                          type="email"
                          className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-stone-500 focus:border-transparent"
                          placeholder="your@email.com"
                        />
                        {errors.email && (
                          <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                        )}
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-stone-700 mb-2">
                        Phone Number
                      </label>
                      <input
                        {...register('phone')}
                        className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-stone-500 focus:border-transparent"
                        placeholder="Your phone number"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-stone-700 mb-2">
                        Photography Experience *
                      </label>
                      <select
                        {...register('experience', { required: 'Please select your experience level' })}
                        className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-stone-500 focus:border-transparent"
                      >
                        <option value="">Select your level</option>
                        <option value="beginner">Beginner (0-2 years)</option>
                        <option value="intermediate">Intermediate (2-5 years)</option>
                        <option value="advanced">Advanced (5+ years)</option>
                        <option value="professional">Professional</option>
                      </select>
                      {errors.experience && (
                        <p className="text-red-500 text-sm mt-1">{errors.experience.message}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-stone-700 mb-2">
                        Why do you want to join this expedition? *
                      </label>
                      <textarea
                        {...register('motivation', { required: 'Please tell us your motivation' })}
                        rows={4}
                        className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-stone-500 focus:border-transparent"
                        placeholder="Share your motivation and what you hope to achieve..."
                      />
                      {errors.motivation && (
                        <p className="text-red-500 text-sm mt-1">{errors.motivation.message}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-stone-700 mb-2">
                        Dietary Restrictions or Special Requirements
                      </label>
                      <textarea
                        {...register('dietary')}
                        rows={2}
                        className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-stone-500 focus:border-transparent"
                        placeholder="Any dietary restrictions, allergies, or special requirements..."
                      />
                    </div>

                    <div className="flex justify-end space-x-4 pt-6">
                      <button
                        type="button"
                        onClick={() => setIsModalOpen(false)}
                        className="px-6 py-3 border border-stone-300 text-stone-700 rounded-lg hover:bg-stone-50 transition-colors"
                      >
                        Cancel
                      </button>
                      <button
                        type="submit"
                        className="px-6 py-3 bg-stone-800 text-white rounded-lg hover:bg-stone-700 transition-colors"
                      >
                        Submit Application
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
                  <p className="text-stone-600">
                    Thank you for your interest. We'll review your application and get back to you within 48 hours.
                  </p>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}