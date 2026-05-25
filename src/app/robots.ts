import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      disallow: '/',
    },
    // Uncomment the line below and remove the disallow above when ready to launch:
    // rules: { userAgent: '*', allow: '/' },
    // sitemap: 'https://www.galaxyconsultingllc.com/sitemap.xml',
  };
}
