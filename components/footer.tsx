import Link from "next/link"
import { Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto py-12 px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">İhlas Yurdu</h3>
            <p className="mb-4">Öğrencilere huzurlu bir ortamda konforlu konaklama ve mükemmel tesisler sunuyoruz.</p>
            <div className="flex space-x-4">{/* Social media icons would go here */}</div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Hızlı Bağlantılar</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:text-teal-400 transition">
                  Ana Sayfa
                </Link>
              </li>
              <li>
                <Link href="/hakkimizda" className="hover:text-teal-400 transition">
                  Hakkımızda
                </Link>
              </li>
              <li>
                <Link href="/hizmetlerimiz" className="hover:text-teal-400 transition">
                  Hizmetlerimiz
                </Link>
              </li>
              <li>
                <Link href="/on-kayit" className="hover:text-teal-400 transition">
                  Ön Kayıt
                </Link>
              </li>
              <li>
                <Link href="/iletisim" className="hover:text-teal-400 transition">
                  İletişim
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">İletişim Bilgileri</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <MapPin className="w-5 h-5 mr-2 text-teal-400" />
                <span>İstasyon, İriş Sk. No:5, 22100 Merkez/Edirne</span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 mr-2 text-teal-400" />
                <span>0284 235 25 31</span>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 mr-2 text-teal-400" />
                <span>info@ihlasyurdu.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p>&copy; {new Date().getFullYear()} İhlas Yurdu. Tüm hakları saklıdır.</p>
        </div>
      </div>
    </footer>
  )
}
