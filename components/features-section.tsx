"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Wifi, Utensils, Shield, BookOpen, Users } from "lucide-react"

const features = [
  {
    icon: <Wifi className="h-10 w-10" />,
    title: "Ücretsiz Wi-Fi",
    description: "Tüm yurt genelinde yüksek hızlı internet erişimi.",
    color: "bg-ihlas-blue/10 text-ihlas-blue",
  },
  {
    icon: <Utensils className="h-10 w-10" />,
    title: "Kaliteli Yemek",
    description: "Uzman aşçılarımız tarafından hazırlanan sağlıklı ve lezzetli menüler.",
    color: "bg-ihlas-teal/10 text-ihlas-teal",
  },
  {
    icon: <Shield className="h-10 w-10" />,
    title: "7/24 Güvenlik",
    description: "Güvenlik personeli ve kamera sistemleri ile tam koruma.",
    color: "bg-ihlas-orange/10 text-ihlas-orange",
  },
  {
    icon: <BookOpen className="h-10 w-10" />,
    title: "Etüt & Kütüphane",
    description: "Sessiz ve konforlu çalışma alanları ve zengin kütüphane.",
    color: "bg-ihlas-yellow/10 text-ihlas-yellow",
  },
  {
    icon: <Users className="h-10 w-10" />,
    title: "Sosyal Aktiviteler",
    description: "Kişisel gelişiminizi destekleyen çeşitli etkinlikler.",
    color: "bg-ihlas-purple/10 text-ihlas-purple",
  },
]

export default function FeaturesSection() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-r from-ihlas-blue/5 via-ihlas-teal/5 to-ihlas-blue/5">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-ihlas-blue/10 px-3 py-1 text-sm text-ihlas-blue">
              Hizmetlerimiz
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl gradient-text">
              Öğrencilerimize Sunduğumuz İmkanlar
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              İhlas Yurdu'nda öğrencilerimizin konforlu ve verimli bir eğitim hayatı için sunduğumuz hizmetler
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl gap-8 py-12 md:grid-cols-2 lg:grid-cols-3 lg:gap-12">
          {features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

function FeatureCard({ feature, index }) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={variants}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="feature-card"
    >
      <div className="flex flex-col items-center space-y-4 text-center">
        <div className={`rounded-full ${feature.color} p-3 transition-transform duration-300 group-hover:scale-110`}>
          {feature.icon}
        </div>
        <h3 className="text-xl font-bold">{feature.title}</h3>
        <p className="text-muted-foreground">{feature.description}</p>
      </div>
    </motion.div>
  )
}
