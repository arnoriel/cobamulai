/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: "#020617",       // Biru sangat tua (hampir hitam) untuk background
          navy: "#0f172a",       // Biru tua elegan untuk card
          primary: "#2563eb",    // Biru standar
          light: "#3b82f6",      // Biru terang
          cyan: "#06b6d4",       // Aksen cyan modern
          glow: "#60a5fa",       // Warna untuk efek glow
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // Pastikan import font ini di index.css atau pakai font default
      }
    },
  },
  plugins: [],
}