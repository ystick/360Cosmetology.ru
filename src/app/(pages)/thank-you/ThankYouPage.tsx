import type { FC } from 'react'

import Link from 'next/link'

import { Container, Layout } from '@shared'
import { HOME_LINK } from '@constants/route.constants'
import { Check } from '@svg'

export const ThankYouPage: FC = () => {
  return (
    <Layout>
      <Container className='flex flex-col h-full py-20 justify-center md:py-30 lg:py-40'>
        <div className='mb-5'>
          <div className='w-30 h-30 bg-accent-default rounded-full flex items-center justify-center'>
            <Check size={60} className='text-white' />
          </div>
        </div>
        <div className='mb-4'>
          <h1 className='text-secondary-light text-3xl font-bold md:text-4xl lg:text-6xl'>Спасибо за вашу заявку!</h1>
        </div>
        <div className='mb-8'>
          <p className='text-base'>
            Мы получили вашу информацию и скоро с вами свяжемся. <br /> Если у вас возникнут срочные вопросы, вы можете позвонить нам по телефону или написать на почту.
          </p>
        </div>
        <div>
          <Link href={HOME_LINK.href} className='underline text-lg font-medium'>
            Вернуться на главную
          </Link>
        </div>
      </Container>
    </Layout>
  )
}
