/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#5e72e4', // Light Blue
          DEFAULT: '#3b82f6', // Base Blue (Primary Color) 60% rule
          dark: '#1e40af' // Dark Blue
        },
        secondary: {
          light: '#bfdbfe', // Light Variant
          DEFAULT: '#60a5fa', // Base Secondary Color 30% rule
          dark: '#2563eb' // Dark Variant
        },
        tertiary: {
          light: '#dbeafe', // Light Variant
          DEFAULT: '#0284c7', // Base Tertiary Color 10% rule
          dark: '#0369a1' // Dark Variant
        },
        background: {
          light: '#ffffff', // Light Background
          dark: '#1a202c' // Dark Background
        },
        text: {
          light: '#000000', // Light Text
          dark: '#ffffff' // Dark Text
        }
      }
    }
  },
  plugins: []
}
