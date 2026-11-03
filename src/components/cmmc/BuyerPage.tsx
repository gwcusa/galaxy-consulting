import Link from 'next/link';
import type { ReactNode } from 'react';
import { ArrowRight, Calendar, ShieldCheck } from 'lucide-react';
import BreadcrumbSchema, { crumbsFor } from '@/components/BreadcrumbSchema';
import { SITE_URL } from '@/lib/site';

export type Faq = { q: string; a: string };

/** Internal link in article copy. */
export function In({ href, children }: { href: string; children: ReactNode }) {
  return (
    <Link href={href} className="text-emerald-400 hover:text-emerald-300 underline underline-offset-2 decoration-emerald-500/40">
      {children}
    </Link>
  );
}

/** Outside authority: named and linked, opens in a new tab. */
export function Ext({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="text-emerald-400 hover:text-emerald-300 underline underline-offset-2 decoration-emerald-500/40">
      {children}
    </a>
  );
}

export function H2({ id, children }: { id?: string; children: ReactNode }) {
  return (
    <h2 id={id} className="text-2xl sm:text-3xl font-bold text-white section-heading !mt-14 mb-6 scroll-mt-24" style={{ fontFamily: 'var(--font-barlow)' }}>
      {children}
    </h2>
  );
}

export function H3({ children }: { children: ReactNode }) {
  return (
    <h3 className="text-lg sm:text-xl font-bold text-white !mt-8 mb-3" style={{ fontFamily: 'var(--font-barlow)' }}>
      {children}
    </h3>
  );
}

export function UL({ children }: { children: ReactNode }) {
  return <ul className="space-y-3 list-disc pl-5 marker:text-emerald-400">{children}</ul>;
}

export function OL({ children }: { children: ReactNode }) {
  return <ol className="space-y-3 list-decimal pl-5 marker:text-emerald-400 marker:font-semibold">{children}</ol>;
}

/** Highlighted note box (e.g. "typical market range" disclaimers). */
export function Note({ children }: { children: ReactNode }) {
  return (
    <div className="rounded-xl border border-blue-accent/25 bg-card-surface p-5 text-sm text-silver/80">
      {children}
    </div>
  );
}

