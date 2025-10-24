"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, ImageIcon } from "lucide-react"

const categories = ["All", "Wedding", "Portrait", "Commercial", "Event", "Landscape", "Fashion"]

const projects = [
  {
    id: 1,
    title: "Sarah & John's Wedding",
    category: "Wedding",
    date: "June 2024",
    hasSubfolders: true,
    subfolders: [
      {
        name: "Ceremony",
        images: ["/project-wedding-1.jpg", "/project-wedding-2.jpg"],
      },
      {
        name: "Reception",
        images: ["/project-wedding-3.jpg", "/project-wedding-4.jpg"],
      },
      {
        name: "Portraits",
        images: ["/project-wedding-5.jpg", "/project-wedding-6.jpg"],
      },
    ],
    imageCount: 6,
    description: "A beautiful summer wedding at a countryside venue",
    coverImage: "/project-wedding-1.jpg",
  },
  {
    id: 2,
    title: "Corporate Headshots - Tech Startup",
    category: "Portrait",
    date: "May 2024",
    hasSubfolders: false,
    images: ["/project-portrait-1.jpg", "/project-portrait-2.jpg", "/project-portrait-3.jpg"],
    imageCount: 3,
    description: "Professional headshots for a growing tech company",
    coverImage: "/project-portrait-1.jpg",
  },
  {
    id: 3,
    title: "Luxury Watch Campaign",
    category: "Commercial",
    date: "April 2024",
    hasSubfolders: true,
    subfolders: [
      {
        name: "Product Shots",
        images: ["/project-commercial-1.jpg", "/project-commercial-2.jpg"],
      },
      {
        name: "Lifestyle",
        images: ["/project-commercial-3.jpg", "/project-commercial-4.jpg"],
      },
    ],
    imageCount: 4,
    description: "High-end product photography for luxury timepieces",
    coverImage: "/project-commercial-1.jpg",
  },
  {
    id: 4,
    title: "Annual Gala Event",
    category: "Event",
    date: "March 2024",
    hasSubfolders: false,
    images: ["/project-event-1.jpg", "/project-event-2.jpg", "/project-event-3.jpg", "/project-event-4.jpg"],
    imageCount: 4,
    description: "Coverage of a charity gala with 500+ attendees",
    coverImage: "/project-event-1.jpg",
  },
  {
    id: 5,
    title: "Mountain Expedition",
    category: "Landscape",
    date: "February 2024",
    hasSubfolders: true,
    subfolders: [
      {
        name: "Peaks",
        images: ["/project-landscape-1.jpg", "/project-landscape-2.jpg"],
      },
      {
        name: "Valleys",
        images: ["/project-landscape-3.jpg", "/project-landscape-4.jpg"],
      },
      {
        name: "Wildlife",
        images: ["/project-landscape-5.jpg"],
      },
    ],
    imageCount: 5,
    description: "Breathtaking landscapes from a week-long mountain trek",
    coverImage: "/project-landscape-1.jpg",
  },
  {
    id: 6,
    title: "Spring Fashion Editorial",
    category: "Fashion",
    date: "January 2024",
    hasSubfolders: false,
    images: ["/project-fashion-1.jpg", "/project-fashion-2.jpg", "/project-fashion-3.jpg"],
    imageCount: 3,
    description: "Editorial shoot for a fashion magazine's spring collection",
    coverImage: "/project-fashion-1.jpg",
  },
  {
    id: 7,
    title: "Emma & David's Engagement",
    category: "Portrait",
    date: "December 2023",
    hasSubfolders: true,
    subfolders: [
      {
        name: "Beach",
        images: ["/project-engagement-1.jpg", "/project-engagement-2.jpg"],
      },
      {
        name: "Sunset",
        images: ["/project-engagement-3.jpg", "/project-engagement-4.jpg"],
      },
    ],
    imageCount: 4,
    description: "Romantic engagement session at sunset",
    coverImage: "/project-engagement-1.jpg",
  },
  {
    id: 8,
    title: "Restaurant Menu Photography",
    category: "Commercial",
    date: "November 2023",
    hasSubfolders: false,
    images: ["/project-food-1.jpg", "/project-food-2.jpg", "/project-food-3.jpg"],
    imageCount: 3,
    description: "Mouth-watering food photography for upscale restaurant",
    coverImage: "/project-food-1.jpg",
  },
]

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All")

  const filteredProjects =
    selectedCategory === "All" ? projects : projects.filter((project) => project.category === selectedCategory)

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

      {/* Header */}
      <section className="pt-32 pb-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <Button asChild variant="ghost" className="mb-6">
            <Link href="/">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Link>
          </Button>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-balance">Project Gallery</h1>
          <p className="text-lg text-muted-foreground max-w-2xl text-pretty">
            Explore my complete portfolio of photography projects across various categories and styles.
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="pb-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                size="sm"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="pb-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-8">
            {filteredProjects.map((project) => (
              <Link
                key={project.id}
                href={`/projects/${project.id}`}
                className="group block rounded-lg overflow-hidden border border-border hover:border-primary transition-colors"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={project.coverImage || "/placeholder.svg"}
                    alt={project.title}
                    className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                  />
                  <Badge className="absolute top-4 left-4">{project.category}</Badge>
                  <Badge variant="secondary" className="absolute top-4 right-4 bg-black/50 text-white border-0">
                    <ImageIcon className="h-3 w-3 mr-1" />
                    {project.imageCount}
                  </Badge>
                </div>
                <div className="p-6">
                  <div className="text-sm text-muted-foreground mb-2">{project.date}</div>
                  <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  <div className="flex items-center gap-2 text-sm text-primary font-medium">
                    View Project
                    <ArrowLeft className="h-4 w-4 rotate-180 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-20">
              <p className="text-lg text-muted-foreground">No projects found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-muted/50">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Project?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Let's discuss how we can create stunning images for your needs
          </p>
          <Button asChild size="lg">
            <Link href="/about#contact">Get in Touch</Link>
          </Button>
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
