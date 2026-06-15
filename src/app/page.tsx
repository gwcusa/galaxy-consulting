import Link from 'next/link';
import Image from 'next/image';
import {
  Shield, Server, BarChart3, Code2, Building2, Award,
  ArrowRight, CheckCircle2, Star, Users, Clock, Briefcase,
} from 'lucide-react';

const stats = [
  { value: '75+',  label: 'Years Combined Experience' },
  { value: '20+',  label: 'Team Certifications' },
  { value: '7',    label: 'Core Service Areas' },
  { value: '100%', label: 'Mission Commitment' },
];

const services = [
  { icon: Shield,    title: 'CMMC Level 1 Compliance', desc: 'Cyber-AB authorized RPO helping DoD contractors achieve CMMC Level 1 certification — gap assessments, remediation, documentation, and staffing.', href: '/cmmc', accent: 'text-emerald-400', ring: 'bg-emerald-400/10', highlight: true },
  { icon: Server,    title: 'IT Infrastructure',        desc: 'End-to-end hardware/software sales, installation, integration, and 24/7 help desk services.', href: '/services/it-infrastructure',  accent: 'text-blue-bright',   ring: 'bg-blue-bright/10' },
  { icon: Shield,    title: 'Cybersecurity',             desc: 'NIST 800-53 compliance, ATO packages, penetration testing, and security architecture design.',  href: '/services/cybersecurity',      accent: 'text-cyan-400',      ring: 'bg-cyan-400/10' },
  { icon: BarChart3, title: 'Program Management',        desc: 'Strategic IT roadmaps, project planning, QA monitoring, and stakeholder coordination.',           href: '/services/program-management', accent: 'text-purple-400',    ring: 'bg-purple-400/10' },

  { icon: Code2,     title: 'Software Development',      desc: 'Custom software and database solutions that modernize operations and improve decision-making.',     href: '/services',                    accent: 'text-amber-400',     ring: 'bg-amber-400/10' },
  { icon: Building2, title: 'Facility Management',       desc: 'Procurement coordination, SLA monitoring, access control, and credentialing support.',             href: '/services',                    accent: 'text-rose-400',      ring: 'bg-rose-400/10' },
  { icon: Award,     title: 'Federal Compliance',        desc: 'ISO-9000 QA, identity management, and contract administration for federal agencies.',              href: '/services',                    accent: 'text-teal-400',      ring: 'bg-teal-400/10' },
];

const certifications = [
  { abbr: 'CMMC RPO', full: 'Cyber-AB Registered Provider Organization', highlight: true },
  { abbr: 'SDVOSB',   full: 'Service-Disabled Veteran-Owned Small Business' },
  { abbr: 'SDB',      full: 'Small Disadvantaged Business' },
];

const partners = [
  'Dell Technologies', 'HP Partner', 'Palo Alto Networks',
  'NinjaOne RMM', 'SMART Technologies', 'Cyber Manufacturing',
];

const whyUs = [
  'Cyber-AB authorized CMMC RPO — CMMC Level 1 & Level 2 certified ourselves',
  'Over 75 years of combined government & military IT experience',
  'Service-Disabled Veteran leadership — we understand your mission',
  'Proven track record with VA, DoD, and Maryland state agencies',
  'Authorized reseller for Dell, HP, Palo Alto Networks, and more',
  'NIST 800-53, CMMC & ISO-9000 compliance expertise',
  '20+ industry-recognized team certifications — PMP, CISSP, CEH, RP & more',
  'Flexible contracting through multiple set-aside vehicles (SDVOSB · SDB)',
];

const customers = [
  { name: 'Department of Veterans Affairs', abbr: 'VA' },
  { name: 'US Marine Forces Pacific',       abbr: 'MARFORPAC' },
  { name: 'Department of the Navy',         abbr: 'USN' },
  { name: 'Maryland State Agencies',        abbr: 'MD' },
];

