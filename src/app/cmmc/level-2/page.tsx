import type { Metadata } from 'next';
import Link from 'next/link';
import { Shield, CheckCircle2, ArrowRight, AlertCircle, Clock, FileText, Lock, Eye, Settings, RefreshCw } from 'lucide-react';

export const metadata: Metadata = {
  title: 'CMMC Level 2 — Advanced Cybersecurity for DoD Contractors Handling CUI',
  description: 'Learn about CMMC Level 2 certification: who needs it, the 110 NIST SP 800-171 practices across 14 domains, the C3PAO assessment process, and how Galaxy Consulting (CMMC RPO) helps you prepare.',
};

const domains = [
  {
    id: 'AC',
    name: 'Access Control',
    color: 'text-emerald-400',
    border: 'border-emerald-500/30',
    bg: 'bg-emerald-500/5',
    ring: 'bg-emerald-500/10',
    count: 22,
    practices: [
      { id: 'AC.L2-3.1.1',  title: 'Limit System Access to Authorized Users', desc: 'Limit information system access to authorized users, processes acting on behalf of authorized users, and devices (including other information systems).' },
      { id: 'AC.L2-3.1.3',  title: 'Control CUI Flow', desc: 'Control the flow of CUI in accordance with approved authorizations. Enforce information flow policies between interconnected systems.' },
      { id: 'AC.L2-3.1.5',  title: 'Employ Least Privilege', desc: 'Employ the principle of least privilege, including for specific security functions and privileged accounts.' },
      { id: 'AC.L2-3.1.12', title: 'Control Remote Access', desc: 'Monitor and control remote access sessions. Employ cryptographic mechanisms to protect the confidentiality of remote access sessions.' },
      { id: 'AC.L2-3.1.17', title: 'Protect Wireless Access', desc: 'Protect wireless access using authentication and encryption. Identify and authenticate wireless users prior to granting access.' },
      { id: 'AC.L2-3.1.20', title: 'Control Use of External Systems', desc: 'Verify and control/limit connections to external information systems. Prohibit the use of portable storage devices on external systems without verifiable controls.' },
    ],
  },
  {
    id: 'AT',
    name: 'Awareness & Training',
    color: 'text-sky-400',
    border: 'border-sky-500/30',
    bg: 'bg-sky-500/5',
    ring: 'bg-sky-500/10',
    count: 3,
    practices: [
      { id: 'AT.L2-3.2.1', title: 'Conduct Security Awareness Activities', desc: 'Ensure personnel are aware of the security risks associated with their activities and of applicable policies, standards, and procedures related to CUI.' },
      { id: 'AT.L2-3.2.2', title: 'Role-Based Security Training', desc: 'Ensure personnel are trained to carry out their assigned information security responsibilities. Provide role-based security training before authorizing access.' },
      { id: 'AT.L2-3.2.3', title: 'Insider Threat Awareness', desc: 'Provide security awareness training on recognizing and reporting potential indicators of insider threat.' },
    ],
  },
  {
    id: 'AU',
    name: 'Audit & Accountability',
    color: 'text-cyan-400',
    border: 'border-cyan-500/30',
    bg: 'bg-cyan-500/5',
    ring: 'bg-cyan-500/10',
    count: 9,
    practices: [
      { id: 'AU.L2-3.3.1', title: 'Create and Retain System Audit Logs', desc: 'Create and retain system audit logs to enable monitoring, analysis, investigation, and reporting of unlawful or unauthorized activity.' },
      { id: 'AU.L2-3.3.2', title: 'Ensure Audit Accountability', desc: 'Ensure the actions of individual users can be traced to those users so they can be held accountable for their actions.' },
      { id: 'AU.L2-3.3.5', title: 'Correlate Audit Records', desc: 'Correlate audit record review, analysis, and reporting processes for investigation and response to indications of unlawful, unauthorized, suspicious activity.' },
    ],
  },
  {
    id: 'CM',
    name: 'Configuration Management',
    color: 'text-teal-400',
    border: 'border-teal-500/30',
    bg: 'bg-teal-500/5',
    ring: 'bg-teal-500/10',
    count: 9,
    practices: [
      { id: 'CM.L2-3.4.1', title: 'Establish Baseline Configurations', desc: 'Establish and maintain baseline configurations and inventories of organizational systems (including hardware, software, firmware, and documentation).' },
      { id: 'CM.L2-3.4.2', title: 'Establish Configuration Settings', desc: 'Establish and enforce security configuration settings for information technology products used in organizational systems.' },
      { id: 'CM.L2-3.4.6', title: 'Employ Least Functionality', desc: 'Configure systems to provide only essential capabilities, prohibiting or restricting functions, ports, protocols, and services not required.' },
    ],
  },
  {
    id: 'IA',
    name: 'Identification & Authentication',
    color: 'text-violet-400',
    border: 'border-violet-500/30',
    bg: 'bg-violet-500/5',
    ring: 'bg-violet-500/10',
    count: 11,
    practices: [
      { id: 'IA.L2-3.5.1', title: 'Identify and Authenticate System Users', desc: 'Identify and authenticate organizational users, processes acting on behalf of users, and devices before allowing access to organizational systems.' },
      { id: 'IA.L2-3.5.3', title: 'Use Multi-Factor Authentication (MFA)', desc: 'Use multi-factor authentication for local and network access to privileged accounts and remote access to non-privileged accounts.' },
      { id: 'IA.L2-3.5.7', title: 'Enforce Password Complexity', desc: 'Enforce minimum password complexity and change requirements. Prohibit password reuse for a specified number of generations.' },
    ],
  },
  {
    id: 'IR',
    name: 'Incident Response',
    color: 'text-rose-400',
    border: 'border-rose-500/30',
    bg: 'bg-rose-500/5',
    ring: 'bg-rose-500/10',
    count: 3,
    practices: [
      { id: 'IR.L2-3.6.1', title: 'Establish Incident Handling Capability', desc: 'Establish an operational incident-handling capability including preparation, detection, analysis, containment, recovery, and user response activities.' },
      { id: 'IR.L2-3.6.2', title: 'Track and Report Incidents', desc: 'Track, document, and report incidents to designated officials and/or authorities both internal and external to the organization.' },
      { id: 'IR.L2-3.6.3', title: 'Incident Response Testing', desc: 'Test the organizational incident response capability including testing of roles and responsibilities.' },
    ],
  },
  {
    id: 'MA',
    name: 'Maintenance',
    color: 'text-amber-400',
    border: 'border-amber-500/30',
    bg: 'bg-amber-500/5',
    ring: 'bg-amber-500/10',
    count: 6,
    practices: [
      { id: 'MA.L2-3.7.1', title: 'Perform System Maintenance', desc: 'Perform maintenance on organizational systems. Approve and monitor all maintenance activities, whether performed on site or remotely.' },
      { id: 'MA.L2-3.7.2', title: 'Control Maintenance Tools', desc: 'Provide controls on the tools, techniques, mechanisms, and personnel that perform maintenance on organizational systems.' },
      { id: 'MA.L2-3.7.5', title: 'Require MFA for Remote Maintenance', desc: 'Require multi-factor authentication to establish nonlocal maintenance sessions via external network connections, and terminate such connections when maintenance is complete.' },
    ],
  },
  {
    id: 'MP',
    name: 'Media Protection',
    color: 'text-purple-400',
    border: 'border-purple-500/30',
    bg: 'bg-purple-500/5',
    ring: 'bg-purple-500/10',
    count: 9,
    practices: [
      { id: 'MP.L2-3.8.1', title: 'Protect System Media', desc: 'Protect system media (both paper and digital) containing CUI, both paper and digital. Mark media with necessary CUI markings and distribution limitations.' },
      { id: 'MP.L2-3.8.3', title: 'Sanitize or Destroy Media', desc: 'Sanitize or destroy system media before disposal or reuse. Use NIST SP 800-88 guidelines for media sanitization.' },
      { id: 'MP.L2-3.8.7', title: 'Control Use of Removable Media', desc: 'Control the use of removable media on system components. Prohibit use of portable storage without an identifiable owner.' },
    ],
  },
  {
    id: 'PE',
    name: 'Physical Protection',
    color: 'text-orange-400',
    border: 'border-orange-500/30',
    bg: 'bg-orange-500/5',
    ring: 'bg-orange-500/10',
    count: 6,
    practices: [
      { id: 'PE.L2-3.10.1', title: 'Limit Physical Access', desc: 'Limit physical access to organizational systems, equipment, and operating environments to authorized individuals.' },
      { id: 'PE.L2-3.10.2', title: 'Protect and Monitor Physical Facility', desc: 'Protect and monitor the physical facility and support infrastructure for organizational systems.' },
      { id: 'PE.L2-3.10.6', title: 'Enforce Access Control for Alternative Work Sites', desc: 'Enforce safeguarding measures for CUI at alternate work sites. Apply appropriate protections for individuals working in telework environments.' },
    ],
  },
  {
    id: 'PS',
    name: 'Personnel Security',
    color: 'text-indigo-400',
    border: 'border-indigo-500/30',
    bg: 'bg-indigo-500/5',
    ring: 'bg-indigo-500/10',
    count: 2,
    practices: [
      { id: 'PS.L2-3.9.1', title: 'Screen Personnel', desc: 'Screen individuals prior to authorizing access to organizational systems containing CUI. Review and verify personnel security clearances and background investigations.' },
      { id: 'PS.L2-3.9.2', title: 'Protect CUI During Termination', desc: 'Ensure that CUI and system access are properly terminated upon employee departure. Conduct exit interviews, retrieve all access media, and disable all accounts.' },
    ],
  },
  {
    id: 'RA',
    name: 'Risk Assessment',
    color: 'text-lime-400',
    border: 'border-lime-500/30',
    bg: 'bg-lime-500/5',
    ring: 'bg-lime-500/10',
    count: 3,
    practices: [
      { id: 'RA.L2-3.11.1', title: 'Conduct Risk Assessments', desc: 'Periodically assess the risk to organizational operations, assets, and individuals resulting from the operation of organizational systems and the associated processing of CUI.' },
      { id: 'RA.L2-3.11.2', title: 'Scan for Vulnerabilities', desc: 'Scan for vulnerabilities in organizational systems and applications periodically. Remediate vulnerabilities in accordance with risk assessments.' },
      { id: 'RA.L2-3.11.3', title: 'Remediate Vulnerabilities', desc: 'Remediate vulnerabilities in accordance with risk assessments. Develop and implement a plan for vulnerability remediation and tracking.' },
    ],
  },
  {
    id: 'CA',
    name: 'Security Assessment',
    color: 'text-blue-bright',
    border: 'border-blue-accent/30',
    bg: 'bg-blue-accent/5',
    ring: 'bg-blue-accent/10',
    count: 4,
    practices: [
      { id: 'CA.L2-3.12.1', title: 'Periodically Assess Security Controls', desc: 'Periodically assess the security controls in organizational systems to determine if the controls are effective in their application.' },
      { id: 'CA.L2-3.12.2', title: 'Develop and Implement Plans of Action', desc: 'Develop and implement plans of action (POA&Ms) designed to correct deficiencies and reduce or eliminate vulnerabilities in organizational systems.' },
      { id: 'CA.L2-3.12.4', title: 'Develop System Security Plans', desc: 'Develop, document, and periodically update system security plans that describe the system boundaries, system operating environments, and how security requirements are implemented.' },
    ],
  },
  {
    id: 'SC',
    name: 'System & Communications Protection',
    color: 'text-fuchsia-400',
    border: 'border-fuchsia-500/30',
    bg: 'bg-fuchsia-500/5',
    ring: 'bg-fuchsia-500/10',
    count: 16,
    practices: [
      { id: 'SC.L2-3.13.1',  title: 'Monitor and Control Communications', desc: 'Monitor, control, and protect communications (transmissions of CUI) at the external boundaries and key internal boundaries of organizational systems.' },
      { id: 'SC.L2-3.13.8',  title: 'Implement Cryptographic Mechanisms', desc: 'Implement cryptographic mechanisms to prevent unauthorized disclosure of CUI during transmission, unless otherwise protected by alternative physical safeguards.' },
      { id: 'SC.L2-3.13.10', title: 'Establish Cryptographic Key Management', desc: 'Establish and manage cryptographic keys for required cryptography employed in organizational systems. Protect against both disclosure and modification of cryptographic keys.' },
      { id: 'SC.L2-3.13.15', title: 'Protect at Rest', desc: 'Protect the authenticity of communications sessions. Implement cryptographic mechanisms to protect the integrity of information during transmission and at rest.' },
    ],
  },
  {
    id: 'SI',
    name: 'System & Information Integrity',
    color: 'text-red-400',
    border: 'border-red-500/30',
    bg: 'bg-red-500/5',
    ring: 'bg-red-500/10',
    count: 7,
    practices: [
      { id: 'SI.L2-3.14.1', title: 'Identify and Correct Flaws', desc: 'Identify, report, and correct information and information system flaws in a timely manner.' },
      { id: 'SI.L2-3.14.2', title: 'Provide Protection from Malicious Code', desc: 'Provide protection from malicious code at appropriate locations within organizational information systems.' },
      { id: 'SI.L2-3.14.6', title: 'Monitor Systems for Security Alerts', desc: 'Monitor organizational systems, including inbound and outbound communications traffic, to detect attacks and indicators of potential attacks.' },
    ],
  },
];

