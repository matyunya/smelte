const noDepth = ["white", "black", "transparent"];

function getClass(prop, color, depth, defaultDepth) {
  if (noDepth.includes(color)) {
    return `${prop}-${color}`;
  }
  return `${prop}-${color}-${depth || defaultDepth} `;
}

function utils(color, defaultDepth = 500) {
  return {
    bg: depth => getClass("bg", color, depth, defaultDepth),
    border: depth => getClass("border", color, depth, defaultDepth),
    txt: depth => getClass("text", color, depth, defaultDepth),
    caret: depth => getClass("caret", color, depth, defaultDepth)
  };
}

class SuperClass {
  constructor(s, props) {
    this.classes = new Set(s.split(" "));
    this.props = props;
  }
  apply(fn) {
    this.classes = new Set(fn(this.toString()).split(" "));

    return this;
  }
  setTextColor(depth, cond) {
    if (!cond) return this;

    this.use("color", depth);

    return this;
  }
  use(name, depth = 500) {
    this.set(utils(this.props.color, depth)[name]);

    return this;
  }
  remove(prop, cond = true) {
    if (!cond) return this;

    this.classes.delete(prop);
  }
  set(prop, cond = true) {
    if (!cond) return this;

    if (typeof prop === "function") {
      return this.apply(prop);
    }

    const props = (prop || "").split(" ");

    props.forEach(p => this.classes.add(p));

    return this;
  }
  toString() {
    return [...this.classes].join(" ");
  }
}

function build(store, props = {}, name) {
  let c = new SuperClass(store.classes[name] || "", props);

  if (name === "root") {
    c.set(props.class);
  }

  props = {
    ...store.defaults,
    ...props
  };

  const rls = {
    ...store.rules[name],
    ...(props.rules || {})[name]
  };

  if (!Object.keys(rls).length) return c;

  return Object.keys(rls).map(r => (rls[r] ? rls[r](c, props, store) : c));
}

export default function builder(store, props = {}) {
  return Object.keys(store.classes).reduce(
    (acc, c) => ({
      [c]: build(store, props, c),
      ...acc
    }),
    {}
  );
}
