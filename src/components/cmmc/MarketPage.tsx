import BuyerPage, { In, H2, UL, Note, Table, ReadinessCta } from '@/components/cmmc/BuyerPage';
import { LOCATIONS_UPDATED, standardFaqs, type Market } from '@/lib/cmmc-locations';
import { SITE_URL } from '@/lib/site';

/** Galaxy Consulting as the provider, with the same details as the site-wide Organization schema. */
export const GALAXY_PROVIDER = {
  '@type': 'ProfessionalService',
  name: 'Galaxy Consulting, LLC',
  url: SITE_URL,
  telephone: '+1-240-324-7888',
  email: 'info@galaxyconsultingllc.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '8507 Oxon Hill Road, Suite 200',
    addressLocality: 'Fort Washington',
    addressRegion: 'MD',
    postalCode: '20744',
    addressCountry: 'US',
  },
};

export function marketPath(m: Market) {
  return `/cmmc/locations/${m.slug}`;
}

/** One CMMC market page, driven entirely by its entry in src/lib/cmmc-locations.ts. */
export default function MarketPage({ m }: { m: Market }) {
  const path = marketPath(m);
  const faqs = standardFaqs(m);
  const schema = [
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: `CMMC readiness and compliance support for ${m.name} defense contractors`,
      serviceType: 'CMMC readiness, gap assessment and NIST SP 800-171 self-assessment support',
      description: m.description,
      url: `${SITE_URL}${path}`,
      provider: GALAXY_PROVIDER,
      areaServed: m.areaServed,
    },
  ];

  const related = [
    { href: '/cmmc', label: 'CMMC overview: what an RPO does and how we help' },
    { href: '/cmmc/services', label: 'CMMC services and the free readiness call' },
    { href: '/insights/what-is-a-cmmc-rpo', label: 'What is a CMMC Registered Provider Organization (RPO)?' },
    { href: '/insights/nist-800-171-gap-assessment', label: 'What a NIST 800-171 gap assessment includes' },
    ...(m.home ? [{ href: '/cmmc/maryland-dc-virginia', label: 'CMMC readiness across Maryland, DC and Northern Virginia' }] : []),
    { href: '/cmmc/locations', label: 'All markets we serve' },
  ];

  return (
    <BuyerPage
      path={path}
      crumb={m.name}
      eyebrow={m.home ? `CMMC · ${m.name}` : `CMMC · ${m.name} · Remote`}
      h1={m.h1}
      lede={m.intro}
      updated={LOCATIONS_UPDATED}
      faqs={faqs}
      schema={schema}
      related={related}
      cta={
        <ReadinessCta
          heading={`Book a free 30-minute call about CMMC in ${m.short}`}
          text={`Galaxy Consulting is a veteran-owned Cyber-AB Registered Provider Organization (RPO) based in Fort Washington, Maryland, working with ${m.short} contractors remotely and on site by arrangement. A free 30-minute readiness call covers your contract clauses, your likely CMMC level and what to fix first. No obligation.`}
        />
      }
    >
      <H2>{`The defense industrial base in ${m.short}`}</H2>
      {m.body.map((p) => <p key={p.slice(0, 40)}>{p}</p>)}

      <H2>{`Defense hubs in and near ${m.short}`}</H2>
      <p>{'These are well-known public installations and industry clusters, listed for orientation only. Galaxy Consulting does not claim to work with these installations or with their contractors.'}</p>
      <Table head={['Hub', 'General mission area']} rows={m.hubs.map((h) => [h.name, h.area])} />

      <H2>{`How we work with ${m.short} contractors`}</H2>
      <p>
        {m.home
          ? `Galaxy Consulting works remotely and on site by arrangement from its base in Fort Washington, Maryland. ${m.short} is part of our home market, so on-site sessions, office walk-throughs and evidence reviews are straightforward to schedule.`
          : `Galaxy Consulting works remotely and on site by arrangement from its base in Fort Washington, Maryland. We do not have an office or a local phone line in ${m.short}. Most CMMC readiness work runs well remotely: scoping workshops and interviews by video, evidence review over a secure file share, and documents drafted with your team. When a walk-through of your facility helps, we arrange on-site time.`}
      </p>
      <UL>
        <li><strong className="text-white">{'Free 30-minute readiness call.'}</strong>{' We read your clauses and talk through your likely level.'}</li>
        <li><strong className="text-white">{'Scope and level determination.'}</strong>{' We map your system boundary and separate FCI from CUI, so '}<In href="/cmmc/level-1">{'Level 1'}</In>{' or '}<In href="/cmmc/level-2">{'Level 2'}</In>{' covers only what it must.'}</li>
        <li><strong className="text-white">{'Gap assessment.'}</strong>{' A practice-by-practice review with a written gap report, a prioritized remediation roadmap and an SPRS score estimate. See '}<In href="/insights/nist-800-171-gap-assessment">{'what a NIST 800-171 gap assessment includes'}</In>{'.'}</li>
        <li><strong className="text-white">{'Remediation and documentation.'}</strong>{' Control implementation support, the System Security Plan (SSP), policies, procedures and POA&M.'}</li>
        <li><strong className="text-white">{'Self-assessment and SPRS support.'}</strong>{' Help with your self-assessment, SPRS submission and annual affirmation.'}</li>
      </UL>
      <p>{'The full list is on our '}<In href="/cmmc/services">{'CMMC services page'}</In>{'.'}</p>

      <H2>Where CMMC stands today</H2>
      <p>{'The CMMC program rule, 32 CFR Part 170, took effect on December 16, 2024, and the contract clause, DFARS 252.204-7021, on November 10, 2025, which started Phase 1. On July 13, 2026 the Department of War (DoD) suspended the move to Phase 2. During the suspension, new requirements may only call for Level 1 (Self) or Level 2 (Self), and DFARS 252.204-7012 and NIST SP 800-171 still apply. Read '}<In href="/insights/cmmc-phase-2-suspension">{'what the Phase 2 suspension means'}</In>{'.'}</p>

      <H2>Who you would work with</H2>
      <p>{'Galaxy Consulting, LLC is a Service-Disabled Veteran-Owned Small Business (SDVOSB) and a Cyber-AB authorized CMMC Registered Provider Organization (RPO), with a Registered Practitioner (RP) on staff to guide your CMMC Level 1 and Level 2 self-assessment preparation. Galaxy has affirmed its own CMMC Level 1 and Level 2 self-assessments in SPRS.'}</p>
      <Note>{'Galaxy Consulting advises and prepares; it does not certify. Official CMMC Level 2 certification assessments are conducted by an authorized C3PAO. Learn '}<In href="/insights/what-is-a-cmmc-rpo">{'what a CMMC RPO does'}</In>{' and how it differs in our '}<In href="/cmmc/c3pao-vs-rpo">{'C3PAO vs RPO comparison'}</In>{'.'}</Note>
    </BuyerPage>
  );
}
