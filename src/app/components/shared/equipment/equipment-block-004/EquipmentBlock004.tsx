import type { FC } from 'react'
import type { UploadFile } from '@/graphql/client'

import { Container } from '@shared'
import Image from 'next/image'
import { getFileUrl } from '@utils'

type EquipmentBlock004Props = {
  content: Pick<UploadFile, 'url' | 'alternativeText'>
}

export const EquipmentBlock004: FC<EquipmentBlock004Props> = ({ content }) => {
  return (
    <Container className='h-[164px] mb-7.5 md:h-[264px] md:mb-12.5 lg:h-[470px] lg:mb-15'>
      <Image unoptimized src={getFileUrl(content.url)} alt={content.alternativeText ?? ''} width={1260} height={470} className='h-full w-full object-cover rounded-[10px]' />
    </Container>
  )
}
