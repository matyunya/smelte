export let defaults = {
  color: "primary",
  normal: 500,
  lighter: 600
};

class SmelteClassString {
  constructor(s, props, node, name, store) {
    this.classes = new Set();
    this.props = { ...defaults, ...props };
    this.node = node;
    this.name = name;
    this.store = store;

    this.set(s);
  }
  defaults(name) {
    return this.node.defaults[name];
  }
  apply(fn) {
    this.classes = new Set(
      fn(this.class)
        .split(" ")
        .filter(Boolean)
    );

    return this;
  }

  remove(prop, cond = true) {
    if (!cond) return this;

    this.classes.delete(prop);
  }
  replace(a, b) {
    this.classes.delete(a);
    this.add(b);
  }
  add(a) {
    if (a.includes("$")) {
      const [, first, second] =
        a.match(/^[a-z:]+\-(\$?[a-z0-9]+)\-?(\$[a-z0-9]+)?/) || [];
      if (first && this.props[first.slice(1)]) {
        a = a.replace(first, this.props[first.slice(1)]);
      }
      if (second && this.props[second.slice(1)]) {
        a = a.replace(second, this.props[second.slice(1)]);
      }

      this.classes.add(a);
    } else {
      this.classes.add(a.trim());
    }
  }
  applyRemoves() {
    this.classes.forEach(a => {
      if (a.includes("remove:")) {
        a.replace("remove:", "")
          .split(".")
          .forEach(c => this.remove(c));
        // TODO: remove at final node
        // this.remove(a);
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
    const classes = [...this.classes].join(" ");

    props.forEach(p => {
      let match;

      if (p.includes("-")) {
        match = classes.match(
          new RegExp(
            (p.trim().split("-") || [])[0] + "-?([a-z$]+)?-([$a-z0-9]+)?",
            "g"
          )
        );

        match &&
          p.split("-").length === match[0].split("-").length &&
          this.replace(match[0], p);
      }

      this.add(p);
    });

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

    return [...this.classes].join(" ");
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

    if (!rule) return;

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
        nodes[name].isMain || Object.keys(nodes).length === 1 || name === "root"
      )
    }),
    {}
  );
}

// common styling utils
export const block = (i, p) => i.set("w-full", Boolean(p.block));
