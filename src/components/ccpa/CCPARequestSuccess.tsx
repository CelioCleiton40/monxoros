import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { CCPARequestSuccessProps } from '../../types/ccpaRequest';

const CCPARequestSuccess: React.FC<CCPARequestSuccessProps> = ({ onReturnHome }) => {
  return (
    <div className="min-h-screen bg-stone-50 flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white rounded-lg p-8 shadow-lg max-w-md mx-4 text-center"
      >
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle className="w-8 h-8 text-green-600" />
        </div>
        <h2 className="text-2xl font-light text-stone-800 mb-4">Request Submitted</h2>
        <p className="text-stone-600 mb-6">
          Your CCPA request has been submitted successfully. We will review your request 
          and respond within 45 days as required by law.
        </p>
        <p className="text-stone-500 text-sm mb-6">
          You will receive a confirmation email shortly with your request details 
          and a reference number for tracking.
        </p>
        <Link
          to="/"
          onClick={onReturnHome}
          className="inline-flex items-center px-6 py-3 bg-stone-800 text-white rounded-lg hover:bg-stone-700 transition-colors"
        >
          Return to Home
        </Link>
      </motion.div>
    </div>
  );
};

export default CCPARequestSuccess;