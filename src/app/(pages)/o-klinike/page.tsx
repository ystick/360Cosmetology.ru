import { cache } from 'react'

import { AboutUsPage } from './AboutUsPage'
import { gql, Sotrudnik } from '@/graphql/client'
import { getMetadataPageBySlug } from '@config'
import { ABOUT_US_LINK } from '@constants/route.constants'
import { fetchPageBySlug } from '@utils/api'

export const revalidate = 300

const fetchSotrudniks = cache(async () => {
  try {
    const { sotrudniks_connection } = await gql.getSotrudniks()
    return sotrudniks_connection.nodes as Sotrudnik[]
  } catch (error) {
    console.error('Ошибка при загрузке sotrudniks:', error)
    return []
  }
})

export const generateMetadata = async () => getMetadataPageBySlug({ puthCurrentPage: ABOUT_US_LINK.href, slug: 'o-klinike' })

export default async function AboutUs() {
  const [sotrudniks, pageData] = await Promise.all([fetchSotrudniks(), fetchPageBySlug('o-klinike')])

  return (
    <>
      <AboutUsPage sotrudniks={sotrudniks} />
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
