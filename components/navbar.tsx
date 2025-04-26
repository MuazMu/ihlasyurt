"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, ChevronDown, Phone } from "lucide-react"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import Image from "next/image"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header className="sticky top-0 z-50 w-full transition-all duration-300 bg-white/95 backdrop-blur-md shadow-sm">
      {/* Top bar with contact info */}
      <div className="hidden lg:block bg-ihlas-blue text-white py-1">
        <div className="container flex justify-end items-center px-4 md:px-6">
          <div className="flex items-center gap-4 text-sm">
            <div className="flex items-center gap-1">
              <Phone className="h-3 w-3" />
              <span>0284 235 25 31</span>
            </div>
            <div className="h-4 w-px bg-white/30" />
            <span>İstasyon, İriş Sk. No:5, Merkez/Edirne</span>
          </div>
        </div>
      </div>

      {/* Main navbar */}
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-3">
          <div className="relative h-12 w-12 overflow-hidden">
            <Image
              src="/images/logo.png"
              alt="Hüseyin Hakkı Erkek Öğrenci Yurdu"
              width={48}
              height={48}
              className="object-contain"
              priority
            />
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-bold tracking-tight text-ihlas-blue">HÜSEYİN HAKKI</span>
            <span className="text-xs text-muted-foreground">ERKEK ÖĞRENCİ YURDU</span>
          </div>
        </Link>

        <div className="hidden md:flex flex-1 justify-center">
          <NavigationMenu className="mx-auto">
            <NavigationMenuList className="gap-1">
              <NavigationMenuItem>
                <Link href="/" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>Ana Sayfa</NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/hakkimizda" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>Hakkımızda</NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Hizmetlerimiz</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    {[
                      {
                        title: "Konaklama",
                        href: "/hizmetler/konaklama",
                        description: "Modern ve konforlu odalarımız hakkında bilgi alın.",
                      },
                      {
                        title: "Yemek",
                        href: "/hizmetler/yemek",
                        description: "Sağlıklı ve lezzetli menülerimiz.",
                      },
                      {
                        title: "Güvenlik",
                        href: "/hizmetler/guvenlik",
                        description: "7/24 güvenlik hizmetlerimiz.",
                      },
                      {
                        title: "Etüt & Kütüphane",
                        href: "/hizmetler/etut-kutuphane",
                        description: "Akademik başarınız için çalışma alanları.",
                      },
                    ].map((item) => (
                      <li key={item.title}>
                        <NavigationMenuLink asChild>
                          <Link
                            href={item.href}
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          >
                            <div className="text-sm font-medium leading-none">{item.title}</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              {item.description}
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/iletisim" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>İletişim</NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        <div className="hidden md:flex items-center gap-4">
          <Link href="/basvuru" passHref>
            <Button className="bg-gradient-to-r from-ihlas-blue to-ihlas-teal text-white hover:opacity-90 transition-all duration-300 hover:scale-105">
              Başvuru Yap
            </Button>
          </Link>
        </div>

        <button
          className="flex items-center justify-center rounded-md p-2 text-ihlas-blue md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          <span className="sr-only">Menüyü Aç/Kapat</span>
        </button>
      </div>

      {isOpen && (
        <div className="fixed inset-0 top-16 z-50 bg-white/95 backdrop-blur-md shadow-sm md:hidden">
          <nav className="container flex flex-col gap-6 p-6">
            <Link
              href="/"
              className="text-lg font-medium transition-colors hover:text-ihlas-blue"
              onClick={() => setIsOpen(false)}
            >
              Ana Sayfa
            </Link>
            <Link
              href="/hakkimizda"
              className="text-lg font-medium transition-colors hover:text-ihlas-blue"
              onClick={() => setIsOpen(false)}
            >
              Hakkımızda
            </Link>
            <div className="flex flex-col gap-2">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-medium">Hizmetlerimiz</h3>
                <ChevronDown className="h-4 w-4" />
              </div>
              <div className="grid gap-1 pl-4">
                <Link
                  href="/hizmetler/konaklama"
                  className="text-sm transition-colors hover:text-ihlas-blue"
                  onClick={() => setIsOpen(false)}
                >
                  Konaklama
                </Link>
                <Link
                  href="/hizmetler/yemek"
                  className="text-sm transition-colors hover:text-ihlas-blue"
                  onClick={() => setIsOpen(false)}
                >
                  Yemek
                </Link>
                <Link
                  href="/hizmetler/guvenlik"
                  className="text-sm transition-colors hover:text-ihlas-blue"
                  onClick={() => setIsOpen(false)}
                >
                  Güvenlik
                </Link>
                <Link
                  href="/hizmetler/etut-kutuphane"
                  className="text-sm transition-colors hover:text-ihlas-blue"
                  onClick={() => setIsOpen(false)}
                >
                  Etüt & Kütüphane
                </Link>
              </div>
            </div>
            <Link
              href="/iletisim"
              className="text-lg font-medium transition-colors hover:text-ihlas-blue"
              onClick={() => setIsOpen(false)}
            >
              İletişim
            </Link>
            <Link href="/basvuru" passHref onClick={() => setIsOpen(false)}>
              <Button className="w-full bg-gradient-to-r from-ihlas-blue to-ihlas-teal text-white">Başvuru Yap</Button>
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
