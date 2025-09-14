import type { ReactNode } from 'react'
import type { Metadata } from 'next'

import { Raleway } from 'next/font/google'

import '@css/globals.css'
import { ClientProviders } from '@providers'
import { NO_INDEX_PAGE } from './constants/seo.constants'
import { fetchPageBySlug } from '@utils/api'

const ralewaySans = Raleway({
  variable: '--font-raleway-sans',
  subsets: ['latin']
})

export const metadata: Metadata = {
  ...NO_INDEX_PAGE
}

export const revalidate = 300

export default async function RootLayout({
  children
}: Readonly<{
  children: ReactNode
}>) {
  const pageData = await fetchPageBySlug('layout')

  return (
    <html lang='ru'>
      <body className={`${ralewaySans.variable} flex flex-col min-h-screen antialiased`}>
        <ClientProviders>{children}</ClientProviders>
        {pageData?.seo?.scripts && (
          <div
            dangerouslySetInnerHTML={{
              __html: `${pageData.seo.scripts}`
            }}
          />
        )}
      </body>
    </html>
  )
}
