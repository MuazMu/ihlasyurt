import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

const announcements = Array.from({ length: 12 }).map((_, index) => ({
  id: index + 1,
  title: "2023-2024 Kayıt Dönemi Başladı",
  date: "12 Haziran 2023",
  excerpt:
    "Yeni eğitim-öğretim yılı için kayıtlarımız başlamıştır. Erken kayıt avantajlarından yararlanmak için acele edin.",
  image: "/placeholder.svg?height=400&width=600",
}))

export default function DuyurularPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">
        <section className="relative py-24 md:py-32" id="top">
          <div className="absolute inset-0 z-0">
            <Image
              src="/placeholder.svg?height=1080&width=1920"
              alt="İhlas Yurdu Duyurular"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/60" />
          </div>
          <div className="container relative z-10 px-4 md:px-6">
            <div className="mx-auto max-w-3xl text-center text-white">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">Duyurular</h1>
              <p className="mt-4 text-xl text-white/90">Yurdumuzla ilgili en güncel haberler ve duyurular</p>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {announcements.map((announcement) => (
                <div
                  key={announcement.id}
                  className="group relative overflow-hidden rounded-lg border bg-background transition-all hover:shadow-lg"
                >
                  <div className="aspect-video overflow-hidden">
                    <Image
                      src={announcement.image || "/placeholder.svg"}
                      alt={announcement.title}
                      width={600}
                      height={400}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-6">
                    <span className="text-sm text-muted-foreground">{announcement.date}</span>
                    <h3 className="mt-2 text-xl font-bold group-hover:text-primary transition-colors">
                      {announcement.title}
                    </h3>
                    <p className="mt-2 text-muted-foreground">{announcement.excerpt}</p>
                    <div className="mt-4 flex items-center">
                      <Link
                        href={`/duyurular/${announcement.id}`}
                        className="text-sm font-medium text-primary group-hover:underline"
                      >
                        Devamını Oku
                      </Link>
                      <ArrowRight className="ml-1 h-4 w-4 text-primary transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 flex justify-center">
              <Button variant="outline">Daha Fazla Yükle</Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
