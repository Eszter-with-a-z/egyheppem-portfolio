"use client"

import { useEffect, useState } from "react"
import { Title } from "../title-section"
import Image from "next/image"

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)
   const [visibleMessages, setVisibleMessages] = useState(0)
    const messages = [
    { sender: "friend", text: "Hat min gondolkozol?" },
    { sender: "photographer", text: "Valami menőt és sokatmondót szeretnék" },
    { sender: "photographer", text: "Szóval hogy lejön, hogy fotós oldal" },
    { sender: "photographer", text: "ittottjarok" },
    { sender: "photographer", text: "fenomenológia" },

    { sender: "photographer", text: "egyheppem" },
    { sender: "friend", text: "Uuu ez jó" },
  ]

  useEffect(() => {
    setIsVisible(true)
  }, [])
  
  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleMessages((prev) => (prev < messages.length ? prev + 1 : prev))
    }, 400)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative  min-h-screen flex items-center justify-center ">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background" />
      <div className="relative z-4 text-center max-w-4xl mx-auto">
        
         
      <Title/>
        
      </div>
    </section>
  )
}
