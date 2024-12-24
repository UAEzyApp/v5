import { Card } from '@/components/ui/card'

const infoTopics = [
  { title: 'RERA Compliance', description: 'Understanding the Real Estate Regulatory Agency requirements.' },
  { title: 'Off-Plan Handovers', description: 'The process of transferring ownership for newly constructed properties.' },
  { title: 'Contract Breakdowns', description: 'Key elements and clauses in Dubai real estate contracts.' },
]

export default function RealEstateInfo() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Real Estate Information</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {infoTopics.map((topic) => (
          <Card key={topic.title} className="p-6">
            <h2 className="text-xl font-semibold mb-4">{topic.title}</h2>
            <p>{topic.description}</p>
          </Card>
        ))}
      </div>
    </div>
  )
}

