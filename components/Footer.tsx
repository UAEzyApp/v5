import { Logo } from '@/components/Logo'
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-black text-white py-2"> {/* Updated padding */}
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0">
          <div className="flex items-center space-x-2">
            <Logo variant="footer" size="small" href={null} />
            <p className="text-xs">UAEzy – Master Dubai Real Estate</p>
          </div>
          <nav className="flex flex-wrap justify-center md:justify-end space-x-4">
            <Link href="/about" className="text-xs hover:text-gold transition-colors duration-300">About</Link>
            <Link href="/contact" className="text-xs hover:text-gold transition-colors duration-300">Contact</Link>
            <Link href="/privacy-policy" className="text-xs hover:text-gold transition-colors duration-300">Privacy Policy</Link>
            <Link href="/terms-and-conditions" className="text-xs hover:text-gold transition-colors duration-300">Terms & Conditions</Link>
          </nav>
          <div className="flex space-x-2">
            <a href="#" className="text-white hover:text-gold transition-colors duration-300">
              <Facebook size={16} />
            </a>
            <a href="#" className="text-white hover:text-gold transition-colors duration-300">
              <Twitter size={16} />
            </a>
            <a href="https://www.instagram.com/uae.zy/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gold transition-colors duration-300">
              <Instagram size={16} />
            </a>
            <a href="#" className="text-white hover:text-gold transition-colors duration-300">
              <Linkedin size={16} />
            </a>
          </div>
        </div>
        <div className="mt-2 text-center text-xs">
          © {new Date().getFullYear()} UAEzy. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

