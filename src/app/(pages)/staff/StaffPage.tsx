import type { FC } from 'react'
import type { SotrudnikEntityResponseCollection, SpeczializacziiSotrudnika } from '@/graphql/client'

import { Breadcrumbs, EmptyMessage, Heading, ListNavigation, ListPagination } from '@ui'
import { CallToAction, Container, Layout } from '@shared'
import { HOME_LINK, STAFF_LINK } from '@constants/route.constants'
import { List } from './list/List'
import { Filter } from './filter/Filter'

const itemsBreadcrumbs = [
  { label: HOME_LINK.value, href: HOME_LINK.href },
  { label: STAFF_LINK.value, href: STAFF_LINK.href }
]

type StaffPageProps = {
  sotrudniks: SotrudnikEntityResponseCollection | null
  speczializacziiSotrudnikas: SpeczializacziiSotrudnika[] | []
}
export const StaffPage: FC<StaffPageProps> = ({ sotrudniks, speczializacziiSotrudnikas }) => {
  return (
    <Layout>
      <Container className='mb-17.5 lg:mb-28.5'>
        <Breadcrumbs items={itemsBreadcrumbs} />
        <Heading level={1} size={2} extra='mb-7.5 lg:mb-15'>
          Специалисты
        </Heading>
        <div className='mb-20 md:mb-40'>
          {speczializacziiSotrudnikas && (
            <div className='mb-[30px]'>
              <Filter speczializacziiSotrudnikas={speczializacziiSotrudnikas} />
            </div>
          )}
          {sotrudniks?.nodes && sotrudniks.nodes.length > 0 ? (
            <>
              <List sotrudniks={sotrudniks.nodes} />
              {sotrudniks.pageInfo.pageCount > 1 && (
                <div className='flex items-center mt-5 md:mt-12.5'>
                  <div className='flex gap-[5px] flex-1'>
                    <ListPagination currentPage={sotrudniks.pageInfo.page} pageCount={sotrudniks.pageInfo.pageCount} pageName={STAFF_LINK.href} />
                  </div>
                  <div className='flex gap-[5px]'>
                    <ListNavigation currentPage={sotrudniks.pageInfo.page} pageCount={sotrudniks.pageInfo.pageCount} pageName={STAFF_LINK.href} />
                  </div>
                </div>
              )}
            </>
          ) : (
            <EmptyMessage message='Нет специалистов' />
          )}
        </div>
      </Container>
      <CallToAction />
    </Layout>
  )
}
