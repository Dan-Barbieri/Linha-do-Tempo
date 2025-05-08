/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'], // Define onde o Tailwind deve buscar as classes usadas
    theme: {
      extend: {}, // Para adicionar personalizações
    },
    plugins: [],
  }
  