import type { FC } from 'react'

import { ButtonBurderMenu } from '../menu/button-burder-menu/ButtonBurderMenu'
import { Menu } from '../menu/menu/Menu'

export const RightSide: FC = () => {
  return (
    <div className='h-full relative'>
      <ButtonBurderMenu />
      <Menu />
    </div>
  )
}
