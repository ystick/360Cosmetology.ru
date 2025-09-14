import type { FC } from 'react'
import { LeftSide } from './left-side/LeftSide'
import { MiddleSide } from './middle-side/MiddleSide'
import { RightSide } from './right-side/RightSide'

export const Header: FC = () => {
  return (
    <header className='container z-3 h-12 sticky top-0 md:h-[63px] lg:h-[70px] lg:max-w-[1360px] lg:px-0'>
      <div className='bg-white h-full rounded-b-[10px] flex items-center lg:rounded-b-[20px]'>
        <LeftSide />
        <MiddleSide />
        <RightSide />
      </div>
    </header>
  )
}