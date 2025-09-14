import type { FC } from 'react'

import { MenuItem } from './menu-item/MenuItem'
import { Link } from '@/app/constants/route.constants'

type MenuPtops = {
  list: Link[]
}
export const Menu: FC<MenuPtops> = ({ list }) => {
  return (
    <ul className='grid'>
      {list.map((item, i) => (
        <MenuItem key={i} href={item.href} value={item.value} />
      ))}
    </ul>
  )
}
