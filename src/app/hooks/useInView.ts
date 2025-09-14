'use client'

import { useEffect, useRef, useState } from 'react'

export function useInView<T extends HTMLElement>({ root = null, rootMargin = '0px 0px -10% 0px', threshold = 0.1, once = true } = {}) {
  const ref = useRef<T | null>(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    if (typeof window !== 'undefined' && window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) {
      setInView(true)
      return
    }

    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          if (once) io.unobserve(el)
        } else if (!once) {
          setInView(false)
        }
      },
      { root, rootMargin, threshold }
    )

    io.observe(el)
    return () => io.disconnect()
  }, [root, rootMargin, threshold, once])

  return { ref, inView }
}
