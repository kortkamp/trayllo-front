/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: '/app',
  reactStrictMode: true,
  swcMinify: true,
  output: 'standalone',
  webpack: (config, context) => {
    config.watchOptions = {
      poll: 1000,
      aggregateTimeout: 300
    }
    return config
  },
  async redirects() {
    return [
        {
            source: '/',
            destination: '/app',
            basePath: false,
            permanent: false
        }
    ]
  },
  // async rewrites() {
  //   return [
  //     {
  //       source: '/',
  //       destination: `/app`,
  //       basePath: false,
  //       permanent: false
  //     },
  //   ]
  // },
}

module.exports = nextConfig
