import { cache } from 'react'

import { gql, OborudovanieEntityResponseCollection, PublicationStatus } from '@/graphql/client'
import { EquipmentPage } from './EquipmentPage'
import { EQUIPMENT_PER_PAGE } from '@constants/shared.constants'
import { getMetadataPageBySlug } from '@config'
import { EQUIPMENT_LINK } from '@constants/route.constants'
import { fetchPageBySlug } from '@utils/api'

export const revalidate = 300

const fetchOborudovanies = cache(async (page = 1) => {
  try {
    const { oborudovanies_connection } = await gql.getOborudovaniesWithPagination({ page, pageSize: EQUIPMENT_PER_PAGE, status: PublicationStatus.Published })
    return oborudovanies_connection as OborudovanieEntityResponseCollection
  } catch (error) {
    console.error('Ошибка при загрузке oborudovanies:', error)
    return null
  }
})

export const generateMetadata = async ({ searchParams }: { searchParams?: Promise<{ page: string }> }) => getMetadataPageBySlug({ puthCurrentPage: EQUIPMENT_LINK.href, slug: 'equipment', currentNumberPage: (await searchParams)?.page || '1' })

export default async function Equipment({ searchParams }: { searchParams: Promise<{ page: string }> }) {
  const page = Number((await searchParams).page) || 1

  const [oborudovanies, pageData] = await Promise.all([fetchOborudovanies(page), fetchPageBySlug('equipment')])

  return (
    <>
      <EquipmentPage oborudovanies={oborudovanies} />
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
