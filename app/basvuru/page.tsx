"use client"

import Link from "next/link"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Checkbox } from "@/components/ui/checkbox"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { CheckCircle2 } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

const formSchema = z.object({
  firstName: z.string().min(2, { message: "Ad en az 2 karakter olmalıdır" }),
  lastName: z.string().min(2, { message: "Soyad en az 2 karakter olmalıdır" }),
  email: z.string().email({ message: "Geçerli bir e-posta adresi giriniz" }),
  phone: z.string().min(10, { message: "Geçerli bir telefon numarası giriniz" }),
  tcNumber: z.string().length(11, { message: "TC Kimlik Numarası 11 haneli olmalıdır" }),
  birthDate: z.string().min(1, { message: "Doğum tarihi seçiniz" }),
  gender: z.enum(["erkek", "kadin"], { message: "Cinsiyet seçiniz" }),
  address: z.string().min(10, { message: "Adres en az 10 karakter olmalıdır" }),
  university: z.string().min(2, { message: "Üniversite adı giriniz" }),
  department: z.string().min(2, { message: "Bölüm adı giriniz" }),
  grade: z.string().min(1, { message: "Sınıf seçiniz" }),
  roomType: z.string().min(1, { message: "Oda tipi seçiniz" }),
  parentName: z.string().min(2, { message: "Veli adı giriniz" }),
  parentPhone: z.string().min(10, { message: "Geçerli bir telefon numarası giriniz" }),
  additionalInfo: z.string().optional(),
  termsAccepted: z.boolean().refine((val) => val === true, { message: "Şartları kabul etmelisiniz" }),
})

