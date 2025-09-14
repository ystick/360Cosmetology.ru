import type { FC } from 'react'

import { BlocksRenderer } from '@strapi/blocks-react-renderer'

import { CallToAction, Container, EquipmentBlock003, EquipmentBlock004, Layout } from '@shared'
import { Breadcrumbs } from '@ui'
import { EQUIPMENT_LINK, HOME_LINK } from '@constants/route.constants'
import { MainBlock } from './main-block/MainBlock'
import { Oborudovanie, UploadFile } from '@/graphql/client'

import '@css/equipment.css'

type EquipmentSlugPageProps = { oborudovanie: Oborudovanie }

export const EquipmentSlugPage: FC<EquipmentSlugPageProps> = ({ oborudovanie }) => {
  const itemsBreadcrumbs = [
    { label: HOME_LINK.value, href: HOME_LINK.href },
    { label: EQUIPMENT_LINK.value, href: EQUIPMENT_LINK.href },
    { label: oborudovanie.title, href: `${EQUIPMENT_LINK.href}/${oborudovanie.slug}` }
  ]

  return (
    <Layout>
      <Container>
        <Breadcrumbs items={itemsBreadcrumbs} />
      </Container>
      <div className='equipment_body'>
        <Container>
          <MainBlock oborudovanie={oborudovanie} />
        </Container>
        {oborudovanie.body?.map((block, index) => {
          if ('contentJsonText' in block && block.contentJsonText) {
            return (
              <Container key={index} className='mb-7.5 md:mb-12.5 lg:mb-15'>
                <div dangerouslySetInnerHTML={{ __html: block.contentJsonText as string }} />
              </Container>
            )
          }
          if ('contentJson' in block && block.contentJson) {
            return <EquipmentBlock003 key={index} content={block.contentJson as string} />
          }

          if ('contentMedia' in block && block.contentMedia) {
            return <EquipmentBlock004 key={index} content={block.contentMedia as Pick<UploadFile, 'url' | 'alternativeText'>} />
          }
          return null
        })}
      </div>

      <CallToAction />
    </Layout>
  )
}
