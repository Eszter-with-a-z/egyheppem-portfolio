export interface BestPicture {
  id: string
  title: string
  year: number
  image: string
  projectId: string
}



export const bestPictures: BestPicture[] = [
  {
    id: "1",
    title: "Golden Hour Portrait",
    year: 2025,
    image: "/golden-hour-portrait-photography.jpg",
    projectId: "wedding-1",
  },
  {
    id: "2",
    title: "Urban Architecture",
    year: 2025,
    image: "/modern-urban-architecture-photography.jpg",
    projectId: "architecture-1",
  },
  {
    id: "3",
    title: "Natural Light",
    year: 2025,
    image: "/natural-light-portrait.png",
    projectId: "portraits-1",
  },
  {
    id: "4",
    title: "Candid Moment",
    year: 2025,
    image: "/candid-wedding-moment-photography.jpg",
    projectId: "wedding-1",
  },
  {
    id: "5",
    title: "Minimalist Composition",
    year: 2025,
    image: "/minimalist-architecture.png",
    projectId: "architecture-1",
  },
  {
    id: "6",
    title: "Emotional Connection",
    year: 2025,
    image: "/emotional-portrait-photography.jpg",
    projectId: "portraits-1",
  },
]
