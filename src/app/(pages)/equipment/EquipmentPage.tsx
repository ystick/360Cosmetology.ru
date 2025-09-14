import type { FC } from 'react'
import type { OborudovanieEntityResponseCollection } from '@/graphql/client'

import { Breadcrumbs, EmptyMessage, Heading, ListNavigation, ListPagination } from '@ui'
import { Container, Layout } from '@shared'
import { EQUIPMENT_LINK, HOME_LINK } from '@constants/route.constants'
import { List } from './list/List'

const itemsBreadcrumbs = [
  { label: HOME_LINK.value, href: HOME_LINK.href },
  { label: EQUIPMENT_LINK.value, href: EQUIPMENT_LINK.href }
]

type HomePageProps = {
  oborudovanies: OborudovanieEntityResponseCollection | null
}

export const EquipmentPage: FC<HomePageProps> = ({ oborudovanies }) => {
  return (
    <Layout>
      <Container>
        <Breadcrumbs items={itemsBreadcrumbs} />
        <Heading size={2} level={1} className='!text-accent-secondary mb-5 lg:mb-12.5'>
          Оборудование
        </Heading>
        <div className='mb-5 md:mb-12.5'>
          {oborudovanies?.nodes && oborudovanies?.nodes.length > 0 ? (
            <>
              <List oborudovanies={oborudovanies.nodes} />
              {oborudovanies.pageInfo.pageCount > 1 && (
                <div className='flex items-center mt-5 md:mt-12.5'>
                  <div className='flex gap-[5px] flex-1'>
                    <ListPagination currentPage={oborudovanies.pageInfo.page} pageCount={oborudovanies.pageInfo.pageCount} pageName={EQUIPMENT_LINK.href} />
                  </div>
                  <div className='flex gap-[5px]'>
                    <ListNavigation currentPage={oborudovanies.pageInfo.page} pageCount={oborudovanies.pageInfo.pageCount} pageName={EQUIPMENT_LINK.href} />
                  </div>
                </div>
              )}
            </>
          ) : (
            <EmptyMessage message='Нет оборудования' />
          )}
        </div>
      </Container>
    </Layout>
  )
}
