module.exports = {
  all: color => [`bg-${color}-50`, `ripple-${color}-500`],
  normal: color => [
    `text-${color}-500`,
    `text-${color}-400`,
    `border-${color}-400`
  ],
  light: color => [
    `text-${color}-400`,
    `text-${color}-300`,
    `border-${color}-300`
  ],
  dark: color => [
    `text-${color}-900`,
    `text-${color}-800`,
    `border-${color}-800`
  ]
};
