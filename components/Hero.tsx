import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'

interface HeroProps {
  onGetStarted: () => void
}

export function Hero({ onGetStarted }: HeroProps) {
  return (
    <div 
      className="relative h-[600px] bg-cover bg-center flex items-center"
      style={{
        backgroundImage: "url('http://uaezy.com/wp-content/uploads/2024/12/pexels-thelazyartist-3307862-1-scaled.jpg')"
      }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white">
            Welcome to UAEzy – Your Gateway to Dubai Real Estate Success
          </h1>
          <p className="text-xl mb-8 text-white">
            Master key areas, pass your RERA exams, and gain the confidence to close deals like a pro.
          </p>
          <Button 
            onClick={onGetStarted}
            className="bg-gold hover:bg-gold/80 text-white px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
          >
            Get Started
          </Button>
        </motion.div>
      </div>
    </div>
  )
}

