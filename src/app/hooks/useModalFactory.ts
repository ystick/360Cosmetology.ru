'use client'

import React, { JSXElementConstructor } from 'react'
import { useModal } from '@contexts'

export function useModalFactory<P>(Content: JSXElementConstructor<P>) {
  const { openModal } = useModal()

  return (props?: P) => {
    const element = React.createElement(Content, props as P)
    openModal(element)
  }
}
