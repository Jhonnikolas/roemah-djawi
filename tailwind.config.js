/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      // Palet warna khas "Roemah Djawi": gading, coklat kayu jati, hijau taman, aksen emas
      colors: {
        gading: {
          DEFAULT: '#F7F2E7',
          light: '#FDFBF6',
          dark: '#EDE4D3',
        },
        jati: {
          DEFAULT: '#4A342A',
          light: '#6B4F3F',
          dark: '#2E1F18',
        },
        taman: {
          DEFAULT: '#5F7A52',
          light: '#7E9A70',
          dark: '#41573A',
        },
        emas: {
          DEFAULT: '#A6763A',
          light: '#C79A5C',
          // Varian lebih gelap khusus teks kecil di atas latar terang,
          // agar rasio kontras memenuhi WCAG AA (>=4.5:1) — lihat laporan evaluasi GUI.
          dark: '#8A5F2C',
        },
        ink: '#2B2620',
      },
      fontFamily: {
        // Serif elegan untuk judul, sans bersih untuk isi, tracking lebar untuk label
        display: ['"Cormorant Garamond"', 'serif'],
        body: ['"Jost"', 'sans-serif'],
      },
      backgroundImage: {
        'parang': "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'%3E%3Cpath d='M0 20 L20 0 L40 20 L20 40 Z' fill='none' stroke='%234A342A' stroke-opacity='0.06' stroke-width='1'/%3E%3C/svg%3E\")",
      },
    },
  },
  plugins: [],
}
