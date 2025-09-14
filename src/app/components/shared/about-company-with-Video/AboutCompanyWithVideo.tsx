import type { FC } from 'react'

import { Quote } from '@svg'
import { Container, LazyVideo } from '@shared'

export const AboutCompanyWithVideo: FC = () => {
  return (
    <Container className='mb-[50px] lg:max-w-[1440px] lg:!px-0'>
      <div className='bg-secondary rounded-[10px] px-2.5 py-3 flex justify-between gap-2 md:p-0 md:bg-transparent lg:gap-0'>
        <div className='relative py-2 pl-[5px] md:bg-secondary md:w-full md:order-last md:rounded-[10px] md:px-[30px] md:py-8 lg:rounded-none lg:pt-[50px] lg:pb-[72px] lg:px-[103px]'>
          <div className='max-w-[250px] md:max-w-[332px] lg:max-w-[694px]'>
            <div className='mb-2.5 md:mb-[19px] lg:flex lg:items-center lg:gap-[26px] lg:mb-[34px]'>
              <div className='lg:absolute lg:-left-[63px] lg:top-37'>
                <Quote className='h-4 w-11.5 md:w-[56px] md:h-[19px] lg:w-[127px] lg:h-11 lg:shrink-0' />
              </div>
              <div className='hidden lg:block w-full h-[3px] bg-accent-secondary rounded-[1px]'></div>
            </div>

            <div className='mb-2.5 lg:mb-8.5'>
              <h2 className='text-white text-xs/[14px] font-bold md:text-base/[19px]'>
                <span className='lg:text-[52px]/[61px] lg:block lg:mb-5'> Наша команда </span>
                <span className='lg:hidden'> — </span> <span className='lg:first-letter:uppercase'>это профессионалы с&nbsp;10-летним опытом</span>
              </h2>
            </div>
            <div className='mb-5 lg:mb-10 lg:max-w-[675px]'>
              <p className='text-white text-xs lg:text-base/[19px]'>
                Клиника 360|Cosmetology — пространство эстетической медицины нового поколения. Синергия аппаратных, инъекционных и уходовых методик медицинской косметологии для продления вашей естественной красоты, молодости и здоровья. Мы выявляем причины возникновения эстетических проблем и решаем их благодаря современным технологиям медицинской косметологии. В нашей клинике представлен полный спектр услуг лечения, восстановления и омоложения кожи лица и тела. <br className='hidden lg:block' /> Окунитесь в мир заботы и профессионализма 360|Cosmetology!
              </p>
            </div>
            <div className='mb-2.5'>
              <p className='text-white font-bold text-xs/[14px] lg:text-[21px]/[25px]'>Губарева Светлана Васильевна</p>
            </div>
            <div className='md:max-w-[250px] lg:mb-[41px] lg:max-w-[280px]'>
              <p className='text-white/50 text-xs md:font-semibold lg:text-sm/[16px]'>
                Основатель, руководитель и идейный <br className='md:hidden' /> вдохновитель 360|Cosmetology <span className='inline-block'>и ION|Clinic</span>
              </p>
            </div>
            <div>
              <div className='hidden lg:block w-full h-[3px] bg-accent-secondary rounded-[1px]'></div>
            </div>
          </div>
        </div>
        <div className='min-w-[136px] w-[30%] rounded-[10px] overflow-hidden md:min-w-[270px] md:w-[38%] lg:min-w-[540px] lg:w-[37.5%] lg:rounded-none'>
          <LazyVideo src='/assets/videos/main.mp4' poster='/assets/videos/main.webp' />
        </div>
      </div>
    </Container>
  )
}
