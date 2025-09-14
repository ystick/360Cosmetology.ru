import type { Metadata } from 'next'
import { INDEX_PAGE, NEXT_PUBLIC_CLIENT_URL, NO_INDEX_PAGE, OPEN_GRAPH_BANNER } from '@constants/seo.constants'
import { fetchPageBySlug } from '../utils/api'
import { getFileUrl } from '../utils'

export type NextOGType = 'article' | 'website' | 'book' | 'profile' | 'music.song' | 'music.album' | 'music.playlist' | 'music.radio_station' | 'video.movie' | 'video.episode' | 'video.tv_show' | 'video.other' | undefined

export interface SeoFields {
  metaTitle?: string
  metaDescription?: string
  canonicalUrl?: string
  isNoIndexPage?: boolean
  openGraph?: {
    ogTitle?: string
    ogDescription?: string
    ogUrl?: string
    ogType?: NextOGType
    ogImage?: {
      url: string
      alternativeText?: string
    }
  }
}

export async function getMetadataPageBySlug({ puthCurrentPage, slug, currentNumberPage }: { puthCurrentPage: string; slug: string; currentNumberPage?: string }): Promise<Metadata> {
  const fallback = `${NEXT_PUBLIC_CLIENT_URL}${puthCurrentPage}`
  const page = await fetchPageBySlug(slug)

  if (!page) return {}

  const seoFields: SeoFields = {
    metaTitle: page.seo?.metaTitle,
    metaDescription: page.seo?.metaDescription,
    canonicalUrl: page.seo?.canonicalUrl,
    isNoIndexPage: page.seo?.isNoIndexPage
  }

  if (page.seo?.openGraph) {
    const og = page.seo.openGraph
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

  const pageNum = Number(currentNumberPage) || 1
  const suffix = pageNum > 1 ? ` - страница ${pageNum}` : ''

  if (suffix) {
    const baseTitle = (seoFields.metaTitle ?? page.title ?? '').trim()
    seoFields.metaTitle = `${baseTitle}${suffix}`

    if (seoFields.openGraph?.ogTitle) {
      seoFields.openGraph.ogTitle = `${seoFields.openGraph.ogTitle}${suffix}`
    }
  }

  return getMetadata({
    baseTitle: seoFields.metaTitle ?? page.title,
    baseDescription: seoFields.metaDescription ?? '',
    seo: seoFields,
    canonicalFallback: seoFields.canonicalUrl ?? fallback
  })
}

export function getMetadata(params: { baseTitle?: string; baseDescription?: string; seo?: SeoFields; defaultBanner?: string; canonicalFallback: string }): Metadata {
  const { baseTitle, baseDescription, seo, canonicalFallback, defaultBanner = OPEN_GRAPH_BANNER } = params

  const title = seo?.metaTitle || baseTitle || ''
  const description = seo?.metaDescription || baseDescription || ''
  const canonical = seo?.canonicalUrl ?? canonicalFallback

  return {
    title,
    description,
    alternates: { canonical },
    ...(seo?.isNoIndexPage ? NO_INDEX_PAGE : INDEX_PAGE),
    openGraph: {
      title: seo?.openGraph?.ogTitle || title,
      description: seo?.openGraph?.ogDescription || description,
      url: seo?.openGraph?.ogUrl || canonical,
      type: seo?.openGraph?.ogType || 'website',
      images: [
        {
          url: seo?.openGraph?.ogImage ? getFileUrl(seo?.openGraph?.ogImage?.url) : defaultBanner,
          alt: seo?.openGraph?.ogImage?.alternativeText || title
        }
      ]
    },
    twitter: {
      card: 'summary_large_image',
      title: seo?.openGraph?.ogTitle || title,
      description: seo?.openGraph?.ogDescription || description,
      images: seo?.openGraph?.ogImage?.url ? getFileUrl(seo?.openGraph?.ogImage?.url) : undefined
    }
  }
}
