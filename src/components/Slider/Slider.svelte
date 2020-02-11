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

  $: style = disabled
    ? ""
    : `background: linear-gradient(to right, --color-${color}-500 0%, --color-${color}-500 ${value}%, --color-${color}-100 ${value}%, --color-${color}-100 100%)`;

  function applyColor(node) {
    if (typeof window === "undefined") return false;

    let c = getComputedStyle(document.documentElement).getPropertyValue(`--color-${color}-500`);
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
  style={style}
>
