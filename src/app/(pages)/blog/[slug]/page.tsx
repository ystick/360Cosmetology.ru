import { cache } from 'react'

import { Metadata } from 'next'
import { notFound } from 'next/navigation'

import { BlogSlugPage } from './BlogSlugPage'
import { Blog, gql, PublicationStatus } from '@/graphql/client'
import { NEXT_PUBLIC_CLIENT_URL } from '@constants/seo.constants'
import { getMetadata, NextOGType, SeoFields } from '@config'
import { BLOG_LINK } from '@constants/route.constants'

export const revalidate = 300

const fetchBlog = cache(async (slug: string) => {
  try {
    const { blogs } = await gql.BlogBySlug({ slug, status: PublicationStatus.Published })
    return blogs[0] as Blog
  } catch (error) {
    console.error('Ошибка при загрузке oborudovanies:', error)
    return null
  }
})

export async function generateMetadata(props: { params: ParamsType }): Promise<Metadata> {
  const { slug } = await props.params
  const fallback = `${NEXT_PUBLIC_CLIENT_URL}${BLOG_LINK.href}/${slug}`
  const blog = await fetchBlog(slug)
  if (!blog) return {}

  const seoFields: SeoFields = {
    metaTitle: blog.seo?.metaTitle,
    metaDescription: blog.seo?.metaDescription,
    canonicalUrl: blog.seo?.canonicalUrl,
    isNoIndexPage: blog.seo?.isNoIndexPage
  }

  if (blog.seo?.openGraph) {
    const og = blog.seo.openGraph
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
    baseTitle: seoFields.metaTitle ?? blog.title,
    seo: seoFields,
    canonicalFallback: seoFields.canonicalUrl ?? fallback
  })
}

export default async function BlogSlug({ params }: { params: Promise<{ slug: string }> }) {
  const slug = (await params).slug
  const blog = await fetchBlog(slug)

  if (!blog) return notFound()
  return (
    <>
      <BlogSlugPage blog={blog} />
      {blog?.seo?.scripts && (
        <div
          dangerouslySetInnerHTML={{
            __html: `${blog.seo.scripts}`
          }}
        />
      )}
    </>
  )
}
