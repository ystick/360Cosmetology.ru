import type { Metadata } from 'next'
import { getMetadata, type NextOGType, type SeoFields } from '@config'

import { cache } from 'react'
import { notFound } from 'next/navigation'

import { gql, PublicationStatus, Sotrudnik, SotrudnikFiltersInput } from '@/graphql/client'
import { StaffSlugPage } from './StaffSlugPage'
import { NEXT_PUBLIC_CLIENT_URL } from '@constants/seo.constants'
import { STAFF_LINK } from '@constants/route.constants'

export const revalidate = 300

const fetchSotrudnikBySlug = cache(async (slug: string) => {
  try {
    const { sotrudniks } = await gql.SotrudnikBySlug({ slug, status: PublicationStatus.Published })
    return sotrudniks[0] as Sotrudnik
  } catch (error) {
    console.error('Ошибка при загрузке sotrudnik:', error)
    return null
  }
})

const fetchSimilarSotrudniks = cache(async (currentSotrudnik: Sotrudnik) => {
  try {
    const titles = currentSotrudnik.speczializaczii_sotrudnikas.map((s) => s.title.trim()).filter(Boolean)

    const orConditions = titles.map((title) => ({
      speczializaczii_sotrudnikas: {
        title: { containsi: title }
      }
    }))

    const filtersRaw = {
      and: [
        { or: orConditions },
        {
          documentId: {
            not: {
              eq: currentSotrudnik.documentId
            }
          }
        }
      ]
    }

    const { sotrudniks_connection } = await gql.getSotrudniks({
      filters: filtersRaw as unknown as SotrudnikFiltersInput,
      status: PublicationStatus.Published
    })

    return sotrudniks_connection.nodes as Sotrudnik[]
  } catch (error) {
    console.error('Ошибка при загрузке sotrudniks:', error)
    return []
  }
})

export async function generateMetadata(props: { params: ParamsType }): Promise<Metadata> {
  const { slug } = await props.params
  const fallback = `${NEXT_PUBLIC_CLIENT_URL}${STAFF_LINK.href}/${slug}`
  const pageDate = await fetchSotrudnikBySlug(slug)
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
    baseTitle: seoFields.metaTitle,
    baseDescription: seoFields.metaDescription,
    seo: seoFields,
    canonicalFallback: seoFields.canonicalUrl ?? fallback
  })
}

export default async function StaffSlug(props: { params: ParamsType }) {
  const { slug } = await props.params
  const sotrudnik = await fetchSotrudnikBySlug(slug)

  if (!sotrudnik) return notFound()

  const similarSotrudniks = await fetchSimilarSotrudniks(sotrudnik)

  return (
    <>
      <StaffSlugPage sotrudnik={sotrudnik} similarSotrudniks={similarSotrudniks} />
      {sotrudnik?.seo?.scripts && (
        <div
          dangerouslySetInnerHTML={{
            __html: `${sotrudnik.seo.scripts}`
          }}
        />
      )}
    </>
  )
}
