import type { Metadata } from 'next';
import Link from 'next/link';
import {
  Brain, TrendingUp, Zap, Users, Layers, ArrowRight, CheckCircle2,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Artificial Intelligence (AI) Services',
  description:
    'Galaxy Consulting helps government agencies and organizations adopt AI to cut costs, automate operations, make smarter decisions, and deliver better outcomes.',
};

const valueProps = [
  {
    icon: TrendingUp,
    title: 'Stay Competitive',
    desc: 'AI is reshaping every industry and your competitors aren\'t waiting. We help you identify where AI creates the most impact and implement solutions that keep you ahead.',
    items: [
      'AI readiness assessment',
      'Competitive landscape analysis',
      'Technology adoption roadmapping',
      'Proof-of-concept development',
    ],
  },
  {
    icon: Zap,
    title: 'Cut Costs & Boost Efficiency',
    desc: 'Automate repetitive tasks, reduce operational overhead, and free your team to focus on higher-value work — delivering measurable ROI from day one.',
    items: [
      'Intelligent process automation (IPA)',
      'Workflow optimization analysis',
      'Robotic Process Automation (RPA)',
      'Cost-benefit modeling',
    ],
  },
  {
    icon: Brain,
    title: 'Smarter, Faster Decisions',
    desc: 'Turn your data into actionable insights that improve forecasting, reduce guesswork, and drive better mission outcomes at every level of your organization.',
    items: [
      'Predictive analytics & forecasting',
      'Data pipeline development',
      'AI-powered dashboards & reporting',
      'Natural language querying (NLQ)',
    ],
  },
  {
    icon: Users,
    title: 'Better Customer Experiences',
    desc: 'Deliver personalized, responsive interactions that increase satisfaction, reduce service times, and keep constituents and customers coming back.',
    items: [
      'Intelligent chatbots & virtual assistants',
      'Personalization engines',
      'Sentiment analysis & feedback loops',
      'AI-driven case management',
    ],
  },
  {
    icon: Layers,
    title: 'Scale Without the Complexity',
    desc: 'We handle the strategy, tools, and end-to-end implementation so your agency gets real results — without the confusion, risk, or burden of figuring it out alone.',
    items: [
      'AI strategy & governance planning',
      'Tool selection & vendor evaluation',
      'Model deployment & integration',
      'Ongoing monitoring & optimization',
    ],
  },
];

const useCases = [
  { agency: 'Federal Agencies', example: 'Automate document processing, claims intake, and compliance reporting' },
  { agency: 'Healthcare Organizations', example: 'Predictive patient scheduling, anomaly detection, and records summarization' },
  { agency: 'IT Operations', example: 'AIOps for proactive incident detection and automated remediation' },
  { agency: 'Program Management', example: 'AI-assisted risk analysis, resource forecasting, and status reporting' },
  { agency: 'Cybersecurity', example: 'Machine learning-driven threat detection and anomaly monitoring' },
  { agency: 'Customer Service', example: 'Intelligent virtual agents that handle Tier 1 inquiries 24/7' },
];

const approach = [
  { step: '01', title: 'Discover', desc: 'Assess your current operations, data landscape, and highest-impact AI opportunities.' },
  { step: '02', title: 'Design', desc: 'Develop an AI strategy, select the right tools, and create a phased implementation roadmap.' },
  { step: '03', title: 'Build', desc: 'Develop, test, and integrate AI models and automation into your existing workflows.' },
  { step: '04', title: 'Optimize', desc: 'Monitor performance, retrain models, and continuously improve outcomes over time.' },
];

