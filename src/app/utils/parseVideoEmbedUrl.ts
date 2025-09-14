export const parseVideoEmbedUrl = (url: string): string | null => {
  try {
    const u = new URL(url)
    const host = u.hostname.toLowerCase()

    // YouTube: поддерживаем youtube.com и youtu.be
    if (host.includes('youtube.com') || host.includes('youtu.be')) {
      // https://youtu.be/ID или https://www.youtube.com/watch?v=ID
      let videoId = ''
      if (host.includes('youtu.be')) {
        videoId = u.pathname.slice(1)
      } else {
        videoId = u.searchParams.get('v') || ''
      }
      if (!videoId) return null
      return `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`
    }

    // VK: пример https://vk.com/video123456_789012 or with query
    if (host.includes('vk.com') && u.pathname.startsWith('/video')) {
      // путь: /video{owner}_{id}
      const match = u.pathname.match(/video(-?\d+)_([0-9]+)/)
      if (match) {
        const owner = match[1]
        const id = match[2]
        // Простейший embed через video_ext.php
        return `https://vk.com/video_ext.php?oid=${owner.replace('-', '')}&id=${id}&autoplay=1`
      }
    }

    // fallback: если не распознали, возвращаем оригинал (будет открываться в новой вкладке)
    return null
  } catch {
    return null
  }
}
