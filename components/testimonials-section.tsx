"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"

const testimonials = [
  {
    id: 1,
    name: "Ahmet Yılmaz",
    role: "Tıp Fakültesi Öğrencisi",
    content:
      "İhlas Yurdu'nda kaldığım süre boyunca kendimi evimde gibi hissettim. Çalışma ortamı ve sunulan imkanlar akademik başarımı olumlu yönde etkiledi.",
    avatar: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 2,
    name: "Ayşe Kaya",
    role: "Mühendislik Fakültesi Öğrencisi",
    content:
      "Yurdun sunduğu güvenli ve huzurlu ortam sayesinde derslerime odaklanabiliyorum. Personelin ilgisi ve yardımseverliği de ayrıca takdire şayan.",
    avatar: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 3,
    name: "Mehmet Demir",
    role: "Hukuk Fakültesi Öğrencisi",
    content:
      "Kütüphane ve etüt salonları sayesinde verimli çalışma imkanı buluyorum. Yemeklerin lezzeti ve çeşitliliği de çok iyi.",
    avatar: "/placeholder.svg?height=100&width=100",
  },
]

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0)
  const [autoplay, setAutoplay] = useState(true)

  useEffect(() => {
    if (!autoplay) return

    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [autoplay])

  const next = () => {
    setAutoplay(false)
    setCurrent((prev) => (prev + 1) % testimonials.length)
  }

  const prev = () => {
    setAutoplay(false)
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-16 md:py-24 bg-primary/5">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">
              Öğrenci Görüşleri
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Öğrencilerimiz Ne Diyor?</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              İhlas Yurdu'nda kalan öğrencilerimizin deneyimleri
            </p>
          </div>
        </div>
        <div className="mx-auto max-w-4xl py-12">
          <div className="relative overflow-hidden">
            <div className="flex items-center justify-center">
              <button
                onClick={prev}
                className="absolute left-0 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-background/80 shadow-md backdrop-blur-sm transition-all hover:bg-background"
                aria-label="Önceki"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
              <div className="relative h-full w-full overflow-hidden px-12">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={current}
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -100 }}
                    transition={{ duration: 0.5 }}
                    className="flex flex-col items-center space-y-6 text-center"
                  >
                    <div className="relative">
                      <Quote className="absolute -left-4 -top-4 h-8 w-8 text-primary/20" />
                      <p className="text-xl md:text-2xl italic text-muted-foreground">
                        "{testimonials[current].content}"
                      </p>
                    </div>
                    <div className="flex flex-col items-center space-y-2">
                      <div className="relative h-16 w-16 overflow-hidden rounded-full border-2 border-primary/20">
                        <Image
                          src={testimonials[current].avatar || "/placeholder.svg"}
                          alt={testimonials[current].name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <h3 className="font-bold">{testimonials[current].name}</h3>
                        <p className="text-sm text-muted-foreground">{testimonials[current].role}</p>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
              <button
                onClick={next}
                className="absolute right-0 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-background/80 shadow-md backdrop-blur-sm transition-all hover:bg-background"
                aria-label="Sonraki"
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            </div>
            <div className="mt-6 flex justify-center space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setAutoplay(false)
                    setCurrent(index)
                  }}
                  className={`h-2 w-2 rounded-full transition-all duration-300 ${
                    current === index ? "w-6 bg-primary" : "bg-primary/20"
                  }`}
                  aria-label={`Görüş ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
