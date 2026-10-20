import type { Metadata } from 'next';
import Link from 'next/link';
import type { ReactNode } from 'react';
import { Calendar, Newspaper } from 'lucide-react';

const PATH = '/insights/what-is-a-cmmc-rpo';
const PAGE_URL = `https://www.galaxyconsultingllc.com${PATH}`;
const TITLE = 'What Is a CMMC Registered Provider Organization (RPO)?';
const HEADLINE = 'What Is a CMMC Registered Provider Organization (RPO)?';
const DESCRIPTION =
  'A CMMC Registered Provider Organization (RPO) advises contractors on CMMC; it does not certify them. How RPOs, RPs, C3PAOs and DIBCAC differ.';
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

export default function WhatIsACmmcRpoPage() {
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
            <span className="text-xs text-emerald-400 font-medium" style={{ fontFamily: 'var(--font-inter)' }}>What Is a CMMC Registered Provider…</span>
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
          <p>A CMMC Registered Provider Organization (RPO) is a consulting firm that the Cyber AB has authorized to give advisory and preparation services to companies getting ready for CMMC. An RPO helps you understand the requirements, fix gaps, build your documentation and prepare for your assessment. It does not conduct the official assessment, and it does not certify anyone.</p>
          <H2>Who does what: RPO, RP, C3PAO and DIBCAC</H2>
          <p>CMMC comes with a lot of short names, and they are easy to mix up. Here is who does what:</p>
          <ul className="space-y-4 list-disc pl-5 marker:text-emerald-400">
            <li><strong className="text-white">The Cyber AB</strong>{" (formerly the CMMC Accreditation Body) is the accreditation body for CMMC. It authorizes RPOs and accredits C3PAOs."}</li>
            <li><strong className="text-white">RPO (Registered Provider Organization):</strong>{" a consulting firm authorized by the Cyber AB to provide advisory and preparation services. It helps you get ready. It does not assess you."}</li>
            <li><strong className="text-white">RP (Registered Practitioner):</strong>{" a person employed by an RPO, trained and vetted to help DoD contractors understand CMMC requirements, identify gaps, implement controls and prepare documentation. An RP advises and never certifies."}</li>
            <li><strong className="text-white">C3PAO (CMMC Third-Party Assessment Organization):</strong>{" a firm accredited by the Cyber AB to conduct official third-party CMMC assessments. C3PAOs are independent from RPOs and do not provide consulting services."}</li>
            <li><strong className="text-white">DIBCAC (part of DCMA):</strong>{" the Government team that conducts Level 3 assessments."}</li>
          </ul>
          <p>Put simply, RPOs and RPs help you prepare, C3PAOs conduct official third-party assessments, and the Government handles Level 3. Knowing these roles helps you hire the right kind of help and spot a claim that does not fit.</p>
          <H2>What an RPO can and cannot do</H2>
          <p>{"An RPO's job is preparation. Working through its Registered Practitioners, it can help you:"}</p>
          <ul className="space-y-4 list-disc pl-5 marker:text-emerald-400">
            <li>understand what CMMC asks of your company</li>
            <li>find the gaps between what you do today and what is required</li>
            <li>put security controls in place to close those gaps</li>
            <li>build the documentation you will need</li>
            <li>get ready for your assessment</li>
          </ul>
          <p>What it cannot do matters just as much. An RPO does not conduct the official assessment, and it does not certify you. On the other side, a C3PAO conducts official third-party assessments but does not offer consulting. So the firm that helps you prepare is not the firm that assesses you. If one company offers to do both, ask it to explain before you sign anything.</p>
          <H2>Do you need an RPO for a self-assessment?</H2>
          <p>Not always. Level 1 is a self-assessment you can conduct yourself, so technically you do not need an RPO for it. Level 2 (Self) is a self-assessment too: your own company does the assessing, and no C3PAO is involved.</p>
          <p>Whether outside help makes sense depends on your team. Ask a few honest questions:</p>
          <ul className="space-y-4 list-disc pl-5 marker:text-emerald-400">
            <li>Does anyone on staff know the CMMC requirements well?</li>
            <li>Do you have the time to check every requirement and gather proof?</li>
            <li>Can someone write clear documentation of how your systems are set up and protected?</li>
          </ul>
          <p>{"If the answers are mostly yes, you may be able to handle the work in-house. If not, an adviser can help with the parts you cannot cover. Either way, the self-assessment belongs to your company. For the Level 1 steps, see the "}<In href="/cmmc/level-1">CMMC Level 1 self-assessment process</In>.</p>
          <H2>How to check a provider in the Cyber AB Marketplace</H2>
          <p>The Cyber AB Marketplace is the official place to verify RPO, C3PAO and RP listings. Before you hire anyone, look the firm up there yourself instead of relying on a logo or a sales page.</p>
          <p>When you search, check two things:</p>
          <ol className="space-y-4 list-decimal pl-5 marker:text-emerald-400 marker:font-semibold">
            <li><strong className="text-white">The firm is listed.</strong>{" If you cannot find it, ask the firm why."}</li>
            <li><strong className="text-white">The listing matches the pitch.</strong>{" A firm that calls itself an RPO should be listed as one. If it says its people are RPs, look them up too. A firm that offers an official third-party assessment should be listed as a C3PAO."}</li>
          </ol>
          <p>{"Keep a short note of what you find for each firm on your shortlist, so you can compare them side by side. To find the Marketplace, start with the "}<In href="/cmmc/resources">official CMMC resources</In>{" page, which links to it along with other official sources."}</p>
          <H2>What the Phase 2 suspension changes</H2>
          <p>On July 13, 2026, the Department of War (DoW, formerly DoD) suspended the move to CMMC Phase 2. During the suspension, program offices may not require third-party certification or Level 3. That did not switch CMMC off, though: for now, new requirements may only call for Level 1 (Self) or Level 2 (Self).</p>
          <p>{"That shapes the kind of help that fits. If a new requirement can only ask you for a self-assessment, the help you need is advice and preparation, which is the work RPOs and RPs do. Check what your own solicitations and contracts call for before you decide how much help to buy. For the details, read "}<In href="/insights/cmmc-phase-2-suspension">CMMC Phase 2 Is Suspended</In>.</p>
          <H2>Questions to ask before hiring help</H2>
          <p>Before you sign with any adviser, ask:</p>
          <ul className="space-y-4 list-disc pl-5 marker:text-emerald-400">
            <li>Where are you listed in the Cyber AB Marketplace, and in which role?</li>
            <li>Who will do the work, and is that person a Registered Practitioner?</li>
            <li>Will you stick to advice and preparation, and leave the assessment to us or to an independent assessor?</li>
            <li>Which level are you preparing us for, Level 1 (Self) or Level 2 (Self), and why?</li>
            <li>What exactly is in scope, and is the price fixed for that scope?</li>
            <li>What will our own team still need to do?</li>
          </ul>
          <p>Clear, direct answers are a good sign. Be careful with anyone who talks more about results than about the work.</p>
          <H2>How Galaxy can help</H2>
          <p>{"Galaxy Consulting is a service-disabled veteran-owned small business. Its CMMC work is advisory and self-assessment preparation: it helps you get ready, and it does not assess you. Through Galaxy's RP Staffing service, you can access its Cyber-AB Registered Practitioner on a project or ongoing basis, for Level 1 and Level 2 self-assessment preparation. Galaxy offers fixed-scope engagement pricing."}</p>
          <p>{"Read about Galaxy's "}<In href="/cmmc/services">CMMC advisory services</In>{" to see what each service includes, and browse the "}<In href="/cmmc/faq">CMMC FAQ</In>{" for common questions. When you are ready to talk it through, "}<In href="/contact">contact Galaxy Consulting</In>. The initial consultation is free.</p>
        </article>
      </section>
    </>
  );
}
