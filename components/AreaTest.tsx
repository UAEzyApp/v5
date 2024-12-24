'use client'

import { useState } from 'react'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { PreTestPage } from '@/components/PreTestPage'
import { ProgressBar } from '@/components/ProgressBar'
import { motion } from 'framer-motion'

interface AreaTestProps {
  area: string
  onComplete: () => void
}

const questions = {
  'Dubai Marina': [
    {
      question: 'What is Dubai Marina known for?',
      options: ['Desert safaris', 'Waterfront living', 'Historical landmarks', 'Mountain hiking'],
      correctAnswer: 'Waterfront living'
    },
    {
      question: 'Which of the following is NOT a facility in Dubai Marina?',
      options: ['Marina Walk', 'Dubai Marina Mall', 'Burj Khalifa', 'JBR Beach'],
      correctAnswer: 'Burj Khalifa'
    },
    // Add more questions...
  ],
  // Add questions for other areas...
}

export function AreaTest({ area, onComplete }: AreaTestProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [score, setScore] = useState(0)
  const [showScore, setShowScore] = useState(false)
  const [showPreTest, setShowPreTest] = useState(true)
  const [userAnswers, setUserAnswers] = useState<string[]>([])

  const areaQuestions = questions[area as keyof typeof questions] || []

  const handleAnswerClick = (selectedAnswer: string) => {
    const newUserAnswers = [...userAnswers, selectedAnswer]
    setUserAnswers(newUserAnswers)

    if (selectedAnswer === areaQuestions[currentQuestion].correctAnswer) {
      setScore(score + 1)
    }

    const nextQuestion = currentQuestion + 1
    if (nextQuestion < areaQuestions.length) {
      setCurrentQuestion(nextQuestion)
    } else {
      setShowScore(true)
    }
  }

  const startTest = () => {
    setShowPreTest(false)
  }

  if (showPreTest) {
    return (
      <PreTestPage
        topic={`${area} and its property market`}
        duration="2-5 minutes"
        onStart={startTest}
      />
    )
  }

  if (showScore) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Card className="p-6">
          <h2 className="text-2xl font-semibold mb-4">
            {score === areaQuestions.length
              ? "Excellent job!"
              : score >= areaQuestions.length * 0.8
              ? "Great work!"
              : score >= areaQuestions.length * 0.6
              ? "Good effort!"
              : "Keep learning!"}
          </h2>
          <p className="text-xl mb-6">
            You scored {score} out of {areaQuestions.length}
          </p>
          {areaQuestions.map((q, index) => (
            <div key={index} className="mb-4">
              <p className="font-semibold">{q.question}</p>
              <p className="text-sm">
                Your answer: <span className={userAnswers[index] === q.correctAnswer ? "text-green-600" : "text-red-600"}>{userAnswers[index]}</span>
              </p>
              {userAnswers[index] !== q.correctAnswer && (
                <p className="text-sm text-gray-600">
                  Correct answer: {q.correctAnswer}
                </p>
              )}
            </div>
          ))}
          <Button onClick={onComplete} className="bg-gold hover:bg-gold/80 text-white mt-4">
            Back to Area Information
          </Button>
        </Card>
      </motion.div>
    )
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <ProgressBar current={currentQuestion + 1} total={areaQuestions.length} />
      <Card className="p-6 mt-4">
        <h2 className="text-xl font-semibold mb-4">Question {currentQuestion + 1}</h2>
        <p className="mb-4">{areaQuestions[currentQuestion].question}</p>
        <div className="space-y-2">
          {areaQuestions[currentQuestion].options.map((option, index) => (
            <Button
              key={index}
              onClick={() => handleAnswerClick(option)}
              className="w-full text-left justify-start bg-white text-black border border-gold hover:bg-gold hover:text-white transition-colors duration-300"
            >
              {option}
            </Button>
          ))}
        </div>
      </Card>
    </motion.div>
  )
}

