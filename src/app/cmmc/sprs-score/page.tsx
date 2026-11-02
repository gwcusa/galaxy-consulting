import type { Metadata } from 'next';
import { pageMeta } from '@/lib/seo';
import BuyerPage, { In, H2, UL, OL, Note, Table, type Faq } from '@/components/cmmc/BuyerPage';
import SprsEstimator from '@/components/cmmc/SprsEstimator';
import { SITE_URL } from '@/lib/site';

const PATH = '/cmmc/sprs-score';
const TITLE = 'SPRS Score Calculator: NIST 800-171 Estimator (110 to -203)';
const DESCRIPTION =
  'Free SPRS score calculator: mark each NIST SP 800-171 requirement met or not met and see your DoD Assessment Methodology score, from 110 down to -203.';

export const metadata: Metadata = pageMeta({ path: PATH, title: TITLE, description: DESCRIPTION });

const FAQS: Faq[] = [
  { q: 'How is an SPRS score calculated?', a: 'Under the NIST SP 800-171 DoD Assessment Methodology you start at 110 and subtract the point value of every requirement that is not fully implemented. Each requirement is worth 5, 3 or 1 point, so the lowest possible score is -203. Two requirements, multi-factor authentication (3.5.3) and FIPS-validated encryption (3.13.11), can lose 3 points instead of 5 when they are partly in place.' },
  { q: 'What is a good SPRS score?', a: 'The goal is 110, which means every requirement is met. For CMMC Level 2, a score of at least 88 is the floor for Conditional status, and the remaining gaps must be eligible for a POA&M and be closed within 180 days. A negative score is common at the start and simply shows how much work is left.' },
  { q: 'Can I post the number from this calculator in SPRS?', a: 'No. This page gives an estimate for planning. The score you post comes from your own assessment of each requirement against your system security plan and evidence, entered and affirmed by your company in SPRS.' },
  { q: 'Why does a missing SSP matter so much?', a: 'Requirement 3.12.4, the system security plan, carries no point value, but without a current SSP an assessment cannot be completed at all. Write the SSP first; it is also where you describe how each of the other 109 requirements is met.' },
  { q: 'Which unmet requirements cannot go on a POA&M?', a: 'Under 32 CFR 170.21, a Level 2 POA&M may only hold 1-point requirements, plus 3.13.11 when encryption is used but not FIPS-validated. Requirements 3.1.20, 3.1.22, 3.10.3, 3.10.4, 3.10.5 and 3.12.4 may never be on one. The calculator counts these for you.' },
  { q: 'How often do I update my SPRS score?', a: 'DFARS 252.204-7019 calls for a current assessment, no more than three years old, for each covered system. Under CMMC, a Level 2 self-assessment is repeated every three years and affirmed every year. Update SPRS whenever your score changes materially, for example after you close gaps.' },
];

const toolSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'SPRS score estimator (NIST SP 800-171 DoD Assessment Methodology)',
  url: `${SITE_URL}${PATH}`,
  applicationCategory: 'BusinessApplication',
  operatingSystem: 'Any (runs in the browser)',
  isAccessibleForFree: true,
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  publisher: { '@type': 'Organization', name: 'Galaxy Consulting, LLC', url: SITE_URL },
};

