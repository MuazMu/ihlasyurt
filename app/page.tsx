import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"
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
                  Hüseyin Hakkı - Evinizden Uzakta Eviniz
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

        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}
