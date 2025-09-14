'use client'

import type { ReactNode } from 'react'

import { Suspense, useEffect } from 'react'
import Script from 'next/script'
import { MenuProvider, ModalProvider, ZoomProvider } from '@contexts'
import { Modal } from '@ui'
import { UtmTracker } from '@hooks'

import dynamic from 'next/dynamic'
const UtmTrackerNoSSR = dynamic(() => import('@hooks').then((m) => m.UtmTracker), { ssr: false })

interface Props {
  children: ReactNode
}

declare global {
  interface Window {
    isvek?: any
  }
}

export function ClientProviders({ children }: Props) {
  useEffect(() => {
    if (typeof window !== 'undefined' && window.isvek?.Bvi) {
      new window.isvek.Bvi({
        target: '.bvi-open', // кнопка с этим классом будет открывать панель
        theme: 'white',
        fontsize: 18,
        images: true,
        speech: true
      })
    }
  }, [])
  return (
    <MenuProvider>
      <ModalProvider>
        <ZoomProvider>
          {children}
          <Modal />
          <UtmTrackerNoSSR />
          <Script
            src='https://unpkg.com/bvi@latest/dist/js/bvi.min.js'
            strategy='afterInteractive'
            onLoad={() => {
              if (window.isvek?.Bvi) {
                new window.isvek.Bvi({ target: '.bvi-open' })
              }
            }}
          />

          <link rel='stylesheet' href='/css/bvi.min.css' />
        </ZoomProvider>
      </ModalProvider>
    </MenuProvider>
  )
}
