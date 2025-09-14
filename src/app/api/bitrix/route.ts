import { NextResponse } from 'next/server'

const BITRIX_WEBHOOK_URL = process.env.BITRIX_WEBHOOK_URL!

export async function POST(req: Request) {
  try {
    if (!BITRIX_WEBHOOK_URL) return NextResponse.json({ message: 'Missing BITRIX_WEBHOOK_URL' }, { status: 500 })

    const data = await req.json()

    const { phone, name, subject = '', staff, usluga, abonement, utm, page } = data

    const title = `Новый лид с сайта 360cosmetology.ru | ${subject}`

    const params = new URLSearchParams()

    params.append('fields[TITLE]', title)
    params.append('fields[NAME]', name)
    params.append('fields[STATUS_ID]', 'NEW')
    params.append('fields[SOURCE_ID]', 'UC_NDKZ0A')

    if (phone) {
      params.append('fields[PHONE][0][VALUE]', phone)
      params.append('fields[PHONE][0][VALUE_TYPE]', 'WORK')
    }

    // Дополнительные поля
    if (staff) params.append('fields[UF_CRM_1756399037622]', staff)
    if (abonement) params.append('fields[UF_CRM_1756399050942]', abonement)
    if (usluga) params.append('fields[UF_CRM_1756399060959]', usluga)
    if (page) params.append('fields[UF_CRM_1756398948292]', `Страница: ${page}`)

    // Стандартные UTM-поля лида
    if (utm?.utm_source) params.append('fields[UTM_SOURCE]', utm.utm_source)
    if (utm?.utm_medium) params.append('fields[UTM_MEDIUM]', utm.utm_medium)
    if (utm?.utm_campaign) params.append('fields[UTM_CAMPAIGN]', utm.utm_campaign)
    if (utm?.utm_content) params.append('fields[UTM_CONTENT]', utm.utm_content)
    if (utm?.utm_term) params.append('fields[UTM_TERM]', utm.utm_term)
    if (utm?.utm_referrer) params.append('fields[UTM_REFERRER]', utm.utm_referrer)

    //   Тут другие поля

    params.append('params[REGISTER_SONET_EVENT]', 'Y')

    const bxRes = await fetch(BITRIX_WEBHOOK_URL, {
      method: 'POST',
      body: params
    })

    const result = await bxRes.json().catch(() => ({}))

    if (!bxRes.ok || (result?.error && result?.error_description)) return NextResponse.json({ message: 'Bitrix error', detail: result }, { status: 502 })

    return NextResponse.json({ status: 200, message: 'Lead created', result })
  } catch (e: any) {
    return NextResponse.json({ message: e?.message || 'Server error' }, { status: 500 })
  }
}
