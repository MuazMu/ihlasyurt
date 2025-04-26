import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

const services = [
  {
    id: "konaklama",
    title: "Konaklama",
    description: "Modern ve konforlu odalarımızda öğrencilerimize ev konforu sunuyoruz.",
    image: "/placeholder.svg?height=600&width=800",
    features: [
      "1, 2, 3 ve 4 kişilik oda seçenekleri",
      "Her odada çalışma masası ve sandalye",
      "Geniş gardıroplar",
      "Kaliteli yatak ve nevresimler",
      "24 saat sıcak su",
      "Merkezi ısıtma sistemi",
      "Ücretsiz Wi-Fi",
    ],
  },
  {
    id: "yemek",
    title: "Yemek Hizmetleri",
    description: "Uzman aşçılarımız tarafından hazırlanan sağlıklı ve lezzetli menüler.",
    image: "/placeholder.svg?height=600&width=800",
    features: [
      "Sabah, öğle ve akşam yemekleri",
      "Dengeli ve besleyici menüler",
      "Hijyenik ortamda hazırlanan yemekler",
      "Diyet ve vejetaryen menü seçenekleri",
      "Modern ve ferah yemekhane",
      "Hafta sonu kahvaltı ve akşam yemeği",
      "Ara öğün imkanları",
    ],
  },
  {
    id: "guvenlik",
    title: "Güvenlik",
    description: "Öğrencilerimizin güvenliği için 7/24 güvenlik hizmeti sunuyoruz.",
    image: "/placeholder.svg?height=600&width=800",
    features: [
      "24 saat güvenlik personeli",
      "Kapalı devre kamera sistemi",
      "Parmak izi veya kart ile giriş sistemi",
      "Yangın alarm ve söndürme sistemleri",
      "Acil durum çıkışları",
      "Düzenli güvenlik kontrolleri",
      "Ziyaretçi kayıt sistemi",
    ],
  },
  {
    id: "etut-kutuphane",
    title: "Etüt & Kütüphane",
    description: "Akademik başarınız için sessiz ve konforlu çalışma alanları.",
    image: "/placeholder.svg?height=600&width=800",
    features: [
      "Geniş ve sessiz kütüphane",
      "Grup çalışma odaları",
      "Bireysel çalışma alanları",
      "Zengin kitap koleksiyonu",
      "Online kaynaklara erişim",
      "Ders çalışma saatleri düzenlemesi",
      "Akademik danışmanlık hizmetleri",
    ],
  },
  {
    id: "sosyal",
    title: "Sosyal Aktiviteler",
    description: "Kişisel gelişiminizi destekleyen çeşitli etkinlikler düzenliyoruz.",
    image: "/placeholder.svg?height=600&width=800",
    features: [
      "Kültürel geziler",
      "Seminerler ve workshoplar",
      "Kulüp faaliyetleri",
      "Film ve belgesel gösterimleri",
      "Müzik ve sanat etkinlikleri",
      "Spor turnuvaları",
      "Sosyal sorumluluk projeleri",
    ],
  },
]

export default function HizmetlerPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">
        <section className="relative py-24 md:py-32" id="top">
          <div className="absolute inset-0 z-0">
            <Image
              src="/placeholder.svg?height=1080&width=1920"
              alt="İhlas Yurdu Hizmetleri"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/60" />
          </div>
          <div className="container relative z-10 px-4 md:px-6">
            <div className="mx-auto max-w-3xl text-center text-white">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">Hizmetlerimiz</h1>
              <p className="mt-4 text-xl text-white/90">İhlas Yurdu'nda öğrencilerimize sunduğumuz imkanlar</p>
            </div>
          </div>
        </section>

        {services.map((service, index) => (
          <section
            key={service.id}
            id={service.id}
            className={`py-16 md:py-24 ${index % 2 === 1 ? "bg-muted/30" : "bg-white"}`}
          >
            <div className="container px-4 md:px-6">
              <div
                className={`grid gap-12 md:grid-cols-2 md:items-center ${index % 2 === 1 ? "md:grid-flow-col" : ""}`}
              >
                <div className="space-y-4">
                  <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">
                    Hizmetlerimiz
                  </div>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">{service.title}</h2>
                  <p className="text-muted-foreground">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <ChevronRight className="h-4 w-4 text-primary" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-col gap-2 min-[400px]:flex-row pt-4">
                    <Link href={`/hizmetler/${service.id}`} passHref>
                      <Button className="inline-flex items-center gap-2 transition-transform hover:translate-x-1">
                        Detaylı Bilgi
                        <ChevronRight className="h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </div>
                <div className="relative aspect-video overflow-hidden rounded-xl">
                  <Image
                    src={service.image || "/placeholder.svg"}
                    width={800}
                    height={600}
                    alt={service.title}
                    className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
              </div>
            </div>
          </section>
        ))}
      </main>
      <Footer />
    </div>
  )
}
