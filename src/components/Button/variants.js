module.exports = {
  all: color => [
    `bg-${color}-50`,
    `ripple-${color}-500`,
    `ripple-${color}`,
    `bg-${color}`,
    `text-${color}`
  ],
  normal: color => [
    `text-${color}-500`,
    `text-${color}-400`,
    `bg-${color}-500`,
    `bg-${color}-400`,
    `border-${color}-400`
  ],
  light: color => [
    `text-${color}-400`,
    `text-${color}-300`,
    `bg-${color}-400`,
    `bg-${color}-300`,
    `border-${color}-300`
  ],
  dark: color => [
    `text-${color}-900`,
    `text-${color}-800`,
    `bg-${color}-900`,
    `bg-${color}-800`,
    `border-${color}-800`
  ]
};
