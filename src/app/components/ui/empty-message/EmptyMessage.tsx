import type { FC } from 'react'

type EmptyMessage = {
  message: string
}

export const EmptyMessage: FC<EmptyMessage> = ({ message }) => {
  return <div className='bg-accent-secondary/30 border border-primary rounded-md px-3 py-2 text-xl font-medium text-secondary'>{message}</div>
}
