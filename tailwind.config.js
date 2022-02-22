module.exports = {
  content: ['./src/*/**.{js,jsx}'],
  theme: {
    extend: {},
  },
  plugins: [
    function ({addUtilities}) {
      const utilities = {
        'ios-shadow': {
          shadowColor: '#A0A0A0',
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.08,
          shadowRadius: 10.0,
          elevation: 0,
        },
      };
      addUtilities(utilities);
    },
  ],
  corePlugins: require('tailwind-rn/unsupported-core-plugins'),
};
