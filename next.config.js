const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

/** @type {import('next').NextConfig} */
const nextConfig = (phase) => ({
  reactStrictMode: true,
  async rewrites() {
    if (phase === PHASE_DEVELOPMENT_SERVER) {
      return [
        {
          source: "/:path*",
          destination: "https://tk-project.herokuapp.com/:path*", // Proxy to Backend
          // destination: ""
        },
      ];
    } else {
      return [];
    }
  },
  async redirects() {
    return [
      {
        source: '/home',
        destination: '/',
        permanent: true,
      },
    ]
  },
});

module.exports = nextConfig;