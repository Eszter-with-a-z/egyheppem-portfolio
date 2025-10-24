"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { usePathname } from "next/navigation"

export function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const [isTransitioning, setIsTransitioning] = useState(false)

  useEffect(() => {
    setIsTransitioning(true)
    const timer = setTimeout(() => {
      setIsTransitioning(false)
    }, 50)

    return () => clearTimeout(timer)
  }, [pathname])

  return (
    <div
      className={`transition-all duration-500 ease-out ${
        isTransitioning ? "opacity-0 translate-x-8" : "opacity-100 translate-x-0"
      }`}
    >
      {children}
    </div>
  )
}
