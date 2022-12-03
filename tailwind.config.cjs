/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      width: {
        p55: '55%',
      },
      boxShadow: {
        axl: '0 10px 20px -1px rgb(0 0 0 / 0.1), 0px 4px 12px -2px rgb(0 0 0 / 0.1)',
        amd: '0 4px 12px -1px rgb(0 0 0 / 0.1), 0 2px 4px -10px rgb(0 0 0 / 0.1)',
      },
    },
  },
  plugins: [],
};
