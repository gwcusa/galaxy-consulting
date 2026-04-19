import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Target, Eye, Heart, Medal, Users, Star } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about Galaxy Consulting, LLC — a Service-Disabled Veteran-Owned IT firm delivering excellence to federal and state government agencies from Fort Washington, Maryland.',
};

const values = [
  { icon: Target, title: 'Mission-Focused',    desc: "Every engagement begins with one question: how do we best serve the mission? Our team aligns technical solutions to your agency's operational goals." },
  { icon: Medal,  title: 'Veteran-Led',         desc: 'Led by a Retired U.S. Army Communications and Electronics Officer, we understand military precision, discipline, and the importance of mission success.' },
  { icon: Heart,  title: 'Integrity First',     desc: 'We operate with the same commitment to duty, honor, and country that defines military service — delivering honest, high-quality results every time.' },
  { icon: Eye,    title: 'Innovation-Driven',   desc: 'We stay current with emerging technologies to provide government agencies with modern, secure solutions that enhance operational effectiveness.' },
];

const timeline = [
  { year: 'Founded', title: 'Galaxy Consulting, LLC Established',       desc: 'Charles Cooks leveraged 35+ years of Army and corporate IT experience to found Galaxy Consulting in Fort Washington, Maryland.' },
  { year: 'Early',   title: 'First Federal Contracts',                  desc: 'Began delivering IT solutions and administrative support services to the Department of Veterans Affairs.' },
  { year: 'Growth',  title: 'Maryland State Contract',                  desc: 'Awarded the Maryland DOIT Master H/W Contract, serving agencies statewide including the Department of Health and Executive Office of the Governor.' },
  { year: 'DoD',     title: 'Department of Defense Engagements',        desc: 'Delivered technology solutions to US Marine Forces Pacific (MARFORPAC) and Naval Surface Warfare Centers.' },
  { year: 'Today',   title: 'Certified & Expanding',                    desc: 'Operating as a verified SDVOSB, SDB, and MBE with strategic partner affiliations including Dell, HP, and Palo Alto Networks.' },
];

const naicsCodes = [
  { code: '423420', desc: 'Office Equipment Merchant Wholesalers' },
  { code: '423430', desc: 'Computer & Peripheral Equipment Merchant Wholesalers' },
  { code: '541519', desc: 'Other Computer Related Services' },
  { code: '541512', desc: 'Computer Systems Design Services' },
  { code: '541712', desc: 'Research and Development in the Physical Sciences' },
  { code: '541990', desc: 'All Other Professional Services' },
];

