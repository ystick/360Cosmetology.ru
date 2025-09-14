import type { FC, InputHTMLAttributes } from 'react'
import type { IIcon } from '@interfaces'

import { useMemo } from 'react'

export interface IconTextProps {
  icon: FC<IIcon>
  text: string
  theme: 'light' | 'dark' | 'primary'
  size?: 'xs' | 'sm' | 'auto'
  fontWeight?: 'medium' | 'bold' | 'auto'
  themeIcon?: 'light' | 'dark' | 'primary'
  type: InputHTMLAttributes<HTMLInputElement>['type']
  value?: string
  className?: string
}

export const iconTextTheme: Record<IconTextProps['theme'], string | IconTextProps['themeIcon']> = {
  light: 'text-white',
  dark: 'text-foreground',
  primary: 'text-primary'
}

export const iconTextSize: Record<NonNullable<IconTextProps['size']>, string> = {
  xs: 'text-xs/[14px]',
  sm: 'text-xs/[14px] lg:text-base/[19px]',
  auto: ''
}

export const iconTextWeight: Record<NonNullable<IconTextProps['fontWeight']>, string> = {
  medium: 'font-medium ',
  bold: 'font-bold',
  auto: ''
}

export const IconText: FC<IconTextProps> = ({ icon: Icon, text, theme, type, value, size = 'xs', fontWeight = 'medium', className = '', themeIcon }) => {
  const computedClassContent = useMemo(() => `${iconTextSize[size]}  ${iconTextWeight[fontWeight]}`, [])

  return (
    <div className={`flex gap-2.5 ${iconTextTheme[theme]} ${className}`}>
      <Icon className={`shrink-0 ${themeIcon && iconTextTheme[themeIcon]}`} />
      {type === 'text' && <span className={computedClassContent}>{text}</span>}
      {type === 'tel' && (
        <a className={computedClassContent} href={`tel:${value ?? text}`}>
          {text}
        </a>
      )}
      {type === 'url' && (
        <a className={computedClassContent} href={value} target='_blank' rel='noopener noreferrer'>
          {text}
        </a>
      )}
    </div>
  )
}
