

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
    title: "fesztivál hupsz",
    description:
      "Comprehensive wedding coverage from preparation to reception, capturing every precious moment of your special day.",
    exampleProjects: [
      {
        id: "wedding-1",
        title: "nyári fesztivál lesgo",
        year: 2025,
        imageCount: 24,
        image: `${CLOUDINARY_PROJECT_URL_BASE}/bankito/nap-0/nap-0-10.jpg`,
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
        year: 2025,
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
        year: 2025,
        imageCount: 16,
        image: "/corporate-event-networking.png",
      },
    ],
  },
]