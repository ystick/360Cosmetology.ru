'use client'

import { createContext, ReactNode, useContext, useState } from 'react'

type ModalData = any

type ModalContextType = {
  isOpen: boolean
  data: ModalData | null
  openModal: (data?: ModalData) => void
  closeModal: () => void
}

const ModalContext = createContext<ModalContextType | undefined>(undefined)

export const ModalProvider = ({ children }: { children: ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [data, setData] = useState<ModalData | null>(null)

  const openModal = (payload?: ModalData) => {
    setData(payload ?? null)
    setIsOpen(true)
  }

  const closeModal = () => {
    setIsOpen(false)
    setData(null)
  }

  return <ModalContext.Provider value={{ isOpen, data, openModal, closeModal }}>{children}</ModalContext.Provider>
}

export function useModal() {
  const context = useContext(ModalContext)
  if (!context) {
    throw new Error('useModal must be used within a ModalProvider')
  }
  return context
}
