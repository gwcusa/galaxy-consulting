import type { Metadata } from 'next';
import { pageMeta } from '@/lib/seo';
import BuyerPage, { In, H2, UL, Note, Table, type Faq } from '@/components/cmmc/BuyerPage';
import { SITE_URL } from '@/lib/site';

const PATH = '/cmmc/maryland-dc-virginia';
const TITLE = "CMMC Consultant in Maryland, DC & Northern Virginia | RPO";
const DESCRIPTION = 'CMMC readiness for defense contractors in Maryland, DC and Northern Virginia: scoping, gap assessments, SSP and SPRS support from a veteran-owned RPO.';

export const metadata: Metadata = pageMeta({ path: PATH, title: TITLE, description: DESCRIPTION });

const faqs: Faq[] = [
  {
    q: 'Does Galaxy Consulting work on site in Maryland, DC and Virginia?',
    a: 'Yes. Galaxy Consulting works on site across Maryland, the District of Columbia and Northern Virginia from its office in Fort Washington, Maryland, and supports contractors elsewhere in the United States remotely.',
  },
  {
    q: 'Is Galaxy Consulting a C3PAO?',
    a: 'No. Galaxy Consulting is a Cyber-AB Registered Provider Organization (RPO) with a Registered Practitioner on staff. It helps you prepare and supports your self-assessment, but it does not conduct official CMMC assessments.',
  },
  {
    q: 'Which CMMC level do contractors in the region need right now?',
    a: 'It depends on the information you handle. Federal Contract Information calls for Level 1, and Controlled Unclassified Information calls for Level 2. During the Phase 2 suspension announced on July 13, 2026, new requirements may only call for Level 1 (Self) or Level 2 (Self).',
  },
  {
    q: 'Do I still have to meet DFARS 252.204-7012 during the suspension?',
    a: 'Yes. DFARS 252.204-7012 and NIST SP 800-171 Rev 2 still apply to contracts that include the clause. The suspension paused the move to Phase 2, not your existing safeguarding obligations.',
  },
  {
    q: 'How long does a gap assessment take?',
    a: 'A gap assessment typically takes two to three weeks, from kickoff and scoping through interviews, evidence review and the report readout.',
  },
  {
    q: 'Can you help a subcontractor that only received a flow-down clause from its prime?',
    a: 'Yes. Many small firms first meet CMMC through a prime contractor flow-down. We start by reading the clause with you, working out whether you hold FCI or CUI, and setting the smallest sensible scope.',
  },
];

const schema = [
  {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'CMMC readiness support for Maryland, DC and Virginia defense contractors',
    serviceType: 'CMMC readiness and NIST SP 800-171 self-assessment support',
    url: `${SITE_URL}${PATH}`,
    provider: { '@type': 'Organization', name: 'Galaxy Consulting, LLC', url: 'https://www.galaxyconsultingllc.com' },
    areaServed: [
      { '@type': 'State', name: 'Maryland' },
      { '@type': 'AdministrativeArea', name: 'District of Columbia' },
      { '@type': 'State', name: 'Virginia' },
    ],
  },
];

