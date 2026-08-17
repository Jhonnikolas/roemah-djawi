import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

// Setiap kali route berpindah (misal Beranda -> Tentang Kos), posisi scroll
// otomatis dikembalikan ke atas, supaya tiap halaman terasa "halaman baru"
// dan bukan lanjutan scroll dari halaman sebelumnya.
export default function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}
