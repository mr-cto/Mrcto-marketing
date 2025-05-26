'use client'

import { useState } from 'react'

export const metadata = {
  title: 'Support Chat - Mrcto Consulting',
  description: 'Real-time customer support powered by ChatGPT',
}

interface ChatMessage {
  role: 'user' | 'assistant'
  content: string
}

export default function Chat() {
  const [messages, setMessages] = useState<ChatMessage[]>([])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)

  const sendMessage = async () => {
    if (!input.trim()) return

    const newMessages = [...messages, { role: 'user', content: input }]
    setMessages(newMessages)
    setInput('')
    setLoading(true)

    const res = await fetch('/api/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ messages: newMessages }),
    })

    const data = await res.json()
    setMessages([...newMessages, { role: 'assistant', content: data.message }])
    setLoading(false)
  }

  return (
    <main className="max-w-2xl mx-auto p-6 space-y-4">
      <h1 className="text-3xl font-bold">Support Chat</h1>
      <p className="text-sm text-gray-600">
        This chat connects to OpenAI to answer your questions. Responses may be
        incorrect or misleading, so always verify important information.
      </p>
      <div className="border rounded p-4 space-y-2 min-h-[300px] bg-white">
        {messages.map((m, i) => (
          <div key={i} className={m.role === 'user' ? 'text-right' : ''}>
            <span className="font-semibold capitalize">{m.role}:</span>{' '}
            {m.content}
          </div>
        ))}
        {loading && <div>...</div>}
      </div>
      <div className="flex space-x-2">
        <input
          className="flex-1 border rounded p-2"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') sendMessage()
          }}
          placeholder="Type your question..."
        />
        <button
          className="bg-blue-600 text-white px-4 py-2 rounded"
          onClick={sendMessage}
          disabled={loading}
        >
          Send
        </button>
      </div>
    </main>
  )
}
