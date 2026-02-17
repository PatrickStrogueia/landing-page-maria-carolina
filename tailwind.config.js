/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'brand-bg': 'var(--brand-bg)',
        'brand-text': 'var(--brand-text)',
        'brand-primary': '#98D8C8', // Mint
        'brand-secondary': '#92C4DD', // Serenity
        'brand-dark': '#0F172A', // Deep Petrol
        'brand-dark-bg': '#0F172A', // Adding missing color
        'brand-dark-text': '#F1F5F9', // Adding missing color
        'brand-surface': 'var(--brand-surface)',
      },
      borderRadius: {
        '4xl': '2rem',
      }
    },
  },
  plugins: [],
}
