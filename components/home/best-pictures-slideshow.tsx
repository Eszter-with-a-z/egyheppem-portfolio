"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { bestPictures } from "@/lib/data-best-pictures"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { GalleryView } from "@/components/gallery-view"
import { Button } from "@/components/ui/button"

export function BestPictureSlideshow() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [scrolled, setScrolled] = useState(false)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const [galleryOpen, setGalleryOpen] = useState(false)
  const touchStartX = useRef<number | null>(null)
  const touchEndX = useRef<number | null>(null)

  useEffect(() => {
  const handleScroll = () => setScrolled(window.scrollY > 80)
  window.addEventListener("scroll", handleScroll)
  return () => window.removeEventListener("scroll", handleScroll)
  }, [])

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
    if (scrolled){
      setIsAutoPlaying(false)
      setGalleryOpen(true)
    }
      
  }
  // keyboard event listener 
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (galleryOpen) return // don’t interfere with gallery view
      if (e.key === "ArrowLeft") handlePrevious()
      if (e.key === "ArrowRight") handleNext()
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [galleryOpen])

   // swipe gesture handlers 
  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX
  }

  const onTouchEnd = (e: React.TouchEvent) => {
    if (galleryOpen || touchStartX.current === null) return

    touchEndX.current = e.changedTouches[0].clientX
    const diff = touchStartX.current - touchEndX.current

    // threshold of 50px for swipe
    if (Math.abs(diff) > 50) {
      if (diff > 0) handleNext() // swipe left → next
      else handlePrevious() // swipe right → previous
    }

    touchStartX.current = null
    touchEndX.current = null
  }


  return (
          
    <section className=" sticky  inset-0 w-fill h-screen overflow-hidden"
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}>
      <div className="container  ">
        <div 
          className="relative w-screen  mb-8"
          onClick={handleImageClick}
        >
         {/**Image */}
            <div className="relative w-screen h-screen">
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
              {/* Overlay that fades away on scroll */}
              <div
                className={`absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/10 transition-opacity duration-700 ease-in-out ${
                  scrolled ? "opacity-0" : "opacity-100"
                }`}
              />
            </div>
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
            
            {/* Title */}<div className=
            {scrolled ?" opacity-100 duration-700 ease-in-out absolute bg-transparent bottom-0 left-0 right-0 p-10 bg-black/20":"opacity-0 "} >
              <h3 className="text-white drop-shadow text-2xl font-semibold">{bestPictures[currentIndex].title}</h3>
            </div>
          
        </div>

        {/* Left Button */}
        <button
          onClick={handlePrevious}
          className=
          {scrolled ?"shadow drop-shadow cursor-pointer opacity-100 duration-700 ease-in-out absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-foreground/20  backdrop-blur-xs hover:bg-white/70  transition-colors":"opacity-0"}
          aria-label="Previous image"
        >
          <ChevronLeft color="white" className="w-3 h-3 sm:w-6 sm:h-6 md:w-9 md:h-9" />
        </button>

        {/* Right Button */}
        <button
          onClick={handleNext}
          className=
          {scrolled ?"shadow drop-shadow cursor-pointer opacity-100 duration-700 ease-in-out absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-foreground/20  backdrop-blur-xs hover:bg-white/70  transition-colors":"opacity-0"}

          aria-label="Next image"
        >
          <ChevronRight color="white" className="w-3 h-3 sm:w-6 sm:h-6 md:w-9 md:h-9" />
        </button>
        
        {/* Little dots*/}
        <div className={scrolled ?" opacity-100 duration-700 ease-in-out absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2": "opacity-0"}>
          {bestPictures.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setCurrentIndex(index)
                setIsAutoPlaying(false)
              }}
              className={`w-2 h-2 rounded-full transition-all ${
                index === currentIndex ? "bg-accent w-8" : "bg-white/50"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
      <div className="text-center">

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
