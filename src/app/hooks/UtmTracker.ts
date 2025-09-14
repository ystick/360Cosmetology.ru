'use client'

import { useEffect } from 'react'
import { useSearchParams } from 'next/navigation'
import { initUtm } from '../utils/getUtm'


export function UtmTracker() {
  const searchParams = useSearchParams()

  useEffect(() => {
    initUtm()
  }, [searchParams])

  return null
}
