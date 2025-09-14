'use client'

import type { FC } from 'react'

import { ArrowNavigation } from '@svg'

type ButtonAction = {
  disabled: boolean
  onClick: () => void
  className?: string
}

type NavigationProps = {
  leftButton: ButtonAction
  rightButton: ButtonAction
}

export const Navigation: FC<NavigationProps> = ({ leftButton, rightButton }) => {
  const base = `
    bg-accent-secondary text-white w-[49px] h-12
    flex items-center justify-center rounded-[15px]
    hover:bg-accent-secondary-hover focus:bg-accent-secondary-focus
    active:bg-accent-secondary ease-in-out duration-200 transition-all
    disabled:bg-transparent disabled:cursor-default
    disabled:border-[#DDDDDD] disabled:border disabled:text-[#DDDDDD]
  `

  return (
    <>
      <button disabled={leftButton.disabled} aria-label='Кнопка влево' onClick={leftButton.onClick} className={base + leftButton.className}>
        <ArrowNavigation className='rotate-180' />
      </button>

      <button disabled={rightButton.disabled} aria-label='Кнопка вправо' onClick={rightButton.onClick} className={base + rightButton.className}>
        <ArrowNavigation />
      </button>
    </>
  )
}
