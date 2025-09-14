import { NextRequest, NextResponse } from 'next/server'

type Rule = { from: string; to: string; code: 301 | 302 | 308; keepQuery?: boolean }

const STRAPI_GQL = process.env.STRAPI_API_URL_GRAPHQL!
const STRAPI_TOKEN = process.env.STRAPI_API_TOKEN

let cache: { ts: number; rules: Rule[] } = { ts: 0, rules: [] }
let inflight: Promise<void> | null = null
const TTL_MS = 300_000 // 5 минут

const QUERY = `
  query getRedirects {
    redirects(pagination: { limit: 1000 }) {
      from
      to
      type
    }
  }
`

async function refresh() {
  const res = await fetch(STRAPI_GQL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      ...(STRAPI_TOKEN ? { Authorization: `Bearer ${STRAPI_TOKEN}` } : {})
    },
    body: JSON.stringify({ query: QUERY }),
    cache: 'no-store'
  })
  const json = await res.json()

  const rules: Rule[] = (json.data?.redirects ?? []).map((r: any) => {
    const n = Number(r.type)
    const code: 301 | 302 | 308 = n === 302 ? 302 : n === 308 ? 308 : 301
    return { from: r.from as string, to: r.to as string, code, keepQuery: true }
  })

  cache = { ts: Date.now(), rules }
}

async function ensureRules() {
  const stale = Date.now() - cache.ts > TTL_MS || !cache.rules.length
  if (!stale) return
  if (!inflight) inflight = refresh().finally(() => (inflight = null))
  await inflight
}

const normalize = (p: string) => (p !== '/' && p.endsWith('/') ? p.replace(/\/+$/, '') : p)

export const config = {
  matcher: ['/((?!api|_next/|.*\\..*).*)']
}

export async function middleware(req: NextRequest) {
  const url = new URL(req.url)
  const rawPath = url.pathname
  const normPath = normalize(rawPath)

  // 1) сначала подгружаем правила
  await ensureRules()

  // 2) сначала проверяем правила (и по raw, и по normalized)
  const rule = cache.rules.find((r) => r.from === rawPath) || cache.rules.find((r) => normalize(r.from) === normPath)

  if (rule) {
    const dest = new URL(rule.to, url.origin)
    if (rule.keepQuery !== false) {
      url.searchParams.forEach((v, k) => {
        if (!dest.searchParams.has(k)) dest.searchParams.set(k, v)
      })
    }
    return NextResponse.redirect(dest, rule.code)
  }

  // 3) общего вида редирект со слэша -> без слэша (если правил не нашли)
  if (rawPath !== '/' && rawPath.endsWith('/')) {
    url.pathname = normPath
    return NextResponse.redirect(url, 301)
  }

  return NextResponse.next()
}
