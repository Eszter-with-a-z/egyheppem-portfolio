import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, Star, Quote } from "lucide-react"

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Bride",
    project: "Wedding Photography",
    rating: 5,
    text: "Working with this photographer was an absolute dream! Every moment of our special day was captured beautifully. The attention to detail and ability to make us feel comfortable in front of the camera was incredible. We'll treasure these photos forever.",
    image: "/testimonial-1.jpg",
    date: "June 2024",
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "CEO",
    project: "Corporate Headshots",
    rating: 5,
    text: "Professional, efficient, and the results exceeded our expectations. The headshots perfectly captured our team's personality while maintaining a polished corporate aesthetic. Highly recommend for any business photography needs.",
    image: "/testimonial-2.jpg",
    date: "May 2024",
  },
  {
    id: 3,
    name: "Emma Rodriguez",
    role: "Marketing Director",
    project: "Product Photography",
    rating: 5,
    text: "The product photography elevated our brand to a whole new level. The lighting, composition, and attention to detail made our products look absolutely stunning. Sales increased significantly after updating our website with these images.",
    image: "/testimonial-3.jpg",
    date: "April 2024",
  },
  {
    id: 4,
    name: "David Thompson",
    role: "Event Organizer",
    project: "Charity Gala",
    rating: 5,
    text: "Captured every important moment of our 500+ person gala flawlessly. The photographer was unobtrusive yet managed to be everywhere at once. The final gallery was delivered ahead of schedule and exceeded all expectations.",
    image: "/testimonial-4.jpg",
    date: "March 2024",
  },
  {
    id: 5,
    name: "Lisa Anderson",
    role: "Magazine Editor",
    project: "Fashion Editorial",
    rating: 5,
    text: "A true artist with the camera. The fashion editorial shoot was creative, dynamic, and perfectly captured the essence of our spring collection. The images were magazine-ready and received rave reviews from our readers.",
    image: "/testimonial-5.jpg",
    date: "January 2024",
  },
  {
    id: 6,
    name: "James Wilson",
    role: "Restaurant Owner",
    project: "Food Photography",
    rating: 5,
    text: "The food photography made our dishes look absolutely irresistible. Since updating our menu and website with these photos, we've seen a noticeable increase in reservations. Worth every penny!",
    image: "/testimonial-6.jpg",
    date: "November 2023",
  },
  {
    id: 7,
    name: "Rachel Martinez",
    role: "Engaged Couple",
    project: "Engagement Session",
    rating: 5,
    text: "Our engagement photos are beyond beautiful! The photographer made us feel so comfortable and natural. The golden hour shots at the beach are absolutely magical. Can't wait to work together again for our wedding!",
    image: "/testimonial-7.jpg",
    date: "December 2023",
  },
  {
    id: 8,
    name: "Robert Kim",
    role: "Brand Manager",
    project: "Commercial Campaign",
    rating: 5,
    text: "Outstanding work on our luxury watch campaign. The photographer understood our brand vision perfectly and delivered images that showcase the craftsmanship and elegance of our timepieces. Truly exceptional quality.",
    image: "/testimonial-8.jpg",
    date: "April 2024",
  },
]

export default function TestimonialsPage() {
  const averageRating = testimonials.reduce((acc, t) => acc + t.rating, 0) / testimonials.length

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
              <Link href="/testimonials" className="text-sm font-medium text-primary">
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
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-balance">Client Testimonials</h1>
          <p className="text-lg text-muted-foreground max-w-2xl text-pretty">
            Don't just take our word for it. Here's what our clients have to say about their experience working with us.
          </p>

          {/* Rating Summary */}
          <div className="mt-8 flex items-center gap-4">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-6 w-6 fill-primary text-primary" />
              ))}
            </div>
            <div className="text-lg font-semibold">{averageRating.toFixed(1)} out of 5</div>
            <div className="text-muted-foreground">Based on {testimonials.length} reviews</div>
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="pb-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-6">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.id} className="relative overflow-hidden">
                <CardContent className="p-6">
                  <Quote className="h-8 w-8 text-primary/20 mb-4" />

                  {/* Rating */}
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                    ))}
                  </div>

                  {/* Testimonial Text */}
                  <p className="text-muted-foreground mb-6 leading-relaxed">{testimonial.text}</p>

                  {/* Client Info */}
                  <div className="flex items-center gap-4">
                    <div className="relative h-12 w-12 rounded-full overflow-hidden bg-muted">
                      <img
                        src={testimonial.image || "/placeholder.svg?height=48&width=48"}
                        alt={testimonial.name}
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <div>
                      <div className="font-semibold">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground">
                        {testimonial.role} • {testimonial.project}
                      </div>
                      <div className="text-xs text-muted-foreground mt-1">{testimonial.date}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 bg-muted/50">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">500+</div>
              <div className="text-muted-foreground">Happy Clients</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">1000+</div>
              <div className="text-muted-foreground">Projects Completed</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">5.0</div>
              <div className="text-muted-foreground">Average Rating</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">98%</div>
              <div className="text-muted-foreground">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Create Your Own Success Story?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Join hundreds of satisfied clients and let's create something amazing together
          </p>
          <Button asChild size="lg">
            <Link href="/about#contact">Get Started Today</Link>
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
