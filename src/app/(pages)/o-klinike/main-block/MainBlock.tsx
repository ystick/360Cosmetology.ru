import type { FC } from 'react'

import { Heading } from '@ui'
import { LazyVideo } from '@shared'

export const MainBlock: FC = () => {
  return (
    <div className='mb-7.5 md:mb-12.5 lg:flex lg:items-center lg:gap-5 lg:mb-26'>
      <div className='lg:flex-1'>
        <Heading size={2} level={1} className='!text-accent-secondary mb-5 lg:mb-7.5'>
          О нас
        </Heading>
        <div className='mb-7.5 lg:max-w-[520px]'>
          <p className='text-foreground text-xs/[14px] md:text-base/4 lg:text-lg/[18px] lg:font-semibold'>
            Клиника 360|Cosmetology — пространство эстетической медицины нового поколения. Синергия аппаратных, инъекционных и уходовых методик медицинской косметологии для продления вашей естественной красоты, молодости и здоровья.Мы выявляем причины возникновения эстетических проблем и решаем их благодаря современным технологиям медицинской косметологии. В нашей клинике представлен полный спектр услуг лечения, восстановления и омоложения кожи лица и тела. <br /> <br />
            Окунитесь в мир заботы и профессионализма <br /> 360|Cosmetology!
          </p>
        </div>
      </div>
      <div className='h-[211px] rounded-[10px] overflow-hidden md:h-[278px] lg:w-full lg:h-[360px] lg:max-w-[669px]'>
        <LazyVideo src='/assets/videos/main.mp4' poster='/assets/videos/main.webp' />
      </div>
    </div>
  )
}
