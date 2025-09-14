import type { FC } from 'react'

export const Check: FC<{ size: number; className?: string }> = ({ size, className }) => (
  <svg stroke='currentColor' fill='currentColor' strokeWidth='0' version='1.1' viewBox='0 0 16 16' height={size} width={size} xmlns='http://www.w3.org/2000/svg' className={className}>
    <path d='M13.5 2l-7.5 7.5-3.5-3.5-2.5 2.5 6 6 10-10z'></path>
  </svg>
)
