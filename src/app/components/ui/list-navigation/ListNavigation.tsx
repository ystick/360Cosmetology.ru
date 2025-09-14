'use client'

import type { FC } from 'react'
import Link from 'next/link'
import { useSearchParams, usePathname } from 'next/navigation'
import { ArrowNavigation } from '@svg'

type ListNavigationProps = {
  currentPage: number
  pageCount: number
  categorySlug?: string
  pageName: string
}

const trimSlashes = (s: string) => s.replace(/^\/+|\/+$/g, '')
// совпадает и с "page2", и с "page=2"
const matchPageSeg = (s: string) => /^page(?:=)?\d+$/i.test(s)

export const ListNavigation: FC<ListNavigationProps> = ({ currentPage, pageCount, categorySlug: propCategorySlug = '', pageName }) => {
  const searchParams = useSearchParams()
  const pathname = usePathname()

  if (pageCount <= 1) return null

  const root = trimSlashes(pageName)
  const segments = (pathname || '').split('/').filter(Boolean)

  // убираем финальный сегмент /pageN или /page=N
  const last = segments[segments.length - 1]
  const segsNoPage = matchPageSeg(last) ? segments.slice(0, -1) : segments

  // инференс категории, если не пришла пропсом
  let inferredCategory = ''
  if (segsNoPage[0] === root && segsNoPage[1] && !matchPageSeg(segsNoPage[1])) {
    inferredCategory = segsNoPage[1]
  }
  const category = trimSlashes(propCategorySlug || inferredCategory)

  // базовый путь без хвостового /pageN
  const basePath = category ? `/${root}/${category}` : `/${root}`

  const makeHref = (targetPage: number) => {
    // переносим все query, кроме page
    const params = new URLSearchParams(Array.from(searchParams.entries()))
    params.delete('page')
    const qs = params.toString()

    if (targetPage === 1) return qs ? `${basePath}?${qs}` : basePath
    const pretty = `${basePath}/page${targetPage}`
    return qs ? `${pretty}?${qs}` : pretty
  }

  const hasPrev = currentPage > 1
  const hasNext = currentPage < pageCount

  const baseBtn = 'w-[49px] h-12 flex items-center justify-center rounded-[15px] transition-all ease-in-out duration-200'
  const enabled = 'bg-accent-secondary text-white hover:bg-accent-secondary-hover'
  const disabled = 'bg-transparent cursor-default border border-[#DDDDDD] text-[#DDDDDD]'

  return (
    <>
      {hasPrev ? (
        <Link href={makeHref(currentPage - 1)} className={`${baseBtn} ${enabled}`} aria-label='Previous page'>
          <ArrowNavigation className='rotate-180' />
        </Link>
      ) : (
        <span className={`${baseBtn} ${disabled}`} aria-disabled='true'>
          <ArrowNavigation className='rotate-180' />
        </span>
      )}

      {hasNext ? (
        <Link href={makeHref(currentPage + 1)} className={`${baseBtn} ${enabled}`} aria-label='Next page'>
          <ArrowNavigation />
        </Link>
      ) : (
        <span className={`${baseBtn} ${disabled}`} aria-disabled='true'>
          <ArrowNavigation />
        </span>
      )}
    </>
  )
}
