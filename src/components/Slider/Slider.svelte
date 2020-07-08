<script>
  import { writable } from "svelte/store";
  import config from "./config";
  import smelter from "../../utils/smelter";
  import Ripple from "../Ripple";

  export let value = 0;
  export let label = "";
  export let color = "primary";
  export let disabled = false;
  export let min = 0;
  export let max = 100;
  export let step = null;

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

  const store = writable(config);

  $: smelte = smelter($store, $$props);

</script>

<label>{label}</label>
<input
  use:applyColor
  type="range"
  class={smelte.root.class}
  {min}
  {max}
  {step}
  {disabled}
  bind:value
  on:change
  {style}
>
