import { getRandomPlaceholderImage } from '@/utils/imageUtils'

export const areaData = {
  'dubai-marina': {
    name: "Dubai Marina",
    image: "http://uaezy.com/wp-content/uploads/2024/12/dubai-marina-scaled.jpg",
    description: "Dubai Marina is a vibrant waterfront community known for its luxury high-rise apartments, stunning views, and bustling lifestyle. This prestigious neighborhood offers an unparalleled living experience with its scenic waterfront promenade, world-class dining, and exceptional amenities.",
    subcategories: [
      {
        title: "Off-Plan Developments",
        description: "Discover luxurious off-plan projects, including waterfront apartments and penthouses. Marina residences remain a key investment option.",
        icon: "🏗️"
      },
      {
        title: "Leasing/Property Trends",
        description: "Dubai Marina has consistently shown high rental demand, with apartments providing excellent returns for investors.",
        icon: "📈"
      },
      {
        title: "Lifestyle/Culture/Schools",
        description: "Enjoy a vibrant nightlife, premium dining, and a luxurious urban lifestyle. Popular schools nearby include The American University in Dubai.",
        icon: "🎨"
      },
      {
        title: "Latest News",
        description: "Marina properties see a 10% increase in value in 2024, driven by strong demand and infrastructure development.",
        icon: "📰"
      }
    ]
  },
  'downtown-dubai': {
    name: "Downtown Dubai",
    image: "http://uaezy.com/wp-content/uploads/2024/12/aerial-view-downtown-dubai-autumn-day-united-arab-emirates.jpg",
    description: "Downtown Dubai is the city's bustling central district, home to iconic landmarks like the Burj Khalifa and Dubai Mall. This area offers a perfect blend of residential, commercial, and entertainment spaces, making it a highly sought-after location for both living and investing.",
    subcategories: [
      {
        title: "Off-Plan Developments",
        description: "Downtown remains a hub of new high-end developments, offering iconic residences near the Burj Khalifa and Dubai Mall.",
        icon: "🏗️"
      },
      {
        title: "Leasing/Property Trends",
        description: "Luxury apartments in Downtown yield high rental returns due to its central location and premium lifestyle offerings.",
        icon: "📈"
      },
      {
        title: "Lifestyle/Culture/Schools",
        description: "A cultural hotspot featuring the Dubai Opera, art galleries, and international schools like JSS Private School.",
        icon: "🎨"
      },
      {
        title: "Latest News",
        description: "New projects in Downtown emphasize sustainable designs, enhancing the area's appeal to eco-conscious investors.",
        icon: "📰"
      }
    ]
  },
  'palm-jumeirah': {
    name: "Palm Jumeirah",
    image: "http://uaezy.com/wp-content/uploads/2024/12/aerial-view-pool-scaled.jpg",
    description: "Palm Jumeirah is Dubai's iconic man-made island, offering exclusive beachfront living and world-class resorts. This architectural marvel combines luxury residential properties with premium hospitality venues, creating an unparalleled lifestyle destination.",
    subcategories: [
      {
        title: "Off-Plan Developments",
        description: "Palm Jumeirah offers new eco-friendly projects, combining luxury with sustainability. Private islands and waterfront apartments are key highlights.",
        icon: "🏗️"
      },
      {
        title: "Leasing/Property Trends",
        description: "Known for exclusive villas and beachfront apartments, the Palm delivers high rental yields and premium living experiences.",
        icon: "📈"
      },
      {
        title: "Lifestyle/Culture/Schools",
        description: "The Atlantis Hotel and Nakheel Mall add to the luxury lifestyle. Nearby schools include the International School of Creative Science.",
        icon: "🎨"
      },
      {
        title: "Latest News",
        description: "Developers focus on renewable energy projects to align with Dubai's green initiatives.",
        icon: "📰"
      }
    ]
  },
  'dubai-hills-estate': {
    name: "Dubai Hills Estate",
    image: "http://uaezy.com/wp-content/uploads/2024/12/city-architecture-design.jpg",
    description: "Dubai Hills Estate is a premium master-planned community offering a perfect blend of luxury living and natural beauty. With its championship golf course, vast green spaces, and modern amenities, it represents the future of sustainable urban living in Dubai.",
    subcategories: [
      {
        title: "Off-Plan Developments",
        description: "Emerging as a luxury community, Dubai Hills Estate introduces off-plan townhouses and villas with family-oriented designs.",
        icon: "🏗️"
      },
      {
        title: "Leasing/Property Trends",
        description: "Rental demand grows as more families relocate to this serene community with access to the Dubai Hills Mall.",
        icon: "📈"
      },
      {
        title: "Lifestyle/Culture/Schools",
        description: "A tranquil lifestyle with open parks and international schools like GEMS Wellington Academy.",
        icon: "🎨"
      },
      {
        title: "Latest News",
        description: "Infrastructure developments include new metro links and healthcare facilities within the estate.",
        icon: "📰"
      }
    ]
  },
  'jumeirah-village-circle': {
    name: "Jumeirah Village Circle (JVC)",
    image: "http://uaezy.com/wp-content/uploads/2024/12/high-angle-shot-cityscape-with-tall-skyscrapers-sunset-covered-with-white-clouds-scaled.jpg",
    description: "Jumeirah Village Circle (JVC) is a family-friendly community offering affordable luxury and a balanced lifestyle. With its abundance of parks, retail outlets, and educational facilities, JVC has become a popular choice for both families and young professionals.",
    subcategories: [
      {
        title: "Off-Plan Developments",
        description: "Affordable housing projects attract first-time buyers and young professionals seeking a community-oriented lifestyle.",
        icon: "🏗️"
      },
      {
        title: "Leasing/Property Trends",
        description: "Steady rental demand for apartments and villas, making JVC a popular choice for families and singles.",
        icon: "📈"
      },
      {
        title: "Lifestyle/Culture/Schools",
        description: "Enjoy green parks, shopping centres, and proximity to schools like Sunmarke School.",
        icon: "🎨"
      },
      {
        title: "Latest News",
        description: "JVC continues to grow, with upcoming developments enhancing connectivity and amenities.",
        icon: "📰"
      }
    ]
  }
}

