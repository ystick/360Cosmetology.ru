'use client'

import type { FC } from 'react'

import { IconText, IconLink, RequestCallForm } from '@ui'
import { Instagram, Location, Phone, Telegram, VK as IconVK, Whatsapp, YouTube, BiGlasses } from '@svg'
import { WHATSAPP, TELEGRAM, VK, YOUTUBE, INSTAGRAM } from '@constants/social-links.constants'
import { useModalFactory } from '@hooks'

export const MiddleSide: FC = () => {
  const openFormModal = useModalFactory(RequestCallForm)

  const handleOpen = () => {
    openFormModal()
  }

  return (
    <>
      <div className='hidden lg:flex lg:h-full'>
        <div className='hidden xl:flex xl:flex-1 xl:items-center xl:gap-5 xl:mr-7'>
          <IconText type='url' text='Москва, ул. 3-я Фрунзенская, 6, район Хамовники' value='https://yandex.com/maps/-/CHxyAGlE' theme='dark' icon={Location} className='items-center' />
          <IconText type='url' text='Москва, 2-ой Балтийский пер., 6' value='https://yandex.com/maps/-/CHxyA0ls' theme='dark' icon={Location} className='items-center' />
          <IconText type='tel' text='8 (499) 681-72-38' value='+74996817238' theme='dark' icon={Phone} className='items-center shrink-0' />
        </div>
        <button onClick={handleOpen} className='shrink-0 w-[178px] h-[70px] ease-in-out duration-200 transition-all text-white bg-accent-secondary hover:bg-accent-secondary-hover focus:bg-accent-secondary-focus active:bg-accent-secondary disabled:bg-disabled disabled:text-white text-[21px] font-bold'>
          Записаться
        </button>
        <div className='px-5 min-[1300px]:pl-[32px] min-[1300px]:pr-3 flex items-center gap-[5px]'>
          <IconLink href={WHATSAPP} icon={Whatsapp} IconClassName='text-primary w-[27px] h-[27px]' ariaLabel='Кнопка социальной сети' />
          <IconLink href={TELEGRAM} icon={Telegram} IconClassName='text-primary w-[27px] h-[27px]' ariaLabel='Кнопка социальной сети' />
          <IconLink href={VK} icon={IconVK} IconClassName='text-primary w-[27px] h-[27px]' ariaLabel='Кнопка социальной сети' />
          <IconLink href={YOUTUBE} icon={YouTube} IconClassName='text-primary w-[27px] h-[27px]' ariaLabel='Кнопка социальной сети' />
          <IconLink href={INSTAGRAM} icon={Instagram} IconClassName='text-primary w-[27px] h-[27px]' ariaLabel='Кнопка социальной сети' />
        </div>
      </div>
      <button type='button' className='bvi-open w-10 h-10 p-1 self-center mx-2 flex items-center justify-center rounded-xl bg-black text-white' data-bvi-theme='white' data-bvi-fontsize='18' data-bvi-voice='true' data-bvi-images='true' title='Версия для слабовидящих'>
        <BiGlasses className='w-auto h-auto' />
      </button>
    </>
  )
}
