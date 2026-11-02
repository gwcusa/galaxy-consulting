import type { Metadata } from 'next';
import { pageMeta } from '@/lib/seo';
import BuyerPage, { In, H2, UL, OL, Note, Table, type Faq } from '@/components/cmmc/BuyerPage';

const PATH = '/cmmc/construction-facilities-contractors';
const TITLE = 'CMMC for Construction & Facilities Contractors | RPO';
const DESCRIPTION = 'CMMC for construction, facilities, A&E and base-operations contractors: what counts as FCI or CUI on a job, Level 1 vs Level 2, flow-downs and first steps.';

export const metadata: Metadata = pageMeta({ path: PATH, title: TITLE, description: DESCRIPTION });

const faqs: Faq[] = [
  {
    q: 'Do construction contractors need CMMC?',
    a: 'If you work on a defense contract or subcontract and handle Federal Contract Information or Controlled Unclassified Information on your own systems, CMMC can apply to you through your contract or a flow-down from the prime. Firms that handle no contract information on their systems may have nothing to assess.',
  },
  {
    q: 'Are building drawings CUI?',
    a: 'Some are. Drawings, specifications and site security plans for defense facilities can be Controlled Unclassified Information, often as controlled technical information. Look for CUI markings and ask your contracting officer or prime if a document is unclear. Unmarked general bid information is usually FCI.',
  },
  {
    q: 'Which level does a small subcontractor need?',
    a: 'Level 1 if you only handle FCI, and Level 2 if you handle CUI. During the Phase 2 suspension announced on July 13, 2026, new requirements may only call for Level 1 (Self) or Level 2 (Self).',
  },
  {
    q: 'Can we keep using field tablets and personal phones?',
    a: 'Yes, but anything that stores or opens contract information is in scope. Many firms keep CUI off personal phones entirely and manage company tablets, or move CUI work into a small enclave so field devices stay out of scope.',
  },
  {
    q: 'What is an enclave?',
    a: 'An enclave is a separate, tightly controlled environment, such as a dedicated cloud workspace or a few managed laptops, where all CUI work happens. It shrinks the part of the business that must meet the 110 Level 2 requirements.',
  },
  {
    q: 'Can Galaxy Consulting help?',
    a: 'Yes. Galaxy Consulting is a Cyber-AB Registered Provider Organization (RPO). It scopes your FCI and CUI, runs a gap assessment, helps with remediation and documentation, and supports your self-assessment and SPRS affirmation. It does not conduct official CMMC assessments.',
  },
];

