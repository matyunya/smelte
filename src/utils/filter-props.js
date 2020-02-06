const defaultReserved = [
  "class",
  "add",
  "remove",
  "replace",
  "value",
  "classes",
  "shade",
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
  "fab"
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
