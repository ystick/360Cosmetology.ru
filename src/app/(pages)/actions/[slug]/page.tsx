import type { Metadata } from 'next'
import { getMetadata, type NextOGType, type SeoFields } from '@config'

import { cache } from 'react'
import { notFound } from 'next/navigation'

import { ActionSlugPage } from './ActionSlugPage'
import { Akczii, gql, PublicationStatus } from '@/graphql/client'
import { NEXT_PUBLIC_CLIENT_URL } from '@constants/seo.constants'
import { ACTIONS_LINK } from '@constants/route.constants'

export const revalidate = 300

const fetchAction = cache(async (slug: string) => {
  try {
    const { akcziis } = await gql.AkcziyBySlug({ slug, status: PublicationStatus.Published })
    return akcziis[0] as Akczii
  } catch (error) {
    console.error('Ошибка при загрузке akcziis:', error)
    return null
  }
})

export async function generateMetadata(props: { params: ParamsType }): Promise<Metadata> {
  const { slug } = await props.params
  const fallback = `${NEXT_PUBLIC_CLIENT_URL}${ACTIONS_LINK.href}/${slug}`
  const pageDate = await fetchAction(slug)
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

export default async function ActionSlug(props: { params: ParamsType }) {
  const { slug } = await props.params
  const akcziis = await fetchAction(slug)

  if (!akcziis) return notFound()

  return (
    <>
      <ActionSlugPage action={akcziis} />
      {akcziis?.seo?.scripts && (
        <div
          dangerouslySetInnerHTML={{
            __html: `${akcziis.seo.scripts}`
          }}
        />
      )}
    </>
  )
}
