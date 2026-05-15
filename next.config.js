/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: { unoptimized: true },
  async redirects() {
    return [
      { source: '/programs', destination: '/about', permanent: true },
      { source: '/strategic-plan', destination: '/about', permanent: true },
    ];
  },
};

module.exports = nextConfig;
