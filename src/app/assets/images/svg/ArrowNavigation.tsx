import type { FC } from 'react'
import type { IIcon } from '@interfaces'

export const ArrowNavigation: FC<IIcon> = ({ className }) => (
  <svg width='18' height='16' viewBox='0 0 18 16' fill='none' xmlns='http://www.w3.org/2000/svg' className={className}>
    <path d='M17.6676 8.70711C18.0581 8.31658 18.0581 7.68342 17.6676 7.29289L11.3037 0.928932C10.9131 0.538408 10.28 0.538408 9.88945 0.928932C9.49892 1.31946 9.49892 1.95262 9.88945 2.34315L15.5463 8L9.88945 13.6569C9.49892 14.0474 9.49892 14.6805 9.88945 15.0711C10.28 15.4616 10.9131 15.4616 11.3037 15.0711L17.6676 8.70711ZM0 8V9H16.9605V8V7H0V8Z' fill='currentcolor' />
  </svg>
)
