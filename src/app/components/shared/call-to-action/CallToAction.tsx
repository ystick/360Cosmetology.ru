'use client'
import type { FC } from 'react'

import Image from 'next/image'

import { Container } from '@shared'
import { CallForm, MakeAnAppointmentForm, RequestCallForm } from '@ui'
import { Arrow } from '@svg'

export const CallToAction: FC = () => {
  return (
    <Container>
      <div className='lg:flex lg:gap-2.5 mb-[50px] lg:mb-[70px]'>
        <div className='bg-secondary px-2 pt-5 pb-[31px] rounded-[10px] md:p-[30px] lg:flex-1 lg:pt-[62px] lg:pb-[69px] lg:px-[50px]'>
          <div className='max-w-[300px] mx-auto md:mx-0 md:max-w-full'>
            <div className='mb-5 md:mb-6 md:max-w-110 lg:max-w-full lg:mb-[25px]'>
              <h2 className='text-white text-center font-bold text-[27px]/[32px] md:text-left md:text-[32px]/[38px]'>Запишитесь на прием или&nbsp;оставьте заявку</h2>
            </div>
            <div className='mb-5 px-3 md:px-0 md:mb-[27px] lg:mb-11'>
              <p className='text-white text-center text-base/[19px] md:text-left'>И мы свяжемся с вами в самое ближайшее время </p>
            </div>
            <div className='flex flex-wrap gap-2.5 md:max-w-[504px] lg:max-w-[514px]'>
              <CallForm contentForm={MakeAnAppointmentForm} icon={Arrow} size='auto' theme='default' className='w-full h-[54px] md:flex-1 lg:min-w-[269px]'>
                Записаться на прием
              </CallForm>
              <CallForm contentForm={RequestCallForm} icon={Arrow} size='auto' theme='secondary' className='w-full h-[54px] md:flex-1'>
                Заказать звонок
              </CallForm>
            </div>
          </div>
        </div>
        <div className='hidden lg:block lg:w-[381px] lg:relative lg:bg-white lg:rounded-[10px]'>
          <div className='lg:absolute lg:inset-0 lg:top-auto lg:rounded-[10px] lg:overflow-hidden'>
            <Image unoptimized src='/assets/images/webp/call-to-action.webp' alt='Запишитесь на прием или оставьте заявку' width={500} height={500} />
          </div>
        </div>
      </div>
    </Container>
  )
}
