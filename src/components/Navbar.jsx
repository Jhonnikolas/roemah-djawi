import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

// Daftar menu navigasi -> route halaman tujuan.
const menuItems = [
  { label: 'Beranda', to: '/' },
  { label: 'Tentang Kos', to: '/tentang' },
  { label: 'Layanan', to: '/layanan' },
  { label: 'Galeri', to: '/galeri' },
  { label: 'Status Kamar', to: '/status-kamar' },
  { label: 'Kontak', to: '/kontak' },
]

// Navbar dibuat SELALU berlatar putih gading solid (tidak transparan di atas
// foto lagi) supaya tulisan menu selalu kontras & mudah dibaca di halaman
// manapun — baik di atas foto hero maupun di halaman berlatar terang lainnya.
export default function Navbar() {
  // State untuk toggle menu mobile (hamburger)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  // Tutup menu mobile otomatis saat salah satu link diklik
  const handleLinkClick = () => setIsMenuOpen(false)

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-gading-light shadow-sm border-b border-jati/10">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-5 sm:px-8 py-3 sm:py-4">
        {/* Logo / Nama Kos */}
        <Link to="/" className="flex items-baseline gap-2" onClick={handleLinkClick}>
          <span className="font-display text-2xl sm:text-3xl font-semibold tracking-wide text-jati">
            Roemah
          </span>
          <span className="font-display text-2xl sm:text-3xl italic text-emas-dark">Djawi</span>
        </Link>

        {/* Menu untuk layar medium ke atas — teks diperbesar agar mudah dibaca */}
        <ul className="hidden lg:flex items-center gap-7 font-body text-base text-jati">
          {menuItems.map((item) => (
            <li key={item.to}>
              <NavLink
                to={item.to}
                end={item.to === '/'}
                className={({ isActive }) =>
                  `pb-1 border-b-2 inline-block py-1 transition-colors hover:text-emas-dark ${
                    isActive ? 'text-emas-dark border-emas font-medium' : 'border-transparent'
                  }`
                }
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <Link
          to="/pesan-kamar"
          className="hidden lg:inline-block bg-emas text-white px-6 py-3 text-base font-medium hover:bg-emas-dark transition-colors"
        >
          Pesan Kamar
        </Link>

        {/* Tombol hamburger untuk mobile (area sentuh cukup luas untuk layar sentuh) */}
        <button
          className="lg:hidden -mr-2 p-3 flex items-center justify-center text-jati"
          aria-label={isMenuOpen ? 'Tutup menu navigasi' : 'Buka menu navigasi'}
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((prev) => !prev)}
        >
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
            {isMenuOpen ? (
              <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </nav>

      {/* Menu mobile (muncul saat hamburger diklik) — tombol besar, mudah disentuh */}
      {isMenuOpen && (
        <ul className="lg:hidden flex flex-col items-stretch gap-1 px-5 pb-5 bg-gading-light font-body text-jati text-lg border-t border-jati/10">
          {menuItems.map((item) => (
            <li key={item.to}>
              <NavLink
                to={item.to}
                end={item.to === '/'}
                onClick={handleLinkClick}
                className={({ isActive }) =>
                  `block py-3.5 text-center ${isActive ? 'text-emas-dark font-semibold' : 'hover:text-emas-dark'}`
                }
              >
                {item.label}
              </NavLink>
            </li>
          ))}
          <li className="mt-2">
            <Link
              to="/pesan-kamar"
              onClick={handleLinkClick}
              className="block text-center bg-emas text-white py-3.5 text-lg font-medium hover:bg-emas-dark transition-colors"
            >
              Pesan Kamar
            </Link>
          </li>
        </ul>
      )}
    </header>
  )
}
