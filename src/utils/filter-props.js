const defaultReserved = [
  "class",
  "add",
  "remove",
  "replace",
  "value",
  "classes",
  "outlined",
  "text",
  "color",
  "block",
  "disabled",
  "icon",
  "small",
  "light",
  "dark",
  "flat",
  "fab",
  "label",
  "placeholder",
  "hint",
  "error",
  "append",
  "prepend",
  "persistentHint",
  "textarea",
  "rows",
  "select",
  "autocomplete",
  "noUnderline",
  "appendReverse",
  "prependReverse",
  "bgColor",
  "bgcolor",
  "selected",
  "smelte",
  "toggle",
  "selectable"
];
export default function filterProps(reserved, props) {
  const r = [...reserved, ...defaultReserved];

  return Object.keys(props).reduce(
    (acc, cur) =>
      cur.includes("$$") || cur.includes("Class") || r.includes(cur)
        ? acc
        : { ...acc, [cur]: props[cur] },
    {}
  );
}
