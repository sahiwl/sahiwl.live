const config = {
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",
  theme: {
    extend: {
      fontFamily:{
        spacegrotesk: ['var(--font-spacegrotesk)'],
        inter: ['var(--font-Inter)'],
        sono: ['var(--font-sono)'],
        sometypemono: ['var(--font-sometypemono)']
      },
      colors: {
        'custom-dark': '#222831',
        // other custom colors...
      },
    },
  },
  plugins: [],
  darkMode: "class"
}

export default config