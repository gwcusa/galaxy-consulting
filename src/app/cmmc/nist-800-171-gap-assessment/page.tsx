import type { Metadata } from 'next';
import { pageMeta } from '@/lib/seo';
import BuyerPage, { In, H2, H3, UL, OL, Note, Table, ReadinessCta, type Faq } from '@/components/cmmc/BuyerPage';
import { SITE_URL } from '@/lib/site';

export const metadata = {
  title: { absolute: "NIST 800-171 Gap Assessment Service for DoD Contractors" },
};


const PATH = '/cmmc/nist-800-171-gap-assessment';
const TITLE = "NIST 800-171 Gap Assessment Service, MD & DC | RPO";
const DESCRIPTION = 'A NIST 800-171 and CMMC gap assessment led by a Registered Practitioner: gap report by domain, remediation roadmap and SPRS score estimate in 2–3 weeks.';

export const metadata: Metadata = pageMeta({ path: PATH, title: TITLE, description: DESCRIPTION });

const faqs: Faq[] = [
  {
    q: 'How long does the gap assessment take?',
    a: 'It typically takes two to three weeks: about a week for kickoff and scoping, a week for interviews and evidence review, and the final days for the written report and the roadmap readout. Larger or more complex environments can take longer.',
  },
  {
    q: 'Is a gap assessment the same as an official CMMC assessment?',
    a: 'No. A gap assessment is a readiness review. Galaxy Consulting is a Registered Provider Organization (RPO), not a C3PAO, and it does not conduct official assessments. The gap assessment shows where you stand and what to fix before your own self-assessment.',
  },
  {
    q: 'Do you cover Level 1 or Level 2?',
    a: 'Both. If you only handle Federal Contract Information, the review covers the 17 Level 1 practices. If you handle Controlled Unclassified Information, it covers the 110 NIST SP 800-171 Rev 2 requirements that make up Level 2.',
  },
  {
    q: 'Will I get an SPRS score?',
    a: 'You get an SPRS score estimate based on the DoD Assessment Methodology: start at 110 and subtract 1, 3 or 5 points for each requirement that is not met, down to a minimum of -203. You remain responsible for the score you submit and affirm in SPRS.',
  },
  {
    q: 'What do I need to provide?',
    a: 'Your contracts and clauses, a list of systems and where contract data lives, any existing policies, SSP or POA&M, and time with the people who run your IT, HR and facilities. We send a short request list at kickoff.',
  },
  {
    q: 'Can Galaxy also fix the gaps it finds?',
    a: 'Yes, if you want that. Galaxy offers remediation, documentation such as the SSP and POA&M, and self-assessment and SPRS submission support. You can also take the roadmap to your own IT team or provider.',
  },
  {
    q: 'Do you do this remotely?',
    a: 'Yes. We work on site across Maryland, DC and Northern Virginia and run gap assessments remotely for contractors anywhere in the United States.',
  },
];

const schema = [
  {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'NIST SP 800-171 and CMMC gap assessment',
    serviceType: 'NIST SP 800-171 / CMMC gap assessment',
    url: `${SITE_URL}${PATH}`,
    description: DESCRIPTION,
    provider: { '@type': 'Organization', name: 'Galaxy Consulting, LLC', url: 'https://www.galaxyconsultingllc.com' },
    areaServed: [
      { '@type': 'State', name: 'Maryland' },
      { '@type': 'AdministrativeArea', name: 'District of Columbia' },
      { '@type': 'State', name: 'Virginia' },
      { '@type': 'Country', name: 'United States' },
    ],
  },
];

