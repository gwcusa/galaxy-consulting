import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/services/ai-services',
        destination: '/services',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
