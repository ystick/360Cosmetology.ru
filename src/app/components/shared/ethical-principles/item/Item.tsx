import type { FC } from 'react'
import type { IEthicalPrinciple } from '@/app/assets/data/ethical-principles'

import { LazyVideo } from '@shared'

export const Item: FC<{ item: IEthicalPrinciple; index: number }> = ({ item, index }) => {
  return (
    <div className={`flex overflow-hidden rounded-[10px] bg-primary lg:shadow-[15px_4px_30px_0px_rgba(0,_0,_0,_0.35)] relative lg:rounded-none`} style={{ zIndex: -index }}>
      <div className='w-[56%] py-[15px] px-[12px] md:w-[263px] md:pt-[15px] md:px-5 md:pb-[22px] lg:min-w-[540px] lg:w-[37.5%] lg:pt-9 lg:pb-[50px] lg:px-0'>
        <div className=' flex flex-col h-full lg:max-w-[278px] lg:ml-auto lg:mr-[142px]'>
          <div className='text-white text-xs leading-[6px] font-medium mb-5 md:text-base/[19px] md:mb-[17px] lg:text-[46px]/[54px] lg:mb-[59px]'>0{++index}</div>
          <div className='flex-1'>
            <h2 className='text-white font-semibold text-base/[19px] md:text-[23px]/[29px] lg:text-[32px]/[29px]'>{item.title}</h2>
          </div>
          <div>
            <p className='text-white text-xs font-medium md:text-xs/[14px] lg:text-sm/4' dangerouslySetInnerHTML={{ __html: item.description }} />
          </div>
        </div>
      </div>
      <div className='flex-1 min-h-[119px] md:aspect-[223/80] md:min-h-[160px] lg:aspect-auto lg:max-h-[296px]'>
        <LazyVideo src={item.videoPath} poster={item.videoPreview} />
      </div>
    </div>
  )
}
