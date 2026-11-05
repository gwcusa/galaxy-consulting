import type { Metadata } from 'next';
import { pageMeta } from '@/lib/seo';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';
import ContactForm from '@/components/ContactForm';
import { SITE_URL } from '@/lib/site';
import Link from 'next/link';
import {
  Shield, ArrowRight, Search, Wrench, FileText, CheckCircle2, ClipboardCheck, Compass, Repeat, Target,
  Info, Phone, Users, Building2, FileWarning, CalendarClock,
} from 'lucide-react';

const PATH = '/cmmc/services';

export const metadata: Metadata = pageMeta({
  path: PATH,
  title: 'CMMC Level 1 & 2 Consulting Services | SDVOSB RPO, MD-DC-VA',
  description: 'CMMC Level 1 and Level 2 consulting from an SDVOSB Cyber-AB RPO: gap assessments, SSP, POA&M, remediation and assessment prep in MD, DC and VA. Free call.',
});

/** Topic preselected in the booking form; also listed on /contact. */
const BOOKING_TOPIC = 'Free 30-minute CMMC readiness call';
const bookingReasons = [
  BOOKING_TOPIC,
  'CMMC readiness or gap assessment (Level 1 or Level 2)',
  'SSP and POA&M writing',
  'Remediation support',
  'Mock assessment preparation',
  'Ongoing CMMC compliance support',
];

type Package = {
  icon: typeof Search;
  title: string;
  summary: string;
  deliverables: string[];
  bestFor: string;
};

const packages: Package[] = [
  {
    icon: Compass,
    title: 'Readiness Assessment',
    summary: 'A short, scoped first look: which CMMC level your contracts point to, where your FCI or CUI lives, and the handful of gaps that matter most.',
    deliverables: [
      'Review of your contract clauses (FAR 52.204-21, DFARS 252.204-7012, -7019, -7020, -7021)',
      'Likely CMMC level and assessment type for each contract',
      'First draft of your assessment scope and asset categories',
      'Top-ten gap list and a recommended next step',
    ],
    bestFor: 'Companies that just saw CMMC language in a solicitation or a prime’s flow-down.',
  },
  {
    icon: Search,
    title: 'Gap Assessment',
    summary: 'A practice-by-practice review against the 17 Level 1 practices or the 110 NIST SP 800-171 Rev 2 requirements, with evidence checked, not just interviews.',
    deliverables: [
      'Written gap report by domain and practice',
      'Estimated SPRS score using the DoD Assessment Methodology',
      'Which open items could sit on a POA&M and which cannot (32 CFR 170.21)',
      'Risk-ranked remediation roadmap with owners and effort',
    ],
    bestFor: 'Companies that need a defensible baseline before spending on tools.',
  },
  {
    icon: FileText,
    title: 'SSP & POA&M',
    summary: 'We write the System Security Plan that describes how each requirement is actually met in your environment, and a POA&M that is honest about what is not done yet.',
    deliverables: [
      'System Security Plan tied to your real systems and boundary',
      'Plan of Action & Milestones with dates and responsible people',
      'Supporting policies and procedures (access, incident response, media, configuration)',
      'Network and CUI data-flow diagrams for the assessment scope',
    ],
    bestFor: 'Companies that have controls in place but lack the written evidence.',
  },
  {
    icon: Wrench,
    title: 'Remediation Support',
    summary: 'Hands-on help closing gaps with your IT team or managed service provider: configuration, MFA, logging, encryption, account reviews and the evidence trail for each.',
    deliverables: [
      'Fix list worked in priority order, tracked against the POA&M',
      'Configuration guidance for identity, endpoints, logging and backups',
      'External service provider and cloud review (FedRAMP Moderate or equivalent under DFARS 252.204-7012)',
      'Evidence captured as each practice is closed',
    ],
    bestFor: 'Companies with a gap report and a deadline, but not enough hands.',
  },
  {
    icon: Target,
    title: 'Mock Assessment Prep',
    summary: 'A rehearsal run the way an assessor works: examine, interview and test, objective by objective, using NIST SP 800-171A. You see the weak spots before the real assessment does.',
    deliverables: [
      'Objective-level walkthrough of every in-scope requirement',
      'Interview practice for the people an assessor will talk to',
      'Evidence binder index mapped to assessment objectives',
      'Findings list and a final fix window before your assessment date',
    ],
    bestFor: 'Companies with a self-assessment or a C3PAO assessment on the calendar.',
  },
  {
    icon: Repeat,
    title: 'Ongoing Compliance',
    summary: 'CMMC is not one-and-done. We keep the SSP, POA&M and SPRS entry current and prepare your senior official for the annual affirmation.',
    deliverables: [
      'Quarterly control and evidence check-ins',
      'SSP and POA&M updates when your systems change',
      'Annual affirmation preparation for your Affirming Official (32 CFR 170.22)',
      'Registered Practitioner advice on call for CMMC questions',
    ],
    bestFor: 'Companies that want CMMC kept current without hiring a full-time specialist.',
  },
];

