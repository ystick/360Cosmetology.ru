import type { IMakeAnAppointment, IRequestCallForm } from '@interfaces'
import { fetchWithTimeout } from '@utils/api'

class ContactFormService {
  async contactFrom(payload: IMakeAnAppointment | IRequestCallForm) {
    const init: RequestInit = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    }

    const emailPromise = fetchWithTimeout('/api/contact', init, 8000)
    const bitrixPromise = fetchWithTimeout('/api/bitrix', init, 8000).catch((e) => {
      console.warn('Bitrix failed (ignored):', e)
      return null
    })

    const [emailRes] = await Promise.all([emailPromise, bitrixPromise])

    if (!emailRes?.ok) {
      const text = emailRes ? await emailRes.text().catch(() => '') : ''
      throw new Error(`Network error (email). ${text}`)
    }
  }
}

export default new ContactFormService()
