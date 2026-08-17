// Data kamar terpusat, gaya listing "Mamikos": tiap kamar punya foto, harga,
// fasilitas, dan deskripsi sendiri, supaya bisa ditampilkan sebagai kartu
// (listing) maupun halaman detail.

export const rooms = [
  {
    id: 'A1',
    tipe: 'Standar',
    harga: 1200000,
    status: 'Tersedia',
    ukuran: '3 x 3 m',
    foto: [
      '/images/gallery/kamar-1.jpg',
      '/images/gallery/kamar-mandi.jpg',
      '/images/gallery/selasar.jpg',
    ],
    deskripsi:
      'Kamar Standar yang ringkas dan nyaman, cocok untuk mahasiswa atau pekerja yang butuh hunian praktis dengan harga terjangkau tanpa mengorbankan kebersihan dan ketenangan.',
    fasilitas: ['Kasur & lemari', 'Jendela besar', 'Akses wifi area umum', 'Kamar mandi luar', 'Listrik termasuk'],
  },
  {
    id: 'A2',
    tipe: 'Standar',
    harga: 1200000,
    status: 'Penuh',
    ukuran: '3 x 3 m',
    foto: [
      '/images/gallery/kamar-1.jpg',
      '/images/gallery/wastafel.jpg',
      '/images/gallery/jemuran.jpg',
    ],
    deskripsi:
      'Kamar Standar dengan tata letak serupa A1, berada di lantai yang sama dengan akses mudah ke area jemuran dan wastafel bersama.',
    fasilitas: ['Kasur & lemari', 'Jendela besar', 'Akses wifi area umum', 'Kamar mandi luar', 'Listrik termasuk'],
  },
  {
    id: 'B1',
    tipe: 'Deluxe',
    harga: 1750000,
    status: 'Tersedia',
    ukuran: '3.5 x 4 m',
    foto: [
      '/images/gallery/kamar-2.jpg',
      '/images/gallery/kamar-mandi.jpg',
      '/images/gallery/dispenser.jpg',
    ],
    deskripsi:
      'Kamar Deluxe lebih luas dengan kamar mandi dalam, cocok untuk yang menginginkan privasi lebih dan ruang gerak yang lebih lega.',
    fasilitas: ['Kasur & lemari besar', 'Kamar mandi dalam', 'Meja & kursi belajar', 'AC', 'Listrik termasuk'],
  },
  {
    id: 'B2',
    tipe: 'Deluxe',
    harga: 1750000,
    status: 'Tersedia',
    ukuran: '3.5 x 4 m',
    foto: [
      '/images/gallery/kamar-2.jpg',
      '/images/gallery/selasar.jpg',
      '/images/gallery/parkir-motor.jpg',
    ],
    deskripsi:
      'Kamar Deluxe dengan pemandangan ke arah taman dalam, tenang dan sejuk sepanjang hari, dekat dengan area parkir motor.',
    fasilitas: ['Kasur & lemari besar', 'Kamar mandi dalam', 'Meja & kursi belajar', 'AC', 'Listrik termasuk'],
  },
  {
    id: 'C1',
    tipe: 'Suite Keluarga',
    harga: 2500000,
    status: 'Penuh',
    ukuran: '4.5 x 5 m',
    foto: [
      '/images/gallery/kamar-2.jpg',
      '/images/gallery/kamar-mandi.jpg',
      '/images/gallery/facade.jpg',
    ],
    deskripsi:
      'Suite Keluarga paling luas, cocok untuk pasangan atau ditempati berdua, dilengkapi ruang tambahan untuk bersantai.',
    fasilitas: ['Kasur ukuran besar', 'Kamar mandi dalam', 'Ruang tamu mini', 'AC', 'Listrik termasuk'],
  },
  {
    id: 'C2',
    tipe: 'Suite Keluarga',
    harga: 2500000,
    status: 'Tersedia',
    ukuran: '4.5 x 5 m',
    foto: [
      '/images/gallery/kamar-2.jpg',
      '/images/gallery/about-selasar.jpg',
      '/images/gallery/parkir-motor.jpg',
    ],
    deskripsi:
      'Suite Keluarga di lantai dasar, akses paling mudah ke parkir dan pintu masuk utama, cocok bagi yang membawa banyak barang.',
    fasilitas: ['Kasur ukuran besar', 'Kamar mandi dalam', 'Ruang tamu mini', 'AC', 'Listrik termasuk'],
  },
]

// Format angka jadi "Rp 1.200.000"
export function formatRupiah(angka) {
  return `Rp ${angka.toLocaleString('id-ID')}`
}
