import type { Metadata } from 'next';
import { MapPin, Phone, Mail, Globe, User, Clock, Building2 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Contact Galaxy Consulting, LLC. Reach Charles Cooks at ccooks@galaxyconsultingllc.com or call 240-324-7888. Located in Fort Washington, Maryland.',
};

const contactDetails = [
  { icon: User,    label: 'Primary Contact', value: 'Charles Cooks — President & CEO', sub: null,                                  href: null },
  { icon: MapPin,  label: 'Office Address',  value: '8507 Oxon Hill Road, Suite 200',   sub: 'Fort Washington, MD 20744',           href: null },
  { icon: Phone,   label: 'Office Phone',    value: '240-324-7888',                     sub: 'Mobile: 703-402-7541',               href: 'tel:2403247888' },
  { icon: Mail,    label: 'Email',           value: 'ccooks@galaxyconsultingllc.com',   sub: null,                                  href: 'mailto:ccooks@galaxyconsultingllc.com' },
  { icon: Globe,   label: 'Website',         value: 'www.GalaxyConsultingLLC.com',      sub: null,                                  href: 'https://www.GalaxyConsultingLLC.com' },
  { icon: Clock,   label: 'Business Hours',  value: 'Monday – Friday: 8:00 AM – 6:00 PM ET', sub: '24/7 Help Desk for active contracts', href: null },
];

const reasons = [
  'Request a capabilities briefing or statement of qualifications',
  'Inquire about IT hardware procurement and pricing',
  'Discuss cybersecurity assessment or ATO support',
  'Explore AI adoption, process automation, or decision intelligence opportunities',
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
          <p className="text-blue-bright text-xs font-semibold uppercase tracking-widest mb-3" style={{ fontFamily:'var(--font-inter)' }}>Reach Us</p>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-5" style={{ fontFamily:'var(--font-barlow)' }}>Contact Galaxy Consulting</h1>
          <p className="text-silver/70 text-base max-w-2xl" style={{ fontFamily:'var(--font-inter)' }}>
            Ready to discuss your agency&apos;s IT requirements? Reach out to our team and let us show you why our mission is your success.
          </p>
        </div>
      </section>

      <section className="py-20 bg-section-alt">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-10">

            {/* ── Contact Details ── */}
            <div className="lg:col-span-2 space-y-5">
              <h2 className="text-2xl font-bold text-white section-heading mb-8" style={{ fontFamily:'var(--font-barlow)' }}>Get In Touch</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {contactDetails.map((item) => (
                  <div key={item.label} className="card-hover card-surface rounded-xl p-5">
                    <div className="flex items-start gap-3">
                      <div className="p-2 rounded-lg bg-blue-accent/10 text-blue-accent flex-shrink-0">
                        <item.icon size={18} />
                      </div>
                      <div className="min-w-0">
                        <div className="text-xs text-silver/40 uppercase tracking-wider mb-1" style={{ fontFamily:'var(--font-inter)' }}>{item.label}</div>
                        {item.href ? (
                          <a href={item.href} target={item.href.startsWith('http') ? '_blank' : undefined} rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                            className="text-sm font-semibold text-silver hover:text-white transition-colors break-words" style={{ fontFamily:'var(--font-inter)' }}>
                            {item.value}
                          </a>
                        ) : (
                          <div className="text-sm font-semibold text-silver break-words" style={{ fontFamily:'var(--font-inter)' }}>{item.value}</div>
                        )}
                        {item.sub && <div className="text-xs text-silver/50 mt-0.5" style={{ fontFamily:'var(--font-inter)' }}>{item.sub}</div>}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* How Can We Help */}
              <div className="bg-card-alt rounded-xl p-7 border border-blue-accent/20 mt-6">
                <h3 className="text-white font-bold text-base mb-5" style={{ fontFamily:'var(--font-barlow)' }}>How Can We Help?</h3>
                <ul className="space-y-3">
                  {reasons.map((r) => (
                    <li key={r} className="flex items-start gap-2.5 text-silver/70 text-sm" style={{ fontFamily:'var(--font-inter)' }}>
                      <Building2 size={13} className="text-blue-accent flex-shrink-0 mt-0.5" />{r}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* ── Right sidebar ── */}
            <div className="space-y-5">
              {/* Certifications */}
              <div className="card-surface rounded-xl border border-blue-accent/20 p-6">
                <h3 className="text-white font-bold text-sm uppercase tracking-wider mb-4" style={{ fontFamily:'var(--font-barlow)' }}>Certifications</h3>
                <div className="space-y-2">
                  {['SDVOSB','SDB','MBE'].map((c) => (
                    <div key={c} className="cert-badge rounded-lg px-4 py-2.5 text-center">
                      <span className="text-blue-bright font-bold text-sm" style={{ fontFamily:'var(--font-inter)' }}>{c}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Contract IDs */}
              <div className="bg-navy rounded-xl p-6 border border-blue-accent/15">
                <h3 className="text-white font-bold text-sm uppercase tracking-wider mb-4" style={{ fontFamily:'var(--font-barlow)' }}>Contract Identifiers</h3>
                <div className="space-y-3">
                  {[{label:'DUNS',value:'079255195'},{label:'CAGE Code',value:'71RT1'},{label:'UEI',value:'DT7XMKSNJ5F3'}].map((id) => (
                    <div key={id.label}>
                      <div className="text-xs text-silver/40 uppercase tracking-widest mb-0.5" style={{ fontFamily:'var(--font-inter)' }}>{id.label}</div>
                      <div className="text-white font-mono text-sm font-semibold">{id.value}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* NAICS */}
              <div className="card-surface rounded-xl border border-blue-accent/20 p-6">
                <h3 className="text-white font-bold text-sm uppercase tracking-wider mb-4" style={{ fontFamily:'var(--font-barlow)' }}>NAICS Codes</h3>
                <div className="flex flex-wrap gap-2">
                  {['423420','423430','541519','541512','541712','541990'].map((code) => (
                    <span key={code} className="text-xs font-mono px-2.5 py-1 rounded bg-blue-accent/10 text-blue-bright font-semibold border border-blue-accent/20" style={{ fontFamily:'var(--font-inter)' }}>{code}</span>
                  ))}
                </div>
              </div>

              {/* Email CTA */}
              <div className="bg-blue-accent/10 rounded-xl border border-blue-accent/30 p-6 text-center">
                <Mail size={24} className="text-blue-accent mx-auto mb-3" />
                <p className="text-sm text-silver mb-3" style={{ fontFamily:'var(--font-inter)' }}>Prefer email? Reach us directly.</p>
                <a href="mailto:ccooks@galaxyconsultingllc.com" className="inline-block px-4 py-2 bg-blue-accent hover:bg-blue-bright text-white text-xs font-semibold rounded-lg transition-colors" style={{ fontFamily:'var(--font-inter)' }}>
                  Send Email
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
