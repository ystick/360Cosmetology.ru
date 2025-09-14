import type { FC, ReactNode } from 'react'

import { Header } from '../header/Header'
import { Footer } from '../footer/Footer'

interface LayoutProps {
  children: ReactNode
}

export const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <main className='flex-1 mb-12.5 md:mb-25'>{children}</main>
      <Footer />
    </>
  )
}
