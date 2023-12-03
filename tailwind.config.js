/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          lightest: '#F9FAFB',
          lighter: '#F4F5F7',
          light: '#E5E7EB',
          DEFAULT: '#9FA6B2',
          dark: '#6B7280',
          darker: '#4B5563',
          darkest: '#374151',
        },
        secondary: {
          lightest: '#D2D6DC',
          lighter: '#9FA6B2',
          light: '#6B7280',
          DEFAULT: '#374151',
          dark: '#1F2937',
          darker: '#111827',
        },
      },
    },

  },
  plugins: [],
};
