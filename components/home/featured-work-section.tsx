"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { bestPictures } from "@/lib/mock-data"
import { GalleryView } from "@/components/gallery-view"
import { Button } from "@/components/ui/button"

export function FeaturedWorkSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const [galleryOpen, setGalleryOpen] = useState(false)

  useEffect(() => {
    if (!isAutoPlaying || galleryOpen) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % bestPictures.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [isAutoPlaying, galleryOpen])

  const handlePrevious = () => {
    setIsAutoPlaying(false)
    setCurrentIndex((prev) => (prev - 1 + bestPictures.length) % bestPictures.length)
  }

  const handleNext = () => {
    setIsAutoPlaying(false)
    setCurrentIndex((prev) => (prev + 1) % bestPictures.length)
  }

  const handleImageClick = () => {
    setIsAutoPlaying(false)
    setGalleryOpen(true)
  }

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold mb-12 text-center animate-fade-in-up">Featured Work</h2>

        <div className="relative max-w-5xl mx-auto mb-8">
          <div
            className="relative aspect-[3/2] rounded-lg overflow-hidden cursor-pointer group"
            onClick={handleImageClick}
          >
            <div className="relative w-full h-full">
               {bestPictures.map((picture, index) => (
                  <Image
                  key={index}
                    src={picture.image || "/placeholder.svg"}
                    alt={picture.title}
                    fill
                    className={`object-cover transition-opacity duration-700 ease-in-out 
                    ${index === currentIndex ? "opacity-100" : "opacity-0"}`}
                    priority={index === currentIndex}
                  />

               ))}

            </div>
            
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
              <h3 className="text-white text-2xl font-semibold">{bestPictures[currentIndex].title}</h3>
            </div>
          </div>

          <button
            onClick={handlePrevious}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/10  backdrop-blur-xs hover:bg-white/70  transition-colors"
            aria-label="Previous image"
          >
            <ChevronLeft color="white" size={24} />
          </button>

          <button
            onClick={handleNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/10  backdrop-blur-xs hover:bg-white/70  transition-colors"
            aria-label="Next image"
          >
            <ChevronRight color="white" size={24} />
          </button>

          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {bestPictures.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentIndex(index)
                  setIsAutoPlaying(false)
                }}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentIndex ? "bg-primary w-8" : "bg-white/50"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        <div className="text-center">
          <Button asChild size="lg" className="group">
            <Link href="/best-pictures">
              View All Best Pictures
              <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </Link>
          </Button>
        </div>
      </div>

      {galleryOpen && (
        <GalleryView
          images={bestPictures.map((p) => p.image)}
          initialIndex={currentIndex}
          onClose={() => {
            setGalleryOpen(false)
            setIsAutoPlaying(true)
          }}
        />
      )}
    </section>
  )
}
