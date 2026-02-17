import React from 'react';

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white py-16
                    md:py-20">
      <div className="max-w-3xl mx-auto px-8
                      sm:px-12
                      md:px-16
                      lg:px-8">
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-3"
              style={{ fontFamily: 'Montserrat, Arial, sans-serif' }}>
            Privacy Policy
          </h1>
          <p className="text-lg text-gray-500">
            How we protect and handle your personal information
          </p>
          <div className="mt-4 w-16 h-1 rounded"
               style={{ background: '#F25C05' }} />
        </div>

        <div className="space-y-4 text-gray-600 leading-relaxed mb-12">
          <p>
            <strong className="text-gray-800">Effective Date:</strong> 17 February 2026
          </p>
          <p>
            Innovaas Solutions Pte. Ltd. (&quot;Innovaas&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) is
            committed to protecting your privacy. This Privacy Policy explains how we
            collect, use, disclose, and safeguard your personal information when you
            visit our website or use our services.
          </p>
        </div>

        <div className="space-y-12">
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4"
                style={{ fontFamily: 'Montserrat, Arial, sans-serif' }}>
              Information We Collect
            </h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                <strong className="text-gray-800">Information you provide directly:</strong>
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Name and contact information (email address, company name, job title)</li>
                <li>Information submitted through contact forms or service enquiries</li>
                <li>Communication preferences and correspondence with us</li>
                <li>Account credentials if you register for any of our services</li>
              </ul>

              <p>
                <strong className="text-gray-800">Information collected automatically:</strong>
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>IP address, browser type, and operating system</li>
                <li>Pages visited, time spent on pages, and navigation patterns</li>
                <li>Referring website addresses and search terms</li>
                <li>Device information and screen resolution</li>
              </ul>

              <p>
                <strong className="text-gray-800">Cookies and tracking technologies:</strong> We use cookies and
                similar technologies to collect usage data and improve our website. Please
                refer to the Cookie Policy on our{' '}
                <a href="/legal"
                   style={{ color: '#F25C05' }}
                   className="underline decoration-transparent
                              hover:decoration-current transition-all">
                  Legal
                </a>{' '}
                page for details.
              </p>

              <p>
                <strong className="text-gray-800">Online data partners:</strong> We work with online data
                partners who use cookies and similar technologies to associate your website
                activity with personal information they hold about you, including your
                email address. This enables our service providers to send marketing
                communications to the email addresses collected through these partnerships.
                If you would like to opt out of this data collection, please visit{' '}
                <a href="https://app.retention.com/optout"
                   target="_blank"
                   rel="noopener noreferrer"
                   style={{ color: '#F25C05' }}
                   className="underline decoration-transparent
                              hover:decoration-current transition-all">
                  https://app.retention.com/optout
                </a>.
                If you are located in the European Economic Area, you may also exercise
                your GDPR rights by visiting{' '}
                <a href="https://www.rb2b.com/rb2b-gdpr-opt-out"
                   target="_blank"
                   rel="noopener noreferrer"
                   style={{ color: '#F25C05' }}
                   className="underline decoration-transparent
                              hover:decoration-current transition-all">
                  https://www.rb2b.com/rb2b-gdpr-opt-out
                </a>.
              </p>

              <p>
                <strong className="text-gray-800">Third-party sources:</strong> We may receive information about you
                from publicly available sources, business partners, or analytics providers
                to supplement the information we collect directly.
              </p>
            </div>
          </section>

          <hr className="border-gray-200" />

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4"
                style={{ fontFamily: 'Montserrat, Arial, sans-serif' }}>
              How We Use Your Information
            </h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>We use the information we collect to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Provide, maintain, and improve our services</li>
                <li>Respond to your enquiries and communicate with you about our services</li>
                <li>Send you marketing and promotional materials (with your consent)</li>
                <li>Analyse website usage to improve user experience and content</li>
                <li>Detect, prevent, and address technical issues or security threats</li>
                <li>Comply with legal obligations and enforce our terms of service</li>
                <li>Fulfil any other purpose for which you provide the information</li>
              </ul>
            </div>
          </section>

          <hr className="border-gray-200" />

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4"
                style={{ fontFamily: 'Montserrat, Arial, sans-serif' }}>
              Information Sharing &amp; Disclosure
            </h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                We do not sell your personal information. We may share your information
                in the following circumstances:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong className="text-gray-800">Service providers:</strong> With trusted third-party vendors who
                  assist us in operating our website, conducting business, or providing
                  services to you, subject to confidentiality obligations.
                </li>
                <li>
                  <strong className="text-gray-800">Legal requirements:</strong> When required by law, regulation,
                  legal process, or governmental request.
                </li>
                <li>
                  <strong className="text-gray-800">Protection of rights:</strong> To protect the rights, property,
                  or safety of Innovaas, our users, or the public.
                </li>
                <li>
                  <strong className="text-gray-800">Business transfers:</strong> In connection with a merger,
                  acquisition, reorganisation, or sale of assets, where your information
                  may be transferred as a business asset.
                </li>
                <li>
                  <strong className="text-gray-800">With your consent:</strong> In any other circumstances where you
                  have given us explicit consent to share your information.
                </li>
              </ul>
            </div>
          </section>

          <hr className="border-gray-200" />

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4"
                style={{ fontFamily: 'Montserrat, Arial, sans-serif' }}>
              Data Retention
            </h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                We retain your personal information only for as long as necessary to
                fulfil the purposes for which it was collected, including to satisfy any
                legal, accounting, or reporting requirements. When your information is no
                longer needed, we will securely delete or anonymise it.
              </p>
            </div>
          </section>

          <hr className="border-gray-200" />

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4"
                style={{ fontFamily: 'Montserrat, Arial, sans-serif' }}>
              Data Security
            </h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                We implement appropriate technical and organisational security measures to
                protect your personal information against unauthorised access, alteration,
                disclosure, or destruction. These measures include encryption,
                access controls, and regular security assessments.
              </p>
              <p>
                However, no method of transmission over the internet or electronic storage
                is completely secure. While we strive to protect your personal information,
                we cannot guarantee its absolute security.
              </p>
            </div>
          </section>

          <hr className="border-gray-200" />

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4"
                style={{ fontFamily: 'Montserrat, Arial, sans-serif' }}>
              International Data Transfers
            </h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Your information may be transferred to and processed in countries other
                than Singapore. Where we transfer your data internationally, we ensure
                appropriate safeguards are in place to protect your information in
                accordance with applicable data protection laws.
              </p>
            </div>
          </section>

          <hr className="border-gray-200" />

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4"
                style={{ fontFamily: 'Montserrat, Arial, sans-serif' }}>
              Your Rights
            </h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Depending on your jurisdiction, you may have the following rights
                regarding your personal information:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong className="text-gray-800">Access:</strong> Request a copy of the personal information we
                  hold about you.
                </li>
                <li>
                  <strong className="text-gray-800">Correction:</strong> Request that we correct any inaccurate or
                  incomplete personal information.
                </li>
                <li>
                  <strong className="text-gray-800">Deletion:</strong> Request that we delete your personal
                  information, subject to legal retention requirements.
                </li>
                <li>
                  <strong className="text-gray-800">Portability:</strong> Request a copy of your data in a
                  structured, commonly used, machine-readable format.
                </li>
                <li>
                  <strong className="text-gray-800">Opt out:</strong> Unsubscribe from marketing communications at
                  any time using the link provided in our emails.
                </li>
              </ul>
              <p>
                To exercise any of these rights, please contact us at{' '}
                <a href="mailto:privacy@innovaas.co"
                   style={{ color: '#F25C05' }}
                   className="underline decoration-transparent
                              hover:decoration-current transition-all">
                  privacy@innovaas.co
                </a>.
                We will respond to your request within a reasonable timeframe.
              </p>
            </div>
          </section>

          <hr className="border-gray-200" />

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4"
                style={{ fontFamily: 'Montserrat, Arial, sans-serif' }}>
              Children&apos;s Privacy
            </h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Our website and services are not directed at individuals under the age of
                18. We do not knowingly collect personal information from children. If we
                become aware that we have collected personal information from a child, we
                will take steps to delete that information promptly.
              </p>
            </div>
          </section>

          <hr className="border-gray-200" />

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4"
                style={{ fontFamily: 'Montserrat, Arial, sans-serif' }}>
              Changes to This Policy
            </h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                We may update this Privacy Policy from time to time to reflect changes in
                our practices or applicable laws. We will post the updated policy on this
                page with a revised effective date. We encourage you to review this policy
                periodically.
              </p>
            </div>
          </section>

          <hr className="border-gray-200" />

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4"
                style={{ fontFamily: 'Montserrat, Arial, sans-serif' }}>
              Contact Us
            </h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                If you have questions about this Privacy Policy or our data practices,
                please contact us at:
              </p>
              <div className="bg-gray-50 rounded-lg p-6 border border-gray-100">
                <p className="mb-1">
                  <strong className="text-gray-800">Email:</strong>{' '}
                  <a href="mailto:privacy@innovaas.co"
                     style={{ color: '#F25C05' }}
                     className="underline decoration-transparent
                                hover:decoration-current transition-all">
                    privacy@innovaas.co
                  </a>
                </p>
                <p>
                  <strong className="text-gray-800">Address:</strong> 7500A Beach Road, #05-319, The Plaza, Singapore 199591
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
