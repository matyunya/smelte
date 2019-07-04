module.exports = {
  rippleAfter: {
    content: "''",
    display: "block",
    position: "absolute",
    width: "100%",
    height: "100%",
    top: 0,
    left: 0,
    pointerEvents: "none",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "50%",
    transform: "scale(10, 10)",
    opacity: 0,
    transition: "transform .4s ease-in, opacity 0.8s ease-out"
  },
  ripple: {
    position: "relative",
    overflow: "hidden",
    transform: "translate3d(0, 0, 0)"
  },
  rippleActiveAfter: {
    transform: "scale(0, 0)",
    opacity: 0.3,
    transition: "0s"
  },
  addUtility({
    prop = "caret-color",
    className = ".caret",
    value = a => a,
    defaultVariant = 500
  }) {
    return function({ e, addUtilities, theme }) {
      const colors = theme("colors");

      const caretColors = Object.keys(colors).reduce((acc, key) => {
        if (typeof colors[key] === "string") {
          return {
            ...acc,
            [`${className}-${e(key)}`]: {
              [prop]: colors[key]
            }
          };
        }

        const variants = Object.keys(colors[key]);

        return {
          ...acc,
          [`${className}-${e(key)}`]: {
            [prop]: colors[key][defaultVariant]
          },
          ...variants.reduce(
            (a, variant) => ({
              ...a,
              [`${className}-${e(key)}-${variant}`]: {
                [prop]: colors[key][variant]
              }
            }),
            {}
          )
        };
      }, {});

      addUtilities(caretColors);
    };
  }
};
