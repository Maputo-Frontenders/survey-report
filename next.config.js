const nextTranslate = require('next-translate-plugin')

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  i18n: {
    defaultLocale: "pt",
    localeDetection: false,
  }
}

module.exports = nextTranslate(nextConfig);
