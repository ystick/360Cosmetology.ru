import { Metadata } from 'next'

import { NotFoundPage } from './NotFoundPage'
import { NO_INDEX_PAGE } from '@constants/seo.constants'

export const metadata: Metadata = {
  title: '404',
  ...NO_INDEX_PAGE
}

export default function NotFound() {
  return <NotFoundPage />
}
