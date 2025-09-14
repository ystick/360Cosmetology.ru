import type { Metadata } from 'next'
import { getMetadata, type NextOGType, type SeoFields } from '@config'

import { cache } from 'react'
import { notFound } from 'next/navigation'

import { gql, PublicationStatus, Usluga } from '@/graphql/client'
import { ServicesPricingSlugPage } from './ServicesPricingSlugPage'
import { NEXT_PUBLIC_CLIENT_URL } from '@constants/seo.constants'
import { SERVICES_PRICING_LINK } from '@constants/route.constants'

export const revalidate = 300

const fetchServicesPricing = cache(async (slug: string) => {
  try {
    const { uslugas } = await gql.getUslugaBySlug({ slug, status: PublicationStatus.Published })
    return uslugas[0] as Usluga
  } catch (error) {
    console.error('Ошибка при загрузке oborudovanies:', error)
    return null
  }
})

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const slug = (await params).slug

  const pageDate = await fetchServicesPricing(slug)

  const fallback = `${NEXT_PUBLIC_CLIENT_URL}${SERVICES_PRICING_LINK.href}/${pageDate?.kategoriya_uslugi.slug}/${slug}`
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
    baseDescription: seoFields.metaDescription ?? pageDate.description,
    seo: seoFields,
    canonicalFallback: seoFields.canonicalUrl ?? fallback
  })
}

export default async function ServicesPricingSlug({ params }: { params: Promise<{ slug: string }> }) {
  const slug = (await params).slug
  const uslugas = await fetchServicesPricing(slug)

  if (!uslugas) return notFound()

  return (
    <>
      <ServicesPricingSlugPage uslugas={uslugas} />
      {uslugas?.seo?.scripts && (
        <div
          dangerouslySetInnerHTML={{
            __html: `${uslugas.seo.scripts}`
          }}
        />
      )}
    </>
  )
}
