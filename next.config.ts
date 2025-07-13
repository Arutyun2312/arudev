import { NextConfig } from 'next'
import createNextIntlPlugin from 'next-intl/plugin'

const nextConfig: NextConfig = {
  devIndicators: false,
  experimental: {
    turbopackMinify: process.env.DISABLE_MINIFY === 'true' ? false : undefined,
  },
  turbopack: {
    rules: {
      '*.svg': {
        loaders: ['@svgr/webpack'],
        as: '*.js',
      },
    },
  },
  async rewrites() {
    return [
      {
        source: '/cv',
        destination: '/',
      },
      {
        source: '/:locale/cv',
        destination: '/:locale',
      },
    ]
  },
}

const withNextIntl = createNextIntlPlugin()
export default withNextIntl(nextConfig)
