import { projects } from "@/lib/mock-data"
import { ProjectPageClient } from "./client"

export function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id,
  }))
}

export default function ProjectPage() {
  return <ProjectPageClient />
}
