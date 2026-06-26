/** @type {import('next').NextConfig} */
const path = require('path')

const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  turbopack: {
    root: path.join(__dirname),
  },
}

module.exports = nextConfig
