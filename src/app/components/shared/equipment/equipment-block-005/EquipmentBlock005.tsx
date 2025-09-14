import type { FC } from 'react'

import { Container } from '@shared'

export const EquipmentBlock005: FC = () => {
  return (
    <Container className='mb-7.5 md:mb-12.5 lg:mb-15'>
      <div className='bg-white rounded-[10px] p-4 md:p-7.5 shadow-xl/7'>
        <h2 className='text-accent-secondary font-bold mb-10 text-2xl md:text-[30px]/[20px]'>Чистки</h2>
        <p className='text-base text-tertiary mb-4 md:text-lg/[21px] md:mb-[18px]'>В косметологии используют 3 вида чистки лица:</p>
        <ul className=''>
          <li className='text-base text-tertiary mb-4 md:text-lg/[21px] md:mb-[18px]'>— механическая</li>
          <li className='text-base text-tertiary mb-4 md:text-lg/[21px] md:mb-[18px]'>— ультразвуковая;</li>
          <li className='text-base text-tertiary mb-4 md:text-lg/[21px] md:mb-[18px]'>— аппаратная.</li>
        </ul>
        <p className='text-base text-tertiary mb-4 md:text-lg/[21px] md:mb-[18px]'>Чистка – отличный способ быстро удалить загрязнения из пор, устранить закрытые комедоны, а также сузить поры. Самая эффективная чистка – механическая, особенно для жирного типа кожи. При ней косметолог удаляет загрязнения вручную и с помощью стерильных медицинских инструментов. Ультразвуковой и аппаратный вид очищения подойдет коже с небольшими высыпаниями.</p>
      </div>
    </Container>
  )
}
