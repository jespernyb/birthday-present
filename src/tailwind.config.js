import Aura from '@primeuix/themes/aura'

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: Aura.theme,
  },
  plugins: [],
}
