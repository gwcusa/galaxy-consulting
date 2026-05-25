import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Galaxy Consulting, LLC Privacy Policy — how we collect, use, and protect your information.',
};

const EFFECTIVE_DATE = 'May 25, 2026';
const COMPANY = 'Galaxy Consulting, LLC';
const EMAIL   = 'info@galaxyconsultingllc.com';
const ADDRESS = '8507 Oxon Hill Road, Suite 200, Fort Washington, MD 20744';
const PHONE   = '240-324-7888';

export default function PrivacyPolicyPage() {
  return (
    <>
      {/* ── HEADER ── */}
      <section className="bg-galaxy py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-blue-bright text-xs font-semibold uppercase tracking-widest mb-3" style={{ fontFamily: 'var(--font-inter)' }}>
            Legal
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4" style={{ fontFamily: 'var(--font-barlow)' }}>
            Privacy Policy
          </h1>
          <p className="text-silver/60 text-sm" style={{ fontFamily: 'var(--font-inter)' }}>
            Effective Date: {EFFECTIVE_DATE} &nbsp;·&nbsp; {COMPANY}
          </p>
        </div>
      </section>

      {/* ── BODY ── */}
      <section className="py-16 bg-section-alt">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose-galaxy space-y-10 text-sm text-silver/80 leading-relaxed" style={{ fontFamily: 'var(--font-inter)' }}>

            {/* 1 */}
            <div>
              <h2 className="text-xl font-bold text-white mb-3" style={{ fontFamily: 'var(--font-barlow)' }}>1. Introduction</h2>
              <p>
                {COMPANY} (&ldquo;Galaxy Consulting,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) operates the website{' '}
                <span className="text-blue-bright">www.galaxyconsultingllc.com</span> (the &ldquo;Site&rdquo;).
                This Privacy Policy explains how we collect, use, disclose, and safeguard information when you visit our Site or submit an inquiry through our contact form.
                By using the Site you agree to the practices described in this policy.
                If you do not agree, please discontinue use of the Site.
              </p>
            </div>

            {/* 2 */}
            <div>
              <h2 className="text-xl font-bold text-white mb-3" style={{ fontFamily: 'var(--font-barlow)' }}>2. Information We Collect</h2>
              <h3 className="text-base font-semibold text-white/90 mb-2" style={{ fontFamily: 'var(--font-barlow)' }}>a. Information You Provide Voluntarily</h3>
              <p className="mb-3">
                When you fill out our contact form, you may provide:
              </p>
              <ul className="list-disc pl-5 space-y-1 mb-4">
                <li>Full name</li>
                <li>Organization or company name</li>
                <li>Email address</li>
                <li>Phone number</li>
                <li>The nature of your inquiry or message</li>
              </ul>
              <p>
                We only collect this information when you choose to submit it. No information is collected automatically from the contact form without your action.
              </p>

              <h3 className="text-base font-semibold text-white/90 mb-2 mt-5" style={{ fontFamily: 'var(--font-barlow)' }}>b. Automatically Collected Information</h3>
              <p className="mb-3">
                When you visit the Site, certain technical data may be collected automatically through standard web server logs and analytics tools, including:
              </p>
              <ul className="list-disc pl-5 space-y-1">
                <li>IP address (anonymized where possible)</li>
                <li>Browser type and version</li>
                <li>Operating system</li>
                <li>Referring URL and pages visited</li>
                <li>Date, time, and duration of your visit</li>
              </ul>

              <h3 className="text-base font-semibold text-white/90 mb-2 mt-5" style={{ fontFamily: 'var(--font-barlow)' }}>c. Cookies and Similar Technologies</h3>
              <p>
                We use cookies — small text files stored in your browser — to remember your preferences and improve site performance.
                We also use session cookies to support basic site functionality. You can manage or disable cookies through your browser settings.
                Declining cookies via our consent banner will limit non-essential tracking but will not prevent you from using the Site.
              </p>
            </div>

            {/* 3 */}
            <div>
              <h2 className="text-xl font-bold text-white mb-3" style={{ fontFamily: 'var(--font-barlow)' }}>3. How We Use Your Information</h2>
              <p className="mb-3">We use the information we collect to:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Respond to your inquiries and provide requested services</li>
                <li>Send you information about our CMMC compliance services, IT capabilities, or other offerings you have expressed interest in</li>
                <li>Improve the content, navigation, and overall performance of the Site</li>
                <li>Comply with applicable legal obligations</li>
                <li>Protect the security and integrity of our Site and business operations</li>
              </ul>
              <p className="mt-3">
                We do <strong className="text-white">not</strong> sell, rent, or trade your personal information to third parties for marketing purposes.
              </p>
            </div>

            {/* 4 */}
            <div>
              <h2 className="text-xl font-bold text-white mb-3" style={{ fontFamily: 'var(--font-barlow)' }}>4. How We Share Your Information</h2>
              <p className="mb-3">
                We may share your information only in the following limited circumstances:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <strong className="text-white">Service Providers:</strong> Third-party vendors who assist in operating the Site (e.g., web hosting, email delivery), subject to confidentiality obligations and prohibited from using your information for their own purposes.
                </li>
                <li>
                  <strong className="text-white">Legal Requirements:</strong> When required by law, regulation, court order, or government request; or to protect the rights, property, or safety of Galaxy Consulting, our clients, or the public.
                </li>
                <li>
                  <strong className="text-white">Business Transfers:</strong> In connection with a merger, acquisition, or sale of all or a portion of our assets, in which case your information may be transferred as a business asset.
                </li>
              </ul>
            </div>

            {/* 5 */}
            <div>
              <h2 className="text-xl font-bold text-white mb-3" style={{ fontFamily: 'var(--font-barlow)' }}>5. Data Retention</h2>
              <p>
                We retain personal information submitted through the contact form for as long as necessary to respond to your inquiry and fulfil any ongoing business relationship, or as required by applicable law.
                Inquiry records are typically reviewed and pruned on an annual basis.
                Automatically collected technical data is generally retained for no more than 24 months.
              </p>
            </div>

            {/* 6 */}
            <div>
              <h2 className="text-xl font-bold text-white mb-3" style={{ fontFamily: 'var(--font-barlow)' }}>6. Data Security</h2>
              <p>
                We implement reasonable administrative, technical, and physical safeguards to protect your information from unauthorized access, alteration, disclosure, or destruction.
                Our Site is served over HTTPS (TLS encryption) to protect data in transit.
                However, no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
              </p>
            </div>

            {/* 7 */}
            <div>
              <h2 className="text-xl font-bold text-white mb-3" style={{ fontFamily: 'var(--font-barlow)' }}>7. Third-Party Links</h2>
              <p>
                The Site may contain links to external websites (e.g., official DoD, Cyber-AB, or partner sites).
                We are not responsible for the privacy practices or content of those sites.
                We encourage you to review the privacy policies of any third-party site you visit.
              </p>
            </div>

            {/* 8 */}
            <div>
              <h2 className="text-xl font-bold text-white mb-3" style={{ fontFamily: 'var(--font-barlow)' }}>8. Children&rsquo;s Privacy</h2>
              <p>
                The Site is intended for business and professional use and is not directed to individuals under the age of 13.
                We do not knowingly collect personal information from children under 13.
                If you believe we have inadvertently collected such information, please contact us immediately and we will delete it.
              </p>
            </div>

            {/* 9 */}
            <div>
              <h2 className="text-xl font-bold text-white mb-3" style={{ fontFamily: 'var(--font-barlow)' }}>9. Your Rights and Choices</h2>
              <p className="mb-3">
                Depending on your location and applicable law, you may have certain rights regarding your personal information, including:
              </p>
              <ul className="list-disc pl-5 space-y-1">
                <li><strong className="text-white">Access:</strong> Request a copy of the personal information we hold about you.</li>
                <li><strong className="text-white">Correction:</strong> Request correction of inaccurate or incomplete information.</li>
                <li><strong className="text-white">Deletion:</strong> Request deletion of your personal information, subject to certain legal exceptions.</li>
                <li><strong className="text-white">Opt-Out:</strong> Unsubscribe from any marketing communications at any time by replying &ldquo;unsubscribe&rdquo; or contacting us directly.</li>
                <li><strong className="text-white">Cookie Control:</strong> Manage cookie preferences through your browser settings or our consent banner.</li>
              </ul>
              <p className="mt-3">
                To exercise any of these rights, please contact us at the information provided in Section 11.
              </p>
            </div>

            {/* 10 */}
            <div>
              <h2 className="text-xl font-bold text-white mb-3" style={{ fontFamily: 'var(--font-barlow)' }}>10. Changes to This Policy</h2>
              <p>
                We may update this Privacy Policy periodically to reflect changes in our practices, technology, or legal requirements.
                When we do, we will revise the &ldquo;Effective Date&rdquo; at the top of this page.
                We encourage you to review this policy periodically.
                Continued use of the Site after any changes constitutes your acceptance of the updated policy.
              </p>
            </div>

            {/* 11 */}
            <div>
              <h2 className="text-xl font-bold text-white mb-3" style={{ fontFamily: 'var(--font-barlow)' }}>11. Contact Us</h2>
              <p className="mb-4">
                If you have questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:
              </p>
              <div className="card-surface rounded-xl border border-blue-accent/20 p-6 space-y-2">
                <p className="text-white font-semibold" style={{ fontFamily: 'var(--font-barlow)' }}>{COMPANY}</p>
                <p>{ADDRESS}</p>
                <p>
                  Email:{' '}
                  <a href={`mailto:${EMAIL}`} className="text-blue-bright hover:underline">{EMAIL}</a>
                </p>
                <p>
                  Phone:{' '}
                  <a href={`tel:${PHONE.replace(/-/g, '')}`} className="text-blue-bright hover:underline">{PHONE}</a>
                </p>
              </div>
            </div>

          </div>

          {/* Back link */}
          <div className="mt-12 pt-8 border-t border-blue-accent/20">
            <Link href="/" className="text-sm text-silver/60 hover:text-blue-bright transition-colors" style={{ fontFamily: 'var(--font-inter)' }}>
              ← Back to Home
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
