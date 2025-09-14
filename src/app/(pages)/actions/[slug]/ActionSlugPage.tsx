import type { FC } from 'react'
import type { Akczii } from '@/graphql/client'

import Image from 'next/image'

import { CallToAction, Container, Layout } from '@shared'
import { Breadcrumbs, Heading } from '@ui'
import { ACTIONS_LINK, HOME_LINK } from '@constants/route.constants'
import { getFileUrl } from '@utils'

import '@css/action.css'

type ActionSlugPagePageProps = {
  action: Akczii
}

export const ActionSlugPage: FC<ActionSlugPagePageProps> = ({ action }) => {
  const itemsBreadcrumbs = [
    { label: HOME_LINK.value, href: HOME_LINK.href },
    { label: ACTIONS_LINK.value, href: ACTIONS_LINK.href },
    { label: action.title, href: `${ACTIONS_LINK.href}/${action.slug}` }
  ]
  return (
    <Layout>
      <Container>
        <Breadcrumbs items={itemsBreadcrumbs} />
        <Heading level={1} size={2} extra='mb-7.5 lg:mb-15'>
          {action.title}
        </Heading>
        <div className='action_body mb-16 md:mb-20 lg:mb-40'>
          <div className='mb-5 rounded-[10px] overflow-hidden h-[350px] md:mb-10 md:h-[450px] lg:mb-16'>
            <Image unoptimized src={getFileUrl(action.mainImage.url)} alt={action.mainImage.alternativeText ?? action.title} width={1920} height={600} className='h-full w-full object-top object-cover' />
          </div>
          <div dangerouslySetInnerHTML={{ __html: action.longDescription }} />
        </div>
      </Container>
      <CallToAction />
    </Layout>
  )
}
