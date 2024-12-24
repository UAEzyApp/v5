interface ProgressBarProps {
  current: number
  total: number
}

export function ProgressBar({ current, total }: ProgressBarProps) {
  const percentage = (current / total) * 100

  return (
    <div className="w-full max-w-md mx-auto">
      <div className="w-full bg-gray-200 rounded-full h-2.5 mb-2">
        <div
          className="bg-gold h-2.5 rounded-full transition-all duration-300 ease-in-out"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
      <p className="text-sm text-gray-600 text-center">Question {current} of {total}</p>
    </div>
  )
}

