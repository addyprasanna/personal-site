import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return ["/about", "/now", "/projects"].map((source) => ({
      source,
      destination: "/",
      permanent: true,
    }));
  },
};

export default nextConfig;
