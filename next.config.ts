import type { NextConfig } from "next";

const config: NextConfig = {
  allowedDevOrigins: ["*.csb.build0.ai", "*.csb.staging.build0.ai"],
  devIndicators: false,
  compiler: {
    removeConsole:
      process.env.NODE_ENV === "production" ? { exclude: ["error"] } : false,
  },
  images: {
    unoptimized: true,
  },
};

export default config;
