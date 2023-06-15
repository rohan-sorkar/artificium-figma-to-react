/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'noble-black': {
        100: '#E8E9E9',
        200: '#CDCECF',
        300: '#9B9C9E',
        400: '#686B6E',
        500: '#363A3D',
        600: '#1A1D21',
        700: '#131619',
        800: '#0D0F10',
        900: '#060708',

      },
      'day-blue': {
        100: '#EBEDFC',
        200: '#D2D8F9',
        300: '#A6B0F2',
        400: '#7989EC',
        500: '#4D62E5',
        600: '#3045C9',
        700: '#243497',
        800: '#182364',
        900: '#0C1132',

      },
      'purple-blue': {
        100: '#F0E8FD',
        200: '#DECCFB',
        300: '#BD9AF8',
        400: '#9C67F4',
        500: '#7C35F1',
        600: '#5F18D4',
        700: '#47129F',
        800: '#300C6A',
        900: '#180635',

      },
      'sunglow': {
        100: '#FFFAEA',
        200: '#FFF3D1',
        300: '#FFE8A3',
        400: '#FFDC75',
        500: '#FFD147',
        600: '#E2B42B',
        700: '#AA8720',
        800: '#715A15',
        900: '#392D0B',

      },
      'stem-green': {
        100: '#F7FDF4',
        200: '#EDFBE6',
        300: '#DBF7CD',
        400: '#C8F4B4',
        500: '#B6F09C',
        600: '#9AD37F',
        700: '#739F5F',
        800: '#4D6A3F',
        900: '#263520',

      },
      'heisenberg-blue': {
        100: '#F1FBFE',
        200: '#E0F6FD',
        300: '#C0EDFB',
        400: '#A1E4F9',
        500: '#82DBF7',
        600: '#65BEDA',
        700: '#4C8FA4',
        800: '#335F6D',
        900: '#193037',

      },
      'happy-orange': {
        100: '#FFF2E9',
        600: '#E26F20',
        900: '#391C08',
      },
      'electric-green': {
        100: '#F3FBF7',
        600: '#4AC97E',
        900: '#122B1D',
      },
      'red-power': {
        100: '#FBECEC',
        600: '#D0302F',
        900: '#2F0F0E',
      }
    },
    fontFamily: {
      'jakarta': ['Plus Jakarta Sans', 'sans-serif']
    },
    fontSize: {
      'heading-xs': ['20pt', '1.75rem'],
      'heading-sm': ['24pt', '2rem'],
      'heading-md': ['28pt', '2.25rem'],
      'heading-lg': ['32pt', '2.5rem'],
      'heading-xl': ['36pt', '2.75rem'],
      'body-sm': ['12px', {lineHeight: '18px', letterSpacing: '0.15px'}],
      'body-md': ['14px', {lineHeight: '20px', letterSpacing: '0.15px'}],
      'body-lg': ['16px', {lineHeight: '24px', letterSpacing: '0.15px'}],
      'body-xl': ['18px', {lineHeight: '28px', letterSpacing: '0.15px'}],
    },
    extend: {},
  },
  plugins: [],
}