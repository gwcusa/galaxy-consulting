import type { Metadata } from 'next';
import Link from 'next/link';
import {
  Server, Shield, BarChart3, Code2, Building2, Award, ArrowRight,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Services',
  description:
    'Galaxy Consulting offers IT infrastructure, cybersecurity, program management, software development, facility management, and federal compliance services.',
};

const featuredServices = [
  {
    icon: Server,
    title: 'IT Infrastructure & Managed Services',
    href: '/services/it-infrastructure',
    color: 'bg-blue-500/10 text-blue-400',
    tag: 'Core Service',
    highlights: [
      'Multi-vendor hardware & software sales',
      'Server, workstation & networking deployment',
      'Storage solutions (cloud & onsite)',
      '24/7 help desk support',
      'Dell, HP & Lenovo authorized reseller',
    ],
  },
  {
    icon: Shield,
    title: 'Cybersecurity & Compliance',
    href: '/services/cybersecurity',
    color: 'bg-emerald-500/10 text-emerald-500',
    tag: 'Core Service',
    highlights: [
      'NIST 800-53 security controls',
      'System Security Plan (SSP) development',
      'ATO package preparation',
      'Security assessments & penetration testing',
      'Cybersecurity architecture design',
    ],
  },
  {
    icon: BarChart3,
    title: 'Program & Project Management',
    href: '/services/program-management',
    color: 'bg-purple-500/10 text-purple-500',
    tag: 'Core Service',
    highlights: [
      'Project Management Plan development',
      'Strategic IT roadmap creation',
      'Project team staffing support',
      'Quality assurance & performance monitoring',
      'Stakeholder coordination',
    ],
  },
];

