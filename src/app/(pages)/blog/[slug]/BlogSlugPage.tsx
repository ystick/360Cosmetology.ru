import type { FC } from 'react'
import type { Blog, UploadFile } from '@/graphql/client'

import { Author, Block001, Block002, Block003, Block004, Block005, CallToAction, Container, Layout } from '@shared'
import { Breadcrumbs } from '@ui'
import { BLOG_LINK, HOME_LINK } from '@constants/route.constants'

import '@css/blog.css'
import { formatDateToRu } from '@utils'

type BlogSlugPageProps = { blog: Blog }

export const BlogSlugPage: FC<BlogSlugPageProps> = ({ blog }) => {
  const itemsBreadcrumbs = [
    { label: HOME_LINK.value, href: HOME_LINK.href },
    { label: BLOG_LINK.value, href: BLOG_LINK.href },
    { label: blog.title, href: `${BLOG_LINK.href}/${blog.slug}` }
  ]

  return (
    <Layout>
      <Container>
        <Breadcrumbs items={itemsBreadcrumbs} />
      </Container>
      <div className='blog_body'>
        <Block001 blog={blog} />
        {blog.tags.length > 0 && <Block002 blog={blog} />}

        {blog.body?.map((block, index) => {
          if ('contentJsonText' in block && block.contentJsonText) {
            return (
              <Container key={index} className='blog_block_001 mb-7.5 md:mb-12.5 lg:mb-15'>
                <div dangerouslySetInnerHTML={{ __html: block.contentJsonText as string }} />
              </Container>
            )
          }
          if ('contentJson' in block && block.contentJson) {
            return <Block003 key={index} content={block.contentJson as string} />
          }
          if ('contentMedia' in block && block.contentMedia) {
            return <Block004 key={index} content={block.contentMedia as Pick<UploadFile, 'url' | 'alternativeText'>} />
          }
          if ('contentJsonInWhiteBlock' in block && block.contentJsonInWhiteBlock) {
            return <Block005 key={index} content={block.contentJsonInWhiteBlock as string} />
          }
          return null
        })}
      </div>
      <Container className='mb-7.5 md:mb-15.5 lg:mb-12.5'>
        <div className='text-tertiary/50 text-sm/4 px-[23px] md:px-[33px] md:text-lg/[21px] lg:px-10'> {formatDateToRu(blog.datePubpublished)}</div>{' '}
      </Container>
      {blog.author.sotrudnik ? <Author author={blog.author} /> : null}
      <CallToAction />
    </Layout>
  )
}
