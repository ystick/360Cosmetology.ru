import type { FC } from 'react'

import { Sotrudnik } from '@/graphql/client'
import { StaffSmallListCard } from '@shared'

type ListProps = {
  sotrudniks: readonly Sotrudnik[]
}

export const List: FC<ListProps> = ({ sotrudniks }) => {
  return (
    <div className='flex flex-wrap gap-2.5 md:gap-5 md:max-w-[1090px]'>
      {sotrudniks.map((sotrudnik) => (
        <StaffSmallListCard key={sotrudnik.documentId} sotrudnik={sotrudnik} />
      ))}
    </div>
  )
}
