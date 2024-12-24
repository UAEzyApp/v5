import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { StreakTracker } from "@/components/StreakTracker"
import { ErrorBoundary } from "react-error-boundary"

interface DailyChallengeResultsProps {
  score: number
  totalQuestions: number
  userAnswers: string[]
  questions: {
    question: string
    options: string[]
    correctAnswer: string
  }[]
  onRetry: () => void
  streak: number
}

function ErrorFallback({error, resetErrorBoundary}) {
  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre>{error.message}</pre>
      <button onClick={resetErrorBoundary}>Try again</button>
    </div>
  )
}

export function DailyChallengeResults({
  score,
  totalQuestions,
  userAnswers,
  questions,
  onRetry,
  streak
}: DailyChallengeResultsProps) {
  const percentage = Math.round((score / totalQuestions) * 100)

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-2xl font-semibold mb-2">
          {percentage >= 80
            ? "Great job!"
            : percentage >= 60
            ? "Good effort!"
            : "Keep practicing!"}
        </h2>
        <p className="text-xl mb-4">
          You scored {score} out of {totalQuestions}
        </p>
        <div className="w-full max-w-xs mx-auto mb-4">
          <Progress value={percentage} className="h-2" />
        </div>
        <p className="font-medium">{percentage}% Correct</p>
      </div>
      
      <ErrorBoundary
        FallbackComponent={ErrorFallback}
        onReset={() => {
          // Reset the state of your app so the error doesn't happen again
        }}
      >
        <div className="mb-4">
          <h3 className="text-lg font-semibold mb-2">Your Streak</h3>
          <StreakTracker streak={streak} />
        </div>
      </ErrorBoundary>
      
      <div className="space-y-4">
        {questions.map((q, index) => (
          <Card key={index}>
            <CardContent className="p-4">
              <h3 className="font-semibold mb-2">Question {index + 1}</h3>
              <p className="mb-2">{q.question}</p>
              <p className="mb-1">
                Your answer: <span className={userAnswers[index] === q.correctAnswer ? "text-green-600 font-semibold" : "text-red-600 font-semibold"}>{userAnswers[index]}</span>
              </p>
              {userAnswers[index] !== q.correctAnswer && (
                <p className="text-sm text-gray-600">
                  Correct answer: <span className="text-green-600 font-semibold">{q.correctAnswer}</span>
                </p>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
      
      <div className="text-center">
        <Button onClick={onRetry} className="bg-gold hover:bg-gold/80 text-white">
          Try Another Challenge
        </Button>
      </div>
    </div>
  )
}

