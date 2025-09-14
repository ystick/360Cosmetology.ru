import type { FC } from 'react'

import Image from 'next/image'
import Link from 'next/link'

import { Instagram, Location, LogoSmall, Telegram, VK as IconVK, Whatsapp, YouTube } from '@svg'
import { CallForm, IconLink, IconText, RequestCallForm } from '@ui'
import { Menu } from './menu/Menu'
import { WHATSAPP, VK, TELEGRAM, YOUTUBE, INSTAGRAM } from '@constants/social-links.constants'
import { HOME_LINK } from '@constants/route.constants'
import { footerNavigationFirst, footerNavigationSecend } from '@data/navigation/footer.navigation'

export const Footer: FC = () => {
  return (
    <footer className='bg-foreground rounded-t-[10px] px-[30px] pt-[30px] pb-[31px] md:pt-[55px] md:pb-[60px] lg:py-[90px]'>
      <div className='max-w-[658px] mx-auto lg:max-w-[1260px]'>
        <div className='grid md:grid-cols-[136px_297px_155px] lg:grid-cols-[240px_auto_433px_auto_350px]'>
          <div className='mb-[30px] lg:row-start-1 lg:mb-0'>
            <Link href={HOME_LINK.href} aria-label='Главная страница сайта'>
              <LogoSmall className='w-[62px] h-[64px] md:w-[77px] md:h-[79px]' />
            </Link>
          </div>
          <div className='grid grid-cols-2 max-w-[274px] mb-[30px] md:col-span-2 md:row-span-2 md:max-w-[425px] lg:col-start-3 lg:row-start-1 lg:col-span-2  lg:justify-between lg:mb-10 lg:row-end-6 lg:max-w-[829px] lg:gap-y-10'>
            <div>
              <Menu list={footerNavigationFirst} />
            </div>
            <div>
              <Menu list={footerNavigationSecend} />
            </div>
          </div>
          <div className='mb-2.5 md:row-start-3 lg:row-start-1 lg:col-start-5 lg:mb-6'>
            <CallForm contentForm={RequestCallForm} size='auto' theme='secondary' className='max-w-[272px] h-[35px] font-bold text-sm'>
              Перезвоните мне
            </CallForm>
          </div>
          <div className='mb-[29px] md:row-start-4 md:mb-5 lg:row-start-2 lg:col-start-5 lg:mb-10'>
            <div className='max-w-[274px] flex items-center gap-2.5 lg:gap-8.5'>
              <Link href='https://ionclinic.com/' className='max-w-35 h-[35px] flex items-center justify-center font-bold text-sm shrink-0 w-full rounded-[10px] ease-in-out duration-200 transition-all bg-white text-foreground hover:text-white hover:bg-foreground focus:bg-foreground focus:text-white active:text-foreground active:bg-white disabled:bg-disabled disabled:text-white  undefined'>
                360 Сокол
              </Link>
              <Link href='https://shops360.ru/' className='max-w-35 h-[35px] flex items-center justify-center font-bold text-sm shrink-0 w-full rounded-[10px] ease-in-out duration-200 transition-all bg-white text-foreground hover:text-white hover:bg-foreground focus:bg-foreground focus:text-white active:text-foreground active:bg-white disabled:bg-disabled disabled:text-white  undefined'>
                360 фрунзенская
              </Link>
            </div>
          </div>
          <div className='mb-[22px] md:col-span-2 md:mb-5 lg:row-start-3 lg:col-start-5 lg:col-span-1 lg:mb-0'>
            <div className='max-w-[220px] md:max-w-full lg:flex lg:flex-col lg:justify-between lg:h-full lg:py-1'>
              <IconText type='url' size='sm' text='Москва, ул. 3-я Фрунзенская, 6, район Хамовники' value='https://yandex.com/maps/-/CHxyAGlE' theme='light' themeIcon='primary' icon={Location} className='items-start text-white mb-2.5 lg:!text-base/[19px] lg:mb-0' />
              <IconText type='url' size='sm' text='Москва, 2-ой Балтийский пер., 6' value='https://yandex.com/maps/-/CHxyA0ls' theme='light' themeIcon='primary' icon={Location} className='items-center text-white lg:!text-base/[19px]' />
            </div>
          </div>
          <div className='mb-[21px] md:row-span-5 md:row-start-2 md:col-start-1 lg:row-start-2 lg:row-span-1 lg:col-start-1 lg:mb-10'>
            <div className='flex items-center gap-2 md:flex-wrap md:max-w-20 md:gap-2.5 lg:max-w-full lg:pl-1.5 lg:mt-6'>
              <IconLink href={WHATSAPP} ariaLabel='Кнопка социальной сети' icon={Whatsapp} className='md:even:translate-y-[18px]' IconClassName='text-white w-[27px] h-[27px] md:w-[34px] md:h-[34px] lg:w-[36px] lg:h-[36px]' />
              <IconLink href={TELEGRAM} ariaLabel='Кнопка социальной сети' icon={Telegram} className='md:even:translate-y-[18px]' IconClassName='text-white w-[27px] h-[27px] md:w-[34px] md:h-[34px] lg:w-[36px] lg:h-[36px]' />
              <IconLink href={VK} ariaLabel='Кнопка социальной сети' icon={IconVK} className='md:even:translate-y-[18px]' IconClassName='text-white w-[27px] h-[27px] md:w-[34px] md:h-[34px] lg:w-[36px] lg:h-[36px]' />
              <IconLink href={YOUTUBE} ariaLabel='Кнопка социальной сети' icon={YouTube} className='md:even:translate-y-[18px]' IconClassName='text-white w-[27px] h-[27px] md:w-[34px] md:h-[34px] lg:w-[36px] lg:h-[36px]' />
              <IconLink href={INSTAGRAM} ariaLabel='Кнопка социальной сети' icon={Instagram} className='md:even:translate-y-[18px]' IconClassName='text-white w-[27px] h-[27px] md:w-[34px] md:h-[34px] lg:w-[36px] lg:h-[36px]' />
            </div>
          </div>
          <div className='mb-[35px] md:row-start-3 md:row-end-5 md:mb-5 lg:row-start-6 lg:row-span-1 lg:col-start-1 lg:col-span-full lg:mb-[35px]'>
            <div className='flex gap-1 flex-wrap lg:gap-2.5'>
              <Image unoptimized src='/assets/images/webp/logo-visa.webp' alt='visa' width={200} height={200} className='w-[50px] rounded-[5px] md:w-[73px] lg:w-[125px] lg:rounded-[10px]' />
              <Image unoptimized src='/assets/images/webp/logo-master.webp' alt='mastercard' width={200} height={200} className='w-[50px] rounded-[5px] md:w-[73px] lg:w-[125px] lg:rounded-[10px]' />
              <Image unoptimized src='/assets/images/webp/logo-mir.webp' alt='mir' width={200} height={200} className='w-[50px] rounded-[5px] md:w-[73px] lg:w-[125px] lg:rounded-[10px]' />
              <Image unoptimized src='/assets/images/webp/logo-paygine.webp' alt='paygine' width={200} height={200} className='w-[50px] rounded-[5px] md:w-[73px] lg:w-[125px] lg:rounded-[10px]' />
            </div>
          </div>
          <div className='flex flex-wrap gap-5 max-w-[380px] md:col-span-2 md:max-w-full lg:row-start-7 lg:col-start-1  lg:col-span-full'>
            <div className='text-white/50 text-xs/[14px]'>ООО «ГОМед»</div>
            <div className='text-white/50 text-xs/[14px]'>ИНН 7704471633</div>
            <div className='text-white/50 text-xs/[14px]'>ОГРН/ОГРНИП 1197746016599</div>
          </div>
        </div>
      </div>
    </footer>
  )
}
