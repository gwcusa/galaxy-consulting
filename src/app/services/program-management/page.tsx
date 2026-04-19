import type { Metadata } from 'next';
import Link from 'next/link';
import { BarChart3, Map, Users, ClipboardCheck, TrendingUp, Layers, ArrowRight, CheckCircle2 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Program & Project Management',
  description:
    'Galaxy Consulting provides strategic IT roadmap development, project planning, team staffing, quality assurance, and stakeholder coordination for government agencies.',
};

const offerings = [
  {
    icon: ClipboardCheck,
    title: 'Project Management Plan Development',
    desc: 'Comprehensive Project Management Plans (PMPs) that align scope, schedule, budget, and stakeholder expectations from day one.',
    items: [
      'Work Breakdown Structure (WBS)',
      'Schedule development & milestone tracking',
      'Risk register & mitigation strategies',
      'Communication plans',
      'Change management procedures',
    ],
  },
  {
    icon: Map,
    title: 'Strategic IT Roadmap Development',
    desc: 'Long-term IT planning that maps technology investments to mission objectives, ensuring alignment with agency goals and budget cycles.',
    items: [
      'Current state assessment',
      'Future state architecture planning',
      'Technology gap analysis',
      'Multi-year IT investment planning',
      'Alignment with federal IT mandates',
    ],
  },
  {
    icon: Layers,
    title: 'System Architecture Design Support',
    desc: 'Expert support for defining functional and technical requirements, designing system architectures, and documenting stakeholder needs.',
    items: [
      'Functional & technical requirements',
      'System architecture documentation',
      'Stakeholder needs assessment',
      'Multi-vendor integration planning',
      'Interface Control Documents (ICDs)',
    ],
  },
  {
    icon: Users,
    title: 'Project Team Staffing Support',
    desc: 'Identifying, vetting, and placing qualified IT professionals to fill critical project roles and supplement existing government teams.',
    items: [
      'Role & skill gap identification',
      'Qualified candidate sourcing',
      'Clearance-eligible personnel',
      'Contractor personnel management',
      'Knowledge transfer planning',
    ],
  },
  {
    icon: TrendingUp,
    title: 'Quality Assurance & Performance Monitoring',
    desc: 'Rigorous QA processes and continuous performance monitoring to ensure deliverables meet quality standards and contractual requirements.',
    items: [
      'ISO-9000 series quality standards',
      'Deliverable review & acceptance',
      'Performance metrics development',
      'KPI dashboards & reporting',
      'Lessons learned documentation',
    ],
  },
  {
    icon: BarChart3,
    title: 'Project Execution & Coordination',
    desc: 'Day-to-day project execution support including meeting facilitation, status reporting, issue resolution, and cross-functional coordination.',
    items: [
      'Daily/weekly status reporting',
      'Issue & action item tracking',
      'Vendor & subcontractor coordination',
      'Integrated Master Schedule (IMS) management',
      'Executive briefing preparation',
    ],
  },
];

const approach = [
  {
    phase: 'Initiate',
    color: 'border-blue-accent text-blue-bright',
    desc: 'Define project objectives, stakeholders, constraints, and success criteria.',
  },
  {
    phase: 'Plan',
    color: 'border-purple-500 text-purple-400',
    desc: 'Develop the PMP, schedule, risk register, and resource allocation strategy.',
  },
  {
    phase: 'Execute',
    color: 'border-emerald-500 text-emerald-400',
    desc: 'Coordinate team activities, manage vendors, and track progress against baseline.',
  },
  {
    phase: 'Monitor',
    color: 'border-amber-500 text-amber-400',
    desc: 'Continuous performance measurement, reporting, and corrective action.',
  },
  {
    phase: 'Close',
    color: 'border-teal-500 text-teal-400',
    desc: 'Final deliverable acceptance, lessons learned, and transition to operations.',
  },
];

