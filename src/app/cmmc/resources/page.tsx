import type { Metadata } from 'next';
import Link from 'next/link';
import { Shield, ArrowRight, ExternalLink, FileText, CheckCircle2, BookOpen } from 'lucide-react';

export const metadata: Metadata = {
  title: 'CMMC Resources — Official DoD & Cyber-AB Links for DoD Contractors',
  description: 'Official CMMC resources for DoD contractors: Cyber-AB, DoD CMMC program site, NIST SP 800-171, DFARS 252.204-7012, FAR 52.204-21, SPRS guidance, and CMMC Level 1 and Level 2 reference checklists.',
};

const officialLinks = [
  {
    name: 'Cyber-AB (CMMC Accreditation Body)',
    url: 'https://cyberab.org',
    desc: 'The official Cyber-AB website — the DoD-authorized accreditation body that manages the CMMC ecosystem, RPO/C3PAO listings, and practitioner certifications.',
    badge: 'Official Accreditation Body',
    color: 'text-emerald-400',
    border: 'border-emerald-500/30',
    bg: 'bg-emerald-500/5',
  },
  {
    name: 'DoD CMMC Program Office',
    url: 'https://www.acq.osd.mil/cmmc/',
    desc: 'The official DoD CMMC program website with the latest policy updates, DFARS clauses, model documentation, and implementation guidance for contractors.',
    badge: 'Official DoD Program',
    color: 'text-cyan-400',
    border: 'border-cyan-500/30',
    bg: 'bg-cyan-500/5',
  },
  {
    name: 'Cyber-AB CMMC Marketplace',
    url: 'https://cyberab.org/catalog/',
    desc: 'The official Cyber-AB marketplace where you can verify RPO, C3PAO, and RP listings — including Galaxy Consulting\'s RPO authorization.',
    badge: 'Verify Providers',
    color: 'text-violet-400',
    border: 'border-violet-500/30',
    bg: 'bg-violet-500/5',
  },
  {
    name: 'NIST SP 800-171 Rev 2',
    url: 'https://csrc.nist.gov/publications/detail/sp/800-171/rev-2/final',
    desc: 'NIST Special Publication 800-171 Revision 2 — the security standard that underpins CMMC Level 2. Understanding this document provides context for Level 1 requirements.',
    badge: 'NIST Standard',
    color: 'text-amber-400',
    border: 'border-amber-500/30',
    bg: 'bg-amber-500/5',
  },
  {
    name: 'FAR 52.204-21',
    url: 'https://www.acquisition.gov/far/52.204-21',
    desc: 'Federal Acquisition Regulation clause 52.204-21 — the legal basis for CMMC Level 1. The 15 requirements in this clause form the foundation of the 17 Level 1 practices.',
    badge: 'Legal Basis for Level 1',
    color: 'text-blue-bright',
    border: 'border-blue-accent/30',
    bg: 'bg-blue-accent/5',
  },
  {
    name: 'DFARS 252.204-7012',
    url: 'https://www.acquisition.gov/dfars/252.204-7012',
    desc: 'Defense Federal Acquisition Regulation Supplement clause 252.204-7012 — Safeguarding Covered Defense Information. The legal basis for CMMC Level 2. If this clause is in your contract, you handle CUI and need Level 2.',
    badge: 'Legal Basis for Level 2',
    color: 'text-violet-400',
    border: 'border-violet-500/30',
    bg: 'bg-violet-500/5',
  },
  {
    name: 'SPRS (Supplier Performance Risk System)',
    url: 'https://www.sprs.csd.disa.mil/',
    desc: 'The DoD\'s Supplier Performance Risk System where contractors submit their CMMC self-assessment scores. DoD contracting officers can view your SPRS score.',
    badge: 'Score Submission Portal',
    color: 'text-rose-400',
    border: 'border-rose-500/30',
    bg: 'bg-rose-500/5',
  },
];

