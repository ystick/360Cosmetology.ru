'use client'

import type { FC } from 'react'

import { Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import { Container } from '@shared'
import { NavigationArrow } from '@svg'
import { Otzyvy } from '@/graphql/client'
import { getFileUrl } from '@utils'
import { ZoomableImage } from '@ui'

type CarouselCustomerReviewsProps = {
  otzyvies: Otzyvy[]
}

export const CarouselCustomerReviews: FC<CarouselCustomerReviewsProps> = ({ otzyvies }) => {
  return (
    <div className='mb-[50px] md:mb-[50px] overflow-hidden lg:mb-[70px]'>
      <Container>
        <div className='mb-[30px]'>
          <h2 className='font-medium text-[27px]/[32px] md:text-[32px]/[38px] lg:text-[52px]/[61px]'>
            <span className='text-accent-secondary'>Отзывы</span> наших клиентов
          </h2>
        </div>
      </Container>
      <div className='relative lg:max-w-[1302px] lg:mx-auto'>
        <Container className='flex lg:mb-9'>
          <button aria-label='Кнопка влево' className='carousel-customer-reviews-swiper-button-prev flex w-10.5 lg:w-[59px] rounded-[7px] shrink-0 h-auto justify-center items-center bg-white hover:bg-black/5 transition-colors duration-300 ease-in-out'>
            <NavigationArrow className='rotate-180' />
          </button>
          <div className='px-[17px] min-w-0 lg:px-5 '>
            <Swiper
              slidesPerView={1}
              spaceBetween={0}
              modules={[Navigation]}
              breakpoints={{
                640: {
                  slidesPerView: 1
                },
                768: {
                  slidesPerView: 3,
                  spaceBetween: '10px'
                },
                1024: {
                  slidesPerView: 4,
                  spaceBetween: '19px'
                }
              }}
              navigation={{
                prevEl: '.carousel-customer-reviews-swiper-button-prev',
                nextEl: '.carousel-customer-reviews-swiper-button-next'
              }}
            >
              {otzyvies.map((otzyv, i) => (
                <SwiperSlide key={otzyv.documentId} className='w-full md:max-w-[33.333%] md:mr-[10px] md:last:mr-0 lg:mr-[19px] lg:h-[297px] lg:max-w-[25%] rounded-[10px] overflow-hidden'>
                  <ZoomableImage src={getFileUrl(otzyv.image.url)} height={318} width={376} alt={`Отзыв № ${++i}`} className='w-full object-cover h-[152px] md:h-[211px] lg:h-[297px]' />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <button aria-label='Кнопка вправо' className='carousel-customer-reviews-swiper-button-next flex w-10.5 lg:w-[59px] rounded-[7px] shrink-0 h-auto justify-center items-center bg-white hover:bg-black/5 transition-colors duration-300 ease-in-out'>
            <NavigationArrow />
          </button>
        </Container>
      </div>
    </div>
  )
}
