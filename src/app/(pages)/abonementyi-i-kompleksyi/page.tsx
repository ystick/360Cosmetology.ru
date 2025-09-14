import { cache } from 'react'

import { AbonementsPage } from './AbonementsPage'
import { AbonementyEntityResponseCollection, gql, PublicationStatus } from '@/graphql/client'
import { ABONEMENTS_PER_PAGE } from '@constants/shared.constants'
import { getMetadataPageBySlug } from '@config'
import { ABONEMENTS_LINK } from '@constants/route.constants'
import { fetchPageBySlug } from '@utils/api'

export const revalidate = 300

const fetchAbonementies = cache(async (page = 1) => {
  try {
    const { abonementies_connection } = await gql.getAbonementiesWithPagination({ page, pageSize: ABONEMENTS_PER_PAGE, status: PublicationStatus.Published })
    return abonementies_connection as AbonementyEntityResponseCollection
  } catch (error) {
    console.error('Ошибка при загрузке abonementies:', error)
    return null
  }
})

export const generateMetadata = async ({ searchParams }: { searchParams?: Promise<{ page: string }> }) =>
  getMetadataPageBySlug({
    puthCurrentPage: ABONEMENTS_LINK.href,
    slug: 'abonementyi-i-kompleksyi',
    currentNumberPage: (await searchParams)?.page || '1'
  })

export default async function Abonements({ searchParams }: { searchParams: Promise<{ page: string }> }) {
  const page = Number((await searchParams).page) || 1

  const [abonementies, pageData] = await Promise.all([fetchAbonementies(page), fetchPageBySlug('abonementyi-i-kompleksyi')])

  return (
    <>
      <AbonementsPage abonementies={abonementies} />
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
