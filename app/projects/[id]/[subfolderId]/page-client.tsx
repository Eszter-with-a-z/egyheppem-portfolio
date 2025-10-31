"use client"

import { useState, useEffect } from "react"
import { useParams, useRouter } from "next/navigation"
import Image from "next/image"
import { ArrowLeft } from "lucide-react"
import { projects } from "@/lib/data-projects"
import { GalleryView } from "@/components/gallery-view"
import { Button } from "@/components/ui/button"

export default function SubfolderPageClient() {
  const params = useParams()
  const router = useRouter()
  const [galleryIndex, setGalleryIndex] = useState<number | null>(null)
  const [isSticky, setIsSticky] = useState(false)

  const project = projects.find((p) => p.id === params.id)
  const subfolder = project?.subfolders?.find((s) => s.id === params.subfolderId)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 100)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  if (!project || !subfolder) {
    return (
      <main className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">Collection Not Found</h1>
          <Button onClick={() => router.back()}>Go Back</Button>
        </div>
      </main>
    )
  }

  return (
    <main className="min-h-screen pt-24 pb-20">
      <div
        className={`${
          isSticky ? "fixed top-16 left-0 right-0 bg-transparent  border-border z-40" : "relative"
        } transition-all duration-300`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Button variant="ghost" onClick={() => router.push(`/projects/${project.id}`)} className=" bg-white group">
            <ArrowLeft className="mr-2 group-hover:-translate-x-1 transition-transform" size={20} />
            Back to {project.title}
          </Button>
        </div>
      </div>

      <div className={`px-4 sm:px-6 lg:px-8 ${isSticky ? "mt-20" : ""}`}>
        <div className="container mx-auto">
          <div className="mb-12">
            <div className="aspect-[21/9] relative overflow-hidden rounded-lg mb-6">
              <Image
                src={subfolder.coverImage || "/placeholder.svg"}
                alt={subfolder.title}
                fill
                className="object-cover"
                priority
              />
            </div>

            <div className="max-w-3xl">
              <h1 className="text-4xl sm:text-5xl font-bold mb-4 animate-fade-in-up">{subfolder.title}</h1>
              <p className="text-lg text-muted-foreground mb-2">{subfolder.imageCount} images</p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {subfolder.images.map((image, index) => (
              <div
                key={index}
                className="aspect-square relative overflow-hidden rounded-lg cursor-pointer group"
                onClick={() => setGalleryIndex(index)}
              >
                <Image
                  src={image || "/placeholder.svg"}
                  alt={`${subfolder.title} - Image ${index + 1}`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {galleryIndex !== null && (
        <GalleryView images={subfolder.images} initialIndex={galleryIndex} onClose={() => setGalleryIndex(null)} />
      )}
    </main>
  )
}
