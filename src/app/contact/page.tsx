import type { Metadata } from 'next';
import { MapPin, Phone, Mail, Globe, User, Clock, Building2 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Contact Galaxy Consulting, LLC. Reach Charles Cooks at ccooks@galaxyconsultingllc.com or call 240-324-7888. Located in Fort Washington, Maryland.',
};

const contactDetails = [
  {
    icon: User,
    label: 'Primary Contact',
    value: 'Charles Cooks — President & CEO',
    sub: null,
    color: 'text-blue-accent',
  },
  {
    icon: MapPin,
    label: 'Office Address',
    value: '8507 Oxon Hill Road, Suite 200',
    sub: 'Fort Washington, MD 20744',
    color: 'text-blue-accent',
  },
  {
    icon: Phone,
    label: 'Office Phone',
    value: '240-324-7888',
    sub: 'Mobile: 703-402-7541',
    color: 'text-blue-accent',
    href: 'tel:2403247888',
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'ccooks@galaxyconsultingllc.com',
    sub: null,
    color: 'text-blue-accent',
    href: 'mailto:ccooks@galaxyconsultingllc.com',
  },
  {
    icon: Globe,
    label: 'Website',
    value: 'www.GalaxyConsultingLLC.com',
    sub: null,
    color: 'text-blue-accent',
    href: 'https://www.GalaxyConsultingLLC.com',
  },
  {
    icon: Clock,
    label: 'Business Hours',
    value: 'Monday – Friday: 8:00 AM – 6:00 PM ET',
    sub: '24/7 Help Desk available for active contracts',
    color: 'text-blue-accent',
  },
];

const contractInfo = [
  { label: 'DUNS', value: '079255195' },
  { label: 'CAGE Code', value: '71RT1' },
  { label: 'UEI', value: 'DT7XMKSNJ5F3' },
];

const naicsCodes = ['423420', '423430', '541519', '541512', '541712', '541990'];

const certifications = ['SDVOSB', 'SDB', 'MBE'];

const reasons = [
  'Request a capabilities briefing or statement of qualifications',
  'Inquire about IT hardware procurement and pricing',
  'Discuss cybersecurity assessment or ATO support',
  'Learn about set-aside contract opportunities (SDVOSB / SDB / MBE)',
  'Explore teaming or subcontracting arrangements',
  'Request support under the Maryland DOIT contract',
];

