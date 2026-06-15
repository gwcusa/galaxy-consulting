import type { Metadata } from 'next';
import Link from 'next/link';
import { Shield, ArrowRight, Search, Wrench, FileText, Users, CheckCircle2, ClipboardCheck } from 'lucide-react';

export const metadata: Metadata = {
  title: 'CMMC Advisory Services — Gap Assessment, Remediation, Documentation & Staffing',
  description: 'Galaxy Consulting (CMMC RPO) offers CMMC Level 1 and Level 2 gap assessments, remediation support, SSP documentation, C3PAO preparation, and Registered Practitioner staffing for DoD contractors.',
};

const services = [
  {
    icon: Search,
    title: 'Gap Assessment',
    tagline: 'Know Exactly Where You Stand',
    accent: 'text-emerald-400',
    border: 'border-emerald-500/40',
    bg: 'bg-emerald-500/5',
    ring: 'bg-emerald-500/10',
    desc: 'Before you can fix anything, you need to know what is broken. Our CMMC Gap Assessment gives you a complete, practice-by-practice picture of your current cybersecurity posture — whether you are pursuing Level 1 (17 practices) or Level 2 (110 practices).',
    deliverables: [
      'Review of all applicable CMMC practices against your current environment',
      'Written gap report identifying every deficiency by domain',
      'Risk-prioritized remediation roadmap with clear action items',
      'SPRS score estimate based on current compliance status',
      'Recommended path forward — Level 1 self-assessment or Level 2 C3PAO track',
    ],
    ideal: 'Companies that are new to CMMC or unsure which level applies to their contracts.',
  },
  {
    icon: Wrench,
    title: 'Preparation & Remediation',
    tagline: 'Fix the Gaps. Get Compliant.',
    accent: 'text-cyan-400',
    border: 'border-cyan-500/40',
    bg: 'bg-cyan-500/5',
    ring: 'bg-cyan-500/10',
    desc: 'Once gaps are identified, we work alongside your team to implement the required security controls, configure tools, and verify that every practice is properly satisfied — whether preparing for a Level 1 self-assessment or a Level 2 C3PAO assessment.',
    deliverables: [
      'Hands-on implementation support for technical and administrative controls',
      'Guidance on deploying required cybersecurity tools (antivirus, firewalls, MFA, encryption)',
      'Network segmentation and access control configuration support',
      'Patch management and vulnerability remediation guidance',
      'Verification testing to confirm each practice is satisfied before assessment',
    ],
    ideal: 'Companies that have completed a gap assessment and are ready to remediate toward Level 1 or Level 2.',
  },
  {
    icon: FileText,
    title: 'Documentation',
    tagline: 'The Written Proof Auditors Need',
    accent: 'text-violet-400',
    border: 'border-violet-500/40',
    bg: 'bg-violet-500/5',
    ring: 'bg-violet-500/10',
    desc: 'CMMC compliance is not just about having the right tools — you must document how your organization implements each security practice. Our team drafts all required documentation for both Level 1 self-assessments and Level 2 C3PAO assessments.',
    deliverables: [
      'System Security Plan (SSP) covering all applicable CMMC practices',
      'Acceptable Use Policy and supporting cybersecurity policies and procedures',
      'Incident response and media sanitization procedures',
      'Plan of Action & Milestones (POA&M) for any remaining gaps',
      'Level 2: CUI boundary documentation and data flow diagrams',
    ],
    ideal: 'Companies that have implemented controls but lack the written documentation to prove it.',
  },
  {
    icon: Users,
    title: 'RP Staffing',
    tagline: 'Certified Expertise On Demand',
    accent: 'text-amber-400',
    border: 'border-amber-500/40',
    bg: 'bg-amber-500/5',
    ring: 'bg-amber-500/10',
    desc: 'Access Galaxy Consulting\'s Cyber-AB Registered Practitioners (RPs) on a project or ongoing basis. Our RPs guide you through both Level 1 self-assessments and Level 2 C3PAO assessment preparation — embedded directly in your team.',
    deliverables: [
      'Dedicated RP assigned to your CMMC engagement',
      'On-call advisory support for CMMC questions and decisions',
      'Staff training on CMMC requirements and team responsibilities',
      'Level 1: Self-assessment preparation and SPRS submission walkthrough',
      'Level 2: C3PAO coordination, evidence packaging, and assessment readiness support',
    ],
    ideal: 'Companies that want expert CMMC support embedded in their team for Level 1 or Level 2 compliance.',
  },
];

