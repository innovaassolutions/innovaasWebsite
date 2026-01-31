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
                  <strong>Effective Date:</strong> 1 January 2025
                </p>
                <p>
                  These Terms of Service (&quot;Terms&quot;) govern your access to and use of the
                  website and services provided by Innovaas Solutions Pte. Ltd. (&quot;Innovaas&quot;,
                  &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;). By accessing or using our website and services, you
                  agree to be bound by these Terms.
                </p>

                <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-2">
                  1. Acceptance of Terms
                </h3>
                <p>
                  By accessing or using our website, you confirm that you have read, understood,
                  and agree to be bound by these Terms and our Privacy Policy. If you do not agree
                  to these Terms, you must not access or use our website or services.
                </p>

                <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-2">
                  2. Description of Services
                </h3>
                <p>
                  Innovaas provides industrial IoT, data analytics, and digital transformation
                  solutions for businesses. Our services include consulting, software development,
                  system integration, and managed services. The specific scope of services is
                  defined in individual agreements with our clients.
                </p>

                <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-2">
                  3. Intellectual Property
                </h3>
                <p>
                  All content on this website, including text, graphics, logos, images, software,
                  and other materials, is the property of Innovaas Solutions Pte. Ltd. or its
                  licensors and is protected by applicable intellectual property laws. You may not
                  reproduce, distribute, modify, or create derivative works from any content on
                  this website without our prior written consent.
                </p>

                <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-2">
                  4. Limitation of Liability
                </h3>
                <p>
                  To the fullest extent permitted by law, Innovaas shall not be liable for any
                  indirect, incidental, special, consequential, or punitive damages, or any loss
                  of profits or revenue, whether incurred directly or indirectly, or any loss of
                  data, use, goodwill, or other intangible losses, resulting from your access to
                  or use of (or inability to access or use) our website or services.
                </p>
                <p>
                  The information provided on this website is for general informational purposes
                  only and does not constitute professional advice. We make no warranties or
                  representations about the accuracy, completeness, or suitability of the
                  information on this website.
                </p>

                <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-2">
                  5. Governing Law
                </h3>
                <p>
                  These Terms shall be governed by and construed in accordance with the laws of
                  the Republic of Singapore. Any disputes arising out of or in connection with
                  these Terms shall be subject to the exclusive jurisdiction of the courts of
                  Singapore.
                </p>

                <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-2">
                  6. Changes to Terms
                </h3>
                <p>
                  We reserve the right to modify these Terms at any time. Changes will be
                  effective immediately upon posting to this website. Your continued use of the
                  website after any changes constitutes your acceptance of the revised Terms.
                  We encourage you to review these Terms periodically.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Cookie Policy
              </h2>
              <div className="prose max-w-none text-gray-600">
                <p>
                  This website uses cookies and similar tracking technologies to enhance your
                  browsing experience, analyse website traffic, and understand where our visitors
                  come from.
                </p>
                <p>
                  <strong>What are cookies?</strong> Cookies are small text files stored on your
                  device when you visit a website. They help the website remember your preferences
                  and improve your experience on subsequent visits.
                </p>
                <p>
                  <strong>Types of cookies we use:</strong>
                </p>
                <ul className="list-disc pl-6 mt-2">
                  <li>
                    <strong>Essential cookies:</strong> Required for the website to function
                    properly. These cannot be disabled.
                  </li>
                  <li>
                    <strong>Analytics cookies:</strong> Help us understand how visitors interact
                    with our website by collecting and reporting information anonymously.
                  </li>
                  <li>
                    <strong>Functional cookies:</strong> Enable enhanced functionality and
                    personalisation, such as remembering your preferences.
                  </li>
                </ul>
                <p>
                  <strong>Managing cookies:</strong> You can control and manage cookies through
                  your browser settings. Please note that disabling certain cookies may affect the
                  functionality of this website. For more information about cookies and how to
                  manage them, visit{' '}
                  <a
                    href="https://www.allaboutcookies.org"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    allaboutcookies.org
                  </a>.
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
                  <strong>Email:</strong>{' '}
                  <a href="mailto:legal@innovaas.co" className="text-blue-600 hover:underline">
                    legal@innovaas.co
                  </a><br />
                  <strong>Address:</strong> 7500A Beach Road, #05-319, The Plaza, Singapore 199591
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
