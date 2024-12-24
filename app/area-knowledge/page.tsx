import Link from 'next/link'

const areas = [
  { name: 'Dubai Marina', slug: 'dubai-marina' },
  { name: 'Downtown Dubai', slug: 'downtown-dubai' },
  { name: 'Palm Jumeirah', slug: 'palm-jumeirah' },
]

export default function AreaKnowledgePage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">Dubai Area Knowledge</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {areas.map((area) => (
          <Link 
            key={area.slug} 
            href={`/area-knowledge/${area.slug}`}
            className="block p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
          >
            <h2 className="text-xl font-semibold mb-2">{area.name}</h2>
            <p className="text-gray-600">Click to explore this area</p>
          </Link>
        ))}
      </div>
    </div>
  )
}

