import { AreaNavigation } from '@/components/AreaNavigation'

export default function RERAInformationLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'RERA Information', href: '/rera-information' },
  ]

  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-4">
        <AreaNavigation items={breadcrumbItems} />
        {children}
      </div>
    </div>
  )
}

