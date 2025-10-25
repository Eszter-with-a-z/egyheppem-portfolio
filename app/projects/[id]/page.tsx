import Link from "next/link"
import { Button } from "@/src/components/ui/button"
import { Badge } from "@/src/components/ui/badge"
import { ArrowLeft, Calendar, Tag } from "lucide-react"
import { notFound } from "next/navigation"

import { ProjectGallery } from "@/src/components/project-gallery"
import { projects } from "@/src/data/projects"

export function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id.toString(),
  }))
}

export default async function ProjectDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params

  const project = projects.find((p) => p.id === Number.parseInt(id))

  if (!project) {
    notFound()
  }



  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-2xl font-bold">
              PhotoStudio
            </Link>
            <div className="hidden md:flex items-center gap-8">
              <Link href="/best-pictures" className="text-sm hover:text-primary transition-colors">
                Best Pictures
              </Link>
              <Link href="/projects" className="text-sm font-medium text-primary">
                Projects
              </Link>
              <Link href="/testimonials" className="text-sm hover:text-primary transition-colors">
                Testimonials
              </Link>
              <Link href="/about" className="text-sm hover:text-primary transition-colors">
                About
              </Link>
              <Button asChild size="sm">
                <Link href="/about#contact">Contact</Link>
              </Button>
            </div>
          </div>
        </div>
      </nav>

      <div className="sticky top-[73px] z-40 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto max-w-4xl px-4 py-3">
          <Button asChild variant="ghost" size="sm">
            <Link href="/projects">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Projects
            </Link>
          </Button>
        </div>
      </div>

      {/* Header */}
      <section className="pt-24 pb-12 px-4">
        <div className="container mx-auto max-w-4xl">
          <Badge className="mb-4">{project.category}</Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance">{project.title}</h1>

          <div className="flex flex-wrap gap-6 text-sm text-muted-foreground mb-6">
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              {project.date}
            </div>
            <div className="flex items-center gap-2">
              <Tag className="h-4 w-4" />
              {project.client}
            </div>
          </div>

          <p className="text-lg text-muted-foreground">{project.fullDescription}</p>
        </div>
      </section>

      {/* Image Gallery */}
      <ProjectGallery project={project} />

      {/* Project Details */}
      <section className="py-12 px-4 bg-muted/50">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold mb-6">Project Details</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold mb-2">Category</h3>
              <p className="text-muted-foreground">{project.category}</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Date</h3>
              <p className="text-muted-foreground">{project.date}</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Client</h3>
              <p className="text-muted-foreground">{project.client}</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Location</h3>
              <p className="text-muted-foreground">{project.location}</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-4">Interested in Similar Work?</h2>
          <p className="text-lg text-muted-foreground mb-8">Let's create something amazing together</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button asChild size="lg">
              <Link href="/about#contact">Start Your Project</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/projects">View More Projects</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-border">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold text-lg mb-4">PhotoStudio</h3>
              <p className="text-sm text-muted-foreground">Professional photography services for all occasions</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link href="/projects?category=wedding" className="hover:text-foreground">
                    Weddings
                  </Link>
                </li>
                <li>
                  <Link href="/projects?category=portrait" className="hover:text-foreground">
                    Portraits
                  </Link>
                </li>
                <li>
                  <Link href="/projects?category=commercial" className="hover:text-foreground">
                    Commercial
                  </Link>
                </li>
                <li>
                  <Link href="/projects?category=events" className="hover:text-foreground">
                    Events
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link href="/about" className="hover:text-foreground">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/best-pictures" className="hover:text-foreground">
                    Best Pictures
                  </Link>
                </li>
                <li>
                  <Link href="/testimonials" className="hover:text-foreground">
                    Testimonials
                  </Link>
                </li>
                <li>
                  <Link href="/about#contact" className="hover:text-foreground">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Connect</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-foreground">
                    Instagram
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground">
                    Facebook
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground">
                    Pinterest
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground">
                    LinkedIn
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-border text-center text-sm text-muted-foreground">
            <p>&copy; {new Date().getFullYear()} PhotoStudio. All rights reserved.</p>
          </div>
        </div>
      </footer>


    </div>
  )
}
