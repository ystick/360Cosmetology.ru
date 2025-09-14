import { cache } from 'react'

import { gql, RezultatyRabotiesImagesQuery } from '@/graphql/client'
import { RezultatyiPage } from './RezultatyiPage'
import { RESULTS_FOTO } from '@constants/shared.constants'
import { getMetadataPageBySlug } from '@config'
import { RESULTS_LINK_FOTO } from '@constants/route.constants'
import { fetchPageBySlug } from '@utils/api'

export const revalidate = 300

const fetchRezultatyRabotiesImages = cache(async (page = 1) => {
  try {
    const { rezultatyRaboties_connection } = await gql.RezultatyRabotiesImages({ page, pageSize: RESULTS_FOTO })
    return rezultatyRaboties_connection as RezultatyRabotiesImagesQuery['rezultatyRaboties_connection']
  } catch (error) {
    console.error('Ошибка при загрузке blogs:', error)
    return null
  }
})

export const generateMetadata = async ({ searchParams }: { searchParams?: Promise<{ page: string }> }) => getMetadataPageBySlug({ puthCurrentPage: RESULTS_LINK_FOTO.href, slug: 'foto', currentNumberPage: (await searchParams)?.page || '1' })

export default async function RezultatyiFoto() {
  const [rezultatyRaboties, pageData] = await Promise.all([fetchRezultatyRabotiesImages(), fetchPageBySlug('foto')])

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
