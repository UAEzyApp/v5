interface AvatarProps {
  src?: string
  alt?: string
  fallback: string
  className?: string
}

export function Avatar({ src, alt = '', fallback, className = '' }: AvatarProps) {
  return (
    <div className={`relative inline-block h-10 w-10 rounded-full overflow-hidden ${className}`}>
      {src ? (
        <img
          src={src}
          alt={alt}
          className="h-full w-full object-cover"
        />
      ) : (
        <div className="h-full w-full flex items-center justify-center bg-gray-200 text-gray-600">
          {fallback}
        </div>
      )}
    </div>
  )
}

export function AvatarImage({ src, alt = '' }: { src: string; alt?: string }) {
  return (
    <img
      src={src}
      alt={alt}
      className="h-full w-full object-cover"
    />
  )
}

export function AvatarFallback({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-full w-full flex items-center justify-center bg-gray-200 text-gray-600">
      {children}
    </div>
  )
}

