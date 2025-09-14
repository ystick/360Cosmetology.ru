type Utm = Partial<{
  utm_source: string
  utm_medium: string
  utm_campaign: string
  utm_content: string
  utm_term: string
  utm_referrer: string
  ts: number
}>

const UTM_KEYS = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term'] as const
const COOKIE_KEY = 'utm_data_v1'
const COOKIE_EXPIRES_DAYS = 14

function parseUtmFromLocation(loc: Location): Utm {
  const sp = new URLSearchParams(loc.search)
  const utm: Utm = {}
  UTM_KEYS.forEach((k) => {
    const v = sp.get(k)
    if (v) utm[k] = v
  })
  if (document?.referrer) utm.utm_referrer = document.referrer
  return utm
}

// Утилиты для работы с куками
function setCookie(name: string, value: string, days: number): void {
  if (typeof document === 'undefined') return

  const expires = new Date()
  expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000)
  const expiresStr = expires.toUTCString()

  document.cookie = `${name}=${encodeURIComponent(value)}; expires=${expiresStr}; path=/; SameSite=Lax`
}

function getCookie(name: string): string | null {
  if (typeof document === 'undefined') return null

  const nameEQ = name + '='
  const cookies = document.cookie.split(';')

  for (let i = 0; i < cookies.length; i++) {
    let cookie = cookies[i].trim()
    if (cookie.indexOf(nameEQ) === 0) {
      return decodeURIComponent(cookie.substring(nameEQ.length))
    }
  }
  return null
}

function deleteCookie(name: string): void {
  if (typeof document === 'undefined') return
  document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`
}

export function loadUtm(): Utm | null {
  try {
    const raw = getCookie(COOKIE_KEY)
    if (!raw) return null

    const data = JSON.parse(raw) as Utm

    // Проверяем, не истек ли срок действия
    if (data.ts && Date.now() - data.ts > COOKIE_EXPIRES_DAYS * 24 * 60 * 60 * 1000) {
      deleteCookie(COOKIE_KEY)
      return null
    }

    return data
  } catch {
    return null
  }
}

export function saveUtm(utm: Utm): void {
  try {
    const jsonData = JSON.stringify(utm)
    setCookie(COOKIE_KEY, jsonData, COOKIE_EXPIRES_DAYS)
  } catch {
    // Если не удалось сохранить в куки, игнорируем ошибку
  }
}

// Новая функция для инициализации UTM меток
export function initUtm(): void {
  if (typeof window === 'undefined') return

  const urlUtm = parseUtmFromLocation(window.location)
  let stored: Utm = loadUtm() ?? {}

  // Устанавливаем timestamp только если его еще нет
  if (!stored.ts) {
    stored.ts = Date.now()
  }

  // Сохраняем referrer только если его еще нет
  if (!stored.utm_referrer && urlUtm.utm_referrer) {
    stored.utm_referrer = urlUtm.utm_referrer
  }

  // Проверяем, есть ли UTM параметры в текущем URL
  const hasUrlUtm = UTM_KEYS.some((k) => Boolean(urlUtm[k]))

  if (hasUrlUtm) {
    // Если в URL есть UTM параметры, обновляем сохраненные данные
    stored = { ...stored, ...urlUtm, ts: Date.now() }
    saveUtm(stored)
  } else if (Object.keys(stored).length === 0) {
    // Если нет сохраненных данных и нет UTM в URL, создаем базовую запись
    stored = {
      ts: Date.now(),
      utm_referrer: document.referrer || undefined
    }
    saveUtm(stored)
  }
}

// Упрощенная функция для получения сохраненных UTM данных
export function getUtm(): Utm | null {
  return loadUtm()
}

// Дополнительная функция для очистки UTM данных (если понадобится)
export function clearUtm(): void {
  deleteCookie(COOKIE_KEY)
}
