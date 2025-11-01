import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Shield, Eye, Trash2, UserX, FileText, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const ConsumerRights: React.FC = () => {
  return (
    <div className="min-h-screen bg-stone-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-stone-200">
        <div className="max-w-4xl mx-auto px-4 py-6">
          <Link 
            to="/" 
            className="inline-flex items-center text-stone-600 hover:text-stone-800 transition-colors mb-4"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
          <h1 className="text-3xl font-light text-stone-800">Consumer Rights</h1>
          <p className="text-stone-600 mt-2">Your rights under the California Consumer Privacy Act (CCPA)</p>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-12"
        >
          {/* Introduction */}
          <section className="bg-white rounded-lg p-8 shadow-sm">
            <div className="flex items-center mb-6">
              <Shield className="w-8 h-8 text-stone-600 mr-3" />
              <h2 className="text-2xl font-light text-stone-800">Your Privacy Rights</h2>
            </div>
            <p className="text-stone-600 leading-relaxed mb-4">
              Under the California Consumer Privacy Act (CCPA), California residents have specific rights 
              regarding their personal information. We are committed to protecting your privacy and 
              ensuring you can exercise these rights easily.
            </p>
            <p className="text-stone-600 leading-relaxed">
              This page explains your rights and how to exercise them. If you have any questions, 
              please don't hesitate to contact us.
            </p>
          </section>

          {/* Rights Overview */}
          <section className="grid md:grid-cols-2 gap-6">
            {/* Right to Know */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white rounded-lg p-6 shadow-sm"
            >
              <div className="flex items-center mb-4">
                <Eye className="w-6 h-6 text-blue-600 mr-3" />
                <h3 className="text-xl font-medium text-stone-800">Right to Know</h3>
              </div>
              <p className="text-stone-600 mb-4">
                You have the right to request information about:
              </p>
              <ul className="text-stone-600 space-y-2 text-sm">
                <li>• Categories of personal information we collect</li>
                <li>• Sources of personal information</li>
                <li>• Business purposes for collecting information</li>
                <li>• Categories of third parties we share with</li>
                <li>• Specific pieces of personal information we have</li>
              </ul>
            </motion.div>

            {/* Right to Delete */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-lg p-6 shadow-sm"
            >
              <div className="flex items-center mb-4">
                <Trash2 className="w-6 h-6 text-red-600 mr-3" />
                <h3 className="text-xl font-medium text-stone-800">Right to Delete</h3>
              </div>
              <p className="text-stone-600 mb-4">
                You have the right to request deletion of:
              </p>
              <ul className="text-stone-600 space-y-2 text-sm">
                <li>• Personal information we collected from you</li>
                <li>• Information in our records and systems</li>
                <li>• Data shared with service providers</li>
              </ul>
              <p className="text-stone-500 text-xs mt-4">
                *Some information may be retained for legal compliance
              </p>
            </motion.div>

            {/* Right to Opt-Out */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-white rounded-lg p-6 shadow-sm"
            >
              <div className="flex items-center mb-4">
                <UserX className="w-6 h-6 text-orange-600 mr-3" />
                <h3 className="text-xl font-medium text-stone-800">Right to Opt-Out</h3>
              </div>
              <p className="text-stone-600 mb-4">
                You have the right to opt-out of:
              </p>
              <ul className="text-stone-600 space-y-2 text-sm">
                <li>• Sale of personal information</li>
                <li>• Sharing for targeted advertising</li>
                <li>• Marketing communications</li>
                <li>• Data processing for certain purposes</li>
              </ul>
            </motion.div>

            {/* Right to Non-Discrimination */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-white rounded-lg p-6 shadow-sm"
            >
              <div className="flex items-center mb-4">
                <Shield className="w-6 h-6 text-green-600 mr-3" />
                <h3 className="text-xl font-medium text-stone-800">Right to Non-Discrimination</h3>
              </div>
              <p className="text-stone-600 mb-4">
                We will not discriminate against you for exercising your rights:
              </p>
              <ul className="text-stone-600 space-y-2 text-sm">
                <li>• No denial of goods or services</li>
                <li>• No different prices or rates</li>
                <li>• No different quality of services</li>
                <li>• No retaliation of any kind</li>
              </ul>
            </motion.div>
          </section>

          {/* How to Exercise Rights */}
          <section className="bg-white rounded-lg p-8 shadow-sm">
            <div className="flex items-center mb-6">
              <FileText className="w-8 h-8 text-stone-600 mr-3" />
              <h2 className="text-2xl font-light text-stone-800">How to Exercise Your Rights</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-medium text-stone-800 mb-4">Submit a Request</h3>
                <p className="text-stone-600 mb-4">
                  You can exercise your rights by submitting a request through our 
                  secure form or by contacting us directly.
                </p>
                <Link
                  to="/ccpa-request"
                  className="inline-flex items-center px-6 py-3 bg-stone-800 text-white rounded-lg hover:bg-stone-700 transition-colors"
                >
                  <FileText className="w-4 h-4 mr-2" />
                  Submit CCPA Request
                </Link>
              </div>

              <div>
                <h3 className="text-lg font-medium text-stone-800 mb-4">Contact Information</h3>
                <div className="space-y-3">
                  <div className="flex items-center text-stone-600">
                    <Mail className="w-4 h-4 mr-3" />
                    <span>privacy@sertaoexpeditions.com</span>
                  </div>
                  <p className="text-stone-500 text-sm">
                    We will respond to your request within 45 days as required by law.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Verification Process */}
          <section className="bg-stone-100 rounded-lg p-8">
            <h2 className="text-2xl font-light text-stone-800 mb-6">Verification Process</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-stone-600 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                  1
                </div>
                <h3 className="font-medium text-stone-800 mb-2">Submit Request</h3>
                <p className="text-stone-600 text-sm">
                  Fill out our secure form with your information and request details.
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-stone-600 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                  2
                </div>
                <h3 className="font-medium text-stone-800 mb-2">Identity Verification</h3>
                <p className="text-stone-600 text-sm">
                  We may ask for additional information to verify your identity.
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-stone-600 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                  3
                </div>
                <h3 className="font-medium text-stone-800 mb-2">Response</h3>
                <p className="text-stone-600 text-sm">
                  We'll process your request and respond within 45 days.
                </p>
              </div>
            </div>
          </section>

          {/* Additional Information */}
          <section className="bg-white rounded-lg p-8 shadow-sm">
            <h2 className="text-2xl font-light text-stone-800 mb-6">Additional Information</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-medium text-stone-800 mb-2">Authorized Agents</h3>
                <p className="text-stone-600 text-sm">
                  You may designate an authorized agent to make requests on your behalf. 
                  The agent must provide proof of authorization.
                </p>
              </div>
              <div>
                <h3 className="font-medium text-stone-800 mb-2">Response Time</h3>
                <p className="text-stone-600 text-sm">
                  We will acknowledge your request within 10 business days and provide 
                  a complete response within 45 days.
                </p>
              </div>
              <div>
                <h3 className="font-medium text-stone-800 mb-2">No Fee</h3>
                <p className="text-stone-600 text-sm">
                  There is no fee to submit a request or exercise your rights under the CCPA.
                </p>
              </div>
            </div>
          </section>
        </motion.div>
      </main>
    </div>
  );
};

export default ConsumerRights;