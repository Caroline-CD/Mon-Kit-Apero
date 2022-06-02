const colors = require('tailwindcss/colors')

module.exports = {
  mode: 'jit',
  content: [
    './**/*.{html, js, ts, vue}',
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
  ],

  theme: {
    colors: {
      ...colors,
      yellow: {
        dark:'var(--color-yellow)',
        light:'var(--color-yellow-light)',
      },
      purple: {
        element: 'var(--color-purple)',
      }, 
    }
  },

  plugins: [
    require('@tailwindcss/forms'),
  ],
}
