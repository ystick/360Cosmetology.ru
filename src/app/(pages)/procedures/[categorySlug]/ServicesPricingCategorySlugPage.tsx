import type { FC } from 'react'
import type { KategoriyaUslugi, UslugaEntityResponseCollection } from '@/graphql/client'

import { Breadcrumbs, EmptyMessage, Heading, ListNavigation, ListPagination } from '@ui'
import { CallToAction, Container, Layout } from '@shared'
import { HOME_LINK, SERVICES_PRICING_LINK } from '@constants/route.constants'
import { Filter } from '../filter/Filter'
import { List } from '../list/List'

type ServicesPricingPageProps = {
  uslugas: UslugaEntityResponseCollection | null
  kategoriyaUslugis: KategoriyaUslugi[] | []
  categorySlug?: string
  kategoriyaUslugisSlug?: KategoriyaUslugi | null
}

export const ServicesPricingCategorySlugPage: FC<ServicesPricingPageProps> = ({ uslugas, kategoriyaUslugis, categorySlug = '', kategoriyaUslugisSlug }) => {
  const itemsBreadcrumbs = [{ label: HOME_LINK.value, href: HOME_LINK.href }, { label: SERVICES_PRICING_LINK.value, href: SERVICES_PRICING_LINK.href }, ...(kategoriyaUslugisSlug ? [{ label: kategoriyaUslugisSlug.name, href: `${SERVICES_PRICING_LINK.href}/${kategoriyaUslugisSlug.slug}` }] : [])]

  return (
    <Layout>
      <Container className='mb-17.5 lg:mb-28.5'>
        <Breadcrumbs items={itemsBreadcrumbs} />
        <Heading level={1} size={2} extra='mb-7.5 lg:mb-15'>
          {kategoriyaUslugisSlug ? ` Услуга: ${kategoriyaUslugisSlug.name.toLocaleLowerCase()}` : ' Наши услуги'}
        </Heading>
        <div className='mb-20 md:mb-40'>
          {kategoriyaUslugis.length > 0 && (
            <div className='mb-[30px]'>
              <Filter kategoriyaUslugis={kategoriyaUslugis} />
            </div>
          )}

          {kategoriyaUslugis.length > 0 && uslugas?.nodes && uslugas?.nodes.length > 0 ? (
            <>
              <List uslugas={uslugas.nodes} />
              {uslugas.pageInfo.pageCount > 1 && (
                <div className='flex items-center mt-5 md:mt-12.5'>
                  <div className='flex gap-[5px] flex-1'>
                    <ListPagination currentPage={uslugas.pageInfo.page} pageCount={uslugas.pageInfo.pageCount} pageName={SERVICES_PRICING_LINK.href} categorySlug={categorySlug} />
                  </div>
                  <div className='flex gap-[5px]'>
                    <ListNavigation currentPage={uslugas.pageInfo.page} pageCount={uslugas.pageInfo.pageCount} pageName={SERVICES_PRICING_LINK.href} categorySlug={categorySlug} />
                  </div>
                </div>
              )}
            </>
          ) : (
            <EmptyMessage message='Нет услуг' />
          )}
        </div>
      </Container>
      <CallToAction />
    </Layout>
  )
}
