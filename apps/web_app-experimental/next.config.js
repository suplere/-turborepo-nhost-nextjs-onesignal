/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  experimental: {
    appDir: true,
    runtime: "experimental-edge",
  },
  images: {
    domains: ["localhost", "s.gravatar.com"],
  },
  transpilePackages: ["ui"],
};

const withPWA = require("next-pwa")({
  dest: "public",
  disable: process.env.NODE_ENV === "development",
  register: true,
  skipWaiting: true,
});

module.exports = withPWA(nextConfig);
