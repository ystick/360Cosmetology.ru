import type { FC, ReactNode, ElementType } from 'react'

export interface HeadingProps {
  level: 1 | 2 | 3 | 4 | 5 | 6
  size: 1 | 2 | 3 | 4 | 5 | 'auto'
  children: ReactNode
  weight?: 'medium' | 'bold' | 'semibold' | 'auto'
  className?: string
  extra?: string
}

const HeadingSize: Record<HeadingProps['size'], string> = {
  1: 'text-foreground ',
  2: 'text-foreground text-[27px]/[32px] md:text-[32px]/[38px] lg:text-[52px]/[61px]',
  3: 'text-foreground text-lg/[21px] md:text-[32px]/[38px]',
  4: 'text-foreground text-[21px]/[27px] md:text-[20px]/[20px] lg:text-[30px]/[30px]',
  5: 'text-foreground text-lg/[19px] md:text-[20px]/[20px] lg:text-[30px]/[30px]',
  auto: ''
} as const

const HeadingWeight: Record<NonNullable<HeadingProps['weight']>, string> = {
  medium: 'font-medium',
  bold: 'font-bold',
  semibold: 'font-semibold',
  auto: ''
} as const

export const Heading: FC<HeadingProps> = ({ level, className = '', extra = '', weight = 'bold', size, children }) => {
  const Tag: ElementType = `h${level}`

  return <Tag className={`${extra} ${HeadingSize[size]}  ${HeadingWeight[weight]} ${className}`}>{children}</Tag>
}
