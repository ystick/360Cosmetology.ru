import type { FC } from 'react'

import { Author, CallToAction, Container, Layout, ServicesPricingBlock001, ServicesPricingBlock002, ServicesPricingBlock003, ServicesPricingBlock004, ServicesPricingBlock006, ServicesPricingBlock007 } from '@shared'
import { Breadcrumbs } from '@ui'
import { HOME_LINK, SERVICES_PRICING_LINK } from '@constants/route.constants'
import { UploadFile, Usluga } from '@/graphql/client'

import '@css/services-pricing.css'

type ServicesPricingSlugPageProps = {
  uslugas: Usluga
}

export const ServicesPricingSlugPage: FC<ServicesPricingSlugPageProps> = ({ uslugas }) => {
  const itemsBreadcrumbs = [
    { label: HOME_LINK.value, href: HOME_LINK.href },
    { label: SERVICES_PRICING_LINK.value, href: SERVICES_PRICING_LINK.href },
    { label: uslugas.kategoriya_uslugi.name, href: `${SERVICES_PRICING_LINK.href}/${uslugas.kategoriya_uslugi.slug}` },
    { label: uslugas.title, href: `${SERVICES_PRICING_LINK.href}/${uslugas.kategoriya_uslugi.slug}/${uslugas.slug}` }
  ]

  return (
    <Layout>
      <Container>
        <Breadcrumbs items={itemsBreadcrumbs} />
      </Container>
      <ServicesPricingBlock001 uslugas={uslugas} />
      {uslugas.tags.length > 0 && <ServicesPricingBlock002 uslugas={uslugas} />}

      <div className='services_pricing_body'>
        {uslugas.body?.map((block, index) => {
          if ('contentJsonText' in block && block.contentJsonText) {
            return (
              <Container key={index} className='mb-7.5 md:mb-12.5 lg:mb-15'>
                <div dangerouslySetInnerHTML={{ __html: block.contentJsonText as string }} />
              </Container>
            )
          }
          if ('contentJson' in block && block.contentJson) {
            return <ServicesPricingBlock003 key={index} content={block.contentJson as string} />
          }
          if ('contentMedia' in block && block.contentMedia) {
            return <ServicesPricingBlock004 key={index} content={block.contentMedia as Pick<UploadFile, 'url' | 'alternativeText'>} />
          }

          return null
        })}
      </div>

      {uslugas?.author?.sotrudnik ? <Author author={uslugas.author} /> : null}
      <div>{uslugas.prices && <ServicesPricingBlock006 content={uslugas.prices} usluga={uslugas.title} />}</div>

      {uslugas.resultsWork && uslugas.resultsWork.images.length > 0 && <ServicesPricingBlock007 images={Array.from(uslugas.resultsWork.images)} />}
      <CallToAction />
    </Layout>
  )
}
