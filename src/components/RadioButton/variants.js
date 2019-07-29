module.exports = {
  all: color => [
    `text-${color}-500`,
    `hover:bg-${color}-trans`,
    `bg-${color}-trans`,
    `hover:bg-${color}-transDark`
  ]
};
