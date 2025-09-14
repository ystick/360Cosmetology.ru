import type { FC } from 'react'
import type { Akczii } from '@/graphql/client'

import { CarouselActions, Container } from '@shared'

type CarouselActionsBlockWrapperProps = {
  akcziis: Akczii[]
}

export const CarouselActionsBlockWrapper: FC<CarouselActionsBlockWrapperProps> = ({ akcziis }) => {
  return (
    <div className='pt-[36px] w-full pb-[48px] bg-white md:py-[56px] lg:py-[77px]'>
      <Container className='flex flex-col'>
        <div className='mb-5 md:mb-7.5 lg:mb-9'>
          <p className='text-foreground/50 text-base/[19px]'>Акции и скидки</p>
        </div>
        <CarouselActions akcziis={akcziis} />
      </Container>
    </div>
  )
}
