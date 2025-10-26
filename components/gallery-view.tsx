"use client"

import { useState, useEffect, useCallback } from "react"
import Image from "next/image"
import { X, ChevronLeft, ChevronRight } from "lucide-react"

interface GalleryViewProps {
  images: string[]
  initialIndex: number
  onClose: () => void
}

export function GalleryView({ images, initialIndex, onClose }: GalleryViewProps) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex)
  const [isClosing, setIsClosing] = useState(false)

  const handlePrevious = useCallback(() => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : images.length - 1))
  }, [images.length])

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev < images.length - 1 ? prev + 1 : 0))
  }, [images.length])

  const handleClose = useCallback(() => {
    setIsClosing(true)
    setTimeout(() => {
      onClose()
    }, 300)
  }, [onClose])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        handleClose()
      } else if (e.key === "ArrowLeft") {
        handlePrevious()
      } else if (e.key === "ArrowRight") {
        handleNext()
      }
    }

    const handleWheel = (e: WheelEvent) => {
      if (e.deltaY > 50) {
        handleClose()
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    window.addEventListener("wheel", handleWheel)

    return () => {
      window.removeEventListener("keydown", handleKeyDown)
      window.removeEventListener("wheel", handleWheel)
    }
  }, [handleClose, handlePrevious, handleNext])

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center glass-bg transition-opacity duration-300 ${
        isClosing ? "opacity-0" : "opacity-100"
      }`}
      onClick={handleClose}
    >
      <button
        onClick={handleClose}
        className="absolute top-4 left-4 p-2 rounded-full bg-black/50 hover:bg-black/70 transition-colors z-10"
        aria-label="Close gallery"
      >
        <X size={24} />
      </button>

      <button
        onClick={(e) => {
          e.stopPropagation()
          handlePrevious()
        }}
        className="absolute left-4 p-3 rounded-full bg-black/50 hover:bg-black/70 transition-colors z-10"
        aria-label="Previous image"
      >
        <ChevronLeft size={32} />
      </button>

      <button
        onClick={(e) => {
          e.stopPropagation()
          handleNext()
        }}
        className="absolute right-4 p-3 rounded-full bg-black/50 hover:bg-black/70 transition-colors z-10"
        aria-label="Next image"
      >
        <ChevronRight size={32} />
      </button>

      <div
        className={`relative w-full h-full flex items-center justify-center p-4 transition-transform duration-300 ${
          isClosing ? "scale-90" : "scale-100"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative max-w-7xl max-h-full w-full h-full">
          <Image
            src={images[currentIndex] || "/placeholder.svg"}
            alt={`Gallery image ${currentIndex + 1}`}
            fill
            className="object-contain"
            priority
          />
        </div>
      </div>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-sm text-muted-foreground">
        {currentIndex + 1} / {images.length}
      </div>
    </div>
  )
}
