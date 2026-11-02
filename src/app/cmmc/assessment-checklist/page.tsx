import type { Metadata } from 'next';
import { pageMeta } from '@/lib/seo';
import BuyerPage, { In, H2, H3, UL, OL, Note, type Faq } from '@/components/cmmc/BuyerPage';
import { FAMILIES } from '@/lib/nist-800-171';

const PATH = '/cmmc/assessment-checklist';
const TITLE = 'CMMC Assessment Checklist: 110 Practices in 14 Domains';
const DESCRIPTION =
  'A free CMMC Level 2 assessment checklist: all 110 NIST SP 800-171 practices in 14 domains with point values, plus the documents and evidence to gather.';

export const metadata: Metadata = pageMeta({ path: PATH, title: TITLE, description: DESCRIPTION });

const FAQS: Faq[] = [
  { q: 'How many practices are on the CMMC Level 2 checklist?', a: 'CMMC Level 2 has 110 practices, the 110 security requirements of NIST SP 800-171 Rev 2, grouped into 14 domains from Access Control to System and Information Integrity. CMMC Level 1 is the 17 practices marked L1 in the checklist.' },
  { q: 'Is this checklist enough to complete my self-assessment?', a: 'It is a starting point. A self-assessment checks each practice against assessment objectives in NIST SP 800-171A and your evidence, and records the result in your system security plan and SPRS. Use the checklist to see where you stand and what to gather.' },
  { q: 'What documents should I have before an assessment?', a: 'At minimum a current system security plan (SSP) that covers your system boundary and explains how each practice is met, a POA&M for open items, your policies and procedures, an asset inventory, network and data-flow diagrams, and the records that show controls work, such as logs, training records and access reviews.' },
  { q: 'Which practices should I work on first?', a: 'Start with the SSP (3.12.4), because no assessment can be completed without it, and then the 5-point practices such as MFA, audit logging, configuration baselines and malware protection. They move your SPRS score the most and cannot be left on a POA&M.' },
  { q: 'Is there a downloadable PDF version?', a: 'Not yet. The checklist on this page prints cleanly from your browser (use Print and save as PDF). The SPRS score calculator uses the same 110 practices if you want a score as you go.' },
  { q: 'Can someone walk through the checklist with us?', a: 'Yes. In a Galaxy gap assessment a Cyber-AB Registered Practitioner goes through every applicable practice with your team, typically over 2 to 3 weeks, and you get a written gap report, a remediation roadmap and an SPRS estimate.' },
];

