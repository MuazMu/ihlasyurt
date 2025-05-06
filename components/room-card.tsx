import Image from "next/image"
import Link from "next/link"
import type { ReactNode } from "react"

interface RoomCardProps {
  title: string
  description: string
  imageSrc: string
  icon: ReactNode
}

export default function RoomCard({ title, description, imageSrc, icon }: RoomCardProps) {
  return (
    <div className="bg-gray-50 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition">
      <div className="relative h-64 w-full">
        <Image
          src={imageSrc || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </div>
      <div className="p-6">
        <div className="flex items-center mb-3">
          <div className="bg-blue-100 p-2 rounded-full mr-3">{icon}</div>
          <h3 className="text-xl font-semibold">{title}</h3>
        </div>
        <p className="text-gray-600">{description}</p>
        <Link
          href="/hizmetlerimiz"
          className="mt-4 text-blue-700 font-medium hover:text-blue-800 transition flex items-center"
        >
          Daha fazla bilgi
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
            <path
              fillRule="evenodd"
              d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </Link>
      </div>
    </div>
  )
}
