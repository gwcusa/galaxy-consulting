import type { Metadata } from 'next';
import { pageMeta } from '@/lib/seo';
import BuyerPage, { In, Ext, H2, H3, UL, OL, Note, Table, type Faq } from '@/components/cmmc/BuyerPage';

const PATH = '/cmmc/level-2-assessment-cost';
const TITLE = 'CMMC Level 2 Assessment Cost: What Small Contractors Pay';
const DESCRIPTION =
  'What CMMC Level 2 costs a small contractor: gap assessment, remediation, documentation, self-assessment or third-party fees, and how to cut the total.';

export const metadata: Metadata = pageMeta({ path: PATH, title: TITLE, description: DESCRIPTION });

const faqs: Faq[] = [
  {
    q: 'How much does a CMMC Level 2 self-assessment cost?',
    a: 'The self-assessment itself is mostly your own staff time. The real cost is getting ready: a gap assessment, fixing the gaps and writing the SSP and POA&M. For a small company with an existing IT provider, outside readiness support often lands in the low tens of thousands of dollars as a typical market range, but scope drives everything. These are not Galaxy quotes.',
  },
  {
    q: 'Is a C3PAO assessment required right now?',
    a: 'Not for new requirements. On July 13, 2026 the Department of War suspended the move to Phase 2. While the suspension lasts, new solicitations may only call for Level 1 (Self) or Level 2 (Self), and program offices may not require a third-party assessment. Voluntary C3PAO assessments remain available, and DFARS 252.204-7012 and NIST SP 800-171 still apply.',
  },
  {
    q: 'What costs more, remediation or the assessment?',
    a: 'For most small contractors remediation costs more than the assessment. Licences, MFA, encryption, logging, device management and the labour to configure them add up, and some of it recurs every year. The assessment is a one-time event per cycle.',
  },
  {
    q: 'Can an RPO lower my cost?',
    a: 'An RPO cannot change the requirements, but good preparation usually avoids paying twice. A gap assessment first tells you exactly what is missing, a tighter CUI boundary means fewer systems to fix, and a clean SSP shortens any later assessment. An RPO advises and prepares; it does not assess or certify anyone.',
  },
  {
    q: 'Does an enclave really save money?',
    a: 'Often, yes. If only a few people touch CUI, keeping CUI in a separate enclave means the 110 requirements apply to that enclave rather than to every laptop and server in the company. The trade-off is a second environment to run and train people on.',
  },
  {
    q: 'What does Level 2 cost after the first year?',
    a: 'Plan for an annual affirmation in SPRS, a new self-assessment every three years, recurring licence and monitoring fees, policy reviews, training and the staff time to keep evidence current. Upkeep is cheaper than the first build but it is not zero.',
  },
];

