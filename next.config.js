const {i18n} = require("./next-i18next.config");
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
        'res.cloudinary.com',
        'athletid.com'
    ],
  },
  i18n
}

module.exports = nextConfig
