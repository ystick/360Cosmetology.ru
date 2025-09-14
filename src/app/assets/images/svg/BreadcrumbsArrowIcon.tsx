import { IIcon } from '@interfaces'
import type { FC } from 'react'

export const BreadcrumbsArrowIcon: FC<IIcon> = ({ className }) => (
  <svg width='5' height='8' viewBox='0 0 5 8' fill='none' xmlns='http://www.w3.org/2000/svg' className={className}>
    <path fillRule='evenodd' clipRule='evenodd' d='M0.244078 7.76569C-0.0813589 7.45327 -0.0813589 6.94673 0.244078 6.63431L2.98816 4L0.244078 1.36569C-0.0813592 1.05327 -0.0813592 0.546734 0.244078 0.234315C0.569514 -0.078105 1.09715 -0.078105 1.42259 0.234315L4.75592 3.43431C5.08136 3.74673 5.08136 4.25327 4.75592 4.56569L1.42259 7.76569C1.09715 8.0781 0.569515 8.0781 0.244078 7.76569Z' />
  </svg>
)