export const articleData = {
  'dubai-marina': {
    'off-plan-developments': [
      {
        title: "New Waterfront Development Launch",
        image: getRandomPlaceholderImage(),
        excerpt: "Exclusive preview of Marina Vista, featuring premium waterfront apartments with smart home technology.",
        testScore: 85,
        id: 'dubai-marina-offplan-1'
      },
      {
        title: "Marina Gate Final Phase",
        image: getRandomPlaceholderImage(),
        excerpt: "Last opportunity to invest in the prestigious Marina Gate development with special launch prices.",
        testScore: 70,
        id: 'dubai-marina-offplan-2'
      },
      {
        title: "Sustainable Living Projects",
        image: getRandomPlaceholderImage(),
        excerpt: "New eco-friendly developments in Dubai Marina focusing on renewable energy and sustainable living.",
        testScore: 90,
        id: 'dubai-marina-offplan-3'
      },
      {
        title: "Luxury Penthouse Collection",
        image: getRandomPlaceholderImage(),
        excerpt: "Ultra-luxury penthouses with panoramic marina views and private pools now available off-plan.",
        testScore: 75,
        id: 'dubai-marina-offplan-4'
      }
    ],
    'leasing-property-trends': [
      {
        title: "2024 Rental Market Analysis",
        image: getRandomPlaceholderImage(),
        excerpt: "Comprehensive study of Dubai Marina's rental yields and market performance in 2024.",
        testScore: 95,
        id: 'dubai-marina-trends-1'
      },
      {
        title: "Investment Hotspots",
        image: getRandomPlaceholderImage(),
        excerpt: "Identifying the most promising investment opportunities in Dubai Marina's various sectors.",
        testScore: 80,
        id: 'dubai-marina-trends-2'
      },
      {
        title: "Property Value Appreciation",
        image: getRandomPlaceholderImage(),
        excerpt: "Analysis of property value growth in Dubai Marina over the past 5 years.",
        testScore: 85,
        id: 'dubai-marina-trends-3'
      },
      {
        title: "Market Forecast 2025",
        image: getRandomPlaceholderImage(),
        excerpt: "Expert predictions for Dubai Marina's real estate market trends in 2025.",
        testScore: 75,
        id: 'dubai-marina-trends-4'
      }
    ],
    'lifestyle-culture-schools': [
      {
        title: "Marina Walk Development",
        image: getRandomPlaceholderImage(),
        excerpt: "New additions to the Marina Walk promenade enhancing community lifestyle.",
        testScore: 90,
        id: 'dubai-marina-lifestyle-1'
      },
      {
        title: "Education Hub",
        image: getRandomPlaceholderImage(),
        excerpt: "Overview of international schools and educational facilities in Dubai Marina.",
        testScore: 85,
        id: 'dubai-marina-lifestyle-2'
      },
      {
        title: "Cultural Scene",
        image: getRandomPlaceholderImage(),
        excerpt: "Exploring the vibrant arts and culture scene in Dubai Marina.",
        testScore: 80,
        id: 'dubai-marina-lifestyle-3'
      },
      {
        title: "Community Events",
        image: getRandomPlaceholderImage(),
        excerpt: "Upcoming community events and activities in Dubai Marina for 2024.",
        testScore: 95,
        id: 'dubai-marina-lifestyle-4'
      }
    ],
    'latest-news': [
      {
        title: "Marina Infrastructure Upgrade",
        image: getRandomPlaceholderImage(),
        excerpt: "Major infrastructure improvements planned for Dubai Marina in 2024.",
        testScore: 88,
        id: 'dubai-marina-news-1'
      },
      {
        title: "New Transit Connections",
        image: getRandomPlaceholderImage(),
        excerpt: "Enhanced public transportation links coming to Dubai Marina.",
        testScore: 92,
        id: 'dubai-marina-news-2'
      },
      {
        title: "Smart City Initiative",
        image: getRandomPlaceholderImage(),
        excerpt: "Dubai Marina selected for smart city technology pilot program.",
        testScore: 85,
        id: 'dubai-marina-news-3'
      },
      {
        title: "Property Market Update",
        image: getRandomPlaceholderImage(),
        excerpt: "Latest statistics show strong growth in Marina property values.",
        testScore: 90,
        id: 'dubai-marina-news-4'
      }
    ]
  },
  // Similar structure for other areas...
}

