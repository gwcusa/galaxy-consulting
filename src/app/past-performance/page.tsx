import type { Metadata } from 'next';
import Link from 'next/link';
import { Building2, MapPin, Tag, ArrowRight, Briefcase } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Past Performance',
  description: 'Galaxy Consulting past performance with the Department of Veterans Affairs, US Marine Forces Pacific, Department of the Navy, and Maryland state agencies.',
};

const contracts = [
  {
    contractNumber: 'VA7716P0083',
    customer: 'Department of Veterans Affairs (VA)',
    subCustomer: 'Veterans Health Administration — Employee Education System (EES)',
    naics: '541611', type: 'Administrative & Technical Support', location: 'Crystal City, Virginia',
    accent: 'border-blue-accent/40', tag: 'bg-blue-accent/15 text-blue-bright',
    scope: ['Managed multi-conference room facility for VHA EES and National Conference Center','Provided meeting and conference scheduling assistance for VHA EES meetings','Configured and set-up conference meeting rooms, conference bridges, and audio-visual support','Assisted conference meeting participants and coordinated support services from third-party vendors'],
    relevance: 'Demonstrated ability to support VA administrative requirements, support facility operations, and work effectively with VA stakeholders.',
  },
  {
    contractNumber: '36C24122P0855',
    customer: 'Department of Veterans Affairs (VA)',
    subCustomer: 'West Haven VA Medical Center',
    naics: '541519', type: 'IT Hardware Procurement', location: 'West Haven, Connecticut',
    accent: 'border-blue-accent/40', tag: 'bg-blue-accent/15 text-blue-bright',
    scope: ['Delivered Cisco model #8841 IP phones','Delivered Cisco conference phone accessories and installation materials','Delivered Cisco wired microphone kit','Delivered Cisco wall mounting kit'],
    relevance: 'Demonstrated ability to provide the VA with a critical technology solution which was vital to its operational mission.',
  },
  {
    contractNumber: 'M0031819P0037',
    customer: 'Department of Defense',
    subCustomer: 'US Marine Forces Pacific (MARFORPAC)',
    naics: '334210', type: 'IT Hardware Delivery', location: 'Honolulu, Hawaii',
    accent: 'border-emerald-500/40', tag: 'bg-emerald-500/15 text-emerald-400',
    scope: ['Provided 250 Avaya 9408 Digital Telephones and Digital Circuit Cards','Coordinated with multiple distribution hubs to consolidate equipment from multiple sources','Prepared packaging and shipping documents to meet Department of Defense shipping requirements'],
    relevance: 'Demonstrated ability to deliver technology solutions to large federal customer and meet critical mission requirements.',
  },
  {
    contractNumber: 'Maryland DOIT Master H/W Contract 060B5400007',
    customer: 'Maryland State and Local Government Agencies',
    subCustomer: 'Multiple State Agencies',
    naics: '423430', type: 'Multi-Year Blanket Purchase — IT Products & Services', location: 'Various locations across Maryland',
    accent: 'border-purple-500/40', tag: 'bg-purple-500/15 text-purple-400',
    scope: ['Maryland Department of Health','Maryland Executive Office of the Governor','Maryland Department of Housing and Community Development (DHCD)','Maryland Public Television','Maryland Department of Human Services','Maryland Clifton T. Perkins Hospital Center','Maryland Infectious Disease Prevention and Health Services Bureau','Maryland Department of Environment'],
    relevance: 'Demonstrated ability to deliver technology and services to a wide range of government and health service organizations.',
  },
];

const agencies = [
  { abbr: 'VA',        name: 'Dept. of Veterans Affairs', count: '2 contracts' },
  { abbr: 'DoD',       name: 'Dept. of Defense',          count: 'MARFORPAC' },
  { abbr: 'USN',       name: 'Dept. of the Navy',         count: 'Naval Surface Warfare' },
  { abbr: 'MD',        name: 'Maryland State Agencies',   count: '8+ agencies' },
];

