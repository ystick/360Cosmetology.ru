'use client'

import type { FC, ReactNode } from 'react'

import { createContext, useContext, useEffect, useState, useCallback } from 'react'

interface MenuContextProps {
  isMenuOpen: boolean
  openMenu: () => void
  closeMenu: () => void
  toggleMenu: () => void
}

const MenuContext = createContext<MenuContextProps | undefined>(undefined)

export const useMenuContext = () => {
  const context = useContext(MenuContext)
  if (!context) throw new Error('useMenuContext must be used within a MenuProvider')
  return context
}

interface ModalProviderProps {
  children: ReactNode
}

export const MenuProvider: FC<ModalProviderProps> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    document.body.classList.toggle('overflow-hidden', isMenuOpen)
    // document.body.classList.toggle('h-svh', isMenuOpen)
  }, [isMenuOpen])

  const openMenu = useCallback(() => {
    setIsMenuOpen(true)
  }, [])

  const closeMenu = useCallback(() => {
    setIsMenuOpen(false)
  }, [])

  const toggleMenu = useCallback(() => {
    setIsMenuOpen((prev) => !prev)
  }, [isMenuOpen])

  return <MenuContext.Provider value={{ isMenuOpen, openMenu, closeMenu, toggleMenu }}>{children}</MenuContext.Provider>
}
