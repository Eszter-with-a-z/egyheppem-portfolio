"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { bestPictures } from "@/lib/data-best-pictures"
import { GalleryView } from "@/components/gallery-view"
import { Button } from "@/components/ui/button"

export default function BestPicturesPage() {
  const [galleryIndex, setGalleryIndex] = useState<number | null>(null)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <main className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <h1 className="text-4xl sm:text-5xl font-bold mb-12 text-center animate-fade-in-up">Best Pictures</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {bestPictures.map((picture, index) => (
            <div
              key={picture.id}
              className="group relative overflow-hidden rounded-lg bg-card animate-scale-in"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div
                className="aspect-[3/4] relative overflow-hidden cursor-pointer"
                onClick={() => setGalleryIndex(index)}
              >
                <Image
                  src={picture.image || "/placeholder.svg"}
                  alt={picture.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-lg mb-2">{picture.title}</h3>
                <Button asChild variant="outline" size="sm" className="w-full bg-transparent">
                  <Link href={`/projects/${picture.projectId}`}>More About the Project</Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {galleryIndex !== null && (
        <GalleryView
          images={bestPictures.map((p) => p.image)}
          initialIndex={galleryIndex}
          onClose={() => setGalleryIndex(null)}
        />
      )}
    </main>
  )
}
