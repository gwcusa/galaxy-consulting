import { CRUMB_NAMES, SITE_URL } from '@/lib/site';

function nameFor(path: string): string {
  if (CRUMB_NAMES[path]) return CRUMB_NAMES[path];
  const seg = path.split('/').pop() ?? '';
  return seg.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase());
}

/** The trail for a path: Home, then every parent segment, then the page itself. */
export function crumbsFor(path: string, current?: string): { name: string; path: string }[] {
  const parts = path.split('/').filter(Boolean);
  const out = [{ name: 'Home', path: '/' }];
  parts.forEach((_, i) => {
    const p = '/' + parts.slice(0, i + 1).join('/');
    out.push({ name: i === parts.length - 1 && current ? current : nameFor(p), path: p });
  });
  return out;
}

/** BreadcrumbList JSON-LD for a subpage. */
export default function BreadcrumbSchema({ path, current }: { path: string; current?: string }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: crumbsFor(path, current).map((c, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: c.name,
      item: `${SITE_URL}${c.path === '/' ? '' : c.path}`,
    })),
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, '\u003c') }}
    />
  );
}
