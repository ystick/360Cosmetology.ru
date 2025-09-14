'use client'
import type { FC } from 'react'
import type { Abonementy } from '@/graphql/client'

import Image from 'next/image'
import { BlocksRenderer } from '@strapi/blocks-react-renderer'

import { Container } from '@shared'
import { CallForm, Heading, MakeAnAppointmentForm } from '@ui'
import { Arrow } from '@svg'
import { getFileUrl } from '@utils'

type AbonementBlock001Props = {
  abonement: Abonementy
}

export const AbonementBlock001: FC<AbonementBlock001Props> = ({ abonement }) => {
  return (
    <Container>
      <div className='mb-[30px] md:bg-white rounded-[10px] overflow-hidden md:grid md:grid-cols-[244px_auto] md:gap-x-[30px] md:grid-flow-dense md:pr-4 lg:rounded-[30px] lg:grid-cols-[404px_auto] xl:gap-x-[60px] xl:pr-[50px]'>
        <div className='bg-white rounded-[10px] overflow-hidden flex gap-5 items-center mb-5 shadow-lg/7 md:contents lg:rounded-[30px]'>
          <div className='w-[135px] max-h-full h-[196px] shrink-0 md:row-span-full md:row-end-6 md:h-full md:w-full lg:rounded-[30px] lg:overflow-hidden'>
            <Image unoptimized src={getFileUrl(abonement.mainImage.url)} alt={getFileUrl(abonement.mainImage.alternativeText ?? abonement.title)} width={430} height={384} className='h-full w-full object-cover' />
          </div>
          <div className='md:contents'>
            <div className='mb-[17px] md:mt-[30px] md:mb-5 lg:mb-10 lg:mt-12.5'>
              <Heading level={1} size={4}>
                {abonement.title}
              </Heading>
            </div>
          </div>
        </div>
        <div className='mb-5 md:row-start-2 md:mb-7.5'>
          <BlocksRenderer content={abonement.description} />
        </div>
        <div className='mb-[30px] lg:mb-14'>
          <CallForm contentForm={MakeAnAppointmentForm} formProps={{ abonement: abonement.title }} size='auto' theme='secondary' className='max-w-[205px] h-[45px] lg:max-w-[269px] lg:h-[54px] text-sm/4 lg:text-lg/[21px]' icon={Arrow}>
            Записаться на прием
          </CallForm>
        </div>
      </div>
    </Container>
  )
}
