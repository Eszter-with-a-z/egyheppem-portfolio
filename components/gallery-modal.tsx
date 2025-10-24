"use client"

import { useEffect, useState } from "react"
import { X, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

interface GalleryModalProps {
  images: Array<{ src: string; title?: string; description?: string }>
  currentIndex: number
  onClose: () => void
  onNext: () => void
  onPrevious: () => void
}

export function GalleryModal({ images, currentIndex, onClose, onNext, onPrevious }: GalleryModalProps) {
  const currentImage = images[currentIndex]
  const [isExiting, setIsExiting] = useState(false)

  const handleClose = () => {
    setIsExiting(true)
    setTimeout(() => {
      onClose()
    }, 300) // Match animation duration
  }

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        handleClose()
      } else if (e.key === "ArrowRight") {
        onNext()
      } else if (e.key === "ArrowLeft") {
        onPrevious()
      }
    }

    const handleWheel = (e: WheelEvent) => {
      if (e.deltaY > 0) {
        handleClose()
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    window.addEventListener("wheel", handleWheel, { passive: true })
    document.body.style.overflow = "hidden"

    return () => {
      window.removeEventListener("keydown", handleKeyDown)
      window.removeEventListener("wheel", handleWheel)
      document.body.style.overflow = "unset"
    }
  }, [onNext, onPrevious])

  return (
    <div
      className={`fixed inset-0 z-50 bg-black/95 flex items-center justify-center transition-opacity duration-300 ${
        isExiting ? "opacity-0" : "opacity-100"
      }`}
    >
      {/* Close Button */}
      <Button
        variant="ghost"
        size="icon"
        className="absolute top-4 right-4 z-10 text-white hover:bg-white/10"
        onClick={handleClose}
      >
        <X className="h-6 w-6" />
        <span className="sr-only">Close gallery</span>
      </Button>

      {/* Previous Button */}
      {images.length > 1 && (
        <Button
          variant="ghost"
          size="icon"
          className="absolute left-4 top-1/2 -translate-y-1/2 z-10 text-white hover:bg-white/10"
          onClick={onPrevious}
        >
          <ChevronLeft className="h-8 w-8" />
          <span className="sr-only">Previous image</span>
        </Button>
      )}

      {/* Next Button */}
      {images.length > 1 && (
        <Button
          variant="ghost"
          size="icon"
          className="absolute right-4 top-1/2 -translate-y-1/2 z-10 text-white hover:bg-white/10"
          onClick={onNext}
        >
          <ChevronRight className="h-8 w-8" />
          <span className="sr-only">Next image</span>
        </Button>
      )}

      {/* Image Container */}
      <div
        className={`relative w-full h-full flex items-center justify-center p-4 md:p-12 transition-transform duration-300 ${
          isExiting ? "scale-95" : "scale-100"
        }`}
      >
        <img
          src={currentImage.src || "/placeholder.svg"}
          alt={currentImage.title || `Image ${currentIndex + 1}`}
          className="max-w-full max-h-full object-contain"
        />
      </div>

      {/* Image Info */}
      {(currentImage.title || currentImage.description) && (
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-8 text-white">
          <div className="container mx-auto max-w-4xl">
            {currentImage.title && <h3 className="text-xl font-bold mb-2">{currentImage.title}</h3>}
            {currentImage.description && <p className="text-white/80">{currentImage.description}</p>}
          </div>
        </div>
      )}

      {/* Counter */}
      {images.length > 1 && (
        <div className="absolute top-4 left-1/2 -translate-x-1/2 bg-black/50 backdrop-blur-sm px-4 py-2 rounded-full text-white text-sm">
          {currentIndex + 1} / {images.length}
        </div>
      )}
    </div>
  )
}
