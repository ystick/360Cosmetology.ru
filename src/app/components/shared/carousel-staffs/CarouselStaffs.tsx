'use client'

import type { FC } from 'react'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'

import 'swiper/css'
import { Container, StaffSmallCard } from '@shared'
import { CustomButton } from '@ui'
import { Arrow, NavigationArrow } from '@svg'
import { STAFF_LINK } from '@constants/route.constants'
import { Sotrudnik } from '@/graphql/client'

type CarouselStaffProps = {
  sotrudniks: Sotrudnik[]
  showButton?: boolean
}

export const CarouselStaffs: FC<CarouselStaffProps> = ({ sotrudniks, showButton = true }) => {
  return (
    <div className='relative lg:max-w-[1302px] lg:mx-auto'>
      <Container className='mb-5 md:mb-[30px] lg:mb-9'>
        <Swiper
          slidesPerView={'auto'}
          modules={[Navigation]}
          className='!overflow-visible lg:!overflow-hidden'
          navigation={{
            prevEl: '.carousel-specialists-swiper-button-prev',
            nextEl: '.carousel-specialists-swiper-button-next'
          }}
        >
          {sotrudniks.map((sotrudnik, i) => (
            <SwiperSlide key={i} className='!w-[202px] mr-5 last:mr-0'>
              <StaffSmallCard sotrudnik={sotrudnik} />
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
      <Container>
        <div className='flex'>
          <div className='flex-1'>
            {showButton && (
              <CustomButton type='link' href={STAFF_LINK.href} size='auto' theme='outline-dark' fontWeight='semiBold' icon={Arrow} className='max-w-[245px] h-10 !rounded-[5px] text-sm lg:text-[21px] lg:h-[67px] lg:max-w-[363px]'>
                Смотреть всех специалистов
              </CustomButton>
            )}
          </div>
          <div className='flex items-center gap-[5px]'>
            <button aria-label='Кнопка влево' className='carousel-specialists-swiper-button-prev swiper-button-disabled [&.swiper-button-disabled]:!opacity-0 max-[430px]:w-[40px] w-[70px] h-10 bg-white flex items-center justify-center rounded-[7px] lg:absolute lg:top-0 lg:z-1 lg:h-[378px] lg:bg-transparent lg:-left-[0px] lg:w-5 2xl:-left-[18px] 2xl:w-10 min-[1340px]:-left-[18px] min-[1340px]:w-10 hover:bg-black/5 transition-colors duration-300 ease-in-out'>
              <NavigationArrow className='rotate-180 w-[10px] h-[18px] lg:w-[12px] lg:h-[24px]' />
            </button>
            <button aria-label='Кнопка вправо' className='carousel-specialists-swiper-button-next [&.swiper-button-disabled]:!opacity-0 max-[430px]:w-[40px] w-[70px] h-10 bg-white flex items-center justify-center rounded-[7px] lg:absolute lg:top-0  lg:z-1 lg:h-[378px] lg:bg-transparent lg:-right-[0px] lg:w-5 2xl:-right-[18px] 2xl:w-10 min-[1340px]:-right-[18px] min-[1340px]:w-10 hover:bg-black/5 transition-colors duration-300 ease-in-out'>
              <NavigationArrow className='w-[10px] h-[18px] lg:w-[12px] lg:h-[24px]' />
            </button>
          </div>
        </div>
      </Container>
    </div>
  )
}
