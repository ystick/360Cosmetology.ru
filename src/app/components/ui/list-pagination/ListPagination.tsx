'use client'

import type { FC } from 'react'
import { useMemo } from 'react'
import Link from 'next/link'
import { useSearchParams, usePathname } from 'next/navigation'

type ListPaginationProps = {
  currentPage: number
  pageCount: number
  categorySlug?: string
  pageName: string
  className?: string
}

const trimSlashes = (s: string) => s.replace(/^\/+|\/+$/g, '')

// page2 или page=2
const matchPageSeg = (s: string) => s.match(/^page(?:=)?(\d+)$/i)

export const ListPagination: FC<ListPaginationProps> = ({ currentPage, pageCount, categorySlug: propCategorySlug = '', pageName, className = '' }) => {
  const searchParams = useSearchParams()
  const pathname = usePathname()

  if (pageCount <= 1) return null

  const segments = (pathname || '').split('/').filter(Boolean)
  const root = trimSlashes(pageName)

  // убираем хвост /page2 или /page=2
  const last = segments[segments.length - 1]
  const segsNoPage = matchPageSeg(last) ? segments.slice(0, -1) : segments

  // инференс категории (если не пришла пропсом)
  let inferredCategory = ''
  if (segsNoPage[0] === root && segsNoPage[1] && !matchPageSeg(segsNoPage[1])) {
    inferredCategory = segsNoPage[1]
  }

  const category = trimSlashes(propCategorySlug || inferredCategory)
  const basePath = category ? `/${root}/${category}` : `/${root}`

  const makeHref = (page: number) => {
    // копируем все query, КРОМЕ page
    const params = new URLSearchParams(Array.from(searchParams.entries()))
    params.delete('page')
    const qs = params.toString()

    if (page === 1) return qs ? `${basePath}?${qs}` : basePath
    const pretty = `${basePath}/page${page}`
    return qs ? `${pretty}?${qs}` : pretty
  }

  const buttons = useMemo(() => Array.from({ length: pageCount }, (_, i) => i + 1), [pageCount])

  return (
    <div className='flex flex-wrap gap-2'>
      {buttons.map((num) => {
        const isActive = num === currentPage
        const baseClasses = 'w-[49px] h-12 border rounded-[15px] flex items-center justify-center text-lg/[18px] font-bold transition-all ease-in-out duration-200'
        const activeClasses = isActive ? 'bg-accent-secondary text-white border-accent-secondary' : 'border-accent-secondary hover:text-white hover:bg-accent-secondary-hover focus:bg-accent-secondary-focus active:bg-accent-secondary'
        return (
          <Link key={num} href={makeHref(num)} className={`${baseClasses} ${activeClasses} ${className}`}>
            {num}
          </Link>
        )
      })}
    </div>
  )
}
