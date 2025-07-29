/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      height: {
        '18': '4.5rem', // 72px for larger header on desktop
      },
      spacing: {
        '18': '4.5rem',
      },
      padding: {
        '18': '4.5rem',
      }
    },
  },
  plugins: [],
};
