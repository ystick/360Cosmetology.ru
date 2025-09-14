import { cache } from 'react'

import { BlogEntityResponseCollection, gql, PublicationStatus, type Blog } from '@/graphql/client'
import { BlogPage } from './BlogPage'
import { BLOGS_PER_PAGE } from '@constants/shared.constants'
import { BLOG_LINK } from '@constants/route.constants'
import { getMetadataPageBySlug } from '@config'
import { fetchPageBySlug } from '@utils/api'

export const revalidate = 300

const fetchBlogs = cache(async (page = 1) => {
  try {
    const { blogs_connection } = await gql.getBlogsWithPagination({ page, pageSize: BLOGS_PER_PAGE, status: PublicationStatus.Published })
    return blogs_connection as BlogEntityResponseCollection
  } catch (error) {
    console.error('Ошибка при загрузке blogs:', error)
    return null
  }
})

export const generateMetadata = async ({ searchParams }: { searchParams?: Promise<{ page: string }> }) => getMetadataPageBySlug({ puthCurrentPage: BLOG_LINK.href, slug: 'blog', currentNumberPage: (await searchParams)?.page || '1' })

export default async function Blog({ searchParams }: { searchParams: Promise<{ page: string }> }) {
  const page = Number((await searchParams).page) || 1

  const [blogs, pageData] = await Promise.all([fetchBlogs(page), fetchPageBySlug('blog')])

  return (
    <>
      <BlogPage blogs={blogs} />
      {pageData?.seo?.scripts && (
        <div
          dangerouslySetInnerHTML={{
            __html: `${pageData.seo.scripts}`
          }}
        />
      )}
    </>
  )
}
