import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronRight, ArrowRight } from "lucide-react"
import HeroSection from "@/components/hero-section"
import FeaturesSection from "@/components/features-section"
import GallerySection from "@/components/gallery-section"
import ContactSection from "@/components/contact-section"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">
        <HeroSection />

        {/* Hakkımızda Bölümü */}
        <section className="py-16 md:py-24 bg-white" id="hakkimizda">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <div className="inline-block rounded-lg bg-ihlas-blue/10 px-3 py-1 text-sm text-ihlas-blue">
                  Hakkımızda
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl gradient-text">
                  İhlas Yurdu - Evinizden Uzakta Eviniz
                </h2>
                <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  İhlas Yurdu, öğrencilere konforlu, güvenli ve akademik başarıyı destekleyen bir yaşam alanı
                  sunmaktadır. Modern tesislerimiz, profesyonel kadromuz ve öğrenci odaklı yaklaşımımızla eğitim
                  hayatınızı destekliyoruz.
                </p>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link href="/hakkimizda#top" passHref>
                    <Button className="inline-flex items-center gap-2 transition-transform hover:translate-x-1 bg-gradient-to-r from-ihlas-blue to-ihlas-teal text-white">
                      Daha Fazla Bilgi
                      <ChevronRight className="h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="relative aspect-video overflow-hidden rounded-xl">
                <Image
                  src="/images/building-exterior.jpeg"
                  width={1280}
                  height={720}
                  alt="İhlas Yurdu Binası"
                  className="object-cover w-full h-full transition-transform duration-500 hover:scale-105"
                />
              </div>
            </div>
          </div>
        </section>

        <FeaturesSection />

        {/* İstatistikler Bölümü */}
        <section
          className="py-12 md:py-16 bg-gradient-to-r from-ihlas-blue/10 via-ihlas-teal/10 to-ihlas-blue/10"
          id="istatistikler"
        >
          <div className="container px-4 md:px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div className="space-y-2">
                <h3 className="text-4xl font-bold text-ihlas-blue">500+</h3>
                <p className="text-sm font-medium">Öğrenci Kapasitesi</p>
              </div>
              <div className="space-y-2">
                <h3 className="text-4xl font-bold text-ihlas-teal">20+</h3>
                <p className="text-sm font-medium">Yıllık Deneyim</p>
              </div>
              <div className="space-y-2">
                <h3 className="text-4xl font-bold text-ihlas-orange">24/7</h3>
                <p className="text-sm font-medium">Güvenlik</p>
              </div>
              <div className="space-y-2">
                <h3 className="text-4xl font-bold text-ihlas-green">100%</h3>
                <p className="text-sm font-medium">Öğrenci Memnuniyeti</p>
              </div>
            </div>
          </div>
        </section>

        <GallerySection />

        {/* Duyurular Bölümü */}
        <section className="py-16 md:py-24 bg-white" id="duyurular">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-ihlas-blue/10 px-3 py-1 text-sm text-ihlas-blue">
                  Duyurular
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl gradient-text">
                  Son Gelişmeler
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Yurdumuzla ilgili en güncel haberler ve duyurular
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-start gap-8 py-12 md:grid-cols-2 lg:gap-12">
              {[1, 2, 3, 4].map((item) => (
                <div
                  key={item}
                  className="group relative overflow-hidden rounded-lg border bg-background p-1 transition-all hover:shadow-lg hover:-translate-y-1"
                >
                  <Link href={`/duyurular/${item}`} className="block p-5">
                    <div className="flex flex-col space-y-2">
                      <span className="text-sm text-muted-foreground">12 Haziran 2023</span>
                      <h3 className="text-xl font-bold group-hover:text-ihlas-blue transition-colors">
                        2023-2024 Kayıt Dönemi Başladı
                      </h3>
                      <p className="text-muted-foreground">
                        Yeni eğitim-öğretim yılı için kayıtlarımız başlamıştır. Erken kayıt avantajlarından yararlanmak
                        için acele edin.
                      </p>
                      <div className="flex items-center pt-2">
                        <span className="text-sm font-medium text-ihlas-blue group-hover:underline">Devamını Oku</span>
                        <ArrowRight className="ml-1 h-4 w-4 text-ihlas-blue transition-transform group-hover:translate-x-1" />
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
            <div className="flex justify-center">
              <Link href="/duyurular" passHref>
                <Button
                  variant="outline"
                  className="gap-1 bg-gradient-to-r from-ihlas-blue/10 to-ihlas-teal/10 hover:bg-ihlas-blue/20"
                >
                  Tüm Duyurular
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}
