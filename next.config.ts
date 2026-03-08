import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  cacheComponents:true,
  typescript: {
    ignoreBuildErrors: true,
  },
  
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
        {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "plus.unsplash.com",
      }
    ],
  },
  /* config options here */
};

export default nextConfig;
