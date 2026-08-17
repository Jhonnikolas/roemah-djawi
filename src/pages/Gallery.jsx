import { useState } from 'react'
import { ParangDivider } from '../components/Ornaments'

// Data galeri: memakai foto asli Roemah Djawi (bukan placeholder lagi).
// Foto yang menampilkan wajah/orang sengaja tidak dipakai untuk menjaga privasi.
const photos = [
  { id: 1, title: 'Tampak Depan & Parkir', src: '/images/gallery/facade.jpg' },
  { id: 2, title: 'Kamar Tidur', src: '/images/gallery/kamar-1.jpg' },
  { id: 3, title: 'Kamar Tidur (Tampak Lain)', src: '/images/gallery/kamar-2.jpg' },
  { id: 4, title: 'Kamar Mandi', src: '/images/gallery/kamar-mandi.jpg' },
  { id: 5, title: 'Parkir Motor', src: '/images/gallery/parkir-motor.jpg' },
  { id: 6, title: 'Selasar Kos', src: '/images/gallery/selasar.jpg' },
  { id: 7, title: 'Area Jemuran', src: '/images/gallery/jemuran.jpg' },
  { id: 8, title: 'Galon & Dispenser', src: '/images/gallery/dispenser.jpg' },
  { id: 9, title: 'Area Wastafel', src: '/images/gallery/wastafel.jpg' },
]

// Halaman Galeri: menampilkan suasana kos dalam grid, bisa diklik untuk memperbesar
export default function Gallery() {
  // Menyimpan foto mana yang sedang dibuka di mode lightbox (null = tertutup)
  const [selected, setSelected] = useState(null)

  return (
    <section id="galeri" className="relative pt-28 pb-20 sm:pt-36 sm:pb-28 bg-gading-light">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 text-center">
        <p className="uppercase tracking-[0.25em] text-sm text-emas-dark font-medium mb-3">Galeri</p>
        <h1 className="font-display text-3xl sm:text-4xl text-jati font-semibold">
          Suasana Roemah Djawi
        </h1>
        <p className="mt-4 text-ink/70 text-lg max-w-xl mx-auto">
          Intip sekilas suasana asri dan nyaman di setiap sudut Roemah Djawi. Klik salah satu foto untuk melihat versi besarnya.
        </p>

        <div className="mt-12 grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
          {photos.map((p) => (
            <button
              key={p.id}
              onClick={() => setSelected(p)}
              className="group relative aspect-square overflow-hidden focus:outline-none focus-visible:ring-4 focus-visible:ring-emas"
            >
              <img
                src={p.src}
                alt={p.title}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <span className="absolute inset-0 bg-gradient-to-t from-jati/70 via-jati/0 to-jati/0 group-hover:from-jati/80 transition-colors" />
              <span className="absolute bottom-2 left-2 right-2 text-gading-light text-sm sm:text-base font-body text-left drop-shadow">
                {p.title}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox sederhana: tampil saat salah satu foto dipilih */}
      {selected && (
        <div
          className="fixed inset-0 z-[60] bg-ink/80 flex items-center justify-center px-6"
          onClick={() => setSelected(null)}
        >
          <div
            className="relative w-full max-w-2xl overflow-hidden bg-jati-dark"
            onClick={(e) => e.stopPropagation()}
          >
            <img src={selected.src} alt={selected.title} className="w-full max-h-[75vh] object-contain bg-ink" />
            <p className="font-display text-xl sm:text-2xl text-gading-light px-6 py-4">{selected.title}</p>
            <button
              className="absolute top-3 right-3 w-10 h-10 flex items-center justify-center bg-emas hover:bg-emas-dark text-white text-lg transition-colors"
              onClick={() => setSelected(null)}
              aria-label="Tutup galeri"
            >
              ✕
            </button>
          </div>
        </div>
      )}

      <ParangDivider className="absolute bottom-0" />
    </section>
  )
}
