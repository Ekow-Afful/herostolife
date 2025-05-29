import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  experimental: {
    staleTimes: {
      dynamic: 60,
    },
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "api.openweathermap.org",
        pathname: "/**",
      },
    ],
  },
};
export default nextConfig;
