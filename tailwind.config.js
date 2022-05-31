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
        element: 'var(--color-yellow)',
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
