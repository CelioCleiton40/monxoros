import { motion } from "framer-motion";
import { Shield, Eye, Lock, Users, FileText, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import CookiePreferences from "@/components/CookiePreferences";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-stone-50 py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-lg shadow-lg p-8 md:p-12"
        >
          {/* Header */}
          <div className="text-center mb-12">
            <Shield className="w-16 h-16 text-stone-600 mx-auto mb-4" />
            <h1 className="text-4xl font-light text-stone-800 mb-4">
              Privacy Policy
            </h1>
            <p className="text-stone-600 text-lg">
              Last updated: {new Date().toLocaleDateString('en-US')}
            </p>
          </div>

          {/* Introduction */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-stone-800 mb-4 flex items-center">
              <Eye className="w-6 h-6 mr-2" />
              Introduction
            </h2>
            <p className="text-stone-600 leading-relaxed mb-4">
              Monxoro Expeditions ("we", "our" or "company") is committed to protecting 
              your privacy. This Privacy Policy explains how we collect, use, 
              disclose and protect your information when you visit our website or 
              sign up for our services.
            </p>
            <p className="text-stone-600 leading-relaxed">
              This policy is in compliance with the California Consumer Privacy Act 
              (CCPA) and other applicable privacy laws.
            </p>
          </section>

          {/* Information We Collect */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-stone-800 mb-4 flex items-center">
              <FileText className="w-6 h-6 mr-2" />
              Information We Collect
            </h2>
            
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-medium text-stone-700 mb-2">
                  Information Provided Voluntarily
                </h3>
                <ul className="list-disc list-inside text-stone-600 space-y-2 ml-4">
                  <li>Email address (newsletter and application form)</li>
                  <li>Full name (application form)</li>
                  <li>Phone number (application form)</li>
                  <li>Travel interest information</li>
                  <li>Queries and messages sent through forms</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-medium text-stone-700 mb-2">
                  Information Collected Automatically
                </h3>
                <ul className="list-disc list-inside text-stone-600 space-y-2 ml-4">
                  <li>Site performance data (via Vercel Speed Insights)</li>
                  <li>Browsing and site usage information</li>
                  <li>IP address and approximate location</li>
                  <li>Device type and browser</li>
                  <li>Pages visited and time spent</li>
                </ul>
              </div>
            </div>
          </section>

          {/* How We Use Information */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-stone-800 mb-4 flex items-center">
              <Users className="w-6 h-6 mr-2" />
              How We Use Your Information
            </h2>
            <ul className="list-disc list-inside text-stone-600 space-y-2 ml-4">
              <li>Send newsletters and communications about photography expeditions</li>
              <li>Process applications for workshops and expeditions</li>
              <li>Respond to queries and provide customer support</li>
              <li>Improve the performance and functionality of our website</li>
              <li>Analyze usage trends to enhance our services</li>
              <li>Comply with legal and regulatory obligations</li>
            </ul>
          </section>

          {/* Information Sharing */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-stone-800 mb-4 flex items-center">
              <Mail className="w-6 h-6 mr-2" />
              Information Sharing
            </h2>
            <p className="text-stone-600 leading-relaxed mb-4">
              We do not sell, rent or commercialize your personal information. 
              We may share your information only in the following circumstances:
            </p>
            <ul className="list-disc list-inside text-stone-600 space-y-2 ml-4">
              <li>With third-party service providers (Google Sheets, Gmail API)</li>
              <li>To comply with legal obligations or court orders</li>
              <li>To protect our rights, property or safety</li>
              <li>With your explicit consent</li>
            </ul>
          </section>

          {/* Data Security */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-stone-800 mb-4 flex items-center">
              <Lock className="w-6 h-6 mr-2" />
              Data Security
            </h2>
            <p className="text-stone-600 leading-relaxed mb-4">
              We implement appropriate technical and organizational security measures 
              to protect your personal information against unauthorized access, 
              alteration, disclosure or destruction.
            </p>
            <ul className="list-disc list-inside text-stone-600 space-y-2 ml-4">
              <li>Data encryption in transit and at rest</li>
              <li>Input data validation and sanitization</li>
              <li>Restricted access to personal information</li>
              <li>Regular security monitoring</li>
            </ul>
          </section>

          {/* CCPA Rights */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-stone-800 mb-4">
              Your Rights under CCPA (California)
            </h2>
            <p className="text-stone-600 leading-relaxed mb-4">
              If you are a California resident, you have the following rights:
            </p>
            <ul className="list-disc list-inside text-stone-600 space-y-2 ml-4">
              <li><strong>Right to Know:</strong> Request information about collected data</li>
              <li><strong>Right to Delete:</strong> Request deletion of your personal data</li>
              <li><strong>Right to Opt-Out:</strong> Refuse the sale of personal data</li>
              <li><strong>Right to Non-Discrimination:</strong> Not be discriminated against for exercising your rights</li>
            </ul>
            <p className="text-stone-600 leading-relaxed mt-4">
              To exercise these rights, contact us via email: 
              <a href="mailto:privacy@monxorosexpedition.com" className="text-stone-800 underline">
                privacy@monxorosexpedition.com
              </a>
            </p>
            <p className="text-stone-600 leading-relaxed mt-4">
              For more information about your rights and to submit requests online, visit our{" "}
              <Link to="/consumer-rights" className="text-stone-800 underline hover:text-stone-600">
                Consumer Rights page
              </Link>.
            </p>
          </section>

          {/* Data Retention */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-stone-800 mb-4">
              Data Retention
            </h2>
            <p className="text-stone-600 leading-relaxed">
              We retain your personal information only for as long as necessary to 
              fulfill the purposes described in this policy, unless a longer 
              retention period is required or permitted by law.
            </p>
          </section>

          {/* Cookies and Tracking */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-stone-800 mb-4">
              Cookies and Tracking Technologies
            </h2>
            <p className="text-stone-600 leading-relaxed mb-4">
              We use cookies and similar technologies to improve your experience 
              on our website. This includes:
            </p>
            <ul className="list-disc list-inside text-stone-600 space-y-2 ml-4 mb-6">
              <li>Performance cookies (Vercel Speed Insights)</li>
              <li>Functional cookies to improve navigation</li>
              <li>Site usage analysis for optimization</li>
            </ul>
            
            {/* Cookie Preferences Component */}
            <CookiePreferences />
          </section>

          {/* Contact Information */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-stone-800 mb-4">
              Contact
            </h2>
            <p className="text-stone-600 leading-relaxed mb-4">
              If you have questions about this Privacy Policy or want to 
              exercise your rights, contact us:
            </p>
            <div className="bg-stone-50 p-4 rounded-lg">
              <p className="text-stone-600">
                <strong>Email:</strong> privacy@monxorosexpedition.com<br />
                <strong>Phone:</strong> +1 (407) 485-0370<br />
                <strong>Address:</strong> Placid Lakes, FL, EUA
              </p>
            </div>
          </section>

          {/* Updates */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-stone-800 mb-4">
              Updates to this Policy
            </h2>
            <p className="text-stone-600 leading-relaxed">
              We may update this Privacy Policy periodically. 
              We will notify you of significant changes through our website 
              or by email. We recommend that you review this policy regularly.
            </p>
          </section>

          {/* Footer */}
          <div className="text-center pt-8 border-t border-stone-200">
            <p className="text-stone-500 text-sm">
              This policy is in compliance with CCPA, LGPD and other applicable privacy laws.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;