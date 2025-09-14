import type { FC } from 'react'

import { Container, LazyVideo } from '@shared'

export const VideoBlock: FC = () => {
  return (
    <Container>
      <div className='mb-[50px] overflow-hidden lg:mb-[70px]'>
        <div className='mb-5 lg:mb-[30px] flex flex-wrap gap-3 md:justify-between md:items-center'>
          <h2 className='font-medium text-[27px]/[32px] md:text-[32px]/[38px] lg:text-[52px]/[61px]'>
            <span className='text-accent-secondary'>Видео</span> о клинике
          </h2>
        </div>
        <div className='group w-full'>
          <div className='relative w-full h-[211px] rounded-[10px] overflow-hidden md:h-[257px] lg:h-[460px]'>
            {/* <LazyVideo src='/assets/videos/1111.mp4' /> */}
          </div>
        </div>
      </div>
    </Container>
  )
}
