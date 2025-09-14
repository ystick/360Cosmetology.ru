'use client'

import type { FC } from 'react'
import type { SpeczializacziiSotrudnika } from '@/graphql/client'

import { useRouter, useSearchParams, usePathname } from 'next/navigation'
import { STAFF_LINK } from '@constants/route.constants'

type Props = {
  speczializacziiSotrudnikas: SpeczializacziiSotrudnika[]
}

const classBase = 'px-6 py-2.5 rounded-[10px] text-xs/[15px] shadow-md'
const normalizeStr = (s: string) => s.toLowerCase().trim()
const trimSlashes = (s: string) => s.replace(/^\/+|\/+$/g, '')
const isPageSeg = (s: string) => /^page(?:=)?\d+$/i.test(s)

export const Filter: FC<Props> = ({ speczializacziiSotrudnikas }) => {
  const router = useRouter()
  const searchParams = useSearchParams()
  const pathname = usePathname()

  // активные специализации из query
  const currentSpecializations = searchParams.get('specializations') || ''
  const activeSpecs = currentSpecializations ? currentSpecializations.split(',').map(normalizeStr).filter(Boolean) : []

  // базовый путь: /staff, без хвоста /pageN если он есть
  const segments = (pathname || '').split('/').filter(Boolean)
  const last = segments[segments.length - 1]
  const segsNoPage = isPageSeg(last) ? segments.slice(0, -1) : segments

  // если по какой-то причине путь не /staff*, принудительно используем константу
  const base = segsNoPage[0] === trimSlashes(STAFF_LINK.href) ? `/${segsNoPage.join('/')}` : `/${trimSlashes(STAFF_LINK.href)}`

  const buildUrl = (spec?: string) => {
    // переносим все query, кроме page; specializations — заменяем/удаляем
    const params = new URLSearchParams(Array.from(searchParams.entries()))
    params.delete('page')

    if (!spec) {
      params.delete('specializations')
    } else {
      params.set('specializations', spec)
    }

    const qs = params.toString()
    return qs ? `${base}?${qs}` : base
  }

  const onSelect = (spec?: string) => {
    router.push(buildUrl(spec))
  }

  const isActive = (spec?: string) => {
    if (!spec) return activeSpecs.length === 0
    return activeSpecs.includes(normalizeStr(spec))
  }

  return (
    <div className='flex flex-wrap gap-[7px]'>
      <button type='button' onClick={() => onSelect(undefined)} className={`${classBase} ${isActive(undefined) ? 'bg-accent-secondary text-white' : 'bg-white text-tertiary'}`}>
        Все
      </button>

      {speczializacziiSotrudnikas.map((item) => {
        const title = item.title
        return (
          <button key={title} type='button' onClick={() => onSelect(title)} className={`${classBase} ${isActive(title) ? 'bg-accent-secondary text-white' : 'bg-white text-tertiary'}`}>
            {title}
          </button>
        )
      })}
    </div>
  )
}
