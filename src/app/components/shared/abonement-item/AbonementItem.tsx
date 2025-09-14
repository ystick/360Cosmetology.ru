'use client'

import type { FC } from 'react'
import type { Abonementy } from '@/graphql/client'

import Image from 'next/image'
import Link from 'next/link'
import { BlocksRenderer } from '@strapi/blocks-react-renderer'

import { CallForm, Heading, MakeAnAppointmentForm } from '@ui'
import { ABONEMENTS_LINK } from '@constants/route.constants'
import { getFileUrl } from '@utils'

export const AbonementItem: FC<{ abonement: Abonementy }> = ({ abonement }) => {
  return (
    <div className='bg-white rounded-[10px] p-5 md:flex md:mb-7.5 md:gap-7.5 md:pr-[37px] lg:p-7.5'>
      <div className='w-full h-[135px] mb-[22px] rounded-[10px] overflow-hidden md:h-auto md:shrink-0 md:w-[253px] md:min-h-[292px] md:mb-0 lg:max-w-[627px] lg:w-full lg:min-h-[282px]'>
        <Link href={`${ABONEMENTS_LINK.href}/${abonement.slug}`} className='group overflow-hidden'>
          <Image unoptimized src={getFileUrl(abonement.mainImage.url)} alt={abonement.mainImage.alternativeText ?? abonement.title} width={672} height={282} className='group-hover:hover:scale-110  transition ease-in-out duration-300 w-full h-full object-cover' />
        </Link>
      </div>
      <div className='md:flex md:flex-col lg:max-w-[368px]'>
        <Link href={`${ABONEMENTS_LINK.href}/${abonement.slug}`}>
          <Heading level={2} size={3} extra='mb-5'>
            {abonement.title}
          </Heading>
        </Link>
        <div className='mb-5 md:flex-1 abonement_body'>
          <BlocksRenderer content={abonement.description} />
        </div>
        <CallForm contentForm={MakeAnAppointmentForm} formProps={{ abonement: abonement.title }} size='auto' theme='secondary' className='h-13.5 max-w-[269px]'>
          Записаться на прием
        </CallForm>
      </div>
    </div>
  )
}
