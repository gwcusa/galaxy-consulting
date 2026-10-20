import type { Metadata } from 'next';
import Link from 'next/link';
import type { ReactNode } from 'react';
import { Calendar, Newspaper } from 'lucide-react';

const PATH = '/insights/cmmc-level-2-self-assessment-guide';
const PAGE_URL = `https://www.galaxyconsultingllc.com${PATH}`;
const TITLE = 'CMMC Level 2 Assessment Help: A Self-Assessment Guide';
const HEADLINE = 'CMMC Level 2 Assessment Help: A Self-Assessment Guide';
const DESCRIPTION =
  'How to do a CMMC Level 2 self-assessment while Phase 2 is suspended: confirm scope, document the SSP and POA&M, enter your score in SPRS and affirm yearly.';
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

export default function CmmcLevel2SelfAssessmentGuidePage() {
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
            <span className="text-xs text-emerald-400 font-medium" style={{ fontFamily: 'var(--font-inter)' }}>CMMC Level 2 Assessment Help</span>
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
          <p>A CMMC Level 2 self-assessment is how your company checks itself against all 110 practices, enters its score in SPRS and has a senior official affirm compliance every year. While Phase 2 is suspended, Level 2 (Self) is the highest level a new requirement may call for, and the only form of Level 2 you can be asked for right now. Below are the four steps, how to keep the result current and where to find help.</p>
          <H2>Why Level 2 (Self) is what new contracts can require now</H2>
          <p>Phase 2 of CMMC is on hold. The Department of War (DoW, formerly DoD) suspended the move into it on July 13, 2026, and for now a new requirement can ask for Level 1 (Self) or Level 2 (Self), but nothing higher.</p>
          <p>The security rules underneath did not go away. DFARS 252.204-7012 and NIST SP 800-171 Rev 2 still apply, and the DoW may carry out select government-led assessments. Self-assessments and affirmations are still how the DoW checks compliance during the suspension.</p>
          <p>{"Preparation is not wasted, either. The work that gets a company ready for any assessment (scoping, an SSP and evidence) is the same work that backs a Level 2 self-assessment. For what changed and what to watch, see Galaxy's explainer, "}<In href="/insights/cmmc-phase-2-suspension">CMMC Phase 2 Is Suspended</In>.</p>
          <H2>Step 1: Confirm your clauses and where CUI lives</H2>
          <p>CMMC Level 2 applies to DoD contractors that handle Controlled Unclassified Information (CUI). CUI is information the U.S. Government creates or possesses that needs safeguarding or dissemination controls under law, regulation or government-wide policy, but is not classified.</p>
          <p>{"Start with your contracts. If a DoD contract includes a DFARS 252.204-7012 clause or references NIST SP 800-171 compliance, you almost certainly need CMMC Level 2. Look at every active contract and subcontract, not just the newest one. If you are not sure whether some information counts as CUI, ask the contracting officer or the prime contractor that sent it. The "}<In href="/cmmc/level-2">Who Needs CMMC Level 2?</In>{" section of Galaxy's Level 2 page goes into more detail."}</p>
          <p>Then map your scope. Where does CUI live in your company? Write down the systems that store or send it, the people who use those systems and the locations where that work happens. That boundary is what your self-assessment, your SSP and your evidence will describe.</p>
          <H2>Step 2: Run a readiness review of all 110 practices</H2>
          <p>Under Level 2 (Self), you assess all 110 practices. A readiness review is your first honest pass through every one of them, done before you settle on a score.</p>
          <p>For each practice, ask two questions:</p>
          <ul className="space-y-4 list-disc pl-5 marker:text-emerald-400">
            <li>Is it really in place on every system in scope?</li>
            <li>Can we show it, with documents, settings or records?</li>
          </ul>
          <p>{"Bring in the people who run your IT and the people who handle CUI day to day, because each group tends to spot different gaps. Note where the proof for each practice lives. You will need it later: a score you cannot back up with documentation is a federal compliance risk. The "}<In href="/cmmc/resources">CMMC resources and reference materials</In>{" page groups the Level 2 practices by domain and links to the official references, NIST SP 800-171 Rev 2 among them."}</p>
          <H2>{"Step 3: Write or update your SSP and POA&M"}</H2>
          <p>Two documents sit at the center of Level 2:</p>
          <ul className="space-y-4 list-disc pl-5 marker:text-emerald-400">
            <li><strong className="text-white">System Security Plan (SSP).</strong>{" The SSP is a mandatory artifact for CMMC Level 2. It documents your system boundaries, your operating environments, the people responsible for security and how each of the 110 practices is implemented."}</li>
            <li><strong className="text-white">{"Plan of Action and Milestones (POA&M)."}</strong>{" A POA&M records deficiencies that are not yet fully fixed and the corrective actions you plan, with the people responsible and target completion dates."}</li>
          </ul>
          <p>{"Write the SSP to describe what is in place today, not what you hope to have later. Where the readiness review found gaps, the POA&M is where you record them and your plan to close them. Keep the two documents consistent with each other and with your evidence. An SSP that matches reality is what lets you stand behind your score."}</p>
          <H2>Step 4: Enter your score in SPRS and affirm</H2>
          <p>Once the review and the documents are done, your score goes into SPRS, and a senior official affirms compliance. Under Level 2 (Self), that affirmation comes every year.</p>
          <p>{"This step belongs to your company. Your own senior official enters and affirms the score in SPRS. An adviser can help you prepare and package the evidence, but the affirmation is yours. Before anyone signs, compare the score with your SSP, your POA&M and your evidence one more time. If they disagree, fix that before the affirmation, not after."}</p>
          <H2>Keeping it current: assess every three years, affirm every year</H2>
          <p>Level 2 (Self) is not a one-time project. Under 32 CFR 170.16, it runs on two clocks: one for the full self-assessment, due every three years, and one for the affirmation, due every year.</p>
          <p>A few habits make that rhythm easier:</p>
          <ul className="space-y-4 list-disc pl-5 marker:text-emerald-400">
            <li>Put the next affirmation and the next full self-assessment on the calendar now.</li>
            <li>Update the SSP when your systems, contracts or staff change, so the next review starts from an accurate picture.</li>
            <li>{"Work through your POA&M and close items as the fixes land."}</li>
            <li>Before each yearly affirmation, check the score against your evidence again.</li>
          </ul>
          <H2>Where to get help</H2>
          <p>{"You can run a Level 2 (Self) assessment with your own staff. If you want outside help, Galaxy Consulting, a service-disabled veteran-owned small business (SDVOSB), helps contractors prepare for the Level 2 self-assessment and package the evidence, while your own senior official enters and affirms the score in SPRS. The CMMC services page describes that support under "}<In href="/cmmc/services">{"Self-Assessment & SPRS Affirmation"}</In>{", and the "}<In href="/cmmc/faq">CMMC FAQ</In>{" answers common Level 2 questions."}</p>
          <p>{"To talk through your contracts and scope, "}<In href="/contact">contact Galaxy Consulting</In>{" for a free initial consultation. It helps to have your contracts, a rough list of systems and any SSP or POA&M you already have on hand for that first conversation."}</p>
        </article>
      </section>
    </>
  );
}
