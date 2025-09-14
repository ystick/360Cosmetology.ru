import type { Usluga } from '@/graphql/client'
import type { FC } from 'react'

import { Container, PopularServicesItem } from '@shared'

type PopularServicesProps = { uslugas: Usluga[] }

export const PopularServices: FC<PopularServicesProps> = ({ uslugas }) => {
  return (
    <Container>
      <div className='mb-[50px] md:mb-8 lg:mb-16 lg:flex'>
        <div className='mb-5 md:mb-[30px] lg:flex-1 flex flex-col lg:mb-0'>
          <div className='lg:mb-[101px]'>
            <h2 className='text-secondary font-bold text-[27px]/8 md:text-[32px]/[38px] lg:text-[52px]/[61px]'>Популярные услуги</h2>
          </div>
          <div className='hidden lg:block w-[3px] h-full bg-accent-secondary'></div>
        </div>
        <div className='flex flex-wrap gap-2.5 md:gap-x-2 md:gap-y-2.5 lg:w-[781px] lg:gap-y-2.5 lg:gap-x-[13px]'>
          {uslugas.map((usluga, i) => (
            <PopularServicesItem usluga={usluga} key={i} className='md:w-[calc(50%_-_5px)] lg:w-[calc(50%_-_6.5px)]' />
          ))}
        </div>
      </div>
    </Container>
  )
}
