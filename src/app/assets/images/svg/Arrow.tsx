import type { FC } from 'react'
import type { IIcon } from '@interfaces'

export const Arrow: FC<IIcon> = ({ className }) => {
  return (
    <svg width='13' height='14' viewBox='0 0 13 14' fill='none' xmlns='http://www.w3.org/2000/svg' className={className}>
      <path d='M12 1.5L1 12.5M12 1.5V12.5M12 1.5H1' stroke='currentcolor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' />
    </svg>
  )
}
