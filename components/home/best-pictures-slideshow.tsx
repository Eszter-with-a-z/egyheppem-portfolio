"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { bestPictures } from "@/lib/data-best-pictures"


import Link from "next/link"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { GalleryView } from "@/components/gallery-view"
import { Button } from "@/components/ui/button"

export function BestPictureSlideshow() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [scrolled, setScrolled] = useState(false)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const [galleryOpen, setGalleryOpen] = useState(false)

  useEffect(() => {
  const handleScroll = () => setScrolled(window.scrollY > 50)
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

  return (
          
    <section className=" sticky  inset-0 w-fill h-screen overflow-hidden">
      <div className="container  ">
        <div 
          className="relative w-screen  mb-8"
          onClick={handleImageClick}
        >
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
              {/* 👇 Overlay that fades away on scroll */}
              <div
                className={`absolute inset-0 transition-colors duration-700 ease-in-out
                  ${scrolled ? "bg-black/0" : "bg-black/0"}`}
              />
            </div>
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
            <div className=
            {scrolled ?" opacity-100 duration-700 ease-in-out absolute bg-transparent bottom-0 left-0 right-0 p-10 bg-black/20":"opacity-0 "} >
              <h3 className="text-white  text-2xl font-semibold">{bestPictures[currentIndex].title}</h3>
            </div>
          
        </div>
      
        <button
          onClick={handlePrevious}
          className=
          {scrolled ?" opacity-100 duration-700 ease-in-out absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/10  backdrop-blur-xs hover:bg-white/70  transition-colors":"opacity-0"}
          aria-label="Previous image"
        >
          <ChevronLeft color="white" size={24} />
        </button>
        <button
          onClick={handleNext}
          className=
          {scrolled ?" opacity-100 duration-700 ease-in-out absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/10  backdrop-blur-xs hover:bg-white/70  transition-colors":"opacity-0"}

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
