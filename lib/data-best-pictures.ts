export interface BestPicture {
  id: string
  title: string
  image: string
}

const CLOUDINARY_BASE = 
"https://res.cloudinary.com/da5o0fitn/image/upload/q_auto,f_auto/v1761992999/portfolio/best-pictures"

const TOTAL_IMAGES = 13

export const bestPictures: BestPicture[] = Array.from({ length: TOTAL_IMAGES }, (_, i) => {
  const id = (i + 1).toString()
  return {
    id,
    title: `Best Picture ${id}`, // or replace dynamically from another list
    image: `${CLOUDINARY_BASE}/best-picture_${id}.jpg`
  }
})
