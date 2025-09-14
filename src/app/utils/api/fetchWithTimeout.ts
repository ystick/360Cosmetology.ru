export async function fetchWithTimeout(input: RequestInfo | URL, init: RequestInit = {}, ms = 8000) {
  const ctrl = new AbortController()
  const id = setTimeout(() => ctrl.abort(), ms)
  try {
    const res = await fetch(input, { ...init, signal: ctrl.signal })
    return res
  } finally {
    clearTimeout(id)
  }
}
