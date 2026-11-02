import type { Metadata } from 'next';
import { pageMeta } from '@/lib/seo';
import BuyerPage, { In, Ext, H2, H3, UL, OL, Note, Table, type Faq } from '@/components/cmmc/BuyerPage';

const PATH = '/cmmc/dfars-7012-7019-7020-7021';
const TITLE = 'DFARS 7012, 7019, 7020 & 7021 Explained for Subcontractors';
const DESCRIPTION =
  'DFARS 252.204-7012, 7019, 7020 and 7021 explained: what each clause requires, the SPRS score, CMMC status, flow-down, and what subcontractors must do.';

export const metadata: Metadata = pageMeta({ path: PATH, title: TITLE, description: DESCRIPTION });

const faqs: Faq[] = [
  {
    q: 'What does DFARS 252.204-7021 require?',
    a: 'DFARS 252.204-7021 is the CMMC clause. It requires you to have and keep a current CMMC status at the level the contract names, for the whole contract, on every system that handles FCI or CUI. You give the contracting officer your CMMC unique identifiers (UIDs) from SPRS, keep a current self-assessment and annual affirmation in SPRS, and flow the right level down to subcontractors.',
  },
  {
    q: 'What is the difference between DFARS 7012 and 7021?',
    a: 'DFARS 252.204-7012 is the security obligation itself: implement NIST SP 800-171, report cyber incidents to DoD within 72 hours, use FedRAMP Moderate-equivalent cloud for covered defense information, and flow the clause down. DFARS 252.204-7021 adds the CMMC layer: proof of a current CMMC status in SPRS at the required level.',
  },
  {
    q: 'Do 7019 and 7020 still matter now that CMMC exists?',
    a: 'Yes. They require a current NIST SP 800-171 assessment score, not more than three years old, posted in SPRS for each covered system. Primes must confirm a subcontractor has a current score before awarding a subcontract that involves NIST SP 800-171.',
  },
  {
    q: 'Did the Phase 2 suspension remove these clauses?',
    a: 'No. The July 13, 2026 suspension stopped the move to Phase 2, so new requirements may only call for Level 1 (Self) or Level 2 (Self). DFARS 252.204-7012, 7019, 7020 and 7021 remain in effect, and NIST SP 800-171 Rev 2 still applies.',
  },
  {
    q: 'I am a subcontractor. Which clauses apply to me?',
    a: 'Whatever your prime flows down. 7012 flows to subcontracts involving covered defense information, 7020 flows to subcontracts generally (except COTS items), and 7021 requires the prime to flow down the correct CMMC level. Read your purchase order or subcontract terms and search for each clause number.',
  },
  {
    q: 'What is the 72-hour rule?',
    a: 'Under DFARS 252.204-7012 you must report a cyber incident affecting covered defense information to DoD through the DIBNet portal within 72 hours of discovery, and preserve images of affected systems for at least 90 days. You need a DoD-approved medium assurance certificate to file the report.',
  },
];

