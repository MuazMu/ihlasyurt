"use client"

import { useState, useEffect } from "react"
import Image from "next/image"

interface Slide {
  image: string
  title: string
  description: string
}

interface HeroCarouselProps {
  slides: Slide[]
}

export default function HeroCarousel({ slides }: HeroCarouselProps) {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
    }, 5000)

    return () => clearInterval(interval)
  }, [slides.length])

  return (
    <section className="relative h-[80vh] w-full">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="relative h-full w-full">
            <Image
              src={slide.image || "/placeholder.svg"}
              alt={slide.title}
              fill
              priority
              className="object-cover"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-black/30" />
          </div>
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold text-center mb-4 px-4">{slide.title}</h1>
            <p className="text-xl md:text-2xl text-center max-w-3xl px-4">{slide.description}</p>
          </div>
        </div>
      ))}
    </section>
  )
}
