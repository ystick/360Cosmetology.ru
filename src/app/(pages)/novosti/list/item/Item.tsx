import type { FC } from 'react'
import type { Novosti } from '@/graphql/client'

import Image from 'next/image'
import Link from 'next/link'

import { NEWS_LINK } from '@constants/route.constants'
import { getFileUrl } from '@utils'

type ItemProps = {
  novost: Novosti
}

export const Item: FC<ItemProps> = ({ novost }) => {
  return (
    <Link href={`${NEWS_LINK.href}/${novost.slug}`} className='group relative block rounded-[10px] overflow-hidden h-[164px] md:h-[289px] lg:h-[434px]'>
      <div className='absolute z-[1] inset-0 w-full h-full bg-gradient-to-b from-transparent via-transparent to-black/60 group-hover:to-black transition-colors ease-in-out duration-300'></div>
      <div className='absolute z-[2] inset-0 w-full h-full p-5 md:p-7.5 flex items-end'>
        <p className='text-white font-bold text-[18px]/[21px]'>{novost.title}</p>
      </div>
      <div className='h-full w-full relative z-[0]'>
        <Image unoptimized src={getFileUrl(novost.mainImage.url)} alt={`Новость - ${novost.mainImage.alternativeText ?? novost.title}`} width={305} height={343} className='w-full h-full object-cover group-hover:scale-110 transition ease-in-out duration-300' />
      </div>
    </Link>
  )
}
