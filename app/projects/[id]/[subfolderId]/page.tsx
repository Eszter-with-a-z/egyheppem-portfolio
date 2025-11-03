import SubfolderPageClient from "./page-client"
import { projects } from "@/lib/data-projects"

export function generateStaticParams() {
  const params: { id: string; subfolderId: string }[] = []

  projects.forEach((project) => {
    if (project.subfolderCount && project.subfolders) {
      project.subfolders.forEach((subfolder) => {
        params.push({
          id: project.id,
          subfolderId: subfolder.id,
        })
      })
    }
  })

  return params
}

export default function SubfolderPage() {
  return <SubfolderPageClient />
}
