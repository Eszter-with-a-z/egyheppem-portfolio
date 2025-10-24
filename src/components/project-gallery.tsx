"use client"

import { useState, useEffect } from "react"
import { Button } from "@/src/components/ui/button"
import { Badge } from "@/src/components/ui/badge"
import { ArrowLeft, ImageIcon } from "lucide-react"
import { GalleryModal } from "@/src/components/gallery-modal"

interface Subfolder {
  name: string
  images: string[]
}

interface Project {
  id: number
  title: string
  category: string
  date: string
  hasSubfolders: boolean
  subfolders?: Subfolder[]
  images?: string[]
  description: string
  fullDescription: string
  location: string
  client: string
}

export function ProjectGallery({ project }: { project: Project }) {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null)
  const [selectedSubfolder, setSelectedSubfolder] = useState<string | null>(null)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

   const getCurrentImages = () => {
    if (selectedSubfolder && project.hasSubfolders) {
      const subfolder = project.subfolders!.find((f) => f.name === selectedSubfolder)
      return subfolder ? subfolder.images : []
    }
    return project.hasSubfolders ? project.subfolders!.flatMap((folder) => folder.images) : project.images!
  }

  const currentImages = getCurrentImages()

  const handleNext = () => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((selectedImageIndex + 1) % currentImages.length)
    }
  }

  const handlePrevious = () => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((selectedImageIndex - 1 + currentImages.length) % currentImages.length)
    }
  }

  const galleryImages = currentImages.map((src: string, index: number) => ({
    src,
    title: `${project.title} - Image ${index + 1}`,
  }))

  return (
    <section className="pb-20 px-4">
      <div className="container mx-auto max-w-5xl">
        {project.hasSubfolders ? (
          <div className="space-y-12">
            {!selectedSubfolder ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {project.subfolders!.map((subfolder: Subfolder) => (
                  <button
                    key={subfolder.name}
                    onClick={() => setSelectedSubfolder(subfolder.name)}
                    className="group block rounded-lg overflow-hidden border border-border hover:border-primary transition-colors text-left"
                  >
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <img
                        src={subfolder.images[0] || "/placeholder.svg"}
                        alt={subfolder.name}
                        className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                      />
                      <Badge variant="secondary" className="absolute top-4 right-4 bg-black/50 text-white border-0">
                        <ImageIcon className="h-3 w-3 mr-1" />
                        {subfolder.images.length}
                      </Badge>
                    </div>
                    <div className="p-4">
                      <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                        {subfolder.name}
                      </h3>
                      <div className="flex items-center gap-2 text-sm text-primary font-medium">
                        View Images
                        <ArrowLeft className="h-4 w-4 rotate-180 transition-transform group-hover:translate-x-1" />
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            ) : (
              <>
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <h3 className="text-2xl font-bold">{selectedSubfolder}</h3>
                    <Badge variant="secondary">
                      <ImageIcon className="h-3 w-3 mr-1" />
                      {project.subfolders!.find((f: any) => f.name === selectedSubfolder)?.images.length || 0}
                    </Badge>
                  </div>
                  <Button variant="outline" size="sm" onClick={() => setSelectedSubfolder(null)}>
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Back to Folders
                  </Button>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {project.subfolders!
                    .find((f: any) => f.name === selectedSubfolder)
                    ?.images.map((image: string, index: number) => (
                      <div
                        key={index}
                        className="relative aspect-square rounded-lg overflow-hidden cursor-pointer group"
                        onClick={() => setSelectedImageIndex(index)}
                      >
                        <img
                          src={image || "/placeholder.svg"}
                          alt={`${selectedSubfolder} - Image ${index + 1}`}
                          className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 flex items-center justify-center">
                          <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white text-xs font-medium bg-black/50 px-3 py-1.5 rounded-full">
                            View
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
              </>
            )}
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {project.images!.map((image: string, index: number) => (
              <div
                key={index}
                className="relative aspect-square rounded-lg overflow-hidden cursor-pointer group"
                onClick={() => setSelectedImageIndex(index)}
              >
                <img
                  src={image || "/placeholder.svg"}
                  alt={`${project.title} - Image ${index + 1}`}
                  className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white text-xs font-medium bg-black/50 px-3 py-1.5 rounded-full">
                    View
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {selectedImageIndex !== null && (
        <GalleryModal
          images={galleryImages}
          currentIndex={selectedImageIndex}
          onClose={() => setSelectedImageIndex(null)}
          onNext={handleNext}
          onPrevious={handlePrevious}
        />
      )}
    </section>
  )
}