export default function AboutPage() {
  return (
    <>
      {/* ── HEADER ── */}
      <section className="bg-galaxy py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-blue-bright text-xs font-semibold uppercase tracking-widest mb-3" style={{ fontFamily:'var(--font-inter)' }}>About Galaxy Consulting</p>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-5" style={{ fontFamily:'var(--font-barlow)' }}>
            Bridging Technology &amp;<br className="hidden sm:block" /> Government Mission
          </h1>
          <p className="text-silver/70 text-base max-w-2xl" style={{ fontFamily:'var(--font-inter)' }}>
            Galaxy Consulting is a specialized professional services firm based in Fort Washington, Maryland — dedicated to delivering high-impact IT and administrative solutions to the government and defense sectors.
          </p>
        </div>
      </section>

      {/* ── COMPANY OVERVIEW ── */}
      <section className="py-20 bg-section-alt">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-14 items-start">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white section-heading mb-6" style={{ fontFamily:'var(--font-barlow)' }}>Who We Are</h2>
              <div className="space-y-4 text-sm text-silver leading-relaxed" style={{ fontFamily:'var(--font-inter)' }}>
                <p>
                  Galaxy Consulting, LLC is a Service-Disabled Veteran-Owned Small Business (SDVOSB) that provides information technology and professional services to Government agencies, International Organizations, and Private Industry Partners.
                </p>
                <p>
                  Our management team brings over <strong className="text-white">50 years of combined</strong> government, military, and commercial industry experience. We approach each business opportunity with the goal of living up to our motto:{' '}
                  <em className="text-blue-bright font-medium">&ldquo;Our Mission Is Your Success.&rdquo;</em>
                </p>
                <p>
                  From complex IT infrastructure deployments to cybersecurity compliance, program management, and AI-driven automation, we deliver solutions that are technically sound, cost-effective, and aligned with your mission.
                </p>
                <p>
                  Our team holds <strong className="text-white">20+ industry-recognized professional certifications</strong> spanning cybersecurity (CISSP, CEH), project management (PMP, Six Sigma), networking (CCNA), and vendor technologies — ensuring every engagement is backed by proven expertise.
                </p>
              </div>
              <div className="mt-8 grid grid-cols-3 gap-3">
                {['SDVOSB','SDB','MBE'].map((c) => (
                  <div key={c} className="cert-badge rounded-lg py-3 text-center">
                    <div className="text-lg font-bold text-white" style={{ fontFamily:'var(--font-barlow)' }}>{c}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* CEO Bio */}
            <div className="bg-card-surface rounded-2xl p-8 border border-blue-accent/20">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-full bg-navy-mid border-2 border-blue-accent/40 flex items-center justify-center flex-shrink-0">
                  <Users size={28} className="text-blue-accent" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white" style={{ fontFamily:'var(--font-barlow)' }}>Charles Cooks</h3>
                  <p className="text-silver/60 text-sm" style={{ fontFamily:'var(--font-inter)' }}>President &amp; CEO</p>
                </div>
              </div>
              <div className="space-y-3 text-sm text-silver/70" style={{ fontFamily:'var(--font-inter)' }}>
                {[
                  'Retired U.S. Army Communications and Electronics Officer',
                  'Over 35 years of leadership and management experience',
                  '25+ years of IT contracting with government and international agencies',
                  'Delivered services to Intelligence Community and Civilian Agency customers',
                  'Experience as Senior Corporate Executive, Program Director, Program Manager, and Lead Engineer',
                ].map((item) => (
                  <div key={item} className="flex items-start gap-2.5">
                    <Star size={14} className="text-blue-accent flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              <div className="divider mt-6 mb-5" />
              <div className="text-xs text-silver/40" style={{ fontFamily:'var(--font-inter)' }}>
                <p>ccooks@galaxyconsultingllc.com</p>
                <p className="mt-1">240-324-7888 &nbsp;·&nbsp; 703-402-7541</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CORE VALUES ── */}
      <section className="py-20 bg-section-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white section-heading section-heading-center" style={{ fontFamily:'var(--font-barlow)' }}>Our Core Values</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v) => (
              <div key={v.title} className="card-hover card-surface rounded-xl p-6">
                <div className="inline-flex p-3 rounded-lg bg-blue-accent/10 text-blue-accent mb-4">
                  <v.icon size={20} />
                </div>
                <h3 className="text-base font-semibold text-white mb-2.5" style={{ fontFamily:'var(--font-barlow)' }}>{v.title}</h3>
                <p className="text-sm text-silver/70 leading-relaxed" style={{ fontFamily:'var(--font-inter)' }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HISTORY TIMELINE ── */}
      <section className="py-20 bg-navy">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white section-heading section-heading-center" style={{ fontFamily:'var(--font-barlow)' }}>Our Journey</h2>
          </div>
          <div className="relative">
            <div className="absolute left-4 top-0 bottom-0 w-px bg-blue-accent/30" />
            <div className="space-y-8">
              {timeline.map((item, i) => (
                <div key={i} className="relative pl-12">
                  <div className="absolute left-0 top-1 w-8 h-8 rounded-full bg-card-surface border-2 border-blue-accent flex items-center justify-center">
                    <span className="text-blue-bright font-bold leading-none text-center" style={{ fontFamily:'var(--font-inter)', fontSize:'0.5rem' }}>{item.year}</span>
                  </div>
                  <h3 className="text-white font-semibold text-base mb-1.5" style={{ fontFamily:'var(--font-barlow)' }}>{item.title}</h3>
                  <p className="text-silver/60 text-sm leading-relaxed" style={{ fontFamily:'var(--font-inter)' }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── NAICS CODES ── */}
      <section className="py-16 bg-section-alt">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-white section-heading mb-8" style={{ fontFamily:'var(--font-barlow)' }}>NAICS Codes</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {naicsCodes.map((n) => (
              <div key={n.code} className="card-surface rounded-lg p-4 flex items-start gap-3">
                <div className="text-blue-accent font-bold text-sm flex-shrink-0 pt-0.5 font-mono" style={{ fontFamily:'var(--font-inter)' }}>{n.code}</div>
                <div className="text-silver text-sm" style={{ fontFamily:'var(--font-inter)' }}>{n.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-16 bg-galaxy">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4" style={{ fontFamily:'var(--font-barlow)' }}>Ready to Partner With Us?</h2>
          <p className="text-silver/70 text-sm mb-8" style={{ fontFamily:'var(--font-inter)' }}>Explore our capabilities or reach out to start a conversation about your mission requirements.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/services" className="px-6 py-3 bg-blue-accent hover:bg-blue-bright text-navy font-semibold rounded-lg transition-all hover:-translate-y-0.5 flex items-center gap-2" style={{ fontFamily:'var(--font-inter)' }}>Our Services <ArrowRight size={15} /></Link>
            <Link href="/contact" className="px-6 py-3 border border-silver/30 text-silver hover:text-white hover:border-silver/60 rounded-lg transition-colors" style={{ fontFamily:'var(--font-inter)' }}>Contact Us</Link>
          </div>
        </div>
      </section>
    </>
  );
}
