import type { FC } from 'react'
import type { Link as TypeLink } from '@constants/route.constants'

import Link from 'next/link'

export const MenuItem: FC<TypeLink> = ({ href, value }) => {
  return (
    <li>
      <Link href={href} className='text-white font-medium py-3 text-xs/[14px] block md:text-base/[19px]'>
        {value}
      </Link>
    </li>
  )
}
