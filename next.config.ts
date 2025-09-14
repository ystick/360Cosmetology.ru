import { RESULTS_LINK_FOTO } from '@/app/constants/route.constants'
import type { NextConfig } from 'next'

const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL as string
const u = new URL(STRAPI_URL)
const protocol: 'http' | 'https' = u.protocol === 'https:' ? 'https' : 'http'

const nextConfig: NextConfig = {
  trailingSlash: false,
  images: {
    remotePatterns: [
      {
        protocol,
        hostname: u.hostname,
        ...(u.port ? { port: u.port } : {}),
        pathname: '/uploads/**'
      }
    ]
  },
  async headers() {
    return [
      {
        source: '/_next/:path*',
        headers: [{ key: 'X-Robots-Tag', value: 'noindex, nofollow' }]
      }
    ]
  },
  async redirects() {
    return [
      // пример статичного редиректа
      {
        source: '/rezultatyi',
        destination: RESULTS_LINK_FOTO.href,
        statusCode: 301
      },

      // ===== equipment =====
      {
        source: '/equipment',
        has: [{ type: 'query', key: 'page', value: '(?<page>\\d+)' }],
        destination: '/equipment/page:page',
        statusCode: 301
      },
      {
        source: '/equipment/page=:page(\\d+)',
        destination: '/equipment/page:page',
        statusCode: 301
      },
      {
        source: '/equipment',
        has: [{ type: 'query', key: 'page', value: '^1$' }],
        destination: '/equipment',
        statusCode: 301
      },
      { source: '/equipment/page1', destination: '/equipment', statusCode: 301 },

      // ===== procedures (без категории) =====
      {
        source: '/procedures',
        has: [{ type: 'query', key: 'page', value: '(?<page>\\d+)' }],
        destination: '/procedures/page:page',
        statusCode: 301
      },
      {
        source: '/procedures/page=:page(\\d+)',
        destination: '/procedures/page:page',
        statusCode: 301
      },
      {
        source: '/procedures',
        has: [{ type: 'query', key: 'page', value: '^1$' }],
        destination: '/procedures',
        statusCode: 301
      },
      { source: '/procedures/page1', destination: '/procedures', statusCode: 301 },

      // ===== procedures (с категорией) =====
      {
        source: '/procedures/:category',
        has: [{ type: 'query', key: 'page', value: '(?<page>\\d+)' }],
        destination: '/procedures/:category/page:page',
        statusCode: 301
      },
      {
        source: '/procedures/:category/page=:page(\\d+)',
        destination: '/procedures/:category/page:page',
        statusCode: 301
      },
      {
        source: '/procedures/:category',
        has: [{ type: 'query', key: 'page', value: '^1$' }],
        destination: '/procedures/:category',
        statusCode: 301
      },
      {
        source: '/procedures/:category/page1',
        destination: '/procedures/:category',
        statusCode: 301
      },

      // ===== news =====
      {
        source: '/news',
        has: [{ type: 'query', key: 'page', value: '(?<page>\\d+)' }],
        destination: '/news/page:page',
        statusCode: 301
      },
      {
        source: '/news/page=:page(\\d+)',
        destination: '/news/page:page',
        statusCode: 301
      },
      {
        source: '/news',
        has: [{ type: 'query', key: 'page', value: '^1$' }],
        destination: '/news',
        statusCode: 301
      },
      { source: '/news/page1', destination: '/news', statusCode: 301 },

      // ===== abonementyi-i-kompleksyi =====
      {
        source: '/abonementyi-i-kompleksyi',
        has: [{ type: 'query', key: 'page', value: '(?<page>\\d+)' }],
        destination: '/abonementyi-i-kompleksyi/page:page',
        statusCode: 301
      },
      {
        source: '/abonementyi-i-kompleksyi/page=:page(\\d+)',
        destination: '/abonementyi-i-kompleksyi/page:page',
        statusCode: 301
      },
      {
        source: '/abonementyi-i-kompleksyi',
        has: [{ type: 'query', key: 'page', value: '^1$' }],
        destination: '/abonementyi-i-kompleksyi',
        statusCode: 301
      },
      { source: '/abonementyi-i-kompleksyi/page1', destination: '/abonementyi-i-kompleksyi', statusCode: 301 },

      // ===== blog =====
      {
        source: '/blog',
        has: [{ type: 'query', key: 'page', value: '(?<page>\\d+)' }],
        destination: '/blog/page:page',
        statusCode: 301
      },
      {
        source: '/blog/page=:page(\\d+)',
        destination: '/blog/page:page',
        statusCode: 301
      },
      {
        source: '/blog',
        has: [{ type: 'query', key: 'page', value: '^1$' }],
        destination: '/blog',
        statusCode: 301
      },
      { source: '/blog/page1', destination: '/blog', statusCode: 301 },

      // ===== staff =====
      {
        source: '/staff',
        has: [{ type: 'query', key: 'page', value: '(?<page>\\d+)' }],
        destination: '/staff/page:page',
        statusCode: 301
      },
      {
        source: '/staff/page=:page(\\d+)',
        destination: '/staff/page:page',
        statusCode: 301
      },
      {
        source: '/staff',
        has: [{ type: 'query', key: 'page', value: '^1$' }],
        destination: '/staff',
        statusCode: 301
      },
      { source: '/staff/page1', destination: '/staff', statusCode: 301 }
    ]
  },

  async rewrites() {
    return [
      { source: '/equipment/page:page(\\d+)', destination: '/equipment?page=:page' },
      { source: '/procedures/page:page(\\d+)', destination: '/procedures?page=:page' },
      { source: '/procedures/:category/page:page(\\d+)', destination: '/procedures/:category?page=:page' },
      { source: '/abonementyi-i-kompleksyi/page:page(\\d+)', destination: '/abonementyi-i-kompleksyi?page=:page' },
      { source: '/news/page:page(\\d+)', destination: '/news?page=:page' },
      { source: '/blog/page:page(\\d+)', destination: '/blog?page=:page' },
      { source: '/staff/page:page(\\d+)', destination: '/staff?page=:page' }
    ]
  }
}

export default nextConfig
