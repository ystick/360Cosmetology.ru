import type { FC } from 'react'

import { Container } from '@shared'

type NewsBlock003Props = {
  content: string
}

export const NewsBlock003: FC<NewsBlock003Props> = ({ content }) => {
  return (
    <Container className='flex gap-5 mb-7.5 md:gap-7.5 md:mb-12.5 lg:mb-15 lg:gap-[37px]'>
      <div className='w-[3px] h-auto bg-accent-secondary rounded-[3px] shrink-0'></div>
      <div className='News_block_003'>
        <div dangerouslySetInnerHTML={{ __html: content }} />
      </div>
    </Container>
  )
}
