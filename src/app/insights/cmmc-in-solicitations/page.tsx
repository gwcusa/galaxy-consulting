import type { Metadata } from 'next';
import Link from 'next/link';
import type { ReactNode } from 'react';
import { Calendar, Newspaper } from 'lucide-react';

const PATH = '/insights/cmmc-in-solicitations';
const PAGE_URL = `https://www.galaxyconsultingllc.com${PATH}`;
const TITLE = 'CMMC in Solicitations: September 2026 SAM.gov Data';
const HEADLINE = 'CMMC in Solicitations: September 2026 SAM.gov Data';
const DESCRIPTION =
  'Review the September 2026 SAM.gov data for CMMC mentions in federal contract notices, including breakdown by DoD components, levels, and set-asides.';
const PUBLISHED = '2026-10-20';
const MODIFIED = '2026-10-20';
const UPDATED_LABEL = 'October 20, 2026';

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

function H3({ children }: { children: ReactNode }) {
  return (
    <h3 className="text-xl font-bold text-white !mt-10" style={{ fontFamily: 'var(--font-barlow)' }}>
      {children}
    </h3>
  );
}

export default function CmmcInSolicitationsPage() {
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
            <span className="text-xs text-emerald-400 font-medium" style={{ fontFamily: 'var(--font-inter)' }}>CMMC in Solicitations</span>
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
          <p>In September 2026, 809 out of 40,534 contract opportunity notices posted on SAM.gov mentioned CMMC requirements, representing 2.0% of all published notices. Every single notice mentioning CMMC came from a Department of Defense component, with zero civilian agency notices citing the requirement. Understanding these numbers helps defense contractors track how requirements are being integrated into federal solicitations.</p>
          <H2>September 2026 By the Numbers</H2>
          <p>During September 2026, SAM.gov published 40,534 total contract opportunity notices. Of those, 809 notices contained explicit references to CMMC terms or related clauses. For comparison, the August 2026 baseline showed 937 CMMC notices out of 44,340 total notices (2.1%). September had 128 fewer CMMC notices than August, while total notices also fell, from 44,340 to 40,534.</p>
          <p>When examining specific search terms within the September notices:</p>
          <ul className="space-y-4 list-disc pl-5 marker:text-emerald-400">
            <li>703 notices used the full title Cybersecurity Maturity Model Certification.</li>
            <li>284 notices used the acronym CMMC.</li>
            <li>144 notices cited DFARS clause 252.204-7021.</li>
          </ul>
          <p>Additionally, 74 notices cited NIST SP 800-171 without directly mentioning CMMC (compared to 169 in August). One notice can match several terms.</p>
          <H2>Who Is Asking: DoD Components</H2>
          <p>All 809 September CMMC notices originated from the Department of Defense. Breakdowns by DoD sub-tier components show where these requirements appeared most frequently:</p>
          <ul className="space-y-4 list-disc pl-5 marker:text-emerald-400">
            <li><strong className="text-white">Department of the Navy:</strong>{" 483 notices (down from 560 in August)"}</li>
            <li><strong className="text-white">Department of the Air Force:</strong>{" 133 notices (down from 156 in August)"}</li>
            <li><strong className="text-white">Defense Logistics Agency:</strong>{" 121 notices (down from 130 in August)"}</li>
            <li><strong className="text-white">Department of the Army:</strong>{" 66 notices (down from 86 in August)"}</li>
            <li><strong className="text-white">Defense Information Systems Agency:</strong>{" 3 notices"}</li>
            <li><strong className="text-white">Missile Defense Agency:</strong>{" 2 notices"}</li>
            <li><strong className="text-white">US Special Operations Command:</strong>{" 1 notice"}</li>
          </ul>
          <H2>CMMC Levels Named in Solicitations</H2>
          <p>Most contract notices on SAM.gov do not specify a CMMC level in the main text description. However, among the notices that explicitly named a level:</p>
          <ul className="space-y-4 list-disc pl-5 marker:text-emerald-400">
            <li>{"153 notices named "}<In href="/cmmc/level-1">CMMC Level 1</In>.</li>
            <li>{"71 notices named "}<In href="/cmmc/level-2">CMMC Level 2</In>.</li>
            <li>0 notices named Level 3.</li>
          </ul>
          <p>In August, the counts were 165 for Level 1, 69 for Level 2, and 3 for Level 3.</p>
          <H2>Set-Asides, Notice Types, and NAICS Codes</H2>
          <p>Federal contract opportunity notices cover various solicitation types and acquisition categories. The September CMMC notices broke down as follows:</p>
          <H3>Notice Types</H3>
          <ul className="space-y-4 list-disc pl-5 marker:text-emerald-400">
            <li><strong className="text-white">Solicitations:</strong>{" 635"}</li>
            <li><strong className="text-white">Combined Synopsis/Solicitations:</strong>{" 128"}</li>
            <li><strong className="text-white">Special Notices:</strong>{" 17"}</li>
            <li><strong className="text-white">Sources Sought:</strong>{" 16"}</li>
            <li><strong className="text-white">Presolicitations:</strong>{" 10"}</li>
            <li><strong className="text-white">Award Notices:</strong>{" 3"}</li>
          </ul>
          <H3>Small Business Set-Asides</H3>
          <ul className="space-y-4 list-disc pl-5 marker:text-emerald-400">
            <li><strong className="text-white">Small Business Set-Asides (Total):</strong>{" 152"}</li>
            <li><strong className="text-white">Service-Disabled Veteran-Owned Small Business (SDVOSB) Set-Asides:</strong>{" 17 (up from 4 in August)"}</li>
            <li><strong className="text-white">No Set-Aside Used:</strong>{" 68"}</li>
            <li><strong className="text-white">No Set-Aside Listed:</strong>{" 572"}</li>
          </ul>
          <H3>Top NAICS Codes</H3>
          <ul className="space-y-4 list-disc pl-5 marker:text-emerald-400">
            <li><strong className="text-white">334412</strong>{" (Bare Printed Circuit Board Manufacturing): 75 notices"}</li>
            <li><strong className="text-white">332919</strong>{" (Other Metal Valve and Pipe Fitting Manufacturing): 67 notices"}</li>
            <li><strong className="text-white">333998</strong>{" (All Other Miscellaneous General Purpose Machinery Manufacturing): 50 notices"}</li>
            <li><strong className="text-white">335931</strong>{" (Current-Carrying Wiring Device Manufacturing): 39 notices"}</li>
          </ul>
          <H2>What This Means During the Phase 2 Suspension</H2>
          <p>{"On July 13, 2026, the Department of War suspended the move to CMMC Phase 2. To learn more about this policy change, read our article on the "}<In href="/insights/cmmc-phase-2-suspension">CMMC Phase 2 suspension</In>.</p>
          <p>During this suspension, program offices may not require third-party certification or Level 3. For now, new solicitation requirements may only call for Level 1 (Self) or Level 2 (Self). Under 32 CFR 170.16, Level 2 (Self) requires a self-assessment every three years and an annual affirmation.</p>
          <p>{"Even with Phase 2 suspended, DFARS requirements and NIST SP 800-171 Rev 2 remain active, and government-led assessments may still take place. Review common answers in our "}<In href="/cmmc/faq">CMMC FAQ</In>{" to understand these ongoing duties."}</p>
          <H2>Method and Limits</H2>
          <p>{"Data for this report comes from SAM.gov's public Contract Opportunities active-notices file and the FY2026 archive file downloaded on October 20, 2026. A notice counts for the month of its posted date, and any notice appearing in both files is counted only once."}</p>
          <p>{"A notice counts as a CMMC notice if its title or description contains \"CMMC\", \"Cybersecurity Maturity Model Certification\", or the DFARS clause number 252.204-7021. Standalone mentions of NIST SP 800-171 are excluded from the primary count because older DFARS clauses cite it without CMMC."}</p>
          <p>These counts represent a baseline floor. The text search covers only the SAM.gov summary fields, not attached PDF solicitations or external documentation. Unique notice IDs are stored so all figures can be verified.</p>
          <H2>Frequently asked questions</H2>
          <H3>How often is this SAM.gov data updated?</H3>
          <p>This data note is updated monthly using the same public data sources and search method so readers can compare trends across months.</p>
          <H3>Does a Level 2 requirement mean I need an external assessment right now?</H3>
          <p>During the Phase 2 suspension, program offices may only call for Level 1 (Self) or Level 2 (Self). Third-party assessment requirements are currently suspended.</p>
          <H3>Where can defense contractors review advisory services?</H3>
          <p>{"You can review fixed-scope advisory options on our "}<In href="/cmmc/services">CMMC advisory services</In>{" page."}</p>
          <p>{"If you need help reviewing your self-assessment scope or compliance documentation, feel free to "}<In href="/contact">contact our team</In>{" for a free initial consultation."}</p>
        </article>
      </section>
    </>
  );
}
