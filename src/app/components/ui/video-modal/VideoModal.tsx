'use client'

import { Close } from '@svg'
import { parseVideoEmbedUrl } from '@utils'
import { useEffect } from 'react'

type VideoModalProps = {
  videoUrl: string
  onClose: () => void
}

export const VideoModal: React.FC<VideoModalProps> = ({ videoUrl, onClose }) => {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [onClose])

  const embed = parseVideoEmbedUrl(videoUrl)

  return (
    <div
      className='fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4'
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose()
      }}
    >
      <div className='relative w-full max-w-7xl aspect-video bg-black rounded-md overflow-hidden'>
        <button aria-label='Закрыть' onClick={onClose} className='absolute top-2 w-10 h-10 right-2 z-10 flex items-center justify-center bg-black/60 text-white rounded-full p-2 hover:bg-black/80'>
          <Close className='text-white' />
        </button>

        {embed ? (
          <iframe title='Video player' src={embed} allow='autoplay; fullscreen' allowFullScreen className='w-full h-full' />
        ) : (
          <div className='flex flex-col items-center justify-center h-full text-white p-4'>
            <p className='mb-4'>Не удалось встроить видео автоматически.</p>
            <a href={videoUrl} target='_blank' rel='noopener noreferrer' className='underline'>
              Открыть в новой вкладке
            </a>
          </div>
        )}
      </div>
    </div>
  )
}
