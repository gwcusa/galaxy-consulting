import type { Metadata } from 'next';
import Link from 'next/link';
import type { ReactNode } from 'react';
import { ArrowRight, Calendar, Newspaper, Shield } from 'lucide-react';

const PATH = '/insights/cmmc-phase-2-suspension';
const PAGE_URL = `https://www.galaxyconsultingllc.com${PATH}`;
const TITLE = 'CMMC Phase 2 Suspended: What Contractors Should Do Now';
const HEADLINE = 'CMMC Phase 2 Is Suspended: What It Means for Small Defense Contractors';
const DESCRIPTION =
  'DoD suspended CMMC Phase 2 on July 13, 2026. What changed, who is affected at each level, and 5 steps small defense contractors can take now.';
const PUBLISHED = '2026-10-02';
const MODIFIED = '2026-10-02';
const UPDATED_LABEL = 'October 2, 2026';

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  keywords: [
    'CMMC Phase 2 suspended',
    'CMMC Phase 2 suspension',
    'CMMC Reform Task Force',
    'CMMC Level 2 self-assessment',
    'C3PAO',
    'NIST SP 800-171',
    'DFARS 252.204-7012',
    'SPRS',
  ],
  alternates: { canonical: PATH },
  openGraph: {
    type: 'article',
    url: PAGE_URL,
    title: TITLE,
    description: DESCRIPTION,
    publishedTime: PUBLISHED,
    modifiedTime: MODIFIED,
    authors: ['Galaxy Consulting LLC'],
  },
};

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: HEADLINE,
  description: DESCRIPTION,
  datePublished: PUBLISHED,
  dateModified: MODIFIED,
  author: { '@type': 'Organization', name: 'Galaxy Consulting LLC', url: 'https://www.galaxyconsultingllc.com' },
  publisher: { '@type': 'Organization', name: 'Galaxy Consulting LLC', url: 'https://www.galaxyconsultingllc.com' },
  mainEntityOfPage: { '@type': 'WebPage', '@id': PAGE_URL },
  url: PAGE_URL,
};

const SRC = {
  release: 'https://www.war.gov/News/Releases/Release/Article/4542329/forging-the-arsenal-of-freedom-department-of-war-suspends-cmmc-phase-ii-require/',
  implementing: 'https://dodcio.defense.gov/Portals/0/Documents/Library/ImplementingSuspensionCMMC-PhaseII.pdf',
  reformMemo: 'https://dodcio.defense.gov/Portals/0/Documents/Library/CMMC-ReformMemo.pdf',
  cioPage: 'https://dodcio.defense.gov/CMMC/',
  rule170: 'https://www.federalregister.gov/documents/2024/10/15/2024-22905/cybersecurity-maturity-model-certification-cmmc-program',
  ecfr1703: 'https://www.ecfr.gov/current/title-32/part-170/section-170.3',
  ecfr17015: 'https://www.ecfr.gov/current/title-32/part-170/section-170.15',
  ecfr17016: 'https://www.ecfr.gov/current/title-32/part-170/section-170.16',
  dfarsRule: 'https://www.federalregister.gov/documents/2025/09/10/2025-17359/defense-federal-acquisition-regulation-supplement-assessing-contractor-implementation-of',
  dscoopJul: 'https://defensescoop.com/2026/07/17/pentagon-task-force-to-review-cmmc-hits-the-ground-running/',
  cyberabRfi: 'https://cyberab.org/News-Events/Press-Releases/the-cyber-abs-response-to-the-dows-reforming-cmmc-and-reducing-compliance-burden-rfi',
  dscoopSep: 'https://defensescoop.com/2026/09/09/pentagon-pores-over-heaps-of-industry-feedback-on-cmmc-reform/',
  fnn: 'https://federalnewsnetwork.com/cybersecurity/2026/09/as-the-pentagon-rethinks-cmmc-cybersecurity-isnt-pausing/',
  cyberabStatement: 'https://cyberab.org/News-Events/Press-Releases/statement-on-the-department-of-wars-suspension-of-cmmc-phase-ii-requirements',
};

function Ext({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="text-emerald-400 hover:text-emerald-300 underline underline-offset-2 decoration-emerald-500/40">
      {children}
    </a>
  );
}

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