export default function BasvuruPage() {
  const [isSubmitted, setIsSubmitted] = useState(false)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      tcNumber: "",
      birthDate: "",
      gender: undefined,
      address: "",
      university: "",
      department: "",
      grade: "",
      roomType: "",
      parentName: "",
      parentPhone: "",
      additionalInfo: "",
      termsAccepted: false,
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitted(true)
    }, 1500)
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1 py-16 md:py-24" id="top">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-3xl">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Yurt Başvuru Formu</h1>
              <p className="mt-4 text-muted-foreground">İhlas Yurdu'na başvurmak için aşağıdaki formu doldurunuz</p>
            </div>

            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="rounded-lg border bg-card p-8 shadow-sm text-center"
              >
                <div className="flex justify-center mb-4">
                  <CheckCircle2 className="h-16 w-16 text-primary" />
                </div>
                <h2 className="text-2xl font-bold mb-4">Başvurunuz Alındı!</h2>
                <p className="text-muted-foreground mb-6">
                  Başvurunuz başarıyla alınmıştır. En kısa sürede sizinle iletişime geçeceğiz.
                </p>
                <p className="text-sm text-muted-foreground mb-6">
                  Başvuru numaranız:{" "}
                  <span className="font-bold">YRT-{Math.floor(100000 + Math.random() * 900000)}</span>
                </p>
                <Button onClick={() => (window.location.href = "/")}>Ana Sayfaya Dön</Button>
              </motion.div>
            ) : (
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="rounded-lg border bg-card p-6 shadow-sm"
              >
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                    <motion.div variants={itemVariants}>
                      <div className="rounded-lg bg-primary/10 px-3 py-2 text-sm font-medium text-primary mb-4">
                        Kişisel Bilgiler
                      </div>
                      <div className="grid gap-4 sm:grid-cols-2">
                        <FormField
                          control={form.control}
                          name="firstName"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Ad</FormLabel>
                              <FormControl>
                                <Input placeholder="Adınız" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="lastName"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Soyad</FormLabel>
                              <FormControl>
                                <Input placeholder="Soyadınız" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                    </motion.div>

                    <motion.div variants={itemVariants}>
                      <div className="grid gap-4 sm:grid-cols-2">
                        <FormField
                          control={form.control}
                          name="email"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>E-posta</FormLabel>
                              <FormControl>
                                <Input type="email" placeholder="ornek@mail.com" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="phone"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Telefon</FormLabel>
                              <FormControl>
                                <Input placeholder="05XX XXX XX XX" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                    </motion.div>

                    <motion.div variants={itemVariants}>
                      <div className="grid gap-4 sm:grid-cols-3">
                        <FormField
                          control={form.control}
                          name="tcNumber"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>TC Kimlik No</FormLabel>
                              <FormControl>
                                <Input placeholder="TC Kimlik Numarası" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="birthDate"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Doğum Tarihi</FormLabel>
                              <FormControl>
                                <Input type="date" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="gender"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Cinsiyet</FormLabel>
                              <FormControl>
                                <RadioGroup
                                  onValueChange={field.onChange}
                                  defaultValue={field.value}
                                  className="flex gap-4"
                                >
                                  <FormItem className="flex items-center space-x-2 space-y-0">
                                    <FormControl>
                                      <RadioGroupItem value="erkek" />
                                    </FormControl>
                                    <FormLabel className="font-normal">Erkek</FormLabel>
                                  </FormItem>
                                  <FormItem className="flex items-center space-x-2 space-y-0">
                                    <FormControl>
                                      <RadioGroupItem value="kadin" />
                                    </FormControl>
                                    <FormLabel className="font-normal">Kadın</FormLabel>
                                  </FormItem>
                                </RadioGroup>
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                    </motion.div>

                    <motion.div variants={itemVariants}>
                      <FormField
                        control={form.control}
                        name="address"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Adres</FormLabel>
                            <FormControl>
                              <Textarea placeholder="Adresiniz" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </motion.div>

                    <motion.div variants={itemVariants}>
                      <div className="rounded-lg bg-primary/10 px-3 py-2 text-sm font-medium text-primary mb-4">
                        Eğitim Bilgileri
                      </div>
                      <div className="grid gap-4 sm:grid-cols-2">
                        <FormField
                          control={form.control}
                          name="university"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Üniversite</FormLabel>
                              <FormControl>
                                <Input placeholder="Üniversite Adı" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="department"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Bölüm</FormLabel>
                              <FormControl>
                                <Input placeholder="Bölüm Adı" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                    </motion.div>

                    <motion.div variants={itemVariants}>
                      <div className="grid gap-4 sm:grid-cols-2">
                        <FormField
                          control={form.control}
                          name="grade"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Sınıf</FormLabel>
                              <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                  <SelectTrigger>
                                    <SelectValue placeholder="Sınıf Seçiniz" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  <SelectItem value="1">1. Sınıf</SelectItem>
                                  <SelectItem value="2">2. Sınıf</SelectItem>
                                  <SelectItem value="3">3. Sınıf</SelectItem>
                                  <SelectItem value="4">4. Sınıf</SelectItem>
                                  <SelectItem value="5">Yüksek Lisans</SelectItem>
                                  <SelectItem value="6">Doktora</SelectItem>
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="roomType"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Oda Tipi</FormLabel>
                              <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                  <SelectTrigger>
                                    <SelectValue placeholder="Oda Tipi Seçiniz" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  <SelectItem value="1">1 Kişilik Oda</SelectItem>
                                  <SelectItem value="2">2 Kişilik Oda</SelectItem>
                                  <SelectItem value="3">3 Kişilik Oda</SelectItem>
                                  <SelectItem value="4">4 Kişilik Oda</SelectItem>
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                    </motion.div>

                    <motion.div variants={itemVariants}>
                      <div className="rounded-lg bg-primary/10 px-3 py-2 text-sm font-medium text-primary mb-4">
                        Veli Bilgileri
                      </div>
                      <div className="grid gap-4 sm:grid-cols-2">
                        <FormField
                          control={form.control}
                          name="parentName"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Veli Adı Soyadı</FormLabel>
                              <FormControl>
                                <Input placeholder="Veli Adı Soyadı" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="parentPhone"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Veli Telefon</FormLabel>
                              <FormControl>
                                <Input placeholder="05XX XXX XX XX" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                    </motion.div>

                    <motion.div variants={itemVariants}>
                      <FormField
                        control={form.control}
                        name="additionalInfo"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Ek Bilgiler</FormLabel>
                            <FormControl>
                              <Textarea placeholder="Eklemek istediğiniz bilgiler (varsa)" {...field} />
                            </FormControl>
                            <FormDescription>Sağlık durumu, özel ihtiyaçlar veya diğer bilgiler</FormDescription>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </motion.div>

                    <motion.div variants={itemVariants}>
                      <FormField
                        control={form.control}
                        name="termsAccepted"
                        render={({ field }) => (
                          <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                            <FormControl>
                              <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                            </FormControl>
                            <div className="space-y-1 leading-none">
                              <FormLabel>Kişisel verilerimin işlenmesine ve yurt şartlarını kabul ediyorum</FormLabel>
                              <FormDescription>
                                <Link href="/kullanim-sartlari" className="text-primary hover:underline">
                                  Kullanım şartlarını
                                </Link>{" "}
                                ve{" "}
                                <Link href="/gizlilik-politikasi" className="text-primary hover:underline">
                                  gizlilik politikasını
                                </Link>{" "}
                                okudum ve kabul ediyorum.
                              </FormDescription>
                              <FormMessage />
                            </div>
                          </FormItem>
                        )}
                      />
                    </motion.div>

                    <motion.div variants={itemVariants}>
                      <Button type="submit" className="w-full" disabled={form.formState.isSubmitting}>
                        {form.formState.isSubmitting ? "Gönderiliyor..." : "Başvuruyu Gönder"}
                      </Button>
                    </motion.div>
                  </form>
                </Form>
              </motion.div>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
