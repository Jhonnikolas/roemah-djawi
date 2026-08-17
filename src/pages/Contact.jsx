// Halaman Kontak: informasi lokasi, telepon, dan sosial media kos
const ALAMAT = '7923+H58, Trini, Sinduadi, Kec. Mlati, Kabupaten Sleman, Daerah Istimewa Yogyakarta 55284'
const MAPS_EMBED_SRC = `https://www.google.com/maps?q=${encodeURIComponent(ALAMAT)}&output=embed`
const MAPS_LINK = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(ALAMAT)}`

export default function Contact() {
  return (
    <section id="kontak" className="relative pt-28 pb-20 sm:pt-36 sm:pb-28 bg-jati text-gading-light">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 grid md:grid-cols-2 gap-12 items-start">
        {/* Informasi kontak */}
        <div>
          <p className="uppercase tracking-[0.25em] text-sm text-emas-light font-medium mb-3">Kontak</p>
          <h1 className="font-display text-3xl sm:text-4xl font-semibold">
            Kunjungi & Hubungi Kami
          </h1>
          <p className="mt-4 text-gading-light/80 text-lg max-w-md">
            Datang langsung untuk melihat suasana kos, atau hubungi kami untuk
            informasi lebih lanjut sebelum berkunjung.
          </p>

          {/* Nomor telepon & email dijadikan tautan aktif (tel:/mailto:)
              agar cukup sekali sentuh untuk langsung menelepon/chat. */}
          <div className="mt-8 space-y-4 text-base">
            <div className="flex gap-3 items-start">
              <span className="text-emas-light" aria-hidden="true">📍</span>
              <p>{ALAMAT}</p>
            </div>
            <div className="flex gap-3 items-start">
              <span className="text-emas-light" aria-hidden="true">📞</span>
              <a href="tel:+6282136673586" className="hover:text-emas-light hover:underline underline-offset-4">
                0821-3667-3586 (WhatsApp/Telepon)
              </a>
            </div>
            <div className="flex gap-3 items-start">
              <span className="text-emas-light" aria-hidden="true">🕘</span>
              <p>Survei & pertanyaan dapat dilakukan setiap hari, 08.00–20.00 WIB</p>
            </div>
          </div>

          {/* Tombol besar, kotak, mudah dikenali sebagai aksi utama */}
          <div className="mt-8 flex flex-wrap gap-4 text-base">
            <a
              href="https://wa.me/6282136673586"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-emas text-white px-7 py-3.5 font-semibold hover:bg-emas-dark transition-colors"
            >
              Chat WhatsApp
            </a>
            <a
              href={MAPS_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-jati px-7 py-3.5 font-semibold hover:bg-gading-dark transition-colors"
            >
              Buka di Google Maps
            </a>
          </div>
        </div>

        {/* Peta lokasi asli via Google Maps embed (tanpa API key, memakai query alamat) */}
        <div className="aspect-video overflow-hidden border border-gading-light/20 bg-jati-dark">
          <iframe
            title="Peta lokasi Roemah Djawi"
            src={MAPS_EMBED_SRC}
            className="w-full h-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  )
}
