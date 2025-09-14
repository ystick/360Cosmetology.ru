import type { Link as TypeLink } from '@constants/route.constants'
import type { FC } from 'react'

import Link from 'next/link'
import { useMenuContext } from '@contexts'

export const MenuItem: FC<TypeLink> = ({ href, value }) => {
  const { closeMenu } = useMenuContext()

  return (
    <Link href={href} onClick={closeMenu} className='block text-white text-lg/[21px] font-medium py-[9px] first:pt-0 last:pb-0'>
      {value}
    </Link>
  )
}
