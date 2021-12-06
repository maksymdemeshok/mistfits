module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('/img/hero/mm-hero.jpg')",
        'imgsec6': "url('/img/sec6/mm-funnylooking.jpeg')"
      },
      backgroundColor: {
        'main': '#f2ebd1',
        'sec3': '#fef9ea',
        'linebg': '#dea456',
        'sec4': '#f2d79a',
        'sec6': '#f1c349'
      },
      backgroundSize: {
        '56%': '56%',
        '35%': '35%'
      },
      backgroundPosition: {
        'right-80': 'right 80%'
      },
      width: {
        '1200': '1200px'
      },
      gridTemplateRows: {
        '7': 'repeat(7, minmax(0, 1fr))'
      },
      animation: {
        marquee: 'marquee 35s linear infinite',
        marquee2: 'marquee2 35s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        marquee2: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0%)' },
        },
      }


    },

  },
  variants: {

    extend: {},
  },
  plugins: [
  ],
}
