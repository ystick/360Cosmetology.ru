'use client'

import type { FC } from 'react'
import type { KategoriyaUslugi } from '@/graphql/client'
import { useCallback } from 'react'
import { usePathname, useSearchParams, useRouter } from 'next/navigation'
import { SERVICES_PRICING_LINK } from '@constants/route.constants'

type FilterProps = { kategoriyaUslugis: KategoriyaUslugi[] }

const classBase = 'px-6 py-2.5 rounded-[10px] text-xs/[15px] shadow-md'
const trim = (s: string) => s.replace(/^\/+|\/+$/g, '')
const normalizeBase = (p: string) => `/${trim(p)}`
const normalizeCategory = (seg?: string) => (!seg || seg === 'l' ? '' : seg)
const isPageSeg = (s: string) => /^page(?:=)?\d+$/i.test(s)

export const Filter: FC<FilterProps> = ({ kategoriyaUslugis }) => {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()

  const basePath = normalizeBase(SERVICES_PRICING_LINK.href)
  const root = trim(SERVICES_PRICING_LINK.href)

  const segments = (pathname || '').split('/').filter(Boolean)
  const last = segments[segments.length - 1]
  const segsNoPage = isPageSeg(last) ? segments.slice(0, -1) : segments

  // активная категория только если путь начинается с /{root}
  const activeCategory = segsNoPage[0] === root ? normalizeCategory(segsNoPage[1]) : ''

  const buildHref = useCallback(
    (slug?: string) => {
      const normalized = normalizeCategory(slug)
      return normalized ? `${basePath}/${normalized}` : basePath
    },
    [basePath]
  )

  const onSelect = useCallback(
    (slug?: string) => {
      // убираем ?page из query при переключении категории/“Все”
      const params = new URLSearchParams(Array.from(searchParams.entries()))
      params.delete('page')
      const qs = params.toString()
      const href = buildHref(slug) + (qs ? `?${qs}` : '')
      router.push(href)
    },
    [router, buildHref, searchParams]
  )

  const isActive = (slug?: string) => normalizeCategory(slug) === activeCategory

  return (
    <div className='flex flex-wrap gap-[7px]'>
      <button type='button' onClick={() => onSelect(undefined)} className={`${classBase} ${isActive(undefined) ? 'bg-accent-secondary text-white' : 'bg-white text-tertiary'}`}>
        Все
      </button>

      {kategoriyaUslugis.map((item) => {
        const slug = (item as any).slug || (item as any).uid || item.name
        return (
          <button key={slug} type='button' onClick={() => onSelect(slug)} className={`${classBase} ${isActive(slug) ? 'bg-accent-secondary text-white' : 'bg-white text-tertiary'}`}>
            {item.name}
          </button>
        )
      })}
    </div>
  )
}