export default function PastPerformancePage() {
  return (
    <>
      {/* ── HEADER ── */}
      <section className="bg-galaxy py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-blue-bright text-xs font-semibold uppercase tracking-widest mb-3" style={{ fontFamily:'var(--font-inter)' }}>Track Record</p>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-5" style={{ fontFamily:'var(--font-barlow)' }}>Past Performance</h1>
          <p className="text-silver/70 text-base max-w-2xl" style={{ fontFamily:'var(--font-inter)' }}>
            A proven track record with federal and state government customers — delivering technology solutions and professional services that meet mission requirements on time and on budget.
          </p>
        </div>
      </section>

      {/* ── CUSTOMER SUMMARY ── */}
      <section className="bg-navy-mid border-b border-blue-accent/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:divide-x lg:divide-blue-accent/20">
            {agencies.map((a) => (
              <div key={a.abbr} className="flex flex-col items-center text-center py-2">
                <span className="text-3xl font-bold text-white" style={{ fontFamily:'var(--font-barlow)' }}>{a.abbr}</span>
                <span className="text-xs text-silver/60 mt-1 leading-snug max-w-[120px]" style={{ fontFamily:'var(--font-inter)' }}>{a.name}</span>
                <span className="text-xs text-blue-bright mt-1" style={{ fontFamily:'var(--font-inter)' }}>{a.count}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTRACT CARDS ── */}
      <section className="py-20 bg-section-alt">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-white section-heading mb-10" style={{ fontFamily:'var(--font-barlow)' }}>Contract History</h2>
          <div className="space-y-6">
            {contracts.map((c) => (
              <div key={c.contractNumber} className={`card-surface rounded-xl border ${c.accent} overflow-hidden card-hover`}>
                <div className="p-6 border-b border-blue-accent/15">
                  <div className="flex flex-wrap items-start gap-3 justify-between">
                    <div>
                      <div className="flex flex-wrap items-center gap-2 mb-1.5">
                        <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${c.tag}`} style={{ fontFamily:'var(--font-inter)' }}>{c.type}</span>
                        <span className="text-xs text-silver/40 font-mono" style={{ fontFamily:'var(--font-inter)' }}>NAICS {c.naics}</span>
                      </div>
                      <h3 className="text-lg font-bold text-white" style={{ fontFamily:'var(--font-barlow)' }}>{c.customer}</h3>
                      <p className="text-sm text-silver/60 mt-0.5" style={{ fontFamily:'var(--font-inter)' }}>{c.subCustomer}</p>
                    </div>
                    <div className="text-right flex-shrink-0">
                      <div className="text-xs text-silver/40 font-mono mb-1" style={{ fontFamily:'var(--font-inter)' }}>{c.contractNumber}</div>
                      <div className="flex items-center gap-1.5 text-xs text-silver/50 justify-end" style={{ fontFamily:'var(--font-inter)' }}>
                        <MapPin size={11} />{c.location}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Briefcase size={14} className="text-blue-accent" />
                    <span className="text-xs font-semibold text-silver uppercase tracking-wider" style={{ fontFamily:'var(--font-inter)' }}>Scope of Work</span>
                  </div>
                  <ul className="space-y-2 mb-5">
                    {c.scope.map((item) => (
                      <li key={item} className="flex items-start gap-2.5 text-sm text-silver/80" style={{ fontFamily:'var(--font-inter)' }}>
                        <span className="text-blue-accent mt-1 flex-shrink-0">›</span>{item}
                      </li>
                    ))}
                  </ul>
                  <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                    <div className="flex items-start gap-2">
                      <Tag size={13} className="text-blue-accent flex-shrink-0 mt-0.5" />
                      <div>
                        <span className="text-xs font-semibold text-silver uppercase tracking-wider block mb-1" style={{ fontFamily:'var(--font-inter)' }}>Relevance</span>
                        <p className="text-xs text-silver/60 leading-relaxed" style={{ fontFamily:'var(--font-inter)' }}>{c.relevance}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-16 bg-galaxy">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-white mb-4" style={{ fontFamily:'var(--font-barlow)' }}>Add Your Agency to Our Portfolio</h2>
          <p className="text-silver/70 text-sm mb-8" style={{ fontFamily:'var(--font-inter)' }}>Contact us to discuss how our experience can serve your mission.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="px-6 py-3 bg-blue-accent hover:bg-blue-bright text-navy font-semibold rounded-lg transition-all hover:-translate-y-0.5 flex items-center gap-2" style={{ fontFamily:'var(--font-inter)' }}>Contact Us <ArrowRight size={15} /></Link>
            <Link href="/services" className="px-6 py-3 border border-silver/30 text-silver hover:text-white hover:border-silver/60 rounded-lg transition-colors" style={{ fontFamily:'var(--font-inter)' }}>
              <Building2 size={15} className="inline mr-2" />Our Services
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
