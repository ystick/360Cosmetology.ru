'use client'

import type { FC } from 'react'
import type { ComponentSharedAvtor } from '@/graphql/client'

import Image from 'next/image'
import Link from 'next/link'

import { Container } from '@shared'
import { CallForm, MakeAnAppointmentForm } from '@ui'
import { Arrow } from '@svg'
import { getFileUrl } from '@utils'
import { STAFF_LINK } from '@constants/route.constants'

type AuthorProps = {
  author: ComponentSharedAvtor
}
export const Author: FC<AuthorProps> = ({ author }) => {
  return (
    <Container>
      <div className='flex gap-x-2 flex-wrap items-center mb-7.5 md:mb-12.5 md:grid md:grid-cols-[310px_auto] md:grid-flow-dense md:gap-x-7.5 md:bg-secondary md:rounded-[10px] md:p-2.5 lg:grid-cols-[382px_auto] lg:gap-x-15'>
        <div className='max-w-[52%] w-full order-2 rounded-[10px] overflow-hidden aspect-[16/14] md:row-span-full md:col-span-1 md:row-end-3 md:max-w-full md:aspect-[16/18] lg:max-w-[382px] lg:aspect-[16/14.5]'>
          <Link href={`${STAFF_LINK.href}/${author.sotrudnik.slug}`}>
            <Image unoptimized src={getFileUrl(author.sotrudnik.photo.url)} alt={author.sotrudnik.photo.alternativeText ?? `${author.sotrudnik.lastName} ${author.sotrudnik.firstName} ${author.sotrudnik.patronymic}`} width={382} height={348} className='w-full h-full object-[0_-40px] object-cover' />
          </Link>
        </div>
        <div className='flex-1 order-1 md:pt-7.5'>
          <div className='mb-4 md:mb-[54px] lg:mb-15.5'>
            <Link href={`${STAFF_LINK.href}/${author.sotrudnik.slug}`}>
              <span className='block text-[#CBCBCB] font-bold text-sm/4 lg:text-lg/[21px]'>Автор материала</span>
            </Link>
          </div>
          <div className='mb-4 lg:mb-7.5'>
            <Link href={`${STAFF_LINK.href}/${author.sotrudnik.slug}`}>
              <span className='block text-foreground font-bold text-lg/[21px] md:text-white lg:text-[30px]/[20px]'>
                {author.sotrudnik.lastName} {author.sotrudnik.firstName} {author.sotrudnik.patronymic}
              </span>
            </Link>
          </div>
          <div>
            <Link href={`${STAFF_LINK.href}/${author.sotrudnik.slug}`}>
              <p className='text-foreground text-base/[19px] md:text-white'>{author.sotrudnik.position}</p>
            </Link>
          </div>
        </div>
        <div className='order-last w-full mt-2.5 md:pb-7.5 lg:mt-10'>
          <CallForm contentForm={MakeAnAppointmentForm} formProps={{ staff: `${author.sotrudnik.lastName} ${author.sotrudnik.firstName} ${author.sotrudnik.patronymic}` }} size='auto' theme='secondary' icon={Arrow} className='max-w-[440px] h-[46px] md:max-w-[269px] md:h-[54px]'>
            Записаться на прием
          </CallForm>
        </div>
      </div>
    </Container>
  )
}
