/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['www.jennexplores.com', 'upload.wikimedia.org'],
  },
}

module.exports = nextConfig
