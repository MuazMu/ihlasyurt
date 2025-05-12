import { BookOpen, Utensils, Users, User, Home, Phone, MapPin, Bath } from "lucide-react"
import { MosqueIcon } from "@/components/mosque-icon"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import RoomCard from "@/components/room-card"
import FacilitySection from "@/components/facility-section"
import HeroCarousel from "@/components/hero-carousel"
import Link from "next/link"

export default function HomePage() {
  const heroSlides = [
    {
      image: "/images/oda1.jpg",
      title: "İhlas Yurdu",
      description: "Evinizden uzakta eviniz",
    },
    {
      image: "/images/pic3.jpeg",
      title: "Konforlu Odalar",
      description: "Rahat ve huzurlu bir ortamda konaklama",
    },
    {
      image: "/images/common-area.png",
      title: "Sosyal Ortam",
      description: "Arkadaşlarınızla keyifli vakit geçirebileceğiniz alanlar",
    },
  ]

  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Hero Carousel Section */}
      <HeroCarousel slides={heroSlides} />

      {/* About Section */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">İhlas Yurdu'na Hoş Geldiniz</h2>
        <p className="text-lg text-center max-w-3xl mx-auto mb-8">
          İhlas Yurdu, öğrencilere huzurlu bir ortamda konforlu konaklama ve mükemmel tesisler sunmaktadır. Yurdumuz,
          tüm ihtiyaçlarınızı karşılamak için çeşitli oda tipleri, çalışma alanları, yemek tesisleri ve ibadet odaları
          sunmaktadır.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="flex justify-center mb-4">
              <Home className="w-12 h-12 text-blue-700" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Konforlu Odalar</h3>
            <p>Tek, üç veya dört kişilik odalardan seçim yapın, hepsi konfor ve çalışma için tasarlanmıştır.</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="flex justify-center mb-4">
              <BookOpen className="w-12 h-12 text-blue-700" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Çalışma İmkanları</h3>
            <p>Akademik başarınız için gereken her şeyle donatılmış çoklu kütüphaneler ve çalışma odaları.</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="flex justify-center mb-4">
              <MosqueIcon className="w-12 h-12" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Mescit</h3>
            <p>Huzurlu ve manevi bir ortamda günlük ibadetler için özel mescit.</p>
          </div>
        </div>
      </section>

      {/* Accommodation Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Konaklama Seçenekleri</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <RoomCard
              title="Tek Kişilik Oda"
              description="Mahremiyet ve sessiz bir çalışma ortamı tercih eden öğrenciler için idealdir."
              imageSrc="/images/1kisilik-oda.jpeg"
              icon={<User className="w-5 h-5 text-blue-700" />}
            />

            <RoomCard
              title="Üç Kişilik Oda"
              description="Üç öğrenci için rahat yataklar ve çalışma alanı ile ekonomik seçenek."
              imageSrc="/images/pic2.jpeg"
              icon={<Users className="w-5 h-5 text-blue-700" />}
            />

            <RoomCard
              title="Dört Kişilik Oda"
              description="Dört öğrenci için geniş ve konforlu bir ortam sunan en ekonomik seçenek."
              imageSrc="/images/4-kisilik-oda.jpeg"
              icon={<Users className="w-5 h-5 text-blue-700" />}
            />
          </div>
        </div>
      </section>

      {/* Facilities Section */}
      <FacilitySection
        title="Mescit"
        description="Özel mescidimiz, günlük ibadetler için huzurlu bir ortam sağlar. Mescit, uygun seccadelerle donatılmıştır ve erkekler için ayrı alanlar bulunmaktadır."
        imageSrc="/images/mosque.png"
        icon={<MosqueIcon className="w-6 h-6" />}
        reverse={false}
      />

      <FacilitySection
        title="Yemekhane"
        description="Geniş yemekhanemiz günde üç öğün besleyici yemekler sunmaktadır. Menü çeşitlidir ve farklı diyet gereksinimlerine uygun seçenekler içerir."
        imageSrc="/images/dining-hall.png"
        icon={<Utensils className="w-6 h-6 text-blue-700" />}
        reverse={true}
      />

      <FacilitySection
        title="Kütüphane ve Çalışma Odaları"
        description="Öğrencilerin bireysel veya grup halinde çalışabilmeleri için çoklu çalışma alanları ve kütüphaneler mevcuttur. Tüm çalışma alanları rahat oturma yerleri ve uygun aydınlatma ile donatılmıştır."
        imageSrc="/images/kutuphane3.jpeg"
        icon={<BookOpen className="w-6 h-6 text-blue-700" />}
        reverse={false}
      />

      <FacilitySection
        title="Ortak Alanlar"
        description="Konforlu ortak alanlarımızda rahatlayın ve sosyalleşin. Bu alanlar, uzun bir çalışma gününün ardından dinlenmek için idealdir."
        imageSrc="/images/oturma-salon-2.jpeg"
        icon={<Users className="w-6 h-6 text-blue-700" />}
        reverse={true}
      />

      <FacilitySection
        title="Banyo ve Tuvalet"
        description="Her katta temiz ve modern banyo ve tuvalet alanları bulunmaktadır. Düzenli olarak temizlenen bu alanlar, öğrencilerimizin hijyen ihtiyaçlarını karşılamaktadır."
        imageSrc="/images/toilets.jpeg"
        icon={<Bath className="w-6 h-6 text-blue-700" />}
        reverse={false}
      />

      {/* Contact Section */}
      <section className="py-16 px-4 bg-blue-50">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Bize Ulaşın</h2>
          <div className="flex flex-col md:flex-row justify-center items-center gap-8 mb-8">
            <div className="flex items-center">
              <MapPin className="w-6 h-6 mr-2 text-blue-700" />
              <span>İstasyon, İriş Sk. No:5, 22100 Merkez/Edirne</span>
            </div>
            <div className="flex items-center">
              <Phone className="w-6 h-6 mr-2 text-blue-700" />
              <span>0284 235 25 31</span>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/on-kayit"
              className="bg-blue-700 text-white px-8 py-3 rounded-md font-medium hover:bg-blue-800 transition"
            >
              Ön Kayıt
            </Link>
            <Link
              href="/iletisim"
              className="border border-blue-700 text-blue-700 px-8 py-3 rounded-md font-medium hover:bg-blue-50 transition"
            >
              İletişim
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
