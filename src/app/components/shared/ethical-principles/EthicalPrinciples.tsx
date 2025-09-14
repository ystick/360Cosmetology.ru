import type { FC } from 'react'

import { ethicalPrinciples } from '@/app/assets/data/ethical-principles'

import { Item } from './item/Item'
import { Container } from '@shared'
import { AminationReveal } from '@ui'

export const EthicalPrinciples: FC = () => {
  return (
    <Container className='mb-[50px] md:mb-5 lg:mb-[50px] lg:max-w-[1920px] lg:px-0 '>
      <div className='flex flex-col gap-2.5 lg:gap-0 overflow-hidden'>
        {ethicalPrinciples.map((item, i) => (
          <AminationReveal key={i} direction='down' duration={1000} delay={100}>
            <Item item={item} index={i} />
          </AminationReveal>
        ))}
      </div>
    </Container>
  )
}
