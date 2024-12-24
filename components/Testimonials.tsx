import { motion } from 'framer-motion'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Card, CardContent } from '@/components/ui/card'

const testimonials = [
  {
    name: "Ahmed Ali",
    feedback: "UAEzy helped me pass my RERA exam and boosted my confidence to succeed in Dubai's competitive market!",
    avatar: "/placeholder-avatar-1.jpg"
  },
  {
    name: "Sarah Khan",
    feedback: "The area knowledge section is incredibly detailed. It's like having a local expert guiding you through Dubai's real estate landscape.",
    avatar: "/placeholder-avatar-2.jpg"
  },
  {
    name: "Michael Rodriguez",
    feedback: "Daily challenges keep me engaged and ensure I'm always improving. UAEzy is a game-changer for aspiring real estate professionals!",
    avatar: "/placeholder-avatar-3.jpg"
  }
]

export function Testimonials() {
  return (
    <section className="py-24 relative bg-fixed bg-cover bg-center" style={{
      backgroundImage: "url('http://uaezy.com/wp-content/uploads/2024/12/aerial-view-downtown-dubai-autumn-day-united-arab-emirates.jpg')"
    }}>
      <div className="absolute inset-0 bg-black opacity-50" />
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-3xl font-bold mb-12 text-center text-white">What Our Users Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full bg-white">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Avatar className="h-10 w-10 mr-4">
                      <AvatarImage src={testimonial.avatar} />
                      <AvatarFallback>{testimonial.name[0]}</AvatarFallback>
                    </Avatar>
                    <h3 className="font-semibold">{testimonial.name}</h3>
                  </div>
                  <p className="text-gray-600">{testimonial.feedback}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

