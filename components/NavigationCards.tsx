import { motion } from 'framer-motion'
import { MapPin, FileText, Trophy } from 'lucide-react'
import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import Image from 'next/image'
import { getRandomPlaceholderImage } from '@/utils/imageUtils'

const cardData = [
  {
    title: "Dubai Area Knowledge",
    description: "Explore key areas and property insights in Dubai's real estate market.",
    icon: MapPin,
    link: "/area-knowledge",
    image: getRandomPlaceholderImage()
  },
  {
    title: "RERA Information",
    description: "Learn about Dubai's real estate regulations and compliance requirements.",
    icon: FileText,
    link: "/rera-information",
    image: getRandomPlaceholderImage()
  },
  {
    title: "Daily Challenges",
    description: "Test your knowledge and improve your skills with daily quizzes.",
    icon: Trophy,
    link: "/daily-challenges",
    image: getRandomPlaceholderImage()
  }
]

export function NavigationCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {cardData.map((card, index) => (
        <motion.div
          key={card.title}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <Link href={card.link}>
            <Card className="h-full transition-all duration-300 hover:shadow-lg hover:scale-105 cursor-pointer overflow-hidden">
              <div className="relative h-48">
                <Image
                  src={card.image}
                  alt={card.title}
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-300 transform hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                  <CardHeader>
                    <CardTitle className="flex items-center text-white text-2xl">
                      <card.icon className="w-8 h-8 mr-2 text-gold" />
                      {card.title}
                    </CardTitle>
                  </CardHeader>
                </div>
              </div>
              <CardContent className="p-4">
                <p className="text-gray-600">{card.description}</p>
              </CardContent>
            </Card>
          </Link>
        </motion.div>
      ))}
    </div>
  )
}

