import type { FC } from 'react'

import { Quote } from '@svg'
import { Container, LazyVideo } from '@shared'

export const QuoteWithVideo: FC = () => {
  return (
    <Container className='mb-[50px] lg:max-w-[1440px] lg:!px-0'>
      <div className='bg-secondary rounded-[10px] px-2.5 py-3 flex justify-between gap-2 md:p-0 md:bg-transparent lg:gap-0'>
        <div className='py-2 pl-[5px] md:bg-secondary md:w-full md:order-last md:rounded-[10px] md:px-[30px] md:py-8 lg:rounded-none xl:py-[50px] xl:px-[83px]'>
          <div className=' lg:max-w-[694px]'>
            <div className='mb-2.5 md:mb-[19px] lg:flex lg:items-center lg:gap-[26px] lg:mb-[55px]'>
              <Quote className='h-4 w-11.5 md:w-[56px] md:h-[19px] lg:w-[127px] lg:h-11 lg:shrink-0' />
              <div className='hidden lg:block w-full h-[3px] bg-accent-secondary rounded-[1px]'></div>
            </div>
            <div className='mb-5 lg:mb-10 lg:max-w-[502px]'>
              <p className='text-white text-xs lg:text-base/[19px]'>В профессии врача, кроме образования, важны талант и&nbsp;трудолюбие. Мы выбираем специалистов с высокими внутренними качествами, с тягой к знаниям и огнем в глазах. Человек должен любить свою профессию, людей, быть честным. Честный человек – честный во всем. В глазах у доктора должны быть не доллары, а желание помочь. Мы ответственно подходим к нашему делу и дорожим своей репутацией.</p>
            </div>
            <div className='mb-2.5'>
              <p className='text-white font-bold text-xs/[14px] lg:text-[21px]/[25px]'>Губарева Светлана Васильевна</p>
            </div>
            <div className='md:max-w-[240px] lg:mb-[81px] lg:max-w-[280px]'>
              <p className='text-white/50 text-xs md:text-xs/[14px] md:font-semibold lg:text-sm/[16px]'>
                Основатель, руководитель и идейный вдохновитель 360|Cosmetology <span className='inline-block'>и ION|Clinic</span>
              </p>
            </div>
            <div>
              <div className='hidden lg:block w-full h-[3px] bg-accent-secondary rounded-[1px]'></div>
            </div>
          </div>
        </div>
        <div className='min-w-[136px]  w-[30%] rounded-[10px] overflow-hidden md:min-w-[270px] md:max-h-[316px] md:w-[38%] lg:max-h-[539px] lg:min-w-[540px] lg:w-[37.5%] lg:rounded-none'>
          <LazyVideo src='/assets/videos/second.mp4' poster='/assets/videos/second.webp' />
        </div>
      </div>
    </Container>
  )
}
