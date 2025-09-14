import type { FC } from 'react'
import type { Oborudovanie } from '@/graphql/client'

import { EquipmentSmallCard } from '@shared'

type ListProps = {
  oborudovanies: readonly Oborudovanie[]
}

export const List: FC<ListProps> = ({ oborudovanies }) => {
  return (
    <div className='grid gap-[5px] grid-cols-2 grid-flow-dense md:gap-2.5 lg:gap-5 lg:grid-cols-4'>
      {oborudovanies.map((oborudovanie, i) => (
        <EquipmentSmallCard oborudovanie={oborudovanie} key={i} />
      ))}
    </div>
  )
}
