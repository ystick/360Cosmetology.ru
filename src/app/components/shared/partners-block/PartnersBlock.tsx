import type { FC } from 'react'

import Image from 'next/image'

import { Container } from '@shared'
import { partners } from '@/app/assets/data/partners'

export const PartnersBlock: FC = () => (
  <Container className='mb-[50px] lg:mb-[70px]'>
    <div className='mb-[20px] md:mb-[10px] lg:mb-[50px]'>
      <h2 className='font-medium text-[27px]/[32px] md:text-[32px]/[38px] lg:text-[52px]/[61px]'>
        Наши <span className='text-accent-secondary'>партнеры</span>
      </h2>
    </div>
    <div className='grid grid-cols-5 gap-1 md:grid-cols-4 md:gap-x-2 md:gap-y-2.5 lg:grid-cols-6'>
      {partners.map((partner, i) => (
        <div key={i} className='bg-white rounded-[10px] aspect-square flex items-center justify-center lg:aspect-auto lg:h-[139px]'>
          <Image unoptimized src={partner.imagePath} width={200} height={139} alt={`Партнер ${i}`} />
        </div>
      ))}
    </div>
  </Container>
)
