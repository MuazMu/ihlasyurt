import Image from "next/image"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function Gallery() {
  const images = [
    { src: "/images/yurt1.jpeg", alt: "Yurt Binası", title: "İhlas Yurdu" },
    { src: "/images/1kisilik-oda.jpeg", alt: "Tek Kişilik Oda", title: "Tek Kişilik Oda" },
    { src: "/images/pic2.jpeg", alt: "Üç Kişilik Oda", title: "Üç Kişilik Oda" },
    { src: "/images/pic3.jpeg", alt: "Dört Kişilik Oda", title: "Dört Kişilik Oda (Alternatif)" },
    { src: "/images/4-kisilik-oda.jpeg", alt: "Dört Kişilik Oda", title: "Dört Kişilik Oda" },
    { src: "/images/mosque.png", alt: "Mescit", title: "Mescit" },
    { src: "/images/dining-hall.png", alt: "Yemekhane", title: "Yemekhane" },
    { src: "/images/kutuphane3.jpeg", alt: "Kütüphane", title: "Kütüphane" },
    { src: "/images/oturma-salon-2.jpeg", alt: "Ortak Alan", title: "Ortak Alan" },
    { src: "/images/toilets.jpeg", alt: "Banyo ve Tuvalet", title: "Banyo ve Tuvalet" },
  ]

  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar />

      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-12">Galeri</h1>

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
