import { Link } from 'react-router-dom'
import { ParangDivider } from '../components/Ornaments'

// Halaman Beranda: hero foto penuh + judul besar + dua tombol aksi utama.
// Dibuat lebih sederhana (ornamen dikurangi) agar fokus pengguna langsung
// tertuju ke pesan utama dan tombol, mudah dipahami pengguna baru.
export default function Home() {
  return (
    <section
      id="beranda"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Foto asli rumah kos sebagai latar penuh (full background) */}
      <img
        src="/images/roemah-djawi-hero.jpg"
        alt="Tampak depan Roemah Djawi, rumah kos dengan gaya Jawa modern"
        className="absolute inset-0 w-full h-full object-cover"
        loading="eager"
      />

      {/* Overlay gradasi gelap agar teks putih tetap terbaca jelas di atas foto */}
      <div className="absolute inset-0 bg-gradient-to-b from-ink/75 via-ink/55 to-ink/85" />

      <div className="relative max-w-3xl mx-auto px-5 sm:px-8 py-16 text-center">
        <p className="uppercase tracking-[0.25em] text-sm sm:text-base text-emas-light font-medium mb-5">
          Kos Nyaman Bernuansa Jawa Modern
        </p>
        <h1 className="font-display text-4xl sm:text-6xl leading-tight text-gading-light font-semibold drop-shadow-lg">
          Pulang ke Roemah yang Tenang, Asri, dan Nyaman
        </h1>
        <p className="mt-6 text-gading-light/90 text-lg max-w-xl mx-auto leading-relaxed">
          Kos bersih, asri, dan aman dengan suasana kekeluargaan yang hangat.
          Lihat kamar, cek fasilitas, dan pesan langsung lewat website ini.
        </p>

        {/* Dua tombol besar, kotak, dan jelas — mudah dikenali sebagai tombol utama */}
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/pesan-kamar"
            className="bg-emas text-white px-8 py-4 text-lg font-semibold hover:bg-emas-dark transition-colors"
          >
            Pesan Kamar Sekarang
          </Link>
          <Link
            to="/tentang"
            className="bg-white text-jati px-8 py-4 text-lg font-semibold hover:bg-gading-dark transition-colors"
          >
            Kenali Roemah Djawi
          </Link>
        </div>
      </div>

      <ParangDivider className="absolute bottom-0 z-10" />
    </section>
  )
}
