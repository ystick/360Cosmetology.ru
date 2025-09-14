import type { FC } from 'react'

import { Container } from '@shared'
import { projectCompany } from '@/app/assets/data/project-company'
import { Item } from './item/Item'

export const ProjectCompany: FC = () => {
  return (
    <Container className='mb-[50px] md:mb-10 lg:mb-[50px] lg:max-w-[1920px] lg:px-0'>
      <div className='flex'>
        {projectCompany.map((item, i) => (
          <Item item={item} key={i} />
        ))}
      </div>
    </Container>
  )
}
