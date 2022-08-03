/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    TITLE_APP: 'food recipe',
    NEXT_APP_API_URL: 'https://food-recipe-server.herokuapp.com/v1'
  },
  reactStrictMode: true,
  images: {
    domains: ['res.cloudinary.com'],
  },
}

module.exports = nextConfig
