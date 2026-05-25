import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import {
  Shield, CheckCircle2, ArrowRight, Star, Award, Users,
  FileText, Wrench, Search, ClipboardCheck,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'CMMC RPO — CMMC Level 1 Certification Support for DoD Contractors',
  description: 'Galaxy Consulting is a Cyber-AB authorized CMMC RPO helping small DoD contractors achieve CMMC Level 1 certification. Gap assessments, remediation, documentation, and staffing.',
};

const stats = [
  { value: '17',    label: 'Level 1 Security Practices' },
  { value: 'RPO',   label: 'Cyber-AB Authorized' },
  { value: '3 Yrs', label: 'Certification Validity' },
  { value: 'L1+L2', label: 'Galaxy Certified' },
];

const services = [
  {
    icon: Search,
    title: 'Gap Assessment',
    desc: 'We evaluate your current security posture against all 17 CMMC Level 1 practices and identify exactly what needs to be fixed before your assessment.',
    href: '/cmmc/services',
    accent: 'text-emerald-400',
    ring: 'bg-emerald-400/10',
    border: 'border-emerald-500/30',
  },
  {
    icon: Wrench,
    title: 'Remediation & Preparation',
    desc: 'We help you implement the technical controls, policies, and cybersecurity tools required to close every gap identified in your assessment.',
    href: '/cmmc/services',
    accent: 'text-cyan-400',
    ring: 'bg-cyan-400/10',
    border: 'border-cyan-500/30',
  },
  {
    icon: FileText,
    title: 'Documentation',
    desc: 'We draft your System Security Plan (SSP), policies, and procedures — the written evidence auditors need to confirm your compliance.',
    href: '/cmmc/services',
    accent: 'text-violet-400',
    ring: 'bg-violet-400/10',
    border: 'border-violet-500/30',
  },
  {
    icon: Users,
    title: 'RP Staffing',
    desc: 'Access our Cyber-AB Registered Practitioners (RPs) — vetted professionals who translate complex CMMC requirements into clear, actionable steps for your team.',
    href: '/cmmc/services',
    accent: 'text-amber-400',
    ring: 'bg-amber-400/10',
    border: 'border-amber-500/30',
  },
];

const steps = [
  {
    number: '01',
    title: 'Initial Consultation',
    desc: 'We learn about your business, your DoD contracts, and your current IT environment — no technical jargon, no pressure.',
  },
  {
    number: '02',
    title: 'Gap Assessment',
    desc: 'Our RPs evaluate your systems against all 17 CMMC Level 1 practices and deliver a clear remediation roadmap.',
  },
  {
    number: '03',
    title: 'Remediation & Documentation',
    desc: 'We help you fix deficiencies, implement required controls, and produce all required documentation including your SSP.',
  },
  {
    number: '04',
    title: 'Self-Assessment & Submission',
    desc: 'You complete the annual CMMC Level 1 self-assessment and submit your affirmed score to the Supplier Performance Risk System (SPRS).',
  },
];

const whyGalaxy = [
  'Cyber-AB authorized CMMC RPO — officially listed in the CMMC marketplace',
  'Galaxy itself is CMMC Level 1 and Level 2 certified — we practice what we preach',
  'Registered Practitioners (RPs) on staff with hands-on compliance experience',
  'Veteran-led firm with 50+ years of DoD and government IT experience',
  'Plain-English guidance — we make CMMC understandable for small businesses',
  'Fixed-scope engagements so you know exactly what you are paying for',
];

