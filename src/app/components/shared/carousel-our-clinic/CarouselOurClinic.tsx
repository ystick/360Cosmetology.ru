'use client'

import type { FC } from 'react'

import Image from 'next/image'
import { Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import { Container } from '@shared'
import { NavigationArrow } from '@svg'
import { ourClinic } from '@/app/assets/data/our-clinic'
import { Heading } from '../../ui'

export const CarouselOurClinic: FC = () => {
  return (
    <div className='mb-[50px] overflow-hidden lg:mb-[70px]'>
      <Container>
        <div className='mb-[30px]'>
          <Heading size={2} level={2} weight='bold' className='text-[#282E36] mb-5 md:mb-10 lg:mb-15'>
            Посмотрите, как выглядит наша клиника
          </Heading>
        </div>
      </Container>
      <div className='relative lg:max-w-[1302px] lg:mx-auto'>
        <button aria-label='Кнопка влево' className='hidden carousel-our-clinic-swiper-button-prev w-[70px] h-10 bg-white lg:flex items-center justify-center lg:absolute lg:top-0 lg:z-1 lg:h-full lg:bg-transparent lg:-left-[0px] lg:w-5 2xl:-left-[18px] 2xl:w-10 min-[1340px]:-left-[18px] min-[1340px]:w-10  hover:bg-black/5 transition-colors duration-300 ease-in-out'>
          <NavigationArrow className='rotate-180' />
        </button>
        <button aria-label='Кнопка вправо' className='hidden carousel-our-clinic-swiper-button-next w-[70px] h-10 bg-white lg:flex items-center justify-center lg:absolute lg:top-0  lg:z-1 lg:h-full lg:bg-transparent lg:-right-[0px] lg:w-5 2xl:-right-[18px] 2xl:w-10 min-[1340px]:-right-[18px] min-[1340px]:w-10 hover:bg-black/5 transition-colors duration-300 ease-in-out'>
          <NavigationArrow />
        </button>
        <Container>
          <Swiper
            slidesPerView={'auto'}
            modules={[Navigation]}
            wrapperClass='flex-wrap gap-2.5 md:gap-4 lg:gap-0 lg:flex-nowrap'
            breakpoints={{
              0: {
                allowTouchMove: false
              },
              1024: {
                allowTouchMove: true
              }
            }}
            className='!overflow-visible lg:!overflow-hidden'
            navigation={{
              prevEl: '.carousel-our-clinic-swiper-button-prev',
              nextEl: '.carousel-our-clinic-swiper-button-next'
            }}
          >
            {ourClinic.map((item, i) => (
              <SwiperSlide key={i} className='!w-[calc(50%_-_5px)] md:!w-[calc(50%_-_8px)] rounded-[10px] lg:mr-[23px] last:mr-0 overflow-hidden lg:!w-[376px]'>
                <Image unoptimized src={item.image} height={200} width={200} alt={`Посмотрите, как выглядит наша клиника ${i}`} className='w-full' />
              </SwiperSlide>
            ))}
          </Swiper>
        </Container>
      </div>
    </div>
  )
}
