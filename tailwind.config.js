module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'syncopate': ["'Syncopate'", 'sans-serif'],
        'inter': ["'Inter'", 'sans-serif']
      },
      colors: {
        'soft-green': '#0BF187',
        'purple': '#CC6AFF',
        'yellow': '#EBFF00',
        'soft-sky': '#00FFFF'
      }
    },
  },
  plugins: [],
}