export const metadata = {
  title: 'Services - Mrcto Consulting',
  description: 'Enterprise and small business AI adoption services'
}

export default function Services() {
  return (
    <main className="max-w-3xl mx-auto p-6 space-y-6">
      <h1 className="text-3xl font-bold">Our Services</h1>
      <p>We help organizations safely adopt AI across all levels, from developers to executives.</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>Data protection strategies tailored to your business</li>
        <li>Integration of AI tools into existing workflows</li>
        <li>Telemetry and metrics to measure operational efficiency gains</li>
        <li>Cost estimation models and ROI projections</li>
      </ul>
    </main>
  )
}
