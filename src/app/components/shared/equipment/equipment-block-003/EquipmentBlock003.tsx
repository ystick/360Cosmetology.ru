import type { FC } from 'react'

import { Container } from '@shared'

type EquipmentBlock003Props = {
  content: string
}

export const EquipmentBlock003: FC<EquipmentBlock003Props> = ({ content }) => {
  return (
    <Container className='flex gap-5 mb-7.5 md:gap-7.5 md:mb-12.5 lg:mb-15 lg:gap-[37px]'>
      <div className='w-[3px] h-auto bg-accent-secondary rounded-[3px] shrink-0'></div>
      <div className='equipment_block_003'>
        <div dangerouslySetInnerHTML={{ __html: content }} />
      </div>
    </Container>
  )
}
