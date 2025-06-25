import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // output: "export",     // Comment để dùng server mode
  // distDir: "dist",      // Comment để dùng .next default
  // trailingSlash: true,
  eslint: {
    ignoreDuringBuilds: true,
    dirs: ["src"],
  },
  env: {
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
  },
  images: {
    unoptimized: true,
    domains: ["res.cloudinary.com", "images.unsplash.com"],
  },
};

export default nextConfig;
