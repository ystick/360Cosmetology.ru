import { cache } from 'react'

import { gql, RezultatyRabotiesVideosQuery } from '@/graphql/client'
import { RezultatyiPage } from './RezultatyiPage'
import { RESULTS_VIDEO } from '@constants/shared.constants'
import { RESULTS_LINK_VIDEO } from '@constants/route.constants'
import { getMetadataPageBySlug } from '@config'
import { fetchPageBySlug } from '@utils/api'

const fetchRezultatyRabotiesVideos = cache(async (page = 1) => {
  try {
    const { rezultatyRaboties_connection } = await gql.RezultatyRabotiesVideos({ page, pageSize: RESULTS_VIDEO })
    return rezultatyRaboties_connection as RezultatyRabotiesVideosQuery['rezultatyRaboties_connection']
  } catch (error) {
    console.error('Ошибка при загрузке blogs:', error)
    return null
  }
})

export const generateMetadata = async ({ searchParams }: { searchParams?: Promise<{ page: string }> }) => getMetadataPageBySlug({ puthCurrentPage: RESULTS_LINK_VIDEO.href, slug: 'video', currentNumberPage: (await searchParams)?.page || '1' })

export default async function RezultatyiVideo() {
  const [rezultatyRaboties, pageData] = await Promise.all([fetchRezultatyRabotiesVideos(), fetchPageBySlug('video')])

  return (
    <>
      <RezultatyiPage rezultatyRaboties={rezultatyRaboties} />
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
