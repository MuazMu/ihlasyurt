"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Phone, Mail, MapPin, Send } from "lucide-react"

export default function ContactSection() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormState((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
      setFormState({
        name: "",
        email: "",
        phone: "",
        message: "",
      })

      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false)
      }, 5000)
    }, 1500)
  }

  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <section
      className="py-16 md:py-24 bg-gradient-to-r from-ihlas-blue/5 via-ihlas-teal/5 to-ihlas-blue/5"
      id="iletisim"
    >
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-ihlas-blue/10 px-3 py-1 text-sm text-ihlas-blue">İletişim</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl gradient-text">Bize Ulaşın</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Sorularınız için bizimle iletişime geçebilirsiniz
            </p>
          </div>
        </div>

        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={variants}
          transition={{ duration: 0.5, staggerChildren: 0.1 }}
          className="mx-auto mt-12 grid max-w-6xl gap-8 lg:grid-cols-2"
        >
          <motion.div variants={variants} className="space-y-6">
            <div className="space-y-2">
              <h3 className="text-2xl font-bold text-ihlas-blue">İletişim Bilgileri</h3>
              <p className="text-muted-foreground">
                Aşağıdaki iletişim kanallarından bize ulaşabilir veya formu doldurarak mesaj gönderebilirsiniz.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-ihlas-blue/10 text-ihlas-blue">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <p className="font-medium">Telefon</p>
                  <p className="text-muted-foreground">0284 235 25 31</p>
                  <p className="text-muted-foreground">0546 421 26 51</p>
                  <p className="text-muted-foreground">0552 202 06 49</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-ihlas-blue/10 text-ihlas-blue">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <p className="font-medium">E-posta</p>
                  <p className="text-muted-foreground">edirne@yurdu.net</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-ihlas-blue/10 text-ihlas-blue">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <p className="font-medium">Adres</p>
                  <p className="text-muted-foreground">İstasyon, İriş Sk. No:5, 22100 Merkez/Edirne</p>
                </div>
              </div>
            </div>

            <div className="aspect-video overflow-hidden rounded-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2977.0468214839146!2d26.55254687675795!3d41.67770198246282!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14b32f9c1a00e0e3%3A0x7c2c4c8f35bf4ac8!2zxLByacWfIFNrLiBObzo1LCAyMjEwMCBNZXJrZXovRWRpcm5l!5e0!3m2!1str!2str!4v1714133456789!5m2!1str!2str"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                title="Hüseyin Hakkı Erkek Öğrenci Yurdu Konum"
              ></iframe>
            </div>
          </motion.div>

          <motion.div variants={variants} className="rounded-lg border bg-card p-6 shadow-sm">
            <h3 className="mb-4 text-2xl font-bold text-ihlas-blue">Mesaj Gönderin</h3>
            {isSubmitted ? (
              <div className="flex h-full flex-col items-center justify-center space-y-4 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-ihlas-green/10 text-ihlas-green">
                  <Send className="h-8 w-8" />
                </div>
                <h4 className="text-xl font-bold">Mesajınız Gönderildi!</h4>
                <p className="text-muted-foreground">En kısa sürede sizinle iletişime geçeceğiz.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    Adınız Soyadınız
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    placeholder="Adınız Soyadınız"
                    required
                    className="border-ihlas-blue/20 focus:border-ihlas-blue"
                  />
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      E-posta
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formState.email}
                      onChange={handleChange}
                      placeholder="ornek@mail.com"
                      required
                      className="border-ihlas-blue/20 focus:border-ihlas-blue"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-medium">
                      Telefon
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      value={formState.phone}
                      onChange={handleChange}
                      placeholder="0555 123 45 67"
                      className="border-ihlas-blue/20 focus:border-ihlas-blue"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Mesajınız
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    placeholder="Mesajınızı buraya yazın..."
                    rows={5}
                    required
                    className="border-ihlas-blue/20 focus:border-ihlas-blue"
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-ihlas-blue to-ihlas-teal text-white hover:opacity-90"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Gönderiliyor..." : "Gönder"}
                </Button>
              </form>
            )}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
