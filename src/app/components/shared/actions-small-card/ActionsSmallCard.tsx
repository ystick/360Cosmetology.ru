'use client'

import type { Akczii } from '@/graphql/client'
import type { FC } from 'react'

import { useCallback } from 'react'
import Link from 'next/link'
import Image from 'next/image'

import { formatDayMonth, getFileUrl } from '@utils'
import { ACTIONS_LINK } from '@constants/route.constants'

type ActionsSmallCardProps = {
  action: Akczii
}

export const ActionsSmallCard: FC<ActionsSmallCardProps> = ({ action }) => {
  const dateStart = useCallback(() => {
    return formatDayMonth(action.dateStart)
  }, [action.dateStart])

  const dateExpired = useCallback(() => {
    return formatDayMonth(action.dateExpired)
  }, [action.dateExpired])

  return (
    <Link href={`${ACTIONS_LINK.href}/${action.slug}`} className='group'>
      <div className='relative mb-5 rounded-[10px] overflow-hidden h-[309px] md:h-[309px]'>
        <div className='absolute w-full h-full p-5 z-[4]'>
          {action.dateStart ||
            (action.dateExpired && (
              <div className='px-5 py-2.5 rounded-[10px] bg-white inline-block'>
                {action.dateStart && `${dateStart()}-`}
                {action.dateExpired && dateExpired()}
              </div>
            ))}
        </div>
        <Image unoptimized sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw' src={getFileUrl(action.mainImage.url)} alt='Акция' width={625} height={309} className='object-top w-full h-full object-cover group-hover:scale-110 transition ease-in-out duration-200' />
      </div>
      <div className='mb-5'>
        <h3 className='text-foreground font-semibold text-[21px]/[25px] md:text-[32px]/[38px]'>{action.title}</h3>
      </div>
      <div>
        <p className='text-foreground text-sm/4'>{action.shortDescription}</p>
      </div>
    </Link>
  )
}