const processSteps = [
  { number: '01', title: 'Discovery Call', desc: 'We learn about your business, contracts, and IT environment — free, no obligation.' },
  { number: '02', title: 'Scope & Level Determination', desc: 'We identify which CMMC level applies to your contracts, define your system boundary, and determine which data types (FCI vs. CUI) are in scope.' },
  { number: '03', title: 'Gap Assessment', desc: 'Our RPs assess your environment against all applicable practices — 17 for Level 1, 110 for Level 2 — and deliver a prioritized written remediation report.' },
  { number: '04', title: 'Remediation', desc: 'We help you implement required controls and close every gap identified in the assessment, with hands-on technical and policy support.' },
  { number: '05', title: 'Documentation', desc: 'We draft your SSP, policies, procedures, and POA&M — the written evidence required for both self-assessments and C3PAO assessments.' },
  { number: '06', title: 'Assessment & Submission', desc: 'Level 1: We prepare you for self-assessment and SPRS submission. Level 2: We coordinate your C3PAO assessment and support you through to certification.' },
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
            Galaxy Consulting provides end-to-end CMMC Level 1 and Level 2 preparation services — from your first gap assessment through remediation, documentation, and C3PAO assessment coordination. As a Cyber-AB authorized RPO, we guide you every step of the way.
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

      {/* ── PROCESS ── */}
      <section className="py-24 bg-section-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-emerald-400 text-xs font-semibold uppercase tracking-widest mb-3" style={{ fontFamily:'var(--font-inter)' }}>Our Approach</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white section-heading section-heading-center" style={{ fontFamily:'var(--font-barlow)' }}>From First Call to Certified</h2>
            <p className="mt-5 text-silver/70 text-sm max-w-xl mx-auto" style={{ fontFamily:'var(--font-inter)' }}>
              The path to CMMC certification depends on which level applies to your contracts. Both tracks start the same way — with a free discovery call.
            </p>
          </div>

          {/* Shared first steps */}
          <div className="max-w-3xl mx-auto mb-8">
            {processSteps.slice(0, 2).map((step) => (
              <div key={step.number} className="card-surface rounded-xl p-6 border border-blue-accent/20 mb-4 flex items-start gap-5">
                <div className="w-10 h-10 rounded-full bg-blue-accent/10 border border-blue-accent/30 flex items-center justify-center flex-shrink-0">
                  <span className="text-blue-bright font-bold text-xs" style={{ fontFamily:'var(--font-barlow)' }}>{step.number}</span>
                </div>
                <div>
                  <h3 className="text-white font-semibold text-base mb-1" style={{ fontFamily:'var(--font-barlow)' }}>{step.title}</h3>
                  <p className="text-sm text-silver/60 leading-relaxed" style={{ fontFamily:'var(--font-inter)' }}>{step.desc}</p>
                </div>
              </div>
            ))}
            {/* Divergence label */}
            <div className="flex items-center gap-3 my-6">
              <div className="flex-1 h-px bg-blue-accent/20" />
              <span className="text-xs text-silver/40 uppercase tracking-widest font-semibold px-3" style={{ fontFamily:'var(--font-inter)' }}>Paths diverge by level</span>
              <div className="flex-1 h-px bg-blue-accent/20" />
            </div>
          </div>

          {/* Side-by-side paths */}
          <div className="grid lg:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {/* Level 1 path */}
            <div className="rounded-2xl border border-emerald-500/30 bg-emerald-500/5 p-6">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-6" style={{ fontFamily:'var(--font-inter)' }}>
                <Shield size={10} /> Level 1 — FCI Path
              </div>
              <div className="space-y-4">
                {[
                  { n: '03', title: 'Gap Assessment',     desc: 'Our RPs assess your environment against all 17 Level 1 practices and deliver a written remediation report with your estimated SPRS score.' },
                  { n: '04', title: 'Remediation',        desc: 'We help you implement required controls, deploy security tools, and close every gap before your self-assessment.' },
                  { n: '05', title: 'Documentation',      desc: 'We draft your SSP, policies, and POA&M covering all 17 practices.' },
                  { n: '06', title: 'Self-Assessment & SPRS Submission', desc: 'You complete the annual self-assessment, a senior official affirms the results, and your score is submitted to SPRS.' },
                ].map((step) => (
                  <div key={step.n} className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center flex-shrink-0">
                      <span className="text-emerald-400 font-bold text-xs" style={{ fontFamily:'var(--font-barlow)' }}>{step.n}</span>
                    </div>
                    <div>
                      <h3 className="text-white font-semibold text-sm mb-0.5" style={{ fontFamily:'var(--font-barlow)' }}>{step.title}</h3>
                      <p className="text-xs text-silver/60 leading-relaxed" style={{ fontFamily:'var(--font-inter)' }}>{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6 pt-5 border-t border-emerald-500/20">
                <Link href="/cmmc/level-1" className="inline-flex items-center gap-1.5 text-xs text-emerald-400 hover:text-emerald-300 font-medium transition-colors" style={{ fontFamily:'var(--font-inter)' }}>
                  Learn about Level 1 <ArrowRight size={12} />
                </Link>
              </div>
            </div>

            {/* Level 2 path */}
            <div className="rounded-2xl border border-violet-500/30 bg-violet-500/5 p-6">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-violet-500/30 bg-violet-500/10 text-violet-400 text-xs font-semibold uppercase tracking-wider mb-6" style={{ fontFamily:'var(--font-inter)' }}>
                <Shield size={10} /> Level 2 — CUI Path
              </div>
              <div className="space-y-4">
                {[
                  { n: '03', title: 'Gap Assessment',     desc: 'Our RPs assess your environment against all 110 NIST SP 800-171 r2 practices, calculate your SPRS score, and deliver a prioritized remediation roadmap.' },
                  { n: '04', title: 'Remediation',        desc: 'We help you implement controls across all 14 domains, from MFA and encryption to incident response and risk assessments.' },
                  { n: '05', title: 'Documentation',      desc: 'We develop your SSP, all required policies and procedures, CUI boundary documentation, and your POA&M.' },
                  { n: '06', title: 'C3PAO Assessment & Certification', desc: 'We coordinate with your selected C3PAO, package evidence, support the on-site assessment, and guide you through to eMASS certification entry.' },
                ].map((step) => (
                  <div key={step.n} className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-violet-500/10 border border-violet-500/30 flex items-center justify-center flex-shrink-0">
                      <span className="text-violet-400 font-bold text-xs" style={{ fontFamily:'var(--font-barlow)' }}>{step.n}</span>
                    </div>
                    <div>
                      <h3 className="text-white font-semibold text-sm mb-0.5" style={{ fontFamily:'var(--font-barlow)' }}>{step.title}</h3>
                      <p className="text-xs text-silver/60 leading-relaxed" style={{ fontFamily:'var(--font-inter)' }}>{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6 pt-5 border-t border-violet-500/20">
                <Link href="/cmmc/level-2" className="inline-flex items-center gap-1.5 text-xs text-violet-400 hover:text-violet-300 font-medium transition-colors" style={{ fontFamily:'var(--font-inter)' }}>
                  Learn about Level 2 <ArrowRight size={12} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-galaxy py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-5" style={{ fontFamily:'var(--font-barlow)' }}>Ready to Get Started?</h2>
          <p className="text-silver/70 text-base mb-10 max-w-xl mx-auto" style={{ fontFamily:'var(--font-inter)' }}>
            Contact Galaxy Consulting today. We will schedule a free discovery call, determine which CMMC level applies to your contracts, and give you a clear path to certification.
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
