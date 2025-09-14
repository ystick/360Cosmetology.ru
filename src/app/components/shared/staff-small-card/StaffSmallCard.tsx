import type { FC } from 'react'

import Image from 'next/image'
import Link from 'next/link'

import { Arrow } from '@svg'
import { Sotrudnik } from '@/graphql/client'
import { getFileUrl } from '@utils'
import { STAFF_LINK } from '@constants/route.constants'

export const StaffSmallCard: FC<{ sotrudnik: Sotrudnik }> = ({ sotrudnik }) => {
  return (
    <Link href={`${STAFF_LINK.href}/${sotrudnik.slug}`} className='group block'>
      <div className='relative rounded-[5px] overflow-hidden mb-[5px] h-[242px]'>
        <Arrow className='absolute top-5 left-5 text-white h-[21px] w-[21px] z-[1]' />
        <Image unoptimized src={getFileUrl(sotrudnik.photo.url)} width={202} height={242} alt={sotrudnik.photo.alternativeText ?? sotrudnik.lastName + ' ' + sotrudnik.firstName + ' ' + sotrudnik.patronymic} className='w-full group-hover:scale-110 transition-transform duration-200 ease-in-out will-change-transform z-0' />
      </div>
      <div className='w-full rounded-[7px] h-[56px] mb-[5px] bg-white flex flex-col justify-center items-center text-center'>
        <div className='text-foreground font-bold text-base/[19px]'>{sotrudnik.lastName}</div>
        <div className='text-foreground text-xs/[14px]'>
          <span>
            {sotrudnik.firstName} {sotrudnik.patronymic}
          </span>
        </div>
      </div>
      <div className='w-full text-white text-xs/[15px] px-2 rounded-[7px] h-[70px] bg-accent-secondary flex flex-col justify-center items-center text-center'>{sotrudnik.position}</div>
    </Link>
  )
}
