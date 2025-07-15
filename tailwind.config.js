/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        primary: '#275559',
        secondary: '#4DA8B0',
        success: '#10B981',
        warning: '#F59E0B',
        error: '#EF4444'
      },
      fontFamily: {
        'body': ['Inter', 'sans-serif'],
        'heading': ['Lora', 'serif']
      }
    },
  },
  plugins: [],
} 