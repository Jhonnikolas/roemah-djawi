import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { ParangDivider } from '../components/Ornaments'
import { rooms, formatRupiah } from '../data/rooms'

const filters = ['Semua', 'Tersedia', 'Penuh']

// Halaman Status Kamar, dibuat menyerupai halaman listing di Mamikos:
// setiap kamar tampil sebagai kartu dengan foto, harga, dan status,
// yang bisa diklik untuk melihat halaman detail kamar tersebut.
export default function StatusKamar() {
  // Menyimpan filter status yang sedang aktif dipilih user
  const [activeFilter, setActiveFilter] = useState('Semua')

  // Menghitung ulang daftar kamar yang ditampilkan setiap kali filter berubah
  const filteredRooms = useMemo(() => {
    if (activeFilter === 'Semua') return rooms
    return rooms.filter((r) => r.status === activeFilter)
  }, [activeFilter])

  return (
    <section id="status-kamar" className="relative pt-28 pb-20 sm:pt-36 sm:pb-28 bg-gading">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 text-center">
        <p className="uppercase tracking-[0.25em] text-sm text-emas-dark font-medium mb-3">Ketersediaan</p>
        <h1 className="font-display text-3xl sm:text-4xl text-jati font-semibold">
          Status Kamar Terkini
        </h1>
        <p className="mt-4 text-ink/70 text-lg max-w-xl mx-auto">
          Cek ketersediaan kamar, lihat foto & fasilitasnya, lalu klik kamar yang cocok untuk melihat detail lengkapnya.
        </p>

        {/* Tombol filter dibuat besar, kotak, dan jelas terlihat mana yang aktif */}
        <div className="mt-8 flex justify-center gap-3 flex-wrap">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              aria-pressed={activeFilter === f}
              className={`px-6 py-3 text-base font-medium tracking-wide border-2 transition-colors ${
                activeFilter === f
                  ? 'bg-jati text-gading-light border-jati'
                  : 'border-jati/25 text-jati hover:border-emas hover:text-emas-dark'
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Grid kartu kamar, gaya listing Mamikos: foto besar, badge status,
            harga per bulan, lalu tombol "Lihat Detail". */}
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
          {filteredRooms.map((r) => (
            <Link
              key={r.id}
              to={`/kamar/${r.id}`}
              className="group block bg-gading-light border border-jati/10 hover:border-emas hover:shadow-lg transition-all"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={r.foto[0]}
                  alt={`Kamar ${r.id} - ${r.tipe}`}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <span
                  className={`absolute top-3 left-3 px-3 py-1 text-xs font-semibold tracking-wide text-white ${
                    r.status === 'Tersedia' ? 'bg-taman' : 'bg-jati/80'
                  }`}
                >
                  {r.status}
                </span>
              </div>
              <div className="p-5">
                <p className="text-xs uppercase tracking-[0.2em] text-emas-dark font-medium">{r.tipe}</p>
                <h2 className="font-display text-xl text-jati font-semibold mt-1">Kamar {r.id}</h2>
                <p className="text-sm text-ink/60 mt-1">Ukuran {r.ukuran}</p>
                <div className="mt-4 flex items-center justify-between">
                  <p className="text-lg font-semibold text-jati">
                    {formatRupiah(r.harga)}
                    <span className="text-sm font-normal text-ink/60"> /bulan</span>
                  </p>
                  <span className="text-sm font-medium text-emas-dark group-hover:underline underline-offset-4">
                    Lihat Detail →
                  </span>
                </div>
              </div>
            </Link>
          ))}
          {filteredRooms.length === 0 && (
            <p className="col-span-full text-center text-ink/60 py-10">
              Tidak ada kamar dengan status ini.
            </p>
          )}
        </div>
      </div>

      <ParangDivider className="absolute bottom-0" />
    </section>
  )
}
