"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/src/components/ui/button"
import { ArrowLeft } from "lucide-react"
import { GalleryModal } from "@/src/components/gallery-modal"

const bestPictures = [
  {
    id: 1,
    src: "/best-1-mountain-landscape.jpg",
    title: "Mountain Majesty",
    category: "Landscape",
    description: "Captured at sunrise in the Swiss Alps",
  },
  {
    id: 2,
    src: "/best-2-wedding-moment.jpg",
    title: "First Dance",
    category: "Wedding",
    description: "An intimate moment between newlyweds",
  },
  {
    id: 3,
    src: "/best-3-portrait.jpg",
    title: "Natural Beauty",
    category: "Portrait",
    description: "Studio portrait with natural lighting",
  },
  {
    id: 4,
    src: "/best-4-architecture.jpg",
    title: "Modern Lines",
    category: "Architecture",
    description: "Contemporary building design",
  },
  {
    id: 5,
    src: "/best-5-nature.jpg",
    title: "Wildlife Wonder",
    category: "Nature",
    description: "Rare bird species in natural habitat",
  },
  {
    id: 6,
    src: "/best-6-street.jpg",
    title: "Urban Life",
    category: "Street",
    description: "Candid moment in the city",
  },
  {
    id: 7,
    src: "/best-7-product.jpg",
    title: "Luxury Watch",
    category: "Commercial",
    description: "High-end product photography",
  },
  {
    id: 8,
    src: "/best-8-event.jpg",
    title: "Concert Energy",
    category: "Event",
    description: "Live music performance capture",
  },
  {
    id: 9,
    src: "/best-9-fashion.jpg",
    title: "Fashion Forward",
    category: "Fashion",
    description: "Editorial fashion shoot",
  },
  {
    id: 10,
    src: "/best-10-food.jpg",
    title: "Culinary Art",
    category: "Food",
    description: "Fine dining presentation",
  },
  {
    id: 11,
    src: "/best-11-sunset.jpg",
    title: "Golden Horizon",
    category: "Landscape",
    description: "Coastal sunset panorama",
  },
  {
    id: 12,
    src: "/best-12-family.jpg",
    title: "Family Joy",
    category: "Portrait",
    description: "Multi-generational family portrait",
  },
]

export default function BestPicturesPage() {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null)

  const handleNext = () => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((selectedImageIndex + 1) % bestPictures.length)
    }
  }

  const handlePrevious = () => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((selectedImageIndex - 1 + bestPictures.length) % bestPictures.length)
    }
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
              <Link href="/best-pictures" className="text-sm font-medium text-primary">
                Best Pictures
              </Link>
              <Link href="/projects" className="text-sm hover:text-primary transition-colors">
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
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-balance">Best Pictures</h1>
          <p className="text-lg text-muted-foreground max-w-2xl text-pretty">
            A curated collection of my finest work spanning various photography styles and subjects. Each image tells a
            unique story and represents the pinnacle of my craft.
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="pb-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {bestPictures.map((picture, index) => (
              <div
                key={picture.id}
                className="group relative aspect-[4/5] rounded-lg overflow-hidden cursor-pointer"
                onClick={() => setSelectedImageIndex(index)}
              >
                <img
                  src={picture.src || "/placeholder.svg"}
                  alt={picture.title}
                  className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <div className="text-xs font-semibold mb-2 text-white/80">{picture.category}</div>
                    <h3 className="text-xl font-bold mb-2">{picture.title}</h3>
                    <p className="text-sm text-white/90">{picture.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-muted/50">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-4">Inspired by What You See?</h2>
          <p className="text-lg text-muted-foreground mb-8">Let's create stunning images for your next project</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button asChild size="lg">
              <Link href="/about#contact">Start Your Project</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/projects">View All Projects</Link>
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

      {selectedImageIndex !== null && (
        <GalleryModal
          images={bestPictures}
          currentIndex={selectedImageIndex}
          onClose={() => setSelectedImageIndex(null)}
          onNext={handleNext}
          onPrevious={handlePrevious}
        />
      )}
    </div>
  )
}