const additionalServices = [
  {
    icon: Code2,
    title: 'Custom Software Development',
    desc: 'Tailored software solutions to modernize government operations and improve data-driven decision-making. Includes relational database development (Microsoft Access, SQL), IT quote tracking systems, and process automation.',
    color: 'text-amber-500',
  },
  {
    icon: Building2,
    title: 'Facility Management Support',
    desc: 'Comprehensive facility operations support including procurement and supplier coordination, Service Level Agreement (SLA) monitoring, access control, credential monitoring, and routine maintenance services.',
    color: 'text-rose-500',
  },
  {
    icon: Award,
    title: 'Federal Compliance & Quality Assurance',
    desc: 'ISO-9000 series quality assurance implementation, identity management, contract acquisition management, and requirements tracking to ensure compliance with federal standards and regulations.',
    color: 'text-teal-500',
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* ── PAGE HEADER ── */}
      <section className="bg-galaxy py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p
            className="text-blue-bright text-xs font-semibold uppercase tracking-widest mb-3"
            style={{ fontFamily: 'var(--font-inter)' }}
          >
            What We Offer
          </p>
          <h1
            className="text-4xl sm:text-5xl font-bold text-white mb-5"
            style={{ fontFamily: 'var(--font-barlow)' }}
          >
            Services &amp; Capabilities
          </h1>
          <p
            className="text-silver/70 text-base max-w-2xl"
            style={{ fontFamily: 'var(--font-inter)' }}
          >
            A full spectrum of IT and professional services designed for federal, state, and local government agencies.
            Every service is delivered with military-grade precision and accountability.
          </p>
        </div>
      </section>

      {/* ── FEATURED SERVICES ── */}
      <section className="py-20 bg-off-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            className="text-2xl font-bold text-navy section-heading mb-10"
            style={{ fontFamily: 'var(--font-barlow)' }}
          >
            Core Service Areas
          </h2>
          <div className="grid lg:grid-cols-3 gap-6">
            {featuredServices.map((s) => (
              <div key={s.title} className="card-hover bg-white rounded-xl border border-silver-light overflow-hidden flex flex-col">
                <div className="p-7 flex-1">
                  <div className="flex items-start justify-between mb-5">
                    <div className={`inline-flex p-3 rounded-lg ${s.color} bg-opacity-10`}>
                      <s.icon size={22} />
                    </div>
                    <span
                      className="text-xs font-semibold text-blue-accent border border-blue-accent/30 px-2.5 py-1 rounded-full"
                      style={{ fontFamily: 'var(--font-inter)' }}
                    >
                      {s.tag}
                    </span>
                  </div>
                  <h3
                    className="text-lg font-bold text-navy mb-4"
                    style={{ fontFamily: 'var(--font-barlow)' }}
                  >
                    {s.title}
                  </h3>
                  <ul className="space-y-2.5">
                    {s.highlights.map((h) => (
                      <li key={h} className="flex items-start gap-2 text-sm text-silver" style={{ fontFamily: 'var(--font-inter)' }}>
                        <span className="text-blue-accent mt-1 flex-shrink-0">›</span>
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="px-7 pb-7">
                  <Link
                    href={s.href}
                    className="w-full flex items-center justify-center gap-2 px-4 py-2.5 bg-navy hover:bg-navy-mid text-white text-sm font-semibold rounded-lg transition-colors"
                    style={{ fontFamily: 'var(--font-inter)' }}
                  >
                    Full Details <ArrowRight size={15} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ADDITIONAL SERVICES ── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            className="text-2xl font-bold text-navy section-heading mb-10"
            style={{ fontFamily: 'var(--font-barlow)' }}
          >
            Additional Capabilities
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {additionalServices.map((s) => (
              <div key={s.title} className="card-hover bg-off-white rounded-xl p-6 border border-silver-light">
                <s.icon size={24} className={`mb-4 ${s.color}`} />
                <h3
                  className="text-base font-semibold text-navy mb-3"
                  style={{ fontFamily: 'var(--font-barlow)' }}
                >
                  {s.title}
                </h3>
                <p
                  className="text-sm text-silver leading-relaxed"
                  style={{ fontFamily: 'var(--font-inter)' }}
                >
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TECHNOLOGY PARTNERS ── */}
      <section className="py-16 bg-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            className="text-2xl font-bold text-white section-heading mb-8"
            style={{ fontFamily: 'var(--font-barlow)' }}
          >
            Technology Partner Ecosystem
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { name: 'Dell Technologies', role: 'Federal Solutions Partner & Authorized H/W Reseller' },
              { name: 'HP', role: 'Partner & Authorized H/W Reseller' },
              { name: 'Palo Alto Networks', role: 'NetWave Partner' },
              { name: 'NinjaOne', role: 'Remote Monitoring, Patch Management & RMM Solution Partner' },
              { name: 'Cyber Manufacturing, Inc.', role: 'Authorized Reseller' },
              { name: 'SMART Technologies Corp.', role: 'Authorized Reseller' },
            ].map((p) => (
              <div key={p.name} className="cert-badge rounded-lg p-4">
                <div
                  className="text-white font-semibold text-sm mb-1"
                  style={{ fontFamily: 'var(--font-barlow)' }}
                >
                  {p.name}
                </div>
                <div
                  className="text-silver/50 text-xs"
                  style={{ fontFamily: 'var(--font-inter)' }}
                >
                  {p.role}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-16 bg-galaxy">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2
            className="text-2xl sm:text-3xl font-bold text-white mb-4"
            style={{ fontFamily: 'var(--font-barlow)' }}
          >
            Need a Specific Capability?
          </h2>
          <p
            className="text-silver/70 text-sm mb-8"
            style={{ fontFamily: 'var(--font-inter)' }}
          >
            Contact us to discuss your agency&apos;s requirements and how we can tailor our services to your mission.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-7 py-3.5 bg-blue-accent hover:bg-blue-bright text-white font-semibold rounded-lg transition-all hover:-translate-y-0.5"
            style={{ fontFamily: 'var(--font-inter)' }}
          >
            Contact Us <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
