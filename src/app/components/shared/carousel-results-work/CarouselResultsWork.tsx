'use client'

import type { FC } from 'react'

import { Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import { Container } from '@shared'
import { NavigationArrow } from '@svg'
import { getFileUrl } from '@utils'
import { RezultatyRabotiesImagesQuery } from '@/graphql/client'
import { ZoomableImage } from '@ui'

type CarouselResultsWorkProps = {
  rezultatyRaboties: RezultatyRabotiesImagesQuery['rezultatyRaboties_connection']['nodes']
}

export const CarouselResultsWork: FC<CarouselResultsWorkProps> = ({ rezultatyRaboties }) => {
  return (
    <div className='mb-[50px] overflow-hidden lg:mb-[70px]'>
      <Container>
        <div className='mb-[30px]'>
          <h2 className='font-semibold text-foreground text-lg/[21px]'>Результаты работы</h2>
        </div>
      </Container>
      <div className='relative lg:max-w-[1302px] lg:mx-auto'>
        <button aria-label='Кнопка влево' disabled className='hidden carousel-results-work-swiper-button-prev swiper-button-disabled [&.swiper-button-disabled]:!opacity-0 w-[70px] h-10 bg-white lg:flex items-center justify-center rounded-[7px] lg:absolute lg:top-0 lg:z-1 lg:h-full lg:bg-transparent lg:-left-[0px] lg:w-5 2xl:-left-[18px] 2xl:w-10 min-[1340px]:-left-[18px] min-[1340px]:w-10 hover:bg-black/5 transition-colors duration-300 ease-in-out'>
          <NavigationArrow className='rotate-180' />
        </button>
        <button aria-label='Кнопка вправо' className='hidden carousel-results-work-swiper-button-next [&.swiper-button-disabled]:!opacity-0 w-[70px] h-10 bg-white lg:flex items-center justify-center rounded-[7px] lg:absolute lg:top-0 lg:z-1 lg:h-full lg:bg-transparent lg:-right-[0px] lg:w-5 2xl:-right-[18px] 2xl:w-10 min-[1340px]:-right-[18px] min-[1340px]:w-10 hover:bg-black/5 transition-colors duration-300 ease-in-out'>
          <NavigationArrow />
        </button>
        <Container>
          <Swiper
            slidesPerView={'auto'}
            modules={[Navigation]}
            className='!overflow-visible lg:!overflow-hidden'
            navigation={{
              prevEl: '.carousel-results-work-swiper-button-prev',
              nextEl: '.carousel-results-work-swiper-button-next'
            }}
          >
            {rezultatyRaboties.map((result, i) =>
              result.contentImage.map((block, j) => {
                if (block.__typename === 'ComponentResultsOfWorkIzobrazhenie') {
                  return (
                    <SwiperSlide key={`${result.documentId}-${block.id}`} className='!w-[212px] mr-[12px] lg:mr-[23px] last:mr-0 rounded-[10px] overflow-hidden lg:!w-[376px]'>
                      <ZoomableImage src={getFileUrl(block.image.url)} width={376} height={318} alt={block.image.alternativeText ?? `Результат работы ${i + 1}`} className='w-full' />
                    </SwiperSlide>
                  )
                }
                return null
              })
            )}
          </Swiper>
        </Container>
      </div>
    </div>
  )
}
