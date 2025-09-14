/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        hookups: {
          bg: '#1a1a1a',
          text: '#e0e0e0',
          accent: '#ff3b30',
        },
        community: {
          bg: '#f5f5f7',
          text: '#1d1d1f',
          accent: '#ff9500',
          secondary: '#00a0b0',
        }
      }
    },
  },
  plugins: [],
}
