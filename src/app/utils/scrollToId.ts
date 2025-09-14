const easeInOutQuad = (t: number): number => {
  return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t
}

export const scrollToId = (id: string, offset = 0, duration = 1000): void => {
  if (typeof window === 'undefined') return
  const el = document.getElementById(id)
  if (!el) return

  const startY = window.pageYOffset
  const targetY = el.getBoundingClientRect().top + startY + offset
  const distance = targetY - startY

  let startTime: number | null = null

  function step(timestamp: number) {
    if (startTime === null) startTime = timestamp
    const elapsed = timestamp - startTime
    const progress = Math.min(elapsed / duration, 1)
    const ease = easeInOutQuad(progress)

    window.scrollTo(0, startY + distance * ease)

    if (elapsed < duration) {
      window.requestAnimationFrame(step)
    }
  }

  window.requestAnimationFrame(step)
}
