import type { FC } from 'react'

import Image from 'next/image'
import Link from 'next/link'
import { EQUIPMENT_LINK } from '@constants/route.constants'
import { Oborudovanie } from '@/graphql/client'
import { getFileUrl } from '@utils'

export const EquipmentSmallCard: FC<{ oborudovanie: Oborudovanie }> = ({ oborudovanie }) => {
  return (
    <Link href={`${EQUIPMENT_LINK.href}/${oborudovanie.slug}`} className='group block'>
      <div className='relative rounded-[5px] overflow-hidden mb-[5px] h-[242px] md:rounded-2.5'>
        <Image unoptimized src={getFileUrl(oborudovanie.mainImage.url)} width={312} height={242} alt={oborudovanie.mainImage.alternativeText ?? oborudovanie.title} className='w-full group-hover:scale-110 transition-transform duration-200 ease-in-out will-change-transform z-0' />
      </div>
      <div className='w-full rounded-[7px] h-[132px] bg-white px-4 flex flex-col justify-center items-center text-center md:rounded-2.5'>
        <div className='text-foreground font-bold text-base/[19px] mb-[14px]'>{oborudovanie.title}</div>
        <div className='text-foreground text-xs/[14px] px-1 text-balance'>
          <span>{oborudovanie.shortDescription}</span>
        </div>
      </div>
    </Link>
  )
}
