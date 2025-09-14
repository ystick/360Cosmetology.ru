'use client'

import { Controller, Control, FieldValues, Path } from 'react-hook-form'

type PrivacyAgreementCheckboxTheme = 'dark' | 'light'

interface PrivacyAgreementCheckboxProps<T extends FieldValues> {
  control: Control<T>
  name?: Path<T>
  theme?: PrivacyAgreementCheckboxTheme
}

export const themePrivacyAgreementCheckbox: Record<PrivacyAgreementCheckboxTheme, { text: string; link: string; checkbox: string }> = {
  dark: {
    text: 'text-foreground',
    link: 'text-primary',
    checkbox: 'border-foreground text-white/10'
  },
  light: {
    text: 'text-background',
    link: 'text-tertiary',
    checkbox: 'border-white text-white/10'
  }
}

export const PrivacyAgreementCheckbox = <T extends FieldValues>({ control, theme = 'dark', name = 'privacyAgreement' as Path<T> }: PrivacyAgreementCheckboxProps<T>) => {
  return (
    <Controller
      name={name}
      control={control}
      rules={{
        required: 'Вы должны принять соглашение по обработке персональных данных'
      }}
      render={({ field, fieldState }) => (
        <div className='py-3 relative'>
          <div className='flex items-start gap-2'>
            <button type='button' role='checkbox' id={`checkbox-${name}`} tabIndex={0} aria-labelledby={`label-${name}`} aria-checked={field.value} onClick={() => field.onChange(!field.value)} className={`w-4 h-4 shrink-0 rounded border flex items-center justify-center transition-all ${fieldState.error && '!border-[#FF5858]'} ${field.value ? 'bg-primary border-primary text-white' : themePrivacyAgreementCheckbox[theme].checkbox}`}>
              {field.value && (
                <svg className='w-3 h-3 text-current' fill='none' stroke='currentColor' strokeWidth={2} viewBox='0 0 24 24'>
                  <path strokeLinecap='round' strokeLinejoin='round' d='M5 13l4 4L19 7' />
                </svg>
              )}
            </button>
            <label htmlFor={`checkbox-${name}`} id={`label-${name}`} className={`${themePrivacyAgreementCheckbox[theme].text} text-xs leading-xs ${fieldState.error && '!text-[#FF5858]'}  text-balance`}>
              Я согласен(на) с политикой конфиденциальности
            </label>
          </div>
          {/* {fieldState.error && <p className='absolute text-[12px] -bottom-3 text-sm/3 text-[#FF5858]'>{fieldState.error.message}</p>} */}
        </div>
      )}
    />
  )
}
