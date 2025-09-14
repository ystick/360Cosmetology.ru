import type { FC } from 'react'
import type { Sotrudnik } from '@/graphql/client'

import { CallToAction, CarouselStaffs, Container, Layout, StaffBlock001 } from '@shared'
import { Breadcrumbs } from '@ui'
import { STAFF_LINK, HOME_LINK } from '@constants/route.constants'

import '@css/staff.css'

type StaffSlugPagePrps = {
  sotrudnik: Sotrudnik
  similarSotrudniks: Sotrudnik[]
}

export const StaffSlugPage: FC<StaffSlugPagePrps> = ({ sotrudnik, similarSotrudniks }) => {
  const itemsBreadcrumbs = [
    { label: HOME_LINK.value, href: HOME_LINK.href },
    { label: STAFF_LINK.value, href: STAFF_LINK.href },
    { label: `${sotrudnik.lastName} ${sotrudnik.firstName} ${sotrudnik.patronymic}`, href: `${STAFF_LINK.href}/${sotrudnik.slug}` }
  ]
  return (
    <Layout>
      <Container>
        <Breadcrumbs items={itemsBreadcrumbs} />
      </Container>
      <div className='staff_body'>
        <StaffBlock001 sotrudnik={sotrudnik} />
      </div>
      {similarSotrudniks.length > 0 && (
        <>
          <Container>
            <div className='mb-5 lg:mb-[30px]'>
              <h2 className='font-medium text-[27px]/[32px] md:text-[32px]/[38px] lg:text-[52px]/[61px]'>
                Похожие <span className='text-accent-secondary'> специалисты</span>
              </h2>
            </div>
          </Container>
          <div className='mb-20'>
            <CarouselStaffs sotrudniks={similarSotrudniks} showButton={false} />
          </div>
        </>
      )}
      <CallToAction />
    </Layout>
  )
}