export default function AssessmentChecklistPage() {
  return (
    <BuyerPage
      path={PATH}
      crumb="Assessment Checklist"
      eyebrow="Checklist"
      h1="CMMC assessment checklist: all 110 practices in 14 domains"
      lede="CMMC Level 2 checks 110 practices, the security requirements of NIST SP 800-171 Rev 2, in 14 domains. Use the checklist below to mark each one as in place or not, see its SPRS point value, and gather the documents an assessment looks for."
      updated={{ iso: '2026-11-02', label: 'November 2, 2026' }}
      faqs={FAQS}
      related={[
        { href: '/cmmc/sprs-score', label: 'SPRS score calculator: score the same 110 practices' },
        { href: '/cmmc/nist-800-171-gap-assessment', label: 'NIST 800-171 and CMMC gap assessment service' },
        { href: '/cmmc/level-1', label: 'CMMC Level 1: the 17 practices' },
        { href: '/insights/cmmc-level-2-self-assessment-guide', label: 'CMMC Level 2 self-assessment guide' },
        { href: '/cmmc/level-2-assessment-cost', label: 'What a CMMC Level 2 assessment costs' },
      ]}
    >
      <H2>How to use this checklist</H2>
      <OL>
        <li><strong className="text-white">Decide your scope first.</strong>{' List the systems, cloud services, locations and people that store, process or send CUI. Everything on the checklist applies to that boundary, so a smaller boundary means less to check.'}</li>
        <li><strong className="text-white">Go domain by domain.</strong>{' For each practice ask one question: is it in place and working today, and could we show evidence? Tick the box only if the answer is yes for the whole scope.'}</li>
        <li><strong className="text-white">Note the point value.</strong>{' Each practice is worth 5, 3 or 1 point in your SPRS score. Unticked 5-point practices are your first priorities.'}</li>
        <li><strong className="text-white">Write down the evidence.</strong>{' A policy alone is not enough; keep the screenshot, log, record or configuration that shows the practice working.'}</li>
        <li><strong className="text-white">Turn the gaps into a plan.</strong>{' Every unticked practice becomes a remediation task or a POA&M entry with an owner and a date.'}</li>
      </OL>
      <p>{'Practices marked '}<span className="rounded bg-emerald-500/15 px-1.5 py-0.5 text-xs font-semibold text-emerald-300">L1</span>{' are also the 17 CMMC Level 1 practices, so a company that handles only Federal Contract Information can work through those alone; see '}<In href="/cmmc/level-1">CMMC Level 1</In>{'. Your ticks are not saved; print the page (Print, then save as PDF) to keep a copy, or use the '}<In href="/cmmc/sprs-score">SPRS score calculator</In>{' to score the same list.'}</p>

      <H2>Before you start: documents to gather</H2>
      <UL>
        <li>{'Your DoD contracts and subcontracts, with every mention of FAR 52.204-21, DFARS 252.204-7012, 7019, 7020 or 7021 (see '}<In href="/cmmc/dfars-7012-7019-7020-7021">the DFARS clauses explained</In>{').'}</li>
        <li>{'A current system security plan (SSP) and any POA&M you already keep.'}</li>
        <li>{'An asset inventory: computers, servers, network devices, cloud services and mobile devices in scope.'}</li>
        <li>{'Network and data-flow diagrams that show where CUI enters, is stored and leaves.'}</li>
        <li>{'Policies and procedures for each domain, plus the records that prove they are followed: training, access reviews, logs, incident reports, maintenance and visitor records.'}</li>
        <li>{'Contracts or responsibility matrices for outside providers, such as your MSP or cloud provider, showing which practices they cover.'}</li>
      </UL>

      <H2 id="checklist">The 110-practice checklist</H2>
      <Note>
        Requirement text is shortened for a checklist; the full wording and assessment objectives are in NIST SP 800-171 Rev 2 and NIST SP 800-171A. Point values follow the NIST SP 800-171 DoD Assessment Methodology. MFA (3.5.3) and FIPS-validated encryption (3.13.11) lose 3 points instead of 5 when partly implemented; the SSP (3.12.4) has no point value, but without it an assessment cannot be completed.
      </Note>
      {FAMILIES.map((f) => (
        <section key={f.code} aria-labelledby={`dom-${f.code}`} className="break-inside-avoid">
          <h3 id={`dom-${f.code}`} className="text-lg sm:text-xl font-bold text-white !mt-10 mb-3" style={{ fontFamily: 'var(--font-barlow)' }}>
            {f.code}: {f.name} <span className="text-sm font-normal text-silver/60">({f.reqs.length} practices)</span>
          </h3>
          <ul className="space-y-2">
            {f.reqs.map((r) => (
              <li key={r.id} className="rounded-lg border border-blue-accent/15 bg-card-surface px-4 py-3">
                <label className="flex gap-3 items-start cursor-pointer">
                  <input type="checkbox" className="mt-1 h-4 w-4 accent-emerald-500 shrink-0" aria-label={`${f.code}.L2-${r.id} in place`} />
                  <span className="text-sm">
                    <span className="font-mono text-emerald-400 mr-2">{f.code}.L2-{r.id}</span>
                    {r.text}
                    <span className="ml-2 text-xs text-silver/50">{r.unscored ? 'not scored' : `${r.weight} pt${r.weight > 1 ? 's' : ''}`}</span>
                    {r.l1 && <span className="ml-2 rounded bg-emerald-500/15 px-1.5 py-0.5 text-xs font-semibold text-emerald-300">L1</span>}
                  </span>
                </label>
              </li>
            ))}
          </ul>
        </section>
      ))}

      <H2>After the checklist</H2>
      <H3>Turn gaps into a remediation plan</H3>
      <p>{'Sort the unticked practices by point value and effort. The 5-point items usually need tools or configuration changes (MFA, central logging, endpoint protection, baseline hardening), while many 1-point items are policy, settings or record-keeping. Assign each one an owner and a target date.'}</p>
      <H3>Update the SSP and POA&amp;M</H3>
      <p>{'For every practice, the SSP should say how it is met, by which system or provider, and where the evidence lives. Open items go in the POA&M. Under 32 CFR 170.21 only certain lower-value items may stay on a Level 2 POA&M, and they must be closed within 180 days.'}</p>
      <H3>Score it and affirm it</H3>
      <p>{'When the gaps are closed, complete your self-assessment against the assessment objectives, post the score in SPRS and have a senior official affirm it. While CMMC Phase 2 is suspended, new requirements may call for Level 1 (Self) or Level 2 (Self), so this self-assessment is what most contracts look for now; the '}<In href="/insights/cmmc-level-2-self-assessment-guide">Level 2 self-assessment guide</In>{' walks through the steps.'}</p>
      <p>{'Prefer a second pair of eyes? Galaxy Consulting is a Cyber-AB Registered Provider Organization. Its '}<In href="/cmmc/nist-800-171-gap-assessment">gap assessment</In>{' runs this same checklist with your team and ends with a prioritized roadmap. Read more about '}<In href="/cmmc">CMMC readiness at Galaxy</In>{'.'}</p>
    </BuyerPage>
  );
}
