import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Camera, X, Users, Calendar, MapPin } from 'lucide-react';

const FloatingWidget = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show widget after scrolling 100px
      setIsVisible(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleApplyClick = () => {
    // Scroll to invitation section
    const invitationSection = document.getElementById('invitation');
    if (invitationSection) {
      invitationSection.scrollIntoView({ behavior: 'smooth' });
    }
    setIsExpanded(false);
  };

  const expeditionDetails = [
    {
      icon: <Calendar className="w-4 h-4" />,
      label: "7 Days",
      detail: "March, 2026"
    },
    {
      icon: <Users className="w-4 h-4" />,
      label: "6 Spots",
      detail: "Only 3 remaining"
    },
    {
      icon: <MapPin className="w-4 h-4" />,
      label: "Sertão",
      detail: "Northeast Brazil"
    }
  ];

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-6 right-6 z-50"
        >
          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 10 }}
                transition={{ duration: 0.2 }}
                className="mb-4 bg-white rounded-2xl shadow-2xl border border-stone-200 p-6 w-80"
              >
                {/* Header */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <Camera className="w-5 h-5 text-stone-600" />
                    <h3 className="font-medium text-stone-800">
                      Sertão Expedition
                    </h3>
                  </div>
                  <button
                    onClick={() => setIsExpanded(false)}
                    className="text-stone-400 hover:text-stone-600 transition-colors"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>

                {/* Details */}
                <div className="space-y-3 mb-6">
                  {expeditionDetails.map((detail, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className="flex items-center space-x-3"
                    >
                      <div className="text-stone-500">
                        {detail.icon}
                      </div>
                      <div>
                        <div className="text-sm font-medium text-stone-800">
                          {detail.label}
                        </div>
                        <div className="text-xs text-stone-500">
                          {detail.detail}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* CTA Button */}
                <motion.button
                  onClick={handleApplyClick}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-stone-800 text-white py-3 px-4 rounded-lg font-medium text-sm hover:bg-stone-900 transition-colors duration-300"
                >
                  Apply Now
                </motion.button>

                {/* Urgency indicator */}
                <div className="mt-3 text-center">
                  <span className="text-xs text-red-600 font-medium">
                    ⚡ Limited spots available
                  </span>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Main floating button */}
          <motion.button
            onClick={() => setIsExpanded(!isExpanded)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-stone-800 text-white p-4 rounded-full shadow-2xl hover:bg-stone-900 transition-colors duration-300 relative overflow-hidden group"
          >
            {/* Pulse animation */}
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.7, 0, 0.7]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute inset-0 bg-stone-600 rounded-full"
            />
            
            {/* Icon */}
            <motion.div
              animate={{ rotate: isExpanded ? 180 : 0 }}
              transition={{ duration: 0.3 }}
              className="relative z-10"
            >
              {isExpanded ? (
                <X className="w-6 h-6" />
              ) : (
                <Camera className="w-6 h-6" />
              )}
            </motion.div>

            {/* Notification dot */}
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full border-2 border-white"
            />
          </motion.button>

          {/* Tooltip for first-time visitors */}
          {!isExpanded && (
            <motion.div
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 1 }}
              className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-stone-800 text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap pointer-events-none"
            >
              Only 3 spots left!
              <div className="absolute left-full top-1/2 -translate-y-1/2 border-4 border-transparent border-l-stone-800" />
            </motion.div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default FloatingWidget;