/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        obsidian: '#0B0B0C',
        surface: '#141416',
        elevated: '#1C1C20',
        brand: '#D4602D',
        'brand-hover': '#E06D3B',
      },
      fontFamily: {
        arabic: ['"IBM Plex Sans Arabic"', '"Tajawal"', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