export default function CMMCPage() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="relative min-h-[88vh] flex items-center overflow-hidden bg-galaxy">
        <div className="absolute inset-0 hero-dots pointer-events-none select-none opacity-60" />
        {/* Star field */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none select-none">
          {[
            [8,12],[15,45],[22,78],[30,25],[38,60],[45,88],[52,15],[60,52],[68,33],[75,70],
            [82,8],[90,42],[5,65],[18,90],[35,5],[48,75],[62,20],[78,55],[92,30],[12,38],
            [25,82],[42,48],[55,10],[70,85],[85,65],[3,50],[16,22],[29,68],[44,35],[58,92],
          ].map(([left, top], i) => (
            <div key={i} className="star absolute w-px h-px bg-white rounded-full"
              style={{ left:`${left}%`, top:`${top}%`, '--star-dur':`${2+(i%5)}s`, '--star-delay':`${(i*0.13)%4}s`, '--star-opacity':`${0.3+(i%7)*0.1}` } as React.CSSProperties} />
          ))}
        </div>
        {/* Emerald glow */}
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] pointer-events-none"
          style={{ background: 'radial-gradient(ellipse, rgba(52,211,153,0.07) 0%, transparent 65%)' }} />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="max-w-3xl">
            {/* RPO Official Badge + text badge row */}
            <div className="flex items-center gap-4 mb-4">
              <Image
                src="/RPO_Registered.jpg"
                alt="CMMC-AB Registered Provider Organization (RPO)"
                width={80}
                height={80}
                className="rounded-full shadow-lg shadow-orange-500/20"
              />
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-emerald-500/40 bg-emerald-500/10 text-emerald-400 text-xs font-semibold tracking-widest uppercase" style={{ fontFamily:'var(--font-inter)' }}>
                <Shield size={11} /> CMMC Registered Provider Organization (RPO)
              </div>
            </div>
            {/* Cyber-AB sub-badge */}
            <div className="flex items-center gap-2 mb-6">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-blue-accent/30 bg-blue-accent/10 text-blue-bright text-xs font-medium" style={{ fontFamily:'var(--font-inter)' }}>
                <Award size={10} /> Cyber-AB Authorized
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-violet-500/30 bg-violet-500/10 text-violet-400 text-xs font-medium" style={{ fontFamily:'var(--font-inter)' }}>
                <Star size={10} /> CMMC L1 &amp; L2 Certified
              </span>
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight gradient-text mb-6" style={{ fontFamily:'var(--font-barlow)' }}>
              Your CMMC Level 1<br />Certification<br />Starts Here
            </h1>
            <p className="text-lg sm:text-xl text-silver/80 max-w-2xl leading-relaxed mb-10" style={{ fontFamily:'var(--font-inter)' }}>
              Galaxy Consulting is a Cyber-AB authorized CMMC RPO helping small DoD contractors achieve CMMC Level 1 compliance — from gap assessment through your official self-assessment submission.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact" className="inline-flex items-center gap-2 px-7 py-3.5 bg-emerald-500 hover:bg-emerald-400 text-navy font-bold rounded-lg transition-all duration-200 hover:-translate-y-0.5 shadow-lg shadow-emerald-500/25" style={{ fontFamily:'var(--font-inter)' }}>
                Get a Free Readiness Consultation <ArrowRight size={17} />
              </Link>
              <Link href="/cmmc/level-1" className="inline-flex items-center gap-2 px-7 py-3.5 border border-silver/20 text-silver hover:text-white hover:border-emerald-500/50 rounded-lg transition-all duration-200" style={{ fontFamily:'var(--font-inter)' }}>
                What is CMMC Level 1?
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS BAR ── */}
      <section className="bg-navy-mid border-y border-emerald-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:divide-x lg:divide-emerald-500/20">
            {stats.map((s) => (
              <div key={s.label} className="flex flex-col items-center text-center py-2">
                <span className="text-4xl font-bold text-emerald-400" style={{ fontFamily:'var(--font-barlow)' }}>{s.value}</span>
                <span className="text-xs text-silver/60 mt-1.5 max-w-[120px] leading-snug" style={{ fontFamily:'var(--font-inter)' }}>{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHAT IS CMMC ── */}
      <section className="py-24 bg-section-alt">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div>
              <p className="text-emerald-400 text-xs font-semibold uppercase tracking-widest mb-3" style={{ fontFamily:'var(--font-inter)' }}>Understanding CMMC</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-white section-heading mb-6" style={{ fontFamily:'var(--font-barlow)' }}>What is CMMC?</h2>
              <div className="space-y-4 text-sm text-silver/80 leading-relaxed" style={{ fontFamily:'var(--font-inter)' }}>
                <p>
                  The <strong className="text-white">Cybersecurity Maturity Model Certification (CMMC)</strong> is a U.S. Department of Defense (DoD) program that requires all DoD prime contractors and subcontractors to verify their cybersecurity practices before being awarded contracts.
                </p>
                <p>
                  If your company handles <strong className="text-white">Federal Contract Information (FCI)</strong> — any information provided by or generated for the government under a contract — you are required to meet <strong className="text-white">CMMC Level 1</strong>.
                </p>
                <p>
                  CMMC is not optional. As the DoD phases CMMC into contract requirements, companies that cannot demonstrate compliance will be ineligible to bid on or perform DoD contracts.
                </p>
              </div>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="/cmmc/level-1" className="inline-flex items-center gap-2 px-5 py-2.5 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 hover:bg-emerald-500/20 text-sm font-medium rounded-lg transition-colors" style={{ fontFamily:'var(--font-inter)' }}>
                  CMMC Level 1 Details <ArrowRight size={14} />
                </Link>
                <Link href="/cmmc/faq" className="inline-flex items-center gap-2 px-5 py-2.5 border border-silver/20 text-silver hover:text-white text-sm font-medium rounded-lg transition-colors" style={{ fontFamily:'var(--font-inter)' }}>
                  CMMC FAQs <ArrowRight size={14} />
                </Link>
              </div>
            </div>

            {/* Level cards */}
            <div className="space-y-4">
              {[
                { level: 'Level 1', label: 'Foundational', color: 'emerald', practices: '17 Practices', desc: 'Basic cyber hygiene to protect Federal Contract Information (FCI). Annual self-assessment required. Required for all DoD contractors handling FCI.', current: true },
                { level: 'Level 2', label: 'Advanced', color: 'violet', practices: '110 Practices', desc: 'Advanced cybersecurity aligned with NIST SP 800-171 r2 to protect Controlled Unclassified Information (CUI). Third-party assessment required.', current: false },
                { level: 'Level 3', label: 'Expert', color: 'blue', practices: '110+ Practices', desc: 'Enhanced practices against advanced persistent threats (APTs). Reserved for the most critical DoD programs.', current: false },
              ].map((l) => (
                <div key={l.level} className={`card-surface rounded-xl p-5 border ${l.current ? 'border-emerald-500/40 bg-emerald-500/5' : 'border-blue-accent/20'}`}>
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <div>
                      <span className={`text-xs font-bold uppercase tracking-wider ${l.current ? 'text-emerald-400' : 'text-silver/50'}`} style={{ fontFamily:'var(--font-inter)' }}>{l.level} — {l.label}</span>
                      {l.current && <span className="ml-2 text-xs px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 font-medium" style={{ fontFamily:'var(--font-inter)' }}>Galaxy Focuses Here</span>}
                    </div>
                    <span className={`text-xs font-mono px-2 py-1 rounded ${l.current ? 'bg-emerald-500/10 text-emerald-400' : 'bg-blue-accent/10 text-blue-bright'}`} style={{ fontFamily:'var(--font-inter)' }}>{l.practices}</span>
                  </div>
                  <p className="text-xs text-silver/60 leading-relaxed" style={{ fontFamily:'var(--font-inter)' }}>{l.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── WHAT IS AN RPO ── */}
      <section className="py-20 bg-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <p className="text-emerald-400 text-xs font-semibold uppercase tracking-widest mb-3" style={{ fontFamily:'var(--font-inter)' }}>Our Role</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white section-heading section-heading-center mb-5" style={{ fontFamily:'var(--font-barlow)' }}>What is a CMMC RPO?</h2>
            <p className="text-silver/70 text-sm leading-relaxed" style={{ fontFamily:'var(--font-inter)' }}>
              A <strong className="text-white">Registered Provider Organization (RPO)</strong> is a consulting firm officially authorized by the Cyber AB — the DoD&apos;s CMMC accreditation body — to provide advisory and preparation services to organizations seeking CMMC certification.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 mb-10">
            {[
              { title: 'RPO (Galaxy Consulting)', role: 'Advisory & Preparation', desc: 'Helps you understand requirements, fix gaps, build documentation, and prepare for your assessment. Does NOT conduct the official certification assessment.', highlight: true },
              { title: 'C3PAO', role: 'Third-Party Assessor', desc: 'An accredited organization that conducts the official CMMC Level 2 and Level 3 certification assessments. Independent from RPOs.', highlight: false },
              { title: 'OSC (You)', role: 'Organization Seeking Certification', desc: 'Your company — a DoD prime contractor or subcontractor that must achieve CMMC certification to be eligible for DoD contracts.', highlight: false },
            ].map((item) => (
              <div key={item.title} className={`rounded-xl p-6 border ${item.highlight ? 'bg-emerald-500/5 border-emerald-500/40' : 'card-surface border-blue-accent/20'}`}>
                <div className={`text-xs font-bold uppercase tracking-wider mb-1 ${item.highlight ? 'text-emerald-400' : 'text-blue-bright'}`} style={{ fontFamily:'var(--font-inter)' }}>{item.role}</div>
                <h3 className="text-white font-semibold text-base mb-3" style={{ fontFamily:'var(--font-barlow)' }}>{item.title}</h3>
                <p className="text-sm text-silver/70 leading-relaxed" style={{ fontFamily:'var(--font-inter)' }}>{item.desc}</p>
                {item.highlight && (
                  <div className="mt-4 inline-flex items-center gap-1.5 text-xs text-emerald-400 font-medium" style={{ fontFamily:'var(--font-inter)' }}>
                    <CheckCircle2 size={13} /> Cyber-AB Authorized
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CMMC SERVICES ── */}
      <section className="py-24 bg-section-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-emerald-400 text-xs font-semibold uppercase tracking-widest mb-3" style={{ fontFamily:'var(--font-inter)' }}>What We Do</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white section-heading section-heading-center" style={{ fontFamily:'var(--font-barlow)' }}>CMMC Advisory Services</h2>
            <p className="mt-5 text-silver/70 text-sm max-w-xl mx-auto" style={{ fontFamily:'var(--font-inter)' }}>
              End-to-end CMMC Level 1 preparation — from your first gap assessment to your final SPRS score submission.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {services.map((s) => (
              <Link key={s.title} href={s.href} className="group">
                <div className={`card-hover card-surface rounded-xl border ${s.border} p-6 h-full flex flex-col`}>
                  <div className={`inline-flex p-2.5 rounded-lg mb-4 w-fit ${s.ring}`}>
                    <s.icon size={20} className={s.accent} />
                  </div>
                  <h3 className={`text-base font-semibold text-white mb-2.5 group-hover:${s.accent} transition-colors`} style={{ fontFamily:'var(--font-barlow)' }}>{s.title}</h3>
                  <p className="text-sm text-silver/70 leading-relaxed flex-1" style={{ fontFamily:'var(--font-inter)' }}>{s.desc}</p>
                  <div className={`mt-4 flex items-center gap-1.5 ${s.accent} text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity`} style={{ fontFamily:'var(--font-inter)' }}>
                    Learn more <ArrowRight size={13} />
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/cmmc/services" className="inline-flex items-center gap-2 px-6 py-3 border border-emerald-500/40 text-emerald-400 hover:bg-emerald-500/10 rounded-lg transition-all font-medium text-sm" style={{ fontFamily:'var(--font-inter)' }}>
              View Full Service Details <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── 4-STEP PROCESS ── */}
      <section className="py-24 bg-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-emerald-400 text-xs font-semibold uppercase tracking-widest mb-3" style={{ fontFamily:'var(--font-inter)' }}>The Journey</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white section-heading section-heading-center" style={{ fontFamily:'var(--font-barlow)' }}>How We Get You Certified</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, i) => (
              <div key={step.number} className="relative">
                {i < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-full w-full h-px bg-emerald-500/20 z-0" style={{ width: 'calc(100% - 2rem)', left: 'calc(50% + 2rem)' }} />
                )}
                <div className="card-surface rounded-xl p-6 border border-emerald-500/20 relative z-10">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center mb-4">
                    <span className="text-emerald-400 font-bold text-sm" style={{ fontFamily:'var(--font-barlow)' }}>{step.number}</span>
                  </div>
                  <h3 className="text-white font-semibold text-base mb-2" style={{ fontFamily:'var(--font-barlow)' }}>{step.title}</h3>
                  <p className="text-sm text-silver/60 leading-relaxed" style={{ fontFamily:'var(--font-inter)' }}>{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY GALAXY ── */}
      <section className="py-24 bg-section-alt">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-14 items-start">
            <div>
              <p className="text-emerald-400 text-xs font-semibold uppercase tracking-widest mb-3" style={{ fontFamily:'var(--font-inter)' }}>Why Choose Us</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-white section-heading mb-8" style={{ fontFamily:'var(--font-barlow)' }}>Why Galaxy Consulting as Your CMMC RPO?</h2>
              <ul className="space-y-4">
                {whyGalaxy.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 size={17} className="text-emerald-400 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-silver leading-relaxed" style={{ fontFamily:'var(--font-inter)' }}>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-10 flex flex-wrap gap-4">
                <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-500 hover:bg-emerald-400 text-navy font-semibold rounded-lg transition-colors" style={{ fontFamily:'var(--font-inter)' }}>
                  Start Your CMMC Journey <ArrowRight size={16} />
                </Link>
                <Link href="/certifications" className="inline-flex items-center gap-2 px-6 py-3 border border-silver/20 text-silver hover:text-white rounded-lg transition-colors text-sm" style={{ fontFamily:'var(--font-inter)' }}>
                  View Our Credentials
                </Link>
              </div>
            </div>

            {/* Credentials card */}
            <div className="bg-card-surface rounded-2xl p-8 border border-emerald-500/20">
              <div className="flex items-center gap-4 mb-6">
                <Image
                  src="/RPO_Registered.jpg"
                  alt="CMMC-AB RPO"
                  width={64}
                  height={64}
                  className="rounded-full shadow-md shadow-orange-500/20 flex-shrink-0"
                />
                <h3 className="text-white font-bold text-lg" style={{ fontFamily:'var(--font-barlow)' }}>Galaxy&apos;s CMMC Credentials</h3>
              </div>
              <div className="space-y-3 mb-6">
                {[
                  { label: 'CMMC RPO', sub: 'Cyber-AB Registered Provider Organization', color: 'text-emerald-400', bg: 'bg-emerald-500/10', border: 'border-emerald-500/30' },
                  { label: 'CMMC L1', sub: 'CMMC Level 1 Certified — 17 Practices', color: 'text-cyan-400', bg: 'bg-cyan-500/10', border: 'border-cyan-500/30' },
                  { label: 'CMMC L2', sub: 'CMMC Level 2 Certified — 110 Practices', color: 'text-violet-400', bg: 'bg-violet-500/10', border: 'border-violet-500/30' },
                  { label: 'RP Staff', sub: 'Registered Practitioners on our team', color: 'text-amber-400', bg: 'bg-amber-500/10', border: 'border-amber-500/30' },
                ].map((c) => (
                  <div key={c.label} className={`flex items-center gap-3 rounded-lg px-4 py-3 border ${c.bg} ${c.border}`}>
                    <span className={`font-bold text-sm w-16 flex-shrink-0 ${c.color}`} style={{ fontFamily:'var(--font-barlow)' }}>{c.label}</span>
                    <span className="text-xs text-silver/70" style={{ fontFamily:'var(--font-inter)' }}>{c.sub}</span>
                  </div>
                ))}
              </div>
              <div className="divider mb-5" />
              <p className="text-xs text-silver/50 leading-relaxed" style={{ fontFamily:'var(--font-inter)' }}>
                Galaxy Consulting is listed in the official Cyber-AB CMMC Marketplace. We hold CMMC Level 1 and Level 2 certifications ourselves — meaning we have done exactly what we are guiding you to do.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-galaxy py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-emerald-500/40 bg-emerald-500/10 text-emerald-400 text-xs font-semibold tracking-widest uppercase mb-6" style={{ fontFamily:'var(--font-inter)' }}>
            <Shield size={11} /> CMMC RPO
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-5" style={{ fontFamily:'var(--font-barlow)' }}>Ready to Become CMMC Level 1 Compliant?</h2>
          <p className="text-silver/70 text-base mb-10 max-w-xl mx-auto" style={{ fontFamily:'var(--font-inter)' }}>
            Contact Galaxy Consulting today for a free initial consultation. We will assess your current posture and give you a plain-English roadmap to certification.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="px-8 py-3.5 bg-emerald-500 hover:bg-emerald-400 text-navy font-semibold rounded-lg transition-all hover:-translate-y-0.5 duration-200 shadow-lg shadow-emerald-500/25" style={{ fontFamily:'var(--font-inter)' }}>
              Get Free Consultation
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
