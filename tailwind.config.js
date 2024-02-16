export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        Avenir: ["Avenir"],
        AvenirLight: ["AvenirLight"],
        AvenirRoman: ["AvenirRoman"],
        AvenirHeavy:["AvenirHeavy"],
        AvenirMedium :['AvenirMedium'],
        Valencia: ["Valencia"],
        Brucken: ['Brucken']
      },
      
      fontSize: {
        sm: 'clamp(0.8rem, 0.17vw + 0.76rem, 0.89rem)',
        base: 'clamp(1rem, 0.34vw + 0.91rem, 1.19rem)',
        lg: 'clamp(1.25rem, 0.61vw + 1.1rem, 1.58rem)',
        xl: 'clamp(1.56rem, 1vw + 1.31rem, 2.11rem)',
        '2xl': 'clamp(1.95rem, 1.56vw + 1.56rem, 2.81rem)',
        '3xl': 'clamp(2.44rem, 2.38vw + 1.85rem, 3.75rem)',
        '4xl': 'clamp(3.05rem, 3.54vw + 2.17rem, 5rem)',
        '5xl': 'clamp(3.81rem, 5.18vw + 2.52rem, 6.66rem)',
        '6xl': 'clamp(4.77rem, 7.48vw + 2.9rem, 8.88rem)',
        '7xl': 'clamp(5.96rem, 10.69vw + 3.29rem, 11.84rem)',
        '8xl': 'clamp(7rem, 14.14vw + 3.66rem, 12.78rem)',
        ' 9xl': 'clamp(9.31rem, 21.31vw + 3.99rem, 21.03rem)',
        '10xl': 'clamp(11.64rem, 29.81vw + 4.19rem, 28.04rem)',
        '11xl': 'clamp(14.55rem, 41.5vw + 4.18rem, 37.38rem)',
        '12xl': 'clamp(18.19rem, 57.51vw + 3.81rem, 49.82rem)',
        '13xl': 'clamp(22.74rem, 79.41vw + 2.88rem, 66.41rem)',
        '14xl': 'clamp(28.42rem, 109.29vw + 1.1rem, 88.53rem)',
        '15xl': 'clamp(35.53rem, 149.97vw + -1.96rem, 118.01rem)',
        '18xl': 'clamp(44.41rem, 205.27vw + -6.91rem, 157.31rem)',
      },
    },
  },
  plugins: [],
}
