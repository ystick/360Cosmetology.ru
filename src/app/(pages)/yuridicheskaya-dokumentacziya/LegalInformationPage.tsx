import type { FC } from 'react'

import { Breadcrumbs, Heading } from '@ui'
import { Container, Layout, LicensesCertificates } from '@shared'
import { HOME_LINK, LEGAL_INFORMATION_LINK } from '@constants/route.constants'
import { DownloadIcon } from '@svg'
import { documents } from '@/app/assets/data/documents'

const itemsBreadcrumbs = [
  { label: HOME_LINK.value, href: HOME_LINK.href },
  { label: LEGAL_INFORMATION_LINK.value, href: LEGAL_INFORMATION_LINK.href }
]

export const LegalInformationPage: FC = () => {
  return (
    <Layout>
      <Container>
        <Breadcrumbs items={itemsBreadcrumbs} />
        <Heading size={2} level={1} className='mb-5 md:mb-12 lg:mb-10'>
          <span className='text-accent-secondary'>Юридическая </span>информация
        </Heading>
        <div className='mb-12.5 lg:mb-25'>
          <p className='text-xs/[25px] text-tertiary font-bold mb-5 md:text-base/[35px]'>
            ООО «ГОМед» <br /> ИНН 7704471633
            <br /> ОГРН/ОГРНИП 1197746016599
          </p>
          <p className='text-tertiary text-xs/[15px]  md:text-base/[20px]'>
            Москва, ул. 3-я Фрунзенская, 6, район Хамовники <br className='lg:hidden' /> / Москва,2-ой Балтийский пер., 6
          </p>
        </div>
        <div className='mb-12.5 md:mb-25'>
          <div className='mb-7.5 md:mb-12.5'>
            <h2 className='text-tertiary font-bold text-[30px]/[20px] '>Документация</h2>
          </div>
          <div className='flex flex-col gap-2.5 md:gap-5'>
            {documents.map((document, i) => (
              <a href={document.link} key={i} target='_blank' className='bg-white flex items-center shadow-xl/3 rounded-[10px] py-[35px] px-10 hover:bg-gray-50 duration-200 ease-in-out transition'>
                <span className='text-tertiary text-[21px]/[20px] flex-1'>{document.title}</span>
                <span>
                  <DownloadIcon className='w-[28px] h-[30px]' />
                </span>
              </a>
            ))}
          </div>
        </div>
      </Container>
      <LicensesCertificates className='mb-5 md:mb-7.5 lg:mb-12.5' />
      <Container>
        <div className='md:max-w-[618px] lg:max-w-full'>
          <p className='text-tertiary text-xs/[14px] text-balance lg:text-lg/[21px]'>*При необходимости получения сведений о присвоении лицензии указанного номера ЕРУЛ лицензиат может обратиться в Росздравнадзор с заявлением о предоставлении сведений из реестра лицензий посредством использования федеральной государственной информационной системы «Единый портал государственных и муниципальных услуг (функций)» или в Департамент здравоохранения города Москвы почтовым отправлением с уведомлением о вручении на адрес: 127006, г. Москва, Оружейный пер., д. 43, стр. 1 или на адрес электронной почты Департамента zdrav@mos.ru.</p>
        </div>
      </Container>
    </Layout>
  )
}
