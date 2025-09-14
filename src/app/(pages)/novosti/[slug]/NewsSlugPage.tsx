import type { FC } from 'react'
import type { Novosti, UploadFile } from '@/graphql/client'

import { CallToAction, Container, Layout, NewsBlock003, NewsBlock004, NewsBlock005 } from '@shared'
import { Breadcrumbs, Heading } from '@ui'
import { HOME_LINK, NEWS_LINK } from '@constants/route.constants'

import '@css/news.css'
import { getFileUrl } from '@/app/utils'
import Image from 'next/image'

type NewsSlugPageProps = { novost: Novosti }

export const NewsSlugPage: FC<NewsSlugPageProps> = ({ novost }) => {
  const itemsBreadcrumbs = [
    { label: HOME_LINK.value, href: HOME_LINK.href },
    { label: NEWS_LINK.value, href: NEWS_LINK.href },
    { label: novost.title, href: `${NEWS_LINK.href}/${novost.slug}` }
  ]

  return (
    <Layout>
      <Container>
        <Breadcrumbs items={itemsBreadcrumbs} />
      </Container>
      <div className='news_body'>
        <Container>
          <div className='mb-5 rounded-[10px] overflow-hidden h-[350px] md:mb-10 md:h-[450px] lg:mb-16'>
            <Image unoptimized src={getFileUrl(novost.mainImage.url)} alt={novost.mainImage.alternativeText ?? novost.title} width={1920} height={600} className='w-auto h-full object-cover' />
          </div>
          <div className='mb-[17px] md:mt-[30px] md:mb-5 lg:mb-10 lg:mt-12.5'>
            <Heading level={1} size={4}>
              {novost.title}
            </Heading>
          </div>
        </Container>
        {novost.body?.map((block, index) => {
          if ('contentJsonText' in block && block.contentJsonText) {
            return (
              <Container key={index} className='mb-7.5 md:mb-12.5 lg:mb-15'>
                <div dangerouslySetInnerHTML={{ __html: block.contentJsonText as string }} />{' '}
              </Container>
            )
          }
          if ('contentJson' in block && block.contentJson) {
            return <NewsBlock003 key={index} content={block.contentJson as string} />
          }
          if ('contentMedia' in block && block.contentMedia) {
            return <NewsBlock004 key={index} content={block.contentMedia as Pick<UploadFile, 'url' | 'alternativeText'>} />
          }
          if ('contentJsonInWhiteBlock' in block && block.contentJsonInWhiteBlock) {
            return <NewsBlock005 key={index} content={block.contentJsonInWhiteBlock as string} />
          }
          return null
        })}
      </div>
      <CallToAction />
    </Layout>
  )
}