const audiences = [
  { icon: Building2, title: 'Small DoD subcontractors', desc: 'Firms that handle Controlled Unclassified Information (CUI) under DFARS 252.204-7012 and need Level 2.' },
  { icon: Users, title: 'Companies with a prime asking', desc: 'Your prime wants your SPRS score, an SSP, or a CMMC status before it adds you to a team.' },
  { icon: FileWarning, title: 'FCI-only contractors', desc: 'Firms with Federal Contract Information only, who need a clean annual Level 1 self-assessment.' },
  { icon: CalendarClock, title: 'Companies with a date', desc: 'You have chosen a C3PAO or a self-assessment date and want to arrive prepared.' },
];

const steps = [
  { n: '01', title: 'Free 30-minute readiness call', desc: 'We go through your contracts, what data you hold and what you already have in place. No obligation.' },
  { n: '02', title: 'Scope and proposal', desc: 'We agree the assessment scope and pick the packages you need. You get a fixed written scope before work starts.' },
  { n: '03', title: 'Assess', desc: 'Readiness or gap assessment, with your estimated SPRS score and a ranked fix list.' },
  { n: '04', title: 'Fix and document', desc: 'Remediation support, SSP and POA&M, evidence collected as each practice closes.' },
  { n: '05', title: 'Rehearse', desc: 'Mock assessment against the assessment objectives, then a final fix window.' },
  { n: '06', title: 'Assessment and after', desc: 'You self-assess and affirm in SPRS, or an authorized C3PAO assesses you. We stay on for POA&M closeout and annual affirmations.' },
];

const c3paoPhases = [
  { title: 'Plan and prepare', desc: 'You choose an authorized C3PAO from the Cyber AB Marketplace. It confirms your scope, asks for your SSP and evidence list, and may hold a readiness review before the assessment is scheduled.', prep: 'We hand you a clean scope statement, a current SSP, asset inventory and an evidence index, so this step is short.' },
  { title: 'Conduct the assessment', desc: 'The C3PAO assessment team examines documents, interviews your staff and tests systems against each assessment objective in NIST SP 800-171A. Each requirement is scored MET, NOT MET or not applicable.', prep: 'The mock assessment rehearses exactly this: the same objectives, the same three methods, the same people.' },
  { title: 'Report results', desc: 'The C3PAO enters the results in the DoD’s CMMC eMASS system. You receive a Final status, or a Conditional status if only limited items remain open on a POA&M under 32 CFR 170.21.', prep: 'The gap assessment tells you early which items may sit on a POA&M and which must be fixed before the assessment.' },
  { title: 'Close out and maintain', desc: 'Any POA&M items must be closed and verified within 180 days of a Conditional status. A Final status lasts three years, with an affirmation by your senior official every year.', prep: 'Ongoing Compliance keeps the evidence, POA&M and affirmation on schedule.' },
];

