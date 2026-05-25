import type { Metadata } from 'next';
import Link from 'next/link';
import { Shield, ArrowRight, HelpCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'CMMC Level 1 FAQ — Frequently Asked Questions for DoD Contractors',
  description: 'Answers to the most common CMMC Level 1 questions: who needs it, the 17 practices, self-assessment process, RPO vs C3PAO, costs, timelines, and more.',
};

const faqs = [
  {
    category: 'CMMC Basics',
    color: 'text-emerald-400',
    border: 'border-emerald-500/30',
    bg: 'bg-emerald-500/5',
    items: [
      {
        q: 'What is CMMC?',
        a: 'The Cybersecurity Maturity Model Certification (CMMC) is a U.S. Department of Defense (DoD) program that requires all DoD contractors and subcontractors to verify their cybersecurity practices. CMMC replaced the previous self-attestation model with a structured framework that must be met before contract award. The program is managed by the Cyber-AB (formerly the CMMC Accreditation Body), which is authorized by the DoD to oversee the certification ecosystem.',
      },
      {
        q: 'What are the three CMMC levels?',
        a: 'CMMC has three levels: Level 1 (Foundational) requires 17 basic cybersecurity practices to protect Federal Contract Information (FCI). Level 2 (Advanced) requires 110 practices aligned with NIST SP 800-171 r2 to protect Controlled Unclassified Information (CUI). Level 3 (Expert) requires 110+ practices and is designed to protect CUI against advanced persistent threats (APTs). Most small DoD contractors need Level 1.',
      },
      {
        q: 'What is Federal Contract Information (FCI)?',
        a: 'Federal Contract Information (FCI) is information provided by or generated for the government under a contract to develop or deliver a product or service — and that is not intended for public release. If your company receives, stores, processes, or transmits any FCI, you are required to meet CMMC Level 1. FCI is different from Controlled Unclassified Information (CUI), which triggers CMMC Level 2.',
      },
      {
        q: 'When do DoD contracts require CMMC compliance?',
        a: 'The DoD is phasing CMMC requirements into contracts through the DFARS clause 252.204-7021. As contracts are renewed or new contracts are awarded, the CMMC requirement will be included. Contractors should begin preparing now — waiting until a contract requires it leaves no time to remediate gaps. The DoD has stated that all contracts with FCI or CUI will eventually require CMMC certification.',
      },
      {
        q: 'What happens if I am not CMMC compliant?',
        a: 'If a contract requires CMMC and your company is not certified, you will be ineligible to bid on or perform that contract. As a subcontractor, you may be removed from your prime contractor\'s supply chain. Non-compliance can also result in contract termination for existing contracts that include CMMC requirements. Starting your CMMC preparation early is critical to protecting your DoD business.',
      },
    ],
  },
  {
    category: 'CMMC Level 1 Specifics',
    color: 'text-cyan-400',
    border: 'border-cyan-500/30',
    bg: 'bg-cyan-500/5',
    items: [
      {
        q: 'What is CMMC Level 1?',
        a: 'CMMC Level 1 is the foundational tier of the CMMC framework. It requires organizations to implement 17 basic cybersecurity practices derived from FAR 52.204-21. These practices cover six domains: Access Control, Identification and Authentication, Media Protection, Physical Protection, System and Communications Protection, and System and Information Integrity. Level 1 is required for any DoD contractor that handles Federal Contract Information (FCI).',
      },
      {
        q: 'Who needs CMMC Level 1 certification?',
        a: 'Any company in the DoD supply chain that receives, processes, stores, or transmits Federal Contract Information (FCI) needs CMMC Level 1. This includes prime contractors, subcontractors, and IT service providers who handle FCI on behalf of a contractor. Even small businesses and sole proprietors are not exempt if they handle FCI under a DoD contract.',
      },
      {
        q: 'What are the 17 CMMC Level 1 practices?',
        a: 'The 17 practices span six domains: Access Control (4 practices) — limit system access to authorized users and transactions, control external connections, and manage publicly accessible systems. Identification & Authentication (2 practices) — identify and authenticate all users and devices. Media Protection (1 practice) — sanitize media before disposal. Physical Protection (4 practices) — limit physical access, escort visitors, maintain physical access logs, manage access devices. System & Communications Protection (2 practices) — monitor and control communications at network boundaries. System & Information Integrity (4 practices) — patch systems, deploy anti-malware, update protections, and scan for threats.',
      },
      {
        q: 'Is CMMC Level 1 a self-assessment or a third-party audit?',
        a: 'CMMC Level 1 is a self-assessment. Your organization assesses itself against all 17 practices, calculates your SPRS score, and has a senior company official affirm the results. The affirmation is then submitted to the DoD\'s Supplier Performance Risk System (SPRS). No third-party C3PAO auditor is required for Level 1 — however, working with an RPO like Galaxy Consulting ensures your self-assessment is accurate and defensible.',
      },
      {
        q: 'How often does CMMC Level 1 need to be renewed?',
        a: 'CMMC Level 1 certification is valid for three years. However, an annual affirmation is required — each year, a senior company official must affirm that the organization continues to meet all 17 Level 1 practices. If your environment changes significantly (new systems, new contracts, staff changes), you should review your compliance status and update your System Security Plan accordingly.',
      },
      {
        q: 'What is the SPRS score and how does it work?',
        a: 'The Supplier Performance Risk System (SPRS) is the DoD database where contractors submit their CMMC self-assessment scores. For CMMC Level 1, the maximum score is 110. Each practice that is not fully implemented reduces your score. A score of 110 means all practices are met. Your SPRS score is visible to DoD contracting officers and can influence contract award decisions. Submitting a score you cannot support with documentation is a federal compliance risk.',
      },
    ],
  },
  {
    category: 'Working with an RPO',
    color: 'text-violet-400',
    border: 'border-violet-500/30',
    bg: 'bg-violet-500/5',
    items: [
      {
        q: 'What is a CMMC RPO (Registered Provider Organization)?',
        a: 'A CMMC Registered Provider Organization (RPO) is a consulting firm officially authorized by the Cyber-AB to provide non-certified advisory and consulting services to organizations seeking CMMC certification. RPOs employ Registered Practitioners (RPs) who are trained and vetted to help DoD contractors understand CMMC requirements, identify gaps, implement controls, and prepare documentation. Galaxy Consulting is a Cyber-AB authorized CMMC RPO.',
      },
      {
        q: 'What is the difference between an RPO and a C3PAO?',
        a: 'An RPO (Registered Provider Organization) is a consulting firm that helps you prepare for CMMC certification — they do not conduct official assessments. A C3PAO (CMMC Third-Party Assessment Organization) is an accredited body that conducts the official CMMC Level 2 and Level 3 certification assessments. For CMMC Level 1, you do not need a C3PAO — you self-assess. An RPO like Galaxy Consulting helps you prepare your self-assessment accurately.',
      },
      {
        q: 'Do I need an RPO to get CMMC Level 1?',
        a: 'Technically no — Level 1 is a self-assessment that you can conduct yourself. However, working with an RPO significantly reduces the risk of errors, missed practices, or documentation deficiencies that could result in a lower SPRS score or failed compliance. Small businesses often lack the in-house cybersecurity expertise to confidently assess themselves. An RPO provides that expertise and ensures your self-assessment is accurate, thorough, and defensible.',
      },
      {
        q: 'What does Galaxy Consulting charge for CMMC services?',
        a: 'Galaxy Consulting offers fixed-scope engagement pricing so you know exactly what you are paying before work begins. Costs vary based on your organization\'s size, current security posture, and which services you need (gap assessment only, full remediation support, documentation, or ongoing RP staffing). Contact us for a free initial consultation and a no-obligation proposal tailored to your situation.',
      },
    ],
  },
  {
    category: 'Preparation & Timeline',
    color: 'text-amber-400',
    border: 'border-amber-500/30',
    bg: 'bg-amber-500/5',
    items: [
      {
        q: 'How long does it take to achieve CMMC Level 1 compliance?',
        a: 'Timeline depends on your starting point. Organizations that already have basic cybersecurity practices in place (antivirus, firewalls, access controls) may be able to complete remediation and documentation in 4–8 weeks. Organizations starting from scratch with minimal security controls may take 2–4 months. Galaxy Consulting\'s gap assessment will give you a precise timeline estimate based on your specific situation.',
      },
      {
        q: 'What documentation do I need for CMMC Level 1?',
        a: 'At minimum you need a System Security Plan (SSP) that documents how your organization implements each of the 17 Level 1 practices. You should also have an Acceptable Use Policy, an Incident Response Plan, and a Media Sanitization Policy. If any practices are not yet fully implemented, a Plan of Action & Milestones (POA&M) documents your corrective actions. Galaxy Consulting drafts all of these documents as part of our Documentation service.',
      },
      {
        q: 'What is a System Security Plan (SSP)?',
        a: 'A System Security Plan (SSP) is a written document that describes your organization\'s information systems, boundaries, and how you implement each CMMC security practice. It is the primary evidence document for your CMMC Level 1 self-assessment. The SSP must be kept current and updated whenever your environment changes. Galaxy Consulting drafts SSPs tailored to your specific systems and practices.',
      },
      {
        q: 'Can a small business with basic IT handle CMMC Level 1?',
        a: 'Yes — CMMC Level 1 is specifically designed to be achievable for small businesses. The 17 practices represent basic cyber hygiene that any responsible business should already have in place, such as using strong passwords, deploying antivirus software, keeping systems patched, and controlling who can access your systems and facilities. With guidance from an RPO, most small businesses can achieve Level 1 compliance without major infrastructure investment.',
      },
      {
        q: 'What cybersecurity tools do I need for CMMC Level 1?',
        a: 'CMMC Level 1 does not mandate specific products, but you will likely need: a firewall (hardware or software) at your network boundary, antivirus/anti-malware software on all endpoints with automatic updates enabled, a patch management process to keep systems updated, multi-factor authentication (MFA) or strong password policies, and physical access controls (locks, access logs). Galaxy Consulting helps you select and deploy the right tools for your environment and budget.',
      },
    ],
  },
];

