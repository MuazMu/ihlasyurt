import Link from "next/link"
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from "lucide-react"
import Image from "next/image"

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-ihlas-blue/10 via-ihlas-teal/10 to-ihlas-blue/10 border-t">
      <div className="container px-4 py-12 md:px-6 md:py-16">
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5">
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-3">
              <div className="relative h-12 w-12 overflow-hidden">
                <Image
                  src="/images/logo.png"
                  alt="Hüseyin Hakkı Erkek Öğrenci Yurdu"
                  width={48}
                  height={48}
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold tracking-tight text-ihlas-blue">HÜSEYİN HAKKI</span>
                <span className="text-xs text-muted-foreground">ERKEK ÖĞRENCİ YURDU</span>
              </div>
            </Link>
            <p className="text-sm text-muted-foreground">Eğitim hayatınızda size ev konforu sunan modern yurt.</p>
            <div className="flex space-x-3">
              <Link
                href="#"
                className="rounded-full bg-ihlas-blue/10 p-2 text-ihlas-blue hover:bg-ihlas-blue hover:text-white transition-colors"
              >
                <Facebook className="h-4 w-4" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link
                href="#"
                className="rounded-full bg-ihlas-blue/10 p-2 text-ihlas-blue hover:bg-ihlas-blue hover:text-white transition-colors"
              >
                <Twitter className="h-4 w-4" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link
                href="#"
                className="rounded-full bg-ihlas-blue/10 p-2 text-ihlas-blue hover:bg-ihlas-blue hover:text-white transition-colors"
              >
                <Instagram className="h-4 w-4" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link
                href="#"
                className="rounded-full bg-ihlas-blue/10 p-2 text-ihlas-blue hover:bg-ihlas-blue hover:text-white transition-colors"
              >
                <Youtube className="h-4 w-4" />
                <span className="sr-only">YouTube</span>
              </Link>
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-ihlas-blue">Hızlı Erişim</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/"
                  className="text-muted-foreground hover:text-ihlas-blue hover:underline transition-colors"
                >
                  Ana Sayfa
                </Link>
              </li>
              <li>
                <Link
                  href="/hakkimizda"
                  className="text-muted-foreground hover:text-ihlas-blue hover:underline transition-colors"
                >
                  Hakkımızda
                </Link>
              </li>
              <li>
                <Link
                  href="/hizmetler"
                  className="text-muted-foreground hover:text-ihlas-blue hover:underline transition-colors"
                >
                  Hizmetlerimiz
                </Link>
              </li>
              <li>
                <Link
                  href="/iletisim"
                  className="text-muted-foreground hover:text-ihlas-blue hover:underline transition-colors"
                >
                  İletişim
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-ihlas-blue">Hizmetlerimiz</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/hizmetler/konaklama"
                  className="text-muted-foreground hover:text-ihlas-blue hover:underline transition-colors"
                >
                  Konaklama
                </Link>
              </li>
              <li>
                <Link
                  href="/hizmetler/yemek"
                  className="text-muted-foreground hover:text-ihlas-blue hover:underline transition-colors"
                >
                  Yemek
                </Link>
              </li>
              <li>
                <Link
                  href="/hizmetler/guvenlik"
                  className="text-muted-foreground hover:text-ihlas-blue hover:underline transition-colors"
                >
                  Güvenlik
                </Link>
              </li>
              <li>
                <Link
                  href="/hizmetler/etut-kutuphane"
                  className="text-muted-foreground hover:text-ihlas-blue hover:underline transition-colors"
                >
                  Etüt & Kütüphane
                </Link>
              </li>
              <li>
                <Link
                  href="/hizmetler/spor"
                  className="text-muted-foreground hover:text-ihlas-blue hover:underline transition-colors"
                >
                  Spor Salonu
                </Link>
              </li>
              <li>
                <Link
                  href="/hizmetler/sosyal"
                  className="text-muted-foreground hover:text-ihlas-blue hover:underline transition-colors"
                >
                  Sosyal Aktiviteler
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-ihlas-blue">Yasal</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/gizlilik-politikasi"
                  className="text-muted-foreground hover:text-ihlas-blue hover:underline transition-colors"
                >
                  Gizlilik Politikası
                </Link>
              </li>
              <li>
                <Link
                  href="/kullanim-sartlari"
                  className="text-muted-foreground hover:text-ihlas-blue hover:underline transition-colors"
                >
                  Kullanım Şartları
                </Link>
              </li>
              <li>
                <Link
                  href="/cerez-politikasi"
                  className="text-muted-foreground hover:text-ihlas-blue hover:underline transition-colors"
                >
                  Çerez Politikası
                </Link>
              </li>
              <li>
                <Link
                  href="/kvkk"
                  className="text-muted-foreground hover:text-ihlas-blue hover:underline transition-colors"
                >
                  KVKK
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4 sm:col-span-2 md:col-span-1">
            <h3 className="text-lg font-bold text-ihlas-blue">İletişim</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 text-ihlas-blue" />
                <span className="text-muted-foreground">İstasyon, İriş Sk. No:5, 22100 Merkez/Edirne</span>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="mt-0.5 h-4 w-4 text-ihlas-blue" />
                <div className="flex flex-col">
                  <span className="text-muted-foreground">0284 235 25 31</span>
                  <span className="text-muted-foreground">0546 421 26 51</span>
                  <span className="text-muted-foreground">0552 202 06 49</span>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="mt-0.5 h-4 w-4 text-ihlas-blue" />
                <span className="text-muted-foreground">edirne@yurdu.net</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t pt-8">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-xs text-muted-foreground">
              &copy; {new Date().getFullYear()} Hüseyin Hakkı Erkek Öğrenci Yurdu. Tüm hakları saklıdır.
            </p>
            <p className="text-xs text-muted-foreground">
              <Link href="#" className="hover:underline">
                Web Tasarım
              </Link>{" "}
              tarafından geliştirilmiştir.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
