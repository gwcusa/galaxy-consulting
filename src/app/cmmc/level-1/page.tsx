import type { Metadata } from 'next';
import Link from 'next/link';
import { Shield, CheckCircle2, ArrowRight, AlertCircle, Clock, FileText } from 'lucide-react';

export const metadata: Metadata = {
  title: 'CMMC Level 1 — Foundational Cybersecurity for DoD Contractors',
  description: 'Learn about CMMC Level 1 certification: who needs it, the 17 required practices, the self-assessment process, and how Galaxy Consulting (CMMC RPO) helps you get compliant.',
};

const domains = [
  {
    id: 'AC',
    name: 'Access Control',
    color: 'text-emerald-400',
    border: 'border-emerald-500/30',
    bg: 'bg-emerald-500/5',
    ring: 'bg-emerald-500/10',
    practices: [
      { id: 'AC.L1-b.1.i',  title: 'Limit System Access to Authorized Users', desc: 'Only allow authorized users, processes, and devices to access your company\'s information systems and Federal Contract Information.' },
      { id: 'AC.L1-b.1.ii', title: 'Limit Access to Authorized Transactions', desc: 'Ensure users can only perform the specific functions their role requires — no more access than necessary.' },
      { id: 'AC.L1-b.1.iii', title: 'Control External System Connections', desc: 'Verify and control all connections to external systems, including cloud services and third-party networks.' },
      { id: 'AC.L1-b.1.iv', title: 'Control Publicly Accessible Systems', desc: 'Regulate what information is posted or processed on publicly accessible systems to prevent unauthorized FCI disclosure.' },
    ],
  },
  {
    id: 'IA',
    name: 'Identification & Authentication',
    color: 'text-cyan-400',
    border: 'border-cyan-500/30',
    bg: 'bg-cyan-500/5',
    ring: 'bg-cyan-500/10',
    practices: [
      { id: 'IA.L1-b.1.i',  title: 'Identify System Users and Devices', desc: 'All users, processes, and devices that access your systems must be identified — no anonymous or generic accounts.' },
      { id: 'IA.L1-b.1.ii', title: 'Authenticate Identities Before Access', desc: 'Verify the identity of all users, processes, and devices before granting access — passwords, MFA, or certificates.' },
    ],
  },
  {
    id: 'MP',
    name: 'Media Protection',
    color: 'text-violet-400',
    border: 'border-violet-500/30',
    bg: 'bg-violet-500/5',
    ring: 'bg-violet-500/10',
    practices: [
      { id: 'MP.L1-b.1.i',  title: 'Sanitize or Destroy Media Before Disposal', desc: 'Securely wipe or destroy hard drives, USB drives, and other media containing FCI before disposal or reuse.' },
    ],
  },
  {
    id: 'PE',
    name: 'Physical Protection',
    color: 'text-amber-400',
    border: 'border-amber-500/30',
    bg: 'bg-amber-500/5',
    ring: 'bg-amber-500/10',
    practices: [
      { id: 'PE.L1-b.1.i',  title: 'Limit Physical Access to Authorized Individuals', desc: 'Restrict physical access to computers, servers, and network equipment to authorized personnel only.' },
      { id: 'PE.L1-b.1.ii', title: 'Escort Visitors and Monitor Activity', desc: 'Escort visitors in sensitive areas and maintain logs of visitor access to your facilities.' },
      { id: 'PE.L1-b.1.iii', title: 'Maintain Physical Access Audit Logs', desc: 'Keep records of who physically accesses areas containing information systems that process FCI.' },
      { id: 'PE.L1-b.1.iv', title: 'Manage Physical Access Devices', desc: 'Control and track physical access devices such as keys, key cards, and access badges.' },
    ],
  },
  {
    id: 'SC',
    name: 'System & Communications Protection',
    color: 'text-blue-bright',
    border: 'border-blue-accent/30',
    bg: 'bg-blue-accent/5',
    ring: 'bg-blue-accent/10',
    practices: [
      { id: 'SC.L1-b.1.i',  title: 'Monitor and Protect Communications at Boundaries', desc: 'Monitor and control your network at external boundaries and key internal boundaries — firewalls are typically required.' },
      { id: 'SC.L1-b.1.ii', title: 'Implement Subnetworks for Public Components', desc: 'Separate publicly accessible system components (like web servers) into isolated subnetworks from internal systems.' },
    ],
  },
  {
    id: 'SI',
    name: 'System & Information Integrity',
    color: 'text-rose-400',
    border: 'border-rose-500/30',
    bg: 'bg-rose-500/5',
    ring: 'bg-rose-500/10',
    practices: [
      { id: 'SI.L1-b.1.i',  title: 'Identify and Correct System Flaws Timely', desc: 'Apply security patches and fix known vulnerabilities in your operating systems and software in a timely manner.' },
      { id: 'SI.L1-b.1.ii', title: 'Provide Malicious Code Protection', desc: 'Deploy antivirus and anti-malware software on all systems that process or store FCI.' },
      { id: 'SI.L1-b.1.iii', title: 'Update Malicious Code Protection Mechanisms', desc: 'Keep antivirus and anti-malware definitions current — enable automatic updates where possible.' },
      { id: 'SI.L1-b.1.iv', title: 'Perform Periodic and Real-Time Scans', desc: 'Run regular scheduled scans of your systems and enable real-time scanning of all files.' },
    ],
  },
];

