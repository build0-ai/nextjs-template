import type { NextConfig } from "next";

const config: NextConfig = {
  devIndicators: false,
  compiler: {
    removeConsole:
      process.env.NODE_ENV === "production" ? { exclude: ["error"] } : false,
  },
};

export default config;
