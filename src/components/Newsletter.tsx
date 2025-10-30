import { motion } from "framer-motion";
import { useState } from "react";
import { Mail, Send, CheckCircle, AlertCircle, Loader2 } from "lucide-react";
import type { NewsletterFormState } from "../types/newsletter";
import NewsletterService from "../services/newsletterService";
import { validateAndNormalizeEmail } from "../utils/validation";
import { getNewsletterConfig } from "../config/newsletter";

const Newsletter = () => {
  const [formState, setFormState] = useState<NewsletterFormState>({
    email: "",
    isLoading: false,
    isSubmitted: false,
    error: null,
    successMessage: null
  });

  const newsletterService = new NewsletterService(getNewsletterConfig());

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Reset previous states
    setFormState(prev => ({
      ...prev,
      isLoading: true,
      error: null,
      successMessage: null
    }));

    try {
      // Validate email before sending
      const validation = validateAndNormalizeEmail(formState.email);
      
      if (!validation.isValid) {
        setFormState(prev => ({
          ...prev,
          isLoading: false,
          error: validation.error || 'Invalid email'
        }));
        return;
      }

      // Prepare data to send
      const subscriptionData = {
        email: validation.normalizedEmail,
        name: '' // Google Sheets usa apenas name e email
      };

      // Subscribe to newsletter
      const result = await newsletterService.subscribe(subscriptionData);

      if (result.success) {
        setFormState(prev => ({
          ...prev,
          isLoading: false,
          isSubmitted: true,
          successMessage: result.message,
          email: ""
        }));

        // Reset success state after 5 seconds
        setTimeout(() => {
          setFormState(prev => ({
            ...prev,
            isSubmitted: false,
            successMessage: null
          }));
        }, 5000);
      } else {
        setFormState(prev => ({
          ...prev,
          isLoading: false,
          error: result.message
        }));
      }
    } catch {
      setFormState(prev => ({
        ...prev,
        isLoading: false,
        error: 'Internal error. Please try again later.'
      }));
    }
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormState(prev => ({
      ...prev,
      email: e.target.value,
      error: null // Clear error when user starts typing
    }));
  };

  return (
    <section className="py-20 bg-stone-900 text-white">
      <div className="max-w-5xl mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl mx-auto text-center"
        >
          <div className="flex justify-center mb-6">
            <Mail className="w-12 h-12 text-stone-400" />
          </div>

          <h2 className="text-3xl md:text-4xl font-light mb-4">
            Stay Connected
          </h2>

          <p className="text-stone-300 text-lg mb-8 leading-relaxed">
            Receive exclusive updates about upcoming expeditions, photography tips, 
            and behind-the-scenes stories from the Sertão.
          </p>

          {/* Error Message */}
          {formState.error && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-red-900/50 border border-red-700 text-red-200 px-4 py-3 rounded-lg mb-6 flex items-center gap-2"
            >
              <AlertCircle className="w-5 h-5 flex-shrink-0" />
              <p className="text-sm">{formState.error}</p>
            </motion.div>
          )}

          {/* Success Message */}
          {formState.isSubmitted && formState.successMessage && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-green-900/50 border border-green-700 text-green-200 px-6 py-4 rounded-lg max-w-md mx-auto mb-6 flex items-center gap-3"
            >
              <CheckCircle className="w-6 h-6 flex-shrink-0" />
              <div>
                <p className="font-medium">Successfully subscribed!</p>
                <p className="text-sm text-green-300 mt-1">
                  {formState.successMessage}
                </p>
              </div>
            </motion.div>
          )}

          {/* Newsletter Form */}
          {!formState.isSubmitted && (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <label htmlFor="email" className="sr-only">Email address</label>
              <input
                id="email"
                type="email"
                value={formState.email}
                onChange={handleEmailChange}
                placeholder="Enter your email"
                aria-label="Email address"
                disabled={formState.isLoading}
                className={`flex-1 px-4 py-3 rounded-lg bg-stone-800 border text-white placeholder-stone-400 focus:outline-none transition-colors ${
                  formState.error 
                    ? 'border-red-500 focus:border-red-400' 
                    : 'border-stone-700 focus:border-stone-500'
                } ${formState.isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
                required
              />
              <motion.button
                type="submit"
                aria-label="Subscribe to newsletter"
                disabled={formState.isLoading || !formState.email.trim()}
                whileHover={!formState.isLoading ? { scale: 1.05 } : {}}
                whileTap={!formState.isLoading ? { scale: 0.95 } : {}}
                className={`px-6 py-3 rounded-lg font-medium transition-colors flex items-center justify-center gap-2 min-w-[120px] ${
                  formState.isLoading || !formState.email.trim()
                    ? 'bg-stone-700 cursor-not-allowed opacity-50'
                    : 'bg-stone-600 hover:bg-stone-500'
                }`}
              >
                {formState.isLoading ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Subscribing...
                  </>
                ) : (
                  <>
                    Subscribe
                    <Send className="w-4 h-4" />
                  </>
                )}
              </motion.button>
            </form>
          )}

          <p className="text-stone-500 text-sm mt-6">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Newsletter;
