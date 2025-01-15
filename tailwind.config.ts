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
        exo2: ['var(--font-exo2)'],
        sono: ['var(--font-sono)'],
        sometypemono: ['var(--font-sometypemono)']
      },
      colors: {
        'custom-dark': '#222831',
        'spaceblack': '#18181b'
        // other custom colors...
      },
    },
  },
  // plugins: [
  //   require('@tailwindcss/typography')
  // ],
  darkMode: "class"
}

export default config