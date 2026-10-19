import type { Metadata } from 'next';
import Link from 'next/link';
import type { ReactNode } from 'react';
import { Calendar, Newspaper } from 'lucide-react';

const PATH = '/insights/nist-800-171-gap-assessment';
const PAGE_URL = `https://www.galaxyconsultingllc.com${PATH}`;
const TITLE = 'NIST 800-171 Gap Assessment: What It Covers and How to Prepare';
const HEADLINE = 'NIST 800-171 Gap Assessment: What It Covers and How to Prepare';
const DESCRIPTION =
  'What a NIST SP 800-171 gap assessment involves, what documents to gather and how the results feed your SSP, POA&M and SPRS score.';
const PUBLISHED = '2026-10-19';
const MODIFIED = '2026-10-19';
const UPDATED_LABEL = 'October 19, 2026';

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: PATH },
  openGraph: {
    type: 'website',
    url: PAGE_URL,
    title: TITLE,
    description: DESCRIPTION,
  },
};

const pageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: TITLE,
  description: DESCRIPTION,
  url: PAGE_URL,
  datePublished: PUBLISHED,
  dateModified: MODIFIED,
  isPartOf: { '@type': 'WebSite', name: 'Galaxy Consulting, LLC', url: 'https://www.galaxyconsultingllc.com' },
};

function Ext({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="text-emerald-400 hover:text-emerald-300 underline underline-offset-2 decoration-emerald-500/40">
      {children}
    </a>
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema).replace(/</g, '\\u003c') }}
      />

      {/* ── HEADER ── */}
      <section className="bg-galaxy py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 mb-4">
            <Link href="/insights" className="text-xs text-silver/50 hover:text-silver transition-colors" style={{ fontFamily: 'var(--font-inter)' }}>Insights</Link>
            <span className="text-silver/30 text-xs">/</span>
            <span className="text-xs text-emerald-400 font-medium" style={{ fontFamily: 'var(--font-inter)' }}>NIST 800-171 Gap Assessment</span>
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
          <H2>NIST 800-171 Gap Assessment: What It Covers and How to Prepare</H2>
          <p>A NIST SP 800-171 gap assessment compares the security controls your organization has in place with the 110 requirements in NIST SP 800-171 that protect Controlled Unclassified Information (CUI). It shows what is met, what is partly met and what is missing, so you can plan remediation. CMMC Level 2 is built on these same requirements, which is why many defense contractors start here.</p>
          <H2>What a gap assessment covers</H2>
          <ul className="space-y-4 list-disc pl-5 marker:text-emerald-400">
            <li>Scope: where CUI is stored, processed and transmitted, and which people, systems and vendors touch it.</li>
            <li>The 14 requirement families, from access control and incident response to system and communications protection.</li>
            <li>Each requirement rated as met, partially met or not met, with the evidence behind the rating.</li>
          </ul>
          <H2>What to gather before you start</H2>
          <ul className="space-y-4 list-disc pl-5 marker:text-emerald-400">
            <li>A network and data-flow diagram, and an asset inventory.</li>
            <li>Existing policies and procedures, and any current System Security Plan (SSP).</li>
            <li>Your list of external service providers, such as cloud, email and managed IT.</li>
          </ul>
          <H2>What you get at the end</H2>
          <p>{"The output is typically a requirement-by-requirement findings list, a prioritized remediation plan, an updated SSP and a Plan of Action and Milestones (POA&M). The findings also let you calculate your DoD Assessment score for SPRS under the DoD Assessment Methodology."}</p>
          <H2>How it relates to CMMC</H2>
          <p>{"A gap assessment is a readiness step, not a certification. Official CMMC Level 2 assessments are carried out by authorized assessors, and Galaxy Consulting does not certify organizations. Contract requirements and timelines depend on your contracts, and the CMMC Phase 2 rollout has been suspended, so check your contract clauses and your contracting officer. See our "}<Ext href="https://www.galaxyconsultingllc.com/insights/cmmc-phase-2-suspension">Phase 2 suspension explainer</Ext>.</p>
          <H2>Next steps</H2>
          <p>{"Read about "}<Ext href="https://www.galaxyconsultingllc.com/cmmc/level-2">CMMC Level 2 requirements</Ext>{", review our "}<Ext href="https://www.galaxyconsultingllc.com/cmmc/services">CMMC advisory services</Ext>{", or "}<Ext href="https://www.galaxyconsultingllc.com/contact">contact us to discuss your readiness</Ext>. Results depend on your starting point and the effort put into remediation.</p>
        </article>
      </section>
    </>
  );
}
