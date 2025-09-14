import type { FC } from 'react'

import { Breadcrumbs, Heading } from '@ui'
import { Container, Layout } from '@shared'
import { HOME_LINK, KONTROLIRUYUSHHIE_ORGANY_LINK } from '@constants/route.constants'


import '@css/kontroliruyushhie-organyi.css'

const itemsBreadcrumbs = [
  { label: HOME_LINK.value, href: HOME_LINK.href },
  { label: KONTROLIRUYUSHHIE_ORGANY_LINK.value, href: KONTROLIRUYUSHHIE_ORGANY_LINK.href }
]

export const KontroliruyushhieOrganyiPage: FC = () => {
  return (
    <Layout>
      <Container>
        <Breadcrumbs items={itemsBreadcrumbs} />
        <Heading size={2} level={1} className='mb-5 md:mb-12 lg:mb-10'>
          <span className='text-accent-secondary'>Контролирующие </span>органы
        </Heading>
        <div className='kontroliruyushhie-organyi_body'>
          <p>МИНИСТЕРСТВО ЗДРАВООХРАНЕНИЯ РФ</p>
          <p>Телефон Справочной службы Министерства: (495) 628-44-53, (495) 627-29-44</p>
          <p>Многоканальный телефон Министерства: (495) 627-24-00</p>
          <p>Телефон для обращения граждан: (495) 627-29-93</p>
          <p>
            E-mail:{' '}
            <a href='mailto:info@rosminzdrav.ru' rel='noopener noreferrer'>
              info@rosminzdrav.ru
            </a>
          </p>
          <p>Адрес: 127994, ГСП-4, г. Москва, Рахмановский пер, д. 3.</p>
          <p>—</p>
          <p>ФЕДЕРАЛЬНАЯ СЛУЖБА ПО НАДЗОРУ В СФЕРЕ ЗДРАВООХРАНЕНИЯ</p>
          <p>Справочная Росздравнадзора: +7 (495) 698-45-38; +7 (499) 578-02-30</p>
          <p>Справочные телефоны Федеральной службы по надзору в сфере здравоохранения: +7 (495) 698-45-38, +7 (499) 578-02-24, +7 (499) 578-02-26</p>
          <p>
            E-mail:{' '}
            <a href='mailto:info@roszdravnadzor.ru' rel='noopener noreferrer'>
              info@roszdravnadzor.ru
            </a>
          </p>
          <p>Адрес: 109074, Москва, Славянская площадь, д.4, стр.1.</p>
          <p>ДЕПАРТАМЕНТ ЗДРАВООХРАНЕНИЯ Г. МОСКВЫ</p>
          <p>Телефон: +7 (499) 251-83-00</p>
          <p>Горячая линия Дирекции по координации деятельности медицинских организаций</p>
          <p>Департамента здравоохранения города Москвы: +7 (495) 318-47-71</p>
          <p>Горячая линия Северного адм. округа (САО): +7 (495) 946-11-00, +7 (495) 946-11-09</p>
          <p>Адрес: 127006, г. Москва, Оружейный пер., д. 43</p>
          <p>—</p>
          <p>УПРАВЛЕНИЕ РОСЗДРАВНАДЗОРА ПО Г. МОСКВЕ И МОСКОВСКОЙ ОБЛАСТИ</p>
          <p>Горячая линия: +7 (495) 611-47-74</p>
          <p>Справочный телефон: +7 (495) 611-47- 74, факс +7 (495) 611-53-44</p>
          <p>Адрес: 127206, г. Москва, Вучетича ул. д. 12А.</p>
          <p>
            E-mail:{' '}
            <a href='mailto:office@reg77.roszdravnadzor.ru' rel='noopener noreferrer'>
              office@reg77.roszdravnadzor.ru
            </a>
          </p>
          <p>—</p>
          <p>УПРАВЛЕНИЕ РОСПОТРЕБНАДЗОРА ПО Г. МОСКВЕ</p>
          <p>Телефон: +7 (495) 687-40-35</p>
          <p>Адрес: 129626, г. Москва, Графский пер., 4/9</p>
          <p>&nbsp;</p>
          <p>—</p>
          <p>УПРАВЛЕНИЕ ЛИЦЕНЗИРОВАНИЯ И АККРЕДИТАЦИИ ДЕПАРТАМЕНТА ЗДРАВООХРАНЕНИЯ Г. МОСКВЫ</p>
          <p>Телефон: +7 (495) 652-82-47, +7 (495) 652-82-46</p>
          <p>Адрес: 107023, г. Москва, пл. Журавлева, д. 12</p>
          <p>УПРАВА РАЙОНА «АЭРОПОРТ» Г. МОСКВЫ</p>
          <p>Телефон: +7 (499) 151-36-56</p>
          <p>Адрес: 125315, г. Москва, ул. Усиевича, дом 23/5.</p>{' '}
        </div>
      </Container>
    </Layout>
  )
}
