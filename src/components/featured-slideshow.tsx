"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/src/components/ui/button"
import { GalleryModal } from "@/src/components/gallery-modal"

interface Slide {
  src: string
  title: string
  category: string
}

interface FeaturedSlideshowProps {
  slides: Slide[]
  autoPlayInterval?: number
}

export function FeaturedSlideshow({ slides, autoPlayInterval = 5000 }: FeaturedSlideshowProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const [showGallery, setShowGallery] = useState(false)

  useEffect(() => {
    if (isPaused) return

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length)
    }, autoPlayInterval)

    return () => clearInterval(timer)
  }, [slides.length, autoPlayInterval, isPaused])

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % slides.length)
  }

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length)
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  const handleSlideClick = () => {
    setIsPaused(true)
    setShowGallery(true)
  }

  const handleCloseGallery = () => {
    setShowGallery(false)
    setIsPaused(false)
  }

  const handleGalleryNext = () => {
    setCurrentIndex((prev) => (prev + 1) % slides.length)
  }

  const handleGalleryPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length)
  }

  const galleryImages = slides.map((slide) => ({
    src: slide.src,
    title: slide.title,
  }))

  return (
    <>
      <div className="relative aspect-[16/9] md:aspect-[21/9] rounded-lg overflow-hidden group">
        {/* Slides */}
        <div className="relative w-full h-full cursor-pointer" onClick={handleSlideClick}>
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-700 ${
                index === currentIndex ? "opacity-100" : "opacity-0"
              }`}
            >
              <img src={slide.src || "/placeholder.svg"} alt={slide.title} className="object-cover w-full h-full" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex items-end p-8 md:p-12">
                <div className="text-white max-w-2xl">
                  <div className="text-sm font-semibold mb-2 text-white/80">{slide.category}</div>
                  <h3 className="text-3xl md:text-4xl font-bold">{slide.title}</h3>
                </div>
              </div>
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white text-sm font-medium bg-black/50 px-4 py-2 rounded-full">
                  Click to view full size
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Buttons */}
        <Button
          variant="ghost"
          size="icon"
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white opacity-0 group-hover:opacity-100 transition-opacity"
          onClick={(e) => {
            e.stopPropagation()
            goToPrevious()
          }}
        >
          <ChevronLeft className="h-6 w-6" />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white opacity-0 group-hover:opacity-100 transition-opacity"
          onClick={(e) => {
            e.stopPropagation()
            goToNext()
          }}
        >
          <ChevronRight className="h-6 w-6" />
        </Button>

        {/* Dots Indicator */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={(e) => {
                e.stopPropagation()
                goToSlide(index)
              }}
              className={`w-2 h-2 rounded-full transition-all ${
                index === currentIndex ? "bg-white w-8" : "bg-white/50 hover:bg-white/75"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {showGallery && (
        <GalleryModal
          images={galleryImages}
          currentIndex={currentIndex}
          onClose={handleCloseGallery}
          onNext={handleGalleryNext}
          onPrevious={handleGalleryPrevious}
        />
      )}
    </>
  )
}
