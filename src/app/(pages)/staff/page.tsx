import type { SotrudnikEntityResponseCollection, SpeczializacziiSotrudnika } from '@/graphql/client'

import { cache } from 'react'

import { gql, PublicationStatus } from '@/graphql/client'
import { STAFF_PER_PAGE } from '@constants/shared.constants'
import { StaffPage } from './StaffPage'
import { STAFF_LINK } from '@constants/route.constants'
import { getMetadataPageBySlug } from '@config'
import { fetchPageBySlug } from '@utils/api'

export const revalidate = 300

const fetchSotrudniks = cache(async (page = 1, titles?: string[]) => {
  try {
    const args: any = {
      page,
      pageSize: STAFF_PER_PAGE,
      status: PublicationStatus.Published
    }
    if (titles && titles.length) {
      args.titles = titles
    }

    const { sotrudniks_connection } = await gql.getSotrudniksWithPagination(args)
    return sotrudniks_connection as SotrudnikEntityResponseCollection
  } catch (error) {
    console.error('Ошибка при загрузке sotrudniks:', error)
    return null
  }
})

const fetchSpeczializacziiSotrudnikas = cache(async () => {
  try {
    const { speczializacziiSotrudnikas } = await gql.getSpeczializacziiSotrudnikas()
    return speczializacziiSotrudnikas as SpeczializacziiSotrudnika[]
  } catch (error) {
    console.error('Ошибка при загрузке специализаций:', error)
    return []
  }
})

export const generateMetadata = async () => getMetadataPageBySlug({ puthCurrentPage: STAFF_LINK.href, slug: 'staff' })

export default async function Staff({ searchParams }: { searchParams: Promise<{ page: string; specializations?: string }> }) {
  const page = Number((await searchParams).page) || 1

  const titles = ((await searchParams).specializations || '')
    .split(',')
    .map((s) => s.trim())
    .filter(Boolean)

  const [sotrudniks, speczializacziiSotrudnikas, pageData] = await Promise.all([fetchSotrudniks(page, titles.length ? titles : undefined), fetchSpeczializacziiSotrudnikas(), fetchPageBySlug('staff')])

  return (
    <>
      <StaffPage sotrudniks={sotrudniks} speczializacziiSotrudnikas={speczializacziiSotrudnikas} />
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
