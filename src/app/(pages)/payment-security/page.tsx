import { getMetadataPageBySlug } from '@config'
import { PaymentMethodsPage } from './PaymentMethodsPage'
import { PAYMENT_METHODS_LINK } from '@constants/route.constants'
import { fetchPageBySlug } from '@utils/api'

export const revalidate = 300

export const generateMetadata = async () => getMetadataPageBySlug({ puthCurrentPage: PAYMENT_METHODS_LINK.href, slug: 'payment-security' })

export default async function PaymentMethods() {
  const pageData = await fetchPageBySlug('payment-security')

  return (
    <>
      <PaymentMethodsPage />
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
