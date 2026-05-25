import type { Metadata } from 'next';
import Link from 'next/link';
import { Shield, ArrowRight, Search, Wrench, FileText, Users, CheckCircle2, ClipboardCheck } from 'lucide-react';

export const metadata: Metadata = {
  title: 'CMMC Advisory Services — Gap Assessment, Remediation, Documentation & Staffing',
  description: 'Galaxy Consulting (CMMC RPO) offers CMMC Level 1 gap assessments, remediation support, SSP documentation, and Registered Practitioner staffing for DoD contractors.',
};

const services = [
  {
    icon: Search,
    title: 'Gap Assessment',
    tagline: 'Know Exactly Where You Stand',
    price: 'Starting at $2,500',
    accent: 'text-emerald-400',
    border: 'border-emerald-500/40',
    bg: 'bg-emerald-500/5',
    ring: 'bg-emerald-500/10',
    desc: 'Before you can fix anything, you need to know what is broken. Our CMMC Level 1 Gap Assessment gives you a complete, practice-by-practice picture of your current cybersecurity posture versus all 17 CMMC Level 1 requirements.',
    deliverables: [
      'Review of all 17 CMMC Level 1 practices against your current environment',
      'Written gap report identifying every deficiency',
      'Risk-prioritized remediation roadmap with clear action items',
      'Estimated effort and cost to close each gap',
      'SPRS score estimate based on current compliance status',
    ],
    ideal: 'Companies that are new to CMMC and need a clear starting point.',
  },
  {
    icon: Wrench,
    title: 'Preparation & Remediation',
    tagline: 'Fix the Gaps. Get Compliant.',
    price: 'Included in Full Package',
    accent: 'text-cyan-400',
    border: 'border-cyan-500/40',
    bg: 'bg-cyan-500/5',
    ring: 'bg-cyan-500/10',
    desc: 'Once gaps are identified, we work alongside your team to implement the required security controls, configure tools, and verify that every practice is properly satisfied before your self-assessment.',
    deliverables: [
      'Hands-on implementation support for technical controls',
      'Guidance on deploying required cybersecurity tools (antivirus, firewalls, MFA)',
      'Network segmentation and access control configuration support',
      'Patch management and vulnerability remediation guidance',
      'Verification testing to confirm each practice is satisfied',
    ],
    ideal: 'Companies that have completed a gap assessment and are ready to remediate.',
  },
  {
    icon: FileText,
    title: 'Documentation',
    tagline: 'The Written Proof Auditors Need',
    price: 'Starting at $1,500',
    accent: 'text-violet-400',
    border: 'border-violet-500/40',
    bg: 'bg-violet-500/5',
    ring: 'bg-violet-500/10',
    desc: 'CMMC compliance is not just about having the right tools — you must document how your organization implements each security practice. Our team drafts all required documentation to support your CMMC Level 1 self-assessment.',
    deliverables: [
      'System Security Plan (SSP) covering all 17 Level 1 practices',
      'Acceptable Use Policy and supporting cybersecurity policies',
      'Incident response procedures',
      'Media sanitization and disposal procedures',
      'Plan of Action & Milestones (POA&M) for any remaining gaps',
    ],
    ideal: 'Companies that have implemented controls but lack the written documentation to prove it.',
  },
  {
    icon: Users,
    title: 'RP Staffing',
    tagline: 'Certified Expertise On Demand',
    price: '$200/hr or retainer',
    accent: 'text-amber-400',
    border: 'border-amber-500/40',
    bg: 'bg-amber-500/5',
    ring: 'bg-amber-500/10',
    desc: 'Access Galaxy Consulting\'s Cyber-AB Registered Practitioners (RPs) on a project or ongoing basis. Our RPs are vetted professionals trained specifically in CMMC requirements and can integrate directly with your team.',
    deliverables: [
      'Dedicated RP assigned to your CMMC engagement',
      'On-call advisory support for CMMC questions and decisions',
      'Staff training on CMMC requirements and their responsibilities',
      'Annual self-assessment preparation and walkthrough',
      'Ongoing compliance monitoring and annual affirmation support',
    ],
    ideal: 'Companies that want expert CMMC support embedded in their team for ongoing compliance.',
  },
];

