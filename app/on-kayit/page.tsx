"use client"

import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function OnKayit() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar />

      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-8">
          <h1 className="text-3xl font-bold text-center mb-8">Ön Kayıt Formu</h1>
          <p className="text-gray-600 mb-8 text-center">
            2024-2025 Eğitim Öğretim yılı için ön kayıt formunu doldurarak yerinizi şimdiden ayırtın.
          </p>

          <form className="space-y-6" onSubmit={async (e) => {
            e.preventDefault();
            const form = e.currentTarget;
            const formData = new FormData(form);
            const data = Object.fromEntries(formData.entries());
            const response = await fetch('/api/send-form-email', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify(data),
            });
            if (response.ok) {
              alert('Başvurunuz başarıyla gönderildi!');
              form.reset();
            } else {
              alert('Bir hata oluştu, lütfen tekrar deneyin.');
            }
          }}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                  Adınız*
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                  Soyadınız*
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                E-posta Adresiniz*
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                Telefon Numaranız*
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label htmlFor="university" className="block text-sm font-medium text-gray-700 mb-1">
                Üniversite/Bölüm*
              </label>
              <input
                type="text"
                id="university"
                name="university"
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label htmlFor="roomType" className="block text-sm font-medium text-gray-700 mb-1">
                Tercih Ettiğiniz Oda Tipi*
              </label>
              <select
                id="roomType"
                name="roomType"
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Seçiniz</option>
                <option value="single">Tek Kişilik Oda</option>
                <option value="triple">Üç Kişilik Oda</option>
                <option value="quad">Dört Kişilik Oda</option>
              </select>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                Mesajınız
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
            </div>

            <div className="flex items-center">
              <input
                type="checkbox"
                id="terms"
                name="terms"
                required
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
              <label htmlFor="terms" className="ml-2 block text-sm text-gray-700">
                Kişisel verilerimin işlenmesine izin veriyorum*
              </label>
            </div>

            <div>
              <button
                type="submit"
                className="w-full bg-blue-700 text-white py-3 px-4 rounded-md font-medium hover:bg-blue-800 transition"
              >
                Ön Kayıt Yap
              </button>
            </div>
          </form>
        </div>
      </section>

      <Footer />
    </main>
  )
}
