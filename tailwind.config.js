const {
  rippleAfter,
  ripple,
  rippleActiveAfter,
  addUtility
} = require("./src/utils/style.js");

const buildPalette = require("./src/utils/color.js");

const colors = {
  primary: "#b027b0",
  secondary: "#009688",
  error: "#f44336",
  success: "#4caf50",
  alert: "#ffeb3b",
  blue: "#2196f3",

  // You should keep only colors that you're using
  red: "#f44336",
  pink: "#e91e63",
  purple: "#9c27b0",
  "deep-purple": "#673ab7",
  indigo: "#3f51b5",
  blue: "#2196f3",
  "light-blue": "#03a9f4",
  cyan: "#00bcd4",
  teal: "#009688",
  green: "#4caf50",
  "light-green": "#8bc34a",
  lime: "#cddc39",
  yellow: "#ffeb3b",
  amber: "#ffc107",
  orange: "#ff9800",
  "deep-orange": "#ff5722",
  brown: "#795548"
};

module.exports = {
  variants: {
    backgroundColor: ["hover"]
  },
  theme: {
    fontSize: {
      "5xl": "6rem",
      "4xl": "3.75rem",
      "3xl": "3rem",
      "2xl": "2.125rem",
      xl: "1.5rem",
      lg: "1.25rem",
      base: "1rem",
      sm: "0.875rem",
      xs: "0.75rem"
    },
    breakpoints: {
      sm: { max: "639px" },
      md: { max: "767px" },
      lg: { max: "1023px" },
      xl: { max: "1279px" }
    },
    lineHeight: {
      none: 1,
      tight: 1.25,
      normal: 1.45,
      relaxed: 1.75,
      loose: 2
    },
    colors: {
      white: "#fff",
      "white-500": "#fff",
      black: "#000",
      transparent: "transparent",

      ...buildPalette(colors),

      brown: {
        "50": "#efebe9",
        "100": "#d7ccc8",
        "200": "#bcaaa4",
        "300": "#a1887f",
        "400": "#8d6e63",
        "500": "#795548",
        "600": "#6d4c41",
        "700": "#5d4037",
        "800": "#4e342e",
        "900": "#3e2723",
        trans: "rgba(62,39,35,0.5)"
      },

      gray: {
        "50": "#fafafa",
        "100": "#f5f5f5",
        "200": "#eeeeee",
        "300": "#e0e0e0",
        "400": "#bdbdbd",
        "500": "#9e9e9e",
        "600": "#757575",
        "700": "#616161",
        "800": "#424242",
        "900": "#212121",
        trans: "rgba(250, 250, 250, 0.7)"
      },

      "blue-gray": {
        "50": "#eceff1",
        "100": "#cfd8dc",
        "200": "#b0bec5",
        "300": "#90a4ae",
        "400": "#78909c",
        "500": "#607d8b",
        "600": "#546e7a",
        "700": "#455a64",
        "800": "#37474f",
        "900": "#263238",
        trans: "rgb(236,239,241,0.5)"
      }
    }
  },
  extend: {
    fontFamily: {
      sans: "Roboto"
    }
  },
  plugins: [
    require("tailwindcss-elevation")(["hover"]),
    function({ addUtilities }) {
      return addUtilities({
        [".border-box"]: {
          boxSizing: "border-box"
        },
        [".content-box"]: {
          boxSizing: "content-box"
        },
        [".transition"]: {
          transition: ".2s ease-in"
        },
        [".transition-fast"]: {
          transition: ".1s"
        }
      });
    },
    // Ripples
    function({ addUtilities, theme, e }) {
      const colors = theme("colors");

      const ripples = Object.keys(colors).reduce((acc, key) => {
        if (typeof colors[key] === "string") {
          return {
            ...acc,
            [`.ripple-${e(key)}`]: ripple,
            [`.ripple-${e(key)}:after`]: {
              ...rippleAfter,
              backgroundImage: `radial-gradient(circle, ${colors[key]} 20%, transparent 10.01%)`
            },
            [`.ripple-${e(key)}:active:after`]: rippleActiveAfter
          };
        }

        const variants = Object.keys(colors[key]);

        return {
          ...acc,
          [`.ripple-${e(key)}`]: ripple,
          [`.ripple-${e(key)}:after`]: {
            ...rippleAfter,
            backgroundImage: `radial-gradient(circle, ${
              colors[key][500]
            } 20%, transparent 10.01%)`
          },
          [`.ripple-${e(key)}:active:after`]: rippleActiveAfter,

          ...variants.reduce(
            (a, variant) => ({
              ...a,
              [`.ripple-${e(key)}-${variant}`]: ripple,
              [`.ripple-${e(key)}-${variant}:after`]: {
                ...rippleAfter,
                backgroundImage: `radial-gradient(circle, ${colors[key][variant]} 20%, transparent 10.01%)`
              },
              [`.ripple-${e(key)}-${variant}:active:after`]: rippleActiveAfter
            }),
            {}
          )
        };
      }, {});

      addUtilities(ripples);
    },
    addUtility({
      prop: "caret-color",
      className: ".caret"
    }),
    addUtility({
      prop: "stroke",
      className: ".stroke"
    })
  ]
};
