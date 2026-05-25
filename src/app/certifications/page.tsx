import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Award, Shield, Star, CheckCircle2, ArrowRight, GraduationCap, ExternalLink } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Certifications & Partners',
  description: 'Galaxy Consulting is a CMMC RPO, CMMC Level 1 & Level 2 Certified, SDVOSB, SDB, and MBE — with strategic partnerships with Dell Technologies, HP, Palo Alto Networks, and more.',
};

const certifications = [
  {
    abbr: 'CMMC RPO', full: 'Registered Provider Organization — Cyber-AB Authorized', icon: Shield,
    border: 'border-cyan-500/40', iconColor: 'text-cyan-400', iconBg: 'bg-cyan-500/10',
    desc: 'Galaxy Consulting is officially authorized by the Cyber-AB as a CMMC Registered Provider Organization (RPO), qualified to deliver non-certified advisory and consulting services to DoD contractors preparing for CMMC certification.',
    benefits: ['Cyber-AB authorized CMMC advisory services','CMMC Level 1 & Level 2 compliance support','Gap assessments, remediation, and documentation','Staffed with Cyber-AB Registered Practitioners (RPs)'],
  },
  {
    abbr: 'CMMC L1', full: 'CMMC Level 1 Certified — Foundational Cybersecurity', icon: Award,
    border: 'border-emerald-500/40', iconColor: 'text-emerald-400', iconBg: 'bg-emerald-500/10',
    desc: 'Galaxy Consulting has achieved CMMC Level 1 certification, demonstrating full compliance with the 17 foundational cybersecurity practices required to protect Federal Contract Information (FCI).',
    benefits: ['All 17 CMMC Level 1 practices implemented','Federal Contract Information (FCI) protection','FAR 52.204-21 compliant','Assessed and verified by a certified C3PAO'],
  },
  {
    abbr: 'CMMC L2', full: 'CMMC Level 2 Certified — Advanced Cybersecurity', icon: Award,
    border: 'border-violet-500/40', iconColor: 'text-violet-400', iconBg: 'bg-violet-500/10',
    desc: 'Galaxy Consulting has achieved CMMC Level 2 certification, demonstrating compliance with all 110 security practices aligned with NIST SP 800-171 r2 for protecting Controlled Unclassified Information (CUI).',
    benefits: ['All 110 NIST SP 800-171 r2 practices implemented','Controlled Unclassified Information (CUI) protection','DFARS 252.204-7012 compliant','Assessed and verified by a certified C3PAO'],
  },
  {
    abbr: 'SDVOSB', full: 'Service-Disabled Veteran-Owned Small Business', icon: Star,
    border: 'border-blue-accent/40', iconColor: 'text-blue-bright', iconBg: 'bg-blue-accent/10',
    desc: 'Verified by the U.S. Department of Veterans Affairs. Eligible for SDVOSB set-aside contracts and sole-source awards under the Veterans First Contracting Program.',
    benefits: ['Eligible for VA SDVOSB set-aside acquisitions','Veterans First Contracting Program (VFCP)','DoD and civilian agency set-aside opportunities','Sole-source contract eligibility up to simplified acquisition threshold'],
  },
  {
    abbr: 'SDB', full: 'Small Disadvantaged Business', icon: Shield,
    border: 'border-emerald-500/40', iconColor: 'text-emerald-400', iconBg: 'bg-emerald-500/10',
    desc: 'Certified Small Disadvantaged Business eligible for SDB price evaluation preferences, mentorship programs, and subcontracting opportunities under federal FAR regulations.',
    benefits: ['SDB price evaluation preferences','8(a) Business Development Program eligible','Mentor-Protégé Program opportunities','Federal subcontracting plan credits'],
  },
  {
    abbr: 'MBE', full: 'Maryland Certified Minority Business Enterprise', icon: Award,
    border: 'border-purple-500/40', iconColor: 'text-purple-400', iconBg: 'bg-purple-500/10',
    desc: 'Certified by the Maryland Department of Transportation. Eligible for Maryland state and local government procurement set-asides and subcontracting goals.',
    benefits: ['Maryland state agency procurement goals','Maryland local government set-asides','MBE subcontracting goal participation','Priority listing in Maryland MBE directory'],
  },
];

