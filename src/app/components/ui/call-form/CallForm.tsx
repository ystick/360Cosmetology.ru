'use client'

import type { ReactNode } from 'react'
import { useModalFactory } from '@hooks'
import { CustomButton, type CustomButtonProps } from '../button/CustomButton'

import type { JSXElementConstructor } from 'react'

export type CallFormProps<P> = Omit<CustomButtonProps, 'onClick'> & {
  children: ReactNode
  contentForm: JSXElementConstructor<P>
  formProps?: P
}

export function CallForm<P>({ children, contentForm, formProps, ...buttonProps }: CallFormProps<P>) {
  const openFormModal = useModalFactory<P>(contentForm)

  const handleOpen = () => {
    openFormModal(formProps)
  }

  return (
    <CustomButton {...buttonProps} onClick={handleOpen}>
      {children}
    </CustomButton>
  )
}
