import type { Metadata } from 'next';
import { pageMeta } from '@/lib/seo';
import BuyerPage, { In, Ext, H2, H3, UL, OL, Note, Table, type Faq } from '@/components/cmmc/BuyerPage';

const PATH = '/cmmc/c3pao-vs-rpo';
const TITLE = "C3PAO vs RPO: Who Assesses CMMC, Who Helps You Prepare";
const DESCRIPTION =
  'C3PAO vs RPO: an RPO advises and prepares you for CMMC; a C3PAO runs the official third-party assessment. Roles, people and when you need each.';

export const metadata: Metadata = pageMeta({ path: PATH, title: TITLE, description: DESCRIPTION });

const faqs: Faq[] = [
  {
    q: 'What is the difference between a C3PAO and an RPO?',
    a: 'An RPO (Registered Provider Organization) is a consulting firm registered with the Cyber AB to advise and prepare contractors for CMMC. A C3PAO (CMMC Third-Party Assessment Organization) is authorized by the Cyber AB to conduct official CMMC assessments. An RPO does not assess or certify anyone.',
  },
  {
    q: 'Can the same company be my RPO and my C3PAO?',
    a: 'Not for the same engagement. CMMC conflict-of-interest rules keep an assessor from assessing work it helped build. If a firm offers both kinds of service, the consulting and the assessment for your company must come from separate, independent providers.',
  },
  {
    q: 'Do I need a C3PAO right now?',
    a: 'Probably not for new contracts. Since the Department of War suspended the move to Phase 2 on July 13, 2026, new requirements may only call for Level 1 (Self) or Level 2 (Self), and program offices may not require a third-party assessment. Voluntary C3PAO assessments are still available if a prime asks for one.',
  },
  {
    q: 'Do I need an RPO at all?',
    a: 'No rule requires one. Some contractors complete the work with their own staff. Many small companies use an RPO because it is faster to have someone who knows the 110 requirements map the gaps, write the documentation and support the self-assessment.',
  },
  {
    q: 'How do I check that a firm is really an RPO or C3PAO?',
    a: 'Look it up in the Cyber AB Marketplace on cyberab.org. Every RPO, C3PAO, Registered Practitioner and assessor is listed there with its current status. If you cannot find the firm, ask why before you sign.',
  },
  {
    q: 'Is Galaxy Consulting a C3PAO?',
    a: 'No. Galaxy Consulting is a Cyber-AB Registered Provider Organization with one Registered Practitioner on staff. It does readiness, gap assessments, remediation, documentation and self-assessment support. It does not conduct official assessments and does not certify anyone.',
  },
];

