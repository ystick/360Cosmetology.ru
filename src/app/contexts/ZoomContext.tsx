'use client'

import { createContext, useContext, useState, useEffect, ReactNode, FC } from 'react'
import { ZoomOverlay } from '@ui'

type ZoomContextType = {
  openZoom: (src: string, alt?: string) => void
  closeZoom: () => void
}

const ZoomContext = createContext<ZoomContextType | null>(null)

export const ZoomProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [src, setSrc] = useState<string | null>(null)

  const openZoom = (newSrc: string) => {
    setSrc(newSrc)
  }
  const closeZoom = () => setSrc(null)

  // закрытие по Escape
  useEffect(() => {
    if (!src) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeZoom()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [src])

  return (
    <ZoomContext.Provider value={{ openZoom, closeZoom }}>
      {children}
      {/* Overlay рисуется один раз внизу провайдера */}
      <ZoomOverlay src={src} onClose={closeZoom} />
    </ZoomContext.Provider>
  )
}

export function useZoomContext() {
  const ctx = useContext(ZoomContext)
  if (!ctx) {
    throw new Error('useZoom must be used within a ZoomProvider')
  }
  return ctx
}
