'use client'

import type { FC } from 'react'
import Image from 'next/image'
import { useRef, useState, useEffect } from 'react'

interface LazyVideoProps {
  src: string
  poster?: string
  className?: string
  threshold?: number
  loadingImage?: 'eager' | 'lazy'
  priorityImage?: boolean
}

export const LazyVideo: FC<LazyVideoProps> = ({ src, poster, className = '', threshold = 0.2, loadingImage, priorityImage }) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)

  const [isVisible, setIsVisible] = useState(false)
  const [isReady, setIsReady] = useState(false)

  useEffect(() => {
    const el = containerRef.current
    if (!el) return

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          io.disconnect()
        }
      },
      { root: null, rootMargin: '0px', threshold }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [threshold])

  useEffect(() => {
    const v = videoRef.current
    if (!v) return
    v.setAttribute('playsinline', '')
    v.setAttribute('webkit-playsinline', '')
    const tryPlay = () => v.play().catch(() => {})
    if (isReady) tryPlay()
  }, [isReady])

  return (
    <div ref={containerRef} className={`relative w-full h-full bg-gray-100 overflow-hidden ${className}`}>
      {poster && (
        <Image unoptimized
          src={poster}
          alt=''
          width={800}
          height={460}
          priority={priorityImage || false}
          loading={loadingImage || 'lazy'}
          sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300
                      ${isReady ? 'opacity-0' : 'opacity-100'}`}
        />
      )}

      {isVisible && (
        <video
          key={src}
          ref={videoRef}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300
                      ${isReady ? 'opacity-100' : 'opacity-0'}`}
          muted
          loop
          autoPlay
          playsInline
          preload='auto'
          onLoadedData={() => setIsReady(true)}
          onCanPlay={() => setIsReady(true)}
          poster={poster}
        >
          <source src={src} type='video/mp4' />
        </video>
      )}
    </div>
  )
}
