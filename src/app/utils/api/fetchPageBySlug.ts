import { cache } from 'react'

import { gql, Page } from '@/graphql/client'

export const fetchPageBySlug = cache(async (slug: string) => {
  try {
    const { pages } = await gql.getPageBySlug({ slug })
    return pages[0] as Page
  } catch (error) {
    console.error('Ошибка при загрузке pages:', error)
    return null
  }
})