export default function AIServicesPage() {
  return (
    <>
      {/* ── HEADER ── */}
      <section className="bg-galaxy py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-xs text-silver/50 mb-5" style={{ fontFamily: 'var(--font-inter)' }}>
            <Link href="/services" className="hover:text-blue-bright transition-colors">Services</Link>
            <span>/</span>
            <span className="text-silver">AI Services</span>
          </nav>
          <div className="inline-flex p-3 rounded-xl bg-purple-500/15 text-purple-400 mb-5">
            <Brain size={26} />
          </div>
          <h1
            className="text-4xl sm:text-5xl font-bold text-white mb-5"
            style={{ fontFamily: 'var(--font-barlow)' }}
          >
            Artificial Intelligence<br />(AI) Services
          </h1>
          <p
            className="text-silver/70 text-base max-w-2xl"
            style={{ fontFamily: 'var(--font-inter)' }}
          >
            AI is no longer a future investment — it&apos;s a present competitive advantage. Galaxy Consulting
            helps organizations cut through the hype and deploy AI solutions that deliver measurable,
            mission-aligned results.
          </p>
        </div>
      </section>

      {/* ── VALUE PROPOSITIONS ── */}
      <section className="py-20 bg-off-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            className="text-2xl font-bold text-navy section-heading mb-10"
            style={{ fontFamily: 'var(--font-barlow)' }}
          >
            Why AI — And Why Now?
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {valueProps.map((v) => (
              <div key={v.title} className="card-hover bg-white rounded-xl p-6 border border-silver-light flex flex-col">
                <div className="inline-flex p-2.5 rounded-lg bg-purple-500/10 text-purple-500 mb-4 w-fit">
                  <v.icon size={20} />
                </div>
                <h3
                  className="text-base font-semibold text-navy mb-2.5"
                  style={{ fontFamily: 'var(--font-barlow)' }}
                >
                  {v.title}
                </h3>
                <p
                  className="text-sm text-silver leading-relaxed mb-4 flex-1"
                  style={{ fontFamily: 'var(--font-inter)' }}
                >
                  {v.desc}
                </p>
                <ul className="space-y-1.5">
                  {v.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-xs text-silver/70" style={{ fontFamily: 'var(--font-inter)' }}>
                      <CheckCircle2 size={13} className="text-purple-500 flex-shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {/* Sixth card: Our Approach teaser */}
            <div className="card-hover bg-navy rounded-xl p-6 flex flex-col justify-between">
              <div>
                <div className="inline-flex p-2.5 rounded-lg bg-white/10 text-white mb-4 w-fit">
                  <ArrowRight size={20} />
                </div>
                <h3
                  className="text-base font-semibold text-white mb-2.5"
                  style={{ fontFamily: 'var(--font-barlow)' }}
                >
                  Ready to Get Started?
                </h3>
                <p
                  className="text-silver/60 text-sm leading-relaxed"
                  style={{ fontFamily: 'var(--font-inter)' }}
                >
                  Let Galaxy Consulting assess your AI readiness and build a roadmap tailored to your mission.
                </p>
              </div>
              <Link
                href="/contact"
                className="mt-6 w-full flex items-center justify-center gap-2 px-4 py-2.5 bg-blue-accent hover:bg-blue-bright text-white text-sm font-semibold rounded-lg transition-colors"
                style={{ fontFamily: 'var(--font-inter)' }}
              >
                Schedule a Consultation <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── OUR 4-STEP APPROACH ── */}
      <section className="py-16 bg-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            className="text-2xl font-bold text-white section-heading mb-10"
            style={{ fontFamily: 'var(--font-barlow)' }}
          >
            Our AI Implementation Approach
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {approach.map((a) => (
              <div key={a.step} className="cert-badge rounded-xl p-6">
                <div
                  className="text-3xl font-bold text-purple-400 mb-3"
                  style={{ fontFamily: 'var(--font-barlow)' }}
                >
                  {a.step}
                </div>
                <div
                  className="text-white font-semibold text-sm mb-2"
                  style={{ fontFamily: 'var(--font-barlow)' }}
                >
                  {a.title}
                </div>
                <p
                  className="text-silver/50 text-xs leading-relaxed"
                  style={{ fontFamily: 'var(--font-inter)' }}
                >
                  {a.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── USE CASES ── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            className="text-2xl font-bold text-navy section-heading mb-10"
            style={{ fontFamily: 'var(--font-barlow)' }}
          >
            AI Use Cases by Sector
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {useCases.map((u) => (
              <div key={u.agency} className="bg-off-white rounded-xl p-5 border border-silver-light">
                <div
                  className="text-navy font-semibold text-sm mb-2"
                  style={{ fontFamily: 'var(--font-barlow)' }}
                >
                  {u.agency}
                </div>
                <p
                  className="text-silver text-sm leading-relaxed"
                  style={{ fontFamily: 'var(--font-inter)' }}
                >
                  {u.example}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-16 bg-galaxy">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2
            className="text-2xl sm:text-3xl font-bold text-white mb-4"
            style={{ fontFamily: 'var(--font-barlow)' }}
          >
            Let&apos;s Put AI to Work for Your Mission
          </h2>
          <p className="text-silver/70 text-sm mb-8" style={{ fontFamily: 'var(--font-inter)' }}>
            No hype. No confusion. Just practical AI solutions that deliver real results.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="px-7 py-3.5 bg-blue-accent hover:bg-blue-bright text-white font-semibold rounded-lg transition-all hover:-translate-y-0.5 flex items-center gap-2"
              style={{ fontFamily: 'var(--font-inter)' }}
            >
              Schedule a Consultation <ArrowRight size={16} />
            </Link>
            <Link
              href="/services"
              className="px-7 py-3.5 border border-silver/30 text-silver hover:text-white hover:border-silver/60 rounded-lg transition-colors"
              style={{ fontFamily: 'var(--font-inter)' }}
            >
              All Services
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
