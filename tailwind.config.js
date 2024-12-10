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
        'custom-gray': '#555555',
        'light-gray': '#333333',
      },
    },
  },
  plugins: [],
}

