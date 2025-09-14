import type { FC } from 'react'

import Link from 'next/link'

import { LogoMain } from '@svg'

export const LeftSide: FC = () => {
  return (
    <div className='pl-5 flex-1 h-full flex items-center md:pl-[30px] lg:mr-4'>
      <Link href='/' aria-label='Главная страница'>
        <LogoMain className='h-6 md:h-[35px]' />
      </Link>
    </div>
  )
}
