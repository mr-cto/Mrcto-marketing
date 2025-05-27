import { ReactNode } from 'react'

export default function MagicCard({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <div className={`rounded-xl border border-transparent bg-white/80 backdrop-blur p-6 shadow-sm hover:shadow-md transition-shadow ${className}`}>
      {children}
    </div>
  )
}
