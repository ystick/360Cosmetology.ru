import type { FC } from 'react'

import { Breadcrumbs, Heading, CustomButton } from '@ui'
import { Container, Layout } from '@shared'
import { CERTIFICATE_LINK, HOME_LINK } from '@constants/route.constants'
import Image from 'next/image'

const itemsBreadcrumbs = [
  { label: HOME_LINK.value, href: HOME_LINK.href },
  { label: CERTIFICATE_LINK.value, href: CERTIFICATE_LINK.href }
]

export const CertificatePage: FC = () => {
  return (
    <Layout>
      <Container>
        <Breadcrumbs items={itemsBreadcrumbs} />
        <Heading size={2} level={1} className='mb-7.5 lg:mb-12.5'>
          Сертификат
        </Heading>
        <div className='bg-white shadow-xl/3 rounded-[10px] p-[43px] mb-2.5 md:pt-10 md:pr-[55px] md:pb-[34px] md:mb-5 md:pl-10 lg:flex lg:items-center'>
          <div className='lg:flex-1'>
            <br />
            <br />
            <div className='mb-5'>
              <h1 className='text-tertiary text-center font-bold text-[30px]/[20px] md:text-left'>Сертификат 5000</h1>
            </div>
            <div className='mb-6.5 lg:mb-0'>
              <br />
              <p className='text-tertiary text-center text-[21px]/[20px] md:text-left'>
                Для получения сертификата на первый визит в клинику 360 Cosmetology перейдите в Telegram бот и выберете пункт "Сертификат 5000". Данная скидка не суммируется с другими акциями и распространяется только на новых пациентов клиники, на любые услуги. 
              </p>
              <p className='text-tertiary text-center text-[21px]/[20px] md:text-left'>
                Для оказания услуги со скидкой, необходимо предъявить сертификат на ресепшн клиники. 
              </p>
              <br /><br />
              <div className='md:block mb-[17px] lg:shrink-0 lg:mr-[50px]'>
                <Image unoptimized src='/assets/images/webp/certificate.webp' width={96} height={35} alt='certificate' loading='eager' priority className='w-[100%] mx-auto h-auto lg:w-[100%]' />
              </div>
              <br />
              <br />
              <CustomButton size='auto' type='link' href='https://t.me/Medicos360_Bot' theme='outline-dark' fontWeight='semiBold' className='w-full max-w-[204px] h-[33px] !rounded-[5px] text-sm'>
                Получить сертификат
              </CustomButton>
            </div>
          </div>
        </div>
      </Container>
    </Layout>
  )
}
