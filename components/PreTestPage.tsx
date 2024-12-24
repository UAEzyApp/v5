import { Button } from "@/components/ui/button"
import { Logo } from "@/components/Logo"

interface PreTestPageProps {
  topic: string
  duration: string
  onStart: () => void
}

export function PreTestPage({ topic, duration, onStart }: PreTestPageProps) {
  return (
    <div className="flex flex-col items-center justify-center space-y-4 p-4">
      <div className="mb-2">
        <Logo size="small" showAnimation />
      </div>
      <h1 className="text-2xl font-bold text-center text-gold">Get Ready to Test Your Knowledge!</h1>
      <p className="text-lg text-center max-w-2xl">
        Test your knowledge on {topic}. This challenge will help you retain what you've learned and boost your confidence.
      </p>
      <p className="text-sm">This test will take approximately {duration}.</p>
      <Button 
        onClick={onStart}
        className="bg-gold hover:bg-gold/80 text-white px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105"
      >
        Start Test
      </Button>
    </div>
  )
}