export default function SprsScorePage() {
  return (
    <BuyerPage
      path={PATH}
      crumb="SPRS Score Calculator"
      eyebrow="Free tool"
      h1="SPRS score calculator for NIST SP 800-171"
      lede="Your SPRS score starts at 110 and drops by 5, 3 or 1 point for each NIST SP 800-171 requirement you have not met. Mark each of the 110 requirements below and the estimator shows your score as you go. Nothing you enter leaves your browser."
      updated={{ iso: '2026-11-02', label: 'November 2, 2026' }}
      faqs={FAQS}
      schema={[toolSchema]}
      related={[
        { href: '/cmmc/assessment-checklist', label: 'CMMC assessment checklist: all 110 practices by domain' },
        { href: '/cmmc/nist-800-171-gap-assessment', label: 'NIST 800-171 and CMMC gap assessment service' },
        { href: '/insights/cmmc-sprs-annual-affirmation', label: 'The CMMC annual affirmation in SPRS: who signs and when' },
        { href: '/cmmc/dfars-7012-7019-7020-7021', label: 'DFARS 7012, 7019, 7020 and 7021 explained' },
        { href: '/cmmc/level-2', label: 'CMMC Level 2: the 110 practices and how to prepare' },
      ]}
    >
      <H2>Estimate your score</H2>
      <p>Every requirement starts as <strong className="text-white">Met</strong>, so the score starts at 110. Open each family and switch a requirement to <strong className="text-white">Not met</strong> if it is not fully in place today. For multi-factor authentication and FIPS-validated encryption you can also choose the partial option, which costs 3 points instead of 5. Be strict: a requirement that is only partly done counts as not met everywhere else.</p>
      <SprsEstimator />
      <Note>
        An estimate for planning only, based on the NIST SP 800-171 DoD Assessment Methodology (Version 1.2.1) scoring table. It is not an assessment and not advice on your contract. Your official score comes from your own self-assessment, supported by your system security plan and evidence, and posted and affirmed in SPRS.
      </Note>

      <H2>How the SPRS score works</H2>
      <p>The Supplier Performance Risk System (SPRS) is where the Department of War (formerly DoD) looks up a supplier&apos;s NIST SP 800-171 assessment results. The scoring rule comes from the DoD Assessment Methodology: begin with 110, one point per requirement, then subtract the value of every requirement that is not implemented.</p>
      <Table
        head={['Point value', 'How many requirements', 'What they tend to cover']}
        rows={[
          ['5 points', '44', 'Requirements whose absence leaves the network open to exploitation or CUI to theft: access limits, MFA, audit logging, baselines, incident response, malware protection, boundary protection'],
          ['3 points', '14', 'Requirements whose absence has a specific, confined effect: least privilege, encryption on mobile devices, media protection, personnel screening, risk assessment, plans of action'],
          ['1 point', '51', 'Requirements with a limited or indirect effect: session locks, password rules, visitor logs, VoIP and mobile code controls'],
          ['Not scored', '1', '3.12.4, the system security plan; without it no assessment can be completed'],
        ]}
      />
      <p>Add up the values and you get 313 points at stake, so a company that meets none of the requirements scores 110 minus 313, which is -203. Most first assessments land somewhere between those two numbers. The <In href="/cmmc/assessment-checklist">CMMC assessment checklist</In> lists the same 110 requirements by domain if you want to work through them on paper first.</p>

      <H2>Reading your result</H2>
      <UL>
        <li><strong className="text-white">110:</strong>{' every requirement is met. Under CMMC that supports a Level 2 Final status once you complete the self-assessment and affirm it.'}</li>
        <li><strong className="text-white">88 to 109:</strong>{' at or above the Conditional floor in 32 CFR 170.21, provided every open item is allowed on a POA&M. The estimator counts the open items that are not allowed, such as any unmet 5-point requirement.'}</li>
        <li><strong className="text-white">Below 88:</strong>{' there is still work to do before Conditional status. Start with the 5-point requirements: each one closed moves the score faster than anything else.'}</li>
        <li><strong className="text-white">Negative:</strong>{' normal for a first look. It means the basics, such as MFA, logging and configuration baselines, are not in place yet.'}</li>
      </UL>

      <H2>Where the score is required</H2>
      <p>{'DFARS 252.204-7019 tells a contractor that it needs a current NIST SP 800-171 assessment score in SPRS for each covered contractor information system, and DFARS 252.204-7020 sets out how the Basic (self), Medium and High assessments work, including checking subcontractor scores. The CMMC clause, DFARS 252.204-7021, adds the CMMC status and the annual affirmation on top. See '}<In href="/cmmc/dfars-7012-7019-7020-7021">DFARS 7012, 7019, 7020 and 7021 explained</In>{' for how the four clauses fit together.'}</p>
      <p>{'The suspension of CMMC Phase 2 on July 13, 2026 did not remove any of this. New requirements may still call for Level 1 (Self) or Level 2 (Self), DFARS 252.204-7012 and NIST SP 800-171 Rev 2 still apply, and your SPRS entry is still how the government checks your status. The '}<In href="/insights/cmmc-phase-2-suspension">Phase 2 suspension explainer</In>{' has the details.'}</p>

      <H2>How to raise your score</H2>
      <OL>
        <li><strong className="text-white">Write or update the SSP.</strong>{' Without it there is no score. It also forces you to decide the system boundary, which is often the biggest lever on cost.'}</li>
        <li><strong className="text-white">Close the 5-point requirements first.</strong>{' MFA, audit logging, baseline configurations, malware protection and incident response are the usual large items.'}</li>
        <li><strong className="text-white">Shrink the scope.</strong>{' Keeping CUI in a smaller enclave means fewer systems, users and requirements to evidence.'}</li>
        <li><strong className="text-white">Track the rest in a POA&M.</strong>{' Record each open 1-point item with an owner and a date, and update SPRS when your score changes.'}</li>
      </OL>
      <p>{'If you would rather have a Registered Practitioner walk through the 110 requirements with your team, Galaxy\'s '}<In href="/cmmc/nist-800-171-gap-assessment">NIST 800-171 gap assessment</In>{' typically takes 2 to 3 weeks and ends with a written gap report, a remediation roadmap and an SPRS score estimate you can plan against. See '}<In href="/cmmc">Galaxy&apos;s CMMC readiness services</In>{' for the full picture.'}</p>
    </BuyerPage>
  );
}
