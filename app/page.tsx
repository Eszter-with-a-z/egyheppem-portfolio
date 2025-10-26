import { HeroSection } from "@/components/home/hero-section"
import { FeaturedWorkSection } from "@/components/home/featured-work-section"
import { ServicesSection } from "@/components/home/services-section"
import { ProjectsSection } from "@/components/home/projects-section"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <FeaturedWorkSection />
      <ServicesSection />
      <ProjectsSection />
    </main>
  )
}
