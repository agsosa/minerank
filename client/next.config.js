/** @type {import('next').NextConfig} */
const nextConfig = {
  publicRuntimeConfig: {
    appName: process.env.NEXT_PUBLIC_APP_NAME,
    appHomeUrl: process.env.NEXT_PUBLIC_APP_HOME_URL,
  },
  reactStrictMode: true,
};

module.exports = nextConfig;
