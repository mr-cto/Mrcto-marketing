import type { NextApiRequest, NextApiResponse } from 'next'

interface ContactPayload {
  name: string
  email: string
  message: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<{ ok: boolean }>
) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST'])
    return res.status(405).end(`Method ${req.method} Not Allowed`)
  }

  const { name, email, message } = req.body as ContactPayload
  if (!name || !email || !message) {
    return res.status(400).json({ ok: false })
  }

  const webhook = process.env.SLACK_WEBHOOK_URL
  if (!webhook) {
    console.error('Missing SLACK_WEBHOOK_URL')
    return res.status(500).json({ ok: false })
  }

  // Compose Slack message
  const text = `New inquiry from ${name} <${email}>:\n${message}`
  try {
    await fetch(webhook, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ text }),
    })
  } catch (err) {
    console.error('Slack webhook error', err)
    return res.status(500).json({ ok: false })
  }

  // Optionally integrate with email/SMS services (e.g. SendGrid, Twilio)
  // using additional environment variables. This allows follow ups directly
  // from Slack after hours via external workflows.

  res.status(200).json({ ok: true })
}
