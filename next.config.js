/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    TITLE_APP: 'food recipe',
    NEXT_APP_API_URL: 'http://localhost:5000/v1'
  },
  reactStrictMode: true,
  images: {
    domains: ['res.cloudinary.com'],
  },
}

module.exports = nextConfig
