import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { LeafIcon } from '../components/Ornaments'
import { rooms, formatRupiah } from '../data/rooms'

// Halaman Detail Kamar, terinspirasi tampilan detail kos di Mamikos:
// galeri foto besar di kiri, kartu harga & tombol "Ajukan Sewa" di kanan
// (menempel/sticky di layar besar), lalu daftar fasilitas dan deskripsi.
export default function RoomDetail() {
  const { id } = useParams()
  const room = rooms.find((r) => r.id === id?.toUpperCase())
  const [activePhoto, setActivePhoto] = useState(0)

  // Jika ID kamar tidak ditemukan, tampilkan pesan sederhana + tautan kembali
  if (!room) {
    return (
      <section className="relative pt-32 pb-24 sm:pt-40 sm:pb-32 bg-gading-light min-h-[60vh] text-center">
        <div className="max-w-xl mx-auto px-5">
          <h1 className="font-display text-3xl text-jati font-semibold">Kamar Tidak Ditemukan</h1>
          <p className="mt-3 text-ink/70 text-lg">
            Maaf, kamar yang Anda cari sudah tidak tersedia atau tautannya salah.
          </p>
          <Link
            to="/status-kamar"
            className="inline-block mt-8 bg-jati text-gading-light px-8 py-3.5 text-base font-semibold hover:bg-emas transition-colors"
          >
            Lihat Semua Kamar
          </Link>
        </div>
      </section>
    )
  }

  const isTersedia = room.status === 'Tersedia'

  return (
    <section className="relative pt-24 pb-20 sm:pt-28 sm:pb-28 bg-gading-light">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        {/* Jejak navigasi sederhana, memudahkan pengguna kembali ke daftar kamar */}
        <Link
          to="/status-kamar"
          className="inline-flex items-center gap-1.5 text-base text-jati/70 hover:text-emas-dark mb-6"
        >
          ← Kembali ke Daftar Kamar
        </Link>

        <div className="grid lg:grid-cols-[1.4fr_1fr] gap-10 items-start">
          {/* Kolom kiri: galeri foto */}
          <div>
            <div className="aspect-[4/3] overflow-hidden bg-jati-dark">
              <img
                src={room.foto[activePhoto]}
                alt={`Foto Kamar ${room.id} - ${room.tipe}`}
                className="w-full h-full object-cover"
              />
            </div>
            {room.foto.length > 1 && (
              <div className="mt-3 grid grid-cols-3 gap-3">
                {room.foto.map((src, i) => (
                  <button
                    key={src + i}
                    onClick={() => setActivePhoto(i)}
                    className={`aspect-[4/3] overflow-hidden border-2 transition-colors ${
                      activePhoto === i ? 'border-emas' : 'border-transparent hover:border-jati/30'
                    }`}
                    aria-label={`Lihat foto ${i + 1}`}
                    aria-pressed={activePhoto === i}
                  >
                    <img src={src} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}

            {/* Deskripsi */}
            <div className="mt-10">
              <h2 className="font-display text-2xl text-jati font-semibold">Tentang Kamar Ini</h2>
              <p className="mt-3 text-ink/75 text-lg leading-relaxed">{room.deskripsi}</p>
            </div>

            {/* Fasilitas */}
            <div className="mt-10">
              <h2 className="font-display text-2xl text-jati font-semibold">Fasilitas Kamar</h2>
              <ul className="mt-4 grid sm:grid-cols-2 gap-y-3 gap-x-6">
                {room.fasilitas.map((f) => (
                  <li key={f} className="flex items-center gap-3 text-base text-ink/80">
                    <LeafIcon className="w-5 h-5 shrink-0 text-emas-dark" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Kolom kanan: kartu harga & tombol aksi, menempel saat discroll (seperti di Mamikos) */}
          <aside className="lg:sticky lg:top-28 bg-gading border border-jati/10 p-6 sm:p-8">
            <p className="text-xs uppercase tracking-[0.2em] text-emas-dark font-medium">{room.tipe}</p>
            <h1 className="font-display text-2xl sm:text-3xl text-jati font-semibold mt-1">
              Kamar {room.id}
            </h1>
            <p className="text-base text-ink/60 mt-1">Ukuran {room.ukuran}</p>

            <p className="mt-5 text-3xl font-semibold text-jati">
              {formatRupiah(room.harga)}
              <span className="text-base font-normal text-ink/60"> /bulan</span>
            </p>

            <span
              className={`inline-block mt-4 px-3 py-1.5 text-sm font-semibold text-white ${
                isTersedia ? 'bg-taman' : 'bg-jati/80'
              }`}
            >
              {isTersedia ? 'Kamar Tersedia' : 'Sedang Penuh'}
            </span>

            {isTersedia ? (
              <Link
                to={`/pesan-kamar?tipe=${encodeURIComponent(room.tipe)}`}
                className="block text-center mt-6 bg-jati text-gading-light px-6 py-4 text-lg font-semibold hover:bg-emas transition-colors"
              >
                Ajukan Sewa
              </Link>
            ) : (
              <button
                disabled
                className="block w-full text-center mt-6 bg-jati/20 text-jati/50 px-6 py-4 text-lg font-semibold cursor-not-allowed"
              >
                Kamar Penuh
              </button>
            )}

            <a
              href="https://wa.me/6282136673586"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-center mt-3 border-2 border-jati/20 text-jati px-6 py-3.5 text-base font-medium hover:border-emas hover:text-emas-dark transition-colors"
            >
              Tanya Dulu via WhatsApp
            </a>
          </aside>
        </div>
      </div>
    </section>
  )
}
