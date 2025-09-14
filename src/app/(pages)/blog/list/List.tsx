import type { FC } from 'react'
import type { Blog } from '@/graphql/client'

import { Item } from './item/Item'

type ListProps = {
  blogs: readonly Blog[]
}
export const List: FC<ListProps> = ({ blogs }) => {
  return (
    <div className='grid gap-[5px] grid-cols-2 grid-flow-dense md:gap-2.5 lg:gap-5 lg:grid-cols-4'>
      {blogs.map((blog, i) => (
        <Item key={blog.documentId} index={i} blog={blog} />
      ))}
    </div>
  )
}
