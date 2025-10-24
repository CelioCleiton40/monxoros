import { motion } from "framer-motion";
import { useState } from "react";
import { Mail, Send } from "lucide-react";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      console.log("Newsletter subscription:", email);
      setTimeout(() => {
        setIsSubmitted(false);
        setEmail("");
      }, 3000);
    }
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

          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <label htmlFor="email" className="sr-only">Email address</label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                aria-label="Email address"
                className="flex-1 px-4 py-3 rounded-lg bg-stone-800 border border-stone-700 text-white placeholder-stone-400 focus:outline-none focus:border-stone-500 transition-colors"
                required
              />
              <motion.button
                type="submit"
                aria-label="Subscribe to newsletter"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-stone-600 hover:bg-stone-500 rounded-lg font-medium transition-colors flex items-center justify-center gap-2"
              >
                Subscribe
                <Send className="w-4 h-4" />
              </motion.button>
            </form>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-green-800 text-green-100 px-6 py-4 rounded-lg max-w-md mx-auto"
            >
              <p className="font-medium">Thank you for subscribing!</p>
              <p className="text-sm text-green-200 mt-1">
                You'll receive our next update soon.
              </p>
            </motion.div>
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
