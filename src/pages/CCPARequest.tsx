import React, { useState } from 'react';
import CCPARequestHeader from '../components/ccpa/CCPARequestHeader';
import CCPARequestForm from '../components/ccpa/CCPARequestForm';
import CCPARequestSuccess from '../components/ccpa/CCPARequestSuccess';
import { CCPARequestFormData } from '../schemas/ccpaRequestSchema';

const CCPARequest: React.FC = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (data: CCPARequestFormData) => {
    setIsSubmitting(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      console.log('CCPA Request submitted:', data);
      setIsSubmitted(true);
    } catch (error) {
      console.error('Error submitting CCPA request:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return <CCPARequestSuccess />;
  }

  return (
    <div className="min-h-screen bg-stone-50">
      <CCPARequestHeader />
      <CCPARequestForm onSubmit={handleSubmit} isSubmitting={isSubmitting} />
    </div>
  );
};

export default CCPARequest;