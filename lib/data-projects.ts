const CLOUDINARY_BASE_URL = process.env.NEXT_PUBLIC_CLOUDINARY_URL!
// https://res.cloudinary.com/da5o0fitn/image/upload/q_auto,f_auto/v1761845287/portfolio
export interface Project {
  id: string
  title: string
  year:number
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


export const projects: Project[] = [
  {
    id: "esze-tamas",
    title: "Esze Tamás zenekar a Művészetek Völgyén",
    year: 2025,
    imageCount: 3,
    coverImage: `https://res.cloudinary.com/da5o0fitn/image/upload/q_auto,f_auto/v1761845287/portfolio/projects/esze-tamas/image-0.jpg`,
    description: "Exploring lines, shapes, and light in contemporary architecture.",
    images: Array.from(
          { length: 3 },
          (_, i) => `https://res.cloudinary.com/da5o0fitn/image/upload/q_auto,f_auto/v1761845287/portfolio/projects/esze-tamas/image-${i}.jpg`,
        ),
  },
  /* Example of project with subfolder
  {
    id: "wedding-1",
    title: "Summer Wedding Collection",
    year: 2025,
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
  end of example of project with subfolder*/
  /* Example of project with a single folder
  {
    id: "project-1",
    title: "Esze Tamás zenekar a Művészetek Völgyén",
    year: 2025,
    imageCount: 3,
    coverImage: `${CLOUDINARY_BASE_URL}/projects/esze-tamas/image-0.jpg`,
    description: "Exploring lines, shapes, and light in contemporary architecture.",
    images: Array.from(
          { length: 3 },
          (_, i) => `https://res.cloudinary.com/da5o0fitn/image/upload/q_auto,f_auto/v1761845287/portfolio/projects/esze-tamas/image-${i}.jpg`,
        ),
  },
  End of example of single-folder project*/
  {
    id: "portraits-1",
    title: "Portrait Sessions",
    year: 2025,
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
    year: 2025,
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
    year: 2025,
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
    year: 2025,
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
