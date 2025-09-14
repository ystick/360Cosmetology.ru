import type { FC } from 'react'
import type { IProjectCompany } from '@/app/assets/data/project-company'

import Image from 'next/image'

import { Arrow } from '@svg'

export const Item: FC<{ item: IProjectCompany }> = ({ item }) => {
  return (
    <a href={item.link} target='_blank' className='group relative first:rounded-l-[10px] last:rounded-r-[10px] flex-1 min-h-[178px] overflow-hidden md:min-h-[190px] lg:!rounded-none'>
      <div className='absolute z-[1] w-full h-full p-2.5 flex flex-col lg:pt-[15px] lg:pr-[15px] lg:pb-5 lg:pl-5'>
        <div className='flex-1 self-end'>
          <div className='w-5 h-5 rounded-[3px] flex items-center justify-center text-white bg-accent-secondary group-hover:bg-accent-secondary-hover group-focus:bg-accent-secondary-focus group-active:bg-accent-secondar duration-200 transition will-change-auto md:w-8 md:h-8 md:rounded-[6px] lg:h-16 lg:w-16 lg:rounded-[5px]'>
            <Arrow className='w-2.5 h-2.5 md:w-4 md:h-4 lg:w-[30px] lg:h-[30px] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-500 ease-in-out' />
          </div>
        </div>
        <div>
          <div className='bg-background rounded-[3px] py-[3px] px-[7px] text-xs font-semibold text-secondary inline-flex md:text-xs/[14px] md:px-2.5 md:py-[5px] md:rounded-[6px] lg:px-[30px] lg:py-[8px] lg:text-sm/[29px] lg:rounded-[10px]'>{item.title}</div>
        </div>
      </div>
      <Image unoptimized src={item.image} height={400} width={400} alt={`Проект ${item.title}`} className='group-hover:scale-110 h-full w-full object-cover transition-transform duration-200 ease-in-out z-0' />
    </a>
  )
}
