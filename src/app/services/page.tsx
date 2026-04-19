import type { Metadata } from 'next';
import Link from 'next/link';
import { Server, Shield, BarChart3, Brain, Code2, Building2, Award, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Services',
  description: 'Galaxy Consulting offers IT infrastructure, cybersecurity, program management, AI services, software development, facility management, and federal compliance services.',
};

const featuredServices = [
  {
    icon: Server, title: 'IT Infrastructure & Managed Services', href: '/services/it-infrastructure',
    accent: 'text-blue-bright', ring: 'bg-blue-bright/10',
    highlights: ['Multi-vendor hardware & software sales','Server, workstation & networking deployment','Storage solutions (cloud & onsite)','24/7 help desk support','Dell, HP & Lenovo authorized reseller'],
  },
  {
    icon: Shield, title: 'Cybersecurity & Compliance', href: '/services/cybersecurity',
    accent: 'text-emerald-400', ring: 'bg-emerald-400/10',
    highlights: ['NIST 800-53 security controls','System Security Plan (SSP) development','ATO package preparation','Security assessments & penetration testing','Cybersecurity architecture design'],
  },
  {
    icon: BarChart3, title: 'Program & Project Management', href: '/services/program-management',
    accent: 'text-purple-400', ring: 'bg-purple-400/10',
    highlights: ['Project Management Plan development','Strategic IT roadmap creation','Project team staffing support','Quality assurance & performance monitoring','Stakeholder coordination'],
  },
  {
    icon: Brain, title: 'Artificial Intelligence (AI) Services', href: '/services/ai-services',
    accent: 'text-violet-400', ring: 'bg-violet-400/10',
    highlights: ['Stay competitive with AI-driven solutions','Automate tasks & reduce operational costs','Predictive analytics & smarter decisions','Intelligent chatbots & virtual assistants','End-to-end AI strategy & implementation'],
  },
];

const additionalServices = [
  { icon: Code2,     title: 'Custom Software Development', accent: 'text-amber-400', desc: 'Tailored software solutions to modernize government operations. Includes relational database development (Microsoft Access, SQL), IT quote tracking systems, and process automation.' },
  { icon: Building2, title: 'Facility Management Support',  accent: 'text-rose-400',  desc: 'Comprehensive facility operations including procurement coordination, SLA monitoring, access control, credential monitoring, and routine maintenance services.' },
  { icon: Award,     title: 'Federal Compliance & QA',      accent: 'text-teal-400',  desc: 'ISO-9000 quality assurance, identity management, contract acquisition management, and requirements tracking to ensure federal standards compliance.' },
];

export default function ServicesPage() {
  return (
    <>
      {/* ── HEADER ── */}
      <section className="bg-galaxy py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-blue-bright text-xs font-semibold uppercase tracking-widest mb-3" style={{ fontFamily:'var(--font-inter)' }}>What We Offer</p>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-5" style={{ fontFamily:'var(--font-barlow)' }}>Services &amp; Capabilities</h1>
          <p className="text-silver/70 text-base max-w-2xl" style={{ fontFamily:'var(--font-inter)' }}>
            A full spectrum of IT and professional services designed for federal, state, and local government agencies. Every service delivered with military-grade precision and accountability.
          </p>
        </div>
      </section>

      {/* ── FEATURED SERVICES ── */}
      <section className="py-20 bg-section-alt">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-white section-heading mb-10" style={{ fontFamily:'var(--font-barlow)' }}>Core Service Areas</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-6">
            {featuredServices.map((s) => (
              <div key={s.title} className="card-hover card-surface rounded-xl overflow-hidden flex flex-col">
                <div className="p-6 flex-1">
                  <div className={`inline-flex p-3 rounded-lg mb-5 ${s.ring}`}>
                    <s.icon size={22} className={s.accent} />
                  </div>
                  <h3 className="text-base font-bold text-white mb-4" style={{ fontFamily:'var(--font-barlow)' }}>{s.title}</h3>
                  <ul className="space-y-2">
                    {s.highlights.map((h) => (
                      <li key={h} className="flex items-start gap-2 text-sm text-silver/70" style={{ fontFamily:'var(--font-inter)' }}>
                        <span className={`${s.accent} mt-0.5 flex-shrink-0`}>›</span>{h}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="px-6 pb-6">
                  <Link href={s.href} className="w-full flex items-center justify-center gap-2 px-4 py-2.5 bg-blue-accent/15 hover:bg-blue-accent text-blue-bright hover:text-navy text-sm font-semibold rounded-lg transition-all" style={{ fontFamily:'var(--font-inter)' }}>
                    Full Details <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ADDITIONAL SERVICES ── */}
      <section className="py-20 bg-section-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-white section-heading mb-10" style={{ fontFamily:'var(--font-barlow)' }}>Additional Capabilities</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {additionalServices.map((s) => (
              <div key={s.title} className="card-hover card-surface rounded-xl p-6">
                <s.icon size={24} className={`mb-4 ${s.accent}`} />
                <h3 className="text-base font-semibold text-white mb-3" style={{ fontFamily:'var(--font-barlow)' }}>{s.title}</h3>
                <p className="text-sm text-silver/70 leading-relaxed" style={{ fontFamily:'var(--font-inter)' }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TECHNOLOGY PARTNERS ── */}
      <section className="py-16 bg-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-white section-heading mb-8" style={{ fontFamily:'var(--font-barlow)' }}>Technology Partner Ecosystem</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { name: 'Dell Technologies',       role: 'Federal Solutions Partner & Authorized H/W Reseller' },
              { name: 'HP',                       role: 'Partner & Authorized H/W Reseller' },
              { name: 'Palo Alto Networks',       role: 'NetWave Partner' },
              { name: 'NinjaOne',                 role: 'Remote Monitoring, Patch Management & RMM Solution Partner' },
              { name: 'Cyber Manufacturing, Inc.',role: 'Authorized Reseller' },
              { name: 'SMART Technologies Corp.', role: 'Authorized Reseller' },
            ].map((p) => (
              <div key={p.name} className="cert-badge rounded-lg p-4">
                <div className="text-white font-semibold text-sm mb-1" style={{ fontFamily:'var(--font-barlow)' }}>{p.name}</div>
                <div className="text-silver/50 text-xs" style={{ fontFamily:'var(--font-inter)' }}>{p.role}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-16 bg-galaxy">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4" style={{ fontFamily:'var(--font-barlow)' }}>Need a Specific Capability?</h2>
          <p className="text-silver/70 text-sm mb-8" style={{ fontFamily:'var(--font-inter)' }}>Contact us to discuss your agency&apos;s requirements and how we can tailor our services to your mission.</p>
          <Link href="/contact" className="inline-flex items-center gap-2 px-7 py-3.5 bg-blue-accent hover:bg-blue-bright text-navy font-semibold rounded-lg transition-all hover:-translate-y-0.5" style={{ fontFamily:'var(--font-inter)' }}>
            Contact Us <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
