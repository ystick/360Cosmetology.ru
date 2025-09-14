import type { FC } from 'react'

import Image from 'next/image'
import Link from 'next/link'

import { EQUIPMENT_LINK } from '@constants/route.constants'

export const Item: FC<{ index: number }> = ({ index }) => {
  const isTall = index % 3 === 0
  const fourth = index === 3 ? 'lg:row-start-1 lg:col-start-3 ' : ''
  const tenth = index === 9 ? 'lg:row-start-3 lg:col-start-3' : ''
  return (
    <Link href={`${EQUIPMENT_LINK.href}/1111`} className={`group relative block rounded-[10px] overflow-hidden ${isTall ? 'row-span-3 h-[303px] md:h-122 lg:h-[434px] lg:row-span-2' : 'h-[149px] md:h-[239px] lg:h-[207px] row-span-1'} ${fourth} ${tenth}`}>
      <div className='absolute inset-0 w-full h-full bg-gradient-to-b from-transparent via-transparent to-black/60 group-hover:to-black transition-colors ease-in-out duration-300'></div>
      <div className='absolute inset-0 w-full h-full px-[21px] py-4 md:px-[34px] md:py-[36px] lg:px-7.5 lg:py-8 flex items-end'>
        <p className='text-white font-bold text-[18px]/[21px]'>Прыщи на лбу</p>
      </div>
      <div className='h-full w-full'>
        <Image unoptimized src='/assets/images/temporary/blog/1.webp' alt='' width={305} height={343} className='w-full h-full object-cover' />
      </div>
    </Link>
  )
}
