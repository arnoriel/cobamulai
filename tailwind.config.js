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
          bg: "#F6F7FB",
          white: "#FFFFFF",
          blue: "#2563EB",
          indigo: "#4F46E5",
          cyan: "#0EA5E9",
          dark: "#0B0F19",
          navy: "#1E3A5F",
          slate: "#64748B",
          border: "#E7E9F0",
          soft: "#EEF1FA",
          muted: "#94A3B8",
          glass: "rgba(255,255,255,0.6)",
          glassBorder: "rgba(255,255,255,0.5)",
        }
      },
      fontFamily: {
        display: ['"Manrope"', 'sans-serif'],
        sans: ['"Inter"', 'sans-serif'],
      },
      backdropBlur: {
        xs: '2px',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'shimmer': {
          '0%': { backgroundPosition: '-1000px 0' },
          '100%': { backgroundPosition: '1000px 0' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        'pulse-slow': {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.8' },
        },
        'spin-slow': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        'gradient-shift': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        'marquee': {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.6s ease-out forwards',
        'fade-in': 'fade-in 0.4s ease-out forwards',
        'float': 'float 4s ease-in-out infinite',
        'pulse-slow': 'pulse-slow 3s ease-in-out infinite',
        'spin-slow': 'spin-slow 12s linear infinite',
        'gradient-shift': 'gradient-shift 6s ease infinite',
        'marquee': 'marquee 30s linear infinite',
      },
      boxShadow: {
        'card': '0 1px 2px rgba(15,23,42,0.04), 0 8px 24px rgba(15,23,42,0.05)',
        'card-hover': '0 4px 16px rgba(37,99,235,0.08), 0 16px 40px rgba(15,23,42,0.08)',
        'blue-glow': '0 0 40px rgba(37,99,235,0.2)',
        'blue-sm': '0 2px 12px rgba(37,99,235,0.15)',
        'glass': '0 1px 1px rgba(255,255,255,0.6) inset, 0 8px 32px rgba(15,23,42,0.08)',
        'glass-dark': '0 1px 1px rgba(255,255,255,0.08) inset, 0 8px 32px rgba(0,0,0,0.35)',
      },
    },
  },
  plugins: [],
}