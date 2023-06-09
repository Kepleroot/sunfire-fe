/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    fontSize: {
      '3xs': ['8px', '12px'],
      '2xs': ['12px', '16px'],
      xs: ['14px', '20px'],
      sm: ['15px', '22px'],
      base: ['16px', '24px'],
      lg: ['18px', '28px'],
      xl: ['20px', '30px'],
      '2xl': ['24px', '36px'],
      '3xl': ['32px', '36px'],
      '4xl': ['40px', '60px'],
    },
    colors: {
      current: 'currentColor',
      transparent: 'transparent',
      link: 'rgb(var(--link-rgb) / <alpha-value>)',
      white: '#FAFAFA',
      neutral: {
        700: '#323539',
      },
      zinc: {
        800: '#272A2F',
      },
      gray: {
        100: '#D7D7DB',
        300: '#757C82',
        700: '#404040',
        800: '#2F3B49',
      },
      black: '#1B1B1B',
      yellow: {
        100: '#FFDD28',
        200: '#FFC107',
        300: '#FDCF44',
        500: '#E5C227',
        700: '#CB9800',
      },
      orange: { 500: '#FF7D1F', 600: '#F94A24' },
      purple: {
        100: '#7E41CC',
        300: '#F1D6FF',
        500: '#6A008E',
        700: '#4A133C',
        800: '#32102A',
      },
      pink: {
        100: '#FF46C0',
        200: '#DB8BF7',
        900: '#AB3BD2',
      },
      green: {
        200: '#B0FFAA',
        300: '#4EAB58',
        400: '#13E000',
        450: '#50E35F',
        500: '#5BFF4D',
        600: '#11CC00',
        700: '#007408',
        800: '#34762F',
      },
      red: {
        400: '#AD361F',
        500: '#611F11',
      },
      blue: {
        300: '#CBDFF9',
        400: '#BADAFF',
        450: '#96C0F7',
        500: '#53A2FF',
        600: '#2B5CD9',
        700: '#005DD7',
        800: '#083575',
        900: '#112944',
      },
    },
    screens: {
      xs: '400px',
      sm: '550px',
      md: '750px',
      lg: '1000px',
    },
    extend: {
      fontFamily: {
        sans: ['Roboto', 'Arial', 'sans-serif'],
      },
      zIndex: {
        1: '1',
        41: '41',
      },
      spacing: {
        '2/3': '66.666666%',
      },
    },
  },
}
