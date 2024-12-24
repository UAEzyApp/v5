import { ReactNode, useState } from 'react'

interface TooltipProps {
  children: ReactNode
  content: string
}

export function Tooltip({ children, content }: TooltipProps) {
  const [isVisible, setIsVisible] = useState(false)

  return (
    <div className="relative inline-block">
      <div
        onMouseEnter={() => setIsVisible(true)}
        onMouseLeave={() => setIsVisible(false)}
      >
        {children}
      </div>
      {isVisible && (
        <div className="absolute z-50 px-2 py-1 text-sm text-white bg-black rounded shadow-lg -top-8 left-1/2 transform -translate-x-1/2">
          {content}
        </div>
      )}
    </div>
  )
}

export function TooltipProvider({ children }: { children: ReactNode }) {
  return children
}

export function TooltipTrigger({ children }: { children: ReactNode }) {
  return children
}

export function TooltipContent({ children }: { children: ReactNode }) {
  return children
}

