import type { FC } from 'react'
import type { Abonementy } from '@/graphql/client'

import { AbonementBlock001, CallToAction, Container, Layout } from '@shared'
import { Breadcrumbs } from '@ui'
import { ABONEMENTS_LINK, HOME_LINK } from '@constants/route.constants'

import '@css/abonement.css'

type AbonementSlugPagePageProps = {
  abonement: Abonementy
}

export const AbonementSlugPage: FC<AbonementSlugPagePageProps> = ({ abonement }) => {
  const itemsBreadcrumbs = [
    { label: HOME_LINK.value, href: HOME_LINK.href },
    { label: ABONEMENTS_LINK.value, href: ABONEMENTS_LINK.href },
    { label: abonement.title, href: `${ABONEMENTS_LINK.href}/${abonement.slug}` }
  ]
  return (
    <Layout>
      <Container>
        <Breadcrumbs items={itemsBreadcrumbs} />
      </Container>
      <div className='abonement_body'>
        <AbonementBlock001 abonement={abonement} />
      </div>
      <CallToAction />
    </Layout>
  )
}