const assessmentSteps = [
  { step: '1', title: 'Gap Assessment & Readiness Review', desc: 'Galaxy\'s RPs evaluate your environment against all 110 NIST SP 800-171 r2 practices, identify gaps, and deliver a prioritized remediation roadmap.' },
  { step: '2', title: 'Remediation & Control Implementation', desc: 'Implement required technical and administrative controls to close gaps — from MFA and encryption to access control policies and incident response plans.' },
  { step: '3', title: 'Documentation — SSP & POA&M', desc: 'Develop your System Security Plan (SSP), Policies and Procedures, and a Plan of Action & Milestones (POA&M) for any residual gaps accepted by the DoD.' },
  { step: '4', title: 'SPRS Score Submission', desc: 'Contractors must calculate and submit NIST SP 800-171 self-assessment scores to the Supplier Performance Risk System (SPRS). Submissions made in support of acquisitions with high sensitivity and risk levels will require a follow-on C3PAO assessment.' },
  { step: '5', title: 'C3PAO Assessment', desc: 'A Cyber-AB accredited C3PAO (Third-Party Assessment Organization) conducts the official assessment of your environment against all 110 practices.' },
  { step: '6', title: 'Certification & eMASS Entry', desc: 'Upon successful completion, your certification is recorded in the DoD\'s Enterprise Mission Assurance Support Service (eMASS). Level 2 certification is valid for 3 years.' },
];

