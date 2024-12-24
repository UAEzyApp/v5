import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'UAEzy - Your Gateway to Dubai Real Estate Success',
  description: 'Master key areas, pass your RERA exams, and gain the confidence to close deals like a pro.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="bg-gold p-4">
          <h1 className="text-2xl font-bold text-white">UAEzy</h1>
        </header>
        <main className="container mx-auto px-4 py-8">
          {children}
        </main>
        <footer className="bg-black text-white p-4 text-center">
          <p>&copy; {new Date().getFullYear()} UAEzy. All rights reserved.</p>
        </footer>
      </body>
    </html>
  )
}