const teamCertGroups = [
  {
    category: 'Project & Program Management',
    accent: 'text-blue-bright', ring: 'bg-blue-accent/10', border: 'border-blue-accent/30',
    serviceHref: '/services/program-management', serviceLabel: 'Program Management',
    certs: ['Certified Project Management Professional (PMP)','Certified Six Sigma Green Belt Professional','ITIL Version 3 Professional','FAC-P/PM Level 3 Certified','FAI COR Level 3 Certified'],
  },
  {
    category: 'Cybersecurity',
    accent: 'text-emerald-400', ring: 'bg-emerald-500/10', border: 'border-emerald-500/30',
    serviceHref: '/services/cybersecurity', serviceLabel: 'Cybersecurity Services',
    certs: ['CMMC Registered Practitioner (RP) — Cyber-AB Certified','Certified Information Systems Security Professional (CISSP)','Certified CompTIA Security+ Professional','EC-Council Certified Ethical Hacker (CEH)','EC-Council Certified Network Defense Architect (CNDA)','Cisco Certified Information Security Specialist','Cisco IOS Security Specialist'],
  },
  {
    category: 'Networking',
    accent: 'text-teal-400', ring: 'bg-teal-500/10', border: 'border-teal-500/30',
    serviceHref: '/services/it-infrastructure', serviceLabel: 'IT Infrastructure',
    certs: ['Cisco Certified Network Associate (CCNA)'],
  },
  {
    category: 'Microsoft',
    accent: 'text-sky-400', ring: 'bg-sky-500/10', border: 'border-sky-500/30',
    serviceHref: '/services/it-infrastructure', serviceLabel: 'IT Infrastructure',
    certs: ['Microsoft Certified Technology Specialist (MCTS)','Microsoft Certified Systems Engineer (MCSE)','Microsoft Certified Systems Administrator (MCSA)','Microsoft Certified Professional (MCP)'],
  },
  {
    category: 'Hardware & Vendor',
    accent: 'text-amber-400', ring: 'bg-amber-500/10', border: 'border-amber-500/30',
    serviceHref: '/services/it-infrastructure', serviceLabel: 'IT Infrastructure',
    certs: ['Certified CompTIA A+ Professional','Dell Certified Systems Expert (DCSE)','HP Certified Professional','Fujitsu Certified Primergy Engineer','Fujitsu Certified Eternus Engineer'],
  },
  {
    category: 'Mobile & Legacy Platforms',
    accent: 'text-rose-400', ring: 'bg-rose-500/10', border: 'border-rose-500/30',
    serviceHref: '/services', serviceLabel: 'All Services',
    certs: ['BlackBerry Certified Technical Associate v4.0','BlackBerry Certified Technical Associate v3.7'],
  },
];

const partners = [
  { name: 'Dell Technologies',        role: 'Federal Solutions Partner', sub: 'Authorized H/W Reseller',       border: 'border-blue-500/30',  products: ['PowerEdge Servers','OptiPlex Workstations','Latitude Laptops','PowerStore Storage','Networking Equipment'] },
  { name: 'HP',                        role: 'Authorized Partner',        sub: 'H/W Reseller',                  border: 'border-sky-500/30',   products: ['HP EliteBook Laptops','HP EliteDesk Desktops','HP LaserJet Printers','HP ProLiant Servers','HP Accessories'] },
  { name: 'Palo Alto Networks',        role: 'NetWave Partner',           sub: 'Cybersecurity Solutions',       border: 'border-rose-500/30',  products: ['Next-Gen Firewalls','Prisma Cloud','Cortex XDR','GlobalProtect VPN','Zero Trust Architecture'] },
  { name: 'NinjaOne',                  role: 'RMM Solution Partner',      sub: 'Remote Monitoring & Management',border: 'border-amber-500/30', products: ['Remote Monitoring','Patch Management','Endpoint Management','IT Asset Inventory','Automated Remediation'] },
  { name: 'SMART Technologies Corp.', role: 'Authorized Reseller',        sub: 'Interactive Display Solutions', border: 'border-teal-500/30',  products: ['SMART Board Displays','Interactive Panels','Collaboration Software','Conference Room Solutions','Training Technology'] },
  { name: 'Cyber Manufacturing, Inc.',role: 'Authorized Reseller',        sub: 'Specialty IT Equipment',        border: 'border-slate-500/30', products: ['Specialty IT Hardware','Custom Configurations','Defense-Grade Equipment','Rugged Computing Solutions','Technical Support'] },
];

