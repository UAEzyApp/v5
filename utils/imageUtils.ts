const placeholderImages = [
  'http://uaezy.com/wp-content/uploads/2024/12/abu-dhabi-seascape-with-skyscrapers.jpg',
  'http://uaezy.com/wp-content/uploads/2024/12/aerial-view-downtown-dubai-autumn-day-united-arab-emirates.jpg',
  'http://uaezy.com/wp-content/uploads/2024/12/aerial-view-pool-scaled.jpg',
  'http://uaezy.com/wp-content/uploads/2024/12/city-architecture-design.jpg',
  'http://uaezy.com/wp-content/uploads/2024/12/dramatic-perspective-with-low-angle-view-skyscrapers-looking-up-sky-dubai-vanishing-point-scaled.jpg',
  'http://uaezy.com/wp-content/uploads/2024/12/dubai-marina-scaled.jpg',
  'http://uaezy.com/wp-content/uploads/2024/12/high-angle-shot-cityscape-with-tall-skyscrapers-sunset-covered-with-white-clouds-scaled.jpg',
  'http://uaezy.com/wp-content/uploads/2024/12/modetn-city-luxury-center-dubai-united-arab-emirates-scaled.jpg',
  'http://uaezy.com/wp-content/uploads/2024/12/person-looking-futuristic-mystical-other-worldly-sky-1-scaled.jpg',
  'http://uaezy.com/wp-content/uploads/2024/12/person-looking-futuristic-mystical-other-worldly-sky-scaled.jpg',
  'http://uaezy.com/wp-content/uploads/2024/12/pexels-thelazyartist-3307862-2-scaled.jpg',
];

export function getRandomPlaceholderImage(): string {
  return placeholderImages[Math.floor(Math.random() * placeholderImages.length)];
}

