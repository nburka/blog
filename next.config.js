/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: process.env.APP_BASE_PATH,
  output: process.env.NEXT_OUTPUT,
  images: {
    localPatterns: [
      {
        pathname: '/images/**',
        search: ''
      },
      {
        pathname: '/assets/**',
        search: ''
      }
    ]
  },
  async rewrites() {
    return {
      beforeFiles: [
      ]
    };
  },
  async redirects() {
    return [
    ];
  }
};

module.exports = nextConfig;
