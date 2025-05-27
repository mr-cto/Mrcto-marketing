'use client'

import Link from 'next/link'

export default function SlackChatButton() {
  const url = process.env.NEXT_PUBLIC_SLACK_CHAT_URL
  if (!url) return null
  return (
    <Link
      href={url}
      className="fixed bottom-6 right-6 bg-[#4A154B] text-white rounded-full px-4 py-3 shadow-lg flex items-center space-x-2 hover:opacity-90"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 122.8 122.8"
        className="w-5 h-5"
        fill="currentColor"
      >
        <path d="M30.3 78.5c0 8.4-6.8 15.3-15.3 15.3S-.3 86.9-.3 78.5c0-8.4 6.8-15.3 15.3-15.3h15.3v15.3zm7.7 0c0-8.4 6.8-15.3 15.3-15.3s15.3 6.8 15.3 15.3v38.4c0 8.4-6.8 15.3-15.3 15.3S38 125.3 38 116.9V78.5zm15.3-46.2C45 32.3 38.2 25.5 38.2 17S45 1.7 53.5 1.7s15.3 6.8 15.3 15.3v15.3H53.5zm0 7.7h15.3c8.4 0 15.3 6.8 15.3 15.3s-6.8 15.3-15.3 15.3H30.3c-8.4 0-15.3-6.8-15.3-15.3s6.8-15.3 15.3-15.3H53.5zM92.5 44c8.4 0 15.3 6.8 15.3 15.3s-6.8 15.3-15.3 15.3h-15.3V44h15.3zm-7.7 0H69.5c-8.4 0-15.3-6.8-15.3-15.3S61 13.4 69.5 13.4c8.4 0 15.3 6.8 15.3 15.3V44zM78 85.9c0-8.4 6.8-15.3 15.3-15.3 8.4 0 15.3 6.8 15.3 15.3s-6.8 15.3-15.3 15.3H78V85.9zM70.3 85.9v15.3c0 8.4-6.8 15.3-15.3 15.3s-15.3-6.8-15.3-15.3 6.8-15.3 15.3-15.3h15.3z" />
      </svg>
      <span>Chat with us</span>
    </Link>
  )
}
