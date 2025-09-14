import { KontroliruyushhieOrganyiPage } from './KontroliruyushhieOrganyiPage'
import { KONTROLIRUYUSHHIE_ORGANY_LINK } from '@constants/route.constants'
import { getMetadataPageBySlug } from '@config'
import { fetchPageBySlug } from '@utils/api'

export const revalidate = 300

export const generateMetadata = async () => getMetadataPageBySlug({ puthCurrentPage: KONTROLIRUYUSHHIE_ORGANY_LINK.href, slug: 'kontroliruyushhie-organyi' })

export default async function KontroliruyushhieOrganyi() {
  const pageData = await fetchPageBySlug('kontroliruyushhie-organyi')

  return (
    <>
      <KontroliruyushhieOrganyiPage />
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
