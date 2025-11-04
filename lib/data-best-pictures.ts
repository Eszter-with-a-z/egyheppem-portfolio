export interface BestPicture {
  id: string // number it manually
  title: string // What you want to show up on the slideshow
  image: string // `${CLOUDINARY_BASE}/project-name/image-name.jpg`
  projectId: string // MUST BE THE SAME as lib/data-projects > Project > "id: string"
}

const CLOUDINARY_BASE = 
"https://res.cloudinary.com/da5o0fitn/image/upload/q_auto,f_auto/v1761992999/portfolio/projects"



export const bestPictures: BestPicture[] = [
  /* bestPicture template
  {
    id:'1',
    title: `Kedvenc képeim válogatás,kép`,
    image: `${CLOUDINARY_BASE}/project-name/image-name.jpg`,
    projectId:`project-name`
  },
  END of bestPicture template*/
  {
    id:'1',
    title: `Kedvenc képeim válogatás,kép`,
    image: `${CLOUDINARY_BASE}/bankito/nap-3/nap-3_137.jpg`,
    projectId:`bankito/nap-3`
  },
  {
    id:'2',
    title: `Kedvenc képeim válogatás,kép`,
    image: `${CLOUDINARY_BASE}/bankito/nap-2/nap-2_77.jpg`,
    projectId:`bankito/nap-2`    
  },
  {
    id:'3',
    title: `Kedvenc képeim válogatás,kép`,
    image: `${CLOUDINARY_BASE}/bankito/nap-1/nap-1_120.jpg`,
    projectId:`bankito/nap-1`
    
  },
    {
    id:'4',
    title: `Kedvenc képeim válogatás,kép`,
    image: `${CLOUDINARY_BASE}/bankito/nap-0/nap-0-18.jpg`,
    projectId:`bankito/nap-0`
  },
]