const sources: { label: ReactNode; urls: string[] }[] = [
  { label: <>Department of War, &ldquo;Forging the Arsenal of Freedom: Department of War Suspends CMMC Phase II Requirements,&rdquo; press release, July 13, 2026.</>, urls: [SRC.release] },
  { label: <>DoW CIO Kirsten A. Davies, memo &ldquo;Removing Barriers to Defense Industrial Base Expansion: Immediate Suspension and Strategic Review of CMMC Requirements&rdquo; (cleared July 13, 2026).</>, urls: [SRC.reformMemo] },
  { label: <>Under Secretary of War (A&amp;S) Michael P. Duffey, memo &ldquo;Implementing Department of War Chief Information Officer&rsquo;s Suspension of the Advancement to CMMC Phase 2 Requirements,&rdquo; July 13, 2026, with Attachment 1.</>, urls: [SRC.implementing] },
  { label: <>DoW CIO, Cybersecurity Maturity Model Certification page.</>, urls: [SRC.cioPage] },
  { label: <>DoD, &ldquo;Cybersecurity Maturity Model Certification (CMMC) Program,&rdquo; final rule, 89 FR, October 15, 2024 (32 CFR Part 170).</>, urls: [SRC.rule170] },
  { label: <>DoD, &ldquo;DFARS: Assessing Contractor Implementation of Cybersecurity Requirements (DFARS Case 2019-D041),&rdquo; final rule, September 10, 2025, effective November 10, 2025.</>, urls: [SRC.dfarsRule] },
  { label: <>eCFR, 32 CFR 170.3, 170.15 and 170.16 (current text).</>, urls: [SRC.ecfr1703, SRC.ecfr17015, SRC.ecfr17016] },
  { label: <>The Cyber AB, &ldquo;Statement on the Department of War&rsquo;s Suspension of CMMC Phase II Requirements,&rdquo; July 15, 2026.</>, urls: [SRC.cyberabStatement] },
  { label: <>The Cyber AB, response to the DoW &ldquo;Reforming CMMC and Reducing Compliance Burden&rdquo; RFI, August 14, 2026.</>, urls: [SRC.cyberabRfi] },
  { label: <>DefenseScoop, &ldquo;Pentagon task force to review CMMC hits the ground running,&rdquo; July 17, 2026.</>, urls: [SRC.dscoopJul] },
  { label: <>DefenseScoop, &ldquo;Pentagon pores over heaps of industry feedback on CMMC reform,&rdquo; September 9, 2026.</>, urls: [SRC.dscoopSep] },
  { label: <>Federal News Network, &ldquo;As the Pentagon rethinks CMMC, cybersecurity isn&rsquo;t pausing,&rdquo; September 15, 2026.</>, urls: [SRC.fnn] },
];

