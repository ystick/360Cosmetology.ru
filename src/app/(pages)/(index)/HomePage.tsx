import type { FC } from 'react'
import type { Akczii, Blog, Oborudovanie, Otzyvy, RezultatyRabotiesImagesQuery, Sotrudnik, Usluga } from '@/graphql/client'

import { Advantages, Bloglist, CallToAction, CarouselActionsBlockWrapper, CarouselCustomerReviews, CarouselEquipment, CarouselResultsWork, CarouselStaffsWrapper, ContactBlock, EthicalPrinciples, Layout, PartnersBlock, PopularServices, ProjectCompany, QuoteWithVideo } from '@shared'
import { MainBlock } from './main-block/MainBlock'

type HomePageProps = {
  oborudovanies: Oborudovanie[]
  sotrudniks: Sotrudnik[]
  otzyvies: Otzyvy[]
  blogs: Blog[]
  rezultatyRaboties: RezultatyRabotiesImagesQuery['rezultatyRaboties_connection']['nodes']
  uslugas: Usluga[]
  akcziis: Akczii[]
}

export const HomePage: FC<HomePageProps> = ({ oborudovanies, sotrudniks, otzyvies, blogs, rezultatyRaboties, uslugas, akcziis }) => {
  return (
    <Layout>
      <MainBlock />
      <ContactBlock />
      {akcziis.length > 0 && <CarouselActionsBlockWrapper akcziis={akcziis} />}
      <Advantages />
      <EthicalPrinciples />
      <ProjectCompany />
      <QuoteWithVideo />
      {uslugas.length > 0 && <PopularServices uslugas={uslugas} />}
      <CallToAction />
      {sotrudniks.length > 0 && <CarouselStaffsWrapper sotrudniks={sotrudniks} />}
      {rezultatyRaboties && rezultatyRaboties.length > 0 && <CarouselResultsWork rezultatyRaboties={rezultatyRaboties} />}
      {otzyvies.length > 0 && <CarouselCustomerReviews otzyvies={otzyvies} />}
      {oborudovanies.length > 0 && <CarouselEquipment oborudovanies={oborudovanies} />}
      <PartnersBlock />
      {blogs.length > 0 && (
        <div className='overflow-hidden'>
          <Bloglist blogs={blogs} />
        </div>
      )}
    </Layout>
  )
}
