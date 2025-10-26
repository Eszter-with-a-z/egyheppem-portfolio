"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { testimonials } from "@/lib/mock-data"

export default function TestimonialsPage() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  return (
    <main className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <h1 className="text-4xl sm:text-5xl font-bold mb-12 text-center animate-fade-in-up">Testimonials</h1>

        {/* Slideshow */}
        <div className="max-w-4xl mx-auto mb-20">
          <div className="relative bg-card rounded-lg p-8 sm:p-12 min-h-[300px] flex items-center">
            <Quote className="absolute top-8 left-8 text-primary/20" size={48} />

            <div className="relative z-10 w-full">
              <p className="text-xl sm:text-2xl mb-6 leading-relaxed animate-fade-in">
                {testimonials[currentIndex].text}
              </p>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-semibold text-lg">{testimonials[currentIndex].name}</p>
                  {testimonials[currentIndex].role && (
                    <p className="text-muted-foreground">{testimonials[currentIndex].role}</p>
                  )}
                </div>
              </div>
            </div>

            <button
              onClick={handlePrevious}
              className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-secondary hover:bg-secondary/80 transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={24} />
            </button>

            <button
              onClick={handleNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-secondary hover:bg-secondary/80 transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight size={24} />
            </button>
          </div>

          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentIndex ? "bg-primary w-8" : "bg-muted"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className="bg-card rounded-lg p-6 animate-scale-in hover:shadow-lg transition-shadow"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <Quote className="text-primary/20 mb-4" size={32} />
              <p className="text-muted-foreground mb-4 leading-relaxed">{testimonial.text}</p>
              <div>
                <p className="font-semibold">{testimonial.name}</p>
                {testimonial.role && <p className="text-sm text-muted-foreground">{testimonial.role}</p>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}
