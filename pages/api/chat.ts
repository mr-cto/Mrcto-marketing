import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST')
    res.status(405).end('Method Not Allowed')
    return
  }

  const { messages } = req.body

  if (!process.env.OPENAI_API_KEY) {
    res.status(500).json({ error: 'OpenAI API key not configured' })
    return
  }

  try {
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: 'gpt-3.5-turbo',
        messages,
      })
    })

    if (!response.ok) {
      const text = await response.text()
      res.status(500).json({ error: text })
      return
    }

    const data = await response.json()
    res.status(200).json({
      message: data.choices?.[0]?.message?.content || ''
    })
  } catch (err: any) {
    res.status(500).json({ error: err.message })
  }
}
