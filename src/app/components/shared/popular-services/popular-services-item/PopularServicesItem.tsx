import type { Usluga } from '@/graphql/client'
import type { FC } from 'react'

import Image from 'next/image'
import Link from 'next/link'

import { Arrow } from '@svg'
import { SERVICES_PRICING_LINK } from '@constants/route.constants'
import { getFileUrl } from '@utils'

type PopularServicesItemProps = {
  usluga: Usluga
  className?: string
}

export const PopularServicesItem: FC<PopularServicesItemProps> = ({ usluga, className }) => {
  const link = usluga?.kategoriya_uslugi?.slug ? `${usluga?.kategoriya_uslugi?.slug}/${usluga.slug}` : `${usluga.slug}`
  return (
    <Link href={`${SERVICES_PRICING_LINK.href}/${link}`} className={`group relative rounded-[10px] overflow-hidden block h-[149px] w-full  md:h-[182px] lg:h-[227px] ${className}`}>
      <Image unoptimized src={getFileUrl((usluga?.popularService?.mainImage && usluga?.popularService?.mainImage?.url) ?? usluga.mainImage.url)} width={440} height={227} alt={`Популярная категория: ${(usluga?.popularService?.mainImage && usluga?.popularService?.mainImage?.alternativeText) ?? usluga.mainImage.alternativeText ?? usluga.title}`} className='w-full h-full object-cover group-hover:scale-110  transition-transform duration-200 ease-in-out z-0' />
      <div className='absolute bottom-0 left-0 z-[1]'>
        <div className='px-5 py-4 bg-white/70 flex items-center gap-[11px] rounded-tr-[10px]'>
          <span className='font-bold max-[430px]:text-xs sm:text-base md:text-sm lg:text-base'>{(usluga?.popularService?.mainImage && usluga?.popularService?.mainImage.alternativeText) ?? usluga.title}</span>
          <Arrow className='w-[11px] h-[11px] shrink-0' />
        </div>
      </div>
    </Link>
  )
}
