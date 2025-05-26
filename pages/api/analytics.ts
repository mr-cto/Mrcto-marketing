import type { NextApiRequest, NextApiResponse } from 'next'

type AnalyticsEvent = {
  type: string
  url?: string
  [key: string]: any
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<{ status: string } | string>
) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST'])
    return res.status(405).end('Method Not Allowed')
  }

  const event = req.body as AnalyticsEvent
  console.log('Analytics event:', event)
  res.status(200).json({ status: 'ok' })
}
