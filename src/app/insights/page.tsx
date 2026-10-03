import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Calendar, Newspaper } from 'lucide-react';

export const metadata: Metadata = {
  alternates: { canonical: '/insights' },
  title: 'Insights — CMMC News and Guidance for Defense Contractors',
  description: 'Plain-language CMMC news and guidance from Galaxy Consulting, a Cyber-AB RPO and SDVOSB, for small defense contractors. Every update links to its official sources.',
};

const articles = [
  {
    href: '/insights/cmmc-phase-2-suspension',
    title: 'CMMC Phase 2 Is Suspended: What It Means for Small Defense Contractors',
    date: '2026-10-02',
    dateLabel: 'October 2, 2026',
    summary: 'DoD suspended CMMC Phase 2 on July 13, 2026. What changed, who is affected at each level, and 5 steps small defense contractors can take now.',
  },
];

export default function InsightsPage() {
  return (
    <>
      {/* ── HEADER ── */}
      <section className="bg-galaxy py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-emerald-500/40 bg-emerald-500/10 text-emerald-400 text-xs font-semibold tracking-widest uppercase mb-4" style={{ fontFamily: 'var(--font-inter)' }}>
            <Newspaper size={11} /> Insights
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-5" style={{ fontFamily: 'var(--font-barlow)' }}>
            CMMC News &amp; Guidance
          </h1>
          <p className="text-silver/70 text-base max-w-2xl" style={{ fontFamily: 'var(--font-inter)' }}>
            Plain-language updates for small defense contractors on CMMC, NIST SP 800-171 and DFARS cybersecurity requirements. Every article links to its official sources.
          </p>
        </div>
      </section>

      {/* ── ARTICLES ── */}
      <section className="py-20 bg-section-alt">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-5">
          {articles.map((a) => (
            <Link
              key={a.href}
              href={a.href}
              className="group card-hover card-surface rounded-xl border border-emerald-500/30 bg-emerald-500/5 p-6 sm:p-8 flex flex-col"
            >
              <span className="inline-flex items-center gap-2 text-xs text-silver/60 mb-3" style={{ fontFamily: 'var(--font-inter)' }}>
                <Calendar size={12} className="text-emerald-400" />
                <time dateTime={a.date}>{a.dateLabel}</time>
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-3 group-hover:text-emerald-400 transition-colors" style={{ fontFamily: 'var(--font-barlow)' }}>
                {a.title}
              </h2>
              <p className="text-sm text-silver/70 leading-relaxed mb-4" style={{ fontFamily: 'var(--font-inter)' }}>{a.summary}</p>
              <span className="text-sm text-emerald-400 font-medium flex items-center gap-1" style={{ fontFamily: 'var(--font-inter)' }}>
                Read the article <ArrowRight size={14} />
              </span>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
