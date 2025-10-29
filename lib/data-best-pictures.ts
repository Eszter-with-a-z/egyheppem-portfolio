export interface BestPicture {
  id: string
  title: string
  image: string
  projectId: string
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
