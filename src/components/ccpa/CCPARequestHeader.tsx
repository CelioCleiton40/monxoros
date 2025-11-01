import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { CCPARequestHeaderProps } from '../../types/ccpaRequest';

const CCPARequestHeader: React.FC<CCPARequestHeaderProps> = ({
  title = 'CCPA Request Form',
  subtitle = 'Exercise your rights under the California Consumer Privacy Act',
  backLink = '/consumer-rights',
  backText = 'Back to Consumer Rights'
}) => {
  return (
    <header className="bg-white shadow-sm border-b border-stone-200">
      <div className="max-w-4xl mx-auto px-4 py-6">
        <Link 
          to={backLink} 
          className="inline-flex items-center text-stone-600 hover:text-stone-800 transition-colors mb-4"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          {backText}
        </Link>
        <h1 className="text-3xl font-light text-stone-800">{title}</h1>
        <p className="text-stone-600 mt-2">{subtitle}</p>
      </div>
    </header>
  );
};

export default CCPARequestHeader;