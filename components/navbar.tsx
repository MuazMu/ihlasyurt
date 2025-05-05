"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center">
              <div className="relative h-14 w-14 mr-3">
                <Image src="/images/logo.png" alt="İhlas Yurdu Logo" fill className="object-contain" />
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-teal-600">İHLAS YURDU</span>
                <span className="text-sm text-gray-600">ERKEK ÖĞRENCİ YURDU</span>
              </div>
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-teal-600 transition font-medium">
              ANA SAYFA
            </Link>
            <Link href="/hakkimizda" className="text-gray-700 hover:text-teal-600 transition font-medium">
              HAKKIMIZDA
            </Link>
            <Link href="/hizmetlerimiz" className="text-gray-700 hover:text-teal-600 transition font-medium">
              HİZMETLERİMİZ
            </Link>
            <Link href="/on-kayit" className="text-gray-700 hover:text-teal-600 transition font-medium">
              ÖN KAYIT
            </Link>
            <Link href="/iletisim" className="text-gray-700 hover:text-teal-600 transition font-medium">
              İLETİŞİM
            </Link>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-teal-600 focus:outline-none"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white">
            <Link
              href="/"
              className="block px-3 py-2 text-gray-700 hover:text-teal-600 hover:bg-gray-50 rounded-md font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              ANA SAYFA
            </Link>
            <Link
              href="/hakkimizda"
              className="block px-3 py-2 text-gray-700 hover:text-teal-600 hover:bg-gray-50 rounded-md font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              HAKKIMIZDA
            </Link>
            <Link
              href="/hizmetlerimiz"
              className="block px-3 py-2 text-gray-700 hover:text-teal-600 hover:bg-gray-50 rounded-md font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              HİZMETLERİMİZ
            </Link>
            <Link
              href="/on-kayit"
              className="block px-3 py-2 text-gray-700 hover:text-teal-600 hover:bg-gray-50 rounded-md font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              ÖN KAYIT
            </Link>
            <Link
              href="/iletisim"
              className="block px-3 py-2 text-gray-700 hover:text-teal-600 hover:bg-gray-50 rounded-md font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              İLETİŞİM
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}
