import type { FC, ReactNode } from 'react'

interface ContainerProps {
  children: ReactNode
  className?: string
}

export const Container: FC<ContainerProps> = ({ children, className }) => {
  return <div className={className ? `container ${className}` : 'container'}>{children}</div>
}
