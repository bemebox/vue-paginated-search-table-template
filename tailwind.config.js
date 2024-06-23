/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#93c5fd', // Light Blue
          DEFAULT: '#3b82f6', // Base Blue (Primary Color)
          dark: '#1e40af' // Dark Blue
        },
        secondary: {
          light: '#bfdbfe', // Light Variant
          DEFAULT: '#60a5fa', // Base Secondary Color
          dark: '#2563eb' // Dark Variant
        },
        tertiary: {
          light: '#dbeafe', // Light Variant
          DEFAULT: '#0284c7', // Base Tertiary Color
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
