import type { FC } from 'react'

import { Container } from '@shared'

type NewsBlock005Props = {
  content: string
}

export const NewsBlock005: FC<NewsBlock005Props> = ({ content }) => {
  return (
    <Container className='mb-7.5 md:mb-12.5 lg:mb-15'>
      <div className='bg-white rounded-[10px] p-4 md:p-7.5 shadow-xl/7 News_block_005'>
        <div dangerouslySetInnerHTML={{ __html: content }} />
      </div>
    </Container>
  )
}
