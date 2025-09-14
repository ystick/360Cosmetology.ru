'use client'

import type { FC } from 'react'
import { useState } from 'react'

type MapEmbedProps = {
  iframeClassName: string
}

export const MapEmbed: FC<MapEmbedProps> = ({ iframeClassName }) => {
  const [interactive, setInteractive] = useState(false)

  const enableMap = () => {
    setInteractive(true)
  }
  const disableMap = () => {
    setInteractive(false)
  }

  return (
    <div className='relative w-full mb-[70px] lg:mb-[94px]'>
      {!interactive && <div className='absolute inset-0 z-10 cursor-pointer' onClick={enableMap} title='Нажмите, чтобы активировать карту' />}

      <iframe
        src='https://yandex.com/map-widget/v1/?ll=37.583703%2C55.720665&mode=search&ol=geo&ouri=ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgg1NjY4ODY1MBJF0KDQvtGB0YHQuNGPLCDQnNC-0YHQutCy0LAsIDMt0Y8g0KTRgNGD0L3Qt9C10L3RgdC60LDRjyDRg9C70LjRhtCwLCA2IgoNHFMWQhXa4V5C&z=15.52'
        width='auto'
        height='auto'
        className={`
        ${iframeClassName}
          ${interactive ? '' : 'pointer-events-none'}
        `}
        onMouseLeave={disableMap}
      />
    </div>
  )
}
