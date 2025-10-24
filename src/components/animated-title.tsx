"use client"

import type React from "react"

import { useEffect, useState } from "react"

interface AnimatedTitleProps {
  children: React.ReactNode
  className?: string
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6"
  delay?: number
}

export function AnimatedTitle({ children, className = "", as: Component = "h1", delay = 0 }: AnimatedTitleProps) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, delay)

    return () => clearTimeout(timer)
  }, [delay])

  return (
    <Component
      className={`transition-all duration-700 ease-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      } ${className}`}
    >
      {children}
    </Component>
  )
}
