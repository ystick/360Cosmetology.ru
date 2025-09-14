import type { MetadataRoute } from 'next'
import { cache } from 'react'

import { gql, PublicationStatus, type UslugaFiltersInput, type BlogFiltersInput, type NovostiFiltersInput, type OborudovanieFiltersInput, type AbonementyFiltersInput } from '@/graphql/client'

import { NEXT_PUBLIC_CLIENT_URL } from './constants/seo.constants'
import { SERVICES_PRICING_LINK, ACTIONS_LINK, EQUIPMENT_LINK, NEWS_LINK, BLOG_LINK, ABONEMENTS_LINK, STAFF_LINK, HOME_LINK, RESULTS_LINK_FOTO, RESULTS_LINK_VIDEO, ABOUT_US_LINK, CONTACTS_LINK, LEGAL_INFORMATION_LINK, PAYMENT_METHODS_LINK, KONTROLIRUYUSHHIE_ORGANY_LINK } from './constants/route.constants'

export const revalidate = 3000

const BASE_PAGE_SIZE = 12 as const

const baseVars = { page: 1, pageSize: BASE_PAGE_SIZE, status: PublicationStatus.Published } as const
const withFilters = <F>(filters?: F) => ({ ...baseVars, filters: filters ?? ({} as F) })

/** Универсально достаём pageCount / total / nodes из разных схем ответа */
const getPageCount = (conn: any, pageSize = BASE_PAGE_SIZE) => {
  const pc = conn?.pageInfo?.pageCount ?? conn?.pageInfo?.pagination?.pageCount ?? conn?.meta?.pagination?.pageCount
  if (typeof pc === 'number' && pc > 0) return pc

  const total = conn?.pageInfo?.total ?? conn?.aggregate?.count ?? conn?.total ?? conn?.meta?.pagination?.total
  if (typeof total === 'number' && total >= 0) return Math.max(1, Math.ceil(total / pageSize))
  return 1
}

const extractNodes = (conn: any): any[] => {
  if (Array.isArray(conn?.nodes)) return conn.nodes
  if (Array.isArray(conn?.data)) return conn.data.map((d: any) => d?.attributes ?? d).filter(Boolean)
  if (Array.isArray(conn?.edges)) return conn.edges.map((e: any) => e?.node).filter(Boolean)
  return []
}

/** Собираем все страницы пагинации в один массив nodes */
async function collectAllPages<T>(fetchPage: (page: number) => Promise<any>, pageSize = BASE_PAGE_SIZE): Promise<{ nodes: T[]; pageCount: number }> {
  const first = await fetchPage(1)
  const pc = getPageCount(first, pageSize)
  const all: T[] = extractNodes(first)

  for (let p = 2; p <= pc; p++) {
    const res = await fetchPage(p)
    all.push(...extractNodes(res))
  }

  return { nodes: all, pageCount: pc }
}

// ---------- FETCHERS (со сбором всех страниц там, где нужно) ----------

// УСЛУГИ — собираем всё
const fetchAllUslugas = cache(async () => {
  try {
    return await collectAllPages<any>(async (page) => {
      const { uslugas_connection } = await gql.getUslugasWithPagination({ ...withFilters<UslugaFiltersInput>(), page })
      return uslugas_connection
    }, BASE_PAGE_SIZE)
  } catch (e) {
    console.error('Ошибка при загрузке uslugas:', e)
    return { nodes: [], pageCount: 1 }
  }
})

// АКЦИИ — REST без пагинации (как у тебя)
const fetchAkcziis = cache(async () => {
  try {
    const url = `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/akczii/active`
    const res = await fetch(url, {
      headers: { Authorization: `Bearer ${process.env.STRAPI_API_TOKEN}` }
    })
    if (!res.ok) {
      console.error('Ошибка при загрузке акций:', await res.text())
      return []
    }
    const json = await res.json()
    return Array.isArray(json?.data) ? json.data : []
  } catch (e) {
    console.error('Ошибка при загрузке акций:', e)
    return []
  }
})

// Остальные коллекции — по желанию тоже можно собрать "всё". Для sitemap детальных ссылок — полезно.
const fetchAllOborudovanies = cache(async () => {
  try {
    return await collectAllPages<any>(async (page) => {
      const { oborudovanies_connection } = await gql.getOborudovaniesWithPagination({ ...withFilters<OborudovanieFiltersInput>(), page })
      return oborudovanies_connection
    }, BASE_PAGE_SIZE)
  } catch (e) {
    console.error('Ошибка при загрузке oborudovanies:', e)
    return { nodes: [], pageCount: 1 }
  }
})

const fetchAllNovostis = cache(async () => {
  try {
    return await collectAllPages<any>(async (page) => {
      const { novostis_connection } = await gql.getNovostisWithPagination({ ...withFilters<NovostiFiltersInput>(), page })
      return novostis_connection
    }, BASE_PAGE_SIZE)
  } catch (e) {
    console.error('Ошибка при загрузке novostis:', e)
    return { nodes: [], pageCount: 1 }
  }
})

const fetchAllBlogs = cache(async () => {
  try {
    return await collectAllPages<any>(async (page) => {
      const { blogs_connection } = await gql.getBlogsWithPagination({ ...withFilters<BlogFiltersInput>(), page })
      return blogs_connection
    }, BASE_PAGE_SIZE)
  } catch (e) {
    console.error('Ошибка при загрузке blogs:', e)
    return { nodes: [], pageCount: 1 }
  }
})

const fetchAllAbonementies = cache(async () => {
  try {
    return await collectAllPages<any>(async (page) => {
      const { abonementies_connection } = await gql.getAbonementiesWithPagination({ ...withFilters<AbonementyFiltersInput>(), page })
      return abonementies_connection
    }, BASE_PAGE_SIZE)
  } catch (e) {
    console.error('Ошибка при загрузке abonementies:', e)
    return { nodes: [], pageCount: 1 }
  }
})