export default function CMMCPhase2SuspensionPage() {
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
            <span className="text-xs text-emerald-400 font-medium" style={{ fontFamily: 'var(--font-inter)' }}>CMMC Phase 2 Suspension</span>
          </div>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-emerald-500/40 bg-emerald-500/10 text-emerald-400 text-xs font-semibold tracking-widest uppercase mb-4" style={{ fontFamily: 'var(--font-inter)' }}>
            <Newspaper size={11} /> CMMC News
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
          <p>
            On July 13, 2026, the Department of War (DoW, formerly DoD) <Ext href={SRC.release}>suspended the move to CMMC Phase 2</Ext>, which was due to start on November 10, 2026. Phase 2 would have made third-party (C3PAO) Level 2 certification a condition of award on many contracts. For now, <Ext href={SRC.implementing}>new requirements may only call for Level 1 (Self) or Level 2 (Self)</Ext>. The cybersecurity rules themselves have not gone away. <Ext href={SRC.reformMemo}>DFARS 252.204-7012 and NIST SP 800-171 Rev 2 still apply</Ext>. A CMMC Reform Task Force has been reviewing the program, and its report is expected about now. As of October 2, 2026, the <Ext href={SRC.cioPage}>DoW CIO&rsquo;s CMMC page</Ext> still describes Phase 2 as suspended.
          </p>

          <H2>What happened</H2>
          <ul className="space-y-4 list-disc pl-5 marker:text-emerald-400">
            <li><strong className="text-white">December 16, 2024:</strong> The <Ext href={SRC.rule170}>CMMC program rule (32 CFR Part 170)</Ext> took effect. It sets out <Ext href={SRC.ecfr1703}>four implementation phases</Ext>.</li>
            <li><strong className="text-white">November 10, 2025:</strong> Phase 1 began when the <Ext href={SRC.dfarsRule}>DFARS CMMC rule (252.204-7021)</Ext> took effect. Solicitations could then require Level 1 or Level 2 self-assessments.</li>
            <li><strong className="text-white">July 13, 2026:</strong> The DoW CIO <Ext href={SRC.reformMemo}>suspended the Phase 2 transition and put &ldquo;all pending and future CMMC implementation milestones&rdquo; on hold</Ext>. The same day, the Under Secretary for Acquisition and Sustainment <Ext href={SRC.implementing}>issued instructions to program offices</Ext>, and the CIO <Ext href={SRC.release}>set up a CMMC Reform Task Force for a 60-day review</Ext>.</li>
            <li><strong className="text-white">July 16, 2026:</strong> The task force <Ext href={SRC.dscoopJul}>held its first meeting</Ext>. The CIO said it would get about 15 more days after the 60-day review to finish its recommendations, and that the report would be made public.</li>
            <li><strong className="text-white">August 14, 2026:</strong> Responses were due to the DoW&rsquo;s <Ext href={SRC.cyberabRfi}>&ldquo;Reforming CMMC and Reducing Compliance Burden&rdquo; request for information</Ext>. The CIO later said the department <Ext href={SRC.dscoopSep}>received over 1,100 responses, more than 10,000 pages in all</Ext>.</li>
            <li><strong className="text-white">September 2026:</strong> Trade press reported a <Ext href={SRC.fnn}>class deviation telling contracting officers how to reflect the suspension in solicitations and contracts</Ext>.</li>
          </ul>

          <H2>Who is affected</H2>
          <ul className="space-y-4 list-disc pl-5 marker:text-emerald-400">
            <li><strong className="text-white">Level 1 (Self):</strong> No change. Contractors that hold Federal Contract Information still <Ext href={SRC.ecfr17015}>self-assess every year and post the results in SPRS</Ext>.</li>
            <li><strong className="text-white">Level 2 (Self):</strong> Still in use, and now the highest level a new requirement may call for. The standard is <Ext href={SRC.implementing}>NIST SP 800-171 Rev 2</Ext>, with a <Ext href={SRC.ecfr17016}>self-assessment every three years and an affirmation every year</Ext>. The DoW <Ext href={SRC.release}>may also carry out &ldquo;select government-led assessments&rdquo;</Ext>.</li>
            <li><strong className="text-white">Level 2 (C3PAO):</strong> Program offices <Ext href={SRC.implementing}>may not require it during the suspension</Ext>. Active solicitations that required it are to be amended. Existing contracts are to drop it at the next option or administrative modification. Voluntary C3PAO certification <Ext href={SRC.cyberabStatement}>remains available</Ext>. About 2,000 contractors were already certified at Level 2 by July 2026, assessed by 110 authorized C3PAOs.</li>
            <li><strong className="text-white">Level 3 (DIBCAC):</strong> Also <Ext href={SRC.implementing}>may not be required during the suspension</Ext>.</li>
          </ul>

          <H2>What to do now</H2>
          <ol className="space-y-4 list-decimal pl-5 marker:text-emerald-400 marker:font-semibold">
            <li><strong className="text-white">Keep your SPRS entry current.</strong> Self-assessments and affirmations are <Ext href={SRC.reformMemo}>still how the DoW checks compliance</Ext> during the suspension. Confirm that your score, dates and affirming official are up to date.</li>
            <li><strong className="text-white">Keep working on NIST SP 800-171 Rev 2.</strong> <Ext href={SRC.reformMemo}>DFARS 252.204-7012 is still in effect</Ext>, and government-led assessments can still happen. Keep your System Security Plan and POA&amp;M accurate.</li>
            <li><strong className="text-white">Watch your solicitations and contracts.</strong> If a bid or contract asked for Level 2 (C3PAO) or Level 3, look for an amendment or modification that <Ext href={SRC.implementing}>removes that requirement</Ext>.</li>
            <li><strong className="text-white">Don&rsquo;t throw away certification prep.</strong> The work behind a C3PAO assessment (scoping, SSP, evidence) is the same work that backs a Level 2 self-assessment. Whether to certify now or wait is a business decision. Make it with your primes&rsquo; expectations in mind.</li>
            <li><strong className="text-white">Talk to your primes.</strong> Ask what they will flow down to subcontractors while the review continues, and get the answer in writing.</li>
          </ol>

          <H2>Key dates to watch</H2>
          <ul className="space-y-4 list-disc pl-5 marker:text-emerald-400">
            <li><strong className="text-white">Now (late September to October 2026):</strong> The task force&rsquo;s report. The 60-day review ran from July 13. The CIO said the report would follow <Ext href={SRC.dscoopJul}>about 15 days later and be made public</Ext>. As of October 2, it is not posted on the <Ext href={SRC.cioPage}>DoW CIO CMMC page</Ext>.</li>
            <li><strong className="text-white">Any new DoW CIO memo or guidance.</strong> The CIO memo says <Ext href={SRC.reformMemo}>&ldquo;further guidance will be promulgated in the coming months.&rdquo;</Ext></li>
            <li><strong className="text-white">November 10, 2026:</strong> The original Phase 2 start date. Under the <Ext href={SRC.cioPage}>current suspension</Ext>, Phase 2 will not begin that day.</li>
            <li><strong className="text-white">Federal Register notices.</strong> The phase schedule is written into <Ext href={SRC.ecfr1703}>32 CFR 170.3</Ext>, so lasting changes may come through rulemaking.</li>
            <li><strong className="text-white">Your own SPRS anniversary.</strong> Your <Ext href={SRC.ecfr17016}>annual affirmation</Ext> comes due on its usual date.</li>
          </ul>

          <H2>How Galaxy can help</H2>
          <div className="bg-emerald-500/5 border border-emerald-500/30 rounded-xl p-6 sm:p-8">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-xl bg-emerald-500/10 flex-shrink-0 hidden sm:block">
                <Shield size={22} className="text-emerald-400" />
              </div>
              <div className="space-y-5">
                <p>
                  Galaxy Consulting is a service-disabled veteran-owned small business and a Cyber-AB Registered Provider Organization. We help small defense contractors keep their NIST SP 800-171 work on track while the rules settle: gap assessments, SSP and POA&amp;M documentation, and SPRS self-assessment support. When certification is required again, you&rsquo;ll be ready. Read more about <In href="/cmmc/level-2">CMMC Level 2</In> and <In href="/cmmc/level-1">Level 1</In>, or see <In href="/cmmc/services">our CMMC services</In> to set up a short discovery call.
                </p>
                <div className="flex flex-wrap gap-3">
                  <Link href="/cmmc/services" className="inline-flex items-center gap-2 px-5 py-2.5 bg-emerald-500 hover:bg-emerald-400 text-navy font-semibold rounded-lg transition-colors text-sm">
                    Our CMMC Services <ArrowRight size={14} />
                  </Link>
                  <Link href="/cmmc/faq" className="inline-flex items-center gap-2 px-5 py-2.5 border border-silver/20 text-silver hover:text-white rounded-lg transition-colors text-sm">
                    CMMC FAQs
                  </Link>
                  <Link href="/contact" className="inline-flex items-center gap-2 px-5 py-2.5 border border-silver/20 text-silver hover:text-white rounded-lg transition-colors text-sm">
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <p className="text-sm italic text-silver/60 pt-2">
            This article is general information, not legal advice. Check your own contract terms with your contracting officer or counsel.
          </p>

          <H2>Sources (all accessed October 2, 2026)</H2>
          <ol className="space-y-3 list-decimal pl-5 text-sm text-silver/70 marker:text-silver/40">
            {sources.map((s, i) => (
              <li key={i}>
                {s.label}{' '}
                {s.urls.map((u, j) => (
                  <span key={u}>
                    {j > 0 && ' · '}
                    <Ext href={u}><span className="break-all">{u}</span></Ext>
                  </span>
                ))}
              </li>
            ))}
          </ol>
        </article>
      </section>
    </>
  );
}
