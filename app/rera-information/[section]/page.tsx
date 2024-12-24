'use client'

import { useState, useEffect } from 'react'
import { useParams } from 'next/navigation'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Progress } from '@/components/ui/progress'
import { ChevronRight } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

// This would typically come from a database or API
const sectionData = {
  'introduction': {
    title: "Introduction to RERA",
    content: `
      <h2 class="text-2xl font-bold mb-4">Overview</h2>
      <p class="mb-4">The Real Estate Regulatory Agency (RERA) plays a crucial role in regulating Dubai's real estate market. Established in 2007, RERA aims to create a transparent and professional real estate environment.</p>
      
      <h2 class="text-2xl font-bold mb-4">Key Responsibilities</h2>
      <ul class="list-disc pl-5 mb-4">
        <li>Regulating real estate activities in Dubai</li>
        <li>Implementing government policies related to real estate</li>
        <li>Protecting stakeholders' interests</li>
        <li>Issuing licenses for real estate activities</li>
      </ul>
      
      <h2 class="text-2xl font-bold mb-4">Benefits of RERA</h2>
      <ul class="list-disc pl-5 mb-4">
        <li>Promotes transparency and professionalism in the real estate sector</li>
        <li>Ensures legal compliance of real estate transactions</li>
        <li>Builds investor trust in Dubai's property market</li>
        <li>Provides a framework for dispute resolution</li>
      </ul>
    `,
    quiz: [
      {
        question: "What is the primary purpose of RERA?",
        options: [
          "Selling properties",
          "Regulating the real estate sector",
          "Approving construction projects",
          "Managing property rentals"
        ],
        correctAnswer: 1,
        explanation: "RERA's primary purpose is to regulate the real estate sector in Dubai, ensuring transparency and professionalism in the market."
      },
      {
        question: "In which year was RERA established?",
        options: ["2005", "2007", "2010", "2012"],
        correctAnswer: 1,
        explanation: "RERA was established in 2007 to create a transparent and professional real estate environment in Dubai."
      },
      {
        question: "Which of the following is NOT a key responsibility of RERA?",
        options: [
          "Regulating real estate activities",
          "Implementing government policies",
          "Protecting stakeholders' interests",
          "Constructing new properties"
        ],
        correctAnswer: 3,
        explanation: "Constructing new properties is not a responsibility of RERA. RERA's key responsibilities include regulating real estate activities, implementing government policies, and protecting stakeholders' interests."
      }
    ]
  },
  // Add data for other sections here
}

export default function RERASection() {
  const params = useParams()
  const section = params.section as string
  const [quizStarted, setQuizStarted] = useState(false)
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [score, setScore] = useState(0)
  const [showScore, setShowScore] = useState(false)
  const [progress, setProgress] = useState(0)
  const [expandedContent, setExpandedContent] = useState(false)
  const [quizAttempts, setQuizAttempts] = useState<{ date: string; score: number }[]>([])
  const [selectedAnswers, setSelectedAnswers] = useState<number[]>([])

  const data = sectionData[section as keyof typeof sectionData]

  useEffect(() => {
    // In a real app, you'd fetch the user's progress and quiz attempts from an API or database
    setProgress(Math.random() * 100)
    setQuizAttempts([
      { date: '2023-05-01', score: 2 },
      { date: '2023-05-15', score: 3 },
    ])
  }, [])

  const startQuiz = () => {
    setQuizStarted(true)
    setCurrentQuestion(0)
    setScore(0)
    setShowScore(false)
    setSelectedAnswers([])
  }

  const handleAnswerClick = (selectedAnswer: number) => {
    const newSelectedAnswers = [...selectedAnswers, selectedAnswer]
    setSelectedAnswers(newSelectedAnswers)

    if (selectedAnswer === data.quiz[currentQuestion].correctAnswer) {
      setScore(score + 1)
    }

    const nextQuestion = currentQuestion + 1
    if (nextQuestion < data.quiz.length) {
      setCurrentQuestion(nextQuestion)
    } else {
      setShowScore(true)
      // In a real app, you'd send this data to your backend
      setQuizAttempts([...quizAttempts, { date: new Date().toISOString().split('T')[0], score: score + 1 }])
    }
  }

  if (!data) {
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8 text-gold">Section Not Found</h1>
        <p>This section is currently being developed. Check back soon for updates!</p>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold mb-8 text-gold">{data.title}</h1>
        
        <Card className="mb-8">
          <CardContent>
            <div className={`mb-4 ${expandedContent ? '' : 'max-h-64 overflow-hidden'}`} dangerouslySetInnerHTML={{ __html: data.content }} />
            {!expandedContent && (
              <Button onClick={() => setExpandedContent(true)} variant="link" className="text-gold">
                Read More
              </Button>
            )}
          </CardContent>
        </Card>
        
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Your Progress</CardTitle>
          </CardHeader>
          <CardContent>
            <Progress value={progress} className="w-full" />
            <p className="mt-2 text-sm text-gray-600">{Math.round(progress)}% complete</p>
          </CardContent>
        </Card>

        {!quizStarted ? (
          <Button onClick={startQuiz} className="bg-gold hover:bg-gold/80 text-white">
            Take Quiz
          </Button>
        ) : showScore ? (
          <Card>
            <CardHeader>
              <CardTitle>Quiz Results</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg mb-4">You scored {score} out of {data.quiz.length}</p>
              {data.quiz.map((q, index) => (
                <div key={index} className="mb-4">
                  <p className="font-semibold">{q.question}</p>
                  <p className={selectedAnswers[index] === q.correctAnswer ? "text-green-600" : "text-red-600"}>
                    Your answer: {q.options[selectedAnswers[index]]}
                  </p>
                  {selectedAnswers[index] !== q.correctAnswer && (
                    <p className="text-sm text-gray-600">
                      Correct answer: {q.options[q.correctAnswer]}
                      <br />
                      Explanation: {q.explanation}
                    </p>
                  )}
                </div>
              ))}
              <Button onClick={startQuiz} className="bg-gold hover:bg-gold/80 text-white mt-4">
                Retake Quiz
              </Button>
            </CardContent>
          </Card>
        ) : (
          <Card>
            <CardHeader>
              <CardTitle>Question {currentQuestion + 1}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg mb-4">{data.quiz[currentQuestion].question}</p>
              {data.quiz[currentQuestion].options.map((option, index) => (
                <Button
                  key={index}
                  onClick={() => handleAnswerClick(index)}
                  className="w-full mb-2 bg-white text-black border border-gold hover:bg-gold hover:text-white"
                >
                  {option}
                </Button>
              ))}
            </CardContent>
          </Card>
        )}

        <Card className="mt-8">
          <CardHeader>
            <CardTitle>Past Quiz Attempts</CardTitle>
          </CardHeader>
          <CardContent>
            {quizAttempts.map((attempt, index) => (
              <div key={index} className="flex justify-between items-center mb-2">
                <span>{attempt.date}</span>
                <span>Score: {attempt.score}/{data.quiz.length}</span>
              </div>
            ))}
          </CardContent>
        </Card>
      </motion.div>
    </div>
  )
}

