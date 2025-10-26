"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { services } from "@/lib/mock-data"
import { ProjectCard } from "@/components/project-card"

export function ServicesSection() {
  const [openService, setOpenService] = useState<string | null>(null)

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/30">
      <div className="container mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold mb-12 text-center animate-fade-in-up">Services</h2>

        <div className="max-w-4xl mx-auto space-y-4">
          {services.map((service) => (
            <div
              key={service.id}
              className="border border-border rounded-lg overflow-hidden bg-card transition-all duration-300 hover:border-primary/50"
            >
              <button
                onClick={() => setOpenService(openService === service.id ? null : service.id)}
                className="w-full flex items-center justify-between p-6 text-left transition-colors hover:bg-secondary/50"
              >
                <h3 className="text-xl font-semibold">{service.title}</h3>
                <ChevronDown
                  className={`transition-transform duration-300 ${openService === service.id ? "rotate-180" : ""}`}
                  size={24}
                />
              </button>

              {openService === service.id && (
                <div className="p-6 pt-0 animate-fade-in">
                  <p className="text-muted-foreground mb-6">{service.description}</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {service.exampleProjects.map((project) => (
                      <ProjectCard
                        key={project.id}
                        id={project.id}
                        title={project.title}
                        imageCount={project.imageCount}
                        coverImage={project.image}
                        href={`/projects/${project.id}`}
                      />
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
