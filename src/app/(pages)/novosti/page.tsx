import { cache } from 'react'

import { gql, NovostiEntityResponseCollection, PublicationStatus } from '@/graphql/client'
import { NEWS_PER_PAGE } from '@constants/shared.constants'
import { NewsPage } from './NewsPage'
import { getMetadataPageBySlug } from '@config'
import { NEWS_LINK } from '@constants/route.constants'
import { fetchPageBySlug } from '@utils/api'

export const revalidate = 300

const fetchNovostis = cache(async (page = 1) => {
  try {
    const { novostis_connection } = await gql.getNovostisWithPagination({ page, pageSize: NEWS_PER_PAGE, status: PublicationStatus.Published })
    return novostis_connection as NovostiEntityResponseCollection
  } catch (error) {
    console.error('Ошибка при загрузке novostis:', error)
    return null
  }
})

export const generateMetadata = async ({ searchParams }: { searchParams?: Promise<{ page: string }> }) => getMetadataPageBySlug({ puthCurrentPage: NEWS_LINK.href, slug: 'novosti', currentNumberPage: (await searchParams)?.page || '1' })

export default async function News({ searchParams }: { searchParams: Promise<{ page: string }> }) {
  const page = Number((await searchParams).page) || 1

  const [novostis, pageData] = await Promise.all([fetchNovostis(page), fetchPageBySlug('novosti')])

  return (
    <>
      <NewsPage novostis={novostis} />
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
