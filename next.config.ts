import type { NextConfig } from "next";
import { stateSalaryRedirects } from "./lib/redirects";

const nextConfig: NextConfig = {
  // Standalone output for OpenNext Cloudflare Workers
  output: "standalone",

  // Disable image optimization for static export
  images: {
    unoptimized: true,
  },

  // Trailing slashes for cleaner URLs
  trailingSlash: false,

  // 301 Redirects for old URLs that were changed on Dec 27, 2025
  // This is CRITICAL for SEO - transfers ranking signals to new URLs
  async redirects() {
    return stateSalaryRedirects;
  },
};

export default nextConfig;
