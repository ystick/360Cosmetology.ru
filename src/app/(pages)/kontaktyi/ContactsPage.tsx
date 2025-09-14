import type { FC } from 'react'

import { Breadcrumbs, Heading, IconLink } from '@ui'
import { Container, Layout, MapEmbed } from '@shared'
import { CONTACTS_LINK, HOME_LINK } from '@constants/route.constants'
import { Instagram, Telegram, TelegramFill, VK as IconVK, Whatsapp, WhatsappFill, YouTube } from '@svg'
import { INSTAGRAM, TELEGRAM, VK, WHATSAPP, YOUTUBE } from '@constants/social-links.constants'

const itemsBreadcrumbs = [
  { label: HOME_LINK.value, href: HOME_LINK.href },
  { label: CONTACTS_LINK.value, href: CONTACTS_LINK.href }
]

export const ContactsPage: FC = () => {
  return (
    <Layout>
      <Container>
        <Breadcrumbs items={itemsBreadcrumbs} />
        <Heading size={2} level={1} className='mb-7.5 lg:mb-12.5'>
          Контакты <span className='text-accent-secondary'>центра</span>
        </Heading>
        <div className='bg-white shadow-xl/3 rounded-[10px] p-[43px] mb-2.5 md:pt-10 md:pr-[55px] md:pb-[34px] md:mb-5 md:pl-10 lg:flex lg:items-center'>
          <div className='lg:flex-1'>
            <div className='mb-5'>
              <h1 className='text-tertiary text-center font-bold text-[30px]/[20px] md:text-left'>Связаться с нами</h1>
            </div>
            <div className='mb-6.5 lg:mb-0'>
              <p className='text-tertiary text-center text-[21px]/[20px] md:text-left'>09:00 - 20:00 МСК</p>
            </div>
          </div>
          <div className='flex flex-wrap items-center gap-2.5 lg:max-w-[679px] lg:gap-[13px]'>
            <a href='tel:+74998771381' className='w-full h-[92px] font-bold text-[21px]/[20px] flex items-center justify-center rounded-[10px] text-white bg-accent-secondary hover:bg-accent-secondary-hover focus:bg-accent-secondary-focus active:bg-accent-secondary ease-in-out duration-200 transition-all md:w-[249px]'>
              +7 (499) 877-13-81
            </a>
            <a href={TELEGRAM} className='flex-1 h-[92px] flex items-center justify-center rounded-[10px] bg-accent-secondary hover:bg-accent-secondary-hover focus:bg-accent-secondary-focus active:bg-accent-secondary ease-in-out duration-200 transition-all lg:w-[202px]'>
              <TelegramFill />
            </a>
            <a href={WHATSAPP} className='flex-1 h-[92px] flex items-center justify-center rounded-[10px] bg-accent-secondary hover:bg-accent-secondary-hover focus:bg-accent-secondary-focus active:bg-accent-secondary ease-in-out duration-200 transition-all lg:w-[202px]'>
              <WhatsappFill />
            </a>
          </div>
        </div>
        <a href='mailto:info@360cosmetology.ru' className='w-full shadow-xl/3 font-bold text-[27px]/[20px] h-25 flex items-center justify-center rounded-[10px] text-tertiary bg-white hover:text-tertiary hover:bg-accent-secondary-hover focus:text-white focus:bg-accent-secondary-focus  active:bg-white ease-in-out duration-200 transition-all mb-2.5 md:h-[140px] md:px-10 md:text-left md:justify-start md:mb-5'>
          info@360cosmetology.ru
        </a>
        <div className='w-full bg-white shadow-xl/3  py-10 rounded-[10px] mb-7.5 md:p-10 md:mb-5 lg:mb-17'>
          <div className='text-tertiary text-center font-bold text-[27px]/[35px] mb-2.5 md:text-left md:text-[30px]/[38px] md:mb-5'>
            Москва, <br className='md:hidden' /> ул. 3-я Фрунзенская, 6,
            <br className='lg:hidden' /> район Хамовники
          </div>
          <div className='text-tertiary text-center text-[21px]/[20px] md:text-left'>м. Фрунзенская</div>
        </div>
      </Container>
      <div className='relative md:mb-12.5 lg:max-w-[1260px] lg:mx-auto lg:mb-[103px]'>
        <MapEmbed iframeClassName='w-full h-[410px]' />
        <div className='px-5 pointer-events-none md:absolute md:w-full md:h-full md:inset-0 md:px-[30px] md:py-[25px]'>
          <div className='bg-white pointer-events-auto  shadow-xl/3  p-5 rounded-[10px] w-full md:h-full md:max-w-[342px] md:flex md:flex-col md:justify-center'>
            <p className='text-xs/[25px] text-tertiary font-bold mb-5 md:text-base/[35px]'>
              ООО «ГОМед» <br /> ИНН 7704471633
              <br /> ОГРН/ОГРНИП 1197746016599
            </p>
            <p className='text-tertiary text-xs/[15px]  md:text-base/[20px]'>
              Москва, ул. 3-я Фрунзенская, 6, <br />
              район Хамовники / Москва, <br /> 2-ой Балтийский пер., 6
            </p>
          </div>
        </div>
      </div>
      <Container className='hidden md:block'>
        <div className='flex flex-wrap gap-6'>
          <div className='w-full lg:w-auto lg:flex-1'>
            <Heading size={2} level={1}>
              <span className='text-accent-secondary lg:block'>Подписывайтесь </span>на нас:
            </Heading>
          </div>
          <div>
            <div className='flex items-center gap-2 md:flex-wrap lg:justify-center lg:pl-1.5'>
              <IconLink href={WHATSAPP} icon={Whatsapp} className='w-[69px] h-[74px] flex items-center justify-center lg:w-[114px] lg:h-[122px] text-white bg-accent-secondary hover:bg-accent-secondary-hover focus:bg-accent-secondary-focus active:bg-accent-secondary ease-in-out duration-200 transition-all rounded-[10px]' IconClassName='text-white w-[27px] h-[27px] md:w-[34px] md:h-[34px] lg:w-[55px] lg:h-[55px]' />
              <IconLink href={TELEGRAM} icon={Telegram} className='w-[69px] h-[74px] flex items-center justify-center lg:w-[114px] lg:h-[122px] text-white bg-accent-secondary hover:bg-accent-secondary-hover focus:bg-accent-secondary-focus active:bg-accent-secondary ease-in-out duration-200 transition-all rounded-[10px]' IconClassName='text-white w-[27px] h-[27px] md:w-[34px] md:h-[34px] lg:w-[55px] lg:h-[55px]' />
              <IconLink href={VK} icon={IconVK} className='w-[69px] h-[74px] flex items-center justify-center lg:w-[114px] lg:h-[122px] text-white bg-accent-secondary hover:bg-accent-secondary-hover focus:bg-accent-secondary-focus active:bg-accent-secondary ease-in-out duration-200 transition-all rounded-[10px]' IconClassName='text-white w-[27px] h-[27px] md:w-[34px] md:h-[34px] lg:w-[55px] lg:h-[55px]' />
              <IconLink href={YOUTUBE} icon={YouTube} className='w-[69px] h-[74px] flex items-center justify-center lg:w-[114px] lg:h-[122px] text-white bg-accent-secondary hover:bg-accent-secondary-hover focus:bg-accent-secondary-focus active:bg-accent-secondary ease-in-out duration-200 transition-all rounded-[10px]' IconClassName='text-white w-[27px] h-[27px] md:w-[34px] md:h-[34px] lg:w-[55px] lg:h-[55px]' />
              <IconLink href={INSTAGRAM} icon={Instagram} className='w-[69px] h-[74px] flex items-center justify-center lg:w-[114px] lg:h-[122px] text-white bg-accent-secondary hover:bg-accent-secondary-hover focus:bg-accent-secondary-focus active:bg-accent-secondary ease-in-out duration-200 transition-all rounded-[10px]' IconClassName='text-white w-[27px] h-[27px] md:w-[34px] md:h-[34px] lg:w-[55px] lg:h-[55px]' />
            </div>
          </div>
        </div>
      </Container>
    </Layout>
  )
}
