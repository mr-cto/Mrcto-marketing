'use client'

import Link from 'next/link'
import { ReactNode } from 'react'

interface MagicButtonProps {
  href?: string
  children: ReactNode
  className?: string
}

export default function MagicButton({ href, children, className = '' }: MagicButtonProps) {
  const base = 'inline-block bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold px-6 py-3 rounded-md shadow-md hover:from-pink-500 hover:to-purple-500 transition-colors'
  const classes = `${base} ${className}`
  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    )
  }
  return (
    <button className={classes}>
      {children}
    </button>
  )
}
