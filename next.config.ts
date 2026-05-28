import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Serve on cosmo-us.lecien.com
  // No external image domains needed — all images are in /public

  // Ensure trailing-slash consistency
  trailingSlash: false,

  // Enable strict mode for React
  reactStrictMode: true,
};

export default nextConfig;
