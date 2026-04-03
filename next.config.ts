import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  turbopack: {
    root: __dirname
  },

  async redirects() {
    return [
      {
        source: '/demande-de-devis',
        destination: '/devis',
        permanent: true,
      },
      {
        source: '/devis-gratuit',
        destination: '/devis',
        permanent: true,
      },
    ]
  },
};

export default nextConfig;
