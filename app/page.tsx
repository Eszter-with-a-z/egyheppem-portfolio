import { HeroSection } from "@/components/home/hero-section"
import { BestPictureSlideshow } from "@/components/home/best-pictures-slideshow"
import { FeaturedWorkSection } from "@/components/home/featured-work-section"
import { ServicesSection } from "@/components/home/services-section"
import { ProjectsSection } from "@/components/home/projects-section"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <section className="relative">
        <HeroSection />
        <BestPictureSlideshow />
      </section>   
      
      <div >
        <ServicesSection />
        <ProjectsSection />
      </div>
      
    </main>
  )
}