/** Simple responsive table. */
export function Table({ head, rows }: { head: string[]; rows: ReactNode[][] }) {
  return (
    <div className="overflow-x-auto rounded-xl border border-blue-accent/20">
      <table className="w-full text-sm text-left">
        <thead className="bg-card-surface text-white">
          <tr>{head.map((h) => <th key={h} className="px-4 py-3 font-semibold">{h}</th>)}</tr>
        </thead>
        <tbody>
          {rows.map((r, i) => (
            <tr key={i} className="border-t border-blue-accent/10 align-top">
              {r.map((c, j) => <td key={j} className="px-4 py-3">{c}</td>)}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

/** The one primary CTA used on every buyer page (secondary: the checklist). */
export function ReadinessCta({ heading = 'Talk it through with a Registered Practitioner', text }: { heading?: string; text?: string }) {
  return (
    <div className="rounded-2xl border border-emerald-500/30 bg-emerald-500/5 p-7 !mt-14">
      <h2 className="text-2xl font-bold text-white mb-3" style={{ fontFamily: 'var(--font-barlow)' }}>{heading}</h2>
      <p className="text-silver/80 mb-5">
        {text ?? 'Galaxy Consulting is a veteran-owned Cyber-AB Registered Provider Organization (RPO) in Fort Washington, Maryland. A free 30-minute readiness call covers your contract clauses, your likely CMMC level and what to fix first. No obligation.'}
      </p>
      <div className="flex flex-wrap gap-3">
        <Link href="/cmmc/services#book" className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold rounded-lg transition-colors">
          Free 30-minute readiness call <ArrowRight size={16} />
        </Link>
        <Link href="/cmmc/assessment-checklist" className="inline-flex items-center gap-2 px-6 py-3 border border-silver/30 text-silver hover:text-white hover:border-silver/60 rounded-lg transition-colors">
          CMMC assessment checklist
        </Link>
      </div>
    </div>
  );
}

/** Visible FAQ block. BuyerPage emits the FAQPage schema from the same list, so text and schema always match. */
function FaqBlock({ faqs }: { faqs: Faq[] }) {
  return (
    <>
      <H2 id="faq">Frequently asked questions</H2>
      <div className="space-y-4">
        {faqs.map((f) => (
          <details key={f.q} className="group rounded-xl border border-blue-accent/20 bg-card-surface p-5">
            <summary className="cursor-pointer list-none font-semibold text-white flex justify-between gap-4">
              {f.q}<span className="text-emerald-400 group-open:rotate-45 transition-transform" aria-hidden>+</span>
            </summary>
            <p className="mt-3 text-silver/80">{f.a}</p>
          </details>
        ))}
      </div>
    </>
  );
}

export type BuyerPageProps = {
  path: string;
  /** Short breadcrumb label for this page. */
  crumb: string;
  h1: string;
  /** One- or two-sentence direct answer shown under the H1. */
  lede: string;
  eyebrow?: string;
  updated: { iso: string; label: string };
  /** Plain-text FAQ (also emitted as FAQPage JSON-LD). */
  faqs: Faq[];
  /** Extra JSON-LD objects (e.g. a Service or WebApplication). */
  schema?: object[];
  children: ReactNode;
  /** Rendered after the FAQ, before the CTA. */
  related?: { href: string; label: string }[];
  cta?: ReactNode;
};

/** Layout for the CMMC buyer pages: header, breadcrumb trail + schema, article, FAQ + FAQPage schema, related links, CTA. */
export default function BuyerPage({ path, crumb, h1, lede, eyebrow = 'CMMC', updated, faqs, schema = [], children, related = [], cta }: BuyerPageProps) {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
  };
  const pageSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: h1,
    url: `${SITE_URL}${path}`,
    dateModified: updated.iso,
    publisher: { '@type': 'Organization', name: 'Galaxy Consulting, LLC', url: SITE_URL },
  };
  const trail = crumbsFor(path, crumb);
  return (
    <>
      <BreadcrumbSchema path={path} current={crumb} />
      {[pageSchema, faqSchema, ...schema].map((s, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(s).replace(/</g, '\\u003c') }} />
      ))}

      <section className="bg-galaxy py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-2 mb-4 text-xs" style={{ fontFamily: 'var(--font-inter)' }}>
            {trail.map((c, i) => (
              <span key={c.path} className="flex items-center gap-2">
                {i > 0 && <span className="text-silver/30">/</span>}
                {i < trail.length - 1
                  ? <Link href={c.path} className="text-silver/50 hover:text-silver transition-colors">{c.name}</Link>
                  : <span className="text-emerald-400 font-medium" aria-current="page">{c.name}</span>}
              </span>
            ))}
          </nav>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-emerald-500/40 bg-emerald-500/10 text-emerald-400 text-xs font-semibold tracking-widest uppercase mb-4" style={{ fontFamily: 'var(--font-inter)' }}>
            <ShieldCheck size={11} /> {eyebrow}
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-5" style={{ fontFamily: 'var(--font-barlow)' }}>{h1}</h1>
          <p className="text-lg text-silver/80 mb-5 max-w-3xl" style={{ fontFamily: 'var(--font-inter)' }}>{lede}</p>
          <p className="inline-flex items-center gap-2 text-sm text-silver/70" style={{ fontFamily: 'var(--font-inter)' }}>
            <Calendar size={14} className="text-emerald-400" />
            <strong className="text-white">Updated: <time dateTime={updated.iso}>{updated.label}</time></strong>
          </p>
        </div>
      </section>

      <section className="py-16 bg-section-alt">
        <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-base text-silver/80 leading-relaxed space-y-5" style={{ fontFamily: 'var(--font-inter)' }}>
          {children}
          <FaqBlock faqs={faqs} />
          {related.length > 0 && (
            <>
              <H2>Related CMMC pages</H2>
              <UL>{related.map((r) => <li key={r.href}><In href={r.href}>{r.label}</In></li>)}</UL>
            </>
          )}
          {cta ?? <ReadinessCta />}
          <p className="text-xs text-silver/50 !mt-10">General information, not legal advice. Check your own contract clauses with your contracting officer or counsel.</p>
        </article>
      </section>
    </>
  );
}
