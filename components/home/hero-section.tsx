"use client"

import { useEffect, useState } from "react"
import { Title } from "../title-section"
import Image from "next/image"

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)
   const [visibleMessages, setVisibleMessages] = useState(0)
    

  useEffect(() => {
    setIsVisible(true)
  }, [])
  


  return (
    <section className="relative  min-h-screen flex items-center justify-center ">
      <div className="absolute inset-0 " />
      <div className="relative z-4 text-center max-w-4xl mx-auto"> 
        <Title/>        
      </div>
    </section>
  )
}
