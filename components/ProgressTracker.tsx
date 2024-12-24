import { motion } from 'framer-motion'
import { Progress } from '@/components/ui/progress'
import { Card } from '@/components/ui/card'

interface ProgressData {
  areaKnowledge: number
  reraInformation: number
  dailyChallenges: number
}

export function ProgressTracker() {
  const progress = {
    areaKnowledge: {
      label: "Area Knowledge",
      value: 40
    },
    reraInformation: {
      label: "RERA Information",
      value: 20
    },
    dailyChallenges: {
      label: "Daily Challenges",
      value: 30
    }
  }

  return (
    <Card className="p-6">
      <div className="space-y-6">
        {Object.entries(progress).map(([key, { label, value }]) => (
          <div key={key} className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="font-medium">{label}</span>
              <span className="text-sm text-gray-500">{value}%</span>
            </div>
            <div className="w-full max-w-md mx-auto">
              <Progress value={value} className="h-2" />
            </div>
          </div>
        ))}
      </div>
      <p className="mt-6 text-lg font-semibold text-gold text-center">
        You're on your way to becoming a Dubai Real Estate Expert!
      </p>
    </Card>
  )
}

