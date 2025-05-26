import Link from 'next/link'

export default function Home() {
  return (
    <main className="max-w-5xl mx-auto p-6 space-y-16">
      <section className="text-center py-20 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-xl text-white">
        <h1 className="text-5xl font-extrabold mb-4">Empower Your Business with AI</h1>
        <p className="mb-6 max-w-2xl mx-auto">
          We help enterprises and small businesses adopt AI responsibly across their organizations. Our approach emphasizes data protection, seamless integration and measurable outcomes.
        </p>
        <Link href="/services" className="inline-block bg-white text-indigo-600 font-semibold px-6 py-3 rounded-md shadow-md hover:bg-gray-100">
          Explore Services
        </Link>
      </section>
      <section className="grid md:grid-cols-3 gap-8">
        <div className="p-6 bg-white rounded-lg shadow text-center">
          <div className="text-4xl mb-4">🔒</div>
          <h2 className="font-bold mb-2">Data Protection</h2>
          <p>Safeguard your information with proven strategies.</p>
        </div>
        <div className="p-6 bg-white rounded-lg shadow text-center">
          <div className="text-4xl mb-4">⚙️</div>
          <h2 className="font-bold mb-2">Seamless Integration</h2>
          <p>Integrate AI tools into existing workflows effortlessly.</p>
        </div>
        <div className="p-6 bg-white rounded-lg shadow text-center">
          <div className="text-4xl mb-4">📊</div>
          <h2 className="font-bold mb-2">Measurable Outcomes</h2>
          <p>Track efficiency gains and ROI with clear metrics.</p>
        </div>
      </section>
      <p className="text-xs text-gray-500 text-center">
        Note: AI tools are powerful but can produce inaccurate information. Human oversight remains essential.
      </p>
    </main>
  )
}
