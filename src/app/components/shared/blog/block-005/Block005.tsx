import type { FC } from 'react'

import { Container } from '@shared'

type BlogBlock005Props = {
  content: string
}

export const Block005: FC<BlogBlock005Props> = ({ content }) => {
  return (
    <Container className='mb-7.5 md:mb-12.5 lg:mb-15'>
      <div className='bg-white rounded-[10px] p-4 md:p-7.5 shadow-xl/7 blog_block_005'>
        <div dangerouslySetInnerHTML={{ __html: content }} />
      </div>
    </Container>
  )
}
