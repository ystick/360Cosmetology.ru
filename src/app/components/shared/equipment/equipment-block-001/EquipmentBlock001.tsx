import type { FC } from 'react'

import Image from 'next/image'

import { Container } from '@shared'

export const EquipmentBlock001: FC = () => {
  return (
    <Container>
      <div className='md:bg-secondary mb-5 md:mb-7.5 md:grid md:grid-cols-[277px_auto] md:rounded-[10px] md:gap-x-[33px] md:items-center md:p-2.5 lg:grid-cols-[384px_auto] lg:gap-x-[70px]'>
        <div className='mb-5 md:row-start-2 lg:mb-10'>
          <h1 className='text-foreground font-bold text-[21px]/[20px] md:text-white lg:text-[30px]/[20px]'>Прыщи на лбу</h1>
        </div>
        <div className='mb-5 rounded-[10px] overflow-hidden h-[164px] md:mb-0 md:row-start-1 md:row-end-5 md:row-span-full md:h-[252px] md:col-start-1 lg:h-[348px]'>
          <Image unoptimized src='/assets/images/temporary/blog/1.webp' alt='' width={430} height={384} className='h-full w-full object-cover' />
        </div>
        <div className='md:max-w-[301px] md:row-start-3 lg:max-w-[712px]'>
          <p className='text-foreground text-xs/[14px] md:text-white lg:text-lg/[21px]'>В зависимости от глубины проникновения воспаления прыщи на лбу протекают в форме комедонов, черных точек, папул, красных высыпаний. В этой зоне находится много сальных желез, которые синтезируют большое количество себума. Если мужчина часто носит головной убор или девушка поправляет челку, то проблема усугубляется. В этой статье рассмотрим причины развития прыщей на лбу, их виды и методы коррекции в домашних условиях и у косметолога.</p>
        </div>
      </div>
    </Container>
  )
}
