import { useState } from "react";
import { useCookieConsent } from "@/hooks/useCookieConsent";

export default function CookiePreferences() {
  const { hasConsent, updateConsent, clearConsent } = useCookieConsent();
  const [isUpdating, setIsUpdating] = useState(false);

  const handleToggleConsent = async () => {
    setIsUpdating(true);
    try {
      if (hasConsent === null) {
        updateConsent(true);
      } else {
        updateConsent(!hasConsent);
      }
      
      // Small delay for visual feedback
      setTimeout(() => {
        setIsUpdating(false);
        // Reload page to apply Speed Insights changes
        window.location.reload();
      }, 500);
    } catch (error) {
      console.error('Error updating preferences:', error);
      setIsUpdating(false);
    }
  };

  const handleClearConsent = () => {
    clearConsent();
    window.location.reload();
  };

  const getConsentStatus = () => {
    if (hasConsent === null) return "Not defined";
    return hasConsent ? "Accepted" : "Declined";
  };

  const getStatusColor = () => {
    if (hasConsent === null) return "text-gray-600";
    return hasConsent ? "text-green-600" : "text-red-600";
  };

  return (
    <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">
        Manage Cookie Preferences
      </h3>
      
      <div className="space-y-4">
        <div className="flex items-center justify-between p-4 bg-white rounded-md border">
          <div className="flex-1">
            <h4 className="font-medium text-gray-900">Performance Cookies</h4>
            <p className="text-sm text-gray-600 mt-1">
              We use Vercel Speed Insights to collect anonymous data about 
              site performance and improve your browsing experience.
            </p>
            <p className="text-sm mt-2">
              <span className="font-medium">Current status: </span>
              <span className={`font-medium ${getStatusColor()}`}>
                {getConsentStatus()}
              </span>
            </p>
          </div>
          
          <div className="ml-4 flex flex-col gap-2">
            <button
              onClick={handleToggleConsent}
              disabled={isUpdating}
              className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                hasConsent 
                  ? 'bg-red-100 text-red-700 hover:bg-red-200 focus:ring-red-500' 
                  : 'bg-green-100 text-green-700 hover:bg-green-200 focus:ring-green-500'
              } focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed`}
            >
              {isUpdating ? (
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin"></div>
                  Updating...
                </div>
              ) : (
                hasConsent ? 'Decline' : 'Accept'
              )}
            </button>
            
            {hasConsent !== null && (
              <button
                onClick={handleClearConsent}
                className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transition-colors"
              >
                Reset
              </button>
            )}
          </div>
        </div>
        
        <div className="text-sm text-gray-600 bg-blue-50 p-3 rounded-md border border-blue-200">
          <div className="flex items-start gap-2">
            <svg className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <p>
              <strong>Note:</strong> Changes to cookie preferences require a page reload 
              to be fully applied. Essential cookies for site functionality 
              (such as language preferences) cannot be disabled.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}