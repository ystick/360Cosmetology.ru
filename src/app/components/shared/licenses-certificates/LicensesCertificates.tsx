import type { FC } from 'react'
import { Container } from '@shared'
import { Heading, ZoomableImage } from '@ui'
import { licensesCertificates } from '@/app/assets/data/licenses-certificates'

type LicensesCertificatesProps = {
  className?: string
}

export const LicensesCertificates: FC<LicensesCertificatesProps> = ({ className }) => {
  return (
    <Container className={className}>
      <Heading size={2} level={2} weight='medium' className='text-[#282E36] mb-5 md:mb-7.5 lg:mb-12.5'>
        Лицензии и сертификаты
      </Heading>
      <div className='-mx-5 md:-mx[30px] lg:mx-0'>
        <div className='flex flex-nowrap overflow-x-auto scrollbar-hidden px-5 gap-2.5 md:gap-4 md:px-[30px] lg:gap-5 lg:overflow-hidden lg:p-0'>
          {licensesCertificates.map((item, i) => (
            <ZoomableImage key={i} src={item.image} width={200} height={400} alt={item.alt} className='rounded-[10px] w-[50%] shrink-0 md:w-[33.333%] lg:w-[calc(25%_-_15px)]' />
          ))}
        </div>
      </div>
    </Container>
  )
}