export default function ProgramManagementPage() {
  return (
    <>
      {/* ── HEADER ── */}
      <section className="bg-galaxy py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-xs text-silver/50 mb-5" style={{ fontFamily: 'var(--font-inter)' }}>
            <Link href="/services" className="hover:text-blue-bright transition-colors">Services</Link>
            <span>/</span>
            <span className="text-silver">Program Management</span>
          </nav>
          <div className="inline-flex p-3 rounded-xl bg-purple-500/15 text-purple-400 mb-5">
            <BarChart3 size={26} />
          </div>
          <h1
            className="text-4xl sm:text-5xl font-bold text-white mb-5"
            style={{ fontFamily: 'var(--font-barlow)' }}
          >
            Program &amp; Project<br />Management
          </h1>
          <p
            className="text-silver/70 text-base max-w-2xl"
            style={{ fontFamily: 'var(--font-inter)' }}
          >
            Strategic program leadership and disciplined project execution — delivering on time, on budget, and
            on mission. Backed by military-grade discipline and decades of government IT experience.
          </p>
        </div>
      </section>

      {/* ── PM LIFECYCLE ── */}
      <section className="py-12 bg-navy-mid border-b border-blue-accent/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p
            className="text-xs text-silver/50 uppercase tracking-widest mb-5"
            style={{ fontFamily: 'var(--font-inter)' }}
          >
            Our Project Management Lifecycle
          </p>
          <div className="flex flex-wrap gap-3">
            {approach.map((a, i) => (
              <div
                key={a.phase}
                className={`flex items-center gap-3 px-4 py-2.5 rounded-full border ${a.color} bg-white/5`}
              >
                <span
                  className="text-silver/40 text-xs"
                  style={{ fontFamily: 'var(--font-inter)' }}
                >
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span
                  className="font-semibold text-sm"
                  style={{ fontFamily: 'var(--font-inter)' }}
                >
                  {a.phase}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICE OFFERINGS ── */}
      <section className="py-20 bg-off-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            className="text-2xl font-bold text-navy section-heading mb-10"
            style={{ fontFamily: 'var(--font-barlow)' }}
          >
            PM Service Offerings
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {offerings.map((o) => (
              <div key={o.title} className="card-hover bg-white rounded-xl p-6 border border-silver-light flex flex-col">
                <div className="inline-flex p-2.5 rounded-lg bg-purple-500/10 text-purple-500 mb-4 w-fit">
                  <o.icon size={20} />
                </div>
                <h3
                  className="text-base font-semibold text-navy mb-2.5"
                  style={{ fontFamily: 'var(--font-barlow)' }}
                >
                  {o.title}
                </h3>
                <p
                  className="text-sm text-silver leading-relaxed mb-4 flex-1"
                  style={{ fontFamily: 'var(--font-inter)' }}
                >
                  {o.desc}
                </p>
                <ul className="space-y-1.5">
                  {o.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-xs text-silver/70" style={{ fontFamily: 'var(--font-inter)' }}>
                      <CheckCircle2 size={13} className="text-purple-500 flex-shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PAST PM PERFORMANCE ── */}
      <section className="py-16 bg-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            className="text-2xl font-bold text-white section-heading mb-8"
            style={{ fontFamily: 'var(--font-barlow)' }}
          >
            PM Past Performance Highlights
          </h2>
          <div className="grid sm:grid-cols-2 gap-5">
            <div className="cert-badge rounded-xl p-6">
              <div
                className="text-white font-semibold mb-2"
                style={{ fontFamily: 'var(--font-barlow)' }}
              >
                VA Employee Education System (EES)
              </div>
              <p
                className="text-silver/60 text-sm leading-relaxed"
                style={{ fontFamily: 'var(--font-inter)' }}
              >
                Managed multi-conference room facility operations and provided administrative/technical support
                including conference scheduling, AV setup, and third-party vendor coordination for VHA EES.
              </p>
            </div>
            <div className="cert-badge rounded-xl p-6">
              <div
                className="text-white font-semibold mb-2"
                style={{ fontFamily: 'var(--font-barlow)' }}
              >
                Maryland DOIT Master Contract
              </div>
              <p
                className="text-silver/60 text-sm leading-relaxed"
                style={{ fontFamily: 'var(--font-inter)' }}
              >
                Active multi-year blanket purchase contract coordinating IT products &amp; services across
                multiple Maryland state agencies — demonstrating sustained program delivery excellence.
              </p>
            </div>
          </div>
          <div className="mt-6 text-center">
            <Link
              href="/past-performance"
              className="inline-flex items-center gap-2 text-blue-bright text-sm hover:underline"
              style={{ fontFamily: 'var(--font-inter)' }}
            >
              View all past performance <ArrowRight size={14} />
            </Link>
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
            Let&apos;s Deliver Your Next Project
          </h2>
          <p className="text-silver/70 text-sm mb-8" style={{ fontFamily: 'var(--font-inter)' }}>
            From project inception to final delivery, Galaxy Consulting brings the discipline and expertise
            your mission demands.
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
