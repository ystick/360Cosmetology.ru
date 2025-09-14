import { ThankYouPage } from './ThankYouPage'
import { THANK_YOU_LINK } from '@constants/route.constants'
import { getMetadataPageBySlug } from '@config'
import { fetchPageBySlug } from '@utils/api'

export const revalidate = 300

export const generateMetadata = async () => getMetadataPageBySlug({ puthCurrentPage: THANK_YOU_LINK.href, slug: 'thank-you' })

export default async function ThankYou() {
  const pageData = await fetchPageBySlug('thank-you')

  return (
    <>
      <ThankYouPage />
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
