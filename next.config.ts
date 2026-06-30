import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Serve on cosmo-us.lecien.com
  // No external image domains needed — all images are in /public

  // Ensure trailing-slash consistency
  trailingSlash: false,

  // Enable strict mode for React
  reactStrictMode: true,

  // Higher-quality image optimization (default is 75)
  images: {
    qualities: [75, 90],
    formats: ["image/avif", "image/webp"],
  },

  async redirects() {
    return [
      {
        source: "/blog",
        destination: "/stories",
        permanent: true,
      },
      {
        source: "/blog/:slug",
        destination: "/stories/:slug",
        permanent: true,
      },
      {
        source: "/faire",
        destination: "/wholesale",
        permanent: true,
      },
      {
        source: "/floss/hidamari",
        destination: "/sashiko",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
