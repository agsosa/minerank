/** @type {import('next').NextConfig} */
const nextConfig = {
  publicRuntimeConfig: {
    appName: process.env.NEXT_PUBLIC_APP_NAME,
    apiBaseUrl: process.env.NEXT_PUBLIC_API_BASE_URL,
  },
  reactStrictMode: true,
};

module.exports = nextConfig;
