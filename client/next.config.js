/** @type {import('next').NextConfig} */
const nextConfig = {
  publicRuntimeConfig: {
    appName: process.env.NEXT_PUBLIC_APP_NAME,
    appHomeUrl: process.env.NEXT_PUBLIC_APP_HOME_URL,
    pageSize: process.env.NEXT_PUBLIC_PAGE_SIZE,
  },
  reactStrictMode: true,
};

module.exports = nextConfig;
