import type { NextConfig } from "next";

/** The one canonical host. The apex domain already 308s here at the Vercel domain level. */
const CANONICAL_ORIGIN = "https://www.galaxyconsultingllc.com";
const CANONICAL_HOST = "www.galaxyconsultingllc.com";

/** [old path, new path] for the previous WordPress site (2020-2026) and GoDaddy site (2014). */
const LEGACY_REDIRECTS: [string, string][] = [
  // WordPress pages
  ["/about-us", "/about"],
  ["/contact-us", "/contact"],
  ["/careers", "/contact"],
  ["/corporate-news", "/insights"],
  ["/services/cyber-security", "/services/cybersecurity"],
  ["/services/professional-services", "/services/program-management"],
  ["/services/systems-engineering", "/services/it-infrastructure"],
  ["/services/technical-support-services", "/services/it-infrastructure"],
  // WordPress author and date archives
  ["/author/:slug*", "/about"],
  ["/:year(\\d{4})/:rest*", "/insights"],
  // 2014 site (.html pages)
  ["/home.html", "/"],
  ["/about-us.html", "/about"],
  ["/contact-us.html", "/contact"],
  ["/careers.html", "/contact"],
  ["/current-openings.html", "/contact"],
  ["/services.html", "/services"],
  ["/cyber-security.html", "/services/cybersecurity"],
  ["/professional-services.html", "/services/program-management"],
  ["/systems-engineering.html", "/services/it-infrastructure"],
  ["/technical-support-services.html", "/services/it-infrastructure"],
];

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // The public production alias served an indexable duplicate of the whole site.
      // Send it to the canonical host, keeping the path. Per-deployment preview URLs
      // (galaxy-consulting-<hash>-....vercel.app) are not matched, so they stay viewable.
      {
        source: "/:path*",
        has: [{ type: "host", value: "galaxy-consulting\.vercel\.app" }],
        destination: `${CANONICAL_ORIGIN}/:path*`,
        permanent: true,
      },
      {
        source: '/services/ai-services',
        destination: '/services',
        permanent: true,
      },
      // Legacy URLs from the WordPress site this domain served until ~May 2026 (confirmed in
      // the Wayback Machine). Google results and external links still send visitors to them,
      // and they rendered the 404 page. Trailing slashes are stripped by Next first.
      ...LEGACY_REDIRECTS.map(([source, destination]) => ({ source, destination, permanent: true })),
    ];
  },
  async headers() {
    return [
      // Any host other than the canonical one (preview deployments, localhost) must never be indexed.
      {
        source: "/:path*",
        missing: [{ type: "host", value: CANONICAL_HOST.replace(/\./g, "\.") }],
        headers: [{ key: "X-Robots-Tag", value: "noindex" }],
      },
    ];
  },
};

export default nextConfig;