export default function Page() {
  return (
    <BuyerPage
      path={PATH}
      crumb="DFARS 7012 / 7019 / 7020 / 7021"
      h1="DFARS 7012, 7019, 7020 and 7021 explained"
      lede="DFARS 252.204-7012 is the security obligation (NIST SP 800-171 and 72-hour incident reporting); 7019 and 7020 require a current NIST SP 800-171 score in SPRS; 7021 (with the 7025 notice) requires a current CMMC status at the level your contract names."
      updated={{ iso: '2026-11-02', label: 'November 2, 2026' }}
      faqs={faqs}
      related={[
        { href: '/cmmc/sprs-score', label: 'How the SPRS score works' },
        { href: '/insights/cmmc-sprs-annual-affirmation', label: 'The annual SPRS affirmation' },
        { href: '/cmmc/level-2', label: 'CMMC Level 2 requirements' },
        { href: '/cmmc/level-1', label: 'CMMC Level 1 requirements' },
        { href: '/insights/cmmc-phase-2-suspension', label: 'The Phase 2 suspension explained' },
      ]}
    >
      <p>
        If you hold or bid on Department of War (formerly DoD) work, these clauses are usually why you are reading about
        CMMC at all. They are separate obligations that build on each other. This page explains each one, how they fit, and
        what a subcontractor should do on finding them in a purchase order. For the program overview, see the{' '}
        <In href="/cmmc">CMMC hub</In>.
      </p>

      <H2>The four clauses at a glance</H2>
      <Table
        head={['Clause', 'What it requires', 'What you must do', 'Evidence']}
        rows={[
          ['252.204-7012', 'Safeguard covered defense information; report cyber incidents', 'Implement NIST SP 800-171, report within 72 hours, use FedRAMP Moderate-equivalent cloud, flow down', 'SSP, POA&M, incident response plan, cloud provider documentation'],
          ['252.204-7019', 'Notice: a current NIST SP 800-171 assessment is needed to be considered for award', 'Post a current score (not older than 3 years) in SPRS for each covered system', 'SPRS record of your summary score'],
          ['252.204-7020', 'NIST SP 800-171 DoD Assessment Methodology', 'Do a Basic (self) assessment; give DoD access for Medium or High; check subcontractor scores', 'SPRS score, assessment date, system scope'],
          ['252.204-7021', 'Hold the CMMC status the contract requires', 'Keep status current, affirm annually in SPRS, give CMMC UIDs to the CO, flow down the level', 'CMMC UIDs, self-assessment results and affirmation in SPRS'],
        ]}
      />

      <H2>DFARS 252.204-7012: the security obligation</H2>
      <p>
        <Ext href="https://www.acquisition.gov/dfars/252.204-7012-safeguarding-covered-defense-information-and-cyber-incident-reporting.">DFARS 252.204-7012</Ext>{' '}
        is the foundation. Covered contractor information systems must meet NIST SP 800-171. Cyber incidents affecting covered
        defense information must be reported to DoD at dibnet.dod.mil within 72 hours of discovery, and images of affected
        systems kept for at least 90 days. Cloud services that store covered defense information must meet security
        requirements equivalent to the FedRAMP Moderate baseline. The clause flows down, unaltered, to subcontracts for
        operationally critical support or that involve covered defense information.
      </p>

      <H2>DFARS 252.204-7019 and 7020: the SPRS score</H2>
      <p>
        <Ext href="https://www.acquisition.gov/dfars/252.204-7019-notice-nist-sp-800-171-dod-assessment-requirements.">DFARS 252.204-7019</Ext>{' '}
        is a solicitation notice: to be considered for award, you need a current NIST SP 800-171 assessment (not more than
        three years old unless the solicitation sets a shorter time) for each covered system, with the summary score posted in{' '}
        <Ext href="https://www.sprs.csd.disa.mil/">SPRS</Ext>.
      </p>
      <p>
        <Ext href="https://www.acquisition.gov/dfars/252.204-7020-nist-sp-800-171dod-assessment-requirements.">DFARS 252.204-7020</Ext>{' '}
        sets the DoD Assessment Methodology. A Basic assessment is your own self-assessment. Medium and High assessments are
        government reviews, and you must give DoD access to facilities, systems and people for them. Scoring starts at 110 and
        subtracts 1, 3 or 5 points per unmet requirement, down to -203. 7020 also flows down: before awarding a subcontract
        that involves NIST SP 800-171, the prime must confirm the subcontractor has a current score. See{' '}
        <In href="/cmmc/sprs-score">how the SPRS score works</In>.
      </p>

      <H2>DFARS 252.204-7021 and 7025: CMMC status</H2>
      <p>
        The DFARS CMMC rule took effect November 10, 2025. The 252.204-7025 provision tells offerors which CMMC level a
        solicitation requires. The{' '}
        <Ext href="https://www.acquisition.gov/dfars/252.204-7021-contractor-compliance-cybersecurity-maturity-model-certification-level-requirements.">252.204-7021 clause</Ext>{' '}
        then requires you to:
      </p>
      <UL>
        <li>have and maintain, for the duration of the contract, a current CMMC status at the required level or higher;</li>
        <li>process, store or transmit FCI or CUI only on systems that have that status;</li>
        <li>give the contracting officer the CMMC unique identifiers (UIDs) SPRS issues for your systems, and any changes;</li>
        <li>keep a current self-assessment result and an annual affirmation of continuous compliance in SPRS (see{' '}
          <In href="/insights/cmmc-sprs-annual-affirmation">the annual SPRS affirmation</In>);</li>
        <li>close out a valid POA&amp;M if your status is conditional; and</li>
        <li>flow the correct CMMC level down to subcontractors and confirm their status before award.</li>
      </UL>
      <p>
        Level 1 means the 17 practices drawn from FAR 52.204-21 for Federal Contract Information, with an annual
        self-assessment and affirmation. Level 2 means the 110 NIST SP 800-171 Rev 2 requirements for CUI. Details are on the{' '}
        <In href="/cmmc/level-1">Level 1</In> and <In href="/cmmc/level-2">Level 2</In> pages.
      </p>

      <H2>How the clauses fit together</H2>
      <OL>
        <li><strong>7012</strong> says what security you must have and how to report incidents.</li>
        <li><strong>7019 and 7020</strong> make you score that security and post the score in SPRS.</li>
        <li><strong>7021 and 7025</strong> require a CMMC status at a named level, kept current and affirmed every year.</li>
      </OL>
      <p>
        One body of work (implementing NIST SP 800-171 on the systems that hold CUI) satisfies the substance of all of them.
        The clauses differ in what evidence they ask for and where it goes.
      </p>

      <H2>What the suspension changed, and what it did not</H2>
      <p>
        On July 13, 2026 the Department of War suspended the move to Phase 2, which had been due November 10, 2026. During the
        suspension, new requirements may only call for Level 1 (Self) or Level 2 (Self), and program offices may not require Level 2 (C3PAO) or Level 3. A CMMC Reform Task Force is reviewing the program; see{' '}
        <In href="/insights/cmmc-phase-2-suspension">the suspension explainer</In>.
      </p>
      <p>
        What did not change: 7012, 7019, 7020 and 7021 are still in contracts, NIST SP 800-171 Rev 2 still applies, incident
        reporting still runs on a 72-hour clock, and SPRS scores and affirmations are still checked.
      </p>

      <H2>How to read your subcontract</H2>
      <p>
        Primes often incorporate clauses by number in a list of flow-downs rather than in full text. Search the purchase
        order, subcontract and any attached terms for &quot;252.204-7012&quot;, &quot;7019&quot;, &quot;7020&quot;,
        &quot;7021&quot;, &quot;CMMC&quot;, &quot;covered defense information&quot; and &quot;CUI&quot;. Also check whether the
        prime has marked any drawings or data you will receive as CUI.
      </p>
      <H3>If your subcontract has X, do Y</H3>
      <Table
        head={['If you find', 'Then']}
        rows={[
          ['7012, or you will receive CUI', 'Implement NIST SP 800-171, write an SSP, set up 72-hour incident reporting and check your cloud'],
          ['7019 or 7020', 'Complete a Basic assessment and post a current score in SPRS'],
          ['7021 at Level 1', 'Complete the 17-practice self-assessment and affirm annually in SPRS'],
          ['7021 at Level 2 (Self)', 'Complete the 110-requirement self-assessment, enter results in SPRS and affirm annually'],
          ['No clauses, but you handle FCI', 'Expect FAR 52.204-21 and Level 1; confirm with the prime'],
        ]}
      />
      <Note>
        General information, not legal advice. Confirm clause applicability with your contracting officer, your prime or
        counsel. Clause text is published on <Ext href="https://www.acquisition.gov/">acquisition.gov</Ext>.
      </Note>

      <H2>How Galaxy helps</H2>
      <p>
        Galaxy Consulting is a Cyber-AB Registered Provider Organization (RPO). It is not an assessment organization and does
        not certify anyone. Galaxy reads your clauses with you, determines scope and level (FCI vs CUI, system boundary), runs
        a gap assessment, helps remediate, writes the SSP and POA&amp;M, and supports your self-assessment and SPRS
        affirmation. See <In href="/cmmc/services">CMMC services</In> or{' '}
        <In href="/contact">book a free discovery call</In>.
      </p>
    </BuyerPage>
  );
}
