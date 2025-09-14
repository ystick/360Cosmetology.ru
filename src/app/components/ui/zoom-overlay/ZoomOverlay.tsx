'use client'

import type { FC } from 'react'
import Image from 'next/image'
import { Close } from '@svg'

type ZoomOverlayProps = {
  src: string | null
  alt?: string
  onClose: () => void
}

export const ZoomOverlay: FC<ZoomOverlayProps> = ({ src, alt = '', onClose }) => {
  if (!src) return null

  return (
    <div className='fixed inset-0 bg-black/80 flex items-center justify-center z-50' onClick={onClose}>
      <div className='relative w-full max-w-[90vw] h-full max-h-[90vh]' onClick={(e) => e.stopPropagation()}>
        <Image unoptimized src={src} alt={alt} fill className='object-contain' />
      </div>
      <button onClick={onClose} className='absolute bg-black top-0 right-0 p-4 text-white hover:scale-110 transition' aria-label='Close'>
        <Close className='w-5 h-5 text-white' />
      </button>
    </div>
  )
}
