import Link from "next/link"
import { projects } from "@/lib/mock-data"
import { ProjectCard } from "@/components/project-card"
import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"

export function ProjectsSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold mb-12 text-center animate-fade-in-up">Projects</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {projects.slice(0, 6).map((project) => (
            <ProjectCard
              key={project.id}
              id={project.id}
              title={project.title}
              imageCount={project.imageCount}
              coverImage={project.coverImage}
              href={`/projects/${project.id}`}
            />
          ))}
        </div>

        <div className="text-center">
          <Button asChild size="lg" className="group">
            <Link href="/projects">
              Welcome to My Project Gallery
              <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
