import type { Metadata } from 'next';
import Link from 'next/link';
import type { ReactNode } from 'react';
import { Calendar, Newspaper } from 'lucide-react';

const PATH = '/insights/nist-800-171-gap-assessment';
const PAGE_URL = `https://www.galaxyconsultingllc.com${PATH}`;
const TITLE = 'What Is a NIST 800-171 Gap Assessment? What You Get';
const HEADLINE = 'What Is a NIST 800-171 Gap Assessment? What You Get';
const DESCRIPTION =
  'What a NIST 800-171 gap assessment checks, the deliverables you should get from it, and how it sets up a CMMC Level 1 or Level 2 self-assessment.';
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

export default function Nist800171GapAssessmentPage() {
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
            <span className="text-xs text-emerald-400 font-medium" style={{ fontFamily: 'var(--font-inter)' }}>What Is a NIST 800-171 Gap Assessment? What…</span>
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
          <p>A NIST 800-171 gap assessment compares your current security with the practices your contracts call for, one practice at a time, and writes down every gap. For CMMC, it gives you a practice-by-practice picture of where you stand for Level 1 (17 practices) or Level 2 (110 practices). What you get at the end is a written report and a plan for what to fix first.</p>
          <H2>Why NIST SP 800-171 still matters during the suspension</H2>
          <p>NIST SP 800-171 Rev 2 is the security standard that underpins CMMC Level 2. A DoD contract that includes DFARS 252.204-7012, or that references NIST SP 800-171 compliance, almost certainly means you need CMMC Level 2.</p>
          <p>{"The Phase 2 suspension did not change that. Both DFARS 252.204-7012 and NIST SP 800-171 Rev 2 remain in effect, and government-led assessments can still happen. While the suspension lasts, a new requirement may call for Level 1 (Self) or Level 2 (Self) only. The standard is still there to meet, and a gap assessment is how you find out how close you are. For the background, read "}<In href="/insights/cmmc-phase-2-suspension">CMMC Phase 2 Is Suspended</In>.</p>
          <p>{"The "}<In href="/cmmc/resources">official CMMC links</In>{" on Galaxy's resources page point to the source documents, including NIST SP 800-171 Rev 2, FAR 52.204-21 and DFARS 252.204-7012."}</p>
          <H2>Scope first: level, boundary, and FCI or CUI</H2>
          <p>Before anyone reviews a single practice, settle the scope. That comes down to three decisions:</p>
          <ol className="space-y-4 list-decimal pl-5 marker:text-emerald-400 marker:font-semibold">
            <li><strong className="text-white">Which CMMC level applies to your contracts.</strong>{" Your contract language decides this, and a DFARS 252.204-7012 clause almost certainly points to Level 2."}</li>
            <li><strong className="text-white">Where your system boundary sits.</strong>{" Decide which systems, cloud services and people are inside the boundary you will assess."}</li>
            <li><strong className="text-white">Whether FCI or CUI is in scope.</strong>{" Federal Contract Information (FCI) and Controlled Unclassified Information (CUI) are different kinds of information, and knowing which one you handle shapes the rest of the work."}</li>
          </ol>
          <p>A clear scope keeps the review on the systems that matter and stops it from drifting.</p>
          <H2>What a gap assessment checks</H2>
          <p>The heart of the work is a review of all applicable practices against your environment:</p>
          <ul className="space-y-4 list-disc pl-5 marker:text-emerald-400">
            <li><strong className="text-white">Level 1:</strong>{" the "}<In href="/cmmc/level-1">17 CMMC Level 1 practices</In>. FAR 52.204-21 is the legal basis for Level 1, and its 15 requirements form the foundation of these practices.</li>
            <li><strong className="text-white">Level 2:</strong>{" the "}<In href="/cmmc/level-2">110 Level 2 practices</In>, which rest on NIST SP 800-171 Rev 2.</li>
          </ul>
          <p>For each practice, the question is simple: is it in place and working in your environment today? At Galaxy, a Registered Practitioner guides you through all applicable practices to find the gaps, and each deficiency is written down by domain. Expect questions about how things really work day to day, not only about what a policy says. The goal is an accurate picture, so it pays to answer plainly, even when the answer is no.</p>
          <H2>What you should receive</H2>
          <p>{"Galaxy's gap assessment ends with five deliverables, and they make a useful checklist when you compare providers:"}</p>
          <ul className="space-y-4 list-disc pl-5 marker:text-emerald-400">
            <li>a review of all applicable practices against your current environment</li>
            <li>a written gap report that identifies every deficiency by domain</li>
            <li>a risk-prioritized remediation roadmap, so you know what to fix first</li>
            <li>an SPRS score estimate based on where you stand today</li>
            <li>a recommended path: a Level 1 or Level 2 self-assessment</li>
          </ul>
          <p>Each piece has a job. The written report is your record of every deficiency, organized by domain. The roadmap turns that long list into an order of work, sorted by risk. The recommended path tells you which self-assessment to plan for.</p>
          <p>Treat the SPRS number as an estimate, not a final score. It shows roughly where you stand before any fixes, which makes it a planning tool rather than a result. In the same way, a gap assessment is not your self-assessment. It comes first, so you can fix what is missing before the self-assessment begins.</p>
          <H2>How to prepare</H2>
          <p>A little homework helps the review go smoothly:</p>
          <ul className="space-y-4 list-disc pl-5 marker:text-emerald-400">
            <li>Gather your DoD contracts and subcontracts, and note any mention of FAR 52.204-21, DFARS 252.204-7012 or NIST SP 800-171.</li>
            <li>List your systems: computers, servers, cloud services, email and file storage, and who uses each one.</li>
            <li>{"Collect what you already have in writing, such as policies, a System Security Plan (SSP) or a Plan of Action and Milestones (POA&M)."}</li>
            <li>Pick one person to own the project and answer questions.</li>
            <li>Have someone who knows your network and cloud setup on hand to answer technical questions.</li>
            <li>Note any changes you know are coming, such as a new contract or a move to a new cloud service.</li>
            <li>Expect gaps. Finding them is the reason you are doing this.</li>
          </ul>
          <H2>{"After the gap report: remediation, SSP, POA&M and SPRS"}</H2>
          <p>The report is where the real work starts. Next come two kinds of work:</p>
          <ul className="space-y-4 list-disc pl-5 marker:text-emerald-400">
            <li><strong className="text-white">Remediation:</strong>{" putting missing controls in place, deploying tools such as multi-factor authentication (MFA) and encryption, patching systems, and verification testing to confirm the fixes work."}</li>
            <li><strong className="text-white">Documentation:</strong>{" the SSP, your policies and the POA&M. For Level 2, this also means CUI boundary documentation and data flow diagrams."}</li>
          </ul>
          <p>{"For Level 2, the SSP describes your system boundaries and operating environments, names the people responsible for security, and explains how you implement each of the 110 practices. The POA&M documents the deficiencies that are not yet fully remediated and the planned corrective actions, with responsible parties and target completion dates."}</p>
          <p>{"Work through the roadmap in its risk order, and update the POA&M as each gap closes. That way your documents always match where you really are."}</p>
          <p>Last comes your own Level 1 or Level 2 self-assessment. By then, the SPRS estimate from your gap report should have given way to a score your documents can support.</p>
          <H2>Next step</H2>
          <p>{"To see exactly what is included, read about Galaxy's "}<In href="/cmmc/services">CMMC Gap Assessment</In>{". Galaxy starts with a free, no-obligation discovery call, so you can talk through your contracts and scope first, and the checklist under How to prepare is a good list to bring. To book one, "}<In href="/contact">contact Galaxy Consulting</In>.</p>
        </article>
      </section>
    </>
  );
}
