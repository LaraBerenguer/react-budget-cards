/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-purple': '#6a0dad',
        'custom-purple': '#8b3d99',
        'custom-pink': '#e91ee9',
        'custom-gray': '#555555',
        'light-gray': '#333333',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0, transform: 'translateY(-10px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        fadeOut: {
          '0%': { opacity: 1, transform: 'translateY(0)' },
          '100%': { opacity: 0, transform: 'translateY(-10px)' },
        },
      },
      animation: {
        fadeIn: 'fadeIn 0.5s ease-in-out',
        fadeOut: 'fadeOut 0.5s ease-in-out',
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

