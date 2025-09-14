'use client'

import type { FC } from 'react'

import { useRouter } from 'next/navigation'
import { useCallback, useRef, useState, useTransition } from 'react'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import { IMaskInput } from 'react-imask'
import HCaptcha from '@hcaptcha/react-hcaptcha'

import { CustomButton, InputField, PrivacyAgreementCheckbox } from '@ui'
import { Loader } from '@svg'
import { THANK_YOU_LINK } from '@constants/route.constants'
import { useModal } from '@contexts'
import { IMakeAnAppointment } from '@interfaces'
import contactFormService from '@/app/services/forms/contact-from/contact-form.service'
import { getUtm } from '@utils'

interface MakeAnAppointmentProps {
  staff?: string
  usluga?: string
  abonement?: string
}

const NEXT_PUBLIC_HCAPTCHA_SITEKEY = process.env.NEXT_PUBLIC_HCAPTCHA_SITEKEY!

export const MakeAnAppointmentForm: FC<MakeAnAppointmentProps> = ({ staff, usluga, abonement }) => {
  const { closeModal } = useModal()

  const captchaRef = useRef<HCaptcha>(null)
  const [token, setToken] = useState<string | null>(null)
  const [tokenError, setTokenError] = useState<string | null>(null)

  const [isPending, startTransition] = useTransition()
  const [isLoading, setLoading] = useState(false)
  const { push } = useRouter()

  const {
    register,
    handleSubmit,
    control,
    formState: { errors }
  } = useForm<IMakeAnAppointment>()

  const onVerify = useCallback((t: string) => {
    setToken(t)
    setTokenError(null)
  }, [])
  const onExpire = useCallback(() => setToken(null), [])
  const onError = useCallback(() => setToken(null), [])

  const onSubmit: SubmitHandler<IMakeAnAppointment> = async (data) => {
    setTokenError(null)
    setLoading(false)

    try {
      setLoading(true)

      if (!token) {
        setTokenError('Пожалуйста, подтвердите, что вы не робот')
        setLoading(false)

        return
      }

      const utm = getUtm()

      let subject = 'Записаться на прием'

      if (abonement) {
        subject = `Оформление абонемента: ${abonement}`
      } else if (staff) {
        subject = `Записаться на прием к специалисту: ${staff}`
      } else if (usluga) {
        subject = `Записаться на услугу: ${usluga}`
      }

      const payload = {
        ...data,
        subject,
        hcaptchaToken: token,
        page: typeof window !== 'undefined' ? decodeURIComponent(window.location.href) : undefined,
        ...(staff ? { staff } : {}),
        ...(usluga ? { usluga } : {}),
        ...(abonement ? { abonement } : {}),
        utm
      }

      await contactFormService.contactFrom(payload)

      startTransition(async () => {
        push(THANK_YOU_LINK.href)
        setLoading(false)
        closeModal()
      })
    } catch (err) {
      alert(err)
      setLoading(false)
      closeModal()
      captchaRef.current?.resetCaptcha()
    }
  }

  return (
    <>
      <div className='mb-[14px]'>
        <p className='text-tertiary font-bold text-[32px]/[32px] text-center'>Заполните форму</p>
      </div>
      <div className='mb-8'>
        <p className='text-[#848484] text-sm/4 text-center text-balance'>Оставьте информацию о себе чтобы мы могли с вами связаться</p>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className='mb-[17px] max-w-80 mx-auto'>
        <InputField id='name' typeField='text' type='text' placeholder='ФИО' error={errors.name?.message} registration={register('name', { required: 'Name is required' })} />
        <Controller
          name='phone'
          control={control}
          rules={{
            required: 'Пожалуйста, введите номер телефона',
            validate: (value?: string) => {
              const digits = (value ?? '').replace(/\D/g, '')
              return digits.length === 11 ? true : 'Пожалуйста, введите корректный номер телефона'
            }
          }}
          render={({ field: { onChange } }) => (
            <div className='mb-4'>
              <IMaskInput mask='+{7} (000) 000-00-00' lazy={true} unmask={true} onAccept={(unmasked: string) => onChange(unmasked ? `+${unmasked}` : '')} inputMode='tel' id='phone' placeholder='Номер телефона' className={`${errors.phone?.message ? 'text-[#FF5858] border-[#FF5858] placeholder:text-[#FF5858]' : 'text-tertiary border-[#777777] placeholder:text-[#777777]'} outline-none font-semibold text-base/[20px] bg-white rounded-xl border h-15 w-full px-6`} aria-invalid={!!errors.phone} />
            </div>
          )}
        />
        <div className='mb-4'>
          <PrivacyAgreementCheckbox control={control} />
        </div>
        <div className='mb-4'>
          <div className='flex justify-center'>
            <HCaptcha sitekey={NEXT_PUBLIC_HCAPTCHA_SITEKEY} onVerify={onVerify} onExpire={onExpire} onError={onError} ref={captchaRef} />
          </div>
          <div>{tokenError && <p className='mt-2 text-sm text-[#FF5858]'>{tokenError}</p>}</div>
        </div>
        <div className='mx-auto max-w-55'>
          <CustomButton theme='secondary' size='auto' disabled={isLoading} className='h-15 flex items-center justify-center gap-2'>
            {isLoading && <Loader className='animate-spin' />}
            Отправить
          </CustomButton>
        </div>
      </form>
    </>
  )
}
