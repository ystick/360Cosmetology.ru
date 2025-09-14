import type { FC } from 'react'

import { AboutCompanyWithVideo, CallToAction, CarouselOurClinic, CarouselStaffs, Container, Layout, LicensesCertificates, MapEmbed } from '@shared'
import { Breadcrumbs } from '@ui'
import { ABOUT_US_LINK, HOME_LINK } from '@constants/route.constants'
import { MainBlock } from './main-block/MainBlock'
import { Sotrudnik } from '@/graphql/client'

const itemsBreadcrumbs = [
  { label: HOME_LINK.value, href: HOME_LINK.href },
  { label: ABOUT_US_LINK.value, href: ABOUT_US_LINK.value }
]

type AboutUsPageProps = { sotrudniks: Sotrudnik[] }
export const AboutUsPage: FC<AboutUsPageProps> = ({ sotrudniks }) => {
  return (
    <Layout>
      <Container>
        <Breadcrumbs items={itemsBreadcrumbs} />
        <MainBlock />
      </Container>
      <CarouselOurClinic />
      <AboutCompanyWithVideo />
      {sotrudniks.length > 0 && (
        <>
          <Container>
            <div className='mb-5 lg:mb-[30px]'>
              <h2 className='font-medium text-[27px]/[32px] md:text-[32px]/[38px] lg:text-[52px]/[61px]'>
                Наши <span className='text-accent-secondary'> специалисты</span>
              </h2>
            </div>
          </Container>
          <div className='mb-20'>
            <CarouselStaffs sotrudniks={sotrudniks} />
          </div>
        </>
      )}
      <LicensesCertificates className='mb-12.5 lg:mb-25' />
      <MapEmbed iframeClassName=' w-full h-[361px] lg:h-[475px]' />
      <div className='mt-14 lg:mt-28.5'>
        <CallToAction />
      </div>
    </Layout>
  )
}
