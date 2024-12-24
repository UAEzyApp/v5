'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Card } from '@/components/ui/card'
import { areaData } from '../data/areaData'

export default function Dashboard() {
  const [completedAreas, setCompletedAreas] = useState<string[]>([])

  useEffect(() => {
    // In a real app, you'd fetch this from an API or local storage
    setCompletedAreas(['Dubai Marina', 'Downtown Dubai'])
  }, [])

  const sortedAreas = [...areaData].sort((a, b) => {
    if (completedAreas.includes(a.name) && !completedAreas.includes(b.name)) return 1
    if (!completedAreas.includes(a.name) && completedAreas.includes(b.name)) return -1
    return 0
  })

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Welcome to UAEzy</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <Link href="/area-knowledge">
          <Card className="p-6 hover:shadow-lg transition duration-300">
            <h2 className="text-xl font-semibold mb-4">Dubai Area Knowledge</h2>
            <p className="mb-4">Learn about key areas, property insights, and lifestyle amenities.</p>
            <div className="space-y-2">
              {sortedAreas.map((area) => (
                <div key={area.name} className="flex items-center">
                  <span className={`w-3 h-3 rounded-full mr-2 ${completedAreas.includes(area.name) ? 'bg-green-500' : 'bg-gray-300'}`}></span>
                  <span className={completedAreas.includes(area.name) ? 'text-gray-500' : 'text-black'}>{area.name}</span>
                  {completedAreas.includes(area.name) && <span className="ml-2 text-xs bg-green-100 text-green-800 px-2 py-1 rounded">Completed</span>}
                </div>
              ))}
            </div>
          </Card>
        </Link>
        <Link href="/rera-information">
          <Card className="p-6 hover:shadow-lg transition duration-300">
            <h2 className="text-xl font-semibold mb-4">RERA Information</h2>
            <p>Understand Dubai-specific real estate regulations and compliance.</p>
          </Card>
        </Link>
        <Link href="/daily-challenges">
          <Card className="p-6 hover:shadow-lg transition duration-300">
            <h2 className="text-xl font-semibold mb-4">Daily Challenges</h2>
            <p>Test your knowledge, improve skills, and compete on the leaderboard.</p>
          </Card>
        </Link>
      </div>
    </div>
  )
}

