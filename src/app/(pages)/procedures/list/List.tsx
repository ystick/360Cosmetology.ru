import type { FC } from 'react'
import type { Usluga } from '@/graphql/client'

import { PopularServicesItem } from '@shared'

type ListProps = {
  uslugas: readonly Usluga[]
}

export const List: FC<ListProps> = ({ uslugas }) => {

  return (
    <div className='flex flex-wrap gap-2.5 md:gap-3 lg:gap-5'>
      {uslugas.map((usluga) => (
        <PopularServicesItem key={usluga.documentId} usluga={usluga} className='md:w-[calc(50%_-_6px)] lg:w-[calc(33.333%_-_13.5px)]' />
      ))}
    </div>
  )
}
