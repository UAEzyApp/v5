'use client'

import { useState, useEffect } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Progress } from '@/components/ui/progress'
import { Pie } from 'react-chartjs-2'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'

ChartJS.register(ArcElement, Tooltip, Legend)

export default function ReportsPage() {
  const [areaProgress, setAreaProgress] = useState<Record<string, number>>({})
  const [reraProgress, setReraProgress] = useState<Record<string, number>>({})
  const [overallProgress, setOverallProgress] = useState(0)

  useEffect(() => {
    // Simulating API call to fetch progress data
    setTimeout(() => {
      setAreaProgress({
        'Dubai Marina': 80,
        'Downtown Dubai': 60,
        'Palm Jumeirah': 40,
        'Dubai Hills Estate': 20,
        'Jumeirah Village Circle': 10
      })
      setReraProgress({
        'Introduction to RERA': 90,
        'Legal Framework': 70,
        'Registration Process': 50,
        'Exam Details': 30,
        'Code of Ethics': 10
      })
      setOverallProgress(45)
    }, 1000)
  }, [])

  const pieData = {
    labels: ['Completed', 'Remaining'],
    datasets: [
      {
        data: [overallProgress, 100 - overallProgress],
        backgroundColor: ['#cfb653', '#e2e8f0'],
        borderColor: ['#cfb653', '#e2e8f0'],
        borderWidth: 1,
      },
    ],
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-gold">Your Progress Report</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Overall Progress</CardTitle>
          </CardHeader>
          <CardContent className="flex items-center justify-center">
            <div className="w-64 h-64">
              <Pie data={pieData} />
            </div>
          </CardContent>
        </Card>
        
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Area Knowledge Progress</CardTitle>
          </CardHeader>
          <CardContent>
            {Object.entries(areaProgress).map(([area, progress]) => (
              <div key={area} className="mb-4">
                <p className="text-sm font-medium mb-1">{area}</p>
                <Progress value={progress} className="h-2" />
                <p className="text-xs text-right mt-1">{progress}% Complete</p>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
      
      <Card>
        <CardHeader>
          <CardTitle>RERA Information Progress</CardTitle>
        </CardHeader>
        <CardContent>
          {Object.entries(reraProgress).map(([topic, progress]) => (
            <div key={topic} className="mb-4">
              <p className="text-sm font-medium mb-1">{topic}</p>
              <Progress value={progress} className="h-2" />
              <p className="text-xs text-right mt-1">{progress}% Complete</p>
            </div>
          ))}
        </CardContent>
      </Card>

      <Card className="mt-8">
        <CardHeader>
          <CardTitle>Improvement Suggestions</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="list-disc pl-5 space-y-2">
            <li>Focus on completing the Dubai Hills Estate section to improve your Area Knowledge.</li>
            <li>Review the Code of Ethics in the RERA Information to boost your overall score.</li>
            <li>Consider retaking the Daily Challenge to maintain your streak and reinforce your learning.</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  )
}

