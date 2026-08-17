// Footer: hak cipta & penutup halaman
export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="bg-jati-dark text-gading-light/70 text-center text-sm py-6">
      <p>© {year} Roemah Djawi. Seluruh hak cipta dilindungi.</p>
    </footer>
  )
}
