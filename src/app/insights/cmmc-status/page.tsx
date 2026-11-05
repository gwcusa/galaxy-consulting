import type { Metadata } from 'next';
import Link from 'next/link';
import type { ReactNode } from 'react';
import { Calendar, Newspaper } from 'lucide-react';

const PATH = '/insights/cmmc-status';
const PAGE_URL = `https://www.galaxyconsultingllc.com${PATH}`;
const TITLE = 'CMMC in November 2026: Where Phase 2 Stands and What Primes Are Asking For';
const HEADLINE = 'CMMC in November 2026: Where Phase 2 Stands and What Primes Are Asking For';
const DESCRIPTION =
  'CMMC Phase 2 is still suspended in November 2026, with no restart date. What still applies under Phase 1 and what a prime can check.';
const PUBLISHED = '2026-11-05';
const MODIFIED = '2026-11-05';
const UPDATED_LABEL = 'November 5, 2026';

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: PATH },
  openGraph: {
    type: 'article',
    url: PAGE_URL,
    title: TITLE,
    description: DESCRIPTION,
    publishedTime: PUBLISHED,
    modifiedTime: MODIFIED,
    authors: ['Galaxy Consulting, LLC'],
  },
};

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: HEADLINE,
  description: DESCRIPTION,
  datePublished: PUBLISHED,
  dateModified: MODIFIED,
  author: { '@type': 'Organization', name: 'Galaxy Consulting, LLC', url: 'https://www.galaxyconsultingllc.com' },
  publisher: { '@type': 'Organization', name: 'Galaxy Consulting, LLC', url: 'https://www.galaxyconsultingllc.com' },
  mainEntityOfPage: { '@type': 'WebPage', '@id': PAGE_URL },
  url: PAGE_URL,
};

function In({ href, children }: { href: string; children: ReactNode }) {
  return (
    <Link href={href} className="text-emerald-400 hover:text-emerald-300 underline underline-offset-2 decoration-emerald-500/40">
      {children}
    </Link>
  );
}

function H2({ children }: { children: ReactNode }) {
  return (
    <h2 className="text-2xl sm:text-3xl font-bold text-white section-heading !mt-14 mb-6" style={{ fontFamily: 'var(--font-barlow)' }}>
      {children}
    </h2>
  );
}

