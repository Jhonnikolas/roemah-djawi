import { CornerFrame, LeafIcon, ParangDivider } from '../components/Ornaments'

// Data nilai-nilai utama yang ditonjolkan Roemah Djawi
const values = [
  {
    title: 'Asri & Rindang',
    desc: 'Dikelilingi taman hijau dan pepohonan teduh yang menyejukkan setiap sudut kos.',
  },
  {
    title: 'Bersih & Terawat',
    desc: 'Kebersihan kamar dan area bersama dijaga setiap hari oleh tim housekeeping.',
  },
  {
    title: 'Tenang & Privat',
    desc: 'Lokasi tidak berisik, cocok untuk istirahat maupun fokus bekerja/belajar.',
  },
  {
    title: 'Parkir Dalam & Mesin Cuci',
    desc: 'Parkir kendaraan aman di dalam area kos, dilengkapi mesin cuci bersama.',
  },
]

// Halaman Tentang Kos: memperkenalkan filosofi & suasana Roemah Djawi
export default function AboutKos() {
  return (
    <section id="tentang" className="relative pt-28 pb-20 sm:pt-36 sm:pb-28 bg-gading-light">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 grid lg:grid-cols-2 gap-14 items-center">
        {/* Foto asli suasana Roemah Djawi, dibingkai motif ukiran khas Jawa */}
        <div className="relative order-2 lg:order-1">
          <CornerFrame className="absolute -top-3 -left-3 w-14 h-14 text-emas-dark" />
          <CornerFrame className="absolute -bottom-3 -right-3 w-14 h-14 text-emas-dark rotate-180" />
          <img
            src="/images/gallery/about-selasar.jpg"
            alt="Selasar dalam Roemah Djawi yang bersih dan tertata rapi"
            className="w-full aspect-[4/5] object-cover border border-jati/20 shadow-md"
            loading="lazy"
          />
        </div>

        {/* Teks cerita kos */}
        <div className="order-1 lg:order-2">
          <p className="uppercase tracking-[0.25em] text-sm text-emas-dark font-medium mb-3">Tentang Kami · Berdiri sejak 2010</p>
          <h1 className="font-display text-3xl sm:text-4xl text-jati font-semibold leading-snug">
            Rumah Kedua yang Membawa Ketenangan Rumah Jawa
          </h1>
          <p className="mt-5 text-ink/80 text-lg leading-relaxed">
            Roemah Djawi dibangun dengan semangat melestarikan kehangatan rumah
            tradisional Jawa, dipadukan fasilitas modern untuk kenyamanan
            penghuni masa kini. Setiap sudut dirancang agar penghuni merasa
            betah, tenang, dan seperti berada di rumah sendiri.
          </p>

          <ul className="mt-8 space-y-5">
            {values.map((v) => (
              <li key={v.title} className="flex gap-4">
                <LeafIcon className="w-7 h-7 shrink-0 text-emas-dark mt-1" />
                <div>
                  <h2 className="font-display text-xl text-jati font-semibold">{v.title}</h2>
                  <p className="text-ink/70 text-base mt-1">{v.desc}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <ParangDivider className="absolute bottom-0" />
    </section>
  )
}
