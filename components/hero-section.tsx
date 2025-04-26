"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { ChevronRight } from "lucide-react"

const slides = [
  {
    id: 1,
    title: "Hüseyin Hakkı Erkek Öğrenci Yurdu'na Hoş Geldiniz",
    description: "Edirne'de eğitim hayatınızda size ev konforu sunan modern yurt",
    image: "/images/building-exterior.jpeg",
  },
  {
    id: 2,
    title: "Modern ve Konforlu Odalar",
    description: "Öğrencilerimizin rahatı için tasarlanmış yaşam alanları",
    image: "/images/dorm-room-1.jpeg",
  },
  {
    id: 3,
    title: "Akademik Başarı İçin İdeal Ortam",
    description: "Çalışma salonları ve kütüphanemiz ile akademik başarınıza katkı sağlıyoruz",
    image: "/images/study-room.jpeg",
  },
]

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative h-[90vh] overflow-hidden">
      {slides.map((slide, index) => (
        <motion.div
          key={slide.id}
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{
            opacity: currentSlide === index ? 1 : 0,
            scale: currentSlide === index ? 1 : 1.1,
          }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          <Image
            src={slide.image || "/placeholder.svg"}
            alt={slide.title}
            fill
            className="object-cover"
            priority={index === 0}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/40" />
        </motion.div>
      ))}

      <div className="container relative z-10 flex h-full flex-col items-center justify-center px-4 text-center text-white md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-3xl space-y-4"
        >
          <motion.h1
            key={slides[currentSlide].id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl"
          >
            {slides[currentSlide].title}
          </motion.h1>
          <motion.p
            key={`desc-${slides[currentSlide].id}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mx-auto max-w-[700px] text-xl md:text-2xl/relaxed lg:text-3xl/relaxed"
          >
            {slides[currentSlide].description}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <Link href="/basvuru" passHref>
              <Button
                size="lg"
                className="bg-gradient-to-r from-ihlas-blue to-ihlas-teal text-white hover:opacity-90 transition-all duration-300 hover:scale-105"
              >
                Başvuru Yap
              </Button>
            </Link>
            <Link href="/hizmetler" passHref>
              <Button
                size="lg"
                variant="outline"
                className="bg-white/10 backdrop-blur-sm text-white border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105"
              >
                Hizmetlerimiz
                <ChevronRight className="ml-1 h-4 w-4" />
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </div>

      <div className="absolute bottom-6 left-0 right-0 z-10 flex justify-center gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-2 w-2 rounded-full transition-all duration-300 ${
              currentSlide === index ? "w-8 bg-ihlas-teal" : "bg-white/50"
            }`}
            aria-label={`Slayt ${index + 1}`}
          />
        ))}
      </div>
    </section>
  )
}
