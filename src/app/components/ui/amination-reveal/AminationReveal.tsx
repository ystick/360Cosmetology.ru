'use client'

import { CSSProperties, PropsWithChildren } from 'react'

import { useInView } from '@hooks'

type Direction = 'up' | 'down' | 'left' | 'right' | 'none'

interface RevealProps {
  direction?: Direction
  distance?: number
  duration?: number 
  delay?: number
  once?: boolean
  easing?: string
  className?: string
}

export const AminationReveal = ({ children, direction = 'up', distance = 24, duration = 700, delay = 0, once = true, easing = 'cubic-bezier(0.22, 1, 0.36, 1)', className = '' }: PropsWithChildren<RevealProps>) => {
  const { ref, inView } = useInView<HTMLDivElement>({ once, rootMargin: '0px 0px -10% 0px' })

  const hiddenTransform = direction === 'left' ? `translate3d(${-distance}px,0,0)` : direction === 'right' ? `translate3d(${distance}px,0,0)` : direction === 'down' ? `translate3d(0,${distance}px,0)` : direction === 'up' ? `translate3d(0,${-distance}px,0)` : 'none'

  const style: CSSProperties = {
    transform: inView ? 'translate3d(0,0,0)' : hiddenTransform,
    opacity: inView ? 1 : 0,
    transitionProperty: 'transform, opacity',
    transitionDuration: `${duration}ms`,
    transitionTimingFunction: easing,
    transitionDelay: `${delay}ms`
  }

  return (
    <div ref={ref} style={style} className={`will-change-transform ${className}`}>
      {children}
    </div>
  )
}
