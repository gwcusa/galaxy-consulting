import type { Metadata } from 'next';
import Link from 'next/link';
import { Award, Shield, Star, CheckCircle2, ArrowRight, GraduationCap } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Certifications & Partners',
  description:
    'Galaxy Consulting holds SDVOSB, SDB, and MBE certifications and maintains strategic partnerships with Dell Technologies, HP, Palo Alto Networks, and more.',
};

const certifications = [
  {
    abbr: 'SDVOSB',
    full: 'Service-Disabled Veteran-Owned Small Business',
    icon: Star,
    color: 'border-blue-accent/50 bg-blue-accent/8',
    iconColor: 'text-blue-bright',
    desc: 'Verified by the U.S. Department of Veterans Affairs. Eligible for SDVOSB set-aside contracts and sole-source awards under the Veterans First Contracting Program.',
    benefits: [
      'Eligible for VA SDVOSB set-aside acquisitions',
      'Veterans First Contracting Program (VFCP)',
      'DoD and civilian agency set-aside opportunities',
      'Sole-source contract eligibility up to simplified acquisition threshold',
    ],
  },
  {
    abbr: 'SDB',
    full: 'Small Disadvantaged Business',
    icon: Shield,
    color: 'border-emerald-500/50 bg-emerald-500/8',
    iconColor: 'text-emerald-400',
    desc: 'Certified Small Disadvantaged Business eligible for SDB price evaluation preferences, mentorship programs, and subcontracting opportunities under federal FAR regulations.',
    benefits: [
      'SDB price evaluation preferences',
      '8(a) Business Development Program eligible',
      'Mentor-Protégé Program opportunities',
      'Federal subcontracting plan credits',
    ],
  },
  {
    abbr: 'MBE',
    full: 'Maryland Certified Minority Business Enterprise',
    icon: Award,
    color: 'border-purple-500/50 bg-purple-500/8',
    iconColor: 'text-purple-400',
    desc: 'Certified by the Maryland Department of Transportation as a Minority Business Enterprise. Eligible for Maryland state and local government procurement set-asides and subcontracting goals.',
    benefits: [
      'Maryland state agency procurement goals',
      'Maryland local government set-asides',
      'MBE subcontracting goal participation',
      'Priority listing in Maryland MBE directory',
    ],
  },
];

const partners = [
  {
    name: 'Dell Technologies',
    role: 'Federal Solutions Partner',
    sub: 'Authorized H/W Reseller',
    desc: 'Authorized Dell Technologies Federal Solutions Partner providing full product line access including commercial and custom hardware, warranty, and support services.',
    products: ['PowerEdge Servers', 'OptiPlex Workstations', 'Latitude Laptops', 'PowerStore Storage', 'Networking Equipment'],
    color: 'border-blue-500/30 bg-blue-500/5',
  },
  {
    name: 'HP',
    role: 'Authorized Partner',
    sub: 'H/W Reseller',
    desc: 'HP authorized partner providing the full HP product portfolio for government clients including desktops, laptops, printers, servers, and accessories.',
    products: ['HP EliteBook Laptops', 'HP EliteDesk Desktops', 'HP LaserJet Printers', 'HP ProLiant Servers', 'HP Accessories'],
    color: 'border-sky-500/30 bg-sky-500/5',
  },
  {
    name: 'Palo Alto Networks',
    role: 'NetWave Partner',
    sub: 'Cybersecurity Solutions',
    desc: 'Palo Alto Networks NetWave Partner delivering next-generation firewall, cloud security, and Zero Trust security solutions to government agencies.',
    products: ['Next-Gen Firewalls', 'Prisma Cloud', 'Cortex XDR', 'GlobalProtect VPN', 'Zero Trust Architecture'],
    color: 'border-rose-500/30 bg-rose-500/5',
  },
  {
    name: 'NinjaOne',
    role: 'RMM Solution Partner',
    sub: 'Remote Monitoring & Management',
    desc: 'NinjaOne Remote Monitoring and Management (RMM) partner providing automated patch management, endpoint monitoring, and IT operations for government environments.',
    products: ['Remote Monitoring', 'Patch Management', 'Endpoint Management', 'IT Asset Inventory', 'Automated Remediation'],
    color: 'border-amber-500/30 bg-amber-500/5',
  },
  {
    name: 'SMART Technologies Corp.',
    role: 'Authorized Reseller',
    sub: 'Interactive Display Solutions',
    desc: 'Authorized SMART Technologies reseller providing interactive displays, collaboration tools, and education technology for government conference rooms and training facilities.',
    products: ['SMART Board Displays', 'Interactive Panels', 'Collaboration Software', 'Conference Room Solutions', 'Training Technology'],
    color: 'border-teal-500/30 bg-teal-500/5',
  },
  {
    name: 'Cyber Manufacturing, Inc.',
    role: 'Authorized Reseller',
    sub: 'Specialty IT Equipment',
    desc: 'Authorized Cyber Manufacturing reseller providing specialized IT equipment and solutions to meet unique government and defense sector requirements.',
    products: ['Specialty IT Hardware', 'Custom Configurations', 'Defense-Grade Equipment', 'Rugged Computing Solutions', 'Technical Support'],
    color: 'border-slate-500/30 bg-slate-500/5',
  },
];

