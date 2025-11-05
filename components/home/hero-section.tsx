"use client"

import { useEffect, useState } from "react"
import { Title } from "../title-section"
import Image from "next/image"

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [visibleMessages, setVisibleMessages] = useState(0)
    const [scrolled, setScrolled] = useState(false)
    

  useEffect(() => {
    setIsVisible(true)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY
      setScrolled(y > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section className={`
      relative z-4  min-h-screen bg-transparent flex items-center justify-center transition-all duration-700 ease-in-out
    ${scrolled
    ? "translate-y-[-120%] opacity-0"
    : "translate-y-0 opacity-100"}`
  }
  style={{bottom: scrolled ? "auto" : "0", top: scrolled ? "0" : "auto" }}>
      
      <div className="absolut z-4 text-center max-w-4xl mx-auto transition-all duration-700 ease-in-out"> 
        <Title/>        
      </div>
    </section>
  )
}
