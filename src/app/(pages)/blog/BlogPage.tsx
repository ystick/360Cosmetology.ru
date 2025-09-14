'use client'

import type { FC } from 'react'
import type { BlogEntityResponseCollection } from '@/graphql/client'

import { CallToAction, Container, Layout } from '@shared'
import { Breadcrumbs, EmptyMessage, Heading, ListNavigation, ListPagination } from '@ui'
import { BLOG_LINK, HOME_LINK } from '@constants/route.constants'
import { List } from './list/List'

const itemsBreadcrumbs = [
  { label: HOME_LINK.value, href: HOME_LINK.href },
  { label: BLOG_LINK.value, href: BLOG_LINK.value }
]

type BlogPageProps = {
  blogs: BlogEntityResponseCollection | null
}
export const BlogPage: FC<BlogPageProps> = ({ blogs }) => {
  return (
    <Layout>
      <Container className='mb-17.5 lg:mb-28.5'>
        <Breadcrumbs items={itemsBreadcrumbs} />
        <Heading size={2} level={1} className='!text-accent-secondary mb-5 lg:mb-12.5'>
          Блог
        </Heading>
        <div className='mb-20 md:mb-40'>
          {blogs?.nodes && blogs?.nodes.length > 0 ? (
            <>
              <List blogs={blogs.nodes} />
              {blogs.pageInfo.pageCount > 1 && (
                <div className='flex items-center mt-5 md:mt-12.5'>
                  <div className='flex gap-[5px] flex-1'>
                    <ListPagination currentPage={blogs.pageInfo.page} pageCount={blogs.pageInfo.pageCount} pageName={BLOG_LINK.href} />
                  </div>
                  <div className='flex gap-[5px]'>
                    <ListNavigation currentPage={blogs.pageInfo.page} pageCount={blogs.pageInfo.pageCount} pageName={BLOG_LINK.href} />
                  </div>
                </div>
              )}
            </>
          ) : (
            <EmptyMessage message='Нет статей' />
          )}
        </div>
      </Container>
      <CallToAction />
    </Layout>
  )
}
