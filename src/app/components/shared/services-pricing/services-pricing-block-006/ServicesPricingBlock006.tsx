'use client'
import type { FC } from 'react'

import Script from 'next/script'

import { Container } from '@shared'
import { CallForm, MakeAnAppointmentForm } from '@ui'
import { Arrow } from '@svg'
import { ComponentServiceSpisokCzen } from '@/graphql/client'
import { formatPrice } from '@utils'

type ServicesPricingBlock006Props = {
  content: ComponentServiceSpisokCzen
  usluga: string
}
export const ServicesPricingBlock006: FC<ServicesPricingBlock006Props> = ({ content, usluga }) => {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: content.item.map((item, idx) => ({
      '@type': 'Product',
      name: item.title,
      offers: {
        '@type': 'Offer',
        price: String(item.price ?? 0),
        priceCurrency: 'RUB',
        availability: 'http://schema.org/InStock'
      },
    }))
  }

  return (
    <Container className='mb-7.5 md:mb-12.5 lg:mb-15'>
      <Script id='jsonld-services-pricing' type='application/ld+json' strategy='afterInteractive' dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div id='ceny' className='bg-white rounded-[10px] shadow-xl/7 p-7.5 pr-5 md:p-10 lg:p-15'>
        <div className='mb-5 md:mb-10'>
          <h2 className='text-tertiary font-bold text-[21px]/[25px] text-balance lg:text-[30px]/[35px]'>{content.title}</h2>
        </div>
        <div className='mb-7.5 md:mb-10 lg:mb-[45px]'>
          <ul className='flex flex-col gap-2.5 md:gap-5 lg:gap-[29px]'>
            {content.item.map((item, index) => (
              <li key={index} className='flex gap-2.5 items-end'>
                <span className='block max-w-[212px] text-tertiary text-xs/[14px] md:max-w-[449px] lg:text-lg/[21px] lg:max-w-[673px]'>{item.title}</span>
                <span className='block w-full flex-1 border-b border-b-[#D9D9D9] min-w-5'></span>
                <span className='block text-tertiary text-xs/[14px] shrink-0 lg:text-lg/[21px]'>{formatPrice(item.price)}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <CallForm contentForm={MakeAnAppointmentForm} formProps={{ usluga }} size='auto' theme='secondary' className='max-w-[269px] h-[54px] text-lg font-semibold' icon={Arrow}>
            Записаться на прием
          </CallForm>
        </div>
      </div>
    </Container>
  )
}
