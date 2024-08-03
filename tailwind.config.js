module.exports = {
  important: true,
  darkMode: 'class',
  content: ['./index.html', './src/**/*.tsx'],
  theme: {
    colors: {
      white: '#fff',
      black: '#000',
    },

    extend: {
      fontFamily: {
        clash: ['clash', 'ui-sans-serif', 'system-ui'],
        cabinet: ['cabinet', 'ui-sans-serif', 'system-ui'],
      },
    },
  },
  plugins: [],
};