const selfAssessmentSteps = [
  { step: '1', title: 'Conduct Internal Review', desc: 'Assess your organization against all 17 practices. Galaxy\'s RPs guide you through each one.' },
  { step: '2', title: 'Calculate Your SPRS Score', desc: 'Document your compliance status. Each unmet practice reduces your score from the maximum of 110.' },
  { step: '3', title: 'Create a Plan of Action', desc: 'For any gaps, document a corrective action plan with target completion dates.' },
  { step: '4', title: 'Affirm and Submit to SPRS', desc: 'A senior company official affirms the assessment results and submits your score to the DoD\'s Supplier Performance Risk System (SPRS).' },
  { step: '5', title: 'Annual Renewal', desc: 'CMMC Level 1 self-assessments must be renewed annually and affirmed by a senior official each year.' },
];

export default function CMMCLevel1Page() {
  return (
    <>
      {/* ── HEADER ── */}
      <section className="bg-galaxy py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 mb-4">
            <Link href="/cmmc" className="text-xs text-silver/50 hover:text-silver transition-colors" style={{ fontFamily:'var(--font-inter)' }}>CMMC</Link>
            <span className="text-silver/30 text-xs">/</span>
            <span className="text-xs text-emerald-400 font-medium" style={{ fontFamily:'var(--font-inter)' }}>Level 1</span>
          </div>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-emerald-500/40 bg-emerald-500/10 text-emerald-400 text-xs font-semibold tracking-widest uppercase mb-4" style={{ fontFamily:'var(--font-inter)' }}>
            <Shield size={11} /> Foundational — 17 Practices
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-5" style={{ fontFamily:'var(--font-barlow)' }}>
            CMMC Level 1:<br />Foundational Cybersecurity
          </h1>
          <p className="text-silver/70 text-base max-w-2xl" style={{ fontFamily:'var(--font-inter)' }}>
            CMMC Level 1 applies to every DoD contractor that handles Federal Contract Information (FCI). Here is everything you need to know about the 17 required practices, the self-assessment process, and how to get compliant.
          </p>
        </div>
      </section>

      {/* ── WHO NEEDS IT ── */}
      <section className="py-20 bg-section-alt">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-14 items-start">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white section-heading mb-6" style={{ fontFamily:'var(--font-barlow)' }}>Who Needs CMMC Level 1?</h2>
              <div className="space-y-4 text-sm text-silver/80 leading-relaxed" style={{ fontFamily:'var(--font-inter)' }}>
                <p>
                  CMMC Level 1 is required for <strong className="text-white">any company that receives, processes, or stores Federal Contract Information (FCI)</strong> under a DoD contract or subcontract.
                </p>
                <p>
                  FCI is defined as information provided by or generated for the government under a contract to develop or deliver a product or service to the government — and that is not intended for public release.
                </p>
                <p>
                  This means even small businesses, sole proprietors, and subcontractors deep in the DoD supply chain may be required to achieve CMMC Level 1.
                </p>
              </div>
              <div className="mt-6 space-y-2">
                {[
                  'DoD prime contractors with FCI on their systems',
                  'Subcontractors who receive FCI from a prime',
                  'IT service providers supporting DoD contractors with FCI',
                  'Small businesses in the defense industrial base (DIB)',
                ].map((item) => (
                  <div key={item} className="flex items-start gap-2.5">
                    <CheckCircle2 size={15} className="text-emerald-400 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-silver/80" style={{ fontFamily:'var(--font-inter)' }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Key facts */}
            <div className="space-y-4">
              <h3 className="text-white font-bold text-lg mb-2" style={{ fontFamily:'var(--font-barlow)' }}>Key Facts About CMMC Level 1</h3>
              {[
                { icon: Shield,       label: '17 Practices',         desc: 'Based on the 15 requirements in FAR 52.204-21 plus two additional access control practices.', color: 'text-emerald-400', bg: 'bg-emerald-500/10' },
                { icon: FileText,     label: 'Annual Self-Assessment', desc: 'Companies self-assess and affirm their score annually — no third-party auditor required for Level 1.', color: 'text-cyan-400', bg: 'bg-cyan-500/10' },
                { icon: Clock,        label: '3-Year Validity',       desc: 'CMMC Level 1 certification is valid for 3 years, with annual affirmations required in years 2 and 3.', color: 'text-violet-400', bg: 'bg-violet-500/10' },
                { icon: AlertCircle,  label: 'Contract Requirement',  desc: 'Contracts with the CMMC DFARS clause require compliance before award — non-compliant companies cannot bid.', color: 'text-amber-400', bg: 'bg-amber-500/10' },
              ].map((f) => (
                <div key={f.label} className="card-surface rounded-xl p-4 border border-blue-accent/20 flex items-start gap-4">
                  <div className={`p-2 rounded-lg flex-shrink-0 ${f.bg}`}>
                    <f.icon size={18} className={f.color} />
                  </div>
                  <div>
                    <div className={`text-sm font-semibold mb-0.5 ${f.color}`} style={{ fontFamily:'var(--font-barlow)' }}>{f.label}</div>
                    <div className="text-xs text-silver/60 leading-relaxed" style={{ fontFamily:'var(--font-inter)' }}>{f.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 17 PRACTICES ── */}
      <section className="py-24 bg-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-emerald-400 text-xs font-semibold uppercase tracking-widest mb-3" style={{ fontFamily:'var(--font-inter)' }}>The Requirements</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white section-heading section-heading-center" style={{ fontFamily:'var(--font-barlow)' }}>The 17 CMMC Level 1 Practices</h2>
            <p className="mt-5 text-silver/70 text-sm max-w-2xl mx-auto" style={{ fontFamily:'var(--font-inter)' }}>
              These 17 practices are derived from FAR 52.204-21 and cover six security domains. Every DoD contractor handling FCI must implement all 17.
            </p>
          </div>
          <div className="space-y-6">
            {domains.map((domain) => (
              <div key={domain.id} className={`rounded-xl border ${domain.border} ${domain.bg} p-6`}>
                <div className="flex items-center gap-3 mb-5">
                  <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${domain.ring} ${domain.color} border ${domain.border}`} style={{ fontFamily:'var(--font-inter)' }}>
                    {domain.id}
                  </span>
                  <h3 className={`font-bold text-base ${domain.color}`} style={{ fontFamily:'var(--font-barlow)' }}>{domain.name}</h3>
                  <span className="text-xs text-silver/40 ml-auto" style={{ fontFamily:'var(--font-inter)' }}>{domain.practices.length} practice{domain.practices.length > 1 ? 's' : ''}</span>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  {domain.practices.map((p) => (
                    <div key={p.id} className="bg-navy/50 rounded-lg p-4 border border-white/5">
                      <div className="flex items-start gap-2.5 mb-1.5">
                        <CheckCircle2 size={14} className={`${domain.color} flex-shrink-0 mt-0.5`} />
                        <span className="text-sm font-semibold text-white" style={{ fontFamily:'var(--font-barlow)' }}>{p.title}</span>
                      </div>
                      <p className="text-xs text-silver/60 leading-relaxed pl-[22px]" style={{ fontFamily:'var(--font-inter)' }}>{p.desc}</p>
                      <div className="mt-2 pl-[22px]">
                        <span className="text-xs font-mono text-silver/30">{p.id}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <p className="text-center text-xs text-silver/40 mt-8" style={{ fontFamily:'var(--font-inter)' }}>
            Source: CMMC Model v2.0 — Official documentation available at{' '}
            <a href="https://cyberab.org" target="_blank" rel="noopener noreferrer" className="text-emerald-400 hover:underline">cyberab.org</a>
          </p>
        </div>
      </section>

      {/* ── SELF-ASSESSMENT PROCESS ── */}
      <section className="py-24 bg-section-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-emerald-400 text-xs font-semibold uppercase tracking-widest mb-3" style={{ fontFamily:'var(--font-inter)' }}>The Process</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white section-heading section-heading-center" style={{ fontFamily:'var(--font-barlow)' }}>The CMMC Level 1 Self-Assessment Process</h2>
            <p className="mt-5 text-silver/70 text-sm max-w-2xl mx-auto" style={{ fontFamily:'var(--font-inter)' }}>
              Unlike Level 2 and Level 3, CMMC Level 1 does not require a third-party auditor. You self-assess, affirm, and submit your score to the DoD&apos;s SPRS system.
            </p>
          </div>
          <div className="max-w-3xl mx-auto space-y-4">
            {selfAssessmentSteps.map((s) => (
              <div key={s.step} className="card-surface rounded-xl p-5 border border-emerald-500/20 flex items-start gap-5">
                <div className="w-10 h-10 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center flex-shrink-0">
                  <span className="text-emerald-400 font-bold text-sm" style={{ fontFamily:'var(--font-barlow)' }}>{s.step}</span>
                </div>
                <div>
                  <h3 className="text-white font-semibold text-sm mb-1" style={{ fontFamily:'var(--font-barlow)' }}>{s.title}</h3>
                  <p className="text-sm text-silver/60 leading-relaxed" style={{ fontFamily:'var(--font-inter)' }}>{s.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Galaxy's role callout */}
          <div className="mt-10 max-w-3xl mx-auto bg-emerald-500/5 border border-emerald-500/30 rounded-xl p-6">
            <div className="flex items-start gap-3">
              <Shield size={20} className="text-emerald-400 flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="text-white font-semibold text-sm mb-2" style={{ fontFamily:'var(--font-barlow)' }}>How Galaxy Consulting Helps</h4>
                <p className="text-sm text-silver/70 leading-relaxed" style={{ fontFamily:'var(--font-inter)' }}>
                  As your CMMC RPO, Galaxy Consulting guides you through every step of this process. Our Registered Practitioners conduct the gap assessment, help remediate deficiencies, draft your SSP and documentation, and prepare your team for the self-assessment and SPRS submission — so you can focus on running your business.
                </p>
                <Link href="/cmmc/services" className="mt-3 inline-flex items-center gap-1.5 text-sm text-emerald-400 hover:text-emerald-300 font-medium transition-colors" style={{ fontFamily:'var(--font-inter)' }}>
                  See Our CMMC Services <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-galaxy py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-5" style={{ fontFamily:'var(--font-barlow)' }}>Not Sure Where to Start?</h2>
          <p className="text-silver/70 text-base mb-10 max-w-xl mx-auto" style={{ fontFamily:'var(--font-inter)' }}>
            Galaxy Consulting offers a free initial consultation to help you understand your current CMMC Level 1 posture and what it will take to get certified.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="px-8 py-3.5 bg-emerald-500 hover:bg-emerald-400 text-navy font-semibold rounded-lg transition-all hover:-translate-y-0.5 shadow-lg shadow-emerald-500/25" style={{ fontFamily:'var(--font-inter)' }}>
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
