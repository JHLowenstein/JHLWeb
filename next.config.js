const { withContentlayer } = require('next-contentlayer')

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/docs',
}

module.exports = withContentlayer(nextConfig)