const level1Checklist = [
  { domain: 'Access Control',                     practice: 'Limit system access to authorized users only' },
  { domain: 'Access Control',                     practice: 'Limit user access to authorized transaction types' },
  { domain: 'Access Control',                     practice: 'Verify and control connections to external systems' },
  { domain: 'Access Control',                     practice: 'Control FCI on publicly accessible systems' },
  { domain: 'Identification & Authentication',    practice: 'Identify all users, processes, and devices' },
  { domain: 'Identification & Authentication',    practice: 'Authenticate identities before granting access' },
  { domain: 'Media Protection',                   practice: 'Sanitize or destroy media before disposal or reuse' },
  { domain: 'Physical Protection',                practice: 'Limit physical access to authorized individuals' },
  { domain: 'Physical Protection',                practice: 'Escort visitors and monitor visitor activity' },
  { domain: 'Physical Protection',                practice: 'Maintain audit logs of physical access' },
  { domain: 'Physical Protection',                practice: 'Control and manage physical access devices' },
  { domain: 'System & Communications Protection', practice: 'Monitor and protect communications at network boundaries' },
  { domain: 'System & Communications Protection', practice: 'Implement subnetworks for publicly accessible components' },
  { domain: 'System & Information Integrity',     practice: 'Identify and correct system flaws in a timely manner' },
  { domain: 'System & Information Integrity',     practice: 'Deploy malicious code protection on all systems' },
  { domain: 'System & Information Integrity',     practice: 'Update malicious code protection mechanisms regularly' },
  { domain: 'System & Information Integrity',     practice: 'Perform periodic and real-time system scans' },
];

const domainColors: Record<string, string> = {
  'Access Control':                     'text-emerald-400',
  'Identification & Authentication':    'text-cyan-400',
  'Media Protection':                   'text-violet-400',
  'Physical Protection':                'text-amber-400',
  'System & Communications Protection': 'text-blue-bright',
  'System & Information Integrity':     'text-rose-400',
};

