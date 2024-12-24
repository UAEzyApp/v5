'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface LogoProps {
  className?: string
  size?: 'small' | 'medium' | 'large'
  variant?: 'default' | 'transparent' | 'footer' | 'watermark'
  showAnimation?: boolean
  href?: string
}

export function Logo({
  className,
  size = 'medium',
  variant = 'default',
  showAnimation = false,
  href = '/'
}: LogoProps) {
  const sizes = {
    small: { width: 80, height: 40 },
    medium: { width: 120, height: 60 },
    large: { width: 200, height: 100 }
  }

  const { width, height } = sizes[size]

  const logoSrc = variant === 'transparent' 
    ? 'http://uaezy.com/wp-content/uploads/2024/12/UAEzy-Logo-1.png'
    : 'http://uaezy.com/wp-content/uploads/2024/12/UAEzy-Logo.jpg'

  const logoContent = (
    <div className={cn(
      'relative',
      variant === 'watermark' && 'opacity-30',
      className
    )}>
      {showAnimation ? (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Image
            src={logoSrc}
            alt="UAEzy Logo"
            width={width}
            height={height}
            className="object-contain"
            priority={variant === 'default'}
          />
        </motion.div>
      ) : (
        <Image
          src={logoSrc}
          alt="UAEzy Logo"
          width={width}
          height={height}
          className="object-contain"
          priority={variant === 'default'}
        />
      )}
      {variant === 'footer' && (
        <p className="mt-2 text-sm text-white">UAEzy – Master Dubai Real Estate</p>
      )}
    </div>
  )

  if (variant === 'watermark') {
    return logoContent
  }

  return (
    <Link href={href} className={cn(
      'block',
      variant === 'watermark' && 'opacity-30',
      className
    )}>
      {logoContent}
    </Link>
  )
}

