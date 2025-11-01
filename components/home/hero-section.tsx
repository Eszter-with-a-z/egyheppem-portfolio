"use client"

import { useEffect, useState } from "react"

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
    <section className="relative mt-6 min-h-screen flex items-center justify-center ">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background" />
      <div className="relative z-4 text-center max-w-4xl mx-auto">
        
          {messages.map((message, index) => {
          const isPhotographer = message.sender === "photographer"
          const isMessageTitle = message.text === "egyheppem"

          return (
            // Loop through messages to adjust 
            <div
              key={index}
              className={`flex gap-3 ${isPhotographer ? "justify-end" : "justify-start"}`}
              style={{
                opacity: index < visibleMessages ? 1 : 0,
                transform: index < visibleMessages ? "translateY(0)" : "translateY(10px)",
                transition: "all 0.5s ease-out",
            }}>
              {/* Adjust color to sender */}  
              <div
                className={`rounded-3xl px-6 py-2 m-1 max-w-xs shadow-lg ${
                  isPhotographer
                    ?"bg-emerald-400 text-slate-900 rounded-tr-lg"     
                    : "bg-slate-700 text-slate-50 rounded-bl-lg"
                } ${isMessageTitle ? "mr-0":"mr-13"}`}
              >
                 <p className="text-lg font-medium text-left">{message.text}</p>
              </div>

                {isPhotographer && isMessageTitle &&(
                <div className="flex-shrink-0">
                  <Image
                    src="/profile.png"
                    alt="Photographer"
                    width={40}
                    height={40}
                    className="rounded-full"
                  />
                </div>
              )}

            </div>
          )})}

        <h2
          className={`text-2xl sm:text-3xl md:text-4xl font-light mb-4 text-muted-foreground transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{ transitionDelay: "300ms" }}
        >
          Kosiba Zsófia
        </h2>

        <p
          className={`text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{ transitionDelay: "500ms" }}
        >
          Capturing moments that tell your unique story through the lens
        </p>
      </div>
    </section>
  )
}
