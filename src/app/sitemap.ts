import type { MetadataRoute } from 'next';

const BASE = 'https://www.galaxyconsultingllc.com';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    // Core pages
    { url: BASE,                          lastModified: new Date(), changeFrequency: 'monthly',  priority: 1.0 },
    { url: `${BASE}/cmmc`,               lastModified: new Date(), changeFrequency: 'weekly',   priority: 1.0 },
    { url: `${BASE}/cmmc/level-1`,       lastModified: new Date(), changeFrequency: 'monthly',  priority: 0.9 },
    { url: `${BASE}/cmmc/services`,      lastModified: new Date(), changeFrequency: 'monthly',  priority: 0.9 },
    { url: `${BASE}/cmmc/faq`,           lastModified: new Date(), changeFrequency: 'monthly',  priority: 0.9 },
    { url: `${BASE}/cmmc/resources`,     lastModified: new Date(), changeFrequency: 'monthly',  priority: 0.8 },
    // Company pages
    { url: `${BASE}/about`,              lastModified: new Date(), changeFrequency: 'monthly',  priority: 0.7 },
    { url: `${BASE}/certifications`,     lastModified: new Date(), changeFrequency: 'monthly',  priority: 0.7 },
    { url: `${BASE}/past-performance`,   lastModified: new Date(), changeFrequency: 'monthly',  priority: 0.6 },
    { url: `${BASE}/contact`,            lastModified: new Date(), changeFrequency: 'yearly',   priority: 0.7 },
    // Service pages
    { url: `${BASE}/services`,           lastModified: new Date(), changeFrequency: 'monthly',  priority: 0.7 },
    { url: `${BASE}/services/cybersecurity`,      lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/services/it-infrastructure`,  lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },
    { url: `${BASE}/services/program-management`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },

  ];
}
