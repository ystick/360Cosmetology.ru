'use client'

import { createPortal } from 'react-dom'
import { useEffect } from 'react'

import { useModal } from '@contexts'
import { Close } from '@svg'

export function Modal() {
  const { isOpen, data, closeModal } = useModal()

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
  }, [isOpen])

  if (!isOpen) return null

  return createPortal(
    <div className='fixed inset-0 z-50 p-4 flex items-center justify-center bg-black/70' onClick={closeModal}>
      <div className='bg-white rounded-[28px] py-10 p-6 relative md:px-12.5 md:py-15 w-full md:w-120' onClick={(e) => e.stopPropagation()}>
        <button className='absolute w-5 h-5 flex items-center justify-center right-4 top-4 md:right-7.5 md:top-7.5' onClick={closeModal}>
          <Close className='text-[#333333]' />
        </button>
        {data}
      </div>
    </div>,
    document.body
  )
}
