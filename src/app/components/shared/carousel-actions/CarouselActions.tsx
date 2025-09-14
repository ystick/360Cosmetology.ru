'use client'

import type { FC } from 'react'
import type { Akczii } from '@/graphql/client'

import { Navigation as SwiperNavigation, Autoplay } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import { Heading, Navigation } from '@ui'

import { ActionsSmallCard } from '../actions-small-card/ActionsSmallCard'

type CarouselActionsProps = {
  akcziis: Akczii[]
}

export const CarouselActions: FC<CarouselActionsProps> = ({ akcziis }) => {
  return (
    <>
      <div className='contents md:flex md:items-center'>
        <div className='mb-5 md:flex-1 md:mb-0'>
          <Heading level={2} size={2} weight='medium'>
            Специальные предложения
          </Heading>
        </div>
        <div className='flex shrink-0 gap-[5px] min-w-0 order-last md:order-none'>
          <Navigation leftButton={{ disabled: true, onClick: () => null, className: 'carousel-action-swiper-button-prev [&.swiper-button-disabled]:!opacity-100' }} rightButton={{ disabled: false, onClick: () => null, className: 'carousel-action-swiper-button-next [&.swiper-button-disabled]:!opacity-100' }} />
        </div>
      </div>
      <div className='mb-7.5 min-w-0 md:mb-0 md:mt-[25px] lg:mt-10'>
        <Swiper
          slidesPerView={1}
          modules={[SwiperNavigation, Autoplay]}
          autoplay={{ delay: 3000 }}
          breakpoints={{
            1024: {
              slidesPerView: 2,
              spaceBetween: '10px'
            }
          }}
          navigation={{
            prevEl: '.carousel-action-swiper-button-prev',
            nextEl: '.carousel-action-swiper-button-next'
          }}
        >
          {akcziis.map((action, i) => (
            <SwiperSlide key={i} className='lg:mr-2.5 lg:max-w-[calc(50%_-_5px)]'>
              <ActionsSmallCard action={action} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  )
}
