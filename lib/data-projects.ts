
export interface Project {
  id: string
  title: string
  year:number
  imageCount: number
  coverImage: string
  description: string
  subfolderCount?: number
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
const CLOUDINARY_PROJECT_URL_BASE = "https://res.cloudinary.com/da5o0fitn/image/upload/q_auto,f_auto/v1761932079/portfolio/projects"

/* Example of project with subfolder
  {
    id: "esze-tamas", // REPLACE WITH hyphen-seperated-no-accent-chars-lowercase
    title: Esze Tamás zenekar a Művészetek Völgyén", //REPLACE WITH any string you want to see on your page
    year: 2025, //REPLACE WITH number
    imageCount: 24, //REPLACE WITH number
    coverImage: `${CLOUDINARY_PROJECT_URL_BASE}/schichederek/kosibazsofi_20251005_Schihederek_4.jpg`,
    // ^^ REPLACE after ${CLOUDINARY_PROJECT_URL_BASE} WITH the end of the cloudinary URL (/project-name/(subfolder-name)/file-name.jpg)
    description: "xxx", //REPLACE WITH any short desciption you want on your page
    subfolderCount: 2,
    subfolders: [
      // Subfolder Template - copy-paste if needed 
      {
        id: "nap-0", // REPLACE WITH hyphen-seperated-no-accent-chars-lowercase
        title: "0. nap", //REPLACE WITH any string you want to see on your page
        imageCount: 12, //REPLACE WITH number
        coverImage: `${CLOUDINARY_PROJECT_URL_BASE}/example.png`,
        // ^^ REPLACE after ${CLOUDINARY_PROJECT_URL_BASE} WITH the end of the cloudinary URL (/project-name/(subfolder-name)/file-name.jpg)
        images: Array.from(
          { length: 12 }, //REPLACE WITH number - same az imageCount
          (_, i) => `${CLOUDINARY_PROJECT_URL_BASE}/esze-tamas/muvvolgy_2025_07_18-${i+1}.jpg`,
                    // (1) // ^^ REPLACE after ${CLOUDINARY_PROJECT_URL_BASE} WITH the end of the cloudinary URL (/project-name/(subfolder-name)/file-name.jpg)
                    // (2) Replace the last digits of the file name
                          // with ${i+1}, if the numbering in File Names starts with 1, 
                          // and ${i} if it starts with 0
        ),
      },
      // End of Subfolder Template
      // PASTE YOUR NEW SUBFOLDER HERE

    ],
  }, 
  /*end of example of project with subfolder*/


/* Example of project with a single folder
  {
    id: "esze-tamas-single", // REPLACE WITH hyphen-seperated-no-accent-chars-lowercase
    title: Esze Tamás zenekar a Művészetek Völgyén egy mappában", //REPLACE WITH any string you want to see on your page
    year: 2025, //REPLACE WITH number
    imageCount: 24, //REPLACE WITH number
    coverImage: `${CLOUDINARY_PROJECT_URL_BASE}/project-name/example.png`,
        // ^^ REPLACE after ${CLOUDINARY_PROJECT_URL_BASE} WITH the end of the cloudinary URL (/project-name/(subfolder-name)/file-name.jpg)
        images: Array.from(
          { length: 143 }, //REPLACE WITH number - same az imageCount
          (_, i) => ``${CLOUDINARY_PROJECT_URL_BASE}/esze-tamas/muvvolgy_2025_07_18-${i+1}.jpg`,
                    // (1) ^^^^ REPLACE WITH cloudinary URL of any image from the folder
                    // (2) Replace the last digits of the file name
                          //  with ${i+1}, if the numbering in File Names starts with 1, 
                          // and ${i} if it starts with 0
                    // (3) add q_auto,f_auto/ between upload/ and v17XX in the URL for faster loading
        ),
  },
End of example of single-folder project*/

export const projects: Project[] = [
    {
    id: "bankito",
    title: "Bánkitó",
    year: 2025,
    imageCount: 24,
    coverImage: `${CLOUDINARY_PROJECT_URL_BASE}/bankito/nap-0/nap-0-10.jpg`,
    description: "xxx",
    subfolderCount: 4,
    subfolders: [
      {
        id: "nap-0",
        title: "0. nap",
        imageCount: 18,
        coverImage: `${CLOUDINARY_PROJECT_URL_BASE}/bankito/nap-0/nap-0-4.jpg`,
        images: Array.from(
          { length: 18 },
          (_, i) => `${CLOUDINARY_PROJECT_URL_BASE}/bankito/nap-0/nap-0-${i}.jpg`,
        ),
      },
      {
        id: "nap-1",
        title: "1. nap",
        imageCount: 167,
        coverImage: `${CLOUDINARY_PROJECT_URL_BASE}/bankito/nap-1/nap-1_125.jpg`,
        images: Array.from(
          { length: 167 },
          (_, i) => `${CLOUDINARY_PROJECT_URL_BASE}/bankito/nap-1/nap-1_${i + 1}.jpg`,
        ),
      },
      {
        id: "nap-2",
        title: "2. nap",
        imageCount: 86,
        coverImage: `${CLOUDINARY_PROJECT_URL_BASE}/bankito/nap-2/nap-2_83.jpg`,
        images: Array.from(
          { length: 86 },
          (_, i) => `${CLOUDINARY_PROJECT_URL_BASE}/bankito/nap-2/nap-2_${i + 1}.jpg`,
        ),
      },
      {
        id: "nap-3",
        title: "3. nap",
        imageCount: 141,
        coverImage: `${CLOUDINARY_PROJECT_URL_BASE}/bankito/nap-3/nap-3_124.jpg`,
        images: Array.from(
          { length: 141 },
          (_, i) => `${CLOUDINARY_PROJECT_URL_BASE}/bankito/nap-3/nap-3_${i + 1}.jpg`,
        ),
      },
    ],
  }, 
  {
    id: "esze-tamas",
    title: "esze tamás zenekar a Művészetek Völgyén",
    year: 2025,
    imageCount: 144,
    coverImage: `${CLOUDINARY_PROJECT_URL_BASE}/esze-tamas/kosibazsofia_muvvolgy_eszetamas_20250718_112.jpg`,
    description: "bolond egy zenekar, tartós emlékek.",
    images: Array.from(
          { length: 206 },
          (_, i) => `${CLOUDINARY_PROJECT_URL_BASE}/esze-tamas/kosibazsofia_muvvolgy_eszetamas_20250718_${i}.jpg`,
        ),
  },
    {
    id: "schichederek",
    title: "Schichederek az A38-on",
    year: 2025,
    imageCount: 101,
    coverImage: `${CLOUDINARY_PROJECT_URL_BASE}/schichederek/kosibazsofi_20251005_Schihederek_98.jpg`,
    description: "Nagyon nagy dolog volt nekem fotózni az A38 hajón.",
    images: Array.from(
          { length: 101 },
          (_, i) => `${CLOUDINARY_PROJECT_URL_BASE}/schichederek/kosibazsofi_20251005_Schihederek_${i+1}.jpg`,
        ),
  },
  {
    id: "sargahaz",
    title: "Sárgaház koncert a Balzac nyárzárón",
    year: 2025,
    imageCount: 76,
    coverImage: `${CLOUDINARY_PROJECT_URL_BASE}/sargahaz/kosibazsofia_20250829_sargahaz_54.jpg`,
    description: "Nagyon jó helyszín és hangulat és emberek. A billentyűst ismertem korábbról és hívtam egyszer a srácokat fellépni az Aurórába, ők meg hívtak engem fotózni erre az alkalomra. Nagyon ajánlom a zenéjüket!",
    images: Array.from(
          { length: 76 },
          (_, i) => `${CLOUDINARY_PROJECT_URL_BASE}/sargahaz/kosibazsofia_20250829_sargahaz_${i+1}.jpg`,
        ),
  },
  // End of project
  //PASTE THE NEW PROJECT HERE

] // End of Projects 


