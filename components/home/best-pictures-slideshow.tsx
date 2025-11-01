"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { bestPictures } from "@/lib/data-best-pictures"
import { GalleryView } from "@/components/gallery-view"

export function BestPictureSlideshow() {
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



  return (
          
    <section className=" sticky  inset-0 w-fill h-screen overflow-hidden">
      <div className="container  ">
        <div className="relative w-screen  mb-8">
          
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

            </div>
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
