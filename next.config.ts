import type { NextConfig } from "next";

/** The one canonical host. The apex domain already 308s here at the Vercel domain level. */
const CANONICAL_ORIGIN = "https://www.galaxyconsultingllc.com";
const CANONICAL_HOST = "www.galaxyconsultingllc.com";

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
