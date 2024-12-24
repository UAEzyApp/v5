const areaData = {
  'dubai-marina': {
    name: "Dubai Marina",
    description: "Dubai Marina is a vibrant waterfront community known for its luxury high-rise apartments, stunning views, and bustling lifestyle.",
  },
  'downtown-dubai': {
    name: "Downtown Dubai",
    description: "Downtown Dubai is the city's bustling central district, home to iconic landmarks like the Burj Khalifa and Dubai Mall.",
  },
  'palm-jumeirah': {
    name: "Palm Jumeirah",
    description: "Palm Jumeirah is Dubai's iconic man-made island, offering exclusive beachfront living and world-class resorts.",
  },
}

export default function AreaPage({ params }: { params: { area: string } }) {
  const area = areaData[params.area as keyof typeof areaData]

  if (!area) {
    return <div>Area not found</div>
  }

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">{area.name}</h1>
      <p className="text-lg mb-8">{area.description}</p>
      <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
      <ul className="list-disc pl-5 space-y-2">
        <li>Luxurious properties</li>
        <li>Prime location</li>
        <li>Excellent amenities</li>
        <li>High rental yields</li>
      </ul>
    </div>
  )
}

