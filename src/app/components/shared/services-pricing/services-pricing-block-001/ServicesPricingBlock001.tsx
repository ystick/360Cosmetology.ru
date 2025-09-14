'use client'
import type { FC } from 'react'
import type { Usluga } from '@/graphql/client'

import Image from 'next/image'

import { Container } from '@shared'
import { CallForm, Heading, MakeAnAppointmentForm } from '@ui'
import { Arrow } from '@svg'
import { formatPrice, getFileUrl } from '@utils'

type ServicesPricingBlock001Props = {
  uslugas: Usluga
}

export const ServicesPricingBlock001: FC<ServicesPricingBlock001Props> = ({ uslugas }) => {
  return (
    <Container>
      <div className='mb-[30px] md:bg-white rounded-[10px] overflow-hidden md:grid md:grid-cols-[244px_auto] md:gap-x-[30px] md:grid-flow-dense md:pr-4 lg:grid-cols-[404px_auto] lg:rounded-[30px] xl:gap-x-[60px] xl:pr-[50px]'>
        <div className='bg-white rounded-[10px] overflow-hidden flex gap-5 items-stretch mb-5 shadow-lg/7 md:contents lg:rounded-[30px]'>
          <div className='w-[135px] max-h-full h-auto min-h-[196px] shrink-0 md:row-span-full md:row-end-6 md:h-full md:w-full lg:rounded-[30px] lg:overflow-hidden'>
            <Image unoptimized src={getFileUrl(uslugas.mainImage.url)} alt={getFileUrl(uslugas.mainImage.alternativeText ?? uslugas.title)} width={430} height={384} className='h-full w-full object-cover' />
          </div>
          <div className='py-2 pr-4 md:py-0'>
            <div className='mb-[17px] md:mt-[30px] md:mb-5 lg:mb-10 lg:mt-12.5'>
              <Heading level={1} size={5} className={uslugas.title.length > 40 ? 'text-[16px] leading-[18px]' : ''}>
                {uslugas.title}
              </Heading>
            </div>
            {uslugas.advantages && uslugas.advantages.length > 0 && (
              <div className='flex flex-wrap gap-1 md:flex-wrap md:max-w-full md:flex-row md:mb-6 lg:mb-16 lg:max-w-[522px] md:gap-2.5'>
                {uslugas.advantages.map((advantage) => (
                  <span key={advantage.id} className='rounded-[10px] w-full sm:w-auto text-center font-bold bg-[#282E36] px-1 py-[6px] items-center justify-center text-white text-xs md:w-max md:px-3 lg:py-2.5 lg:text-base/[20px]'>
                    {advantage.title}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
        {uslugas.description && (
          <div className='mb-5 md:row-start-2 md:mb-7.5 '>
            <p className='text-tertiary text-base/[19px] lg:text-base/[20px]'>{uslugas.description}</p>
          </div>
        )}
        {uslugas.price && (
          <div className='mb-5 md:mb-[19px]'>
            <p className='text-[#464646] text-lg/[21px] md:text-2xl/[38px]'>от {formatPrice(uslugas.price)}</p>
          </div>
        )}
        <div className='mb-[30px] lg:mb-14'>
          <CallForm contentForm={MakeAnAppointmentForm} formProps={{ usluga: uslugas.title }} size='auto' theme='secondary' className='max-w-[205px] h-[45px] lg:max-w-[269px] lg:h-[54px] text-sm/4 lg:text-lg/[21px]' icon={Arrow}>
            Записаться на прием
          </CallForm>
        </div>
      </div>
    </Container>
  )
}
