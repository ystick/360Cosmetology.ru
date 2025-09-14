import { getMetadataPageBySlug } from '@config'
import { ContactsPage } from './ContactsPage'
import { CONTACTS_LINK } from '@constants/route.constants'
import { fetchPageBySlug } from '@utils/api'

export const revalidate = 300

export const generateMetadata = async () => getMetadataPageBySlug({ puthCurrentPage: CONTACTS_LINK.href, slug: 'kontaktyi' })

export default async function Contacts() {
  const pageData = await fetchPageBySlug('kontaktyi')

  return (
    <>
      <ContactsPage />
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
