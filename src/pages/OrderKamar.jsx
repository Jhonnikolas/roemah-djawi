import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { ParangDivider } from '../components/Ornaments'

// Kelas input dipakai berulang, disatukan di sini supaya form terlihat konsisten,
// besar, dan mudah dipakai (kotak/persegi, bukan bulat, teks lebih besar dari biasanya).
const inputBase =
  'w-full px-4 py-3.5 bg-white border-2 outline-none text-base text-jati placeholder:text-jati/40'
const inputOk = 'border-jati/20 focus:border-emas'
const inputError = 'border-red-600'

// Halaman Pesan Kamar / Ajukan Sewa (mirip alur "Ajukan Sewa" di Mamikos):
// jika pengguna datang dari halaman Detail Kamar, tipe kamar yang dipilih
// otomatis terisi lewat parameter URL (?tipe=Deluxe).
export default function OrderKamar() {
  const [searchParams] = useSearchParams()
  const tipeDariUrl = searchParams.get('tipe')

  const [form, setForm] = useState({
    nama: '',
    telepon: '',
    tipeKamar: tipeDariUrl || 'Standar',
    tanggalMasuk: '',
    catatan: '',
  })
  const [errors, setErrors] = useState({})
  // Menyimpan status setelah form berhasil dikirim
  const [isSubmitted, setIsSubmitted] = useState(false)

  // Jika pengguna berpindah dari kamar lain (tipe di URL berubah), sinkronkan ke form
  useEffect(() => {
    if (tipeDariUrl) {
      setForm((prev) => ({ ...prev, tipeKamar: tipeDariUrl }))
    }
  }, [tipeDariUrl])

  // Handler generik untuk semua input form
  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
    // Hapus pesan error field ini begitu user mulai mengetik ulang,
    // supaya feedback terasa responsif, bukan menumpuk sampai submit.
    setErrors((prev) => (prev[name] ? { ...prev, [name]: undefined } : prev))
  }

  // Validasi sederhana sebelum form dianggap valid untuk dikirim
  const validate = () => {
    const newErrors = {}
    if (!form.nama.trim()) newErrors.nama = 'Nama wajib diisi.'
    if (!/^[0-9+ ]{9,15}$/.test(form.telepon.trim()))
      newErrors.telepon = 'Nomor telepon tidak valid.'
    if (!form.tanggalMasuk) newErrors.tanggalMasuk = 'Tanggal masuk wajib diisi.'
    return newErrors
  }

  // Validasi per-field saat user meninggalkan input (onBlur),
  // agar kesalahan terlihat lebih awal, tidak menunggu tombol submit ditekan.
  const handleBlur = (e) => {
    const fieldErrors = validate()
    const { name } = e.target
    if (fieldErrors[name]) {
      setErrors((prev) => ({ ...prev, [name]: fieldErrors[name] }))
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const validationErrors = validate()
    setErrors(validationErrors)

    // Jika tidak ada error, anggap pemesanan berhasil dikirim
    if (Object.keys(validationErrors).length === 0) {
      setIsSubmitted(true)
      setForm((prev) => ({ ...prev, nama: '', telepon: '', tanggalMasuk: '', catatan: '' }))
    }
  }

  return (
    <section id="order-kamar" className="relative pt-28 pb-20 sm:pt-36 sm:pb-28 bg-gading-light">
      <div className="max-w-3xl mx-auto px-5 sm:px-8">
        <div className="text-center mb-10">
          <p className="uppercase tracking-[0.25em] text-sm text-emas-dark font-medium mb-3">Ajukan Sewa</p>
          <h1 className="font-display text-3xl sm:text-4xl text-jati font-semibold">
            Pesan Kamar Anda
          </h1>
          <p className="mt-4 text-ink/70 text-lg max-w-xl mx-auto">
            Isi formulir singkat di bawah ini. Tim kami akan segera menghubungi
            Anda untuk konfirmasi ketersediaan dan langkah selanjutnya.
          </p>
        </div>

        {isSubmitted && (
          <div
            role="status"
            aria-live="polite"
            className="mb-8 p-4 bg-taman/10 border-2 border-taman text-taman-dark text-base text-center font-medium"
          >
            Terima kasih! Pemesanan Anda telah kami terima, tim kami akan
            segera menghubungi Anda.
          </div>
        )}

        <form
          onSubmit={handleSubmit}
          noValidate
          className="grid sm:grid-cols-2 gap-6 bg-gading p-6 sm:p-10 border border-jati/10"
        >
          {/* Nama Lengkap */}
          <div className="sm:col-span-1">
            <label htmlFor="nama" className="block text-base font-medium text-jati mb-2">
              Nama Lengkap
            </label>
            <input
              id="nama"
              name="nama"
              type="text"
              autoComplete="name"
              value={form.nama}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Nama Anda"
              aria-invalid={Boolean(errors.nama)}
              aria-describedby={errors.nama ? 'error-nama' : undefined}
              className={`${inputBase} ${errors.nama ? inputError : inputOk}`}
            />
            {errors.nama && (
              <p id="error-nama" className="text-sm text-red-700 mt-1.5 font-medium">
                ⚠ {errors.nama}
              </p>
            )}
          </div>

          {/* Nomor Telepon: contoh format ditampilkan sebagai teks permanen di bawah
              kolom supaya pengguna tidak lupa formatnya di tengah pengisian. */}
          <div className="sm:col-span-1">
            <label htmlFor="telepon" className="block text-base font-medium text-jati mb-2">
              Nomor Telepon / WhatsApp
            </label>
            <input
              id="telepon"
              name="telepon"
              type="tel"
              inputMode="tel"
              autoComplete="tel"
              value={form.telepon}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="08xxxxxxxxxx"
              aria-invalid={Boolean(errors.telepon)}
              aria-describedby={errors.telepon ? 'error-telepon' : 'hint-telepon'}
              className={`${inputBase} ${errors.telepon ? inputError : inputOk}`}
            />
            {errors.telepon ? (
              <p id="error-telepon" className="text-sm text-red-700 mt-1.5 font-medium">
                ⚠ {errors.telepon}
              </p>
            ) : (
              <p id="hint-telepon" className="text-sm text-ink/60 mt-1.5">
                Contoh: 081234567890
              </p>
            )}
          </div>

          {/* Tipe Kamar */}
          <div className="sm:col-span-1">
            <label htmlFor="tipeKamar" className="block text-base font-medium text-jati mb-2">
              Tipe Kamar
            </label>
            <select
              id="tipeKamar"
              name="tipeKamar"
              value={form.tipeKamar}
              onChange={handleChange}
              className={`${inputBase} ${inputOk}`}
            >
              <option value="Standar">Standar</option>
              <option value="Deluxe">Deluxe</option>
              <option value="Suite Keluarga">Suite Keluarga</option>
            </select>
          </div>

          {/* Tanggal Masuk */}
          <div className="sm:col-span-1">
            <label htmlFor="tanggalMasuk" className="block text-base font-medium text-jati mb-2">
              Tanggal Masuk
            </label>
            <input
              id="tanggalMasuk"
              name="tanggalMasuk"
              type="date"
              value={form.tanggalMasuk}
              onChange={handleChange}
              onBlur={handleBlur}
              aria-invalid={Boolean(errors.tanggalMasuk)}
              aria-describedby={errors.tanggalMasuk ? 'error-tanggalMasuk' : undefined}
              className={`${inputBase} ${errors.tanggalMasuk ? inputError : inputOk}`}
            />
            {errors.tanggalMasuk && (
              <p id="error-tanggalMasuk" className="text-sm text-red-700 mt-1.5 font-medium">
                ⚠ {errors.tanggalMasuk}
              </p>
            )}
          </div>

          {/* Catatan tambahan */}
          <div className="sm:col-span-2">
            <label htmlFor="catatan" className="block text-base font-medium text-jati mb-2">
              Catatan Tambahan (opsional)
            </label>
            <textarea
              id="catatan"
              name="catatan"
              rows={3}
              value={form.catatan}
              onChange={handleChange}
              placeholder="Contoh: butuh kamar dekat tangga, dsb."
              className={`${inputBase} ${inputOk} resize-none`}
            />
          </div>

          {/* Tombol kirim: besar, kotak, dan menonjol supaya jelas ini
              tombol paling penting di halaman ini. */}
          <div className="sm:col-span-2 text-center">
            <button
              type="submit"
              className="w-full sm:w-auto bg-jati text-gading-light px-10 py-4 text-lg font-semibold hover:bg-emas transition-colors"
            >
              Kirim Pemesanan
            </button>
          </div>
        </form>
      </div>

      <ParangDivider className="absolute bottom-0" />
    </section>
  )
}
