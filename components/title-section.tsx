"use client"

import { useEffect, useState } from "react"

interface TitleProps{
    color?: string
}

export function Title({color = "white"}:TitleProps) {
    const [isVisible, setIsVisible] = useState(false)
    useEffect(() => {
        setIsVisible(true)
    }, [])
    return (
      <div className="mt-6 ">
        <h2
            className={`text-${color} text-5xl text-right sm:text-2xl md:text-3xl font-light mb-4 transition-all duration-1000 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: "300ms" }}
          >
          Kosiba Zsófia
        </h2>
        <div className="flex">
          <div
              className="rounded-3xl px-6 py-2 m-1  shadow-lg
                bg-accent text-slate-900 rounded-full rounded-tr-md mr-0"
            >
            <p className="text-6xl font-light  mb-4">
              egyheppem
            </p>                 
          </div>
        </div>
        <p
          className={`text-${color} text-lg sm:text-xl max-w-2xl mx-auto transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{ transitionDelay: "500ms" }}
        >
          vmi egymondatos csoda
        </p>
    </div>
)}