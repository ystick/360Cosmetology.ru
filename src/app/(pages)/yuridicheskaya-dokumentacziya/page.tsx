import { LegalInformationPage } from './LegalInformationPage'
import { LEGAL_INFORMATION_LINK } from '@constants/route.constants'
import { getMetadataPageBySlug } from '@config'
import { fetchPageBySlug } from '@utils/api'

export const revalidate = 300

export const generateMetadata = async () => getMetadataPageBySlug({ puthCurrentPage: LEGAL_INFORMATION_LINK.href, slug: 'yuridicheskaya-dokumentacziya' })

export default async function LegalInformation() {
  const pageData = await fetchPageBySlug('yuridicheskaya-dokumentacziya')

  return (
    <>
      <LegalInformationPage />
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
