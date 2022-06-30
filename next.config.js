/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    TITLE_APP: 'food recipe',
  },
  reactStrictMode: true,
  images: {
    domains: ['res.cloudinary.com'],
  },
}

module.exports = nextConfig