export default function HomePage() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="relative min-h-[92vh] flex items-center overflow-hidden bg-galaxy">
        {/* Dot grid texture */}
        <div className="absolute inset-0 hero-dots pointer-events-none select-none opacity-60" />
        {/* Star field */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none select-none">
          {[
            [8,12],[15,45],[22,78],[30,25],[38,60],[45,88],[52,15],[60,52],[68,33],[75,70],
            [82,8],[90,42],[5,65],[18,90],[35,5],[48,75],[62,20],[78,55],[92,30],[12,38],
            [25,82],[42,48],[55,10],[70,85],[85,65],[3,50],[16,22],[29,68],[44,35],[58,92],
            [72,15],[88,78],[7,80],[20,5],[33,55],[50,28],[65,72],[80,40],[95,18],[10,95],
            [23,42],[37,15],[53,65],[67,88],[83,25],[2,35],[14,60],[27,82],[41,10],[57,45],
            [71,30],[87,68],[96,50],[6,22],[19,75],
          ].map(([left, top], i) => (
            <div key={i} className="star absolute w-px h-px bg-white rounded-full" style={{ left:`${left}%`, top:`${top}%`, '--star-dur':`${2+(i%5)}s`, '--star-delay':`${(i*0.13)%4}s`, '--star-opacity':`${0.3+(i%7)*0.1}` } as React.CSSProperties} />
          ))}
        </div>
        {/* Cyan glow behind headline */}
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[700px] h-[700px] pointer-events-none" style={{ background: 'radial-gradient(ellipse, rgba(34,211,238,0.09) 0%, transparent 65%)' }} />
        {/* Orbit rings */}
        <div className="absolute right-[-100px] top-1/2 -translate-y-1/2 pointer-events-none hidden lg:block">
          {[600,450,300].map((size,i) => (
            <div key={i} className="orbit-ring absolute rounded-full" style={{ width:size, height:size, top:'50%', left:'50%', marginTop:-size/2, marginLeft:-size/2, border:`1px solid rgba(34,211,238,${0.07+i*0.05})`, '--orbit-speed':`${35-i*7}s`, animationDirection:i%2===0?'normal':'reverse' } as React.CSSProperties} />
          ))}
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="max-w-3xl">
            <div className="flex gap-2 mb-6">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-emerald-500/40 bg-emerald-500/10 text-emerald-400 text-xs font-semibold tracking-widest uppercase" style={{ fontFamily:'var(--font-inter)' }}>
                <Shield size={11} /> CMMC Registered Provider Organization
              </div>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-accent/40 bg-blue-accent/10 text-blue-bright text-xs font-semibold tracking-widest uppercase" style={{ fontFamily:'var(--font-inter)' }}>
                <Star size={11} /> Service-Disabled Veteran-Owned Business
              </div>
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight gradient-text mb-6" style={{ fontFamily:'var(--font-barlow)' }}>
              Our Mission<br />Is Your Success
            </h1>
            <div className="text-lg sm:text-xl text-silver/80 max-w-2xl leading-relaxed mb-10 space-y-4" style={{ fontFamily:'var(--font-inter)' }}>
              <p>
                Galaxy Consulting is a{' '}
                <span className="relative group cursor-help">
                  <span className="underline decoration-dotted decoration-emerald-500/60 underline-offset-2">Cyber-AB authorized CMMC</span>
                  <span className="pointer-events-none absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-72 rounded-lg bg-navy-mid border border-emerald-500/30 px-3 py-2 text-xs text-silver/90 leading-snug opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-50 shadow-lg" style={{ fontFamily:'var(--font-inter)', fontSize:'0.72rem' }}>
                    <span className="font-semibold text-emerald-400">Cyber-AB:</span> Cybersecurity Maturity Model Certification Accreditation Body
                    <br /><span className="font-semibold text-emerald-400">CMMC:</span> Cybersecurity Maturity Model Certification
                  </span>
                </span>{' '}
                Registered Practitioner Organization (RPO) that is focused on delivering mission-critical IT infrastructure, cybersecurity, and professional services to federal and state government agencies and their industry partners — backed by 75+ years of combined military and technology expertise.
              </p>
              <p>
                We deliver IT system design, implementation, integration services, and CMMC Level 1 and Level 2 compliance assistance to DoD contractors seeking CMMC compliance. We specialize in supporting CMMC services from gap analysis, self-assessments, security control compliance assistance, and support in preparing for official CMMC self-assessment or third-party compliance testing.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Link href="/cmmc" className="inline-flex items-center gap-2 px-7 py-3.5 bg-emerald-500 hover:bg-emerald-400 text-navy font-bold rounded-lg transition-all duration-200 hover:-translate-y-0.5 shadow-lg shadow-emerald-500/25" style={{ fontFamily:'var(--font-inter)' }}>
                CMMC Certification Support <ArrowRight size={17} />
              </Link>
              <Link href="/services" className="inline-flex items-center gap-2 px-7 py-3.5 border border-silver/20 text-silver hover:text-white hover:border-blue-accent/50 rounded-lg transition-all duration-200" style={{ fontFamily:'var(--font-inter)' }}>
                IT Technical Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── TRUST & AUTHORITY BAR ── */}
      <section className="bg-navy border-b border-emerald-500/25">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <p className="text-center text-xs text-silver/40 uppercase tracking-widest mb-8" style={{ fontFamily:'var(--font-inter)' }}>
            Cyber-AB Authorized Credentials
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 lg:gap-20">
            {/* RPO Badge */}
            <div className="flex flex-col items-center gap-4 text-center">
              <Image
                src="/Cyberab - RPO Badge.png"
                alt="CMMC-AB Registered Provider Organization"
                width={120}
                height={120}
                className="object-contain shadow-xl shadow-orange-500/20"
              />
              <div>
                <div className="text-emerald-400 font-bold text-sm tracking-wide" style={{ fontFamily:'var(--font-barlow)' }}>CMMC Registered Provider Organization</div>
                <div className="text-silver/50 text-xs mt-1" style={{ fontFamily:'var(--font-inter)' }}>Cyber-AB Authorized · Advisory &amp; Preparation Services</div>
              </div>
            </div>
            {/* Divider */}
            <div className="hidden sm:block w-px h-24 bg-emerald-500/20" />
            {/* RP Badge */}
            <div className="flex flex-col items-center gap-4 text-center">
              <Image
                src="/RP.png"
                alt="Cyber-AB Registered Practitioner"
                width={120}
                height={120}
                className="rounded-full shadow-xl shadow-blue-500/20 ring-2 ring-blue-accent/30"
              />
              <div>
                <div className="text-blue-bright font-bold text-sm tracking-wide" style={{ fontFamily:'var(--font-barlow)' }}>Registered Practitioner (RP)</div>
                <div className="text-silver/50 text-xs mt-1" style={{ fontFamily:'var(--font-inter)' }}>Cyber-AB Certified · On-Staff CMMC Practitioners</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS BAR ── */}
      <section className="bg-navy-mid border-y border-blue-accent/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:divide-x lg:divide-blue-accent/20">
            {stats.map((s) => (
              <div key={s.label} className="flex flex-col items-center text-center py-2">
                <span className="text-4xl font-bold text-white" style={{ fontFamily:'var(--font-barlow)' }}>{s.value}</span>
                <span className="text-xs text-silver/60 mt-1.5 max-w-[110px] leading-snug" style={{ fontFamily:'var(--font-inter)' }}>{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CMMC CTA STRIP ── */}
      <section className="py-14 bg-navy border-y border-emerald-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="flex items-start gap-4">
              <Image
                src="/Cyberab - RPO Badge.png"
                alt="CMMC-AB Registered Provider Organization"
                width={64}
                height={64}
                className="object-contain shadow-lg shadow-orange-500/20 flex-shrink-0"
              />
              <div>
                <div className="text-xs text-emerald-400 font-semibold uppercase tracking-widest mb-1" style={{ fontFamily:'var(--font-inter)' }}>CMMC RPO — Cyber-AB Authorized</div>
                <h3 className="text-white font-bold text-xl mb-1" style={{ fontFamily:'var(--font-barlow)' }}>Is Your Company Required to Be CMMC Compliant?</h3>
                <p className="text-silver/60 text-sm max-w-xl" style={{ fontFamily:'var(--font-inter)' }}>
                  If you hold DoD contracts or subcontracts, CMMC Level 1 may already be required. Galaxy Consulting — an authorized CMMC RPO — helps small businesses achieve compliance quickly and affordably.
                </p>
              </div>
            </div>
            <div className="flex flex-wrap gap-3 flex-shrink-0">
              <Link href="/cmmc" className="px-6 py-3 bg-emerald-500 hover:bg-emerald-400 text-navy font-semibold rounded-lg transition-all text-sm hover:-translate-y-0.5 shadow-lg shadow-emerald-500/20" style={{ fontFamily:'var(--font-inter)' }}>
                Learn About CMMC
              </Link>
              <Link href="/contact" className="px-6 py-3 border border-emerald-500/40 text-emerald-400 hover:bg-emerald-500/10 rounded-lg transition-colors text-sm" style={{ fontFamily:'var(--font-inter)' }}>
                Free Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICES GRID ── */}
      <section className="py-24 bg-section-alt">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-white section-heading section-heading-center" style={{ fontFamily:'var(--font-barlow)' }}>Core Capabilities</h2>
            <p className="mt-6 text-silver/70 text-base max-w-xl mx-auto" style={{ fontFamily:'var(--font-inter)' }}>
              Comprehensive technology and professional services tailored for government missions
            </p>
          </div>
          {/* Featured CMMC Card */}
          <Link href="/cmmc" className="group block mb-5">
            <div className="card-hover rounded-2xl bg-emerald-500/10 border border-emerald-500/40 hover:border-emerald-400/60 p-8 flex flex-col lg:flex-row lg:items-center gap-6 transition-all">
              <div className="flex-1">
                <div className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-400 mb-4 uppercase tracking-wider bg-emerald-500/10 px-3 py-1.5 rounded-full border border-emerald-500/30" style={{ fontFamily:'var(--font-inter)' }}>
                  <Shield size={11} /> CMMC RPO — Cyber-AB Authorized
                </div>
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-emerald-300 transition-colors" style={{ fontFamily:'var(--font-barlow)' }}>CMMC Level 1 Compliance</h3>
                <p className="text-silver/70 text-sm leading-relaxed max-w-2xl" style={{ fontFamily:'var(--font-inter)' }}>
                  Cyber-AB authorized RPO helping DoD contractors achieve CMMC Level 1 certification — gap assessments, remediation, documentation, and RP staffing.
                </p>
              </div>
              <div className="flex items-center gap-4 flex-shrink-0">
                <Image src="/Cyberab - RPO Badge.png" alt="CMMC RPO" width={60} height={60} className="object-contain shadow-md shadow-orange-500/20" />
                <span className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-500 group-hover:bg-emerald-400 text-navy font-semibold rounded-lg transition-colors text-sm" style={{ fontFamily:'var(--font-inter)' }}>
                  Learn More <ArrowRight size={14} />
                </span>
              </div>
            </div>
          </Link>
          {/* Remaining Services Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.slice(1).map((s) => (
              <Link key={s.title} href={s.href} className="group">
                <div className="card-hover card-surface rounded-xl p-6 h-full flex flex-col">
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
            <Link href="/services" className="inline-flex items-center gap-2 px-6 py-3 border border-blue-accent/40 text-silver hover:text-white hover:border-blue-accent rounded-lg transition-all font-medium text-sm" style={{ fontFamily:'var(--font-inter)' }}>
              View All Services <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── CERTIFICATIONS ── */}
      <section className="py-20 bg-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white section-heading section-heading-center" style={{ fontFamily:'var(--font-barlow)' }}>Federal Certifications</h2>
            <p className="mt-5 text-silver/60 text-sm max-w-lg mx-auto" style={{ fontFamily:'var(--font-inter)' }}>Strategically positioned for government set-aside opportunities</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
            {certifications.map((c) => (
              <Link key={c.abbr} href={c.abbr === 'CMMC RPO' ? '/cmmc' : '/certifications'} className={`cert-badge rounded-xl p-7 text-center transition-all hover:-translate-y-0.5 ${'highlight' in c && c.highlight ? 'border border-emerald-500/40 bg-emerald-500/5' : ''}`}>
                <div className={`text-2xl font-bold mb-2 ${'highlight' in c && c.highlight ? 'text-emerald-400' : 'text-white'}`} style={{ fontFamily:'var(--font-barlow)' }}>{c.abbr}</div>
                <div className="text-xs text-silver/60" style={{ fontFamily:'var(--font-inter)' }}>{c.full}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY GALAXY ── */}
      <section className="py-24 bg-section-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-14 items-start">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white section-heading mb-8" style={{ fontFamily:'var(--font-barlow)' }}>Why Galaxy Consulting?</h2>
              <ul className="space-y-4">
                {whyUs.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 size={18} className="text-blue-accent flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-silver leading-relaxed" style={{ fontFamily:'var(--font-inter)' }}>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-10">
                <Link href="/about" className="inline-flex items-center gap-2 px-6 py-3 bg-blue-accent hover:bg-blue-bright text-navy font-semibold rounded-lg transition-colors" style={{ fontFamily:'var(--font-inter)' }}>
                  Learn About Us <ArrowRight size={16} />
                </Link>
              </div>
            </div>
            <div className="bg-card-surface rounded-2xl p-8 border border-blue-accent/20">
              <h3 className="text-white font-bold text-xl mb-6" style={{ fontFamily:'var(--font-barlow)' }}>Trusted By</h3>
              <div className="grid grid-cols-2 gap-4 mb-6">
                {customers.map((c) => (
                  <div key={c.abbr} className="cert-badge rounded-lg p-4 text-center">
                    <div className="text-xl font-bold text-blue-bright mb-1" style={{ fontFamily:'var(--font-barlow)' }}>{c.abbr}</div>
                    <div className="text-xs text-silver/60 leading-snug" style={{ fontFamily:'var(--font-inter)' }}>{c.name}</div>
                  </div>
                ))}
              </div>
              <div className="divider mb-5" />
              <div className="space-y-3">
                {[
                  { icon: Briefcase, text: 'Federal, State & Local Government Customers' },
                  { icon: Users,     text: 'Management team with 75+ years experience' },
                  { icon: Clock,     text: 'Responsive support — 24/7 help desk available' },
                ].map(({ icon: Icon, text }) => (
                  <div key={text} className="flex items-center gap-3 text-silver/60 text-sm" style={{ fontFamily:'var(--font-inter)' }}>
                    <Icon size={15} className="text-blue-accent flex-shrink-0" />
                    <span>{text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── PARTNERS ── */}
      <section className="py-14 bg-navy border-y border-blue-accent/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-xs text-silver/40 uppercase tracking-widest mb-8" style={{ fontFamily:'var(--font-inter)' }}>Strategic Technology Partners</p>
          <div className="flex flex-wrap justify-center gap-4">
            {partners.map((p) => (
              <div key={p} className="px-5 py-2.5 rounded-lg border border-blue-accent/25 bg-blue-accent/5 text-silver text-sm font-medium hover:border-blue-accent/60 hover:text-white transition-all cursor-default" style={{ fontFamily:'var(--font-inter)' }}>
                {p}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-galaxy py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-5" style={{ fontFamily:'var(--font-barlow)' }}>Ready to Work With Us?</h2>
          <p className="text-silver/70 text-base mb-10 max-w-xl mx-auto" style={{ fontFamily:'var(--font-inter)' }}>Let&apos;s discuss how Galaxy Consulting can support your agency&apos;s IT mission.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="px-8 py-3.5 bg-blue-accent hover:bg-blue-bright text-navy font-semibold rounded-lg transition-all hover:-translate-y-0.5 duration-200 shadow-lg shadow-blue-accent/30" style={{ fontFamily:'var(--font-inter)' }}>Get In Touch</Link>
            <Link href="/past-performance" className="px-8 py-3.5 border border-silver/30 text-silver hover:text-white hover:border-silver/60 rounded-lg transition-colors" style={{ fontFamily:'var(--font-inter)' }}>View Past Performance</Link>
          </div>
        </div>
      </section>
    </>
  );
}
