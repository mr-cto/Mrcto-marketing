export default function Home() {
  return (
    <main className="max-w-4xl mx-auto p-6 space-y-10">
      <section className="text-center space-y-4">
        <h1 className="text-5xl font-extrabold animate-fade-in-up">Transform Your Future with AI</h1>
        <p className="text-lg">
          AI is reshaping industries at a breathtaking pace. Our mission is to guide you through this revolution, unlocking efficiencies and creating new opportunities that redefine your organization.
        </p>
        <a href="/services" className="inline-block bg-blue-600 text-white px-6 py-3 rounded shadow hover:bg-blue-700 transition-colors">
          Start Your AI Journey
        </a>
      </section>
      <section className="space-y-4">
        <h2 className="text-3xl font-semibold">Why Act Now?</h2>
        <p>
          Organizations embracing AI today are pulling ahead of competitors, automating complex tasks and discovering insights hidden in their data. Waiting means falling behind.
        </p>
        <p>
          We merge strategy and technology to deliver measurable results—from cost savings to unprecedented innovation. We&apos;ll build a roadmap aligned with your goals so you can harness AI responsibly.
        </p>
      </section>
      <p className="text-sm text-gray-600">
        Note: AI tools can be incredibly useful but they don&apos;t solve every problem. They may produce unexpected results or incorrect information, so human oversight is essential.
      </p>
    </main>
  )
}