export default function Page() {
  return (
    <BuyerPage
      path={PATH}
      crumb="Level 2 Assessment Cost"
      h1="CMMC Level 2 assessment cost"
      lede="Most of what a small contractor spends on CMMC Level 2 goes to getting ready (the gap assessment, remediation and documentation), not to the assessment itself. Your CUI scope is the biggest single driver of the total."
      updated={{ iso: '2026-11-02', label: 'November 2, 2026' }}
      faqs={faqs}
      related={[
        { href: '/cmmc/level-2', label: 'CMMC Level 2: the 110 requirements' },
        { href: '/cmmc/nist-800-171-gap-assessment', label: 'NIST SP 800-171 gap assessment' },
        { href: '/cmmc/sprs-score', label: 'How the SPRS score works' },
        { href: '/cmmc/c3pao-vs-rpo', label: 'C3PAO vs RPO' },
        { href: '/insights/cmmc-phase-2-suspension', label: 'The Phase 2 suspension explained' },
      ]}
    >
      <p>
        Level 2 means implementing the 110 security requirements of NIST SP 800-171 Rev 2 on every system that stores,
        processes or transmits Controlled Unclassified Information (CUI). The price of that work depends far more on how
        much of your company is in scope than on any fixed fee. This page breaks the cost into buckets, explains what moves
        each one, and shows where small contractors usually save money. For the overall program, start at the{' '}
        <In href="/cmmc">CMMC hub</In>.
      </p>

      <H2>The cost buckets</H2>
      <p>Level 2 spending falls into six buckets. Only one of them is the assessment.</p>
      <OL>
        <li><strong>Readiness or gap assessment.</strong> A practice-by-practice review of where you stand, ending in a gap report, an SPRS score estimate and a prioritized roadmap.</li>
        <li><strong>Remediation and tools.</strong> MFA, encryption, logging and monitoring, endpoint protection, patching, backups, device management and the labour to set them up. This is usually the largest bucket.</li>
        <li><strong>Documentation.</strong> The System Security Plan (SSP), policies and procedures, a plan of action and milestones (POA&amp;M), CUI boundary descriptions and data-flow diagrams.</li>
        <li><strong>The assessment itself.</strong> A self-assessment is mostly internal staff time. A voluntary third-party assessment is a paid engagement with an authorized assessment organization.</li>
        <li><strong>Annual affirmation.</strong> A senior official affirms in SPRS each year that the requirements are still met. The filing is free; keeping the affirmation true is not.</li>
        <li><strong>Ongoing upkeep.</strong> Recurring licences, monitoring, training, policy reviews and evidence collection between assessments.</li>
      </OL>

      <H2>What drives the cost up or down</H2>
      <UL>
        <li><strong>Scope and the CUI boundary.</strong> Every system and person that touches CUI is in scope. A sloppy boundary can pull your whole network in.</li>
        <li><strong>Users and assets.</strong> More users, laptops, servers and network devices mean more licences, more configuration and more evidence.</li>
        <li><strong>Enclave vs whole company.</strong> Isolating CUI in a small enclave can shrink the job sharply when only a few staff handle it.</li>
        <li><strong>Cloud choices.</strong> Cloud services holding CUI must meet FedRAMP Moderate-equivalent requirements under DFARS 252.204-7012. Government-cloud tenants such as Microsoft GCC High cost more per user than commercial tiers.</li>
        <li><strong>Existing maturity.</strong> A current SSP, working MFA and an honest SPRS score already on file cut the remaining work.</li>
        <li><strong>Your managed service provider.</strong> An MSP that already runs secure configurations helps; one that has to retool for CUI adds cost, and its own role must be documented.</li>
      </UL>

      <H2>Typical market ranges</H2>
      <Note>
        <strong>Typical market range only.</strong> The figures below are broad industry ranges for small-to-mid sized
        contractors. They are not Galaxy quotes, they vary widely by scope, and they are not a quote for your organization.
      </Note>
      <Table
        head={['Bucket', 'Typical market range', 'Notes']}
        rows={[
          ['Gap / readiness assessment', '$5,000 to $25,000', 'Grows with scope and the number of systems reviewed'],
          ['Remediation and tools', '$10,000 to $100,000 or more', 'Licences, hardware, configuration labour; part recurs yearly'],
          ['Documentation (SSP, policies, POA&M)', '$5,000 to $30,000', 'Lower if you already have a usable SSP'],
          ['Self-assessment support', '$3,000 to $15,000', 'Optional outside help scoring and filing in SPRS'],
          ['Voluntary C3PAO assessment', '$30,000 to $100,000 or more', 'Third-party fee for small-to-mid sized contractors'],
          ['Annual upkeep', 'Varies widely', 'Recurring licences, monitoring, training, staff time'],
        ]}
      />

      <H2>How to cut the cost</H2>
      <OL>
        <li><strong>Scope down first.</strong> Find out exactly where CUI enters, lives and leaves. Systems that never see CUI can stay out of scope when the boundary is drawn and documented properly.</li>
        <li><strong>Consider an enclave.</strong> If a handful of engineers or contracts staff handle CUI, a dedicated enclave can be cheaper than raising the whole company to Level 2.</li>
        <li><strong>Do a gap assessment before buying tools.</strong> Buying a platform before you know your gaps is an easy way to overspend. A{' '}
          <In href="/cmmc/nist-800-171-gap-assessment">NIST SP 800-171 gap assessment</In> shows what is actually missing.</li>
        <li><strong>Fix the 5-point items first.</strong> SPRS scoring starts at 110 and subtracts 1, 3 or 5 points per unmet requirement, down to a minimum of -203. The heavily weighted items (such as MFA and FIPS-validated encryption) move your score most. See{' '}
          <In href="/cmmc/sprs-score">how the SPRS score works</In>.</li>
        <li><strong>Reuse what you have.</strong> Many cloud suites already include security features you are paying for but not using.</li>
      </OL>

      <H2>What the Phase 2 suspension means for your budget</H2>
      <p>
        The DFARS CMMC rule (252.204-7021 and 252.204-7025) took effect on November 10, 2025, starting Phase 1. On July 13,
        2026 the Department of War suspended the move to Phase 2, which had been due on November 10, 2026. While the
        suspension lasts, new requirements may only call for Level 1 (Self) or Level 2 (Self), and program offices may not require Level 2 (C3PAO) or Level 3. A CMMC Reform Task Force is reviewing the program. Read the details in{' '}
        <In href="/insights/cmmc-phase-2-suspension">our Phase 2 suspension explainer</In>.
      </p>
      <p>
        For budgeting, that shifts the near-term spend toward readiness and a sound self-assessment. Voluntary C3PAO
        assessments remain available for companies whose primes ask for one. Nothing about the suspension removes the
        underlying work: DFARS 252.204-7012 and NIST SP 800-171 Rev 2 still apply, and a weak self-assessment score in SPRS is
        visible to the contracting officers and primes who check it.
      </p>

      <H3>Conditional status and a POA&amp;M</H3>
      <p>
        Under 32 CFR 170.21, a Level 2 assessment can end in conditional status if the score is at least 88 of 110 and the
        remaining items are allowed on a POA&amp;M; those items must be closed within 180 days. Some requirements may not be
        deferred, so plan to fix the heavily weighted items before you assess. The rule text is on{' '}
        <Ext href="https://www.ecfr.gov/">ecfr.gov</Ext> (32 CFR Part 170).
      </p>

      <H2>Where a Galaxy gap assessment fits</H2>
      <p>
        Galaxy Consulting is a Cyber-AB Registered Provider Organization (RPO) with a Registered Practitioner on staff. It is
        not a C3PAO and does not conduct official assessments; it prepares you. A gap assessment typically takes two to
        three weeks. The Registered Practitioner guides you through all 110 Level 2 practices and delivers:
      </p>
      <UL>
        <li>a review of every applicable practice;</li>
        <li>a written gap report organized by domain;</li>
        <li>a risk-prioritized remediation roadmap;</li>
        <li>an SPRS score estimate; and</li>
        <li>a recommended path (scope, enclave or whole company, and next steps).</li>
      </UL>
      <p>
        From there Galaxy can help with remediation, documentation (SSP, policies, POA&amp;M, data-flow diagrams), and
        self-assessment and SPRS affirmation support. See the full list on the{' '}
        <In href="/cmmc/services">CMMC services page</In>, compare with the{' '}
        <In href="/cmmc/level-1">Level 1 requirements</In> if you only handle FCI, or{' '}
        <In href="/contact">book a free discovery call</In> to talk through your scope.
      </p>
    </BuyerPage>
  );
}
