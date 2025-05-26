export const metadata = {
  title: 'Services - Mrcto Consulting',
  description: 'Enterprise and small business AI adoption services'
}

export default function Services() {
  return (
    <main className="max-w-3xl mx-auto p-6 space-y-8">
      <h1 className="text-3xl font-bold animate-fade-in-up">Our Services</h1>
      <p className="animate-fade-in-up delay-200">AI done right can reshape how your entire organization operates. We partner with teams at every level to ensure adoption drives real results.</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>Data protection strategies tailored to your business</li>
        <li>Integration of AI tools into existing workflows</li>
        <li>Telemetry and metrics to measure operational efficiency gains</li>
        <li>Cost estimation models and ROI projections</li>
      </ul>
      <a href="mailto:contact@example.com" className="inline-block bg-blue-600 text-white px-4 py-2 rounded shadow hover:bg-blue-700 transition-colors">
        Book a Consultation
      </a>
    </main>
  )
}
