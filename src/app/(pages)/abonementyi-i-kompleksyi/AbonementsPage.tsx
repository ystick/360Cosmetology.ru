import type { FC } from 'react'
import type { AbonementyEntityResponseCollection } from '@/graphql/client'

import { AbonementItem, CallToAction, Container, Layout } from '@shared'
import { ABONEMENTS_LINK, HOME_LINK } from '@constants/route.constants'
import { Breadcrumbs, EmptyMessage, Heading, ListNavigation, ListPagination } from '@ui'

const itemsBreadcrumbs = [
  { label: HOME_LINK.value, href: HOME_LINK.href },
  { label: ABONEMENTS_LINK.value, href: ABONEMENTS_LINK.value }
]

type AbonementsPageProps = {
  abonementies: AbonementyEntityResponseCollection | null
}

export const AbonementsPage: FC<AbonementsPageProps> = ({ abonementies }) => {
  return (
    <Layout>
      <Container>
        <Breadcrumbs items={itemsBreadcrumbs} />
        <Heading level={1} size={2} extra='mb-7.5 lg:mb-15'>
          <span className='text-accent-secondary block md:inline-block'> Абонементы </span> и комплексы процедур
        </Heading>
        {abonementies?.nodes.length ? (
          <>
            <div className='flex flex-col gap-2.5 md:gap-5 lg:gap-2.5'>
              {abonementies.nodes.map((abonement, i) => (
                <AbonementItem abonement={abonement} key={i} />
              ))}
            </div>
            {abonementies.pageInfo.pageCount > 1 && (
              <div className='flex items-center'>
                <div className='flex gap-[5px] flex-1'>
                  <ListPagination currentPage={abonementies.pageInfo.page} pageCount={abonementies.pageInfo.pageCount} pageName={ABONEMENTS_LINK.href} />
                </div>
                <div className='flex gap-[5px]'>
                  <ListNavigation currentPage={abonementies.pageInfo.page} pageCount={abonementies.pageInfo.pageCount} pageName={ABONEMENTS_LINK.href} />
                </div>
              </div>
            )}
          </>
        ) : (
          <EmptyMessage message='Нет Абонементов' />
        )}
      </Container>
      <div className='mt-14 lg:mt-28.5'>
        <CallToAction />
      </div>
    </Layout>
  )
}
