// Kumpulan elemen dekoratif SVG bertema "asri & Jawa klasik".
// Dipisah jadi komponen kecil agar bisa dipakai ulang di banyak section (signature visual).

// Motif sulur daun sederhana, dipakai sebagai pemanis sudut kartu/section
export function LeafSprig({ className = '' }) {
  return (
    <svg viewBox="0 0 120 60" className={className} fill="none" aria-hidden="true">
      <path
        d="M2 58C20 30 45 12 90 6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path d="M28 40c6-10 16-16 28-18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <ellipse cx="55" cy="22" rx="9" ry="5" transform="rotate(-30 55 22)" fill="currentColor" fillOpacity="0.35" />
      <ellipse cx="78" cy="12" rx="9" ry="5" transform="rotate(-20 78 12)" fill="currentColor" fillOpacity="0.35" />
      <ellipse cx="35" cy="38" rx="7" ry="4" transform="rotate(-40 35 38)" fill="currentColor" fillOpacity="0.35" />
    </svg>
  )
}

// Bingkai sudut bergaya ukiran kayu joglo, untuk membingkai kartu/foto
export function CornerFrame({ className = '' }) {
  return (
    <svg viewBox="0 0 60 60" className={className} fill="none" aria-hidden="true">
      <path d="M2 2H22M2 2V22" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M2 30c0-16 12-28 28-28" stroke="currentColor" strokeWidth="1" strokeOpacity="0.5" />
    </svg>
  )
}

// Divider bermotif parang (garis diagonal berulang) - signature pemisah antar section
export function ParangDivider({ className = '' }) {
  return <div className={`motif-divider w-full ${className}`} />
}

// Ikon daun tunggal kecil, dipakai di bullet/list fasilitas
export function LeafIcon({ className = '' }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden="true">
      <path
        d="M4 20c0-9 6-15 15-16-1 9-7 15-15 16Z"
        fill="currentColor"
        fillOpacity="0.15"
        stroke="currentColor"
        strokeWidth="1.4"
      />
      <path d="M6 18c3-4 6-7 11-10" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  )
}
