'use client'

import { useCallback } from 'react'

export function useAnalytics() {
  return useCallback((event: Record<string, any>) => {
    fetch('/api/analytics', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...event, ts: Date.now() }),
    }).catch(err => {
      console.error('Analytics error', err)
    })
  }, [])
}
