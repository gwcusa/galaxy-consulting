import type { Metadata } from 'next';
import Link from 'next/link';
import { Shield, Lock, FileText, Search, Network, AlertTriangle, ArrowRight, CheckCircle2 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Cybersecurity & Compliance',
  description:
    'Galaxy Consulting delivers NIST 800-53 cybersecurity, ATO packages, penetration testing, and security architecture design for federal government agencies.',
};

const offerings = [
  {
    icon: Lock,
    title: 'Security Control Implementation',
    desc: 'Implementation of security controls based on NIST 800-53 guidelines, tailored to your system\'s categorization and risk tolerance.',
    items: [
      'FIPS 199 system categorization',
      'NIST 800-53 control selection & tailoring',
      'Security control implementation guidance',
      'Continuous monitoring program setup',
      'POA&M development & tracking',
    ],
  },
  {
    icon: FileText,
    title: 'System Security Plan (SSP) Development',
    desc: 'Comprehensive SSP development and ongoing maintenance to document your system\'s security posture and meet authorization requirements.',
    items: [
      'System boundary definition',
      'Data flow & network diagrams',
      'Control implementation descriptions',
      'System interconnection documentation',
      'Ongoing SSP maintenance & updates',
    ],
  },
  {
    icon: Shield,
    title: 'ATO Package Preparation',
    desc: 'End-to-end development of Authorization to Operate (ATO) packages and coordination with Authorizing Officials for formal system authorization.',
    items: [
      'Risk Assessment Report (RAR)',
      'Security Assessment Report (SAR)',
      'Plan of Action & Milestones (POA&M)',
      'AO coordination & authorization support',
      'FedRAMP alignment (where applicable)',
    ],
  },
  {
    icon: Search,
    title: 'Security Assessments & Penetration Testing',
    desc: 'Independent security assessments and ethical penetration testing to identify vulnerabilities before adversaries do.',
    items: [
      'Vulnerability scanning & analysis',
      'Network penetration testing',
      'Web application security testing',
      'Social engineering assessments',
      'Remediation guidance & validation',
    ],
  },
  {
    icon: Network,
    title: 'Security Architecture & Engineering',
    desc: 'Design and implementation of secure network architectures that protect government data and ensure operational continuity.',
    items: [
      'Zero Trust architecture planning',
      'Network segmentation design',
      'Encryption strategy development',
      'Identity & access management (IAM)',
      'Endpoint protection strategy',
    ],
  },
  {
    icon: AlertTriangle,
    title: 'Security Software Implementation',
    desc: 'Deployment and configuration of security tools including antivirus, encryption, access control, and security information and event management (SIEM) solutions.',
    items: [
      'Antivirus & EDR deployment',
      'Data encryption implementation',
      'Multi-factor authentication (MFA)',
      'Privileged access management (PAM)',
      'SIEM configuration & tuning',
    ],
  },
];

const frameworks = [
  { name: 'NIST SP 800-53', desc: 'Security and Privacy Controls for Federal Information Systems' },
  { name: 'NIST RMF', desc: 'Risk Management Framework for Information Systems' },
  { name: 'FISMA', desc: 'Federal Information Security Modernization Act Compliance' },
  { name: 'ISO/IEC 27001', desc: 'Information Security Management System Standards' },
  { name: 'CMMC', desc: 'Cybersecurity Maturity Model Certification' },
  { name: 'FedRAMP', desc: 'Federal Risk and Authorization Management Program' },
];

