/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-purple': '#4c1d95', // A deep purple
        'brand-red': '#be123c',     // A rich red
        'brand-dark': '#111827',   // A dark gray for backgrounds
      },
      backgroundImage: {
        'brand-gradient': 'linear-gradient(to bottom right, var(--tw-gradient-stops))',
      }
    },
  },
  plugins: [],
}
