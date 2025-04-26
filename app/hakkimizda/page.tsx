"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function HakkimizdaPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">
        <section className="relative py-24 md:py-32" id="top">
          <div className="absolute inset-0 z-0">
            <Image src="/images/building-exterior.jpeg" alt="İhlas Yurdu" fill className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/40" />
          </div>
          <div className="container relative z-10 px-4 md:px-6">
            <div className="mx-auto max-w-3xl text-center text-white">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">Hakkımızda</h1>
              <p className="mt-4 text-xl text-white/90">İhlas Yurdu'nu daha yakından tanıyın</p>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="grid gap-12 md:grid-cols-2 md:items-center">
              <div className="space-y-4">
                <div className="inline-block rounded-lg bg-ihlas-blue/10 px-3 py-1 text-sm text-ihlas-blue">
                  Kurumsal
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl gradient-text">İhlas Yurdu Kimdir?</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    İhlas Yurdu, 2003 yılında kurulmuş olup, öğrencilere konforlu, güvenli ve akademik başarıyı
                    destekleyen bir yaşam alanı sunmaktadır. Yurdumuz, modern tesisleri, profesyonel kadrosu ve öğrenci
                    odaklı yaklaşımıyla eğitim hayatınızı desteklemektedir.
                  </p>
                  <p>
                    Amacımız, öğrencilerimize sadece barınma imkanı değil, aynı zamanda kişisel ve akademik
                    gelişimlerine katkı sağlayacak bir ortam sunmaktır. Bu doğrultuda, yurdumuzda düzenli olarak
                    seminerler, kültürel etkinlikler ve sosyal aktiviteler düzenlenmektedir.
                  </p>
                  <p>
                    İhlas Yurdu olarak, öğrencilerimizin başarısını ve mutluluğunu en önemli önceliğimiz olarak
                    görüyoruz. Bu nedenle, sürekli olarak hizmet kalitemizi artırmak için çalışıyoruz.
                  </p>
                </div>
              </div>
              <div className="relative aspect-video overflow-hidden rounded-xl">
                <Image
                  src="/images/building-exterior.jpeg"
                  width={1280}
                  height={720}
                  alt="İhlas Yurdu Binası"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-gradient-to-r from-ihlas-blue/5 via-ihlas-teal/5 to-ihlas-blue/5">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-3xl text-center">
              <div className="inline-block rounded-lg bg-ihlas-blue/10 px-3 py-1 text-sm text-ihlas-blue">
                Misyon & Vizyon
              </div>
              <h2 className="mt-4 text-3xl font-bold tracking-tighter sm:text-4xl gradient-text">
                Değerlerimiz ve Hedeflerimiz
              </h2>
            </div>
            <div className="mt-12 grid gap-8 md:grid-cols-2">
              <div className="rounded-lg border bg-card p-6 shadow-sm">
                <h3 className="text-2xl font-bold text-ihlas-blue">Misyonumuz</h3>
                <div className="mt-4 space-y-4 text-muted-foreground">
                  <p>
                    Öğrencilerimize güvenli, konforlu ve akademik başarılarını destekleyecek bir yaşam alanı sunmak,
                    onların kişisel ve sosyal gelişimlerine katkıda bulunmak ve eğitim hayatlarında başarılı olmalarını
                    sağlamak için gerekli tüm imkanları sağlamaktır.
                  </p>
                  <p>
                    Aynı zamanda, öğrencilerimizin toplumsal değerlere saygılı, sorumluluk sahibi ve özgüveni yüksek
                    bireyler olarak yetişmelerine katkıda bulunmayı hedefliyoruz.
                  </p>
                </div>
              </div>
              <div className="rounded-lg border bg-card p-6 shadow-sm">
                <h3 className="text-2xl font-bold text-ihlas-blue">Vizyonumuz</h3>
                <div className="mt-4 space-y-4 text-muted-foreground">
                  <p>
                    Türkiye'nin en kaliteli ve tercih edilen öğrenci yurtlarından biri olmak, sürekli yenilenen ve
                    gelişen hizmet anlayışıyla öğrencilerimizin beklentilerini en üst düzeyde karşılamak ve onların
                    başarılarına katkıda bulunmaktır.
                  </p>
                  <p>
                    Yenilikçi yaklaşımlarla öğrenci yurtları sektöründe öncü olmak ve kalite standartlarını sürekli
                    yükselterek örnek bir kurum olmayı hedefliyoruz.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="grid gap-8 md:grid-cols-2 md:items-center">
              <div className="order-2 md:order-1">
                <div className="grid grid-cols-2 gap-4">
                  <div className="aspect-square overflow-hidden rounded-lg">
                    <Image
                      src="/images/dorm-room-3.jpeg"
                      width={400}
                      height={400}
                      alt="2 Kişilik Oda"
                      className="h-full w-full object-cover transition-transform duration-500 hover:scale-110"
                    />
                  </div>
                  <div className="aspect-square overflow-hidden rounded-lg">
                    <Image
                      src="/images/dorm-room-4.jpeg"
                      width={400}
                      height={400}
                      alt="2 Kişilik Oda - Farklı Açı"
                      className="h-full w-full object-cover transition-transform duration-500 hover:scale-110"
                    />
                  </div>
                  <div className="aspect-square overflow-hidden rounded-lg">
                    <Image
                      src="/images/dorm-room-5.jpeg"
                      width={400}
                      height={400}
                      alt="3 Kişilik Oda"
                      className="h-full w-full object-cover transition-transform duration-500 hover:scale-110"
                    />
                  </div>
                  <div className="aspect-square overflow-hidden rounded-lg">
                    <Image
                      src="/images/dorm-room-6.jpeg"
                      width={400}
                      height={400}
                      alt="Oda Girişi"
                      className="h-full w-full object-cover transition-transform duration-500 hover:scale-110"
                    />
                  </div>
                </div>
              </div>
              <div className="order-1 md:order-2 space-y-4">
                <div className="inline-block rounded-lg bg-ihlas-blue/10 px-3 py-1 text-sm text-ihlas-blue">
                  Tesislerimiz
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl gradient-text">
                  Modern ve Konforlu Yaşam Alanları
                </h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    İhlas Yurdu, öğrencilerimizin rahat ve huzurlu bir ortamda eğitim hayatlarını sürdürebilmeleri için
                    modern tesislere sahiptir. Yurdumuzda, konforlu odalar, geniş çalışma alanları, spor salonu,
                    yemekhane ve sosyal aktivite alanları bulunmaktadır.
                  </p>
                  <p>
                    Tüm odalarımız, öğrencilerimizin ihtiyaçları düşünülerek tasarlanmış olup, çalışma masası, gardırop,
                    yatak ve internet erişimi gibi temel ihtiyaçları karşılayacak şekilde donatılmıştır.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button
                    className="inline-flex items-center gap-2 transition-transform hover:translate-x-1 bg-gradient-to-r from-ihlas-blue to-ihlas-teal text-white"
                    onClick={() => window.scrollTo(0, 0)}
                  >
                    Başvuru Yap
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
