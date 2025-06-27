import React from 'react';

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Privacy Policy
          </h1>
          <p className="text-xl text-gray-600">
            How we protect and handle your personal information
          </p>
        </div>

        <div className="bg-white shadow-lg rounded-lg p-8">
          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Information We Collect
              </h2>
              <div className="prose max-w-none text-gray-600">
                <p>
                  We collect information you provide directly to us, including:
                </p>
                <ul className="list-disc pl-6 mt-2">
                  <li>Name and contact information</li>
                  <li>Company and job title</li>
                  <li>Communication preferences</li>
                  <li>Information you provide through our contact forms</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                How We Use Your Information
              </h2>
              <div className="prose max-w-none text-gray-600">
                <p>
                  We use the information we collect to:
                </p>
                <ul className="list-disc pl-6 mt-2">
                  <li>Provide and improve our services</li>
                  <li>Communicate with you about our services</li>
                  <li>Send you marketing materials (with your consent)</li>
                  <li>Comply with legal obligations</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Information Sharing
              </h2>
              <div className="prose max-w-none text-gray-600">
                <p>
                  We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as described in this policy.
                </p>
                <p>
                  We may share your information with service providers who assist us in operating our website and providing our services.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Data Security
              </h2>
              <div className="prose max-w-none text-gray-600">
                <p>
                  We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
                </p>
                <p>
                  However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Your Rights
              </h2>
              <div className="prose max-w-none text-gray-600">
                <p>
                  You have the right to:
                </p>
                <ul className="list-disc pl-6 mt-2">
                  <li>Access your personal information</li>
                  <li>Correct inaccurate information</li>
                  <li>Request deletion of your information</li>
                  <li>Opt out of marketing communications</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Contact Us
              </h2>
              <div className="prose max-w-none text-gray-600">
                <p>
                  If you have questions about this privacy policy, please contact us at:
                </p>
                <p>
                  <strong>Email:</strong> privacy@innovaas.com<br />
                  <strong>Phone:</strong> +65 1234 5678<br />
                  <strong>Address:</strong> 123 Business Street, Singapore 123456
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
} 