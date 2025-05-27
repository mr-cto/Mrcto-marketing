import type { NextApiRequest, NextApiResponse } from 'next'
import { getEvents } from '../../../lib/analyticsStore'

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', ['GET'])
    return res.status(405).end('Method Not Allowed')
  }

  res.status(200).json({ events: getEvents() })
}
