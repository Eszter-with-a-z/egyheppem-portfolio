export interface Project {
  id: string
  title: string
  imageCount: number
  coverImage: string
  description: string
  hasSubfolders?: boolean
  subfolders?: Subfolder[]
  images?: string[]
}

export interface Subfolder {
  id: string
  title: string
  imageCount: number
  coverImage: string
  images: string[]
}

export interface BestPicture {
  id: string
  title: string
  image: string
  projectId: string
}

export interface Testimonial {
  id: string
  name: string
  text: string
  role?: string
}

export const bestPictures: BestPicture[] = [
  {
    id: "1",
    title: "Golden Hour Portrait",
    image: "/golden-hour-portrait-photography.jpg",
    projectId: "wedding-1",
  },
  {
    id: "2",
    title: "Urban Architecture",
    image: "/modern-urban-architecture-photography.jpg",
    projectId: "architecture-1",
  },
  {
    id: "3",
    title: "Natural Light",
    image: "/natural-light-portrait.png",
    projectId: "portraits-1",
  },
  {
    id: "4",
    title: "Candid Moment",
    image: "/candid-wedding-moment-photography.jpg",
    projectId: "wedding-1",
  },
  {
    id: "5",
    title: "Minimalist Composition",
    image: "/minimalist-architecture.png",
    projectId: "architecture-1",
  },
  {
    id: "6",
    title: "Emotional Connection",
    image: "/emotional-portrait-photography.jpg",
    projectId: "portraits-1",
  },
]

export const projects: Project[] = [
  {
    id: "wedding-1",
    title: "Summer Wedding Collection",
    imageCount: 24,
    coverImage: "/summer-wedding-photography.jpg",
    description: "A beautiful summer wedding capturing love and joy in every moment.",
    hasSubfolders: true,
    subfolders: [
      {
        id: "ceremony",
        title: "Ceremony",
        imageCount: 12,
        coverImage: "/wedding-ceremony.png",
        images: Array.from(
          { length: 12 },
          (_, i) => `/placeholder.svg?height=800&width=600&query=wedding ceremony photo ${i + 1}`,
        ),
      },
      {
        id: "reception",
        title: "Reception",
        imageCount: 12,
        coverImage: "/wedding-reception-photography.jpg",
        images: Array.from(
          { length: 12 },
          (_, i) => `/placeholder.svg?height=800&width=600&query=wedding reception photo ${i + 1}`,
        ),
      },
    ],
  },
  {
    id: "architecture-1",
    title: "Modern Architecture Series",
    imageCount: 18,
    coverImage: "/modern-architecture.png",
    description: "Exploring lines, shapes, and light in contemporary architecture.",
    images: Array.from(
      { length: 18 },
      (_, i) => `/placeholder.svg?height=800&width=600&query=modern architecture photo ${i + 1}`,
    ),
  },
  {
    id: "portraits-1",
    title: "Portrait Sessions",
    imageCount: 15,
    coverImage: "/professional-portrait.png",
    description: "Capturing personality and emotion through intimate portrait sessions.",
    hasSubfolders: true,
    subfolders: [
      {
        id: "studio",
        title: "Studio Portraits",
        imageCount: 8,
        coverImage: "/studio-portrait.png",
        images: Array.from(
          { length: 8 },
          (_, i) => `/placeholder.svg?height=800&width=600&query=studio portrait photo ${i + 1}`,
        ),
      },
      {
        id: "outdoor",
        title: "Outdoor Portraits",
        imageCount: 7,
        coverImage: "/outdoor-portrait-photography.jpg",
        images: Array.from(
          { length: 7 },
          (_, i) => `/placeholder.svg?height=800&width=600&query=outdoor portrait photo ${i + 1}`,
        ),
      },
    ],
  },
  {
    id: "nature-1",
    title: "Nature & Landscapes",
    imageCount: 20,
    coverImage: "/serene-forest-stream.png",
    description: "The beauty of nature captured in stunning landscapes.",
    images: Array.from(
      { length: 20 },
      (_, i) => `/placeholder.svg?height=800&width=600&query=nature landscape photo ${i + 1}`,
    ),
  },
  {
    id: "events-1",
    title: "Corporate Events",
    imageCount: 16,
    coverImage: "/corporate-event-networking.png",
    description: "Professional coverage of corporate events and conferences.",
    images: Array.from(
      { length: 16 },
      (_, i) => `/placeholder.svg?height=800&width=600&query=corporate event photo ${i + 1}`,
    ),
  },
  {
    id: "fashion-1",
    title: "Fashion Editorial",
    imageCount: 22,
    coverImage: "/fashion-editorial-photography.jpg",
    description: "Bold and creative fashion photography for editorial projects.",
    hasSubfolders: true,
    subfolders: [
      {
        id: "spring",
        title: "Spring Collection",
        imageCount: 11,
        coverImage: "/spring-fashion-photography.jpg",
        images: Array.from(
          { length: 11 },
          (_, i) => `/placeholder.svg?height=800&width=600&query=spring fashion photo ${i + 1}`,
        ),
      },
      {
        id: "winter",
        title: "Winter Collection",
        imageCount: 11,
        coverImage: "/winter-fashion-photography.jpg",
        images: Array.from(
          { length: 11 },
          (_, i) => `/placeholder.svg?height=800&width=600&query=winter fashion photo ${i + 1}`,
        ),
      },
    ],
  },
]

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Sarah Johnson",
    role: "Bride",
    text: "Kosiba captured our wedding day perfectly. Every photo tells a story and brings back beautiful memories. Her eye for detail is incredible!",
  },
  {
    id: "2",
    name: "Michael Chen",
    role: "CEO, TechCorp",
    text: "Professional, creative, and reliable. The corporate event photos exceeded our expectations. Highly recommended!",
  },
  {
    id: "3",
    name: "Emma Williams",
    role: "Model",
    text: "Working with Kosiba is always a pleasure. She knows how to make you feel comfortable and brings out the best in every shot.",
  },
  {
    id: "4",
    name: "David Martinez",
    role: "Architect",
    text: "The architectural photography series perfectly captured the essence of our designs. Stunning work!",
  },
  {
    id: "5",
    name: "Lisa Anderson",
    role: "Fashion Designer",
    text: "Kosiba's fashion editorial work is exceptional. She understands lighting, composition, and how to showcase clothing beautifully.",
  },
  {
    id: "6",
    name: "James Taylor",
    role: "Groom",
    text: "We couldn't be happier with our wedding photos. Kosiba was unobtrusive yet captured every important moment. True artistry!",
  },
]

export const services = [
  {
    id: "1",
    title: "Wedding Photography",
    description:
      "Comprehensive wedding coverage from preparation to reception, capturing every precious moment of your special day.",
    exampleProjects: [
      {
        id: "wedding-1",
        title: "Summer Wedding Collection",
        imageCount: 24,
        image: "/summer-wedding-photography.jpg",
      },
    ],
  },
  {
    id: "2",
    title: "Portrait Sessions",
    description:
      "Professional portrait photography for individuals, families, and corporate headshots in studio or outdoor settings.",
    exampleProjects: [
      {
        id: "portraits-1",
        title: "Portrait Sessions",
        imageCount: 15,
        image: "/professional-portrait.png",
      },
    ],
  },
  {
    id: "3",
    title: "Commercial & Events",
    description:
      "Corporate events, product photography, and commercial projects with professional quality and quick turnaround.",
    exampleProjects: [
      {
        id: "events-1",
        title: "Corporate Events",
        imageCount: 16,
        image: "/corporate-event-networking.png",
      },
    ],
  },
]
