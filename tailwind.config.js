

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{svelte,ts,js}',
    './src/app.css',
    './build/index.html'
  ],
  theme: {
    extend: {
      fontFamily: {
        figtree: ["var(--font-figtree)", 'sans-serif'],
        urbanist: ["var(--font-urbanist)", 'sans-serif'],
        nunito: ["var(--font-nunito)", 'sans-serif']
      },
      colors: {
        primary: 'var(--color-primary)',
        secondary: 'var(--color-secondary)',
        tertiary: 'var(--color-tertiary)',
        quaternary: 'var(--color-quaternary)',
        dark: 'var(--color-dark)'
      },
      backgroundImage: {
        'gradient-primary-secondary': 'var(--gradient-primary-secondary)'
      }
    }
  },
  plugins: []
};
