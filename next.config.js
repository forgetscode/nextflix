const withTM = require('next-transpile-modules')([
  '@stripe/firestore-stripe-payments',
]) // pass the modules you would like to see transpiled

/** @type {import('next').NextConfig} */
module.exports = withTM({
  reactStrictMode: true,
  images: {
    domains: ['wpassets.brainstation.io, 'image.tmdb.org', "www.svgrepo.com" ],
  },
})
