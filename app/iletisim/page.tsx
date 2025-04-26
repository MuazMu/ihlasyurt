import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import ContactSection from "@/components/contact-section"
import Image from "next/image"

export default function IletisimPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">
        <section className="relative py-24 md:py-32" id="top">
          <div className="absolute inset-0 z-0">
            <Image
              src="/placeholder.svg?height=1080&width=1920"
              alt="İhlas Yurdu İletişim"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/60" />
          </div>
          <div className="container relative z-10 px-4 md:px-6">
            <div className="mx-auto max-w-3xl text-center text-white">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">İletişim</h1>
              <p className="mt-4 text-xl text-white/90">Sorularınız için bizimle iletişime geçebilirsiniz</p>
            </div>
          </div>
        </section>

        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}
