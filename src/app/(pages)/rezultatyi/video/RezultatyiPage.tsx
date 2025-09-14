'use client'

import type { FC } from 'react'
import type { RezultatyRabotiesVideosQuery } from '@/graphql/client'

import { useState } from 'react'
import Image from 'next/image'

import { Breadcrumbs, CustomButton, EmptyMessage, VideoModal } from '@ui'
import { HOME_LINK, RESULTS_LINK_FOTO, RESULTS_LINK_VIDEO } from '@constants/route.constants'
import { Content } from '../content/Content'
import { getFileUrl } from '@utils'

type Props = {
  rezultatyRaboties: RezultatyRabotiesVideosQuery['rezultatyRaboties_connection'] | null
}

const itemsBreadcrumbs = [
  { label: HOME_LINK.value, href: HOME_LINK.href },
  { label: `${RESULTS_LINK_FOTO.value}: Видео`, href: RESULTS_LINK_FOTO.href }
]

export const RezultatyiPage: FC<Props> = ({ rezultatyRaboties }) => {
  const [openUrl, setOpenUrl] = useState<string | null>(null)

  const [data, setData] = useState(rezultatyRaboties)
  const [loadingAll, setLoadingAll] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const total = data?.pageInfo?.total ?? 0
  const loaded = data?.nodes.length ?? 0
  const showButton = loaded > 0 && loaded < total

  const handleShowAll = async () => {
    if (!showButton) return
    setLoadingAll(true)
    setError(null)
    try {
      const res = await fetch('/api/all-rezultaty-raboties-videos?all=1')
      if (!res.ok) throw new Error(`status ${res.status}`)
      const json = await res.json()
      setData(json as RezultatyRabotiesVideosQuery['rezultatyRaboties_connection'])
    } catch (e: any) {
      console.error(e)
      setError('Не удалось загрузить все результаты')
    } finally {
      setLoadingAll(false)
    }
  }

  const nodes = data?.nodes ?? []
  return (
    <Content currentPage={RESULTS_LINK_VIDEO.href} childrenBreadcrumbs={<Breadcrumbs items={itemsBreadcrumbs} />}>
      <div className='grid grid-cols-2 mb-5 gap-2.5 lg:mb-8 lg:grid-cols-4'>
        {nodes.length > 0 ? (
          // рендер карточки:
          nodes.map((result, i) =>
            result.contentVideo.map((block, j: number) => {
              if (block.__typename === 'ComponentResultsOfWorkSsylkaNaVideo') {
                const previewSrc = getFileUrl(block.preview.url)
                const videoLink = block.link // предполагается, что это ссылка на YouTube/VK
                return (
                  <div key={`${i}-${j}`} className='relative cursor-pointer' onClick={() => setOpenUrl(videoLink)}>
                    <Image unoptimized src={previewSrc} alt={`Результат работы ${i + 1}`} width={307} height={242} className='w-full object-cover h-auto rounded-[10px] overflow-hidden' loading='lazy' />
                    <div className='absolute inset-0 flex items-center justify-center pointer-events-none'>
                      <div className='bg-black/40 rounded-full p-3'>
                        {/* простая иконка плей */}
                        <svg width='24' height='24' viewBox='0 0 24 24' fill='none'>
                          <path d='M8 5v14l11-7L8 5z' fill='white' />
                        </svg>
                      </div>
                    </div>
                  </div>
                )
              }
              return null
            })
          )
        ) : (
          <EmptyMessage message='Нет результатов' />
        )}
      </div>
      {error && <div className='text-red-500 mb-2'>{error}</div>}

      {showButton && (
        <div className='flex justify-center'>
          <CustomButton theme='secondary' size='auto' className='max-w-[301px] h-[55px] text-lg font-semibold md:text-[21px] md:max-w-[373px] md:h-[67px]' onClick={handleShowAll} disabled={loadingAll}>
            {loadingAll ? 'Загрузка...' : `Смотреть все результаты`}
          </CustomButton>
        </div>
      )}
      {openUrl && <VideoModal videoUrl={openUrl} onClose={() => setOpenUrl(null)} />}
    </Content>
  )
}