// Сотрудники — тут по типам нужен titles, поэтому не filters
const fetchAllSotrudniks = cache(async () => {
  try {
    return await collectAllPages<any>(async (page) => {
      const { sotrudniks_connection } = await gql.getSotrudniksWithPagination({ ...baseVars, page, titles: [] })
      return sotrudniks_connection
    }, BASE_PAGE_SIZE)
  } catch (e) {
    console.error('Ошибка при загрузке sotrudniks:', e)
    return { nodes: [], pageCount: 1 }
  }
})

// ---------- SITEMAP ----------

const todayISO = () => new Date().toISOString()

function sitemapItem(path: string, lastMod?: string): MetadataRoute.Sitemap[number] {
  return {
    url: `${NEXT_PUBLIC_CLIENT_URL}${path}`,
    lastModified: lastMod ?? todayISO(),
    changeFrequency: 'daily' as const,
    priority: 1
  }
}

function pushPaginated(items: MetadataRoute.Sitemap, basePath: string, pageCount: number) {
  for (let p = 2; p <= pageCount; p++) {
    items.push(sitemapItem(`${basePath}/page${p}`))
  }
}

const paths = {
  usluga: (categorySlug: string, slug: string) => `${SERVICES_PRICING_LINK.href}/${categorySlug}/${slug}`,
  akcziya: (slug: string) => `${ACTIONS_LINK.href}/${slug}`,
  oborudovanie: (slug: string) => `${EQUIPMENT_LINK.href}/${slug}`,
  novost: (slug: string) => `${NEWS_LINK.href}/${slug}`,
  blog: (slug: string) => `${BLOG_LINK.href}/${slug}`,
  abonement: (slug: string) => `${ABONEMENTS_LINK.href}/${slug}`,
  sotrudnik: (slug: string) => `${STAFF_LINK.href}/${slug}`
}

function getUslugaCategorySlug(n: any): string | undefined {
  if (n?.kategoriya_uslugi?.slug) return n.kategoriya_uslugi.slug
  if (n?.kategoriya_uslugi?.data?.attributes?.slug) return n.kategoriya_uslugi.data.attributes.slug
  if (Array.isArray(n?.kategoriya_uslugi) && n.kategoriya_uslugi[0]?.slug) return n.kategoriya_uslugi[0].slug
  return undefined
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticSections = [HOME_LINK.href, SERVICES_PRICING_LINK.href, ACTIONS_LINK.href, EQUIPMENT_LINK.href, RESULTS_LINK_FOTO.href, RESULTS_LINK_VIDEO.href, STAFF_LINK.href, ABONEMENTS_LINK.href, ABOUT_US_LINK.href, CONTACTS_LINK.href, NEWS_LINK.href, BLOG_LINK.href, LEGAL_INFORMATION_LINK.href, PAYMENT_METHODS_LINK.href, KONTROLIRUYUSHHIE_ORGANY_LINK.href]

  const items: MetadataRoute.Sitemap = staticSections.map((p) => sitemapItem(p))

  const [uslugasAll, akcziis, oborudovaniesAll, novostisAll, blogsAll, abonementiesAll, sotrudniksAll] = await Promise.all([fetchAllUslugas(), fetchAkcziis(), fetchAllOborudovanies(), fetchAllNovostis(), fetchAllBlogs(), fetchAllAbonementies(), fetchAllSotrudniks()])

  // Детальные страницы
  uslugasAll.nodes.forEach((n: any) => {
    const slug = n?.slug
    const categorySlug = getUslugaCategorySlug(n)
    if (slug && categorySlug) {
      items.push(sitemapItem(paths.usluga(categorySlug, slug), n.updatedAt ?? n.publishedAt ?? undefined))
    }
  })

  akcziis.forEach((a: any) => {
    if (a?.slug) items.push(sitemapItem(paths.akcziya(a.slug), a.updatedAt ?? undefined))
  })

  oborudovaniesAll.nodes.forEach((n: any) => {
    if (n?.slug) items.push(sitemapItem(paths.oborudovanie(n.slug), n.updatedAt ?? n.publishedAt ?? undefined))
  })

  novostisAll.nodes.forEach((n: any) => {
    if (n?.slug) items.push(sitemapItem(paths.novost(n.slug), n.updatedAt ?? n.publishedAt ?? undefined))
  })

  blogsAll.nodes.forEach((n: any) => {
    if (n?.slug) items.push(sitemapItem(paths.blog(n.slug), n.updatedAt ?? n.publishedAt ?? undefined))
  })

  abonementiesAll.nodes.forEach((n: any) => {
    if (n?.slug) items.push(sitemapItem(paths.abonement(n.slug), n.updatedAt ?? n.publishedAt ?? undefined))
  })

  sotrudniksAll.nodes.forEach((n: any) => {
    if (n?.slug) items.push(sitemapItem(paths.sotrudnik(n.slug), n.updatedAt ?? n.publishedAt ?? undefined))
  })

  // Пагинация корневых разделов (если хочешь — оставляй)
  pushPaginated(items, EQUIPMENT_LINK.href, oborudovaniesAll.pageCount)
  pushPaginated(items, SERVICES_PRICING_LINK.href, uslugasAll.pageCount)
  pushPaginated(items, ABONEMENTS_LINK.href, abonementiesAll.pageCount)
  pushPaginated(items, NEWS_LINK.href, novostisAll.pageCount)
  pushPaginated(items, BLOG_LINK.href, blogsAll.pageCount)
  pushPaginated(items, STAFF_LINK.href, sotrudniksAll.pageCount)

  return items
}
