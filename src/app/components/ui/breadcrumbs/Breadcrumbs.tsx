import type { FC } from 'react'

import Link from 'next/link'
import { BreadcrumbsArrowIcon } from '@svg'

export interface BreadcrumbItem {
  label: string
  href: string
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[]
}

export const Breadcrumbs: FC<BreadcrumbsProps> = ({ items }) => {
  return (
    <nav aria-label='breadcrumb' itemScope itemType='https://schema.org/BreadcrumbList' className='mt-7.5 mb-3 md:mt-10 md:mb-9 lg:mt-12.5 lg:mb-7.5'>
      <ol className='flex flex-nowrap overflow-x-auto'>
        {items.map((item, index) => {
          const position = index + 1
          const isLast = index === items.length - 1
          return (
            <li key={item.href} itemProp='itemListElement' itemScope itemType='https://schema.org/ListItem' className='flex items-center shrink-0'>
              {isLast ? (
                <span className='text-secondary-light text-xs/[20px] font-semibold block px-[5px] py-[10px]'>
                  <span itemProp='name'>{item.label}</span>
                </span>
              ) : (
                <Link href={item.href} itemProp='item' className='text-tertiary text-xs/[20px] font-semibold block px-[5px] py-[10px]'>
                  <span itemProp='name'>{item.label}</span>
                </Link>
              )}
              <meta itemProp='position' content={position.toString()} />
              {!isLast && (
                <span className='w-5 h-5 flex items-center justify-center'>
                  <BreadcrumbsArrowIcon className='fill-[#7DA1C4] h-full' />
                </span>
              )}
            </li>
          )
        })}
      </ol>
    </nav>
  )
}
