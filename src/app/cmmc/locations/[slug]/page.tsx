import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { pageMeta } from '@/lib/seo';
import { getMarket, markets } from '@/lib/cmmc-locations';
import MarketPage, { marketPath } from '@/components/cmmc/MarketPage';

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return markets.map((m) => ({ slug: m.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const m = getMarket((await params).slug);
  if (!m) return {};
  return pageMeta({ path: marketPath(m), title: m.title, description: m.description });
}

export default async function Page({ params }: Props) {
  const m = getMarket((await params).slug);
  if (!m) notFound();
  return <MarketPage m={m} />;
}
