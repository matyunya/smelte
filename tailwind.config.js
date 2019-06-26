const rippleAfter = {
  content: "\'\'",
  display: 'block',
  position: 'absolute',
  width: '100%',
  height: '100%',
  top: 0,
  left: 0,
  pointerEvents: 'none',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: '50%',
  transform: 'scale(10, 10)',
  opacity: 0,
  transition: 'transform .4s, opacity 0.8s',
}

const ripple = {
  position: 'relative',
  overflow: 'hidden',
  transform: 'translate3d(0, 0, 0)',
}

const rippleActiveAfter = {
  transform: 'scale(0, 0)',
  opacity: .3,
  transition: '0s',
};

module.exports = {
  theme: {
    fontSize: {
      '5xl': '6rem',
      '4xl': '3.75rem',
      '3xl': '3rem',
      '2xl': '2.125rem',
      xl: ' 1.5rem',
      lg: ' 1.25rem',
      base: ' 1rem',
      sm: ' 0.875rem',
      xs: ' 0.75rem',
      caption: '0.625rem',
    },
    lineHeight: {
      none: 1,
      tight: 1.25,
      normal: 1.45,
      relaxed: 1.75,
      loose: 2,
    },
    colors: {
      white: '#fff',
      black: '#000',
      transparent: 'transparent',
      primary: {
        100: '#c6e8ff',
        200: '#a0d9ff',
        300: '#79caff',
        400: '#5dbeff',
        500: '#40b3ff',
        600: '#3aacff',
        700: '#32a3ff',
        800: '#2a9aff',
        900: '#1c8bff',
      },
      gray: {
        100: '#f1f3f5',
        200: '#e9ecef',
        300: '#dee2e6',
        400: '#ced4da',
        500: '#adb5bd',
        600: '#868e96',
        700: '#495057',
        800: '#343a40',
        900: '#212529',
      },
      red: {
        100: '#ffe3e3',
        200: '#ffc9c9',
        300: '#ffa8a8',
        400: '#ff8787',
        500: '#ff6b6b',
        600: '#fa5252',
        700: '#f03e3e',
        800: '#e03131',
        900: '#c92a2a',
      },
      pink: {
        100: '#ffdeeb',
        200: '#fcc2d7',
        300: '#faa2c1',
        400: '#f783ac',
        500: '#f06595',
        600: '#e64980',
        700: '#d6336c',
        800: '#c2255c',
        900: '#a61e4d',
      },
      grape: {
        100: '#f3d9fa',
        200: '#eebefa',
        300: '#e599f7',
        400: '#da77f2',
        500: '#cc5de8',
        600: '#be4bdb',
        700: '#ae3ec9',
        800: '#9c36b5',
        900: '#862e9c',
      },
      violet: {
        100: '#e5dbff',
        200: '#d0bfff',
        300: '#b197fc',
        400: '#9775fa',
        500: '#845ef7',
        600: '#7950f2',
        700: '#7048e8',
        800: '#6741d9',
        900: '#5f3dc4',
      },
      blue: {
        100: '#d0ebff',
        200: '#a5d8ff',
        300: '#74c0fc',
        400: '#4dabf7',
        500: '#339af0',
        600: '#228be6',
        700: '#1c7ed6',
        800: '#1971c2',
        900: '#1864ab',
      },
      cyan: {
        100: '#c5f6fa',
        200: '#99e9f2',
        300: '#66d9e8',
        400: '#3bc9db',
        500: '#22b8cf',
        600: '#15aabf',
        700: '#1098ad',
        800: '#0c8599',
        900: '#0b7285',
      },
      teal: {
        100: '#c3fae8',
        200: '#96f2d7',
        300: '#63e6be',
        400: '#38d9a9',
        500: '#20c997',
        600: '#12b886',
        700: '#0ca678',
        800: '#099268',
        900: '#087f5b',
      },
      green: {
        100: '#d3f9d8',
        200: '#b2f2bb',
        300: '#8ce99a',
        400: '#69db7c',
        500: '#51cf66',
        600: '#40c057',
        700: '#37b24d',
        800: '#2f9e44',
        900: '#2b8a3e',
      },
      lime: {
        100: '#e9fac8',
        200: '#d8f5a2',
        300: '#c0eb75',
        400: '#a9e34b',
        500: '#94d82d',
        600: '#82c91e',
        700: '#74b816',
        800: '#66a80f',
        900: '#5c940d',
      },
      yellow: {
        100: '#fff3bf',
        200: '#ffec99',
        300: '#ffe066',
        400: '#ffd43b',
        500: '#fcc419',
        600: '#fab005',
        700: '#f59f00',
        800: '#f08c00',
        900: '#e67700',
      },
      orange: {
        100: '#ffe8cc',
        200: '#ffd8a8',
        300: '#ffc078',
        400: '#ffa94d',
        500: '#ff922b',
        600: '#fd7e14',
        700: '#f76707',
        800: '#e8590c',
        900: '#d9480f',
      },
    }
  },
  extend: {
    fontFamily: {
      sans: 'Roboto',
    },
  },
  variants: {},
  plugins: [
    require('tailwindcss-elevation')(['hover']),
    function ({ addUtilities }) {
      return addUtilities({
        ['.label-transition']: {
          transition: 'font-size 0.2s, line-height 0.2s',
        }
      });
    },
    function ({ addUtilities, theme, e }) {
      const colors = theme('colors');

      const ripples = Object.keys(colors)
        .reduce((acc, key) => {
          if (typeof colors[key] === 'string') {
            return {
              ...acc,
              [`.ripple-${e(key)}`]: ripple,
              [`.ripple-${e(key)}:after`]: {
                ...rippleAfter,
                backgroundImage: `radial-gradient(circle, ${colors[key]} 20%, transparent 10.01%)`
              },
              [`.ripple-${e(key)}:active:after`]: rippleActiveAfter,
            };
          }

          return {
            ...acc,
            [`.ripple-${e(key)}`]: ripple,
            [`.ripple-${e(key)}:after`]: {
              ...rippleAfter,
              backgroundImage: `radial-gradient(circle, ${colors[key]['700']} 20%, transparent 10.01%)`
            },
            [`.ripple-${e(key)}:active:after`]: rippleActiveAfter,
          };

        }, {});

      addUtilities(ripples);
    },
    function ({ e, addUtilities, theme }) {
      const colors = theme('colors');

      const caretColors = Object.keys(colors)
        .reduce((acc, key) => {
          if (typeof colors[key] === 'string') {
            return {
              ...acc,
              [`.caret-${e(key)}`]: {
                'caret-color': colors[key]
              }
            }
          }

          const variants = Object.keys(colors[key])

          return {
            ...acc,
            ...variants.reduce((a, variant) => ({
              ...a,
              [`.caret-${e(key)}-${variant}`]: {
                'caret-color': colors[key][variant]
              },
            }), {}),
          };
        }, {});

      addUtilities(caretColors);
    }
  ]
}