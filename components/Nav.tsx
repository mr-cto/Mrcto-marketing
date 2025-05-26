import Link from 'next/link'

export default function Nav() {
  return (
    <nav className="flex items-center justify-between p-4 bg-white shadow">
      <Link href="/" className="font-semibold text-xl">Mrcto Consulting</Link>
      <div className="space-x-4">
        <Link href="/" className="hover:underline">Home</Link>
        <Link href="/services" className="hover:underline">Services</Link>
        <Link href="/chat" className="hover:underline">Support Chat</Link>
      </div>
    </nav>
  )
}
