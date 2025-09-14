import type { IIcon } from '@interfaces'
import Link from 'next/link'
import type { FC, ReactNode } from 'react'

export interface CustomButtonProps {
  children: ReactNode
  disabled?: boolean
  onClick?: () => void
  className?: string
  icon?: FC<IIcon>
  href?: string
  type?: 'button' | 'link'
  iconClassName?: string
  fontWeight?: 'medium' | 'bold' | 'semiBold' | 'auto'
  theme: 'default' | 'secondary' | 'outline-dark' | 'white'
  size: 'xs' | 'sm' | 'base' | 'lg' | 'xl' | 'auto'
}

export const buttonSize: Record<CustomButtonProps['size'], string> = {
  xs: 'text-lg font-bold max-w-37.5 h-10',
  sm: 'text-lg font-bold max-w-37.5 h-15',
  base: 'text-lg font-bold max-w-55 h-15',
  lg: 'text-lg font-bold max-w-[287px] h-15',
  xl: 'text-lg font-bold max-w-85 h-15',
  auto: ''
}

export const buttonTheme: Record<CustomButtonProps['theme'], string> = {
  default: 'text-white bg-accent-default hover:bg-accent-default-hover focus:bg-accent-default-focus active:bg-accent-default disabled:bg-disabled disabled:text-white',
  secondary: 'text-white bg-accent-secondary hover:bg-accent-secondary-hover focus:bg-accent-secondary-focus active:bg-accent-secondary disabled:bg-disabled disabled:text-white',
  'outline-dark': 'bg-transparent text-foreground border-2 border-foreground hover:text-white hover:bg-foreground focus:bg-foreground focus:text-white active:text-foreground active:bg-white disabled:bg-disabled disabled:text-white',
  white: 'bg-white text-foreground hover:text-white hover:bg-foreground focus:bg-foreground focus:text-white active:text-foreground active:bg-white disabled:bg-disabled disabled:text-white'
}

export const buttonFontWeight: Record<NonNullable<CustomButtonProps['fontWeight']>, string> = {
  medium: 'font-medium',
  bold: 'font-bold',
  semiBold: 'font-semibold',
  auto: ''
}

export const CustomButton: FC<CustomButtonProps> = ({ children, className, size, theme, onClick, icon: Icon, iconClassName = '', type = 'button', fontWeight = 'bold', href, disabled = false }) => {
  return type === 'button' ? (
    <button onClick={onClick} disabled={disabled} className={`${className} ${buttonFontWeight[fontWeight]} shrink-0 w-full rounded-[10px] ease-in-out duration-200 transition-all ${theme && buttonTheme[theme]} ${size && buttonSize[size]} ${Icon && 'flex items-center justify-center gap-2.5'}`}>
      {children}
      {Icon && <Icon size={12} className={`${iconClassName}`} />}
    </button>
  ) : (
    <Link href={href as string} className={`${className} ${buttonFontWeight[fontWeight]} shrink-0 w-full flex items-center justify-center rounded-[10px] ease-in-out duration-200 transition-all ${theme && buttonTheme[theme]} ${size && buttonSize[size]} ${Icon && 'flex items-center justify-center gap-2.5'}`}>
      {children}
      {Icon && <Icon size={12} className={`${iconClassName}`} />}
    </Link>
  )
}
