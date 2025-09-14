'use client'

import type { FC } from 'react'

import { useMenuContext } from '@contexts'

export const ButtonBurderMenu: FC = () => {
  const { toggleMenu } = useMenuContext()

  return (
    <button onClick={toggleMenu} aria-label="Главнео меню" className='h-full w-18.5 bg-accent-secondary rounded-br-[10px] flex items-center justify-center  ease-in-out duration-200 transition-all text-white  hover:bg-accent-secondary-hover focus:bg-accent-secondary-focus active:bg-accent-secondary disabled:bg-disabled disabled:text-white md:w-[121px] lg:w-[97px] lg:rounded-br-[20px]'>
      <div className='flex flex-col items-end gap-0.5 md:gap-[2.5px] lg:gap-[3.25px]'>
        <span className='w-[29px] h-[3px] rounded-sm bg-white md:w-[37px] lg:w-12 lg:h-[4.86px]'></span>
        <span className='w-[29px] h-[3px] rounded-sm bg-white md:w-[37px] lg:w-12 lg:h-[4.86px]'></span>
        <span className='w-[18px] h-[3px] rounded-sm bg-white md:w-[23px] lg:w-[30px] lg:h-[4.86px]'></span>
      </div>
    </button>
  )
}