export default function Page() {
  return (
    <BuyerPage
      path={PATH}
      crumb="Gap assessment"
      eyebrow="CMMC service"
      h1="NIST 800-171 and CMMC Gap Assessment"
      lede="Galaxy Consulting's gap assessment tells you, practice by practice, where your company stands against CMMC Level 1 or Level 2 and what to fix first. A Registered Practitioner leads it, it typically takes two to three weeks, and you finish with a written gap report, a prioritized roadmap and an SPRS score estimate."
      updated={{ iso: '2026-11-02', label: 'November 2, 2026' }}
      faqs={faqs}
      schema={schema}
      cta={<ReadinessCta heading="Book a scoping call" text="Tell us about your contracts and systems in a free 30-minute call. We will confirm your likely CMMC level, outline the scope of the gap assessment and explain what we need from you. No obligation." />}
      related={[
        { href: '/insights/nist-800-171-gap-assessment', label: 'What is a NIST 800-171 gap assessment?' },
        { href: '/cmmc/sprs-score', label: 'How the SPRS score works' },
        { href: '/cmmc/level-2', label: 'CMMC Level 2 requirements' },
        { href: '/cmmc/services', label: 'All CMMC services' },
        { href: '/cmmc/assessment-checklist', label: 'CMMC assessment checklist' },
      ]}
    >
      <H2>What the gap assessment is for</H2>
      <p>{"A gap assessment compares how your company actually protects contract information with what the "}<In href="/cmmc">CMMC program</In>{" and NIST SP 800-171 require. It answers three buyer questions: which requirements you already meet, which you do not, and what order to fix them in. If you want the background on the method itself, read our explainer "}<In href="/insights/nist-800-171-gap-assessment">What Is a NIST 800-171 Gap Assessment?</In>{". This page is about buying the service from Galaxy Consulting."}</p>
      <p>{"It is a readiness review, not an official assessment. Galaxy Consulting is a Cyber-AB Registered Provider Organization (RPO) with a Registered Practitioner (RP) on staff. We are not a C3PAO and we do not conduct official CMMC assessments; we help you prepare for your own self-assessment and SPRS affirmation."}</p>

      <H2>What is included</H2>
      <UL>
        <li>{"Scope and level determination: we confirm whether you handle Federal Contract Information (FCI), Controlled Unclassified Information (CUI) or both, and draw your system boundary."}</li>
        <li>{"A review of every applicable practice: the 17 Level 1 practices or the 110 Level 2 requirements across 14 domains."}</li>
        <li>{"Interviews with the people who run your IT, HR, facilities and contracts."}</li>
        <li>{"Evidence review of settings, screenshots, policies and records against each requirement."}</li>
        <li>{"A written report, a remediation roadmap and an SPRS score estimate, walked through with your leadership."}</li>
      </UL>

      <H2>How it runs, week by week</H2>
      <p>{"A gap assessment typically takes two to three weeks. The schedule below is typical; very small or very complex environments move faster or slower."}</p>
      <Table
        head={['When', 'Phase', 'What happens']}
        rows={[
          ['Week 1', 'Kickoff and scoping', 'Contract and clause review, FCI vs CUI decision, system boundary, asset and data-flow inventory, evidence request list'],
          ['Week 2', 'Interviews and evidence review', 'Practice-by-practice interviews, configuration checks, document review, findings logged by domain'],
          ['Week 2–3', 'Report and roadmap readout', 'Written gap report, risk-prioritized roadmap, SPRS score estimate, recommended path, readout meeting with leadership'],
        ]}
      />

      <H2>Deliverables you keep</H2>
      <OL>
        <li>{"A review of all applicable practices, each marked met, partially met or not met, with the evidence seen."}</li>
        <li>{"A written gap report organized by domain, such as Access Control, Identification and Authentication, and Media Protection."}</li>
        <li>{"A risk-prioritized remediation roadmap that puts high-value fixes like MFA and encryption first."}</li>
        <li>{"An SPRS score estimate using the DoD Assessment Methodology, which starts at 110 and subtracts 1, 3 or 5 points per unmet requirement, to a minimum of -203. See our "}<In href="/cmmc/sprs-score">SPRS score guide</In>{"."}</li>
        <li>{"A recommended path: a Level 1 self-assessment or a Level 2 self-assessment."}</li>
      </OL>

      <H2>Level 1 or Level 2 scope</H2>
      <Table
        head={['', 'Level 1', 'Level 2']}
        rows={[
          ['Information', 'FCI', 'CUI'],
          ['Requirements reviewed', '17 practices (FAR 52.204-21)', '110 requirements (NIST SP 800-171 Rev 2), 14 domains'],
          ['What follows', 'Annual self-assessment and annual SPRS affirmation', 'Level 2 (Self): self-assessment every three years, annual affirmation'],
        ]}
      />
      <p>{"Not sure which applies? Start with the "}<In href="/cmmc/level-1">Level 1 guide</In>{" and the "}<In href="/cmmc/level-2">Level 2 guide</In>{". During the Phase 2 suspension announced on July 13, 2026, new requirements may only call for Level 1 (Self) or Level 2 (Self), and DFARS 252.204-7012 and NIST SP 800-171 Rev 2 still apply. Details are in our "}<In href="/insights/cmmc-phase-2-suspension">Phase 2 suspension explainer</In>{"."}</p>

      <H2>What you need to provide</H2>
      <UL>
        <li>{"Your current contracts, subcontracts and any DFARS or CMMC clauses, including flow-downs from primes."}</li>
        <li>{"A list of systems: email, file sharing, cloud apps, laptops, phones, servers and any outside IT provider."}</li>
        <li>{"Existing documents, if any: SSP, policies, procedures, POA&M, network diagrams."}</li>
        <li>{"A point of contact and a few hours from the people who manage IT, HR, facilities and contracts."}</li>
        <li>{"Read-only access or screen-share sessions so we can look at settings rather than take them on trust."}</li>
      </UL>
      <Note>{"Do not send CUI to us by email. We agree a safe way to look at sensitive material during kickoff."}</Note>

      <H2>What happens after the report</H2>
      <p>{"The roadmap is yours to act on with your own team or with us. Galaxy offers each next step as a separate service:"}</p>
      <H3>Remediation</H3>
      <p>{"Putting controls in place, including MFA, encryption, patching and verification testing to confirm each fix works."}</p>
      <H3>Documentation</H3>
      <p>{"Writing your System Security Plan (SSP), policies and procedures, Plan of Action and Milestones (POA&M), CUI boundary documents and data-flow diagrams."}</p>
      <H3>Self-assessment and SPRS</H3>
      <p>{"Supporting your self-assessment against the same requirements and your SPRS submission and affirmation. The "}<In href="/insights/cmmc-level-2-self-assessment-guide">Level 2 self-assessment guide</In>{" explains that process."}</p>
      <p>{"See "}<In href="/cmmc/services">all CMMC services</In>{" for the full list."}</p>

      <H2>Who leads it</H2>
      <p>{"Galaxy Consulting, LLC is a Service-Disabled Veteran-Owned Small Business founded by Charles Cooks, a retired U.S. Army Communications and Electronics Officer. Our Registered Practitioner leads every gap assessment. Galaxy has affirmed its own CMMC Level 1 and Level 2 self-assessments in SPRS. We work from Fort Washington, Maryland, on site across Maryland, DC and Northern Virginia and remotely nationwide. Questions first? Read the "}<In href="/cmmc/faq">CMMC FAQ</In>{" or "}<In href="/contact">contact us</In>{"."}</p>
    </BuyerPage>
  );
}
