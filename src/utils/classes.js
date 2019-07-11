export default function utils(color, defaultDepth = 500) {
  return {
    bg: depth => `bg-${color}-${depth || defaultDepth} `,
    border: depth => `border-${color}-${depth || defaultDepth} `,
    txt: depth => `text-${color}-${depth || defaultDepth} `,
    ripple: depth => `ripple-${color}-${depth || defaultDepth} `,
    caret: depth => `caret-${color}-${depth || defaultDepth} `
  };
}

export class ClassBuilder {
  constructor() {
    this.classes = "";
  }

  flush() {
    this.classes = "";

    return this;
  }

  get() {
    return this.classes;
  }

  replace(classes, cond = true) {
    if (cond && classes) {
      this.classes = Object.keys(classes).reduce(
        (acc, from) => acc.replace(new RegExp(from, "g"), classes[from]),
        this.classes
      );
    }

    return this;
  }

  remove(classes, cond = true) {
    if (cond && classes) {
      this.classes = classes
        .split(" ")
        .reduce(
          (acc, cur) => acc.replace(new RegExp(cur, "g"), ""),
          this.classes
        );
    }

    return this;
  }

  add(className, cond = true) {
    if (cond && className) {
      this.classes += ` ${className} `;
    }

    return this;
  }
}