const processSteps = [
  { number: '01', title: 'Discovery Call', desc: 'We learn about your business, contracts, and IT environment — free, no obligation.' },
  { number: '02', title: 'Scope Definition', desc: 'We define exactly what systems and data are in scope for your CMMC Level 1 assessment.' },
  { number: '03', title: 'Gap Assessment', desc: 'Our RPs assess your environment against all 17 practices and deliver a written report.' },
  { number: '04', title: 'Remediation', desc: 'We help you implement controls and fix every gap identified in the assessment.' },
  { number: '05', title: 'Documentation', desc: 'We draft your SSP and all supporting policies required for your self-assessment.' },
  { number: '06', title: 'Self-Assessment & SPRS', desc: 'We prepare you for the self-assessment and SPRS submission — you affirm, you own it.' },
];

export default function CMMCServicesPage() {
  return (
    <>
      {/* ── HEADER ── */}
      <section className="bg-galaxy py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 mb-4">
            <Link href="/cmmc" className="text-xs text-silver/50 hover:text-silver transition-colors" style={{ fontFamily:'var(--font-inter)' }}>CMMC</Link>
            <span className="text-silver/30 text-xs">/</span>
            <span className="text-xs text-emerald-400 font-medium" style={{ fontFamily:'var(--font-inter)' }}>Services</span>
          </div>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-emerald-500/40 bg-emerald-500/10 text-emerald-400 text-xs font-semibold tracking-widest uppercase mb-4" style={{ fontFamily:'var(--font-inter)' }}>
            <Shield size={11} /> CMMC RPO Advisory Services
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-5" style={{ fontFamily:'var(--font-barlow)' }}>
            CMMC Advisory Services<br />for Organizations Seeking Certification
          </h1>
          <p className="text-silver/70 text-base max-w-2xl" style={{ fontFamily:'var(--font-inter)' }}>
            Galaxy Consulting provides end-to-end CMMC Level 1 preparation services — from your first gap assessment to your final self-assessment and SPRS submission. As a Cyber-AB authorized RPO, we guide you every step of the way.
          </p>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section className="py-24 bg-section-alt">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-10">
            {services.map((s, i) => (
              <div key={s.title} className={`rounded-2xl border ${s.border} ${s.bg} p-8`}>
                <div className="grid lg:grid-cols-2 gap-10 items-start">
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <div className={`p-3 rounded-xl ${s.ring}`}>
                        <s.icon size={22} className={s.accent} />
                      </div>
                      <div>
                        <div className={`text-xs font-semibold uppercase tracking-wider ${s.accent}`} style={{ fontFamily:'var(--font-inter)' }}>Service {String(i+1).padStart(2,'0')}</div>
                        <h2 className="text-2xl font-bold text-white" style={{ fontFamily:'var(--font-barlow)' }}>{s.title}</h2>
                        <div className={`text-sm font-bold mt-1 ${s.accent}`} style={{ fontFamily:'var(--font-inter)' }}>{s.price}</div>
                      </div>
                    </div>
                    <p className={`text-sm font-semibold mb-3 ${s.accent}`} style={{ fontFamily:'var(--font-inter)' }}>{s.tagline}</p>
                    <p className="text-sm text-silver/80 leading-relaxed mb-5" style={{ fontFamily:'var(--font-inter)' }}>{s.desc}</p>
                    <div className={`text-xs px-3 py-2 rounded-lg border ${s.border} ${s.ring} inline-block`} style={{ fontFamily:'var(--font-inter)' }}>
                      <span className="text-silver/50">Best for: </span>
                      <span className="text-silver">{s.ideal}</span>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-sm mb-4 flex items-center gap-2" style={{ fontFamily:'var(--font-barlow)' }}>
                      <ClipboardCheck size={15} className={s.accent} /> What You Receive
                    </h3>
                    <ul className="space-y-3">
                      {s.deliverables.map((d) => (
                        <li key={d} className="flex items-start gap-2.5">
                          <CheckCircle2 size={14} className={`${s.accent} flex-shrink-0 mt-0.5`} />
                          <span className="text-sm text-silver/80" style={{ fontFamily:'var(--font-inter)' }}>{d}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRICING SUMMARY ── */}
      <section className="py-20 bg-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-emerald-400 text-xs font-semibold uppercase tracking-widest mb-3" style={{ fontFamily:'var(--font-inter)' }}>Transparent Pricing</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white section-heading section-heading-center" style={{ fontFamily:'var(--font-barlow)' }}>Simple, Affordable CMMC Pricing</h2>
            <p className="mt-5 text-silver/70 text-sm max-w-xl mx-auto" style={{ fontFamily:'var(--font-inter)' }}>
              No surprise fees. Fixed-scope engagements so you know exactly what you are paying before work begins. Priced 25–30% below the national average to make CMMC accessible for small businesses.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
            {[
              { label: 'Gap Assessment',          price: '$2,500',      sub: 'Starting price',        accent: 'text-emerald-400', border: 'border-emerald-500/30', bg: 'bg-emerald-500/5' },
              { label: 'Full Level 1 Package',    price: '$5,500',      sub: 'Gap + Remediation + Docs', accent: 'text-cyan-400',    border: 'border-cyan-500/30',    bg: 'bg-cyan-500/5' },
              { label: 'Documentation Only',      price: '$1,500',      sub: 'SSP + policies + POA&M', accent: 'text-violet-400',  border: 'border-violet-500/30',  bg: 'bg-violet-500/5' },
              { label: 'Annual Retainer',         price: '$1,100/yr',   sub: 'Ongoing compliance support', accent: 'text-amber-400', border: 'border-amber-500/30', bg: 'bg-amber-500/5' },
            ].map((p) => (
              <div key={p.label} className={`rounded-xl border ${p.border} ${p.bg} p-6 text-center`}>
                <div className={`text-3xl font-bold mb-1 ${p.accent}`} style={{ fontFamily:'var(--font-barlow)' }}>{p.price}</div>
                <div className="text-white font-semibold text-sm mb-1" style={{ fontFamily:'var(--font-barlow)' }}>{p.label}</div>
                <div className="text-xs text-silver/50" style={{ fontFamily:'var(--font-inter)' }}>{p.sub}</div>
              </div>
            ))}
          </div>
          <div className="max-w-2xl mx-auto bg-emerald-500/5 border border-emerald-500/20 rounded-xl p-5 text-center">
            <p className="text-sm text-silver/70" style={{ fontFamily:'var(--font-inter)' }}>
              Prices are starting points for small businesses (&lt;50 employees). Final pricing is based on your organization size, IT environment complexity, and scope. RP hourly rate: <strong className="text-emerald-400">$200/hr</strong>.
              <br />All engagements begin with a <strong className="text-white">free discovery call</strong> — no obligation.
            </p>
          </div>
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section className="py-24 bg-section-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-emerald-400 text-xs font-semibold uppercase tracking-widest mb-3" style={{ fontFamily:'var(--font-inter)' }}>Our Approach</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white section-heading section-heading-center" style={{ fontFamily:'var(--font-barlow)' }}>From First Call to Certified</h2>
            <p className="mt-5 text-silver/70 text-sm max-w-xl mx-auto" style={{ fontFamily:'var(--font-inter)' }}>
              Our structured engagement model ensures nothing falls through the cracks on your path to CMMC Level 1 compliance.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {processSteps.map((step) => (
              <div key={step.number} className="card-surface rounded-xl p-6 border border-emerald-500/20">
                <div className="w-10 h-10 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center mb-4">
                  <span className="text-emerald-400 font-bold text-xs" style={{ fontFamily:'var(--font-barlow)' }}>{step.number}</span>
                </div>
                <h3 className="text-white font-semibold text-base mb-2" style={{ fontFamily:'var(--font-barlow)' }}>{step.title}</h3>
                <p className="text-sm text-silver/60 leading-relaxed" style={{ fontFamily:'var(--font-inter)' }}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-galaxy py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-5" style={{ fontFamily:'var(--font-barlow)' }}>Ready to Get Started?</h2>
          <p className="text-silver/70 text-base mb-10 max-w-xl mx-auto" style={{ fontFamily:'var(--font-inter)' }}>
            Contact Galaxy Consulting today. We will schedule a free discovery call, scope your engagement, and give you a clear path to CMMC Level 1 compliance.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="px-8 py-3.5 bg-emerald-500 hover:bg-emerald-400 text-navy font-semibold rounded-lg transition-all hover:-translate-y-0.5 shadow-lg shadow-emerald-500/25" style={{ fontFamily:'var(--font-inter)' }}>
              Request a Consultation <ArrowRight size={16} />
            </Link>
            <Link href="/cmmc/faq" className="px-8 py-3.5 border border-silver/30 text-silver hover:text-white hover:border-silver/60 rounded-lg transition-colors" style={{ fontFamily:'var(--font-inter)' }}>
              CMMC FAQs
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
