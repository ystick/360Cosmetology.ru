import type { Metadata } from 'next'

import { getMetadata, type NextOGType, type SeoFields } from '@config'

import { cache } from 'react'
import { notFound } from 'next/navigation'

import { NewsSlugPage } from './NewsSlugPage'
import { gql, Novosti, PublicationStatus } from '@/graphql/client'
import { NEXT_PUBLIC_CLIENT_URL } from '@constants/seo.constants'
import { NEWS_LINK } from '@constants/route.constants'

export const revalidate = 300

const fetchNews = cache(async (slug: string) => {
  try {
    const { novostis } = await gql.getNovostisBySlug({ slug, status: PublicationStatus.Published })
    return novostis[0] as Novosti
  } catch (error) {
    console.error('Ошибка при загрузке novostis:', error)
    return null
  }
})

export async function generateMetadata(props: { params: ParamsType }): Promise<Metadata> {
  const { slug } = await props.params
  const fallback = `${NEXT_PUBLIC_CLIENT_URL}${NEWS_LINK.href}/${slug}`
  const pageDate = await fetchNews(slug)
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

  return getMetadata({
    baseTitle: seoFields.metaTitle ?? pageDate.title,
    seo: seoFields,
    canonicalFallback: seoFields.canonicalUrl ?? fallback
  })
}

export default async function NewsSlug(props: { params: ParamsType }) {
  const { slug } = await props.params
  const novost = await fetchNews(slug)

  if (!novost) return notFound()
  return (
    <>
      <NewsSlugPage novost={novost} />
      {novost?.seo?.scripts && (
        <div
          dangerouslySetInnerHTML={{
            __html: `${novost.seo.scripts}`
          }}
        />
      )}
    </>
  )
}
