'use client'

import type { FC } from 'react'
import type { Blog } from '@/graphql/client'

import { Container } from '@shared'
import { scrollToId } from '@utils'

type Block002Props = {
  blog: Blog
}

export const Block002: FC<Block002Props> = ({ blog }) => {
  return (
    <Container>
      <div className='mb-7.5 md:mb-12.5 lg:mb-25'>
        <ul className='!list-none !p-0 flex flex-wrap gap-2.5'>
          {blog.tags.map((tag, index) => (
            <li key={index} className=' !mb-0 bg-white rounded-[10px] shadow-lg/20 text-tertiary font-medium text-sm/5'>
              <button className='cursor-pointer px-7.5 py-[14px]' onClick={() => scrollToId(tag.idLInk, -100)}>
                {tag.title}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </Container>
  )
}
