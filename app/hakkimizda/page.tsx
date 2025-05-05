import Image from "next/image"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { CheckCircle } from "lucide-react"

export default function Hakkimizda() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar />

      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-bold text-center mb-12">Hakkımızda</h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-2xl font-bold mb-6">İhlas Yurdu</h2>
              <p className="text-gray-600 mb-4">
                İhlas Yurdu, öğrencilerin akademik başarılarını destekleyen, manevi gelişimlerine katkı sağlayan ve
                güvenli bir ortamda barınma ihtiyaçlarını karşılayan bir erkek öğrenci yurdudur.
              </p>
              <p className="text-gray-600 mb-4">
                Yurdumuz, Edirne'nin merkezi konumunda yer almakta olup, üniversite kampüslerine ve şehir merkezine
                kolay ulaşım imkanı sunmaktadır. Modern ve konforlu yaşam alanlarımız, öğrencilerimizin akademik
                başarılarına katkı sağlayacak şekilde tasarlanmıştır.
              </p>
              <p className="text-gray-600">
                İhlas Yurdu olarak amacımız, öğrencilerimize sadece barınma imkanı sunmak değil, aynı zamanda onların
                kişisel ve manevi gelişimlerine katkı sağlayacak bir ortam oluşturmaktır.
              </p>
            </div>
            <div className="relative h-80 w-full rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/images/entrance.png"
                alt="İhlas Yurdu"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md mb-16">
            <h2 className="text-2xl font-bold mb-6 text-center">Misyonumuz ve Vizyonumuz</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-teal-600">Misyonumuz</h3>
                <p className="text-gray-600">
                  Öğrencilerimize güvenli, huzurlu ve akademik başarılarını destekleyecek bir ortam sunmak, manevi
                  değerlerine sahip çıkarak kişisel gelişimlerine katkı sağlamak ve topluma faydalı bireyler
                  yetiştirmelerine destek olmaktır.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4 text-teal-600">Vizyonumuz</h3>
                <p className="text-gray-600">
                  Öğrencilerin akademik, sosyal ve manevi gelişimlerini en üst düzeyde destekleyen, modern ve konforlu
                  yaşam alanları sunan, alanında öncü ve örnek bir öğrenci yurdu olmaktır.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-6 text-center">Neden İhlas Yurdu?</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start">
                <CheckCircle className="w-6 h-6 text-teal-600 mr-3 mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-2">Merkezi Konum</h3>
                  <p className="text-gray-600">
                    Üniversite kampüslerine ve şehir merkezine yakın, ulaşımı kolay bir konumda bulunmaktayız.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <CheckCircle className="w-6 h-6 text-teal-600 mr-3 mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-2">Modern ve Konforlu Odalar</h3>
                  <p className="text-gray-600">
                    Tek, iki ve üç kişilik odalarımız modern mobilyalar ve özel çalışma alanları ile donatılmıştır.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <CheckCircle className="w-6 h-6 text-teal-600 mr-3 mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-2">Güvenli Ortam</h3>
                  <p className="text-gray-600">
                    24 saat güvenlik personeli ve kamera sistemi ile öğrencilerimizin güvenliğini sağlıyoruz.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <CheckCircle className="w-6 h-6 text-teal-600 mr-3 mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-2">Besleyici Yemekler</h3>
                  <p className="text-gray-600">
                    Uzman aşçılarımız tarafından hazırlanan besleyici ve lezzetli yemekler sunuyoruz.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <CheckCircle className="w-6 h-6 text-teal-600 mr-3 mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-2">Çalışma Ortamı</h3>
                  <p className="text-gray-600">
                    Kütüphane ve çalışma salonlarımız ile öğrencilerimizin akademik başarılarını destekliyoruz.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <CheckCircle className="w-6 h-6 text-teal-600 mr-3 mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-2">Manevi Ortam</h3>
                  <p className="text-gray-600">
                    Mescidimiz ve manevi etkinliklerimiz ile öğrencilerimizin manevi gelişimlerine katkı sağlıyoruz.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
