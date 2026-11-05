import type { Metadata } from 'next';
import Link from 'next/link';
import { pageMeta } from '@/lib/seo';
import BuyerPage, { In, H2, ReadinessCta, type Faq } from '@/components/cmmc/BuyerPage';
import { GALAXY_PROVIDER, marketPath } from '@/components/cmmc/MarketPage';
import { CERTIFY_FAQ, LOCATIONS_UPDATED, markets, type Market } from '@/lib/cmmc-locations';
import { SITE_URL } from '@/lib/site';

const PATH = '/cmmc/locations';
const TITLE = 'CMMC Consulting by Market: DC, MD, VA & Nationwide';
const DESCRIPTION = 'Where Galaxy Consulting supports CMMC readiness: on site by arrangement in DC, Maryland and Virginia, and remotely nationwide from Fort Washington, MD.';

export const metadata: Metadata = pageMeta({ path: PATH, title: TITLE, description: DESCRIPTION });

const faqs: Faq[] = [
  {
    q: 'Where does Galaxy Consulting provide CMMC consulting?',
    a: 'Nationwide. Galaxy Consulting is based in Fort Washington, Maryland, and works remotely and on site by arrangement. Our home market is Maryland, DC and Northern Virginia; contractors elsewhere in the United States are supported remotely, with on-site time by arrangement.',
  },
  {
    q: 'Do you have offices in these markets?',
    a: 'No. Galaxy Consulting has one office, in Fort Washington, Maryland. The market pages describe the defense industrial base in each area and how we support contractors there; they do not mean we have a local office.',
  },
  CERTIFY_FAQ,
];

const schema = [
  {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'CMMC readiness and compliance support for U.S. defense contractors',
    serviceType: 'CMMC readiness, gap assessment and NIST SP 800-171 self-assessment support',
    description: DESCRIPTION,
    url: `${SITE_URL}${PATH}`,
    provider: GALAXY_PROVIDER,
    areaServed: { '@type': 'Country', name: 'United States' },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'CMMC markets served by Galaxy Consulting',
    itemListElement: markets.map((m, i) => ({ '@type': 'ListItem', position: i + 1, name: m.name, url: `${SITE_URL}${marketPath(m)}` })),
  },
];

function MarketList({ items }: { items: Market[] }) {
  return (
    <div className="grid sm:grid-cols-2 gap-4">
      {items.map((m) => (
        <Link key={m.slug} href={marketPath(m)} className="group rounded-xl border border-blue-accent/20 bg-card-surface p-5 hover:border-emerald-500/40 transition-colors">
          <h3 className="text-white font-bold mb-1 group-hover:text-emerald-300" style={{ fontFamily: 'var(--font-barlow)' }}>{m.name}</h3>
          <p className="text-sm text-silver/70">{m.line}</p>
        </Link>
      ))}
    </div>
  );
}

export default function Page() {
  return (
    <BuyerPage
      path={PATH}
      crumb="Markets we serve"
      h1="CMMC Consulting by Market"
      lede="Galaxy Consulting supports CMMC readiness for defense contractors nationwide. We are a veteran-owned Cyber-AB Registered Provider Organization (RPO) based in Fort Washington, Maryland, working remotely and on site by arrangement. Our home market is Maryland, DC and Northern Virginia."
      updated={LOCATIONS_UPDATED}
      faqs={faqs}
      schema={schema}
      related={[
        { href: '/cmmc', label: 'CMMC overview' },
        { href: '/cmmc/services', label: 'CMMC services' },
        { href: '/insights/what-is-a-cmmc-rpo', label: 'What is a CMMC Registered Provider Organization (RPO)?' },
        { href: '/insights/nist-800-171-gap-assessment', label: 'What a NIST 800-171 gap assessment includes' },
      ]}
      cta={<ReadinessCta heading="Book a free 30-minute CMMC readiness call" />}
    >
      <H2>Home market: Maryland, DC and Northern Virginia</H2>
      <p>{'Our office is in Fort Washington, Maryland, just south of DC, so on-site work across the National Capital Region is straightforward to arrange. See also our '}<In href="/cmmc/maryland-dc-virginia">{'regional overview for Maryland, DC and Northern Virginia'}</In>{'.'}</p>
      <MarketList items={markets.filter((m) => m.home)} />

      <H2>Markets we support remotely</H2>
      <p>{'We have no offices in these markets. We work with contractors there remotely, which covers most CMMC readiness work, and on site by arrangement when a visit helps.'}</p>
      <MarketList items={markets.filter((m) => !m.home)} />

      <p>{"Don't see your area? The rules are the same everywhere, and we support defense contractors across the United States. Start with the "}<In href="/cmmc/services">{'CMMC services page'}</In>{'.'}</p>
    </BuyerPage>
  );
}
