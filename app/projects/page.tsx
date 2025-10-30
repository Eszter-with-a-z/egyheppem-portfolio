"use client"

import { useEffect } from "react"
import { projects } from "@/lib/data-projects"
import { ProjectCard } from "@/components/project-card"

export default function ProjectsPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <main className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <h1 className="text-4xl sm:text-5xl font-bold mb-12 text-center animate-fade-in-up">Project Gallery</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              id={project.id}
              title={project.title}
              year={project.year}
              imageCount={project.imageCount}
              coverImage={project.coverImage}
              href={`/projects/${project.id}`}
            />
          ))}
        </div>
      </div>
    </main>
  )
}
