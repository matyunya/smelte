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
  constructor(classes, defaultClasses) {
    this.defaults =
      typeof classes === "function" ? classes(defaultClasses) : classes;

    this.classes = this.defaults;
  }

  flush() {
    this.classes = this.defaults;

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

  add(className, cond = true, defaultValue) {
    if (!cond || !className) return this;

    switch (typeof className) {
      case "string":
      default:
        this.classes += ` ${className} `;
        return this;
      case "function":
        this.classes += ` ${className(defaultValue)} `;
        return this;
    }
  }
}
