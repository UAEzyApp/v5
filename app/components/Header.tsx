import { Logo } from '@/components/Logo'
import Link from 'next/link'
import { UserButton } from './UserButton'

interface HeaderProps {
  isLoggedIn: boolean
  onLogout: () => void
}

export default function Header({ isLoggedIn, onLogout }: HeaderProps) {
  return (
    <header className="bg-white border-b border-gold sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Logo size="small" className="transition-transform duration-300 hover:scale-105" href={isLoggedIn ? "/home" : "/"} />
        <nav className="hidden md:flex space-x-6">
          {isLoggedIn && (
            <>
              <Link href="/area-knowledge" className="text-black hover:text-gold transition-colors duration-300">Area Knowledge</Link>
              <Link href="/rera-information" className="text-black hover:text-gold transition-colors duration-300">RERA Information</Link>
              <Link href="/daily-challenges" className="text-black hover:text-gold transition-colors duration-300">Daily Challenges</Link>
              <Link href="/progress" className="text-black hover:text-gold transition-colors duration-300">Progress</Link>
            </>
          )}
        </nav>
        {isLoggedIn ? (
          <UserButton onLogout={onLogout} />
        ) : (
          <button onClick={() => {}} className="bg-gold hover:bg-gold/80 text-white px-4 py-2 rounded">Get Started</button>
        )}
      </div>
    </header>
  )
}

