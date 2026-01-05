

const CLOUDINARY_PROJECT_URL_BASE = "https://res.cloudinary.com/da5o0fitn/image/upload/q_auto,f_auto/v1761932079/portfolio/projects"

export const services = [
/* Service Template
  {
    id: "1", // number 
    title: "Service Name", // whatever you want to show up on the page
    description:
      "Comprehensive wedding coverage from preparation to reception, capturing every precious moment of your special day.",
      // string to describe the service
    exampleProjects: [
      {
        id: "wedding-1", // SAME as the project ID in lib/data-projects.ts > "id"
        title: "Summer Wedding Collection", // string, ideally same as in lib/data-projects.ts
        year: 2025, // same in the lib/data-projects.ts
        imageCount: 24, // same as lib/data-projects.ts
        image: "/summer-wedding-photography.jpg", // cover-image link
      },
    ],
  },
*/
  {
    id: "1",
    title: "fesztiválok és rendezvények",
    description:
      "Szeretek embereket fotózni, nem valami fétisként, csupán szépek az emberek, szóval alább látsz szép képeket(elfogult vagyok, tudom) szép emberekről. Legyen az egy fesztivál, egy családi esemény vagy akármi más, ahol emberek vannak és történik valami, hívj bátran fotózni. Szeretem megörökíteni a pillanatokat, az érzelmeket és a hangulatot, ami egy eseményt különlegessé tesz.",
    exampleProjects: [
      {
        id: "bankito",
        title: "nyári fesztivál lesgo",
        year: 2025,
        imageCount: 24,
        subfolderCount: 4,
        image: `${CLOUDINARY_PROJECT_URL_BASE}/bankito/nap-0/nap-0-10.jpg`,
      },
    ],
  },
  {
    id: "2",
    title: "portréfotózás",
    description:
      "Durran a LinkedIn vagy épp a Tinderre kéne egy-két jó fotó magadról? Esetleg más célra? Akármi is legyen, megelőlegezem, hogy egy kellemes időt fogsz velem eltölteni, amíg lövünk rólad pár képet, szóval mindenképp megéri. Írj és keress, addig meg nézz rá pár képre másokról, amiket én csináltam. ",
    exampleProjects: [
      {
        id: "portraits-1",
        title: "nyugi, nemsoká nézegethetsz itt is képeket, még work in progress a weboldal :D",
        year: 2025,
        imageCount: 15,
        image: "/professional-portrait.png",
      },
    ],
  },
  {
    id: "3",
    title: "koncert és banda fotózás",
    description:
      "Szerelmem, legjobb dolog a világon. Minden koncert és minden helyszín más. A zenekar tagjai gyönyörűek a színpadon, a közönség is szintúgy lenyűgöző. Hívj fotózni és nem csak a koncert lesz király, hanem az emlékek is róla (micsoda catchy mondat, nem? most álltam vele elő, lol). Találsz képeket zenekarok fotózásáról is, azt is nagyon szeretem, amikor közösen életre hozunk egy ötletet, szóval küldd azt a Pinterest board-ot, ami már rég birizgálja a zenekarod fantáziáját vagy csak válaszolj pár kérdésemre és csinálunk valami jót.",
    exampleProjects: [
      {
        id: "hipnozia-20251004",
        title: "Hipnózia koncert a kelenvölgyi közösségi háznál",
        year: 2025,
        imageCount: 121,
        image: `${CLOUDINARY_PROJECT_URL_BASE}/hipnozia-20251004/kosibazsofia_20251004_hipnozia_36.jpg`,
      },
      {
        id: "sargahaz",
        title: "Sárgaház koncert a Balzac nyárzárón",
        year: 2025,
        imageCount: 76,
        image: `${CLOUDINARY_PROJECT_URL_BASE}/sargahaz/kosibazsofia_20250829_sargahaz_54.jpg`,
      },
    ],
  },
]