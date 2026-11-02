import type { Metadata } from 'next';
import { SITE_URL } from '@/lib/site';

const OG_IMAGE = { url: '/og-image.png', width: 1200, height: 630, alt: 'Galaxy Consulting: CMMC readiness for DoD contractors' };

type PageMetaInput = {
  path: string;
  /** Full title as shown in search results (kept at 60 characters or fewer; no template is appended). */
  title: string;
  /** Meta description (155 characters or fewer). */
  description: string;
  type?: 'website' | 'article';
  publishedTime?: string;
  modifiedTime?: string;
  authors?: string[];
  keywords?: string[];
};

/**
 * Metadata for one page: title, description, canonical, and an Open Graph / Twitter card that
 * carries the page's own title and description (a page that set none used to inherit the
 * homepage's social copy).
 */
export function pageMeta({ path, title, description, type = 'website', publishedTime, modifiedTime, authors, keywords }: PageMetaInput): Metadata {
  const url = `${SITE_URL}${path === '/' ? '' : path}`;
  return {
    title: { absolute: title },
    description,
    ...(keywords ? { keywords } : {}),
    alternates: { canonical: path },
    openGraph: {
      type,
      locale: 'en_US',
      siteName: 'Galaxy Consulting, LLC',
      url,
      title,
      description,
      images: [OG_IMAGE],
      ...(type === 'article' ? { publishedTime, modifiedTime, authors } : {}),
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [OG_IMAGE.url],
    },
  };
}
