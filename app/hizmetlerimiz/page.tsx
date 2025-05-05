import Image from "next/image"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Wifi, Utensils, ShieldCheck, BookOpen, Shirt, Bath } from "lucide-react"

export default function Hizmetlerimiz() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar />

      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-bold text-center mb-12">Hizmetlerimiz</h1>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="bg-teal-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                <Wifi className="w-8 h-8 text-teal-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Ücretsiz Wi-Fi</h3>
              <p className="text-gray-600">
                Yurdumuzun her alanında yüksek hızlı internet erişimi sağlanmaktadır. Öğrencilerimiz ders çalışma ve
                araştırma yaparken kesintisiz internet hizmetinden faydalanabilirler.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="bg-teal-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                <Utensils className="w-8 h-8 text-teal-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Yemek Hizmeti</h3>
              <p className="text-gray-600">
                Uzman aşçılarımız tarafından hazırlanan besleyici ve lezzetli yemekler günde üç öğün olarak
                sunulmaktadır. Menülerimiz dengeli beslenme ilkelerine göre hazırlanmaktadır.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="bg-teal-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                <ShieldCheck className="w-8 h-8 text-teal-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">24 Saat Güvenlik</h3>
              <p className="text-gray-600">
                Öğrencilerimizin güvenliği için 24 saat güvenlik personeli ve kamera sistemi bulunmaktadır. Yurdumuza
                giriş çıkışlar kontrollü bir şekilde yapılmaktadır.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="bg-teal-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                <BookOpen className="w-8 h-8 text-teal-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Kütüphane ve Çalışma Salonları</h3>
              <p className="text-gray-600">
                Öğrencilerimizin akademik başarılarını desteklemek için sessiz ve konforlu çalışma alanları sunuyoruz.
                Kütüphanemizde çeşitli kaynak kitaplar bulunmaktadır.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="bg-teal-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                <Shirt className="w-8 h-8 text-teal-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Çamaşır Hizmeti</h3>
              <p className="text-gray-600">
                Öğrencilerimiz için çamaşır yıkama, kurutma ve ütüleme hizmetleri sunulmaktadır. Çamaşırhanelerimiz
                modern makinelerle donatılmıştır.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="bg-teal-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                <Bath className="w-8 h-8 text-teal-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Banyo ve Tuvalet</h3>
              <p className="text-gray-600">
                Her katta temiz ve modern banyo ve tuvalet alanları bulunmaktadır. Düzenli olarak temizlenen bu alanlar,
                öğrencilerimizin hijyen ihtiyaçlarını karşılamaktadır.
              </p>
            </div>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md mb-16">
            <h2 className="text-2xl font-bold mb-6 text-center">Tesislerimiz</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div>
                <div className="relative h-64 w-full rounded-lg overflow-hidden shadow-md mb-4">
                  <Image
                    src="/images/dining-hall.png"
                    alt="Yemekhane"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2">Yemekhane</h3>
                <p className="text-gray-600">
                  Geniş yemekhanemizde günde üç öğün besleyici yemekler sunulmaktadır. Menülerimiz dengeli beslenme
                  ilkelerine göre hazırlanmakta ve farklı diyet gereksinimlerine uygun seçenekler içermektedir.
                </p>
              </div>

              <div>
                <div className="relative h-64 w-full rounded-lg overflow-hidden shadow-md mb-4">
                  <Image
                    src="/images/mosque.png"
                    alt="Mescit"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2">Mescit</h3>
                <p className="text-gray-600">
                  Özel mescidimiz, günlük ibadetler için huzurlu bir ortam sağlamaktadır. Mescidimiz, uygun seccadelerle
                  donatılmıştır ve öğrencilerimizin manevi gelişimlerine katkı sağlamaktadır.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <div className="relative h-64 w-full rounded-lg overflow-hidden shadow-md mb-4">
                  <Image
                    src="/images/toilets.jpeg"
                    alt="Banyo ve Tuvalet"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2">Banyo ve Tuvalet</h3>
                <p className="text-gray-600">
                  Her katta temiz ve modern banyo ve tuvalet alanları bulunmaktadır. Düzenli olarak temizlenen bu
                  alanlar, öğrencilerimizin hijyen ihtiyaçlarını karşılamaktadır.
                </p>
              </div>

              <div>
                <div className="relative h-64 w-full rounded-lg overflow-hidden shadow-md mb-4">
                  <Image
                    src="/images/oturma-salon-2.jpeg"
                    alt="Ortak Alan"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2">Ortak Alanlar</h3>
                <p className="text-gray-600">
                  Öğrencilerimizin sosyalleşebilecekleri ve dinlenebilecekleri geniş ortak alanlar bulunmaktadır. Bu
                  alanlar, uzun bir çalışma gününün ardından dinlenmek için idealdir.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-6 text-center">Oda Özellikleri</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div className="relative h-64 w-full rounded-lg overflow-hidden shadow-md">
                <Image
                  src="/images/pic7.jpeg"
                  alt="Tek Kişilik Oda"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white p-2 text-center">
                  Tek Kişilik Oda
                </div>
              </div>

              <div className="relative h-64 w-full rounded-lg overflow-hidden shadow-md">
                <Image
                  src="/images/pic2.jpeg"
                  alt="Üç Kişilik Oda"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white p-2 text-center">
                  Üç Kişilik Oda
                </div>
              </div>

              <div className="relative h-64 w-full rounded-lg overflow-hidden shadow-md">
                <Image
                  src="/images/4-kisilik-oda.jpeg"
                  alt="Dört Kişilik Oda"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white p-2 text-center">
                  Dört Kişilik Oda
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <p className="text-gray-600">Tüm odalarımızda aşağıdaki özellikler standart olarak bulunmaktadır:</p>

              <ul className="list-disc pl-5 text-gray-600 space-y-2">
                <li>Çalışma masası ve sandalyesi</li>
                <li>Gardırop</li>
                <li>Kitaplık</li>
                <li>Ortopedik yatak</li>
                <li>Merkezi ısıtma sistemi</li>
                <li>İnternet bağlantısı</li>
                <li>Temiz çarşaf ve nevresim takımları</li>
              </ul>

              <p className="text-gray-600">
                Odalarımız düzenli olarak temizlenmekte ve dezenfekte edilmektedir. Öğrencilerimizin rahatı ve huzuru
                için her türlü önlem alınmaktadır.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
