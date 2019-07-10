import { parse, walk } from "svelte/compiler";
import path from "path";

function flatten(arr) {
  return arr.reduce(function(flat, toFlatten) {
    return flat.concat(
      Array.isArray(toFlatten) ? flatten(toFlatten) : toFlatten
    );
  }, []);
}

function getProp(node, attr) {
  if (!node.attributes) return false;

  return (node.attributes.find(a => a.name === attr) || {}).value;
}

function getComponent(name) {
  try {
    return require(path.resolve("./src/components", name, "variants.js"));
  } catch (e) {
    return {
      all: color => [`text-${color}-500`]
    };
  }
}

const defs = {};

function classesPerComponent(colors) {
  return Object.keys(colors).reduce((acc, component) => {
    const def = defs[component] || getComponent(component);

    defs[component] = def;

    const classes = [...colors[component]].map(c =>
      Object.keys(def).map(k => def[k](c))
    );

    return [...acc, ...classes];
  }, []);
}

export default function extractor(content) {
  let ast;
  const usedColors = {};

  try {
    ast = parse(content);
  } catch {}

  walk(ast, {
    enter: function(node) {
      const color = getProp(node, "color");
      if (color && color[0].data) {
        // TODO: variants for buttons
        // const light = getProp(node, "light") ? "light" : null;
        // const dark = getProp(node, "dark") ? "dark" : null;

        if (!usedColors[node.name]) {
          usedColors[node.name] = new Set(["primary", "white"]);
        }

        usedColors[node.name].add(color[0].data);
      }
    }
  });

  const fromClasses = content.match(/class:[A-Za-z0-9-_]+/g) || [];

  return [
    ...(content.match(/[A-Za-z0-9-_:\/]+/g) || []),
    ...fromClasses.map(c => c.replace("class:", "")),
    ...flatten(classesPerComponent(usedColors))
  ];
}