export default function CertificationsPage() {
  return (
    <>
      {/* ── HEADER ── */}
      <section className="bg-galaxy py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-blue-bright text-xs font-semibold uppercase tracking-widest mb-3" style={{ fontFamily:'var(--font-inter)' }}>Credentials &amp; Alliances</p>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-5" style={{ fontFamily:'var(--font-barlow)' }}>Certifications &amp;<br />Strategic Partners</h1>
          <p className="text-silver/70 text-base max-w-2xl" style={{ fontFamily:'var(--font-inter)' }}>
            Galaxy Consulting is a Cyber-AB authorized CMMC RPO, CMMC Level 1 &amp; Level 2 Certified, and holds multiple federal and state set-aside certifications — backed by an ecosystem of leading technology vendor partnerships.
          </p>
        </div>
      </section>

      {/* ── FEDERAL CERTIFICATIONS ── */}
      <section className="py-20 bg-section-alt">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-white section-heading mb-10" style={{ fontFamily:'var(--font-barlow)' }}>CMMC &amp; Federal / State Certifications</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((c) => (
              <div key={c.abbr} className={`card-hover card-surface rounded-xl border ${c.border} p-7`}>
                <div className="flex items-center gap-3 mb-5">
                  {c.abbr === 'CMMC RPO' ? (
                    <Image
                      src="/RPO_Registered.jpg"
                      alt="CMMC-AB Registered Provider Organization"
                      width={48}
                      height={48}
                      className="rounded-full shadow-md shadow-orange-500/20 flex-shrink-0"
                    />
                  ) : (
                    <div className={`p-2.5 rounded-lg ${c.iconBg} ${c.iconColor}`}><c.icon size={22} /></div>
                  )}
                  <div className="text-2xl font-bold text-white" style={{ fontFamily:'var(--font-barlow)' }}>{c.abbr}</div>
                </div>
                <p className={`text-xs font-medium mb-3 uppercase tracking-wider ${c.iconColor}`} style={{ fontFamily:'var(--font-inter)' }}>{c.full}</p>
                <p className="text-sm text-silver/70 leading-relaxed mb-5" style={{ fontFamily:'var(--font-inter)' }}>{c.desc}</p>
                <ul className="space-y-2">
                  {c.benefits.map((b) => (
                    <li key={b} className="flex items-start gap-2 text-xs text-silver/60" style={{ fontFamily:'var(--font-inter)' }}>
                      <CheckCircle2 size={12} className={`flex-shrink-0 mt-0.5 ${c.iconColor}`} />{b}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SAM / CONTRACT IDs ── */}
      <section className="py-16 bg-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-white section-heading mb-8" style={{ fontFamily:'var(--font-barlow)' }}>SAM.gov &amp; Contract Identifiers</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
            {[{label:'DUNS Number',value:'079255195',mono:true},{label:'CAGE Code',value:'71RT1',mono:true},{label:'UEI',value:'DT7XMKSNJ5F3',mono:true},{label:'Entity Type',value:'Partnership',mono:false},{label:'Business Type',value:'Small Business',mono:false},{label:'State',value:'Maryland',mono:false}].map((id) => (
              <div key={id.label} className="cert-badge rounded-lg p-4">
                <div className="text-xs text-silver/40 uppercase tracking-wider mb-1.5" style={{ fontFamily:'var(--font-inter)' }}>{id.label}</div>
                <div className={`text-white font-semibold text-sm ${id.mono ? 'font-mono' : ''}`}>{id.value}</div>
              </div>
            ))}
          </div>
          <p className="text-xs text-silver/40 uppercase tracking-widest mb-4" style={{ fontFamily:'var(--font-inter)' }}>NAICS Codes</p>
          <div className="flex flex-wrap gap-2">
            {[{code:'423420',desc:'Office Equipment Merchant Wholesalers'},{code:'423430',desc:'Computer & Peripheral Equipment'},{code:'541519',desc:'Other Computer Related Services'},{code:'541512',desc:'Computer Systems Design'},{code:'541712',desc:'R&D Physical Sciences'},{code:'541990',desc:'All Other Professional Services'}].map((n) => (
              <div key={n.code} className="cert-badge rounded-lg px-3 py-2 text-center" title={n.desc}>
                <div className="text-blue-bright font-mono text-sm font-semibold">{n.code}</div>
                <div className="text-silver/40 text-xs mt-0.5 max-w-[120px]" style={{ fontFamily:'var(--font-inter)' }}>{n.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TEAM PROFESSIONAL CERTIFICATIONS ── */}
      <section className="py-20 bg-section-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-3">
            <GraduationCap size={22} className="text-blue-accent" />
            <h2 className="text-2xl font-bold text-white section-heading" style={{ fontFamily:'var(--font-barlow)' }}>Team Professional Certifications</h2>
          </div>
          <p className="text-silver/70 text-sm mb-10 max-w-2xl" style={{ fontFamily:'var(--font-inter)' }}>
            Galaxy Consulting team members hold a wide range of industry-recognized professional certifications across cybersecurity, project management, networking, and vendor technologies.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {teamCertGroups.map((group) => (
              <div key={group.category} className={`card-hover card-surface rounded-xl border ${group.border} p-6 flex flex-col`}>
                <div className="flex items-start justify-between gap-2 mb-4">
                  <span className={`inline-block text-xs font-bold px-2.5 py-1 rounded-full ${group.ring} ${group.accent} border ${group.border}`} style={{ fontFamily:'var(--font-inter)' }}>
                    {group.category}
                  </span>
                  <Link href={group.serviceHref} className={`flex items-center gap-1 text-xs ${group.accent} opacity-70 hover:opacity-100 transition-opacity flex-shrink-0`} style={{ fontFamily:'var(--font-inter)' }}>
                    <ExternalLink size={11} />{group.serviceLabel}
                  </Link>
                </div>
                <ul className="space-y-2.5 flex-1">
                  {group.certs.map((cert) => (
                    <li key={cert} className="flex items-start gap-2.5 text-sm text-silver/80" style={{ fontFamily:'var(--font-inter)' }}>
                      <CheckCircle2 size={14} className="text-blue-accent flex-shrink-0 mt-0.5" />{cert}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TECHNOLOGY PARTNERS ── */}
      <section className="py-20 bg-section-alt">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-white section-heading mb-10" style={{ fontFamily:'var(--font-barlow)' }}>Technology Partner Ecosystem</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {partners.map((p) => (
              <div key={p.name} className={`card-hover card-surface rounded-xl border ${p.border} p-6`}>
                <h3 className="text-lg font-bold text-white mb-1" style={{ fontFamily:'var(--font-barlow)' }}>{p.name}</h3>
                <div className="text-xs text-silver/50 mb-4" style={{ fontFamily:'var(--font-inter)' }}>{p.role} &nbsp;·&nbsp; {p.sub}</div>
                <div className="flex flex-wrap gap-1.5">
                  {p.products.map((prod) => (
                    <span key={prod} className="text-xs px-2 py-0.5 rounded bg-blue-accent/10 text-silver/70 border border-blue-accent/15" style={{ fontFamily:'var(--font-inter)' }}>{prod}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-16 bg-galaxy">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-white mb-4" style={{ fontFamily:'var(--font-barlow)' }}>Ready to Get CMMC Certified?</h2>
          <p className="text-silver/70 text-sm mb-8" style={{ fontFamily:'var(--font-inter)' }}>As a Cyber-AB authorized CMMC RPO, Galaxy Consulting guides DoD contractors through every step of the CMMC Level 1 certification process.</p>
          <Link href="/contact" className="inline-flex items-center gap-2 px-7 py-3.5 bg-blue-accent hover:bg-blue-bright text-navy font-semibold rounded-lg transition-all hover:-translate-y-0.5" style={{ fontFamily:'var(--font-inter)' }}>
            Start a Conversation <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
