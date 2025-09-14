import type { FC } from 'react'
import type { Sotrudnik } from '@/graphql/client'

import Image from 'next/image'
import Link from 'next/link'

import { Arrow } from '@svg'
import { getFileUrl } from '@utils'
import { STAFF_LINK } from '@constants/route.constants'

export const StaffSmallListCard: FC<{ sotrudnik: Sotrudnik }> = ({ sotrudnik }) => {
  return (
    <Link href={`${STAFF_LINK.href}/${sotrudnik.slug}`} className='group flex gap-[5px] w-full md:w-[calc(33.333%_-_13.5px)] md:flex-col lg:w-[calc(20%_-_16px)]'>
      <div className='relative rounded-[5px] overflow-hidden w-[39%] aspect-[16/12] min-h-[131px] md:mb-[5px] md:aspect-auto md:w-full md:h-[242px] md:min-h-0'>
        <Arrow className='absolute top-5 left-5 text-white h-[21px] w-[21px] z-[1]' />
        <Image unoptimized src={getFileUrl(sotrudnik.photo.url)} width={202} height={242} alt={sotrudnik.photo.alternativeText ?? sotrudnik.lastName + ' ' + sotrudnik.firstName + ' ' + sotrudnik.patronymic} className='w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-200 ease-in-out will-change-transform z-0' />
      </div>
      <div className='flex-1 flex flex-col'>
        <div className='w-full rounded-[7px] h-[56px] mb-[5px] px-[15px] bg-white flex flex-col justify-center md:items-center md:text-center'>
          <div className='text-foreground font-bold text-base/[19px]'>{sotrudnik.lastName}</div>
          <div className='text-foreground text-xs/[14px]'>
            <span>
              {sotrudnik.firstName} {sotrudnik.patronymic}
            </span>
          </div>
        </div>
        <div className='flex-1 w-full text-white text-xs/[15px] px-[15px] rounded-[7px] h-[70px] bg-accent-secondary flex flex-col justify-center items-center md:flex-auto md:text-center line-clamp-3'>{sotrudnik.position}</div>
      </div>
    </Link>
  )
}
