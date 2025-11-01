"use client"

import { useEffect, useState } from "react"

import Image from "next/image"

export function Title() {
    const [isVisible, setIsVisible] = useState(false)
    useEffect(() => {
        setIsVisible(true)
    }, [])
    return (
        <div>
            <h2 className="text-3xl font-bold mb-4">Kosiba Zsófia</h2>
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
          vmi egymondatos csoda
        </p>
    </div>
)}