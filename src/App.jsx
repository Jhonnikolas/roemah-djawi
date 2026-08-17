import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import Home from './pages/Home'
import AboutKos from './pages/AboutKos'
import Service from './pages/Service'
import Gallery from './pages/Gallery'
import StatusKamar from './pages/StatusKamar'
import RoomDetail from './pages/RoomDetail'
import OrderKamar from './pages/OrderKamar'
import Contact from './pages/Contact'

// Komponen utama: setiap menu di Navbar sekarang mengarah ke halaman (route)
// yang berbeda, bukan lagi scroll ke section dalam satu halaman panjang.
// Saat berada di Beranda, hanya isi Home yang tampil; begitu juga halaman lain.
function App() {
  return (
    <div className="font-body">
      {/* Skip link: membantu pengguna keyboard/screen reader lompat langsung ke konten,
          tanpa perlu melewati seluruh menu navigasi setiap kali (prinsip aksesibilitas). */}
      <a
        href="#konten-utama"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] focus:bg-jati focus:text-gading-light focus:px-4 focus:py-2 focus:rounded-full"
      >
        Langsung ke konten utama
      </a>
      <ScrollToTop />
      <Navbar />
      <main id="konten-utama">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tentang" element={<AboutKos />} />
          <Route path="/layanan" element={<Service />} />
          <Route path="/galeri" element={<Gallery />} />
          <Route path="/status-kamar" element={<StatusKamar />} />
          <Route path="/kamar/:id" element={<RoomDetail />} />
          <Route path="/pesan-kamar" element={<OrderKamar />} />
          <Route path="/kontak" element={<Contact />} />
          {/* Halaman tidak dikenal diarahkan tampil sebagai Beranda */}
          <Route path="*" element={<Home />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
