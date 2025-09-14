import type { FC } from 'react'

import Image from 'next/image'

import { Breadcrumbs, Heading } from '@ui'
import { CallToAction, Container, Layout } from '@shared'
import { HOME_LINK, PAYMENT_METHODS_LINK } from '@constants/route.constants'

const itemsBreadcrumbs = [
  { label: HOME_LINK.value, href: HOME_LINK.href },
  { label: PAYMENT_METHODS_LINK.value, href: PAYMENT_METHODS_LINK.href }
]

export const PaymentMethodsPage: FC = () => {
  return (
    <Layout>
      <Container>
        <Breadcrumbs items={itemsBreadcrumbs} />
        <Heading size={2} level={1} className='mb-5 md:mb-12 lg:mb-10'>
          Способы <span className='text-accent-secondary'>оплаты</span>
        </Heading>
        <div className='mb-7.5 md:mb-10 md:max-w-[520px] lg:max-w-[530px]'>
          <div className='flex gap-2 flex-wrap md:gap-2.5 lg:gap-2.5'>
            <Image unoptimized src='/assets/images/webp/logo-visa.webp' alt='visa' width={125} height={65} className='flex-1 rounded-[5px] lg:w-[125px]  lg:rounded-[10px]' />
            <Image unoptimized src='/assets/images/webp/logo-master.webp' alt='mastercard' width={125} height={65} className='flex-1 rounded-[5px] lg:w-[125px]  lg:rounded-[10px]' />
            <Image unoptimized src='/assets/images/webp/logo-mir.webp' alt='mir' width={125} height={65} className='flex-1 rounded-[5px] lg:w-[125px]  lg:rounded-[10px]' />
            <Image unoptimized src='/assets/images/webp/logo-paygine.webp' alt='paygine' width={125} height={65} className='flex-1 rounded-[5px] lg:w-[125px]  lg:rounded-[10px]' />
          </div>
        </div>
        <div className='mb-12.5 max-w-[1113px] md:mb-26'>
          <div className='mb-[14px] lg:mb-[18px]'>
            <h2 className='text-foreground font-bold text-xs/[14px] lg:text-lg/[21px]'>Безопасность платежей</h2>
          </div>
          <div>
            <p className='text-foreground text-xs/[14px] mb-[14px] lg:text-lg/[21px] lg:font-semibold lg:mb-[18px]'>Оплатить заказ можно с помощью банковских карт платёжных систем Visa, MasterCard, МИР. При оплате банковской картой безопасность платежей гарантирует процессинговый центр Paygine.</p>
            <p className='text-foreground text-xs/[14px] mb-[14px] lg:text-lg/[21px] lg:font-semibold lg:mb-[18px]'>Приём платежей происходит через защищённое безопасное соединение, используя протокол TLS 1.2. Компания Paygine соответствует между- народным требованиями PCI DSS для обеспечения безопасной обработки реквизитов банковской карты плательщика. Ваши конфиденциальные данные необходимые для оплаты (реквизиты карты, регистрационные данные и др.) не поступают в Интернет-магазин, их обработка произво- дится на стороне процессингового центра Paygine и полностью защищена. Никто, в том числе интернет-магазин https://360cosmetology.ru, не может получить банковские и персональные данные плательщика. </p>
            <p className='text-foreground text-xs/[14px] mb-[14px] lg:text-lg/[21px] lg:font-semibold lg:mb-[18px]'>При оплате заказа банковской картой возврат денежных средств производится на ту же самую карту, с которой был произведён платёж.</p>
          </div>
        </div>
      </Container>
      <CallToAction />
    </Layout>
  )
}
