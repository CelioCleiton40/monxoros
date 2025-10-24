import React from 'react';

interface FormFieldProps {
  label: string;
  error?: string;
  children: React.ReactNode;
  required?: boolean;
}

export const FormField: React.FC<FormFieldProps> = ({ 
  label, 
  error, 
  children, 
  required = false 
}) => (
  <div>
    <label className="block text-sm font-medium text-stone-700 mb-2">
      {label}
      {required && <span className="text-red-500 ml-1">*</span>}
    </label>
    {children}
    {error && (
      <p className="text-red-500 text-sm mt-1" role="alert">
        {error}
      </p>
    )}
  </div>
);

export default FormField;