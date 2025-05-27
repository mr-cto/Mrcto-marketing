import MagicButton from '../components/MagicButton'
import MagicCard from '../components/MagicCard'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="max-w-5xl mx-auto p-6 space-y-16">
      <section className="text-center py-20 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-xl text-white space-y-6">
        <h1 className="text-5xl font-extrabold">Empower Your Business with AI</h1>
        <p className="max-w-2xl mx-auto">
          We help enterprises and small businesses adopt AI responsibly across their organizations. Our approach emphasizes data protection, seamless integration and measurable outcomes.
        </p>
        <MagicButton href="/services">Explore Services</MagicButton>
      </section>
      <section className="space-y-8 text-center">
        <h2 className="text-3xl font-semibold">Why Act Now?</h2>
        <p>
          Organizations embracing AI today are pulling ahead of competitors, automating complex tasks and discovering insights hidden in their data. Waiting means falling behind.
        </p>
        <p>
          We merge strategy and technology to deliver measurable results—from cost savings to unprecedented innovation. We&apos;ll build a roadmap aligned with your goals so you can harness AI responsibly.
        </p>
      </section>
      <section className="grid md:grid-cols-3 gap-8">
        <MagicCard title="Data Protection" icon="🔒">
          Safeguard your information with proven strategies.
        </MagicCard>
        <MagicCard title="Seamless Integration" icon="⚙️">
          Integrate AI tools into existing workflows effortlessly.
        </MagicCard>
        <MagicCard title="Measurable Outcomes" icon="📊">
          Track efficiency gains and ROI with clear metrics.
        </MagicCard>
      </section>
      <p className="text-xs text-gray-500 text-center">
        Note: AI tools are powerful but can produce inaccurate information. Human oversight remains essential.
      </p>
    </main>
  )
}
