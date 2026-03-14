import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/read-master-academy",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