const faqs = [
  {
    q: 'What does CMMC Level 1 consulting include?',
    a: 'Scoping where your Federal Contract Information (FCI) lives, a gap assessment against the 17 Level 1 practices with an estimated SPRS score, help closing each gap, and preparation for your annual Level 1 self-assessment and SPRS affirmation. Level 2 work covers the 110 NIST SP 800-171 Rev 2 requirements and adds a System Security Plan (SSP) and POA&M.',
  },
  {
    q: 'Where does Galaxy Consulting work?',
    a: 'Galaxy Consulting is veteran-owned and based in Fort Washington, Maryland. It works on site across Maryland, DC and Northern Virginia and remotely for contractors anywhere in the United States.',
  },
  {
    q: 'Can Galaxy Consulting issue our CMMC certification?',
    a: 'No. Galaxy is a Cyber AB Registered Provider Organization (RPO). RPOs advise and prepare; they do not assess or certify. A CMMC certification assessment is performed only by an authorized C3PAO, and the C3PAO that assesses you cannot be the firm that consulted for you.',
  },
  {
    q: 'Do we need a C3PAO assessment right now?',
    a: 'Check your contract. The Department of War suspended the CMMC Phase 2 requirements on July 13, 2026, so new solicitations may not require a C3PAO assessment during the suspension. Self-assessments, annual affirmations and DFARS 252.204-7012 still apply, and a voluntary C3PAO assessment remains available.',
  },
  {
    q: 'What happens on the free 30-minute readiness call?',
    a: 'A Registered Practitioner reviews your contract clauses, what kind of data you handle and what you already have in place, then tells you your likely CMMC level and the first things to fix. There is no obligation and no sales deck.',
  },
  {
    q: 'How long does a gap assessment take?',
    a: 'For most small contractors, a NIST SP 800-171 gap assessment takes about two to three weeks from kickoff to written report. Remediation time depends on what the assessment finds.',
  },
];

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'CMMC readiness services',
  serviceType: 'CMMC readiness and assessment preparation',
  url: `${SITE_URL}${PATH}`,
  provider: { '@type': 'Organization', name: 'Galaxy Consulting, LLC', url: SITE_URL },
  areaServed: ['Maryland', 'District of Columbia', 'Virginia', 'United States'],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'CMMC service packages',
    itemListElement: packages.map((p) => ({ '@type': 'Offer', itemOffered: { '@type': 'Service', name: p.title, description: p.summary } })),
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
};

const font = { inter: { fontFamily: 'var(--font-inter)' }, barlow: { fontFamily: 'var(--font-barlow)' } };

function Disclosure({ className = '' }: { className?: string }) {
  return (
    <div className={`flex items-start gap-3 rounded-xl border border-amber-500/40 bg-amber-500/5 px-5 py-4 text-sm text-silver/90 ${className}`} style={font.inter} role="note">
      <Info size={18} className="text-amber-400 flex-shrink-0 mt-0.5" aria-hidden />
      <p>
        <strong className="text-white">As a Cyber-AB RPO we prepare you; certification assessments are performed by an authorized C3PAO.</strong>{' '}
        Galaxy Consulting advises and prepares. We do not conduct CMMC certification assessments and we do not issue CMMC status.{' '}
        <Link href="/cmmc/c3pao-vs-rpo" className="text-emerald-400 hover:text-emerald-300 underline underline-offset-2">C3PAO vs RPO explained</Link>.
      </p>
    </div>
  );
}

