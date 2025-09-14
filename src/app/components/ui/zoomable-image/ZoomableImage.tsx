'use client'

import type { ComponentProps } from 'react'
import type { FC } from 'react'

import Image from 'next/image'
import { useZoomContext } from '@contexts'

type ZoomableImageProps = Omit<ComponentProps<typeof Image>, 'priority'> & {
  className?: string
  overlayClassName?: string
}

export const ZoomableImage: FC<ZoomableImageProps> = ({ src, alt, width, height, className, overlayClassName, ...rest }) => {
  const { openZoom } = useZoomContext()

  return (
    <>
      <div onClick={() => openZoom(src as string)} className={`cursor-pointer w-full h-full  ${className}`}>
        <Image unoptimized src={src} alt={alt} width={width} height={height} {...rest} className='w-full h-full object-cover' />
      </div>
    </>
  )
}
