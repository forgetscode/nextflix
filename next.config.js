/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['image.tmdb.org', 'rb.gy', "www.svgrepo.com" ],
  },
  swcMinify: true,
}

module.exports = nextConfig
