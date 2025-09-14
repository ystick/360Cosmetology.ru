import type { FC } from 'react'
import type { Novosti } from '@/graphql/client'

import { Item } from './item/Item'

type ListProps = {
  novostis: readonly Novosti[]
}

export const List: FC<ListProps> = ({ novostis }) => {
  return (
    <div className='grid gap-[5px] grid-cols-2 grid-flow-dense mb-12.5 md:gap-2.5 lg:gap-5 lg:grid-cols-4 lg:mb-28.5'>
      {novostis.map((novost, i) => (
        <Item key={i} novost={novost} />
      ))}
    </div>
  )
}
