import type { FC } from 'react'
import type { IIcon } from '@interfaces'

interface IIconLink {
  href: string
  icon: FC<IIcon>
  className?: string
  IconClassName?: string
  ariaLabel?: string
}

export const IconLink: FC<IIconLink> = ({ href, icon: Icon, className = '', IconClassName = '', ariaLabel }) => {
  return (
    <a href={href} target='_blank' aria-label={ariaLabel} className={className}>
      <Icon className={IconClassName} />
    </a>
  )
}
