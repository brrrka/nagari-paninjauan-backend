/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // <-- Pastikan baris ini ada
  ],
  theme: {
    extend: {
      colors: {
        'nagari-green': '#2E7D32',
        'nagari-brown': '#5D4037',
        'nagari-gold': '#FFC107',
      }
    },
  },
  plugins: [
  ],
}