export default function CMMCServicesPage() {
  return (
    <>
      <BreadcrumbSchema path={PATH} />
      {[serviceSchema, faqSchema].map((s, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(s).replace(/</g, '\\u003c') }} />
      ))}

      {/* ── HEADER ── */}
      <section className="bg-galaxy py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 mb-4 text-xs" style={font.inter}>
            <Link href="/" className="text-silver/50 hover:text-silver transition-colors">Home</Link>
            <span className="text-silver/30">/</span>
            <Link href="/cmmc" className="text-silver/50 hover:text-silver transition-colors">CMMC</Link>
            <span className="text-silver/30">/</span>
            <span className="text-emerald-400 font-medium" aria-current="page">Services</span>
          </nav>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-emerald-500/40 bg-emerald-500/10 text-emerald-400 text-xs font-semibold tracking-widest uppercase mb-4" style={font.inter}>
            <Shield size={11} /> CMMC Services · Cyber-AB RPO · SDVOSB
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-5 max-w-4xl" style={font.barlow}>
            CMMC Level 1 and Level 2 consulting services for defense contractors
          </h1>
          <p className="text-silver/80 text-lg max-w-3xl mb-4" style={font.inter}>
            {"CMMC Level 1 consulting covers scoping where your Federal Contract Information (FCI) lives, a gap assessment against the 17 Level 1 practices, help closing each gap, and preparation for your annual self-assessment and SPRS affirmation. Level 2 work covers the 110 NIST SP 800-171 Rev 2 requirements and adds a System Security Plan (SSP) and POA&M."}
          </p>
          <p className="text-silver/80 text-lg max-w-3xl mb-8" style={font.inter}>
            Six packages, from a first readiness check to ongoing compliance. A Cyber-AB Registered Practitioner leads every engagement.
            Veteran-owned, based in Fort Washington, Maryland; on site across Maryland, DC and Northern Virginia, remote nationwide.
          </p>
          <div className="flex flex-wrap gap-4 mb-8">
            <a href="#book" className="inline-flex items-center gap-2 px-7 py-3.5 bg-emerald-500 hover:bg-emerald-400 text-navy font-bold rounded-lg transition-all hover:-translate-y-0.5 shadow-lg shadow-emerald-500/25" style={font.inter}>
              Book a free 30-minute readiness call <ArrowRight size={17} />
            </a>
            <a href="#packages" className="inline-flex items-center gap-2 px-7 py-3.5 border border-silver/20 text-silver hover:text-white hover:border-blue-accent/50 rounded-lg transition-all" style={font.inter}>
              See the packages
            </a>
          </div>
          <Disclosure className="max-w-3xl" />
        </div>
      </section>

      {/* ── WHO IT'S FOR ── */}
      <section className="py-20 bg-section-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-10 section-heading" style={font.barlow}>Who it is for</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {audiences.map((a) => (
              <div key={a.title} className="card-surface rounded-xl border border-blue-accent/20 p-6">
                <a.icon size={22} className="text-emerald-400 mb-3" aria-hidden />
                <h3 className="text-white font-semibold mb-2" style={font.barlow}>{a.title}</h3>
                <p className="text-sm text-silver/70" style={font.inter}>{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PACKAGES ── */}
      <section id="packages" className="py-20 bg-section-alt scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-3 section-heading" style={font.barlow}>Service packages</h2>
          <p className="text-silver/70 text-sm mb-10 max-w-2xl" style={font.inter}>
            Take one package or several. Every engagement starts with the free call and a written scope.
          </p>
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
            {packages.map((p, i) => (
              <div key={p.title} className="rounded-2xl border border-emerald-500/30 bg-emerald-500/5 p-7 flex flex-col">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 rounded-xl bg-emerald-500/10"><p.icon size={22} className="text-emerald-400" aria-hidden /></div>
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-wider text-emerald-400" style={font.inter}>Package {String(i + 1).padStart(2, '0')}</div>
                    <h3 className="text-xl font-bold text-white" style={font.barlow}>{p.title}</h3>
                  </div>
                </div>
                <p className="text-sm text-silver/80 leading-relaxed mb-5" style={font.inter}>{p.summary}</p>
                <h4 className="text-white font-semibold text-sm mb-3 flex items-center gap-2" style={font.barlow}>
                  <ClipboardCheck size={15} className="text-emerald-400" aria-hidden /> What you receive
                </h4>
                <ul className="space-y-2.5 mb-5">
                  {p.deliverables.map((d) => (
                    <li key={d} className="flex items-start gap-2.5">
                      <CheckCircle2 size={14} className="text-emerald-400 flex-shrink-0 mt-0.5" aria-hidden />
                      <span className="text-sm text-silver/80" style={font.inter}>{d}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-auto text-xs px-3 py-2 rounded-lg border border-emerald-500/30 bg-emerald-500/10" style={font.inter}>
                  <span className="text-silver/50">Best for: </span><span className="text-silver">{p.bestFor}</span>
                </p>
              </div>
            ))}
          </div>
          <p className="text-xs text-silver/50 mt-6" style={font.inter}>
            Typical market prices for this work are on our <Link href="/cmmc/level-2-assessment-cost" className="underline hover:text-silver">Level 2 cost page</Link>. Your quote follows the free call and depends on scope.
          </p>
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section className="py-20 bg-section-b">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-10 section-heading" style={font.barlow}>How an engagement runs</h2>
          <ol className="grid sm:grid-cols-2 gap-5">
            {steps.map((s) => (
              <li key={s.n} className="card-surface rounded-xl p-6 border border-blue-accent/20 flex items-start gap-5">
                <div className="w-10 h-10 rounded-full bg-blue-accent/10 border border-blue-accent/30 flex items-center justify-center flex-shrink-0">
                  <span className="text-blue-bright font-bold text-xs" style={font.barlow}>{s.n}</span>
                </div>
                <div>
                  <h3 className="text-white font-semibold text-base mb-1" style={font.barlow}>{s.title}</h3>
                  <p className="text-sm text-silver/60 leading-relaxed" style={font.inter}>{s.desc}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ── THE C3PAO ASSESSMENT ── */}
      <section className="py-20 bg-section-alt">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-4 section-heading" style={font.barlow}>What happens at the C3PAO assessment, and how we prepare you</h2>
          <p className="text-sm text-silver/70 mb-4 max-w-3xl" style={font.inter}>
            A certification assessment is run by an authorized CMMC Third-Party Assessment Organization (C3PAO), never by your consultant.
            The C3PAO requirement is suspended for new solicitations while the Department of War reviews CMMC Phase 2, but contractors may still choose a voluntary C3PAO assessment, and many primes ask for one.
            {' '}<Link href="/insights/cmmc-phase-2-suspension" className="text-emerald-400 hover:text-emerald-300 underline underline-offset-2">What the Phase 2 suspension means</Link>.
          </p>
          <p className="text-sm text-silver/70 mb-10 max-w-3xl" style={font.inter}>
            The assessment follows the CMMC Assessment Process in four phases, set by 32 CFR Part 170:
          </p>
          <div className="space-y-5">
            {c3paoPhases.map((p, i) => (
              <div key={p.title} className="grid md:grid-cols-2 gap-5 rounded-2xl border border-blue-accent/20 bg-card-surface p-6">
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-blue-bright mb-1" style={font.inter}>Phase {i + 1}</div>
                  <h3 className="text-white font-semibold text-lg mb-2" style={font.barlow}>{p.title}</h3>
                  <p className="text-sm text-silver/70 leading-relaxed" style={font.inter}>{p.desc}</p>
                </div>
                <div className="rounded-xl border border-emerald-500/30 bg-emerald-500/5 p-4">
                  <div className="text-xs font-semibold uppercase tracking-wider text-emerald-400 mb-1" style={font.inter}>How Galaxy prepares you</div>
                  <p className="text-sm text-silver/80 leading-relaxed" style={font.inter}>{p.prep}</p>
                </div>
              </div>
            ))}
          </div>
          <Disclosure className="mt-10" />
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-20 bg-section-b">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-8 section-heading" style={font.barlow}>Frequently asked questions</h2>
          <div className="space-y-4">
            {faqs.map((f) => (
              <details key={f.q} className="group rounded-xl border border-blue-accent/20 bg-card-surface p-5">
                <summary className="cursor-pointer list-none font-semibold text-white flex justify-between gap-4" style={font.inter}>
                  {f.q}<span className="text-emerald-400 group-open:rotate-45 transition-transform" aria-hidden>+</span>
                </summary>
                <p className="mt-3 text-sm text-silver/80" style={font.inter}>{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── BOOKING ── */}
      <section id="book" className="bg-galaxy py-20 scroll-mt-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-5" style={font.barlow}>Book a free 30-minute readiness call</h2>
            <p className="text-silver/80 mb-6" style={font.inter}>
              Tell us a little about your contracts and we will reply within one business day to set a time. On the call a Registered Practitioner covers:
            </p>
            <ul className="space-y-3 mb-8">
              {['The CMMC and DFARS clauses in your contracts or solicitations', 'Whether you hold FCI, CUI or both, and your likely level', 'What you already have in place, and the first three things to fix', 'Which packages, if any, you actually need'].map((t) => (
                <li key={t} className="flex items-start gap-2.5">
                  <CheckCircle2 size={16} className="text-emerald-400 flex-shrink-0 mt-0.5" aria-hidden />
                  <span className="text-sm text-silver/80" style={font.inter}>{t}</span>
                </li>
              ))}
            </ul>
            <p className="text-sm text-silver/70 flex items-center gap-2" style={font.inter}>
              <Phone size={15} className="text-emerald-400" aria-hidden /> Prefer the phone?{' '}
              <a href="tel:2403247888" className="text-white font-semibold hover:text-emerald-300">240-324-7888</a>
              <span className="text-silver/50">(Mon–Fri, 8 AM–6 PM ET)</span>
            </p>
            <Disclosure className="mt-8" />
          </div>
          <ContactForm
            reasons={bookingReasons}
            defaultTopic={BOOKING_TOPIC}
            heading="Request your readiness call"
            submitLabel="Request my free call"
            messagePlaceholder="Which contract or prime is asking about CMMC? Any dates we should know?"
          />
        </div>
      </section>
    </>
  );
}
