const { i18n } = require('./next-i18next.config')
const nextTranslate = require('next-translate-plugin')

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  i18n,
}


module.exports = nextTranslate(nextConfig);