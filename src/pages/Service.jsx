import { ParangDivider } from '../components/Ornaments'

// Data fasilitas/layanan yang ditawarkan kos.
// Setiap item punya ikon SVG inline sederhana agar tidak bergantung pada aset luar.
const services = [
  {
    name: 'Parkir Dalam',
    desc: 'Area parkir motor & mobil di dalam kos, aman dan terlindung dari hujan.',
    icon: <path d="M4 8h16M4 8l3 4M20 8l-3 4M8 16h1M12 16h1M16 16h1" />,
  },
  {
    name: 'Mesin Cuci Bersama',
    desc: 'Cukup Rp 3.000 sekali pakai, tidak perlu repot ke laundry luar.',
    icon: <path d="M4 4h16v16H4V4Zm8 5a4 4 0 100 8 4 4 0 000-8Z" />,
  },
  {
    name: 'Taman Rindang',
    desc: 'Ruang terbuka hijau untuk bersantai dan menenangkan pikiran.',
    icon: <path d="M12 3v18M12 3c-4 0-7 3-7 7 4 0 7-3 7-7Zm0 0c4 0 7 3 7 7-4 0-7-3-7-7Z" />,
  },
  {
    name: 'Ruang Tamu Bersama',
    desc: 'Area duduk santai untuk berkumpul, mengobrol, atau belajar bersama.',
    icon: <path d="M6 3v6M10 3v6M6 6h4M14 3l6 6M8 9v12M20 9v12M8 21h12" />,
  },
  {
    name: 'Lingkungan Aman',
    desc: 'Area kos rapi dan tertutup, nyaman untuk mahasiswa yang tinggal jauh dari rumah.',
    icon: <path d="M12 3l8 3v6c0 5-3.5 8.5-8 9-4.5-.5-8-4-8-9V6l8-3Z" />,
  },
  {
    name: 'Dekat Kampus',
    desc: 'Lokasi strategis di Sinduadi, Mlati, mudah dijangkau dari berbagai kampus di Sleman.',
    icon: (
      <path d="M4 10a14 14 0 0116 0M7 13.5a9 9 0 0110 0M10.5 17a4 4 0 013 0M12 20h.01" />
    ),
  },
]

// Halaman Layanan/Fasilitas
export default function Service() {
  return (
    <section id="layanan" className="relative pt-28 pb-20 sm:pt-36 sm:pb-28 bg-gading">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 text-center">
        <p className="uppercase tracking-[0.25em] text-sm text-emas-dark font-medium mb-3">Fasilitas</p>
        <h1 className="font-display text-3xl sm:text-4xl text-jati font-semibold">
          Layanan yang Membuat Betah
        </h1>
        <p className="mt-4 text-ink/70 text-lg max-w-xl mx-auto">
          Semua kebutuhan penghuni kami perhatikan, agar Anda cukup fokus
          menjalani hari tanpa khawatir soal kenyamanan tempat tinggal.
        </p>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
          {services.map((s) => (
            <div
              key={s.name}
              className="p-6 bg-gading-light border border-jati/10 hover:border-emas hover:shadow-lg transition-all"
            >
              <svg
                viewBox="0 0 24 24"
                className="w-9 h-9 text-emas-dark mb-4"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {s.icon}
              </svg>
              <h2 className="font-display text-xl text-jati font-semibold">{s.name}</h2>
              <p className="text-base text-ink/70 mt-2 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <ParangDivider className="absolute bottom-0" />
    </section>
  )
}
