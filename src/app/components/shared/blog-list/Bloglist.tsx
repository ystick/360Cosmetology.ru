import type { FC } from 'react'
import type { Blog } from '@/graphql/client'

import { Container } from '@shared'
import { CustomButton } from '@ui'
import { BlogSmallCard } from '../blog-small-card/BlogSmallCard'
import { BLOG_LINK } from '@constants/route.constants'

type BloglistProps = {
  blogs: Blog[]
}

export const Bloglist: FC<BloglistProps> = ({ blogs }) => {
  return (
    <Container>
      <div className='mb-5 md:mb-[50px]'>
        <h2 className='font-medium text-[27px]/[32px] md:text-[32px]/[38px] lg:text-[52px]/[61px]'>Статьи</h2>
      </div>
      <div className='overflow-hidden -mx-5 mb-5 md:-mx-[30px]'>
        <div className='flex gap-2.5 overflow-x-auto scrollbar-hidden px-5 md:px-[30px] md:gap-5'>
          {blogs.map((blog, i) => (
            <BlogSmallCard blog={blog} key={i} />
          ))}
        </div>
      </div>
      <div>
        <CustomButton size='auto' type='link' href={BLOG_LINK.href} theme='outline-dark' fontWeight='semiBold' className='w-full max-w-[204px] h-[33px] !rounded-[5px] text-sm'>
          Смотреть все статьи
        </CustomButton>
      </div>
    </Container>
  )
}
