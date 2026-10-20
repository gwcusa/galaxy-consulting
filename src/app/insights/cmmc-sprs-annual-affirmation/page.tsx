import type { Metadata } from 'next';
import Link from 'next/link';
import type { ReactNode } from 'react';
import { Calendar, Newspaper } from 'lucide-react';

const PATH = '/insights/cmmc-sprs-annual-affirmation';
const PAGE_URL = `https://www.galaxyconsultingllc.com${PATH}`;
const TITLE = 'The CMMC Annual Affirmation in SPRS: Who Signs and When';
const HEADLINE = 'The CMMC Annual Affirmation in SPRS: Who Signs and When';
const DESCRIPTION =
  'Who affirms your CMMC self-assessment in SPRS and how often: Level 1 every year; Level 2 (Self) assesses every 3 years and affirms every year.';
const PUBLISHED = '2026-10-19';
const MODIFIED = '2026-10-19';
const UPDATED_LABEL = 'October 19, 2026';

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

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  url: PAGE_URL,
  mainEntity: [
    { '@type': 'Question', name: 'How often does a Level 1 contractor affirm in SPRS?', acceptedAnswer: { '@type': 'Answer', text: 'Every year. Level 1 (Self) contractors self-assess each year, post the results in SPRS, and a senior company official affirms them.' } },
    { '@type': 'Question', name: 'How often does Level 2 (Self) assess and affirm?', acceptedAnswer: { '@type': 'Answer', text: 'Two schedules apply: the full self-assessment every three years, and the affirmation every year, as set out in 32 CFR 170.16.' } },
    { '@type': 'Question', name: 'Who signs the affirmation?', acceptedAnswer: { '@type': 'Answer', text: 'A senior official of your own company. Advisers can prepare you, but the affirmation is made by your own official, so choose that person early and keep the name in SPRS current.' } },
    { '@type': 'Question', name: 'Do we still affirm during the Phase 2 suspension?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Affirmations are still part of how the DoW checks compliance, and yours comes due on your SPRS anniversary as usual.' } },
    { '@type': 'Question', name: 'What if our systems changed since the last affirmation?', acceptedAnswer: { '@type': 'Answer', text: 'Review your compliance status and update your SSP before you affirm. New systems, new contracts and staff changes are all worth checking, because the score you affirm should match how your company works today.' } },
  ],
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

function H3({ children }: { children: ReactNode }) {
  return (
    <h3 className="text-xl font-bold text-white !mt-10" style={{ fontFamily: 'var(--font-barlow)' }}>
      {children}
    </h3>
  );
}

export default function CmmcSprsAnnualAffirmationPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema).replace(/</g, '\\u003c') }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema).replace(/</g, '\\u003c') }}
      />

      {/* ── HEADER ── */}
      <section className="bg-galaxy py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 mb-4">
            <Link href="/insights" className="text-xs text-silver/50 hover:text-silver transition-colors" style={{ fontFamily: 'var(--font-inter)' }}>Insights</Link>
            <span className="text-silver/30 text-xs">/</span>
            <span className="text-xs text-emerald-400 font-medium" style={{ fontFamily: 'var(--font-inter)' }}>The CMMC Annual Affirmation in SPRS</span>
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
          <p>The CMMC annual affirmation is a yearly confirmation, made by a senior official of your own company and submitted to SPRS, that your company still meets its CMMC requirements. Level 1 (Self) contractors self-assess and affirm every year; Level 2 (Self) contractors self-assess every three years and affirm every year. An adviser can prepare you, but the affirmation itself is yours to make.</p>
          <H2>How often: Level 1 vs Level 2 (Self)</H2>
          <p>{"SPRS, the Supplier Performance Risk System, is the DoD database where contractors submit their CMMC self-assessment scores. Galaxy's resources page has the official link under "}<In href="/cmmc/resources">SPRS (Supplier Performance Risk System)</In>. How often you affirm there depends on your level:</p>
          <ul className="space-y-4 list-disc pl-5 marker:text-emerald-400">
            <li><strong className="text-white">Level 1 (Self):</strong>{" contractors that hold Federal Contract Information (FCI) self-assess every year and post the results in SPRS, under 32 CFR 170.15. A senior company official affirms the results, and the affirmation is submitted to SPRS."}</li>
            <li><strong className="text-white">Level 2 (Self):</strong>{" under 32 CFR 170.16, a self-assessment every three years and an affirmation every year. You assess all 110 practices, enter the score in SPRS, and a senior official affirms compliance each year."}</li>
          </ul>
          <p>{"Either way, the annual affirmation comes due on its usual date, your SPRS anniversary. For more on each level, read Galaxy's pages on the "}<In href="/cmmc/level-1">CMMC Level 1 self-assessment process</In>{" and on "}<In href="/cmmc/level-2">CMMC Level 2</In>.</p>
          <H2>Who signs: your senior company official</H2>
          <p>The affirmation comes from inside your company. For Level 1, a senior company official affirms the results. For Level 2 (Self), a senior official affirms compliance every year. An outside adviser can prepare you for the self-assessment, the SPRS submission and the affirmation, but the affirmation itself is made by your own senior official.</p>
          <p>{"Choose that person ahead of time and keep the name in SPRS up to date. If last year's signer has left or changed roles, sort that out well before the due date. Give the official time to review the evidence behind the score, not just the final number."}</p>
          <H2>Before you affirm: what to check</H2>
          <p>Your SPRS score is visible to DoD contracting officers and can influence contract award decisions. Submitting a score you cannot support with documentation is a federal compliance risk. Before your official affirms, check:</p>
          <ul className="space-y-4 list-disc pl-5 marker:text-emerald-400">
            <li><strong className="text-white">Score:</strong>{" does it still match your latest self-assessment, and can you back it up with documentation?"}</li>
            <li><strong className="text-white">Dates:</strong>{" are the dates in your SPRS entry current?"}</li>
            <li><strong className="text-white">Affirming official:</strong>{" is the right person named?"}</li>
            <li><strong className="text-white">System Security Plan (SSP):</strong>{" is it current? If your environment changed in a big way, review your compliance status and update the SSP."}</li>
            <li><strong className="text-white">{"Plan of Action and Milestones (POA&M):"}</strong>{" if you keep one, does it show which gaps are still open and how you plan to close them?"}</li>
          </ul>
          <p>{"Start this check well before your SPRS anniversary, so there is time to fix anything you find. Galaxy's Phase 2 explainer gives the same advice in short form: "}<In href="/insights/cmmc-phase-2-suspension">keep your SPRS entry current</In>.</p>
          <H2>What the suspension changed, and what it did not</H2>
          <p>{"On July 13, 2026, CMMC's move to Phase 2 was suspended by the Department of War (DoW, formerly DoD). Since then, Level 1 (Self) and Level 2 (Self) are the only levels a new requirement may call for."}</p>
          <p>What did not change is the yearly routine. During the suspension, the DoW still checks compliance through self-assessments and affirmations, and your annual affirmation still comes due on its usual date. For both Level 1 (Self) and Level 2 (Self), the yearly cycle carries on as before.</p>
          <H2>How Galaxy can help</H2>
          <p>{"Galaxy prepares Level 1 and Level 2 clients for the self-assessment, the SPRS submission and the annual affirmation. Its RP Staffing service includes a Level 1 SPRS submission walkthrough, plus Level 2 evidence packaging and affirmation preparation. The affirmation itself is still made by your own senior official. If you want a second set of eyes on your score, dates and documents before your official signs, that preparation is what Galaxy offers. The CMMC services page describes the Level 2 "}<In href="/cmmc/services">self-assessment and SPRS affirmation</In>{" step."}</p>
          <H2>Frequently asked questions</H2>
          <H3>How often does a Level 1 contractor affirm in SPRS?</H3>
          <p>Every year. Level 1 (Self) contractors self-assess each year, post the results in SPRS, and a senior company official affirms them.</p>
          <H3>How often does Level 2 (Self) assess and affirm?</H3>
          <p>Two schedules apply: the full self-assessment every three years, and the affirmation every year, as set out in 32 CFR 170.16.</p>
          <H3>Who signs the affirmation?</H3>
          <p>A senior official of your own company. Advisers can prepare you, but the affirmation is made by your own official, so choose that person early and keep the name in SPRS current.</p>
          <H3>Do we still affirm during the Phase 2 suspension?</H3>
          <p>Yes. Affirmations are still part of how the DoW checks compliance, and yours comes due on your SPRS anniversary as usual.</p>
          <H3>What if our systems changed since the last affirmation?</H3>
          <p>Review your compliance status and update your SSP before you affirm. New systems, new contracts and staff changes are all worth checking, because the score you affirm should match how your company works today.</p>
          <H2>Get ready for your next affirmation</H2>
          <p>{"Galaxy offers a free initial consultation. To set one up before your next self-assessment or affirmation, "}<In href="/contact">contact Galaxy Consulting</In>.</p>
        </article>
      </section>
    </>
  );
}
