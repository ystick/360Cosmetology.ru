import type { Metadata } from 'next'

import { cache } from 'react'
import { notFound } from 'next/navigation'

import { gql, KategoriyaUslugi, PublicationStatus, UslugaEntityResponseCollection } from '@/graphql/client'

import { SERVICES_PRICING_PER_PAGE } from '@constants/shared.constants'
import { ServicesPricingCategorySlugPage } from './ServicesPricingCategorySlugPage'
import { NEXT_PUBLIC_CLIENT_URL } from '@constants/seo.constants'
import { SERVICES_PRICING_LINK } from '@constants/route.constants'
import { getMetadata, NextOGType, SeoFields } from '@config'

export const revalidate = 300

type Props = {
  params: Promise<{ categorySlug: string }>
  searchParams: Promise<{ page: string }>
}

const fetchKategoriyaUslugisSlug = cache(async (slug: string) => {
  try {
    const { kategoriyaUslugis } = await gql.getKategoriyaUslugisSlug({
      slug,
      status: PublicationStatus.Published
    })
    return kategoriyaUslugis[0] as KategoriyaUslugi | null
  } catch (error) {
    console.error('Ошибка при загрузке kategoriyaUslugis:', error)
    return null
  }
})

const fetchUslugas = cache(async (page = 1, categorySlug?: string) => {
  try {
    const variables: any = {
      page,
      pageSize: SERVICES_PRICING_PER_PAGE,
      status: PublicationStatus.Published,
      sort: ['publishedAt:DESC', 'documentId:ASC']
    }

    if (categorySlug) {
      variables.filters = {
        kategoriya_uslugi: {
          slug: {
            eq: categorySlug
          }
        }
      }
    }

    const { uslugas_connection } = await gql.getUslugasWithPagination(variables)
    return uslugas_connection as UslugaEntityResponseCollection | null
  } catch (error) {
    console.error('Ошибка при загрузке uslugas:', error)
    return null
  }
})

const fetchKategoriyaUslugis = cache(async () => {
  try {
    const { kategoriyaUslugis } = await gql.KategoriyaUslugis()
    return kategoriyaUslugis as KategoriyaUslugi[]
  } catch (error) {
    console.error('Ошибка при загрузке kategoriyaUslugis:', error)
    return []
  }
})

export async function generateMetadata({ params, searchParams }: Props): Promise<Metadata> {
  const categorySlug = (await params).categorySlug

  const fallback = `${NEXT_PUBLIC_CLIENT_URL}${SERVICES_PRICING_LINK.href}/${categorySlug}`
  const pageDate = await fetchKategoriyaUslugisSlug(categorySlug)

  const uslugas = await fetchUslugas(1, categorySlug)

  if (!pageDate) return {}

  const seoFields: SeoFields = {
    metaTitle: pageDate.seo?.metaTitle,
    metaDescription: pageDate.seo?.metaDescription,
    canonicalUrl: pageDate.seo?.canonicalUrl,
    isNoIndexPage: pageDate.seo?.isNoIndexPage
  }

  if (pageDate.seo?.openGraph) {
    const og = pageDate.seo.openGraph
    seoFields.openGraph = {
      ogTitle: og.ogTitle,
      ogDescription: og.ogDescription,
      ogUrl: og.ogUrl,
      ogType: og.ogType as NextOGType,
      ogImage: {
        url: og.ogImage?.url,
        alternativeText: og.ogImage?.alternativeText
      }
    }
  }

  const pageNum = Number((await searchParams).page) || 1
  const suffix = pageNum > 1 ? ` - страница ${pageNum}` : ''

  if (suffix) {
    const baseTitle = (seoFields.metaTitle ?? uslugas?.nodes[0].title ?? '').trim()
    seoFields.metaTitle = `${baseTitle}${suffix}`

    if (seoFields.openGraph?.ogTitle) {
      seoFields.openGraph.ogTitle = `${seoFields.openGraph.ogTitle}${suffix}`
    }
  }

  return getMetadata({
    baseTitle: seoFields.metaTitle ?? uslugas?.nodes[0].title,
    baseDescription: seoFields.metaDescription ?? uslugas?.nodes[0].description,
    seo: seoFields,
    canonicalFallback: seoFields.canonicalUrl ?? fallback
  })
}

export default async function ServicesPricingSlug({ params, searchParams }: Props) {
  const categorySlug = (await params).categorySlug
  const page = Number((await searchParams).page ?? '1') || 1

  // Валидация категории
  const kategoriyaUslugisSlug = await fetchKategoriyaUslugisSlug(categorySlug)
  if (!kategoriyaUslugisSlug) return notFound()

  // Фетчим услуги и все категории
  const uslugas = await fetchUslugas(page, categorySlug)
  const kategoriyaUslugis = await fetchKategoriyaUslugis()

  return <ServicesPricingCategorySlugPage uslugas={uslugas} kategoriyaUslugis={kategoriyaUslugis} kategoriyaUslugisSlug={kategoriyaUslugisSlug} categorySlug={categorySlug} />
}
