class SmelteClassString {
  constructor(s, props, node, name, store) {
    this.classes = new Set();
    this.props = props;
    this.shade = this.props.shade || 0;
    this.node = node;
    this.name = name;
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
    if (!classString.includes("$")) return classString;

    const replaces = classString
      .split(/-| /)
      .filter(
        a => a.includes("$") && !["$color", "$normal", "$lighter"].includes(a)
      );

    const s = replaces.reduce(
      (acc, cur) =>
        acc.replace(
          new RegExp("\\" + cur, "g"),
          this.props[cur.replace("$", "")]
        ),
      classString
    );

    return s
      .replace(/\$color/g, this.props.color || "primary")
      .replace(/\$normal/g, 500 - this.shade)
      .replace(/\$lighter/g, 400 - this.shade);
  }
  applyRemoves() {
    this.classes.forEach(a => {
      if (a.includes("remove:")) {
        a.replace("remove:", "")
          .split(".")
          .forEach(c => this.remove(c));
        this.remove(a);
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

    props.forEach(p => this.classes.add(p.trim()));

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

function build(node, store, props = {}, name, isMain) {
  const classString = new SmelteClassString(
    isMain ? props.class : "",
    props,
    node,
    name,
    store
  );

  if (!node || !Object.keys(node).length) return classString;

  Object.keys(node).forEach(r => {
    const rule = node[r];

    if (typeof rule === "boolean") return;

    if (typeof rule === "string") {
      classString.set(rule, props[r]);

      if (props[`class.${name}`]) {
        classString.set(props[`class.${name}`], props[r]);
      }
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
      [name]: build(
        nodes[name],
        store,
        { ...store.props, ...props },
        name,
        nodes[name].isMain || Object.keys(nodes).length === 1
      )
    }),
    {}
  );
}

// common styling utils
export const block = (i, p) => i.set("w-full", Boolean(p.block));
