import Link from 'next/link'

export default function HomePage() {
  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold mb-8">Welcome to UAEzy</h1>
      <p className="text-xl mb-8 max-w-2xl mx-auto">
        Your Gateway to Dubai Real Estate Success. Master key areas, pass your RERA exams, and gain the confidence to close deals like a pro.
      </p>
      <div className="space-y-4">
        <Link href="/area-knowledge" className="block w-48 mx-auto px-6 py-3 bg-gold text-white rounded-md hover:bg-opacity-80">
          Area Knowledge
        </Link>
        <Link href="/rera-information" className="block w-48 mx-auto px-6 py-3 bg-white text-gold border border-gold rounded-md hover:bg-gray-50">
          RERA Information
        </Link>
      </div>
    </div>
  )
}

