import type { Metadata } from 'next'
import { getMetadata, type NextOGType, type SeoFields } from '@config'

import { cache } from 'react'
import { notFound } from 'next/navigation'

import { EquipmentSlugPage } from './EquipmentSlugPage'
import { gql, Oborudovanie, PublicationStatus } from '@/graphql/client'
import { NEXT_PUBLIC_CLIENT_URL } from '@constants/seo.constants'
import { EQUIPMENT_LINK } from '@constants/route.constants'

export const revalidate = 300

const fetchOborudovanie = cache(async (slug: string) => {
  try {
    const { oborudovanies } = await gql.OborudovanieBySlug({ slug, status: PublicationStatus.Published })
    return oborudovanies[0] as Oborudovanie
  } catch (error) {
    console.error('Ошибка при загрузке oborudovanies:', error)
    return null
  }
})

export async function generateMetadata(props: { params: ParamsType }): Promise<Metadata> {
  const { slug } = await props.params
  const fallback = `${NEXT_PUBLIC_CLIENT_URL}${EQUIPMENT_LINK.href}/${slug}`
  const pageDate = await fetchOborudovanie(slug)
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
    baseDescription: seoFields.metaDescription ?? pageDate.shortDescription,
    seo: seoFields,
    canonicalFallback: seoFields.canonicalUrl ?? fallback
  })
}

export default async function EquipmentSlug(props: { params: ParamsType }) {
  const { slug } = await props.params
  const oborudovanie = await fetchOborudovanie(slug)

  if (!oborudovanie) return notFound()

  return (
    <>
      <EquipmentSlugPage oborudovanie={oborudovanie} />
      {oborudovanie?.seo?.scripts && (
        <div
          dangerouslySetInnerHTML={{
            __html: `${oborudovanie.seo.scripts}`
          }}
        />
      )}
    </>
  )
}
