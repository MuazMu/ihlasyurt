import Image from "next/image"
import Link from "next/link"
import type { ReactNode } from "react"

interface FacilitySectionProps {
  title: string
  description: string
  imageSrc: string
  icon: ReactNode
  reverse: boolean
}

export default function FacilitySection({ title, description, imageSrc, icon, reverse }: FacilitySectionProps) {
  return (
    <section className={`py-16 px-4 ${reverse ? "bg-white" : "bg-gray-50"}`}>
      <div className="max-w-7xl mx-auto">
        <div className={`grid grid-cols-1 md:grid-cols-2 gap-8 items-center ${reverse ? "md:flex-row-reverse" : ""}`}>
          <div className={`${reverse ? "md:order-2" : ""}`}>
            <div className="relative h-80 w-full rounded-lg overflow-hidden shadow-lg">
              <Image
                src={imageSrc || "/placeholder.svg"}
                alt={title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>

          <div className={`${reverse ? "md:order-1" : ""}`}>
            <div className="flex items-center mb-4">
              {icon}
              <h2 className="text-3xl font-bold ml-3">{title}</h2>
            </div>
            <p className="text-lg text-gray-600 mb-6">{description}</p>
            <Link
              href="/hizmetlerimiz"
              className="bg-teal-600 text-white px-6 py-2 rounded-md font-medium hover:bg-teal-700 transition inline-block"
            >
              Detayları Gör
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
