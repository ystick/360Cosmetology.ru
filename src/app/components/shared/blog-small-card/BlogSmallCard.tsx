import type { FC } from 'react'
import type { Blog } from '@/graphql/client'

import Link from 'next/link'
import Image from 'next/image'

import { BLOG_LINK } from '@constants/route.constants'
import { getFileUrl } from '@utils'

export const BlogSmallCard: FC<{ blog: Blog }> = ({ blog }) => {
  return (
    <Link href={`${BLOG_LINK.href}/${blog.slug}`} className='group block shrink-0 w-[227px] md:w-[276px]'>
      <div className='relative rounded-[5px] overflow-hidden mb-[6px] md:rounded-2.5 md:mb-2'>
        <Image unoptimized src={getFileUrl(blog.mainImage.url)} width={276} height={188} alt={`Блог на тему: ${blog.mainImage.alternativeText ?? blog.title}`} className='w-full object-cover h-[155px] md:h-[188px] group-hover:scale-110 transition-transform duration-200 ease-in-out will-change-transform z-0' />
      </div>
      <div className='w-full rounded-[7px] h-[42px] bg-white px-4 flex flex-col justify-center items-center text-center md:rounded-2.5 md:h-[51px]'>
        <div className='text-foreground px-1 font-bold text-sm/[17px] line-clamp-1 md:text-lg/[21px]'>{blog.title}</div>
      </div>
    </Link>
  )
}
