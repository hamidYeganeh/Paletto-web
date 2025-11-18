import type { NextConfig } from 'next'
import createNextIntlPlugin from 'next-intl/plugin'

const withNextIntl = createNextIntlPlugin('./i18n.ts')

const nextConfig: NextConfig = {
  reactStrictMode: true,
  transpilePackages: ['@paletto/ui', '@paletto/types', '@paletto/apis', '@paletto/i18n']
}

export default withNextIntl(nextConfig)