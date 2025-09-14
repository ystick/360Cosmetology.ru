import type { FC } from 'react'
import type { Akczii } from '@/graphql/client'

import { CallToAction, CarouselActions, Container, Layout } from '@shared'
import { Breadcrumbs, EmptyMessage, Heading } from '@ui'
import { ACTIONS_LINK, HOME_LINK } from '@constants/route.constants'
import { ActionsSmallCard } from '@/app/components/shared/actions-small-card/ActionsSmallCard'

type ActionPageProps = {
  akcziis: Akczii[]
}

const itemsBreadcrumbs = [
  { label: HOME_LINK.value, href: HOME_LINK.href },
  { label: ACTIONS_LINK.value, href: ACTIONS_LINK.href }
]

export const ActionPage: FC<ActionPageProps> = ({ akcziis }) => {
  return (
    <Layout>
      <Container className='mb-12.5 lg:mb-15'>
        <Breadcrumbs items={itemsBreadcrumbs} />
        <Heading size={2} level={1} className='mb-7.5 lg:mb-12.5'>
          Акции
        </Heading>

        {akcziis.length >= 1 ? (
          <div className='flex flex-wrap gap-2.5'>
            {akcziis.map((action, i) => {
              return (
                <div key={i} className='w-full md:max-w-[calc(50%_-_5px)]'>
                  <ActionsSmallCard action={action} />
                </div>
              )
            })}
          </div>
        ) : (
          <EmptyMessage message='Нет акцией' />
        )}
      </Container>
      <CallToAction />
    </Layout>
  )
}
