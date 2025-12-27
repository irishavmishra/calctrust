import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Standalone output for OpenNext Cloudflare Workers
  output: "standalone",

  // Disable image optimization for static export
  images: {
    unoptimized: true,
  },

  // Trailing slashes for cleaner URLs
  trailingSlash: false,
};

export default nextConfig;
