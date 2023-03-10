/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
        fontFamily: {
            'Gordita': 'Gordita\\ Regular',
        },
        colors: {
            'main-bg': 'rgb(249,245,242)', 
            'footer-bg': 'rgb(38,38,38)',
            'gray': 'rgba(255,255,255,0.698)',
            'dark-gray': 'rgba(255,255,255,0.498)',
        }
    },
  },
  plugins: [],
}