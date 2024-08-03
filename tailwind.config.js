module.exports = {
  important: true,
  darkMode: 'class',
  content: ['./index.html', './src/**/*.tsx'],
  theme: {
    colors: {
      white: '#fff',
      black: '#000',
      secondary: '#fbd112',
      primary: '#013D69',
      tertiary: '#8C340F',
      green: '#315C0F',
      gray: {
        100: '#e0e0e0',
        200: '#d1d2d3',
        300: '#bbbcbd',
        400: '#a4a5a7',
        500: '#8d8f91',
        600: '#76787a',
        700: '#5f6264',
        800: '#494b4e',
        900: '#323538',
      },
    },

    extend: {
      fontFamily: {
        clash: ['clash', 'ui-sans-serif', 'system-ui'],
        cabinet: ['cabinet', 'ui-sans-serif', 'system-ui'],
        backline: ['backline', 'ui-sans-serif', 'system-ui'],
      },
    },
  },
  plugins: [],
};