export default function CmmcStatusPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema).replace(/</g, '\\u003c') }}
      />

      {/* ── HEADER ── */}
      <section className="bg-galaxy py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 mb-4">
            <Link href="/insights" className="text-xs text-silver/50 hover:text-silver transition-colors" style={{ fontFamily: 'var(--font-inter)' }}>Insights</Link>
            <span className="text-silver/30 text-xs">/</span>
            <span className="text-xs text-emerald-400 font-medium" style={{ fontFamily: 'var(--font-inter)' }}>CMMC in November 2026</span>
          </div>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-emerald-500/40 bg-emerald-500/10 text-emerald-400 text-xs font-semibold tracking-widest uppercase mb-4" style={{ fontFamily: 'var(--font-inter)' }}>
            <Newspaper size={11} /> Insights
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-5" style={{ fontFamily: 'var(--font-barlow)' }}>
            {HEADLINE}
          </h1>
          <p className="inline-flex items-center gap-2 text-sm text-silver/70" style={{ fontFamily: 'var(--font-inter)' }}>
            <Calendar size={14} className="text-emerald-400" />
            <strong className="text-white">Updated: <time dateTime={MODIFIED}>{UPDATED_LABEL}</time></strong>
          </p>
        </div>
      </section>

      {/* ── ARTICLE ── */}
      <section className="py-16 bg-section-alt">
        <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-base text-silver/80 leading-relaxed space-y-5" style={{ fontFamily: 'var(--font-inter)' }}>
          <p><strong className="text-white">Short answer:</strong>{" as of early November 2026, CMMC Phase 2 is still suspended and no restart date has been announced. Phase 1 still applies in full: Level 1 and Level 2 self-assessments, SPRS scores, annual affirmations, DFARS 252.204-7012 and NIST SP 800-171 Rev 2. If a prime asks about your cybersecurity this month, those are the things it can check."}</p>
          <H2>Where Phase 2 stands</H2>
          <p>{"On July 13, 2026, the Department of War (DoW, formerly DoD) suspended the move to CMMC Phase 2. Under the suspension, new requirements may only call for Level 1 (Self) or Level 2 (Self). We covered the details in "}<In href="/insights/cmmc-phase-2-suspension">what the Phase 2 suspension means</In>.</p>
          <p>Three things have happened since then:</p>
          <ul className="space-y-4 list-disc pl-5 marker:text-emerald-400">
            <li><strong className="text-white">September 3, 2026: a binding class deviation.</strong>{" The DoW issued a class deviation that tells contracting officers how to carry the suspension into solicitations and contracts. It is binding on them, so the suspension now sits in the acquisition process itself."}</li>
            <li><strong className="text-white">The 60-day review.</strong>{" The CMMC Reform Task Force set up on July 13 ran a 60-day review of the program. As of early November 2026, its report has not been made public, and no date has been announced for Phase 2 to restart."}</li>
            <li><strong className="text-white">September 9, 2026: what industry told the DoW.</strong>{" Speaking at the Billington Cybersecurity Summit, DoW CIO Kirsten Davies said the department received more than 1,100 comments on its request for information about CMMC, and that more than half of them supported the suspension."}</li>
          </ul>
          <p>Nothing official says when Phase 2 will return, or in what form. Plan around the rules that apply today.</p>
          <H2>What still applies under Phase 1</H2>
          <ul className="space-y-4 list-disc pl-5 marker:text-emerald-400">
            <li><strong className="text-white">Level 1 (Self):</strong>{" a self-assessment every year, with the results posted in SPRS. See "}<In href="/cmmc/level-1">CMMC Level 1</In>.</li>
            <li><strong className="text-white">Level 2 (Self):</strong>{" a self-assessment against NIST SP 800-171 Rev 2 every three years, with your score in SPRS. See "}<In href="/cmmc/level-2">CMMC Level 2</In>.</li>
            <li><strong className="text-white">Annual affirmations:</strong>{" an affirming official confirms compliance in SPRS every year. Our guide to "}<In href="/insights/cmmc-sprs-annual-affirmation">the SPRS annual affirmation</In>{" explains who signs and when."}</li>
            <li><strong className="text-white">DFARS 252.204-7012:</strong>{" still in effect, and it still points to NIST SP 800-171 Rev 2. The DoW may also carry out select government-led assessments."}</li>
          </ul>
          <H2>What primes are asking for</H2>
          <p>Primes flow down the rules that apply, and today those are the Phase 1 rules. We are not quoting any prime here; these are the questions Phase 1 lets a prime ask:</p>
          <ul className="space-y-4 list-disc pl-5 marker:text-emerald-400">
            <li>Is your SPRS score posted, and is it current?</li>
            <li>Does your work need Level 1 (Self) or Level 2 (Self)?</li>
            <li>Who is your affirming official, and when is your next annual affirmation due?</li>
            <li>{"Are your System Security Plan and POA&M for NIST SP 800-171 Rev 2 accurate and up to date?"}</li>
          </ul>
          <p>Ask your primes the same question in return: what will they flow down to subcontractors while the review continues? Get the answer in writing.</p>
          <H2>What to do this month</H2>
          <ol className="space-y-4 list-decimal pl-5 marker:text-emerald-400 marker:font-semibold">
            <li>Check your SPRS entry: score, dates and affirming official.</li>
            <li>Keep your NIST SP 800-171 Rev 2 work moving. Government-led assessments can still happen.</li>
            <li>Read every new solicitation and contract modification for CMMC language.</li>
            <li>Ask your primes, in writing, what they will flow down.</li>
            <li>Watch for the task force report and any new DoW guidance. We will update this note each month.</li>
          </ol>
          <H2>How Galaxy can help</H2>
          <p>{"Galaxy Consulting is a service-disabled veteran-owned small business and a Cyber-AB Registered Provider Organization (RPO) with a Registered Practitioner on our team. We advise and help you prepare: gap assessments against NIST SP 800-171 Rev 2, System Security Plan and POA&M documentation, and SPRS self-assessment support. We do not conduct official assessments."}</p>
          <p><strong className="text-white"><In href="/cmmc/services#book">Book a short discovery call</In></strong>{" to talk through where your SPRS score stands."}</p>
          <p><em>General information, not legal advice. Sources: DoW press release and DoW CIO memo of July 13, 2026; the DoW class deviation of September 3, 2026; DoW CIO Kirsten Davies at the Billington Cybersecurity Summit, September 9, 2026; the DoW CIO CMMC page, checked early November 2026.</em></p>
        </article>
      </section>
    </>
  );
}
