import type { FC } from 'react'
import { Container } from '@shared'
import { CallForm, IconText, RequestCallForm } from '@ui'
import { Location, Phone } from '@svg'

export const ContactBlock: FC = () => {
  return (
    <div className='mb-[50px] md:mb-5 lg:mb-0 lg:bg-white'>
      <Container>
        <div className='bg-white rounded-[20px] p-5 md:pt-[21px] md:px-[30px] md:pb-[34px] lg:py-0'>
          <div className='md:grid md:grid-cols-[auto_162px] md:gap-[33px] lg:flex lg:justify-between lg:max-w-[1123px] lg:items-center lg:gap-5 lg:h-35.5'>
            <IconText type='url' size='auto' text='Москва, ул. 3-я Фрунзенская, 6, район Хамовники' value='https://yandex.com/maps/-/CHxyAGlE' theme='dark' themeIcon='primary' icon={Location} fontWeight='bold' className='items-start mb-4 text-sm/4 md:mb-0 lg:text-base/[19px]' />
            <IconText type='url' size='auto' text='Москва, 2-ой Балтийский пер., 6' value='https://yandex.com/maps/-/CHxyA0ls' theme='dark' themeIcon='primary' icon={Location} fontWeight='bold' className='mb-[30px] items-center text-sm/4 md:mb-0 lg:text-base/[19px]' />
            <div className='flex items-center justify-between flex-wrap gap-3 max-w-[335px] md:col-start-2 md:row-start-1 md:row-end-3 lg:max-w-full lg:shrink-0 lg:flex-nowrap lg:gap-5 lg:min-w-[337px]'>
              <IconText type='tel' text='8 (499) 681-72-38' value='+74996817238' theme='dark' icon={Phone} fontWeight='bold' size='auto' className='items-center text-base lg:shrink-0' />
              <CallForm contentForm={RequestCallForm} size='auto' theme='outline-dark' fontWeight='semiBold' className='max-w-40 h-7 !rounded-[5px] text-sm md:h-[35px]'>
                Перезвоните мне
              </CallForm>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}
