'use client'

import type { FC } from 'react'
import type { Oborudovanie } from '@/graphql/client'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'

import 'swiper/css'
import { Container } from '@shared'
import { CustomButton } from '@ui'
import { NavigationArrow } from '@svg'
import { EquipmentSmallCard } from '../equipment-small-card/EquipmentSmallCard'
import { EQUIPMENT_LINK } from '@constants/route.constants'

type CarouselEquipmentProps = {
  oborudovanies: Oborudovanie[]
}

export const CarouselEquipment: FC<CarouselEquipmentProps> = ({ oborudovanies }) => {
  return (
    <div className='mb-[50px] overflow-hidden lg:mb-[70px]'>
      <Container>
        <div className='mb-5 lg:mb-[30px] flex flex-wrap gap-3 md:justify-between md:items-center'>
          <div>
            <h2 className='font-medium text-[27px]/[32px] md:text-[32px]/[38px] lg:text-[52px]/[61px]'>
              Наше <span className='text-accent-secondary'>оборудование</span>
            </h2>
          </div>
          <div className='w-full md:w-[177px]'>
            <CustomButton type='link' href={EQUIPMENT_LINK.href} size='auto' theme='outline-dark' fontWeight='semiBold' className='w-full max-w-[177px] h-[33px] !rounded-[5px] text-sm'>
              Все оборудование
            </CustomButton>
          </div>
        </div>
      </Container>
      <div className='relative lg:max-w-[1302px] lg:mx-auto'>
        <button aria-label='Кнопка влево' disabled className='hidden carousel-equipment-swiper-button-prev [&.swiper-button-disabled]:!opacity-0 w-[70px] h-10 bg-white lg:flex items-center justify-center rounded-[7px] lg:absolute lg:top-0 lg:z-1 lg:h-[378px] lg:bg-transparent lg:-left-[0px] lg:w-5 2xl:-left-[18px] 2xl:w-10 min-[1340px]:-left-[18px] min-[1340px]:w-10  hover:bg-black/5 transition-colors duration-300 ease-in-out'>
          <NavigationArrow className='rotate-180' />
        </button>
        <button aria-label='Кнопка вправо' className='hidden carousel-equipment-swiper-button-next [&.swiper-button-disabled]:!opacity-0 w-[70px] h-10 bg-white lg:flex items-center justify-center rounded-[7px] lg:absolute lg:top-0  lg:z-1 lg:h-[378px] lg:bg-transparent lg:-right-[0px] lg:w-5 2xl:-right-[18px] 2xl:w-10 min-[1340px]:-right-[18px] min-[1340px]:w-10  hover:bg-black/5 transition-colors duration-300 ease-in-out'>
          <NavigationArrow />
        </button>
        <Container>
          <Swiper
            slidesPerView={'auto'}
            modules={[Navigation]}
            className='!overflow-visible lg:!overflow-hidden'
            navigation={{
              prevEl: '.carousel-equipment-swiper-button-prev',
              nextEl: '.carousel-equipment-swiper-button-next'
            }}
          >
            {oborudovanies.map((oborudovanie, i) => (
              <SwiperSlide key={i} className='!w-[225px] mr-[13px] last:mr-0 lg:mr-5 lg:!w-[312px]'>
                <EquipmentSmallCard oborudovanie={oborudovanie} />
              </SwiperSlide>
            ))}
          </Swiper>
        </Container>
      </div>
    </div>
  )
}
