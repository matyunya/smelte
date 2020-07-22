<script>
  import { ClassBuilder } from "../../utils/classes.js";

  import Ripple from "../Ripple";

  export let value = 0;
  export let label = "";
  export let color = "primary";
  export let disabled = false;
  export let min = 0;
  export let max = 100;
  export let step = null;

  const classesDefault = `bg-${color}-50 w-full rounded cursor-pointer`;

  export let classes = classesDefault;


  const cb = new ClassBuilder(classes, classesDefault);

  $: c = cb
    .flush()
    .add(classes, true, classesDefault)
    .add($$props.class)
    .get();

  const getColor = c => getComputedStyle(document.documentElement).getPropertyValue(c);

  let style;
  $: {
    let c1 = getColor(`--color-${color}-500`);
    let c2 = getColor(`--color-${color}-200`);
    style = disabled
    ? ""
    : `background: linear-gradient(to right, ${c1} 0%, ${c1} ${value}%, ${c2} ${value}%, ${c2} 100%); --bg: ${c1}; --bg-focus: ${c1}`;
  }

  function applyColor(node) {
    if (typeof window === "undefined") return false;

    let c = getColor(`--color-${color}-500`);
    node.style.setProperty('--bg', c);
    node.style.setProperty('--bg-focus', c);
  }

</script>

<label>{label}</label>
<input
  use:applyColor
  type="range"
  class={c}
  {min}
  {max}
  {step}
  {disabled}
  bind:value
  on:change
  style={style}
>
