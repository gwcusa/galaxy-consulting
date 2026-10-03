import type { MetadataRoute } from 'next';

const BASE = 'https://www.galaxyconsultingllc.com';

type Entry = {
  path: string;
  /**
   * Date the page's CONTENT last changed (taken from `git log -1 --format=%cI -- <page file>`).
   * Search engines stop trusting lastmod site-wide once it proves untrue, so never use the
   * build time here. Update a page's date only when its visible content changes, not for
   * metadata-only or code-only edits.
   */
  lastModified: string;
  changeFrequency: NonNullable<MetadataRoute.Sitemap[number]['changeFrequency']>;
  priority: number;
};

const PAGES: Entry[] = [
  // Core pages
  { path: '',                             lastModified: '2026-06-15T18:21:23-04:00', changeFrequency: 'monthly', priority: 1.0 },
  { path: '/cmmc',                        lastModified: '2026-10-02T12:00:00-04:00', changeFrequency: 'weekly',  priority: 1.0 },
  { path: '/cmmc/level-1',                lastModified: '2026-05-25T10:10:24-04:00', changeFrequency: 'monthly', priority: 0.9 },
  { path: '/cmmc/level-2',                lastModified: '2026-10-02T12:00:00-04:00', changeFrequency: 'monthly', priority: 0.9 },
  { path: '/cmmc/services',               lastModified: '2026-06-15T18:21:23-04:00', changeFrequency: 'monthly', priority: 0.9 },
  { path: '/cmmc/faq',                    lastModified: '2026-06-15T18:21:23-04:00', changeFrequency: 'monthly', priority: 0.9 },
  { path: '/cmmc/resources',              lastModified: '2026-10-02T12:00:00-04:00', changeFrequency: 'monthly', priority: 0.8 },
  // Insights
  { path: '/insights',                    lastModified: '2026-10-02T12:00:00-04:00', changeFrequency: 'weekly',  priority: 0.7 },
  { path: '/insights/cmmc-phase-2-suspension', lastModified: '2026-10-02T12:00:00-04:00', changeFrequency: 'weekly', priority: 0.8 },
  // Company pages
  { path: '/about',                       lastModified: '2026-06-15T18:21:23-04:00', changeFrequency: 'monthly', priority: 0.7 },
  { path: '/certifications',              lastModified: '2026-06-15T18:21:23-04:00', changeFrequency: 'monthly', priority: 0.7 },
  { path: '/past-performance',            lastModified: '2026-06-10T19:22:54-04:00', changeFrequency: 'monthly', priority: 0.6 },
  { path: '/contact',                     lastModified: '2026-06-15T18:32:04-04:00', changeFrequency: 'yearly',  priority: 0.7 },
  // Service pages
  { path: '/services',                    lastModified: '2026-06-10T18:50:05-04:00', changeFrequency: 'monthly', priority: 0.7 },
  { path: '/services/cybersecurity',      lastModified: '2026-06-15T18:21:23-04:00', changeFrequency: 'monthly', priority: 0.7 },
  { path: '/services/it-infrastructure',  lastModified: '2026-06-10T18:50:05-04:00', changeFrequency: 'monthly', priority: 0.6 },
  { path: '/services/program-management', lastModified: '2026-06-10T18:50:05-04:00', changeFrequency: 'monthly', priority: 0.6 },
  // Legal
  { path: '/privacy-policy',              lastModified: '2026-05-25T10:05:51-04:00', changeFrequency: 'yearly',  priority: 0.3 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return PAGES.map(({ path, lastModified, changeFrequency, priority }) => ({
    url: `${BASE}${path}`,
    lastModified,
    changeFrequency,
    priority,
  }));
}