const contractIds = [
  { label: 'DUNS Number', value: '079255195', mono: true },
  { label: 'CAGE Code', value: '71RT1', mono: true },
  { label: 'UEI', value: 'DT7XMKSNJ5F3', mono: true },
  { label: 'Entity Type', value: 'Partnership', mono: false },
  { label: 'Business Type', value: 'Small Business', mono: false },
  { label: 'State', value: 'Maryland', mono: false },
];

export default function CertificationsPage() {
  return (
    <>
      {/* ── HEADER ── */}
      <section className="bg-galaxy py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p
            className="text-blue-bright text-xs font-semibold uppercase tracking-widest mb-3"
            style={{ fontFamily: 'var(--font-inter)' }}
          >
            Credentials &amp; Alliances
          </p>
          <h1
            className="text-4xl sm:text-5xl font-bold text-white mb-5"
            style={{ fontFamily: 'var(--font-barlow)' }}
          >
            Certifications &amp;<br />Strategic Partners
          </h1>
          <p
            className="text-silver/70 text-base max-w-2xl"
            style={{ fontFamily: 'var(--font-inter)' }}
          >
            Galaxy Consulting holds multiple federal and state certifications that open set-aside opportunities
            for your agency, backed by an ecosystem of leading technology vendor partnerships.
          </p>
        </div>
      </section>

      {/* ── CERTIFICATIONS ── */}
      <section className="py-20 bg-off-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            className="text-2xl font-bold text-navy section-heading mb-10"
            style={{ fontFamily: 'var(--font-barlow)' }}
          >
            Federal &amp; State Certifications
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((c) => (
              <div
                key={c.abbr}
                className={`card-hover rounded-xl border ${c.color} p-7 bg-white overflow-hidden`}
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className={`p-2.5 rounded-lg bg-white border border-silver-light ${c.iconColor}`}>
                    <c.icon size={22} />
                  </div>
                  <div>
                    <div
                      className="text-2xl font-bold text-navy"
                      style={{ fontFamily: 'var(--font-barlow)' }}
                    >
                      {c.abbr}
                    </div>
                  </div>
                </div>
                <p
                  className="text-xs text-silver/70 font-medium mb-3 uppercase tracking-wider"
                  style={{ fontFamily: 'var(--font-inter)' }}
                >
                  {c.full}
                </p>
                <p
                  className="text-sm text-silver leading-relaxed mb-5"
                  style={{ fontFamily: 'var(--font-inter)' }}
                >
                  {c.desc}
                </p>
                <ul className="space-y-2">
                  {c.benefits.map((b) => (
                    <li key={b} className="flex items-start gap-2 text-xs text-silver/70" style={{ fontFamily: 'var(--font-inter)' }}>
                      <CheckCircle2 size={12} className={`flex-shrink-0 mt-0.5 ${c.iconColor}`} />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SAM / CONTRACT IDS ── */}
      <section className="py-16 bg-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            className="text-2xl font-bold text-white section-heading mb-8"
            style={{ fontFamily: 'var(--font-barlow)' }}
          >
            SAM.gov &amp; Contract Identifiers
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {contractIds.map((id) => (
              <div key={id.label} className="cert-badge rounded-lg p-4">
                <div
                  className="text-xs text-silver/50 uppercase tracking-wider mb-1.5"
                  style={{ fontFamily: 'var(--font-inter)' }}
                >
                  {id.label}
                </div>
                <div
                  className={`text-white font-semibold text-sm ${id.mono ? 'font-mono' : ''}`}
                  style={{ fontFamily: id.mono ? 'monospace' : 'var(--font-inter)' }}
                >
                  {id.value}
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8">
            <p
              className="text-xs text-silver/50 uppercase tracking-widest mb-4"
              style={{ fontFamily: 'var(--font-inter)' }}
            >
              NAICS Codes
            </p>
            <div className="flex flex-wrap gap-2">
              {[
                { code: '423420', desc: 'Office Equipment Merchant Wholesalers' },
                { code: '423430', desc: 'Computer & Peripheral Equipment' },
                { code: '541519', desc: 'Other Computer Related Services' },
                { code: '541512', desc: 'Computer Systems Design' },
                { code: '541712', desc: 'R&D Physical Sciences' },
                { code: '541990', desc: 'All Other Professional Services' },
              ].map((n) => (
                <div
                  key={n.code}
                  className="cert-badge rounded-lg px-3 py-2 text-center"
                  title={n.desc}
                >
                  <div
                    className="text-blue-bright font-mono text-sm font-semibold"
                    style={{ fontFamily: 'var(--font-inter)' }}
                  >
                    {n.code}
                  </div>
                  <div
                    className="text-silver/40 text-xs mt-0.5 max-w-[120px]"
                    style={{ fontFamily: 'var(--font-inter)' }}
                  >
                    {n.desc}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── TEAM PROFESSIONAL CERTIFICATIONS ── */}
      <section className="py-20 bg-off-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-3">
            <GraduationCap size={22} className="text-blue-accent" />
            <h2
              className="text-2xl font-bold text-navy section-heading"
              style={{ fontFamily: 'var(--font-barlow)' }}
            >
              Team Professional Certifications
            </h2>
          </div>
          <p
            className="text-silver text-sm mb-10 max-w-2xl"
            style={{ fontFamily: 'var(--font-inter)' }}
          >
            Galaxy Consulting team members hold a wide range of industry-recognized professional certifications
            across cybersecurity, project management, networking, and vendor technologies.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                category: 'Project & Program Management',
                color: 'border-blue-accent/40 bg-blue-accent/5',
                tagColor: 'bg-blue-accent/10 text-blue-bright',
                certs: [
                  'Certified Project Management Professional (PMP)',
                  'Certified Six Sigma Green Belt Professional',
                  'ITIL Version 3 Professional',
                  'FAC-P/PM Level 3 Certified',
                  'FAI COR Level 3 Certified',
                ],
              },
              {
                category: 'Cybersecurity',
                color: 'border-emerald-500/40 bg-emerald-500/5',
                tagColor: 'bg-emerald-500/10 text-emerald-500',
                certs: [
                  'Certified Information Systems Security Professional (CISSP)',
                  'Certified CompTIA Security+ Professional',
                  'EC-Council Certified Ethical Hacker (CEH)',
                  'EC-Council Certified Network Defense Architect (CNDA)',
                  'Cisco Certified Information Security Specialist',
                  'Cisco IOS Security Specialist',
                ],
              },
              {
                category: 'Networking',
                color: 'border-teal-500/40 bg-teal-500/5',
                tagColor: 'bg-teal-500/10 text-teal-400',
                certs: [
                  'Cisco Certified Network Associate (CCNA)',
                ],
              },
              {
                category: 'Microsoft',
                color: 'border-sky-500/40 bg-sky-500/5',
                tagColor: 'bg-sky-500/10 text-sky-400',
                certs: [
                  'Microsoft Certified Technology Specialist (MCTS)',
                  'Microsoft Certified Systems Engineer (MCSE)',
                  'Microsoft Certified Systems Administrator (MCSA)',
                  'Microsoft Certified Professional (MCP)',
                ],
              },
              {
                category: 'Hardware & Vendor',
                color: 'border-amber-500/40 bg-amber-500/5',
                tagColor: 'bg-amber-500/10 text-amber-500',
                certs: [
                  'Certified CompTIA A+ Professional',
                  'Dell Certified Systems Expert (DCSE)',
                  'HP Certified Professional',
                  'Fujitsu Certified Primergy Engineer',
                  'Fujitsu Certified Eternus Engineer',
                ],
              },
              {
                category: 'Mobile & Legacy Platforms',
                color: 'border-rose-500/40 bg-rose-500/5',
                tagColor: 'bg-rose-500/10 text-rose-400',
                certs: [
                  'BlackBerry Certified Technical Associate v4.0',
                  'BlackBerry Certified Technical Associate v3.7',
                ],
              },
            ].map((group) => (
              <div
                key={group.category}
                className={`card-hover bg-white rounded-xl border ${group.color} p-6`}
              >
                <span
                  className={`inline-block text-xs font-bold px-2.5 py-1 rounded-full mb-4 ${group.tagColor}`}
                  style={{ fontFamily: 'var(--font-inter)' }}
                >
                  {group.category}
                </span>
                <ul className="space-y-2.5">
                  {group.certs.map((cert) => (
                    <li
                      key={cert}
                      className="flex items-start gap-2.5 text-sm text-silver"
                      style={{ fontFamily: 'var(--font-inter)' }}
                    >
                      <CheckCircle2 size={14} className="text-blue-accent flex-shrink-0 mt-0.5" />
                      {cert}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TECHNOLOGY PARTNERS ── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            className="text-2xl font-bold text-navy section-heading mb-10"
            style={{ fontFamily: 'var(--font-barlow)' }}
          >
            Technology Partner Ecosystem
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {partners.map((p) => (
              <div
                key={p.name}
                className={`card-hover bg-white rounded-xl border ${p.color} p-6`}
              >
                <div className="mb-4">
                  <h3
                    className="text-lg font-bold text-navy"
                    style={{ fontFamily: 'var(--font-barlow)' }}
                  >
                    {p.name}
                  </h3>
                  <div className="text-xs text-silver/60 mt-0.5" style={{ fontFamily: 'var(--font-inter)' }}>
                    {p.role} &nbsp;·&nbsp; {p.sub}
                  </div>
                </div>
                <p
                  className="text-sm text-silver leading-relaxed mb-4"
                  style={{ fontFamily: 'var(--font-inter)' }}
                >
                  {p.desc}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {p.products.map((prod) => (
                    <span
                      key={prod}
                      className="text-xs px-2 py-0.5 rounded bg-silver-light text-navy/70"
                      style={{ fontFamily: 'var(--font-inter)' }}
                    >
                      {prod}
                    </span>
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
          <h2
            className="text-2xl font-bold text-white mb-4"
            style={{ fontFamily: 'var(--font-barlow)' }}
          >
            Leverage Our Set-Aside Certifications
          </h2>
          <p className="text-silver/70 text-sm mb-8" style={{ fontFamily: 'var(--font-inter)' }}>
            Our SDVOSB, SDB, and MBE certifications help your agency meet socioeconomic goals while
            receiving premium IT services.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-7 py-3.5 bg-blue-accent hover:bg-blue-bright text-white font-semibold rounded-lg transition-all hover:-translate-y-0.5"
            style={{ fontFamily: 'var(--font-inter)' }}
          >
            Start a Conversation <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
