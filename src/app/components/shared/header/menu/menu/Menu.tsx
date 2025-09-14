'use client'

import type { FC } from 'react'

import { menuNavigation } from '@data/navigation'
import { CallForm, IconLink, IconText, RequestCallForm } from '@ui'
import { Arrow, Close, Instagram, Location, Telegram, VK as IconVK, Whatsapp, YouTube } from '@svg'
import { MenuItem } from './menu-item/MenuItem'
import { useMenuContext } from '@contexts'
import { WHATSAPP, VK, TELEGRAM, YOUTUBE, INSTAGRAM } from '@constants/social-links.constants'

export const Menu: FC = () => {
  const { closeMenu, isMenuOpen } = useMenuContext()

  return (
    <div className={`${isMenuOpen ? 'translate-y-0' : '-translate-y-[110%]'} will-change-transform transition-transform ease-in-out z-3 duration-200 absolute -top-0 right-0 w-[324px] overflow-hidden max-w-[calc(100vw_-_40px)] h-dvh max-h-[638px] bg-primary rounded-b-[10px] md:w-[494px] lg:rounded-b-[20px]`}>
      <button aria-label='Закрыть окно' onClick={closeMenu} className='w-10 h-10 absolute flex items-center justify-center right-4 top-4'>
        <Close  className='text-white'/>
      </button>
      <div className='overflow-y-auto h-full pt-10 px-10 pb-8'>
        <div className='mb-[30px]'>
          {menuNavigation.map((item, i) => (
            <MenuItem key={i} href={item.href} value={item.value} />
          ))}
        </div>
        <div className='mb-[30px]'>
          <CallForm contentForm={RequestCallForm} theme='white' size='sm' icon={Arrow} className='md:max-w-[220px]'>
            Записаться
          </CallForm>
        </div>
        <div className='mb-[22px] max-w-[220px]'>
          <IconText type='url' text='Москва, ул. 3-я Фрунзенская, 6, район Хамовники' value='https://yandex.com/maps/-/CHxyAGlE' theme='light' icon={Location} className='items-start text-white mb-2.5' />
          <IconText type='url' text='Москва, 2-ой Балтийский пер., 6' value='https://yandex.com/maps/-/CHxyA0ls' theme='light' icon={Location} className='items-center text-white' />
        </div>
        <div className='flex items-center gap-[5px]'>
          <IconLink href={WHATSAPP} icon={Whatsapp} ariaLabel='Кнопка социальной сети' IconClassName='text-white w-[27px] h-[27px]' />
          <IconLink href={TELEGRAM} icon={Telegram} ariaLabel='Кнопка социальной сети' IconClassName='text-white w-[27px] h-[27px]' />
          <IconLink href={VK} icon={IconVK} ariaLabel='Кнопка социальной сети' IconClassName='text-white w-[27px] h-[27px]' />
          <IconLink href={YOUTUBE} icon={YouTube} ariaLabel='Кнопка социальной сети' IconClassName='text-white w-[27px] h-[27px]' />
          <IconLink href={INSTAGRAM} icon={Instagram} ariaLabel='Кнопка социальной сети' IconClassName='text-white w-[27px] h-[27px]' />
        </div>
      </div>
    </div>
  )
}
