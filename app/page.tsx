import Image from "next/image"
import { ChurchIcon as Mosque, Book, Utensils, Users, User } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import RoomCard from "@/components/room-card"
import FacilitySection from "@/components/facility-section"

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[60vh] w-full">
        <Image
          src="/images/entrance.png"
          alt="Ihlas Yurdu Entrance"
          fill
          priority
          className="object-cover brightness-75"
          sizes="100vw"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold text-center mb-4">Ihlas Yurdu</h1>
          <p className="text-xl md:text-2xl text-center max-w-3xl px-4">Your comfortable home away from home</p>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Welcome to Ihlas Yurdu</h2>
        <p className="text-lg text-center max-w-3xl mx-auto mb-8">
          Ihlas Yurdu provides comfortable accommodation and excellent facilities for students in a peaceful
          environment. Our dormitory offers various room types, study spaces, dining facilities, and prayer rooms to
          meet all your needs.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="flex justify-center mb-4">
              <Home className="w-12 h-12 text-emerald-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Comfortable Rooms</h3>
            <p>Choose from single, double, or triple occupancy rooms, all designed for comfort and study.</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="flex justify-center mb-4">
              <Book className="w-12 h-12 text-emerald-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Study Facilities</h3>
            <p>Multiple libraries and study rooms equipped with everything you need for academic success.</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="flex justify-center mb-4">
              <Mosque className="w-12 h-12 text-emerald-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Prayer Room</h3>
            <p>A dedicated mosque for daily prayers in a peaceful and spiritual environment.</p>
          </div>
        </div>
      </section>

      {/* Accommodation Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Accommodation Options</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <RoomCard
              title="Single Room"
              description="Perfect for students who prefer privacy and a quiet environment for studying."
              imageSrc="/images/single-room.png"
              icon={<User className="w-5 h-5" />}
            />

            <RoomCard
              title="Double Room"
              description="Shared accommodation for two students with all necessary amenities."
              imageSrc="/images/double-room.png"
              icon={<Users className="w-5 h-5" />}
            />

            <RoomCard
              title="Triple Room"
              description="Economical option for three students with comfortable beds and study space."
              imageSrc="/images/triple-room.png"
              icon={<Users className="w-5 h-5" />}
            />
          </div>
        </div>
      </section>

      {/* Facilities Section */}
      <FacilitySection
        title="Mosque"
        description="Our dedicated prayer room provides a peaceful environment for daily prayers. The mosque is equipped with proper prayer mats and has separate areas for men and women."
        imageSrc="/images/mosque.png"
        icon={<Mosque className="w-6 h-6 text-emerald-600" />}
        reverse={false}
      />

      <FacilitySection
        title="Dining Hall"
        description="Our spacious dining hall serves nutritious meals three times a day. The menu is varied and caters to different dietary requirements."
        imageSrc="/images/dining-hall.png"
        icon={<Utensils className="w-6 h-6 text-emerald-600" />}
        reverse={true}
      />

      <FacilitySection
        title="Library & Study Rooms"
        description="Multiple study spaces and libraries are available for students to study individually or in groups. All study areas are equipped with comfortable seating and proper lighting."
        imageSrc="/images/library.png"
        icon={<Book className="w-6 h-6 text-emerald-600" />}
        reverse={false}
      />

      <FacilitySection
        title="Common Areas"
        description="Relax and socialize in our comfortable common areas. These spaces are perfect for unwinding after a long day of studies."
        imageSrc="/images/common-area.png"
        icon={<Users className="w-6 h-6 text-emerald-600" />}
        reverse={true}
      />

      {/* Contact Section */}
      <section className="py-16 px-4 bg-emerald-50">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Contact Us</h2>
          <p className="text-lg mb-8">
            Interested in staying at Ihlas Yurdu? Contact us for more information or to schedule a visit.
          </p>
          <button className="bg-emerald-600 text-white px-8 py-3 rounded-md font-medium hover:bg-emerald-700 transition">
            Get in Touch
          </button>
        </div>
      </section>

      <Footer />
    </main>
  )
}
