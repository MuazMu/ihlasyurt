"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { X } from "lucide-react"

const images = [
  {
    src: "/images/dorm-room-1.jpeg",
    alt: "3 Kişilik Oda",
    category: "oda",
  },
  {
    src: "/images/dorm-room-2.jpeg",
    alt: "3 Kişilik Oda - Farklı Açı",
    category: "oda",
  },
  {
    src: "/images/dorm-room-3.jpeg",
    alt: "2 Kişilik Oda",
    category: "oda",
  },
  {
    src: "/images/dorm-room-4.jpeg",
    alt: "2 Kişilik Oda - Farklı Açı",
    category: "oda",
  },
  {
    src: "/images/building-exterior.jpeg",
    alt: "Yurt Binası",
    category: "bina",
  },
  {
    src: "/images/study-room.jpeg",
    alt: "Çalışma Salonu",
    category: "kutuphane",
  },
]

export default function GallerySection() {
  const [selectedImage, setSelectedImage] = useState(null)
  const [filter, setFilter] = useState("all")

  const filteredImages = filter === "all" ? images : images.filter((img) => img.category === filter)

  const categories = [
    { id: "all", label: "Tümü" },
    { id: "bina", label: "Bina" },
    { id: "oda", label: "Odalar" },
    { id: "kutuphane", label: "Kütüphane" },
  ]

  return (
    <section className="py-16 md:py-24 bg-white" id="galeri">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-ihlas-blue/10 px-3 py-1 text-sm text-ihlas-blue">Galeri</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl gradient-text">
              Yurdumuzu Keşfedin
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              İhlas Yurdu'nun modern tesislerini ve sunduğu imkanları görüntüleyin
            </p>
          </div>
        </div>

        <div className="mt-8 flex flex-wrap justify-center gap-2">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setFilter(category.id)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-all ${
                filter === category.id
                  ? "bg-gradient-to-r from-ihlas-blue to-ihlas-teal text-white"
                  : "bg-muted hover:bg-muted/80"
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        <motion.div layout className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
          <AnimatePresence>
            {filteredImages.map((image, index) => (
              <motion.div
                key={image.src}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="group relative aspect-square cursor-pointer overflow-hidden rounded-lg"
                onClick={() => setSelectedImage(image)}
              >
                <Image
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent transition-opacity duration-300 opacity-0 group-hover:opacity-100" />
                <div className="absolute inset-0 flex items-end justify-start p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <p className="text-lg font-bold text-white">{image.alt}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {selectedImage && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4">
            <div className="relative max-h-[90vh] max-w-[90vw]">
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -right-4 -top-4 flex h-8 w-8 items-center justify-center rounded-full bg-white text-black"
              >
                <X className="h-4 w-4" />
              </button>
              <Image
                src={selectedImage.src || "/placeholder.svg"}
                alt={selectedImage.alt}
                width={1200}
                height={800}
                className="max-h-[80vh] rounded-lg object-contain"
              />
              <p className="mt-2 text-center text-white">{selectedImage.alt}</p>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

function AnimatePresence({ children }) {
  return <>{children}</>
}
