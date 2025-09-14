import type { FC } from 'react'
import Image from 'next/image'

import { Container } from '@shared'
import { AminationReveal, Heading } from '@ui'

const ADVANTAGES = ['Специалисты с 10-летним опытом', 'Регулярные скидки, акции для новых пациентов', 'Эффективные лазерные технологии для коррекции шрамов, рубцов, возрастных изменений', 'Самые безопасные инъекционные методики с препаратами IPSEN', 'Официальные лицензии и сертификаты для оборудования', 'Комфортные, хорошо оборудованные кабинеты', 'Доступные цены']

export const Advantages: FC = () => {
  return (
    <div className='bg-white pt-7.5 pb-[41px] md:pt-[54px] md:pb-[97px] lg:py-[77px]'>
      <Container className='lg:flex lg:items-center lg:gap-5'>
        <div className='lg:flex-1'>
          <div className='mb-5 md:mb-7.5'>
            <Heading size={2} level={2} weight='medium'>
              <span className='text-accent-secondary'>Преимущества</span> клиники
            </Heading>
          </div>
          <div className='mb-7.5 md:mb-[35px]'>
            <p className='text-foreground text-base/[19px]'>
              «360|Cosmetology» отличается <br className='md:hidden' /> следующими плюсами:
            </p>
          </div>
          <div className='flex flex-wrap gap-2.5 mb-7.5 lg:mb-0'>
            {ADVANTAGES.map((advantage, i) => (
              <AminationReveal key={i} direction='right' duration={1000} delay={100}>
                <div className='py-[15px] px-5 bg-accent-default rounded-[10px] text-white text-sm/4 font-semibold min-h-[46px] inline-flex items-center justify-center'>{advantage}</div>
              </AminationReveal>
            ))}
          </div>
        </div>
        <div className='rounded-[10px] overflow-hidden h-[276px] w-full md:h-[415px] lg:w-[489px]'>
          <Image unoptimized src='/assets/images/webp/advantages.webp' width={400} height={400} sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'  alt='Преимущества клиники' className='w-full h-full object-cover' />
        </div>
      </Container>
    </div>
  )
}
