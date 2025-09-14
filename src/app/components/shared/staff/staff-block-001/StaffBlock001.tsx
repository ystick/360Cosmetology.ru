'use client'
import type { FC } from 'react'
import type { Sotrudnik } from '@/graphql/client'

import Image from 'next/image'

import { Container } from '@shared'
import { CallForm, Heading, MakeAnAppointmentForm } from '@ui'
import { Arrow } from '@svg'
import { formatPrice, getFileUrl } from '@utils'

type StaffBlock001Props = {
  sotrudnik: Sotrudnik
}

export const StaffBlock001: FC<StaffBlock001Props> = ({ sotrudnik }) => {
  return (
    <Container>
      <div className='mb-20 md:bg-white rounded-[10px] overflow-hidden md:grid md:grid-cols-[244px_auto] md:gap-x-[30px] md:grid-flow-dense md:pr-4 lg:rounded-[30px] lg:grid-cols-[404px_auto] xl:gap-x-[60px] xl:pr-[50px]'>
        <div className='bg-white rounded-[10px] overflow-hidden flex gap-5 items-center mb-5 shadow-lg/7 md:contents lg:rounded-[30px]'>
          <div className='w-[135px] max-h-full h-[196px] shrink-0 md:row-span-full md:row-end-7 md:h-[353px] md:w-full lg:rounded-[30px] lg:h-[585px] lg:overflow-hidden'>
            <Image unoptimized src={getFileUrl(sotrudnik.photo.url)} alt={getFileUrl(sotrudnik.photo.alternativeText ?? `${sotrudnik.lastName} ${sotrudnik.firstName} ${sotrudnik.patronymic}`)} width={430} height={384} className='h-full w-full object-cover' />
          </div>
          <div className='md:contents'>
            <div className='mb-[17px] md:mt-[30px] md:mb-5 lg:mb-10 lg:mt-12.5'>
              <Heading level={1} size={4}>
                {sotrudnik.lastName} {sotrudnik.firstName} {sotrudnik.patronymic}
              </Heading>
            </div>
          </div>
        </div>
        <div className='mb-5 md:row-start-2 md:mb-7.5'>
          <p className='text-tertiary text-base/[19px] lg:text-base/[20px]'>{sotrudnik.position}</p>
        </div>
        <div className='mb-5 md:mb-[19px] md:row-start-5'>
          <p className='text-[#464646] text-lg/[21px] md:text-2xl/[38px]'>
            {sotrudnik.priceFrom && `от ${formatPrice(sotrudnik.priceFrom)}`} {sotrudnik.priceTo && `до ${formatPrice(sotrudnik.priceTo)}`}
          </p>
        </div>
        <div className='mb-[30px] md:row-start-6'>
          <CallForm contentForm={MakeAnAppointmentForm} formProps={{ staff: `${sotrudnik.lastName} ${sotrudnik.firstName} ${sotrudnik.patronymic}` }} size='auto' theme='secondary' className='max-w-[205px] h-[45px] lg:max-w-[269px] lg:h-[54px] text-sm/4 lg:text-lg/[21px]' icon={Arrow}>
            Записаться на прием
          </CallForm>
        </div>
      </div>
    </Container>
  )
}
