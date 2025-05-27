'use client'

import { useEffect } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'

export default function Analytics() {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    const url = searchParams.toString()
      ? `${pathname}?${searchParams.toString()}`
      : pathname
    const event = { type: 'pageview', url, ts: Date.now() }

    fetch('/api/analytics', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(event),
    }).catch(err => {
      console.error('Analytics error', err)
    })
  }, [pathname, searchParams])

  return null
}