export default function CMMCLevel2Page() {
  return (
    <>
      {/* ── HEADER ── */}
      <section className="bg-galaxy py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 mb-4">
            <Link href="/cmmc" className="text-xs text-silver/50 hover:text-silver transition-colors" style={{ fontFamily:'var(--font-inter)' }}>CMMC</Link>
            <span className="text-silver/30 text-xs">/</span>
            <span className="text-xs text-violet-400 font-medium" style={{ fontFamily:'var(--font-inter)' }}>Level 2</span>
          </div>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-violet-500/40 bg-violet-500/10 text-violet-400 text-xs font-semibold tracking-widest uppercase mb-4" style={{ fontFamily:'var(--font-inter)' }}>
            <Shield size={11} /> Advanced — 110 Practices
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-5" style={{ fontFamily:'var(--font-barlow)' }}>
            CMMC Level 2:<br />Advanced Cybersecurity
          </h1>
          <p className="text-silver/70 text-base max-w-2xl" style={{ fontFamily:'var(--font-inter)' }}>
            CMMC Level 2 applies to DoD contractors that handle Controlled Unclassified Information (CUI). It encompasses all 110 security practices of NIST SP 800-171 r2 across 14 domains — and requires a formal third-party assessment by a Cyber-AB accredited C3PAO.
          </p>
          {/* Certified Banner */}
          <div className="mt-6 inline-flex items-start gap-3 px-5 py-3 rounded-xl border border-violet-500/30 bg-violet-500/8">
            <Lock size={16} className="text-violet-400 flex-shrink-0 mt-0.5" />
            <p className="text-sm text-silver/80" style={{ fontFamily:'var(--font-inter)' }}>
              <span className="text-violet-400 font-semibold">Galaxy Consulting has achieved CMMC Level 2 certification.</span>{' '}
              This accomplishment gives us direct, first-hand insight into exactly what your organization will face.
            </p>
          </div>
        </div>
      </section>

      {/* ── WHO NEEDS IT ── */}
      <section className="py-20 bg-section-alt">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-14 items-start">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white section-heading mb-6" style={{ fontFamily:'var(--font-barlow)' }}>Who Needs CMMC Level 2?</h2>
              <div className="space-y-4 text-sm text-silver/80 leading-relaxed" style={{ fontFamily:'var(--font-inter)' }}>
                <p>
                  CMMC Level 2 is required for any DoD contractor or subcontractor that handles <strong className="text-white">Controlled Unclassified Information (CUI)</strong> — a category of sensitive but unclassified federal data that requires protection under law, regulation, or government-wide policy.
                </p>
                <p>
                  CUI includes export-controlled technical data, defense technical information, personally identifiable information (PII), and other sensitive categories defined by the CUI Registry maintained by the National Archives and Records Administration (NARA).
                </p>
                <p>
                  If your DoD contract includes a DFARS 252.204-7012 clause or references NIST SP 800-171 compliance, you almost certainly need CMMC Level 2. As the DoD phases CMMC into solicitations, non-compliant companies will be ineligible to bid.
                </p>
              </div>
              <div className="mt-6 space-y-2">
                {[
                  'Defense contractors that receive, process, or store CUI',
                  'Subcontractors handling CUI passed down from primes',
                  'Companies with DFARS 252.204-7012 clauses in their contracts',
                  'Manufacturers producing defense-related products or components',
                  'IT service providers supporting organizations that process CUI',
                ].map((item) => (
                  <div key={item} className="flex items-start gap-2.5">
                    <CheckCircle2 size={15} className="text-violet-400 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-silver/80" style={{ fontFamily:'var(--font-inter)' }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Key facts */}
            <div className="space-y-4">
              <h3 className="text-white font-bold text-lg mb-2" style={{ fontFamily:'var(--font-barlow)' }}>Key Facts About CMMC Level 2</h3>
              {[
                { icon: Shield,        label: '110 Practices',           desc: 'Based on NIST SP 800-171 r2 — all 110 security requirements across 14 domains. Includes all 17 Level 1 practices.', color: 'text-violet-400', bg: 'bg-violet-500/10' },
                { icon: Eye,          label: 'C3PAO Assessment',         desc: 'Unlike Level 1, contracts which include requirements to access and process Controlled Unclassified Information (CUI), require CMMC Level 2 or Level 3 assessments. Contracts which are classified as "non-prioritized" acquisitions allow contractors to conduct CMMC Level 2 self-assessments. Acquisitions which include levels of CUI with higher sensitivity and risk require CMMC Level 2 or CMMC Level 3 formal third-party assessments led by a Cyber-AB an accredited Certified Third-Party Assessment Organization (C3PAO).', color: 'text-cyan-400', bg: 'bg-cyan-500/10' },
                { icon: Clock,        label: '3-Year Validity',           desc: 'CMMC Level 2 certification is valid for 3 years. A full re-assessment by a C3PAO is required at the end of each 3-year cycle.', color: 'text-emerald-400', bg: 'bg-emerald-500/10' },
                { icon: FileText,     label: 'SSP & POA&M Required',     desc: 'A System Security Plan (SSP) and Plan of Action & Milestones (POA&M) are required documentation artifacts for Level 2 assessment.', color: 'text-amber-400', bg: 'bg-amber-500/10' },
                { icon: AlertCircle,  label: 'DFARS 252.204-7012',       desc: 'Most companies that need Level 2 already have DFARS 252.204-7012 in their contracts. CMMC formalizes and verifies those existing obligations.', color: 'text-rose-400', bg: 'bg-rose-500/10' },
                { icon: Settings,     label: 'Annual Affirmation',        desc: 'In years 2 and 3, a senior company official must annually affirm continued compliance with all Level 2 practices in the CMMC portal.', color: 'text-blue-bright', bg: 'bg-blue-accent/10' },
              ].map((f) => (
                <div key={f.label} className="card-surface rounded-xl p-4 border border-violet-500/20 flex items-start gap-4">
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

      {/* ── L1 vs L2 COMPARISON ── */}
      <section className="py-20 bg-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-violet-400 text-xs font-semibold uppercase tracking-widest mb-3" style={{ fontFamily:'var(--font-inter)' }}>Understanding the Difference</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white section-heading section-heading-center" style={{ fontFamily:'var(--font-barlow)' }}>Level 1 vs. Level 2 — What Changes?</h2>
          </div>
          <div className="max-w-4xl mx-auto grid sm:grid-cols-2 gap-6">
            {[
              {
                title: 'CMMC Level 1', accent: 'text-emerald-400', border: 'border-emerald-500/30', bg: 'bg-emerald-500/5',
                items: [
                  '17 security practices across 6 domains',
                  'Protects Federal Contract Information (FCI)',
                  'Annual self-assessment — no third party required',
                  'Based on FAR 52.204-21',
                  'Required for all DoD contractors with FCI',
                ],
              },
              {
                title: 'CMMC Level 2', accent: 'text-violet-400', border: 'border-violet-500/30', bg: 'bg-violet-500/5',
                items: [
                  '110 security practices across 14 domains',
                  'Protects Controlled Unclassified Information (CUI)',
                  'Formal C3PAO third-party assessment required',
                  'Based on NIST SP 800-171 r2',
                  'Required for contractors that handle CUI',
                ],
              },
            ].map((col) => (
              <div key={col.title} className={`rounded-xl border ${col.border} ${col.bg} p-6`}>
                <h3 className={`font-bold text-base mb-4 ${col.accent}`} style={{ fontFamily:'var(--font-barlow)' }}>{col.title}</h3>
                <ul className="space-y-3">
                  {col.items.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm text-silver/80" style={{ fontFamily:'var(--font-inter)' }}>
                      <CheckCircle2 size={14} className={`${col.accent} flex-shrink-0 mt-0.5`} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <p className="text-center text-xs text-silver/50 mt-6 max-w-xl mx-auto" style={{ fontFamily:'var(--font-inter)' }}>
            CMMC Level 2 is a superset of Level 1 — all 17 Level 1 practices are included within the 110 Level 2 practices.
          </p>
        </div>
      </section>

      {/* ── 14 DOMAINS ── */}
      <section className="py-24 bg-section-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-violet-400 text-xs font-semibold uppercase tracking-widest mb-3" style={{ fontFamily:'var(--font-inter)' }}>The Requirements</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white section-heading section-heading-center" style={{ fontFamily:'var(--font-barlow)' }}>The 14 CMMC Level 2 Domains</h2>
            <p className="mt-5 text-silver/70 text-sm max-w-2xl mx-auto" style={{ fontFamily:'var(--font-inter)' }}>
              All 110 practices from NIST SP 800-171 r2 are organized into 14 security domains. Every organization seeking Level 2 must demonstrate compliance across all domains. Key representative practices are shown below.
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
                  <span className="text-xs text-silver/40 ml-auto" style={{ fontFamily:'var(--font-inter)' }}>{domain.count} practice{domain.count > 1 ? 's' : ''}</span>
                </div>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
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
                <p className="mt-3 text-xs text-silver/40 pl-1" style={{ fontFamily:'var(--font-inter)' }}>
                  Showing representative practices — {domain.id} domain contains {domain.count} total practice{domain.count > 1 ? 's' : ''} in NIST SP 800-171 r2.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── C3PAO ASSESSMENT PROCESS ── */}
      <section className="py-24 bg-section-alt">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-violet-400 text-xs font-semibold uppercase tracking-widest mb-3" style={{ fontFamily:'var(--font-inter)' }}>The Process</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white section-heading section-heading-center" style={{ fontFamily:'var(--font-barlow)' }}>The CMMC Level 2 Assessment Process</h2>
            <p className="mt-5 text-silver/70 text-sm max-w-2xl mx-auto" style={{ fontFamily:'var(--font-inter)' }}>
              Unlike Level 1, contracts which include levels of CUI require CMMC Level 2 or CMMC Level 3 assessments. Acquisition with higher sensitivity and risk require CMMC Level 2 or CMMC Level 3 formal third-party assessments led by a Cyber-AB an accredited Certified Third-Party Assessment Organization (C3PAO). Preparation is everything — organizations that go into the assessment without proper readiness risk costly delays and remediation cycles.
            </p>
          </div>
          <div className="max-w-3xl mx-auto space-y-4">
            {assessmentSteps.map((s) => (
              <div key={s.step} className="card-surface rounded-xl p-5 border border-violet-500/20 flex items-start gap-5">
                <div className="w-10 h-10 rounded-full bg-violet-500/10 border border-violet-500/30 flex items-center justify-center flex-shrink-0">
                  <span className="text-violet-400 font-bold text-sm" style={{ fontFamily:'var(--font-barlow)' }}>{s.step}</span>
                </div>
                <div>
                  <h3 className="text-white font-semibold text-sm mb-1" style={{ fontFamily:'var(--font-barlow)' }}>{s.title}</h3>
                  <p className="text-sm text-silver/60 leading-relaxed" style={{ fontFamily:'var(--font-inter)' }}>{s.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Galaxy's role callout */}
          <div className="mt-10 max-w-3xl mx-auto bg-violet-500/5 border border-violet-500/30 rounded-xl p-6">
            <div className="flex items-start gap-3">
              <Shield size={20} className="text-violet-400 flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="text-white font-semibold text-sm mb-2" style={{ fontFamily:'var(--font-barlow)' }}>How Galaxy Consulting Helps</h4>
                <p className="text-sm text-silver/70 leading-relaxed" style={{ fontFamily:'var(--font-inter)' }}>
                  As a CMMC RPO that has undergone a CMMC Level 2 certification, Galaxy Consulting brings direct, current experience to your Level 2 journey. Our Registered Practitioners guide you through gap assessment, control implementation, SSP and POA&amp;M development, SPRS submission, and C3PAO assessment coordination — so you walk into your assessment fully prepared.
                </p>
                <Link href="/cmmc/services" className="mt-3 inline-flex items-center gap-1.5 text-sm text-violet-400 hover:text-violet-300 font-medium transition-colors" style={{ fontFamily:'var(--font-inter)' }}>
                  See Our CMMC Services <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHAT IS CUI ── */}
      <section className="py-20 bg-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-14 items-start">
            <div>
              <p className="text-violet-400 text-xs font-semibold uppercase tracking-widest mb-3" style={{ fontFamily:'var(--font-inter)' }}>Understanding CUI</p>
              <h2 className="text-2xl sm:text-3xl font-bold text-white section-heading mb-6" style={{ fontFamily:'var(--font-barlow)' }}>What is Controlled Unclassified Information (CUI)?</h2>
              <div className="space-y-4 text-sm text-silver/80 leading-relaxed" style={{ fontFamily:'var(--font-inter)' }}>
                <p>
                  CUI is information the U.S. Government creates or possesses that requires safeguarding or dissemination controls pursuant to law, regulation, or government-wide policy — but is not classified.
                </p>
                <p>
                  The DoD uses CUI designations for technical data, engineering drawings, export-controlled information, sensitive acquisition information, proprietary business information, and much more.
                </p>
                <p>
                  If your contract includes a <strong className="text-white">DFARS 252.204-7012</strong> clause — Safeguarding Covered Defense Information — you are already legally obligated to protect CUI. CMMC Level 2 formalizes and verifies that obligation.
                </p>
              </div>
            </div>
            <div className="space-y-3">
              <h3 className="text-white font-bold text-base mb-3" style={{ fontFamily:'var(--font-barlow)' }}>Common CUI Categories in Defense Contracting</h3>
              {[
                { label: 'Technical Data',             desc: 'Engineering drawings, specifications, and design information related to defense systems.' },
                { label: 'Export Controlled (EAR/ITAR)', desc: 'Technology or data subject to Export Administration Regulations or International Traffic in Arms Regulations.' },
                { label: 'Acquisition & Procurement',  desc: 'Sensitive contract terms, cost and pricing data, source selection information.' },
                { label: 'Privacy / PII',               desc: 'Personally Identifiable Information pertaining to DoD personnel, contractors, or veterans.' },
                { label: 'Critical Infrastructure',    desc: 'Information related to the security or operation of critical defense infrastructure.' },
              ].map((c) => (
                <div key={c.label} className="card-surface rounded-lg p-4 border border-violet-500/20 flex items-start gap-3">
                  <RefreshCw size={14} className="text-violet-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="text-sm font-semibold text-white mb-0.5" style={{ fontFamily:'var(--font-barlow)' }}>{c.label}</div>
                    <div className="text-xs text-silver/60" style={{ fontFamily:'var(--font-inter)' }}>{c.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-galaxy py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-violet-500/40 bg-violet-500/10 text-violet-400 text-xs font-semibold tracking-widest uppercase mb-6" style={{ fontFamily:'var(--font-inter)' }}>
            <Shield size={11} /> CMMC Level 2 Preparation
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-5" style={{ fontFamily:'var(--font-barlow)' }}>Ready to Start Your Level 2 Journey?</h2>
          <p className="text-silver/70 text-base mb-10 max-w-xl mx-auto" style={{ fontFamily:'var(--font-inter)' }}>
            Galaxy Consulting offers a free initial consultation to assess your current CMMC Level 2 posture, identify critical gaps, and give you a clear roadmap to C3PAO assessment.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="px-8 py-3.5 bg-violet-600 hover:bg-violet-500 text-white font-semibold rounded-lg transition-all hover:-translate-y-0.5 shadow-lg shadow-violet-500/25" style={{ fontFamily:'var(--font-inter)' }}>
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
