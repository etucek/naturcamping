const colors = require('tailwindcss/colors');
const defaultTheme = require('tailwindcss/defaultTheme')

export default {
  darkMode: "class",
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px'
    },
    fontFamily: {
      inter: ["Inter var","sans-serif"],
      sans: [
        'Inter var',
        '-apple-system',                                                                                                                                                                    
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        '"Noto Sans"',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
        '"Noto Color Emoji"',
      ],
    },
    extend: {
      colors: {
        primary: '#ff8700'
      }
    }
  },
  variants: {
    extend: { typography: ["dark"] }
  },
  plugins: [require('@tailwindcss/typography')]
}
