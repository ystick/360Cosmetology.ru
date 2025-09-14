import type { FC } from 'react'

import Image from 'next/image'
import { BlocksRenderer } from '@strapi/blocks-react-renderer'

import { Heading } from '@ui'
import { Oborudovanie } from '@/graphql/client'
import { getFileUrl } from '@utils'

export const MainBlock: FC<{ oborudovanie: Oborudovanie }> = ({ oborudovanie }) => {
  return (
    <div className='mb-10 md:grid md:grid-cols-[244px_auto] md:gap-x-7.5 md:w-full md:shadow-md md:bg-white md:overflow-hidden md:items-center md:rounded-[10px] md:mb-12.5 lg:gap-x-12.5 lg:grid-cols-[306px_auto] lg:min-h-[443px]'>
      <div className='bg-white rounded-[10px] overflow-hidden shadow-md flex items-center gap-8 mb-10 md:mb-0 md:contents'>
        <div className='w-[30%] min-w-[135px] md:row-span-full md:row-end-7 md:w-full md:h-full'>
          <Image unoptimized src={getFileUrl(oborudovanie.mainImage.url)} width={306} height={443} alt={oborudovanie.mainImage.alternativeText ?? oborudovanie.title} className='w-full h-full object-cover' />
        </div>
        <div className='md:pt-[35px] md:mb-5 md:row-start-3 md:self-end lg:pt-12.5 lg:mb-6'>
          <Heading size={2} level={1}>
            {oborudovanie.title}
          </Heading>
        </div>
      </div>
      <div className='md:pb-[35px] md:row-start-4 lg:pb-12.5 lg:max-w-[712px] long_description'>
        <BlocksRenderer content={oborudovanie.longDescription} />
      </div>
    </div>
  )
}
