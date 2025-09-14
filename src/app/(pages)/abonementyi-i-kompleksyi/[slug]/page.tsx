import type { Metadata } from 'next'
import { getMetadata, type NextOGType, type SeoFields } from '@config'

import { cache } from 'react'
import { notFound } from 'next/navigation'

import { AbonementSlugPage } from './AbonementSlugPage'
import { Abonementy, gql, PublicationStatus } from '@/graphql/client'
import { NEXT_PUBLIC_CLIENT_URL } from '@constants/seo.constants'
import { ABONEMENTS_LINK } from '@constants/route.constants'

export const revalidate = 300

const fetchAbonement = cache(async (slug: string) => {
  try {
    const { abonementies } = await gql.AbonementBySlug({ slug, status: PublicationStatus.Published })
    return abonementies[0] as Abonementy
  } catch (error) {
    console.error('Ошибка при загрузке akcziis:', error)
    return null
  }
})

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const slug = (await params).slug
  const fallback = `${NEXT_PUBLIC_CLIENT_URL}${ABONEMENTS_LINK.href}/${slug}`
  const pageDate = await fetchAbonement(slug)
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

export default async function AbonementSlug({ params }: { params: Promise<{ slug: string }> }) {
  const slug = (await params).slug
  const abonementies = await fetchAbonement(slug)

  if (!abonementies) return notFound()

  return (
    <>
      <AbonementSlugPage abonement={abonementies} />
      {abonementies?.seo?.scripts && (
        <div
          dangerouslySetInnerHTML={{
            __html: `${abonementies.seo.scripts}`
          }}
        />
      )}
    </>
  )
}
