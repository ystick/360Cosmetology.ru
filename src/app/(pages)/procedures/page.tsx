import type { KategoriyaUslugi, UslugaEntityResponseCollection } from '@/graphql/client'

import { cache } from 'react'

import { gql, PublicationStatus } from '@/graphql/client'

import { SERVICES_PRICING_PER_PAGE } from '@constants/shared.constants'
import { ServicesPricingCategorySlugPage } from './[categorySlug]/ServicesPricingCategorySlugPage'
import { getMetadataPageBySlug } from '@config'
import { SERVICES_PRICING_LINK } from '@constants/route.constants'
import { fetchPageBySlug } from '@utils/api'

export const revalidate = 300

const fetchUslugas = cache(async (page = 1, categorySlug?: string) => {
  try {
    const variables: any = {
      page,
      pageSize: SERVICES_PRICING_PER_PAGE,
      status: PublicationStatus.Published,
      sort: ['publishedAt:DESC', 'documentId:ASC']
    }

    if (categorySlug) {
      variables.filters = {
        kategoriya_uslugi: {
          slug: {
            eq: categorySlug
          }
        }
      }
    }

    const { uslugas_connection } = await gql.getUslugasWithPagination(variables)
    return uslugas_connection as UslugaEntityResponseCollection
  } catch (error) {
    console.error('Ошибка при загрузке uslugas:', error)
    return null
  }
})

const fetchKategoriyaUslugis = cache(async () => {
  try {
    const { kategoriyaUslugis } = await gql.KategoriyaUslugis()
    return kategoriyaUslugis as KategoriyaUslugi[]
  } catch (error) {
    console.error('Ошибка при загрузке uslugas:', error)
    return []
  }
})

export const generateMetadata = async ({ searchParams }: { searchParams?: Promise<{ page: string }> }) => getMetadataPageBySlug({ puthCurrentPage: SERVICES_PRICING_LINK.href, slug: 'procedures', currentNumberPage: (await searchParams)?.page || '1' })

export default async function ServicesPricing({ searchParams }: { searchParams: Promise<{ page: string; category?: string }> }) {
  const { page: pageStr = '1', category = '' } = await (searchParams as any)

  const page = Number(pageStr) || 1

  const [uslugas, kategoriyaUslugis, pageData] = await Promise.all([fetchUslugas(page, category), fetchKategoriyaUslugis(), fetchPageBySlug('procedures')])

  return (
    <>
      <ServicesPricingCategorySlugPage uslugas={uslugas} kategoriyaUslugis={kategoriyaUslugis} />
      {pageData?.seo?.scripts && (
        <div
          dangerouslySetInnerHTML={{
            __html: `${pageData.seo.scripts}`
          }}
        />
      )}
    </>
  )
}
