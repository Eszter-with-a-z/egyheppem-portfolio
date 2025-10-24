export interface Project {
  id: string
  title: string
  coverImage: string
  imageCount: number
  category: string
  description: string
  images: ProjectImage[]
  hasSubfolders?: boolean
  subfolders?: Subfolder[]
}

export interface ProjectImage {
  url: string
  title: string
  isBest?: boolean
}

export interface Subfolder {
  id: string
  title: string
  coverImage: string
  imageCount: number
  images: ProjectImage[]
}

export interface Testimonial {
  id: string
  name: string
  role: string
  content: string
  image: string
}

// Sample projects data
export const projects: Project[] = [
  {
    id: "urban-stories",
    title: "Urban Stories",
    coverImage: "/urban-street-photography.png",
    imageCount: 24,
    category: "Street Photography",
    description: "Capturing the essence of city life through candid moments and architectural beauty.",
    images: [
      { url: "/urban-street.png", title: "City Lights", isBest: true },
      { url: "/street-portrait.jpg", title: "Morning Commute" },
      { url: "/urban-architecture.png", title: "Concrete Jungle", isBest: true },
    ],
  },
  {
    id: "natural-wonders",
    title: "Natural Wonders",
    coverImage: "/serene-mountain-lake.png",
    imageCount: 18,
    category: "Landscape",
    description: "Exploring the breathtaking beauty of untouched natural landscapes.",
    images: [
      { url: "/majestic-mountain-vista.png", title: "Mountain Peak", isBest: true },
      { url: "/lush-forest.png", title: "Forest Path" },
      { url: "/sunset-landscape.jpg", title: "Golden Hour" },
    ],
  },
  {
    id: "portrait-sessions",
    title: "Portrait Sessions",
    coverImage: "/portrait-studio.png",
    imageCount: 32,
    category: "Portrait",
    description: "Intimate portraits that reveal the unique character of each subject.",
    hasSubfolders: true,
    images: [],
    subfolders: [
      {
        id: "studio-portraits",
        title: "Studio Portraits",
        coverImage: "/studio-portrait-lighting.jpg",
        imageCount: 16,
        images: [
          { url: "/studio-portrait-woman.jpg", title: "Studio Session 1" },
          { url: "/studio-portrait-man.jpg", title: "Studio Session 2" },
        ],
      },
      {
        id: "outdoor-portraits",
        title: "Outdoor Portraits",
        coverImage: "/outdoor-portrait-natural-light.jpg",
        imageCount: 16,
        images: [
          { url: "/outdoor-portrait-nature.jpg", title: "Natural Light 1", isBest: true },
          { url: "/outdoor-portrait-urban.jpg", title: "Natural Light 2" },
        ],
      },
    ],
  },
  {
    id: "wedding-moments",
    title: "Wedding Moments",
    coverImage: "/wedding-photography-romantic.jpg",
    imageCount: 45,
    category: "Wedding",
    description: "Documenting love stories with elegance and emotion.",
    images: [
      { url: "/outdoor-wedding-ceremony.png", title: "The Ceremony" },
      { url: "/wedding-couple-portrait.png", title: "First Dance", isBest: true },
      { url: "/elegant-wedding-details.png", title: "Details" },
    ],
  },
  {
    id: "commercial-work",
    title: "Commercial Work",
    coverImage: "/commercial-product-shot.png",
    imageCount: 28,
    category: "Commercial",
    description: "Professional photography for brands and businesses.",
    images: [
      { url: "/product-photography-still-life.png", title: "Product Shot" },
      { url: "/commercial-fashion.jpg", title: "Fashion Campaign" },
      { url: "/commercial-lifestyle.jpg", title: "Lifestyle Brand" },
    ],
  },
  {
    id: "abstract-visions",
    title: "Abstract Visions",
    coverImage: "/abstract-photography-artistic.jpg",
    imageCount: 15,
    category: "Abstract",
    description: "Experimental photography pushing creative boundaries.",
    images: [
      { url: "/abstract-light-patterns.png", title: "Light Play", isBest: true },
      { url: "/abstract-colors.jpg", title: "Color Study" },
      { url: "/abstract-textures.jpg", title: "Textures" },
    ],
  },
]

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Sarah Mitchell",
    role: "Bride",
    content: "Zsófia captured our wedding day perfectly. Every photo tells a story and brings back beautiful memories.",
    image: "/woman-portrait.png",
  },
  {
    id: "2",
    name: "David Chen",
    role: "Creative Director",
    content: "Working with Zsófia was a dream. Her eye for detail and creative vision elevated our brand campaign.",
    image: "/thoughtful-man-portrait.png",
  },
  {
    id: "3",
    name: "Emma Rodriguez",
    role: "Model",
    content: "The portrait session was comfortable and fun. Zsófia knows how to bring out the best in people.",
    image: "/diverse-woman-smiling.png",
  },
  {
    id: "4",
    name: "Michael Thompson",
    role: "Business Owner",
    content: "Professional, creative, and reliable. The commercial photos exceeded our expectations.",
    image: "/confident-businessman.png",
  },
  {
    id: "5",
    name: "Lisa Anderson",
    role: "Art Director",
    content: "Zsófia's unique perspective and artistic approach make her stand out. Highly recommended!",
    image: "/professional-woman.png",
  },
  {
    id: "6",
    name: "James Wilson",
    role: "Groom",
    content: "Our wedding photos are absolutely stunning. Zsófia captured moments we didn't even know happened!",
    image: "/smiling-man.png",
  },
]

// Get all best pictures across projects
export function getBestPictures(): Array<ProjectImage & { projectId: string; projectTitle: string }> {
  const bestPictures: Array<ProjectImage & { projectId: string; projectTitle: string }> = []

  projects.forEach((project) => {
    if (project.hasSubfolders && project.subfolders) {
      project.subfolders.forEach((subfolder) => {
        subfolder.images.forEach((image) => {
          if (image.isBest) {
            bestPictures.push({
              ...image,
              projectId: project.id,
              projectTitle: project.title,
            })
          }
        })
      })
    } else {
      project.images.forEach((image) => {
        if (image.isBest) {
          bestPictures.push({
            ...image,
            projectId: project.id,
            projectTitle: project.title,
          })
        }
      })
    }
  })

  return bestPictures
}
