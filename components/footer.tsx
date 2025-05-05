import Link from "next/link"
import { Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto py-12 px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Ihlas Yurdu</h3>
            <p className="mb-4">
              Providing comfortable accommodation and excellent facilities for students in a peaceful environment.
            </p>
            <div className="flex space-x-4">{/* Social media icons would go here */}</div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="hover:text-emerald-400 transition">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-emerald-400 transition">
                  Accommodation
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-emerald-400 transition">
                  Facilities
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-emerald-400 transition">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-emerald-400 transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Contact Information</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <MapPin className="w-5 h-5 mr-2 text-emerald-400" />
                <span>123 University Street, City, Country</span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 mr-2 text-emerald-400" />
                <span>+1 234 567 890</span>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 mr-2 text-emerald-400" />
                <span>info@ihlasyurdu.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p>&copy; {new Date().getFullYear()} Ihlas Yurdu. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
