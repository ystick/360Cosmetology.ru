import type { MetadataRoute } from 'next'
import { gql, RobotsTxt } from '@/graphql/client'

export const revalidate = 300

const fetchRobotsTxt = async (): Promise<RobotsTxt | null> => {
  try {
    const { robotsTxt } = await gql.getRobotsTxt()
    return robotsTxt as RobotsTxt
  } catch (err) {
    console.error('Error fetching robots:', err)
    return null
  }
}

export default async function robots(): Promise<MetadataRoute.Robots> {
  const data = await fetchRobotsTxt()
  const raw = data?.content ?? ''
  const lines = raw.split(/\r?\n/)

  const rules: NonNullable<MetadataRoute.Robots['rules']> = []

  let current: {
    userAgent?: string | string[]
    allow?: string[]
    disallow?: string[]
  } = {}

  for (const rawLine of lines) {
    const line = rawLine.trim()
    if (!line) {
      if (current.userAgent) {
        rules.push({
          userAgent: current.userAgent,
          allow: current.allow,
          disallow: current.disallow
        })
      }
      current = {}
      continue
    }

    const [keyPart, ...rest] = line.split(':')
    const key = keyPart.trim().toLowerCase()
    const value = rest.join(':').trim()

    if (key === 'user-agent') {
      if (current.userAgent) {
        rules.push({
          userAgent: current.userAgent,
          allow: current.allow,
          disallow: current.disallow
        })
        current = {}
      }
      current.userAgent = value.includes(',') ? value.split(/\s*,\s*/) : value
    } else if (key === 'allow') {
      current.allow = [...(current.allow ?? []), value]
    } else if (key === 'disallow') {
      current.disallow = [...(current.disallow ?? []), value]
    }
  }

  if (current.userAgent) {
    rules.push({
      userAgent: current.userAgent,
      allow: current.allow,
      disallow: current.disallow
    })
  }

  const result: MetadataRoute.Robots = { rules }
  if ((data as any)?.sitemap) {
    result.sitemap = (data as any).sitemap
  }

  return result
}
