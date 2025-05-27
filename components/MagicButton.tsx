import Link from 'next/link'
import { AnchorHTMLAttributes, ReactNode } from 'react'

interface MagicButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string
  children: ReactNode
}

export default function MagicButton({ href, children, className = '', ...props }: MagicButtonProps) {
  return (
    <Link
      href={href}
      className={`inline-block rounded-md bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 px-6 py-3 font-semibold text-white shadow-md hover:shadow-lg transition-shadow ${className}`}
      {...props}
    >
      {children}
    </Link>
  )
}
