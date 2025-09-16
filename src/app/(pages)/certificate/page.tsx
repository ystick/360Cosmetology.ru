import { getMetadataPageBySlug } from '@config'
import { CertificatePage } from './CertificatePage'
import { CERTIFICATE_LINK } from '@constants/route.constants'
import { fetchPageBySlug } from '@utils/api'

export const revalidate = 300

export const generateMetadata = async () => getMetadataPageBySlug({ puthCurrentPage: CERTIFICATE_LINK.href, slug: 'certificate' })

export default async function Contacts() {
  const pageData = await fetchPageBySlug('certificate')

  return (
    <>
      <CertificatePage />
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
