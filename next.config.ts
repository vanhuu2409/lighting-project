import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  distDir: "dist",
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