export default function CMMCFAQPage() {
  return (
    <>
      {/* ── HEADER ── */}
      <section className="bg-galaxy py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 mb-4">
            <Link href="/cmmc" className="text-xs text-silver/50 hover:text-silver transition-colors" style={{ fontFamily:'var(--font-inter)' }}>CMMC</Link>
            <span className="text-silver/30 text-xs">/</span>
            <span className="text-xs text-emerald-400 font-medium" style={{ fontFamily:'var(--font-inter)' }}>FAQ</span>
          </div>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-emerald-500/40 bg-emerald-500/10 text-emerald-400 text-xs font-semibold tracking-widest uppercase mb-4" style={{ fontFamily:'var(--font-inter)' }}>
            <HelpCircle size={11} /> Frequently Asked Questions
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-5" style={{ fontFamily:'var(--font-barlow)' }}>
            CMMC Level 1 FAQ
          </h1>
          <p className="text-silver/70 text-base max-w-2xl" style={{ fontFamily:'var(--font-inter)' }}>
            Answers to the most common questions from DoD contractors and subcontractors navigating CMMC Level 1 compliance. Content sourced from official Cyber-AB and DoD CMMC program guidance.
          </p>
        </div>
      </section>

      {/* ── FAQ SECTIONS ── */}
      <section className="py-20 bg-section-alt">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {faqs.map((section) => (
              <div key={section.category}>
                <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full border ${section.border} ${section.bg} ${section.color} text-xs font-semibold uppercase tracking-wider mb-6`} style={{ fontFamily:'var(--font-inter)' }}>
                  <Shield size={10} /> {section.category}
                </div>
                <div className="space-y-3">
                  {section.items.map((item) => (
                    <details key={item.q} className="group card-surface rounded-xl border border-blue-accent/20 overflow-hidden">
                      <summary className="flex items-start justify-between gap-4 px-6 py-4 cursor-pointer list-none">
                        <span className="text-sm font-semibold text-white group-open:text-emerald-400 transition-colors leading-snug" style={{ fontFamily:'var(--font-barlow)' }}>
                          {item.q}
                        </span>
                        <span className="text-silver/40 group-open:text-emerald-400 transition-colors flex-shrink-0 mt-0.5 text-lg leading-none select-none">
                          <span className="group-open:hidden">+</span>
                          <span className="hidden group-open:inline">−</span>
                        </span>
                      </summary>
                      <div className="px-6 pb-5 pt-1 border-t border-blue-accent/10">
                        <p className="text-sm text-silver/70 leading-relaxed" style={{ fontFamily:'var(--font-inter)' }}>{item.a}</p>
                      </div>
                    </details>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Still have questions */}
          <div className="mt-14 bg-emerald-500/5 border border-emerald-500/30 rounded-xl p-8 text-center">
            <Shield size={28} className="text-emerald-400 mx-auto mb-4" />
            <h3 className="text-white font-bold text-xl mb-3" style={{ fontFamily:'var(--font-barlow)' }}>Still Have Questions?</h3>
            <p className="text-silver/70 text-sm mb-6 max-w-md mx-auto" style={{ fontFamily:'var(--font-inter)' }}>
              Our Registered Practitioners are ready to answer your specific CMMC questions. Contact Galaxy Consulting for a free initial consultation — no obligation.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-500 hover:bg-emerald-400 text-navy font-semibold rounded-lg transition-colors text-sm" style={{ fontFamily:'var(--font-inter)' }}>
                Contact Our CMMC Team <ArrowRight size={15} />
              </Link>
              <Link href="/cmmc/resources" className="inline-flex items-center gap-2 px-6 py-3 border border-silver/20 text-silver hover:text-white rounded-lg transition-colors text-sm" style={{ fontFamily:'var(--font-inter)' }}>
                Official CMMC Resources
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
