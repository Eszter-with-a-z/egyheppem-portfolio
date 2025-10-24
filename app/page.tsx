"use client"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Camera, Award, Users, ArrowRight, ImageIcon } from "lucide-react"
import { FeaturedSlideshow } from "@/components/featured-slideshow"

const featuredSlides = [
  {
    src: "/best-1-mountain-landscape.jpg",
    title: "Mountain Majesty",
    category: "Landscape",
  },
  {
    src: "/best-2-wedding-moment.jpg",
    title: "First Dance",
    category: "Wedding",
  },
  {
    src: "/best-3-portrait.jpg",
    title: "Natural Beauty",
    category: "Portrait",
  },
  {
    src: "/best-5-nature.jpg",
    title: "Wildlife Wonder",
    category: "Nature",
  },
  {
    src: "/best-7-product.jpg",
    title: "Luxury Watch",
    category: "Commercial",
  },
  {
    src: "/best-11-sunset.jpg",
    title: "Golden Horizon",
    category: "Landscape",
  },
]

const featuredProjects = [
  {
    id: 1,
    title: "Sarah & John's Wedding",
    category: "Wedding",
    imageCount: 6,
    coverImage: "/project-wedding-1.jpg",
  },
  {
    id: 2,
    title: "Corporate Headshots - Tech Startup",
    category: "Portrait",
    imageCount: 3,
    coverImage: "/project-portrait-1.jpg",
  },
  {
    id: 3,
    title: "Luxury Watch Campaign",
    category: "Commercial",
    imageCount: 4,
    coverImage: "/project-commercial-1.jpg",
  },
  {
    id: 4,
    title: "Annual Gala Event",
    category: "Event",
    imageCount: 4,
    coverImage: "/project-event-1.jpg",
  },
]

export default function HomePage() {
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

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 text-balance">Capturing Moments That Last Forever</h1>
              <p className="text-lg text-muted-foreground mb-8 text-pretty">
                Professional photography services for weddings, portraits, events, and commercial projects. Let's create
                stunning visual stories together.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg">
                  <Link href="/projects">
                    View Portfolio <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/about#contact">Get in Touch</Link>
                </Button>
              </div>
            </div>
            <div className="relative aspect-[4/5] rounded-lg overflow-hidden">
              <img
                src="/professional-photographer-with-camera-at-golden-ho.jpg"
                alt="Professional photographer"
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 bg-muted/50">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">500+</div>
              <div className="text-sm text-muted-foreground">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">10+</div>
              <div className="text-sm text-muted-foreground">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">300+</div>
              <div className="text-sm text-muted-foreground">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">15+</div>
              <div className="text-sm text-muted-foreground">Awards Won</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Photography Services</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Specialized in various photography styles to meet all your visual needs
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6">
              <div className="aspect-video rounded-lg overflow-hidden mb-4">
                <img
                  src="/wedding-couple-outdoor.png"
                  alt="Wedding Photography"
                  className="object-cover w-full h-full"
                />
              </div>
              <h3 className="text-xl font-bold mb-2">Wedding Photography</h3>
              <p className="text-muted-foreground mb-4">Capture your special day with timeless elegance and emotion</p>
              <Button asChild variant="link" className="p-0">
                <Link href="/projects?category=wedding">
                  View Wedding Gallery <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </Card>

            <Card className="p-6">
              <div className="aspect-video rounded-lg overflow-hidden mb-4">
                <img
                  src="/professional-portrait.png"
                  alt="Portrait Photography"
                  className="object-cover w-full h-full"
                />
              </div>
              <h3 className="text-xl font-bold mb-2">Portrait Photography</h3>
              <p className="text-muted-foreground mb-4">
                Professional headshots and personal portraits that showcase your personality
              </p>
              <Button asChild variant="link" className="p-0">
                <Link href="/projects?category=portrait">
                  View Portrait Gallery <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </Card>

            <Card className="p-6">
              <div className="aspect-video rounded-lg overflow-hidden mb-4">
                <img
                  src="/commercial-product-shot.png"
                  alt="Commercial Photography"
                  className="object-cover w-full h-full"
                />
              </div>
              <h3 className="text-xl font-bold mb-2">Commercial Photography</h3>
              <p className="text-muted-foreground mb-4">High-quality product and brand photography for businesses</p>
              <Button asChild variant="link" className="p-0">
                <Link href="/projects?category=commercial">
                  View Commercial Gallery <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Work Section */}
      <section className="py-20 px-4 bg-muted/50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Featured Work</h2>
            <p className="text-lg text-muted-foreground">A selection of my best photography projects</p>
          </div>
          <FeaturedSlideshow slides={featuredSlides} />
          <div className="text-center mt-8">
            <Button asChild size="lg">
              <Link href="/best-pictures">
                View All Best Pictures <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Projects</h2>
            <p className="text-lg text-muted-foreground">Explore my recent photography projects</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {featuredProjects.map((project) => (
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
                  <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <div className="flex items-center gap-2 text-sm text-primary font-medium">
                    View Project
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center">
            <Button asChild size="lg" variant="outline">
              <Link href="/projects">
                Welcome to My Project Gallery <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 px-4 bg-muted/50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Why Choose Us</h2>
            <p className="text-lg text-muted-foreground">What makes our photography services stand out</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                <Camera className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Professional Equipment</h3>
              <p className="text-muted-foreground">
                State-of-the-art cameras and lighting equipment for the highest quality results
              </p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                <Award className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Award-Winning</h3>
              <p className="text-muted-foreground">
                Recognized excellence in photography with multiple industry awards
              </p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Client-Focused</h3>
              <p className="text-muted-foreground">Personalized service and attention to detail for every project</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-primary text-primary-foreground">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Create Something Amazing?</h2>
          <p className="text-lg mb-8 opacity-90">Let's discuss your photography needs and bring your vision to life</p>
          <Button asChild size="lg" variant="secondary">
            <Link href="/about#contact">Schedule a Consultation</Link>
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
