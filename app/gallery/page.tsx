import Image from "next/image"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function Gallery() {
  const images = [
    { src: "/images/entrance.png", alt: "Entrance", title: "Main Entrance" },
    { src: "/images/single-room.png", alt: "Single Room", title: "Single Room" },
    { src: "/images/triple-room.png", alt: "Triple Room", title: "Triple Room" },
    { src: "/images/mosque.png", alt: "Mosque", title: "Prayer Room" },
    { src: "/images/dining-hall.png", alt: "Dining Hall", title: "Dining Hall" },
    { src: "/images/library.png", alt: "Library", title: "Library" },
    { src: "/images/common-area.png", alt: "Common Area", title: "Common Area" },
    { src: "/images/study-room.png", alt: "Study Room", title: "Study Room" },
    { src: "/images/study-area.png", alt: "Study Area", title: "Study Area" },
  ]

  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar />

      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-12">Gallery</h1>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {images.map((image, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition">
                <div className="relative h-64 w-full">
                  <Image
                    src={image.src || "/placeholder.svg"}
                    alt={image.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-semibold text-center">{image.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