export default function CybersecurityPage() {
  return (
    <>
      {/* ── HEADER ── */}
      <section className="bg-galaxy py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-xs text-silver/50 mb-5" style={{ fontFamily: 'var(--font-inter)' }}>
            <Link href="/services" className="hover:text-blue-bright transition-colors">Services</Link>
            <span>/</span>
            <span className="text-silver">Cybersecurity</span>
          </nav>
          <div className="inline-flex p-3 rounded-xl bg-emerald-500/15 text-emerald-400 mb-5">
            <Shield size={26} />
          </div>
          <h1
            className="text-4xl sm:text-5xl font-bold text-white mb-5"
            style={{ fontFamily: 'var(--font-barlow)' }}
          >
            Cybersecurity &amp;<br />Compliance
          </h1>
          <p
            className="text-silver/70 text-base max-w-2xl"
            style={{ fontFamily: 'var(--font-inter)' }}
          >
            Protecting your mission-critical systems with rigorous security controls, compliance frameworks, and
            expert assessments — from initial risk analysis through ATO authorization and ongoing monitoring.
          </p>
        </div>
      </section>

      {/* ── COMPLIANCE FRAMEWORKS ── */}
      <section className="py-12 bg-navy-mid border-b border-blue-accent/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p
            className="text-xs text-silver/50 uppercase tracking-widest mb-5"
            style={{ fontFamily: 'var(--font-inter)' }}
          >
            Compliance Frameworks We Support
          </p>
          <div className="flex flex-wrap gap-3">
            {frameworks.map((f) => (
              <div
                key={f.name}
                className="group relative"
                title={f.desc}
              >
                <span
                  className="px-3.5 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/8 text-emerald-400 text-xs font-semibold cursor-default hover:bg-emerald-500/15 transition-colors"
                  style={{ fontFamily: 'var(--font-inter)' }}
                >
                  {f.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICE OFFERINGS ── */}
      <section className="py-20 bg-off-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            className="text-2xl font-bold text-navy section-heading mb-10"
            style={{ fontFamily: 'var(--font-barlow)' }}
          >
            Cybersecurity Services
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {offerings.map((o) => (
              <div key={o.title} className="card-hover bg-white rounded-xl p-6 border border-silver-light flex flex-col">
                <div className="inline-flex p-2.5 rounded-lg bg-emerald-500/10 text-emerald-500 mb-4 w-fit">
                  <o.icon size={20} />
                </div>
                <h3
                  className="text-base font-semibold text-navy mb-2.5"
                  style={{ fontFamily: 'var(--font-barlow)' }}
                >
                  {o.title}
                </h3>
                <p
                  className="text-sm text-silver leading-relaxed mb-4 flex-1"
                  style={{ fontFamily: 'var(--font-inter)' }}
                >
                  {o.desc}
                </p>
                <ul className="space-y-1.5">
                  {o.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-xs text-silver/70" style={{ fontFamily: 'var(--font-inter)' }}>
                      <CheckCircle2 size={13} className="text-emerald-500 flex-shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ATO PROCESS ── */}
      <section className="py-16 bg-navy">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            className="text-2xl font-bold text-white section-heading mb-10"
            style={{ fontFamily: 'var(--font-barlow)' }}
          >
            Our ATO Support Process
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { step: '01', title: 'Categorize', desc: 'Define system boundary, data types, and FIPS 199 impact level' },
              { step: '02', title: 'Select & Implement', desc: 'Choose NIST 800-53 controls and document implementation' },
              { step: '03', title: 'Assess', desc: 'Independent security assessment and vulnerability analysis' },
              { step: '04', title: 'Authorize', desc: 'Package preparation and coordination with Authorizing Official' },
            ].map((s) => (
              <div key={s.step} className="cert-badge rounded-xl p-5 text-center">
                <div
                  className="text-3xl font-bold text-blue-bright mb-2"
                  style={{ fontFamily: 'var(--font-barlow)' }}
                >
                  {s.step}
                </div>
                <div
                  className="text-white font-semibold text-sm mb-2"
                  style={{ fontFamily: 'var(--font-barlow)' }}
                >
                  {s.title}
                </div>
                <div
                  className="text-silver/50 text-xs"
                  style={{ fontFamily: 'var(--font-inter)' }}
                >
                  {s.desc}
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
            className="text-2xl font-bold text-white mb-4"
            style={{ fontFamily: 'var(--font-barlow)' }}
          >
            Strengthen Your Security Posture
          </h2>
          <p className="text-silver/70 text-sm mb-8" style={{ fontFamily: 'var(--font-inter)' }}>
            From risk assessments to full ATO packages, we guide your agency through every step of the authorization process.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="px-6 py-3 bg-blue-accent hover:bg-blue-bright text-white font-semibold rounded-lg transition-all hover:-translate-y-0.5 flex items-center gap-2"
              style={{ fontFamily: 'var(--font-inter)' }}
            >
              Request Assessment <ArrowRight size={15} />
            </Link>
            <Link
              href="/certifications"
              className="px-6 py-3 border border-silver/30 text-silver hover:text-white hover:border-silver/60 rounded-lg transition-colors"
              style={{ fontFamily: 'var(--font-inter)' }}
            >
              Our Certifications
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
