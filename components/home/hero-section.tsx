"use client"

import { useEffect, useState } from "react"
import { Title } from "../title-section"

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [scrolled, setScrolled] = useState(false)
    

  useEffect(() => {
    setIsVisible(true)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY
      setScrolled(y > 80)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section className={`
      relative z-5  flex 
        transition-all duration-[1200ms] ease-in-out]
        ${scrolled
          ? "translate-y-[-100px] opacity-0"
          : "translate-y-0 opacity-100"}
    `}>
      
      <div className={` h-0 inset-0
      z-4 text-center max-w-4xl mx-auto 
      transition-all duration-[500ms] e
      ase-in-out
      ${scrolled 
        ? "translate-y-[-100px]" 
        : "translate-y-[40vh]"}
      `}> 
        <Title/>        
      </div>
    </section>
  )
}