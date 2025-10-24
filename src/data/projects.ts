export interface Project {
  id: number
  title: string
  category: string
  date: string
  hasSubfolders: boolean
  description: string
  fullDescription: string
  location: string
  client: string
  images?: string[]
  subfolders?: { name: string; images: string[] }[]
}

export const projects = [
  {
    id: 1,
    title: "Sarah & John's Wedding",
    category: "Wedding",
    date: "June 2024",
    hasSubfolders: true,
    subfolders: [
      {
        name: "Ceremony",
        images: ["/project-wedding-1.jpg", "/project-wedding-2.jpg"],
      },
      {
        name: "Reception",
        images: ["/project-wedding-3.jpg", "/project-wedding-4.jpg"],
      },
      {
        name: "Portraits",
        images: ["/project-wedding-5.jpg", "/project-wedding-6.jpg"],
      },
    ],
    description: "A beautiful summer wedding at a countryside venue",
    fullDescription:
      "Sarah and John's wedding was a magical celebration of love set against the backdrop of a stunning countryside estate. The day was filled with joy, laughter, and unforgettable moments. From the intimate ceremony to the lively reception, every detail was captured with care and artistry.",
    location: "Countryside Estate, Vermont",
    client: "Sarah & John",
  },
  {
    id: 2,
    title: "Corporate Headshots - Tech Startup",
    category: "Portrait",
    date: "May 2024",
    hasSubfolders: false,
    images: ["/project-portrait-1.jpg", "/project-portrait-2.jpg", "/project-portrait-3.jpg"],
    description: "Professional headshots for a growing tech company",
    fullDescription:
      "A comprehensive headshot session for a rapidly growing tech startup. The goal was to create professional, approachable portraits that reflect the company's innovative culture while maintaining a polished corporate aesthetic.",
    location: "Studio, San Francisco",
    client: "TechVenture Inc.",
  },
  {
    id: 3,
    title: "Luxury Watch Campaign",
    category: "Commercial",
    date: "April 2024",
    hasSubfolders: true,
    subfolders: [
      {
        name: "Product Shots",
        images: ["/project-commercial-1.jpg", "/project-commercial-2.jpg"],
      },
      {
        name: "Lifestyle",
        images: ["/project-commercial-3.jpg", "/project-commercial-4.jpg"],
      },
    ],
    description: "High-end product photography for luxury timepieces",
    fullDescription:
      "An elegant product photography campaign showcasing a collection of luxury watches. Each piece was meticulously lit and styled to highlight the craftsmanship and premium quality of these exceptional timepieces.",
    location: "Studio, New York",
    client: "Prestige Watches",
  },
  {
    id: 4,
    title: "Annual Gala Event",
    category: "Event",
    date: "March 2024",
    hasSubfolders: false,
    images: ["/project-event-1.jpg", "/project-event-2.jpg", "/project-event-3.jpg", "/project-event-4.jpg"],
    description: "Coverage of a charity gala with 500+ attendees",
    fullDescription:
      "Complete event coverage of a prestigious charity gala attended by over 500 guests. The photography captured the elegance of the evening, key moments from speeches and performances, and the energy of the celebration.",
    location: "Grand Ballroom, Chicago",
    client: "Hope Foundation",
  },
  {
    id: 5,
    title: "Mountain Expedition",
    category: "Landscape",
    date: "February 2024",
    hasSubfolders: true,
    subfolders: [
      {
        name: "Peaks",
        images: ["/project-landscape-1.jpg", "/project-landscape-2.jpg"],
      },
      {
        name: "Valleys",
        images: ["/project-landscape-3.jpg", "/project-landscape-4.jpg"],
      },
      {
        name: "Wildlife",
        images: ["/project-landscape-5.jpg"],
      },
    ],
    description: "Breathtaking landscapes from a week-long mountain trek",
    fullDescription:
      "A week-long expedition through pristine mountain wilderness, capturing the raw beauty of nature. From sunrise vistas to dramatic weather conditions, this collection showcases the majesty of the natural world.",
    location: "Rocky Mountains, Colorado",
    client: "Personal Project",
  },
  {
    id: 6,
    title: "Spring Fashion Editorial",
    category: "Fashion",
    date: "January 2024",
    hasSubfolders: false,
    images: ["/project-fashion-1.jpg", "/project-fashion-2.jpg", "/project-fashion-3.jpg"],
    description: "Editorial shoot for a fashion magazine's spring collection",
    fullDescription:
      "A vibrant fashion editorial featuring the latest spring collection. Shot on location with natural lighting, the images capture the energy and freshness of the new season's designs.",
    location: "Urban Location, Los Angeles",
    client: "Style Magazine",
  },
  {
    id: 7,
    title: "Emma & David's Engagement",
    category: "Portrait",
    date: "December 2023",
    hasSubfolders: true,
    subfolders: [
      {
        name: "Beach",
        images: ["/project-engagement-1.jpg", "/project-engagement-2.jpg"],
      },
      {
        name: "Sunset",
        images: ["/project-engagement-3.jpg", "/project-engagement-4.jpg"],
      },
    ],
    description: "Romantic engagement session at sunset",
    fullDescription:
      "A romantic engagement session capturing Emma and David's love story. Shot during golden hour at their favorite beach, the images reflect their genuine connection and excitement for their future together.",
    location: "Coastal Beach, California",
    client: "Emma & David",
  },
  {
    id: 8,
    title: "Restaurant Menu Photography",
    category: "Commercial",
    date: "November 2023",
    hasSubfolders: false,
    images: ["/project-food-1.jpg", "/project-food-2.jpg", "/project-food-3.jpg"],
    description: "Mouth-watering food photography for upscale restaurant",
    fullDescription:
      "Appetizing food photography for an upscale restaurant's new menu. Each dish was styled and photographed to highlight the culinary artistry and premium ingredients that define the restaurant's cuisine.",
    location: "Restaurant Location, Boston",
    client: "Gourmet Bistro",
  },
]