export default function Page() {
  return (
    <BuyerPage
      path={PATH}
      crumb="Maryland, DC & Virginia"
      h1="CMMC Readiness for Maryland, DC and Northern Virginia Contractors"
      lede="If you hold a defense contract or subcontract in Maryland, DC or Northern Virginia, Galaxy Consulting can scope your CMMC level, run your gap assessment and prepare your self-assessment, on site across the region and remotely nationwide. We are a veteran-owned Cyber-AB Registered Provider Organization (RPO) based in Fort Washington, Maryland."
      updated={{ iso: '2026-11-02', label: 'November 2, 2026' }}
      faqs={faqs}
      schema={schema}
      related={[
        { href: '/cmmc', label: 'CMMC overview' },
        { href: '/cmmc/nist-800-171-gap-assessment', label: 'NIST 800-171 gap assessment service' },
        { href: '/cmmc/level-2', label: 'CMMC Level 2 requirements' },
        { href: '/cmmc/construction-facilities-contractors', label: 'CMMC for construction and facilities contractors' },
        { href: '/insights/cmmc-phase-2-suspension', label: 'What the Phase 2 suspension means' },
        { href: '/cmmc/locations', label: 'All CMMC markets we serve' },
      ]}
    >
      <H2>Why CMMC matters so much in this region</H2>
      <p>{"The National Capital Region and the surrounding states are one of the places where defense contracting work concentrates in the United States. Washington, DC, Northern Virginia and suburban Maryland host federal headquarters, program offices and the prime contractors and small businesses that support them. Further out, several major Department of War (formerly DoD) installations anchor their own clusters of suppliers and service firms."}</p>
      <p>{"If your company supports any of that work, the contract clauses that bring in the "}<In href="/cmmc">Cybersecurity Maturity Model Certification (CMMC) program</In>{" are likely to reach you, either directly in your own award or through a flow-down from a prime. The rules are the same everywhere; what differs locally is how many of your customers, primes and competitors are dealing with the same requirements at the same time."}</p>

      <H2>Defense hubs across Maryland, DC and Virginia</H2>
      <p>{"These are some of the well-known installations and hubs where defense contracting work gathers in the region. We list them for orientation only; Galaxy Consulting does not claim to work with these installations or with their contractors."}</p>
      <Table
        head={['Hub', 'State', 'General mission area']}
        rows={[
          ['Fort Meade', 'Maryland', 'Home to the National Security Agency and U.S. Cyber Command'],
          ['Naval Air Station Patuxent River (Pax River)', 'Maryland', 'Naval aviation research, test and evaluation'],
          ['Aberdeen Proving Ground', 'Maryland', 'Army test and evaluation'],
          ['Marine Corps Base Quantico', 'Virginia', 'Marine Corps training and education'],
          ['Norfolk and Hampton Roads', 'Virginia', 'Naval Station Norfolk and a major naval hub'],
          ['National Capital Region', 'DC, Northern Virginia, suburban Maryland', 'Federal and defense headquarters, program offices and their contractors'],
        ]}
      />
      <p>{"Firms that support these missions range from engineering, IT and professional services companies to construction, facilities and logistics subcontractors. Each one that handles Federal Contract Information (FCI) or Controlled Unclassified Information (CUI) on its own systems falls inside CMMC scope."}</p>

      <H2>Where CMMC stands today</H2>
      <p>{"The CMMC program rule, 32 CFR Part 170, took effect on December 16, 2024. The DFARS rule that puts CMMC into contracts, DFARS 252.204-7021, took effect on November 10, 2025, which started Phase 1. On July 13, 2026 the Department of War suspended the move to Phase 2, which had been due on November 10, 2026."}</p>
      <UL>
        <li>{"During the suspension, new requirements may only call for Level 1 (Self) or Level 2 (Self)."}</li>
        <li>{"Program offices may not require Level 2 (C3PAO) or Level 3 while the suspension is in effect."}</li>
        <li>{"DFARS 252.204-7012 and NIST SP 800-171 Rev 2 still apply, so CUI safeguarding obligations have not paused."}</li>
      </UL>
      <p>{"For a fuller explanation, read "}<In href="/insights/cmmc-phase-2-suspension">what the Phase 2 suspension means for contractors</In>{" and our plain-language guide to the "}<In href="/cmmc/dfars-7012-7019-7020-7021">DFARS 7012, 7019, 7020 and 7021 clauses</In>{"."}</p>

      <H2>Level 1 or Level 2: the first question to answer</H2>
      <p>{"Your level follows the information you handle, not your size or location. "}<In href="/cmmc/level-1">CMMC Level 1</In>{" covers 17 practices drawn from the 15 requirements in FAR 52.204-21 and applies when you handle FCI. It requires an annual self-assessment and an annual affirmation in the Supplier Performance Risk System (SPRS)."}</p>
      <p><In href="/cmmc/level-2">{"CMMC Level 2"}</In>{" covers the 110 requirements of NIST SP 800-171 Rev 2 across 14 domains and applies when you handle CUI. Level 2 (Self) means a self-assessment every three years with an annual affirmation. Your SPRS score starts at 110 and loses 1, 3 or 5 points for each requirement that is not met, down to a minimum of -203. Our "}<In href="/cmmc/sprs-score">SPRS score guide</In>{" walks through the math."}</p>

      <H2>How we support contractors in the region</H2>
      <p>{"Galaxy Consulting has one Registered Practitioner (RP) on staff and offers the same services on site across Maryland, DC and Northern Virginia and remotely nationwide:"}</p>
      <UL>
        <li><strong className="text-white">{"Free discovery call."}</strong>{" We read your clauses and talk through your likely level."}</li>
        <li><strong className="text-white">{"Scope and level determination."}</strong>{" We map your system boundary and separate FCI from CUI."}</li>
        <li><strong className="text-white">{"Gap assessment."}</strong>{" Our RP reviews all 17 Level 1 or 110 Level 2 practices and delivers a written gap report by domain, a risk-prioritized remediation roadmap, an SPRS score estimate and a recommended self-assessment path. See the "}<In href="/cmmc/nist-800-171-gap-assessment">gap assessment service</In>{"."}</li>
        <li><strong className="text-white">{"Remediation."}</strong>{" Controls, MFA, encryption, patching and verification testing."}</li>
        <li><strong className="text-white">{"Documentation."}</strong>{" System Security Plan (SSP), policies, procedures, POA&M, CUI boundary documents and data-flow diagrams."}</li>
        <li><strong className="text-white">{"Self-assessment and SPRS support."}</strong>{" Help with your self-assessment, SPRS submission and affirmation."}</li>
      </UL>
      <p>{"The full list of offerings is on our "}<In href="/cmmc/services">CMMC services page</In>{"."}</p>

      <H2>Why a local, veteran-owned RPO</H2>
      <p>{"Galaxy Consulting, LLC is a Service-Disabled Veteran-Owned Small Business (SDVOSB) founded by Charles Cooks, President and CEO and a retired U.S. Army Communications and Electronics Officer. Our office is at 8507 Oxon Hill Road, Suite 200, Fort Washington, Maryland, in Prince George's County just south of DC. Galaxy has affirmed its own CMMC Level 1 and Level 2 self-assessments in SPRS, so we have worked through the same process we help you with."}</p>
      <p>{"Our "}<In href="/past-performance">past performance</In>{" includes work for the Department of Veterans Affairs, U.S. Marine Forces Pacific, the Department of the Navy and Maryland DoIT. Being in the region means we can sit with your team, walk the office or plan room, and look at the actual laptops, shared drives and field devices that make up your scope."}</p>
      <Note>{"Galaxy Consulting is an RPO, not a C3PAO. We do not conduct official CMMC assessments. Our work is readiness, assessment preparation and self-assessment support. Learn "}<In href="/insights/what-is-a-cmmc-rpo">what a CMMC RPO does</In>{" and how it differs in our "}<In href="/cmmc/c3pao-vs-rpo">C3PAO vs RPO comparison</In>{"."}</Note>

      <H2>Getting started</H2>
      <p>{"Gather your current contracts and any CMMC or DFARS clauses, a rough list of where contract information lives (email, file shares, cloud apps, laptops and phones) and the name of whoever manages your IT. Then book a free readiness call through our "}<In href="/contact">contact page</In>{" or call 240-324-7888. You can also start on your own with the "}<In href="/cmmc/assessment-checklist">CMMC assessment checklist</In>{" and the "}<In href="/cmmc/faq">CMMC FAQ</In>{"."}</p>
    </BuyerPage>
  );
}
