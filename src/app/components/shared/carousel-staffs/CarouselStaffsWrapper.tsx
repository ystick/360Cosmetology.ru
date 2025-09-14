import type { FC } from 'react'

import { CarouselStaffs, Container } from '@shared'
import { Sotrudnik } from '@/graphql/client'

type CarouselStaffsWrapperProps = {
  sotrudniks: Sotrudnik[]
}

export const CarouselStaffsWrapper: FC<CarouselStaffsWrapperProps> = ({ sotrudniks }) => {
  return (
    <div className='mb-[50px] overflow-hidden lg:mb-[70px]'>
      <Container>
        <div className='mb-5 lg:mb-[30px]'>
          <h2 className='font-medium text-[27px]/[32px] md:text-[32px]/[38px] lg:text-[52px]/[61px]'>
            У нас работают доктора <span className='block text-accent-secondary'> международного уровня</span>
          </h2>
        </div>
        <div className='mb-5 max-w-[370px] md:max-w-[440px] md:mb-[30px] lg:max-w-[610px] lg:mb-[59px]'>
          <p className='text-foreground text-xs/[14px] mb-[14px] md:text-sm/4 md:mb-4 lg:text-base/[19px] lg:mb-0'>Они используют современные технологии и смогут устранить самые глубокие морщины. Запись на прием ведется на сайте или по телефону.</p>
          <p className='text-foreground text-xs/[14px] md:text-sm/4 lg:text-base/[19px]'>Пройдите косметологические процедуры в «360|Cosmetology».</p>
        </div>
      </Container>
      <CarouselStaffs sotrudniks={sotrudniks} />
    </div>
  )
}
