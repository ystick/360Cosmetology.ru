import type { FC, InputHTMLAttributes } from 'react'
import type { UseFormRegisterReturn } from 'react-hook-form'

interface InputFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  id: string
  typeField: 'textarea' | 'text'
  placeholder: string
  error?: string
  registration: UseFormRegisterReturn
}

export const InputField: FC<InputFieldProps> = ({ id, type, typeField, placeholder, error, registration }) => {
  const baseClass = `${error ? 'text-[#FF5858] border-[#FF5858] placeholder:text-[#FF5858]' : 'text-tertiary border-[#777777] placeholder:text-[#777777]'} outline-none  font-semibold text-base/[20px] bg-white rounded-xl border h-15 w-full px-6`

  return <div className='mb-6'>{typeField === 'textarea' ? <textarea id={id} placeholder={placeholder} className={`${baseClass} `} {...registration} /> : <input id={id} type={type} placeholder={placeholder} className={`${baseClass} `} {...registration} />}</div>
}
