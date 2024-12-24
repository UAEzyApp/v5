'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import { Progress } from "@/components/ui/progress"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, BookOpen, Trophy, ChevronLeft } from 'lucide-react'

interface ProgressData {
  areaKnowledge: number
  reraInformation: number
  dailyChallenges: number
}

export default function ProgressPage() {
  const [progress, setProgress] = useState<ProgressData | null>(null)
  const router = useRouter()

  useEffect(() => {
    // Simulate fetching progress data
    const fetchProgress = async () => {
      // In a real app, this would be an API call
      await new Promise(resolve => setTimeout(resolve, 1000))
      setProgress({
        areaKnowledge: 50,
        reraInformation: 30,
        dailyChallenges: 75
      })
    }

    fetchProgress()

    // Scroll to top on mount
    window.scrollTo(0, 0)
  }, [])

  const getMotivationalMessage = (overallProgress: number) => {
    if (overallProgress >= 75) return "Excellent work! You're well on your way to becoming a Dubai Real Estate Expert!"
    if (overallProgress >= 50) return "Great progress! Keep pushing to master Dubai's real estate market!"
    if (overallProgress >= 25) return "You're making steady progress. Keep up the good work!"
    return "You're just getting started. Exciting journey ahead!"
  }

  if (!progress) {
    return (
      <div className="container mx-auto px-4 py-8 text-center">
        <h1 className="text-3xl font-bold mb-4 text-gold">Loading your progress...</h1>
      </div>
    )
  }

  const overallProgress = Math.round((progress.areaKnowledge + progress.reraInformation + progress.dailyChallenges) / 3)

  return (
    <div className="container mx-auto px-4 py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl font-bold mb-8 text-gold">Your Progress</h1>
        
        <div className="grid gap-8 md:grid-cols-3 mb-8">
          <ProgressCard
            title="Area Knowledge"
            progress={progress.areaKnowledge}
            icon={MapPin}
            description="Master Dubai's key areas and property insights"
          />
          <ProgressCard
            title="RERA Information"
            progress={progress.reraInformation}
            icon={BookOpen}
            description="Learn real estate regulations and compliance"
          />
          <ProgressCard
            title="Daily Challenges"
            progress={progress.dailyChallenges}
            icon={Trophy}
            description="Complete daily quizzes to test your knowledge"
          />
        </div>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Overall Progress</CardTitle>
          </CardHeader>
          <CardContent>
            <Progress value={overallProgress} className="h-4" />
            <p className="mt-4 text-center font-medium">
              {getMotivationalMessage(overallProgress)}
            </p>
          </CardContent>
        </Card>

        <div className="flex justify-center">
          <Button 
            onClick={() => router.push('/home')} 
            className="bg-gold hover:bg-gold/80 text-white"
          >
            <ChevronLeft className="mr-2 h-4 w-4" /> Back to Home
          </Button>
        </div>
      </motion.div>
    </div>
  )
}

interface ProgressCardProps {
  title: string
  progress: number
  icon: React.ElementType
  description: string
}

function ProgressCard({ title, progress, icon: Icon, description }: ProgressCardProps) {
  return (
    <Card>
      <CardContent className="pt-6">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center">
            <Icon className="w-5 h-5 mr-2 text-gold" />
            <h3 className="font-semibold">{title}</h3>
          </div>
          <span className="text-2xl font-bold">{progress}%</span>
        </div>
        <Progress value={progress} className="h-2 mb-2" />
        <p className="text-sm text-gray-500">{description}</p>
      </CardContent>
    </Card>
  )
}

