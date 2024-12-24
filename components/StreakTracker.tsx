interface StreakTrackerProps {
  streak: number
}

export function StreakTracker({ streak }: StreakTrackerProps) {
  const streakDays = [
    { label: 'M', key: 'M' },
    { label: 'T', key: 'T' },
    { label: 'W', key: 'W' },
    { label: 'T', key: 'T2' },
    { label: 'F', key: 'F' },
    { label: 'S', key: 'S' },
    { label: 'S', key: 'S2' }
  ];

  return (
    <div className="flex justify-center space-x-2">
      {streakDays.map((day, index) => (
        <div
          key={day.key}
          className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-medium ${
            index < streak
              ? 'bg-gold text-white'
              : 'bg-gray-200 text-gray-500'
          }`}
        >
          {day.label}
        </div>
      ))}
    </div>
  )
}

