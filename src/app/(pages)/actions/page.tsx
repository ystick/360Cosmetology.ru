import { cache } from 'react'

import { ActionPage } from './ActionPage'
import { getMetadataPageBySlug } from '@config'
import { ACTIONS_LINK } from '@constants/route.constants'
import { fetchPageBySlug } from '@utils/api'

export const revalidate = 300

const fetchAkcziis = cache(async () => {
  const url = `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/akczii/active`

  const res = await fetch(url, {
    headers: {
      Authorization: `Bearer ${process.env.STRAPI_API_TOKEN}`,
    }
  })

  if (!res.ok) {
    console.error('Ошибка при загрузке акций:', await res.text())
    return []
  }

  const json = await res.json()
  return json.data
})

export const generateMetadata = async () => getMetadataPageBySlug({ puthCurrentPage: ACTIONS_LINK.href, slug: 'actions' })

export default async function Action() {
  const [akcziis, pageData] = await Promise.all([fetchAkcziis(), fetchPageBySlug('actions')])

  return (
    <>
      <ActionPage akcziis={akcziis} />
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
