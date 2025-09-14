import type { FC } from 'react'
import type { NovostiEntityResponseCollection } from '@/graphql/client'

import { Breadcrumbs, EmptyMessage, Heading, ListNavigation, ListPagination } from '@ui'
import { CallToAction, Container, Layout } from '@shared'
import { HOME_LINK, NEWS_LINK } from '@constants/route.constants'
import { List } from './list/List'

const itemsBreadcrumbs = [
  { label: HOME_LINK.value, href: HOME_LINK.href },
  { label: NEWS_LINK.value, href: NEWS_LINK.href }
]

type NewsPageProps = {
  novostis: NovostiEntityResponseCollection | null
}

export const NewsPage: FC<NewsPageProps> = ({ novostis }) => {

  return (
    <Layout>
      <Container>
        <Breadcrumbs items={itemsBreadcrumbs} />
        <Heading size={2} level={1} className='!text-accent-secondary mb-5 md:mb-12 lg:mb-10'>
          Новости
        </Heading>
        <div className='mb-20 md:mb-40'>
          {novostis?.nodes && novostis?.nodes.length > 0 ? (
            <>
              <List novostis={novostis.nodes} />
              {novostis.pageInfo.pageCount > 1 && (
                <div className='flex items-center mt-5 md:mt-12.5'>
                  <div className='flex gap-[5px] flex-1'>
                    <ListPagination currentPage={novostis.pageInfo.page} pageCount={novostis.pageInfo.pageCount} pageName={NEWS_LINK.href} />
                  </div>
                  <div className='flex gap-[5px]'>
                    <ListNavigation currentPage={novostis.pageInfo.page} pageCount={novostis.pageInfo.pageCount} pageName={NEWS_LINK.href} />
                  </div>
                </div>
              )}
            </>
          ) : (
            <EmptyMessage message='Нет новостей' />
          )}
        </div>
      </Container>
      <CallToAction />
    </Layout>
  )
}