export default function Page() {
  return (
    <BuyerPage
      path={PATH}
      crumb="Construction & facilities"
      h1="CMMC for Construction, Facilities and A&E Contractors"
      lede="If your construction, facilities-maintenance, architecture-engineering or base-operations firm handles defense contract information on its own computers, phones or file shares, CMMC applies to you, usually at Level 1 for Federal Contract Information and Level 2 when you handle Controlled Unclassified Information such as marked drawings or site security plans."
      updated={{ iso: '2026-11-02', label: 'November 2, 2026' }}
      faqs={faqs}
      related={[
        { href: '/cmmc', label: 'CMMC overview' },
        { href: '/cmmc/level-1', label: 'CMMC Level 1: the 17 practices' },
        { href: '/cmmc/level-2', label: 'CMMC Level 2 requirements' },
        { href: '/cmmc/nist-800-171-gap-assessment', label: 'NIST 800-171 gap assessment service' },
        { href: '/cmmc/dfars-7012-7019-7020-7021', label: 'DFARS 7012, 7019, 7020 and 7021 explained' },
      ]}
    >
      <H2>Why CMMC reaches the job site</H2>
      <p>{"The "}<In href="/cmmc">CMMC program</In>{" is about protecting information, not about what you build. A general contractor renovating a hangar, a mechanical sub on a barracks project, a design firm drawing a new facility and a base-operations company running maintenance all receive contract information from the Department of War (formerly DoD) or a prime. Where that information lands on your email, laptops, tablets or shared drives, those systems fall within scope."}</p>
      <p>{"The CMMC program rule, 32 CFR Part 170, took effect on December 16, 2024, and the DFARS clause 252.204-7021 started Phase 1 on November 10, 2025. On July 13, 2026 the Department of War suspended the move to Phase 2. During the suspension new requirements may only call for Level 1 (Self) or Level 2 (Self), while DFARS 252.204-7012 and NIST SP 800-171 Rev 2 still apply wherever those clauses are in your contract."}</p>

      <H2>FCI vs CUI in construction terms</H2>
      <p>{"Federal Contract Information (FCI) is information provided by or generated for the government under a contract that is not intended for public release. Controlled Unclassified Information (CUI) is a narrower category that the government requires you to safeguard, and it is usually marked."}</p>
      <Table
        head={['Typical item on a project', 'Usually', 'Why']}
        rows={[
          ['Contract, task order, schedule, invoices, RFIs, daily reports', 'FCI', 'Contract information not meant for public release'],
          ['Drawings and specifications marked CUI', 'CUI', 'Marked by the government; often controlled technical information'],
          ['Site security plans, access-control or physical security layouts', 'Often CUI', 'Describe how a defense facility is protected'],
          ['Utility, communications or infrastructure drawings for a secure facility', 'Often CUI', 'Frequently designated as controlled technical information'],
          ['Publicly posted solicitation documents', 'Neither', 'Already released to the public'],
        ]}
      />
      <p>{"Markings matter. A banner or portion marking that reads CUI tells you the document needs Level 2 protection. If a drawing set arrives unmarked but looks sensitive, ask the prime or contracting officer before treating it as ordinary FCI."}</p>

      <H2>Level 1 or Level 2 for your firm</H2>
      <UL>
        <li><strong className="text-white">{"Level 1."}</strong>{" You handle only FCI. You meet the 17 practices drawn from FAR 52.204-21, complete an annual self-assessment and make an annual affirmation in SPRS. See "}<In href="/cmmc/level-1">CMMC Level 1</In>{"."}</li>
        <li><strong className="text-white">{"Level 2."}</strong>{" You handle CUI, such as marked drawings or security plans. You meet the 110 requirements of NIST SP 800-171 Rev 2 across 14 domains; Level 2 (Self) means a self-assessment every three years with annual affirmation. See "}<In href="/cmmc/level-2">CMMC Level 2</In>{"."}</li>
      </UL>
      <p>{"Your SPRS score for Level 2 starts at 110 and loses 1, 3 or 5 points for each unmet requirement, down to -203. Our "}<In href="/cmmc/sprs-score">SPRS score guide</In>{" explains the scoring."}</p>

      <H2>Flow-downs from primes</H2>
      <p>{"Most small construction and trade firms meet CMMC through their prime contractor. When the prime's contract includes DFARS 252.204-7012 or 252.204-7021, the prime has to flow the requirement down to subcontractors that will handle FCI or CUI, at the level that matches the information shared. In practice that shows up as a new clause in your subcontract, a supplier questionnaire, or a request for your SPRS score before award."}</p>
      <p>{"Read the clause before you sign and ask the prime exactly what information you will receive. If you will only see schedules and invoices, Level 1 may be enough. If you will download marked drawings, plan for Level 2. Our "}<In href="/cmmc/dfars-7012-7019-7020-7021">DFARS clause guide</In>{" decodes the clause numbers."}</p>

      <H2>Small-firm IT realities</H2>
      <p>{"Construction and facilities firms rarely look like an office-only IT shop. These are the situations we see most often and why they matter for scope:"}</p>
      <UL>
        <li>{"Shared or generic email accounts used by several estimators or supervisors, which break the rule that each user is identified."}</li>
        <li>{"Field tablets and laptops in trucks and trailers that open drawings and are easily lost."}</li>
        <li>{"Plan rooms, plotters and paper drawing sets that need physical protection and proper disposal."}</li>
        <li>{"File sharing with subs and suppliers through consumer links or personal cloud accounts."}</li>
        <li>{"Personal phones used for email, photos of drawings and text messages about the job."}</li>
        <li>{"An outside IT provider, or a family member, who manages everything without written procedures."}</li>
      </UL>

      <H2>Scoping ideas that keep the effort manageable</H2>
      <p>{"The cheapest control is the one you do not need. Good scoping keeps CUI in as few places as possible:"}</p>
      <UL>
        <li>{"Set up a CUI enclave, such as a dedicated cloud workspace or a few managed laptops, where all marked drawings are stored and opened."}</li>
        <li>{"Keep CUI off personal phones and unmanaged tablets, and give field staff managed devices with MFA and encryption if they must view it."}</li>
        <li>{"Replace consumer file-sharing links with one controlled exchange for subs and suppliers."}</li>
        <li>{"Lock the plan room, log who takes drawing sets out, and shred or destroy prints at closeout."}</li>
        <li>{"Give each person their own account; retire shared logins."}</li>
      </UL>
      <Note>{"Scoping decisions belong in writing. Your System Security Plan should describe the boundary, the assets inside it and how CUI flows to and from subs."}</Note>

      <H2>Practical first steps</H2>
      <OL>
        <li>{"Pull every active defense contract and subcontract and list the DFARS and CMMC clauses in each."}</li>
        <li>{"Ask each prime what information you will receive and whether any of it is marked CUI."}</li>
        <li>{"List where project information lives today: email, shared drives, cloud apps, tablets, phones and the plan room."}</li>
        <li>{"Decide whether you need Level 1 or Level 2, and whether an enclave would shrink your scope."}</li>
        <li>{"Turn on MFA for email and remote access and make sure every user has a named account."}</li>
        <li>{"Run a gap assessment against the applicable practices and estimate your SPRS score."}</li>
        <li>{"Fix the gaps, write your SSP and POA&M, then complete your self-assessment and affirm in SPRS."}</li>
      </OL>
      <p>{"Use the "}<In href="/cmmc/assessment-checklist">CMMC assessment checklist</In>{" to work through these steps, or have a Registered Practitioner run the "}<In href="/cmmc/nist-800-171-gap-assessment">gap assessment</In>{" for you."}</p>

      <H2>How Galaxy Consulting helps</H2>
      <p>{"Galaxy Consulting, LLC is a veteran-owned Cyber-AB Registered Provider Organization (RPO) in Fort Washington, Maryland, with one Registered Practitioner on staff. We scope FCI and CUI, run gap assessments, help with remediation and documentation, and support your self-assessment and SPRS affirmation, on site across Maryland, DC and Northern Virginia and remotely nationwide. We are not a C3PAO and do not conduct official assessments. See our "}<In href="/cmmc/services">CMMC services</In>{", the "}<In href="/cmmc/faq">CMMC FAQ</In>{", or "}<In href="/contact">book a free readiness call</In>{"."}</p>
    </BuyerPage>
  );
}
