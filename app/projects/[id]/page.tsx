"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Calendar, Tag, ImageIcon } from "lucide-react"
import { notFound } from "next/navigation"
import { GalleryModal } from "@/components/gallery-modal"
import { ProjectGallery } from "@/components/project-gallery"


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
    description: "A beautiful summer wedding at a countryside venue",
    fullDescription:
      "Sarah and John's wedding was a magical celebration of love set against the backdrop of a stunning countryside estate. The day was filled with joy, laughter, and unforgettable moments. From the intimate ceremony to the lively reception, every detail was captured with care and artistry.",
    location: "Countryside Estate, Vermont",
    client: "Sarah & John",
  },
  {
    id: 2,
    title: "Corporate Headshots - Tech Startup",
    category: "Portrait",
    date: "May 2024",
    hasSubfolders: false,
    images: ["/project-portrait-1.jpg", "/project-portrait-2.jpg", "/project-portrait-3.jpg"],
    description: "Professional headshots for a growing tech company",
    fullDescription:
      "A comprehensive headshot session for a rapidly growing tech startup. The goal was to create professional, approachable portraits that reflect the company's innovative culture while maintaining a polished corporate aesthetic.",
    location: "Studio, San Francisco",
    client: "TechVenture Inc.",
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
    description: "High-end product photography for luxury timepieces",
    fullDescription:
      "An elegant product photography campaign showcasing a collection of luxury watches. Each piece was meticulously lit and styled to highlight the craftsmanship and premium quality of these exceptional timepieces.",
    location: "Studio, New York",
    client: "Prestige Watches",
  },
  {
    id: 4,
    title: "Annual Gala Event",
    category: "Event",
    date: "March 2024",
    hasSubfolders: false,
    images: ["/project-event-1.jpg", "/project-event-2.jpg", "/project-event-3.jpg", "/project-event-4.jpg"],
    description: "Coverage of a charity gala with 500+ attendees",
    fullDescription:
      "Complete event coverage of a prestigious charity gala attended by over 500 guests. The photography captured the elegance of the evening, key moments from speeches and performances, and the energy of the celebration.",
    location: "Grand Ballroom, Chicago",
    client: "Hope Foundation",
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
    description: "Breathtaking landscapes from a week-long mountain trek",
    fullDescription:
      "A week-long expedition through pristine mountain wilderness, capturing the raw beauty of nature. From sunrise vistas to dramatic weather conditions, this collection showcases the majesty of the natural world.",
    location: "Rocky Mountains, Colorado",
    client: "Personal Project",
  },
  {
    id: 6,
    title: "Spring Fashion Editorial",
    category: "Fashion",
    date: "January 2024",
    hasSubfolders: false,
    images: ["/project-fashion-1.jpg", "/project-fashion-2.jpg", "/project-fashion-3.jpg"],
    description: "Editorial shoot for a fashion magazine's spring collection",
    fullDescription:
      "A vibrant fashion editorial featuring the latest spring collection. Shot on location with natural lighting, the images capture the energy and freshness of the new season's designs.",
    location: "Urban Location, Los Angeles",
    client: "Style Magazine",
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
    description: "Romantic engagement session at sunset",
    fullDescription:
      "A romantic engagement session capturing Emma and David's love story. Shot during golden hour at their favorite beach, the images reflect their genuine connection and excitement for their future together.",
    location: "Coastal Beach, California",
    client: "Emma & David",
  },
  {
    id: 8,
    title: "Restaurant Menu Photography",
    category: "Commercial",
    date: "November 2023",
    hasSubfolders: false,
    images: ["/project-food-1.jpg", "/project-food-2.jpg", "/project-food-3.jpg"],
    description: "Mouth-watering food photography for upscale restaurant",
    fullDescription:
      "Appetizing food photography for an upscale restaurant's new menu. Each dish was styled and photographed to highlight the culinary artistry and premium ingredients that define the restaurant's cuisine.",
    location: "Restaurant Location, Boston",
    client: "Gourmet Bistro",
  },
]

export default function ProjectDetailPage({ params }: { params: { id: string } }) {
  

  const project = projects.find((p) => p.id === Number.parseInt(params.id))

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
