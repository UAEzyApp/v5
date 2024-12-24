import Link from 'next/link'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { motion } from 'framer-motion'

interface BreadcrumbItem {
  label: string
  href: string
}

interface AreaNavigationProps {
  items: BreadcrumbItem[]
}

export function AreaNavigation({ items }: AreaNavigationProps) {
  return (
    <nav className="flex items-center space-x-4 mb-6">
      <Link href="/area-knowledge" className="text-gold hover:text-gold/80 transition-colors duration-300">
        <motion.div
          className="flex items-center cursor-pointer"
          whileHover={{ x: -5 }}
          whileTap={{ scale: 0.95 }}
        >
          <ChevronLeft className="w-5 h-5 mr-1" />
          <span className="text-sm font-medium">Back to Area Knowledge</span>
        </motion.div>
      </Link>
      <div className="flex items-center space-x-2">
        {items.map((item, index) => (
          <React.Fragment key={item.href}>
            {index > 0 && <ChevronRight className="w-4 h-4 text-gray-400" />}
            <Link 
              href={item.href} 
              className={`text-sm font-medium ${
                index === items.length - 1 ? 'text-gray-700' : 'text-gold hover:text-gold/80'
              } transition-colors duration-300`}
            >
              <motion.div
                className="cursor-pointer"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.label}
              </motion.div>
            </Link>
          </React.Fragment>
        ))}
      </div>
    </nav>
  )
}

