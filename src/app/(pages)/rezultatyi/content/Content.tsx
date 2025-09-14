import type { FC, ReactNode } from 'react'

import Link from 'next/link'

import { CallToAction, Container, Layout } from '@shared'
import { Heading } from '@ui'
import { RESULTS_LINK_FOTO, RESULTS_LINK_VIDEO } from '@constants/route.constants'

type ContentProps = {
  children: ReactNode
  childrenBreadcrumbs: ReactNode
  currentPage: string
}
export const Content: FC<ContentProps> = ({ children, childrenBreadcrumbs, currentPage }) => {
  return (
    <Layout>
      <Container className='mb-12.5 md:mb-20 lg:mb-28.5'>
        {childrenBreadcrumbs}
        <div className='mb-7.5 lg:mb-12.5 md:flex md:items-end lg:items-start'>
          <div className='mb-7.5 md:mb-0 md:flex-1'>
            <Heading size={2} level={1} weight='medium' className='mb-5 lg:mb-7.5'>
              <span className='text-accent-secondary'>Результаты </span> нашей работы
            </Heading>
            <div>
              <p className='text-foreground text-base/[19px]'>Более 3000 пациентов за 10 лет работы</p>
            </div>
          </div>
          <div className='flex gap-2.5 md:shrink-0 lg:mt-[22px]'>
            <Link href={RESULTS_LINK_FOTO.href} className={`w-[98px] h-[39px] flex items-center justify-center rounded-[5px] font-medium text-base ${RESULTS_LINK_FOTO.href === currentPage ? ' text-white bg-accent-secondary hover:bg-accent-secondary-hover focus:bg-accent-secondary-focus active:bg-accent-secondary disabled:bg-disabled disabled:text-white' : 'text-accent-secondary bg-white hover:text-white hover:bg-accent-secondary-hover focus:bg-accent-secondary-focus active:text-accent-secondary active:bg-white disabled:bg-disabled disabled:text-white'}`}>
              Фото
            </Link>
            <Link href={RESULTS_LINK_VIDEO.href} className={`w-[98px] h-[39px] flex items-center justify-center rounded-[5px] font-medium text-base ${RESULTS_LINK_VIDEO.href === currentPage ? ' text-white bg-accent-secondary hover:bg-accent-secondary-hover focus:bg-accent-secondary-focus active:bg-accent-secondary disabled:bg-disabled disabled:text-white' : 'text-accent-secondary bg-white hover:text-white hover:bg-accent-secondary-hover focus:bg-accent-secondary-focus active:text-accent-secondary active:bg-white disabled:bg-disabled disabled:text-white'}`}>
              Видео
            </Link>
          </div>
        </div>
        {children}
      </Container>
      <CallToAction />
    </Layout>
  )
}
