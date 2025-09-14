import type { FC } from 'react'
import type { Blog } from '@/graphql/client'

import Image from 'next/image'
import { BlocksRenderer } from '@strapi/blocks-react-renderer'

import { Container } from '@shared'
import { getFileUrl } from '@utils'

type Block001Props = {
  blog: Blog
}

export const Block001: FC<Block001Props> = ({ blog }) => {
  return (
    <Container>
      <div className='md:bg-secondary mb-5 md:mb-7.5 md:grid md:grid-cols-[277px_auto] md:rounded-[10px] md:gap-x-[33px] md:items-center md:p-2.5 lg:grid-cols-[384px_auto] lg:gap-x-[70px]'>
        <div className='mb-5 md:row-start-2 lg:mb-10'>
          <h1 className='text-foreground text-balance font-bold text-[21px]/[24px] md:text-white lg:text-[30px]/[32px]'>{blog.title}</h1>
        </div>
        <div className='mb-5 rounded-[10px] overflow-hidden h-[164px] md:mb-0 md:row-start-1 md:row-end-5 md:row-span-full md:h-[252px] md:col-start-1 lg:h-[348px]'>
          <Image unoptimized src={getFileUrl(blog.mainImage.url)} alt={blog.mainImage.alternativeText ?? blog.title} width={430} height={384} className='h-full w-full object-cover' />
        </div>
        <div className='md:max-w-[301px] md:row-start-3 lg:max-w-[712px] long_description'>
          <BlocksRenderer content={blog.description} />
        </div>
      </div>
    </Container>
  )
}
