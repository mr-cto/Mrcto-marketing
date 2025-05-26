import Link from 'next/link'

export default function Nav() {
  return (
    <nav className="sticky top-0 z-10 flex items-center justify-between p-4 bg-white/80 backdrop-blur shadow-sm">
      <Link href="/" className="font-semibold text-xl text-indigo-600">Mrcto Consulting</Link>
      <div className="space-x-4 font-medium">
        <Link href="/" className="hover:text-indigo-600">Home</Link>
        <Link href="/services" className="hover:text-indigo-600">Services</Link>
      </div>
    </nav>
  )
}
