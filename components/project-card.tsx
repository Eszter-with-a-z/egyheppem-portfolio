"use client"

import Image from "next/image"
import Link from "next/link"
import { Folder } from "lucide-react"

interface ProjectCardProps {
  id: string
  title: string
  year:number
  imageCount: number
  coverImage: string
  href: string
}

export function ProjectCard({ id, title, year, imageCount, coverImage, href }: ProjectCardProps) {
  return (
    <Link
      href={href}
      className="group relative overflow-hidden rounded-lg bg-card transition-all duration-300 hover:scale-[1.02] hover:shadow-xl animate-scale-in"
    >
      <div className="aspect-[4/3] relative overflow-hidden">
        <Image
          src={coverImage || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      <div className="p-4">
        <div className="flex items-center gap-2 mb-1">
          <Folder size={16} className="text-primary" />
          <h3 className="font-semibold text-lg group-hover:text-primary transition-colors">{title}</h3>
        </div>
        <p className="text-sm text-muted-foreground">{imageCount} images | {year}</p>
        
      </div>
    </Link>
  )
}
