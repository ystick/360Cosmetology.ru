import type { Metadata } from 'next'

import { NotFoundPage } from './(pages)/[...not_found]/NotFoundPage'
import { NO_INDEX_PAGE } from './constants/seo.constants'

export const metadata: Metadata = {
  title: '404',
  ...NO_INDEX_PAGE
}

export default async function NotFound() {
  return <NotFoundPage />
}