export default function ContactPage() {
  return (
    <>
      {/* ── HEADER ── */}
      <section className="bg-galaxy py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p
            className="text-blue-bright text-xs font-semibold uppercase tracking-widest mb-3"
            style={{ fontFamily: 'var(--font-inter)' }}
          >
            Reach Us
          </p>
          <h1
            className="text-4xl sm:text-5xl font-bold text-white mb-5"
            style={{ fontFamily: 'var(--font-barlow)' }}
          >
            Contact Galaxy Consulting
          </h1>
          <p
            className="text-silver/70 text-base max-w-2xl"
            style={{ fontFamily: 'var(--font-inter)' }}
          >
            Ready to discuss your agency&apos;s IT requirements? Reach out to our team and let us show you
            why our mission is your success.
          </p>
        </div>
      </section>

      <section className="py-20 bg-off-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-10">

            {/* ── LEFT: Contact Details ── */}
            <div className="lg:col-span-2 space-y-5">
              <h2
                className="text-2xl font-bold text-navy section-heading mb-8"
                style={{ fontFamily: 'var(--font-barlow)' }}
              >
                Get In Touch
              </h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {contactDetails.map((item) => (
                  <div
                    key={item.label}
                    className="card-hover bg-white rounded-xl p-5 border border-silver-light"
                  >
                    <div className="flex items-start gap-3">
                      <div className={`p-2 rounded-lg bg-blue-accent/10 ${item.color} flex-shrink-0`}>
                        <item.icon size={18} />
                      </div>
                      <div className="min-w-0">
                        <div
                          className="text-xs text-silver/50 uppercase tracking-wider mb-1"
                          style={{ fontFamily: 'var(--font-inter)' }}
                        >
                          {item.label}
                        </div>
                        {item.href ? (
                          <a
                            href={item.href}
                            target={item.href.startsWith('http') ? '_blank' : undefined}
                            rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                            className="text-sm font-semibold text-navy hover:text-blue-accent transition-colors break-words"
                            style={{ fontFamily: 'var(--font-inter)' }}
                          >
                            {item.value}
                          </a>
                        ) : (
                          <div
                            className="text-sm font-semibold text-navy break-words"
                            style={{ fontFamily: 'var(--font-inter)' }}
                          >
                            {item.value}
                          </div>
                        )}
                        {item.sub && (
                          <div
                            className="text-xs text-silver/60 mt-0.5"
                            style={{ fontFamily: 'var(--font-inter)' }}
                          >
                            {item.sub}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Reasons to contact */}
              <div className="bg-navy rounded-xl p-7 mt-6">
                <h3
                  className="text-white font-bold text-base mb-5"
                  style={{ fontFamily: 'var(--font-barlow)' }}
                >
                  How Can We Help?
                </h3>
                <ul className="space-y-3">
                  {reasons.map((r) => (
                    <li key={r} className="flex items-start gap-2.5 text-silver/70 text-sm" style={{ fontFamily: 'var(--font-inter)' }}>
                      <Building2 size={13} className="text-blue-accent flex-shrink-0 mt-0.5" />
                      {r}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* ── RIGHT: Contract Info ── */}
            <div className="space-y-5">
              {/* Certifications */}
              <div className="bg-white rounded-xl border border-silver-light p-6">
                <h3
                  className="text-navy font-bold text-sm uppercase tracking-wider mb-4"
                  style={{ fontFamily: 'var(--font-barlow)' }}
                >
                  Certifications
                </h3>
                <div className="space-y-2">
                  {certifications.map((c) => (
                    <div
                      key={c}
                      className="cert-badge rounded-lg px-4 py-2.5 text-center"
                    >
                      <span
                        className="text-blue-bright font-bold text-sm"
                        style={{ fontFamily: 'var(--font-inter)' }}
                      >
                        {c}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Contract IDs */}
              <div className="bg-navy rounded-xl p-6">
                <h3
                  className="text-white font-bold text-sm uppercase tracking-wider mb-4"
                  style={{ fontFamily: 'var(--font-barlow)' }}
                >
                  Contract Identifiers
                </h3>
                <div className="space-y-3">
                  {contractInfo.map((id) => (
                    <div key={id.label}>
                      <div
                        className="text-xs text-silver/40 uppercase tracking-widest mb-0.5"
                        style={{ fontFamily: 'var(--font-inter)' }}
                      >
                        {id.label}
                      </div>
                      <div
                        className="text-white font-mono text-sm font-semibold"
                        style={{ fontFamily: 'monospace' }}
                      >
                        {id.value}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* NAICS */}
              <div className="bg-white rounded-xl border border-silver-light p-6">
                <h3
                  className="text-navy font-bold text-sm uppercase tracking-wider mb-4"
                  style={{ fontFamily: 'var(--font-barlow)' }}
                >
                  NAICS Codes
                </h3>
                <div className="flex flex-wrap gap-2">
                  {naicsCodes.map((code) => (
                    <span
                      key={code}
                      className="text-xs font-mono px-2.5 py-1 rounded bg-silver-light text-navy font-semibold"
                      style={{ fontFamily: 'var(--font-inter)' }}
                    >
                      {code}
                    </span>
                  ))}
                </div>
              </div>

              {/* Contact form placeholder */}
              <div className="bg-off-white rounded-xl border border-dashed border-silver p-6 text-center">
                <Mail size={24} className="text-silver mx-auto mb-3" />
                <p
                  className="text-sm text-silver/70 mb-3"
                  style={{ fontFamily: 'var(--font-inter)' }}
                >
                  Online contact form
                  <br />
                  <span className="text-xs text-silver/40">Coming soon</span>
                </p>
                <a
                  href="mailto:ccooks@galaxyconsultingllc.com"
                  className="inline-block px-4 py-2 bg-blue-accent hover:bg-blue-bright text-white text-xs font-semibold rounded-lg transition-colors"
                  style={{ fontFamily: 'var(--font-inter)' }}
                >
                  Email Us Directly
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