export default function Page() {
  return (
    <BuyerPage
      path={PATH}
      crumb="C3PAO vs RPO"
      h1="C3PAO vs RPO: who assesses and who helps you prepare"
      lede="An RPO advises you and gets you ready for CMMC; a C3PAO conducts the official third-party assessment. Conflict-of-interest rules mean one firm should not do both for the same client."
      updated={{ iso: '2026-11-02', label: 'November 2, 2026' }}
      faqs={faqs}
      related={[
        { href: '/insights/what-is-a-cmmc-rpo', label: 'What is a CMMC RPO?' },
        { href: '/cmmc/services', label: 'Galaxy CMMC readiness services' },
        { href: '/cmmc/level-2', label: 'CMMC Level 2 requirements' },
        { href: '/cmmc/level-2-assessment-cost', label: 'CMMC Level 2 assessment cost' },
        { href: '/insights/cmmc-phase-2-suspension', label: 'The Phase 2 suspension explained' },
      ]}
    >
      <p>
        Contractors meet two kinds of CMMC firm, and the acronyms make them easy to mix up. The short version: you hire an
        RPO to prepare and a C3PAO to be assessed. If you want the longer background on the advisory side first, read{' '}
        <In href="/insights/what-is-a-cmmc-rpo">What is a CMMC RPO?</In> For the program as a whole, see the{' '}
        <In href="/cmmc">CMMC hub</In>.
      </p>

      <H2>Side-by-side comparison</H2>
      <Table
        head={['', 'RPO', 'C3PAO']}
        rows={[
          ['Full name', 'Registered Provider Organization', 'CMMC Third-Party Assessment Organization'],
          ['Role', 'Advises, prepares, remediates, documents', 'Conducts the official third-party assessment'],
          ['Authorized by', 'Registered with the Cyber AB', 'Authorized by the Cyber AB'],
          ['People', 'Registered Practitioners (RP) and RP Advanced (RPA)', 'Assessors (CCAs) and professionals (CCPs) on the assessment team'],
          ['Deliverables', 'Gap report, roadmap, SSP, policies, POA&M, SPRS support', 'Assessment results recorded for DoW, which determine CMMC status'],
          ['When you need it', 'Before any assessment, and between cycles', 'Only when a contract or prime calls for a third-party assessment'],
        ]}
      />
      <p>
        The most important row is the role. An RPO can tell you what an assessor will look for and help you build it. Only
        an authorized assessment organization can produce an official third-party result, and an RPO does not certify
        anyone.
      </p>

      <H2>Why one firm should not do both</H2>
      <p>
        The CMMC program rule, 32 CFR Part 170, includes conflict-of-interest requirements for the assessment ecosystem. In
        plain terms, an assessor may not grade work that it, or its own organization, helped design or implement. That is
        why a contractor normally uses one firm to prepare and a separate, independent organization for any third-party
        assessment. If a provider offers to do both for you, ask how it keeps them separate and expect a clear answer. The
        rule text is on <Ext href="https://www.ecfr.gov/">ecfr.gov</Ext>.
      </p>

      <H2>The other players you will hear about</H2>
      <UL>
        <li><strong>RP (Registered Practitioner).</strong> An individual registered with the Cyber AB to give CMMC advice. An RP is a consultant and does not certify anyone.</li>
        <li><strong>RPA (Registered Practitioner Advanced).</strong> A registered practitioner with additional training and vetting for more complex advisory work.</li>
        <li><strong>CCP and CCA.</strong> Credentialed people who serve on assessment teams; a CCA can lead or perform assessments for an authorized assessment organization. Galaxy has no CCP or CCA credentials and does not need them for advisory work.</li>
        <li><strong>DIBCAC.</strong> The Defense Industrial Base Cybersecurity Assessment Center, the government team that conducts Level 3 assessments and DoD Medium and High NIST SP 800-171 assessments.</li>
        <li><strong>The Cyber AB.</strong> The accreditation body for the ecosystem. It authorizes C3PAOs and registers RPOs and RPs. It does not set CMMC policy.</li>
        <li><strong>DoW CIO.</strong> The Department of War (formerly DoD) runs the CMMC program through its Chief Information Officer. Official program material is on <Ext href="https://dodcio.defense.gov/">dodcio.defense.gov</Ext>.</li>
      </UL>

      <H2>How to check the Cyber AB Marketplace</H2>
      <OL>
        <li>Go to <Ext href="https://cyberab.org/">cyberab.org</Ext> and open the Marketplace.</li>
        <li>Search by company name and confirm the listing type: RPO, C3PAO, or both.</li>
        <li>For an RPO, check the Registered Practitioners listed with it and confirm the person you will work with is one of them.</li>
        <li>For an assessment organization, confirm its authorization is current before you schedule.</li>
        <li>Compare the name, address and contact details with the proposal you received.</li>
      </OL>
      <Note>
        A Marketplace listing confirms registration or authorization. It does not rate quality, so still ask for a sample
        deliverable and talk to the practitioner who will do the work.
      </Note>

      <H2>How to choose an RPO</H2>
      <p>Questions worth asking before you sign:</p>
      <UL>
        <li>Who is the Registered Practitioner on my engagement, and can I see their Marketplace listing?</li>
        <li>How will you define my CUI boundary, and would an enclave make sense for a company my size?</li>
        <li>What exactly do I receive at the end of the gap assessment, and how long does it take?</li>
        <li>Will you write the SSP and POA&amp;M, or only review mine?</li>
        <li>Do you work with my existing IT provider or require your own tools?</li>
        <li>How do you handle the annual SPRS affirmation between assessment cycles?</li>
      </UL>
      <p>
        Be wary of any firm that promises an outcome. Your company makes the affirmation in SPRS and owns the result; an
        advisor prepares you for it.
      </p>

      <H2>How the Phase 2 suspension changes timing</H2>
      <p>
        On July 13, 2026 the Department of War suspended the move to Phase 2, which had been due November 10, 2026. While the
        suspension is in place, program offices may not require Level 2 (C3PAO) or Level 3 in new requirements, and new
        solicitations may only call for Level 1 (Self) or Level 2 (Self). Voluntary C3PAO assessments remain available, and
        DFARS 252.204-7012 and NIST SP 800-171 Rev 2 still apply. A CMMC Reform Task Force is reviewing the program. See{' '}
        <In href="/insights/cmmc-phase-2-suspension">the suspension explainer</In> for detail.
      </p>
      <H3>What that means in practice</H3>
      <p>
        For now most contractors need readiness help and a sound self-assessment more than an assessor. That is RPO work.
        If a prime asks you for a voluntary third-party assessment, prepare first and then book an independent C3PAO.
        The <In href="/cmmc/assessment-checklist">CMMC assessment checklist</In> shows what to have ready either way.
      </p>

      <H2>Where Galaxy fits</H2>
      <p>
        Galaxy Consulting, LLC is a Cyber-AB Registered Provider Organization with one Registered Practitioner on staff and
        a Service-Disabled Veteran-Owned Small Business. Galaxy is not a C3PAO, does not conduct official assessments and
        does not certify anyone. It prepares you: scope and level determination, gap assessments against the 17 Level 1 or
        110 Level 2 practices, remediation, documentation, and self-assessment and SPRS affirmation support. Galaxy has
        affirmed its own Level 1 and Level 2 self-assessments in SPRS. See{' '}
        <In href="/cmmc/services">CMMC services</In>, read the <In href="/cmmc/faq">CMMC FAQ</In>, or{' '}
        <In href="/contact">book a free discovery call</In>.
      </p>
    </BuyerPage>
  );
}
