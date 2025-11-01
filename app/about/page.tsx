"use client"

import { useEffect } from "react"
import { Mail, Instagram } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ChatIntro } from "@/components/chat-intro"

export default function AboutPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <main className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-4xl">
        <h1 className="text-4xl sm:text-5xl font-bold mb-12 text-center animate-fade-in-up">About & Contact</h1>
        < ChatIntro />
        <div className="bg-card rounded-lg p-8 sm:p-12 animate-scale-in">

          <div className="prose prose-invert max-w-none mb-8">
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              I'm a passionate photographer dedicated to capturing the beauty and emotion in every moment. With years of
              experience in wedding, portrait, and commercial photography, I bring a unique perspective to every
              project.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              My approach combines technical expertise with artistic vision, ensuring that each photograph tells a
              compelling story. Whether it's the joy of a wedding day, the personality in a portrait, or the elegance of
              architectural design, I strive to create images that resonate and endure.
            </p>
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Mail className="text-primary" size={24} />
              <a href="mailto:hello@kosibazsófia.com" className="text-lg hover:text-primary transition-colors">
                hello@kosibazsófia.com
              </a>
            </div>

            <div className="flex items-center gap-3">
              <Instagram className="text-primary" size={24} />
              <a
                href="https://instagram.com/egyheppem"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg hover:text-primary transition-colors"
              >
                @egyheppem
              </a>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-border">
            <Button size="lg" className="w-full sm:w-auto">
              <Mail className="mr-2" size={20} />
              Get in Touch
            </Button>
          </div>
        </div>
      </div>
    </main>
  )
}