export default function CMMCResourcesPage() {
  return (
    <>
      {/* ── HEADER ── */}
      <section className="bg-galaxy py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 mb-4">
            <Link href="/cmmc" className="text-xs text-silver/50 hover:text-silver transition-colors" style={{ fontFamily:'var(--font-inter)' }}>CMMC</Link>
            <span className="text-silver/30 text-xs">/</span>
            <span className="text-xs text-emerald-400 font-medium" style={{ fontFamily:'var(--font-inter)' }}>Resources</span>
          </div>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-emerald-500/40 bg-emerald-500/10 text-emerald-400 text-xs font-semibold tracking-widest uppercase mb-4" style={{ fontFamily:'var(--font-inter)' }}>
            <BookOpen size={11} /> Official CMMC Resources
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-5" style={{ fontFamily:'var(--font-barlow)' }}>
            CMMC Resources &amp;<br />Reference Materials
          </h1>
          <p className="text-silver/70 text-base max-w-2xl" style={{ fontFamily:'var(--font-inter)' }}>
            Official links, reference documents, and quick-reference checklists for CMMC Level 1 (17 practices) and Level 2 (110 practices across 14 domains). All content sourced from the Cyber-AB and DoD CMMC program office.
          </p>
        </div>
      </section>

      {/* ── OFFICIAL LINKS ── */}
      <section className="py-20 bg-section-alt">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <h2 className="text-2xl font-bold text-white section-heading mb-2" style={{ fontFamily:'var(--font-barlow)' }}>Official CMMC Links</h2>
            <p className="text-silver/60 text-sm" style={{ fontFamily:'var(--font-inter)' }}>
              Always verify CMMC information from these official government and Cyber-AB sources.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {officialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`group card-hover card-surface rounded-xl border ${link.border} ${link.bg} p-6 flex flex-col`}
              >
                <div className="flex items-start justify-between gap-2 mb-3">
                  <span className={`text-xs font-semibold px-2 py-0.5 rounded border ${link.border} ${link.color} bg-transparent`} style={{ fontFamily:'var(--font-inter)' }}>
                    {link.badge}
                  </span>
                  <ExternalLink size={13} className={`${link.color} opacity-50 group-hover:opacity-100 transition-opacity flex-shrink-0 mt-0.5`} />
                </div>
                <h3 className={`font-semibold text-sm text-white mb-2 group-hover:${link.color} transition-colors`} style={{ fontFamily:'var(--font-barlow)' }}>{link.name}</h3>
                <p className="text-xs text-silver/60 leading-relaxed flex-1" style={{ fontFamily:'var(--font-inter)' }}>{link.desc}</p>
                <div className={`mt-4 text-xs ${link.color} font-medium opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1`} style={{ fontFamily:'var(--font-inter)' }}>
                  Visit site <ExternalLink size={11} />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── LEVEL 1 CHECKLIST ── */}
      <section className="py-20 bg-navy">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/5 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-4" style={{ fontFamily:'var(--font-inter)' }}>
              <FileText size={10} /> Quick Reference
            </div>
            <h2 className="text-2xl font-bold text-white section-heading mb-2" style={{ fontFamily:'var(--font-barlow)' }}>CMMC Level 1 — All 17 Practices at a Glance</h2>
            <p className="text-silver/60 text-sm" style={{ fontFamily:'var(--font-inter)' }}>
              Use this checklist to do a quick self-check of your current compliance posture. For a thorough assessment, contact Galaxy Consulting.
            </p>
          </div>
          <div className="space-y-2">
            {level1Checklist.map((item, i) => (
              <div key={i} className="card-surface rounded-lg px-5 py-3.5 border border-blue-accent/20 flex items-center gap-4">
                <CheckCircle2 size={16} className={`flex-shrink-0 ${domainColors[item.domain]}`} />
                <span className="text-sm text-silver/80 flex-1" style={{ fontFamily:'var(--font-inter)' }}>{item.practice}</span>
                <span className={`text-xs flex-shrink-0 hidden sm:block ${domainColors[item.domain]} opacity-70`} style={{ fontFamily:'var(--font-inter)' }}>{item.domain}</span>
              </div>
            ))}
          </div>
          <p className="text-xs text-silver/40 mt-6 text-center" style={{ fontFamily:'var(--font-inter)' }}>
            For detailed practice descriptions and implementation guidance, see the{' '}
            <Link href="/cmmc/level-1" className="text-emerald-400 hover:underline">CMMC Level 1 page</Link>{' '}
            or visit{' '}
            <a href="https://cyberab.org" target="_blank" rel="noopener noreferrer" className="text-emerald-400 hover:underline">cyberab.org</a>.
          </p>
        </div>
      </section>

      {/* ── LEVEL 2 DOMAINS ── */}
      <section className="py-20 bg-section-alt">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-violet-500/30 bg-violet-500/5 text-violet-400 text-xs font-semibold uppercase tracking-wider mb-4" style={{ fontFamily:'var(--font-inter)' }}>
              <FileText size={10} /> Quick Reference
            </div>
            <h2 className="text-2xl font-bold text-white section-heading mb-2" style={{ fontFamily:'var(--font-barlow)' }}>CMMC Level 2 — 14 Domains at a Glance</h2>
            <p className="text-silver/60 text-sm" style={{ fontFamily:'var(--font-inter)' }}>
              All 110 Level 2 practices from NIST SP 800-171 r2 are organized into 14 security domains. Every organization seeking Level 2 must demonstrate compliance across all domains.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-3">
            {[
              { id: 'AC',  name: 'Access Control',                      count: 22, color: 'text-emerald-400', border: 'border-emerald-500/30', bg: 'bg-emerald-500/5' },
              { id: 'AT',  name: 'Awareness & Training',                count: 3,  color: 'text-sky-400',     border: 'border-sky-500/30',     bg: 'bg-sky-500/5' },
              { id: 'AU',  name: 'Audit & Accountability',              count: 9,  color: 'text-cyan-400',    border: 'border-cyan-500/30',    bg: 'bg-cyan-500/5' },
              { id: 'CM',  name: 'Configuration Management',            count: 9,  color: 'text-teal-400',    border: 'border-teal-500/30',    bg: 'bg-teal-500/5' },
              { id: 'IA',  name: 'Identification & Authentication',     count: 11, color: 'text-violet-400',  border: 'border-violet-500/30',  bg: 'bg-violet-500/5' },
              { id: 'IR',  name: 'Incident Response',                   count: 3,  color: 'text-rose-400',    border: 'border-rose-500/30',    bg: 'bg-rose-500/5' },
              { id: 'MA',  name: 'Maintenance',                         count: 6,  color: 'text-amber-400',   border: 'border-amber-500/30',   bg: 'bg-amber-500/5' },
              { id: 'MP',  name: 'Media Protection',                    count: 9,  color: 'text-purple-400',  border: 'border-purple-500/30',  bg: 'bg-purple-500/5' },
              { id: 'PE',  name: 'Physical Protection',                 count: 6,  color: 'text-orange-400',  border: 'border-orange-500/30',  bg: 'bg-orange-500/5' },
              { id: 'PS',  name: 'Personnel Security',                  count: 2,  color: 'text-indigo-400',  border: 'border-indigo-500/30',  bg: 'bg-indigo-500/5' },
              { id: 'RA',  name: 'Risk Assessment',                     count: 3,  color: 'text-lime-400',    border: 'border-lime-500/30',    bg: 'bg-lime-500/5' },
              { id: 'CA',  name: 'Security Assessment',                 count: 4,  color: 'text-blue-bright', border: 'border-blue-accent/30', bg: 'bg-blue-accent/5' },
              { id: 'SC',  name: 'System & Communications Protection',  count: 16, color: 'text-fuchsia-400', border: 'border-fuchsia-500/30', bg: 'bg-fuchsia-500/5' },
              { id: 'SI',  name: 'System & Information Integrity',      count: 7,  color: 'text-red-400',     border: 'border-red-500/30',     bg: 'bg-red-500/5' },
            ].map((d) => (
              <div key={d.id} className={`card-surface rounded-lg px-5 py-3.5 border ${d.border} ${d.bg} flex items-center gap-4`}>
                <span className={`font-bold text-xs w-8 flex-shrink-0 font-mono ${d.color}`} style={{ fontFamily:'var(--font-inter)' }}>{d.id}</span>
                <span className="text-sm text-silver/80 flex-1" style={{ fontFamily:'var(--font-inter)' }}>{d.name}</span>
                <span className={`text-xs flex-shrink-0 font-semibold ${d.color}`} style={{ fontFamily:'var(--font-inter)' }}>{d.count} practices</span>
              </div>
            ))}
          </div>
          <div className="mt-6 flex items-center justify-between">
            <p className="text-xs text-silver/40" style={{ fontFamily:'var(--font-inter)' }}>
              Total: 110 practices across 14 domains — sourced from NIST SP 800-171 r2.
            </p>
            <Link href="/cmmc/level-2" className="text-xs text-violet-400 hover:text-violet-300 font-medium transition-colors flex items-center gap-1" style={{ fontFamily:'var(--font-inter)' }}>
              Full Level 2 Details <ArrowRight size={11} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── RPO CALLOUT ── */}
      <section className="py-16 bg-section-alt">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-emerald-500/5 border border-emerald-500/30 rounded-xl p-8">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-xl bg-emerald-500/10 flex-shrink-0">
                <Shield size={22} className="text-emerald-400" />
              </div>
              <div>
                <h3 className="text-white font-bold text-lg mb-2" style={{ fontFamily:'var(--font-barlow)' }}>Need Help Interpreting These Requirements?</h3>
                <p className="text-sm text-silver/70 leading-relaxed mb-5" style={{ fontFamily:'var(--font-inter)' }}>
                  Galaxy Consulting is a Cyber-AB authorized CMMC RPO with Registered Practitioners on staff. We translate official CMMC requirements into plain-English action steps tailored to your specific business environment. Contact us for a free initial consultation.
                </p>
                <div className="flex flex-wrap gap-3">
                  <Link href="/contact" className="inline-flex items-center gap-2 px-5 py-2.5 bg-emerald-500 hover:bg-emerald-400 text-navy font-semibold rounded-lg transition-colors text-sm" style={{ fontFamily:'var(--font-inter)' }}>
                    Free Consultation <ArrowRight size={14} />
                  </Link>
                  <Link href="/cmmc/faq" className="inline-flex items-center gap-2 px-5 py-2.5 border border-silver/20 text-silver hover:text-white rounded-lg transition-colors text-sm" style={{ fontFamily:'var(--font-inter)' }}>
                    CMMC FAQs
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
