'use client'
import type { FC } from 'react'

import Image from 'next/image'

import { Arrow } from '@svg'
import { LazyVideo } from '@shared'
import { CallForm, MakeAnAppointmentForm } from '@ui'

export const MainBlock: FC = () => {
  return (
    <div className='relative h-[300px] mb-[50px] max-w-[1920px] mx-auto -mt-12 md:h-120 md:mb-[26px] md:-mt-[63px] lg:-mt-[70px] lg:min-h-[670px] lg:h-svh lg:max-h-[900px] lg:mb-0'>
      <div className='absolute z-[1] inset-0 w-full bg-black/60'></div>
      <div className='absolute z-[2] inset-0 w-full h-full flex items-center justify-center px-3 pt-12 md:pt-[63px] lg:pt-[70px]'>
        <div className='max-w-[279px] md:max-w-[323px] lg:max-w-[1070px] lg:flex lg:items-center'>
          <div className='hidden md:block mb-[17px] lg:shrink-0 lg:mr-[50px]'>
            <Image unoptimized src='/assets/images/webp/logo-gradient.webp' width={96} height={35} alt='360|Cosmetology' loading='eager' priority className='w-[86px] mx-auto h-auto drop-shadow-xl/50 lg:w-[276px]' />
          </div>
          <div>
            <div className='mb-[9px] md:mb-5 lg:mb-[30px]'>
              <h1 className='text-white text-center font-bold text-lg/[21px] md:text-[21px]/[25px] lg:text-[52px]/[61px] lg:text-left'>Клиника 360|Cosmetology</h1>
            </div>
            <div className='mb-5 md:mb-[18px] lg:mb-[35px]'>
              <p className='text-white text-center font-semibold text-sm/[16px] md:text-base/[19px] lg:text-[25px]/[29px] lg:text-left'>это ведущий центр эстетической медицины в Москве, который находится в самом сердце города.</p>
            </div>
            <div className='mx-auto max-w-[207px] lg:max-w-[269px] lg:mx-0'>
              <CallForm contentForm={MakeAnAppointmentForm} theme='default' size='auto' className='h-[42px] lg:h-[54px] text-sm lg:text-lg' iconClassName='w-[9px] h-[9px] lg:w-[11px] lg:h-[11px]' icon={Arrow}>
                Записаться на прием
              </CallForm>
            </div>
          </div>
        </div>
      </div>
      <LazyVideo src='/assets/videos/main.mp4' poster='/assets/videos/main.webp' priorityImage loadingImage='eager' />
    </div>
  )
}
