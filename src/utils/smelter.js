class SmelteClassString {
  constructor(s, props, node, store) {
    this.classes = new Set();
    this.props = props;
    this.shade = this.props.shade || 0;
    this.node = node;
    this.store = store;

    this.set(s);
  }
  defaults(name) {
    return this.node.defaults[name];
  }
  apply(fn) {
    this.classes = new Set(fn(this.toString()).split(" "));

    return this;
  }
  setColor(value) {
    this.color = value;
  }
  setShade(value, cond) {
    if (!cond) return this;

    this.shade = value;
  }
  remove(prop, cond = true) {
    if (!cond) return this;

    this.classes.delete(prop);
  }
  replace(a, b) {
    this.classes.delete(a);
    this.classes.add(b);
  }
  swap(classString) {
    return !classString.includes("$")
      ? classString
      : classString
          .replace(/\$color/g, this.props.color || "primary")
          .replace(/\$normal/g, 500 - this.shade)
          .replace(/\$lighter/g, 400 - this.shade);
  }
  applyRemoves() {
    this.classes.forEach(a => {
      if (a.includes("remove:")) {
        this.remove(a.replace("remove:", ""));
      }
    });
  }
  set(prop, cond = true) {
    let value = cond;
    if (typeof cond === "function") {
      value = cond(this.props);
    }

    if (!prop || !value) return this;

    if (typeof prop === "function") {
      return this.apply(prop);
    }

    const props = (prop || "").split(" ");

    props.forEach(p => this.classes.add(p));

    return this;
  }
  preprocess() {
    if (this.props.remove) {
      this.props.remove.split(" ").forEach(c => this.remove(c));
    }

    this.applyRemoves();
  }
  get class() {
    this.preprocess();

    return this.swap([...this.classes].join(" "));
  }
}

function build(node, store, props = {}) {
  const classString = new SmelteClassString(
    node.isMain ? props.class : "",
    props,
    node,
    store
  );

  if (!node.classes || !Object.keys(node.classes).length) return classString;

  Object.keys(node.classes).forEach(r => {
    const rule = node.classes[r];

    if (typeof rule === "string") {
      classString.set(rule, props[r]);
      return;
    }

    rule(classString, props);
  });

  return classString;
}

export default function smelter(store, props = {}) {
  const { nodes } = store;

  return Object.keys(nodes).reduce(
    (tree, name) => ({
      ...tree,
      [name]: build(nodes[name], store, { ...store.props, ...props }, name)
    }),
    {}
  );
}

// common styling utils
export const block = (i, p) => i.set("w-full", Boolean(p.block));

export const elevationOnHover = (i, p) =>
  i.set(
    `elevation-${p.elevation} hover:elevation-${p.hoverElevation}`,
    p.hover
  );
