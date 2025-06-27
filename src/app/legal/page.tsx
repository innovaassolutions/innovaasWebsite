import React from 'react';

export default function LegalPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Legal Information
          </h1>
          <p className="text-xl text-gray-600">
            Important legal documents and policies
          </p>
        </div>

        <div className="bg-white shadow-lg rounded-lg p-8">
          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Terms of Service
              </h2>
              <div className="prose max-w-none text-gray-600">
                <p>
                  By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement.
                </p>
                <p>
                  Innovaas Solutions Pte. Ltd. reserves the right to modify these terms at any time. Your continued use of the website constitutes acceptance of any changes.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Privacy Policy
              </h2>
              <div className="prose max-w-none text-gray-600">
                <p>
                  We are committed to protecting your privacy. This policy describes how we collect, use, and safeguard your personal information.
                </p>
                <p>
                  We collect information you provide directly to us, such as when you contact us or sign up for our services.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Cookie Policy
              </h2>
              <div className="prose max-w-none text-gray-600">
                <p>
                  This website uses cookies to enhance your browsing experience and provide personalized content.
                </p>
                <p>
                  You can control cookie settings through your browser preferences.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Contact Information
              </h2>
              <div className="prose max-w-none text-gray-600">
                <p>
                  For questions about these legal documents, please contact us at:
                </p>
                <p>
                  <strong>Email:</strong> legal@innovaas.com<br />
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