import type { FC } from 'react'

import Link from 'next/link'

import { Container, Layout } from '@shared'
import { HOME_LINK } from '@constants/route.constants'

export const NotFoundPage: FC = () => (
  <Layout>
    <Container className='flex flex-col  h-full py-20 justify-center md:py-30 lg:py-40'>
      <div className='mb-[40px]'>
        <h1 className='text-foreground text-[100px] leading-[100px] font-bold lg:text-[200px] lg:leading-[200px]'>404</h1>
      </div>
      <div className='mb-8'>
        <p className='text-base'>Упс...вы попали на несуществующую страницу</p>
      </div>
      <div>
        <Link href={HOME_LINK.href} className='underline text-lg font-medium'>
          Вернуться на главную
        </Link>
      </div>
    </Container>
  </Layout>
)
