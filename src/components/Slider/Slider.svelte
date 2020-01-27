<script>
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

</script>

<style>
input {
  --bg: var(--color-gray-200);
  --bg-focus: var(--color-gray-200);
}

input {
  -webkit-appearance: none;
  height: 4px;
}

input:disabled {
  @apply bg-gray-300;
}

input::range-thumb {
  -webkit-appearance: none;
  @apply rounded-full p-1 w-5 h-5 elevation-3;
  background-color: var(--bg);
}

input:disabled::range-thumb {
  @apply bg-gray-400;
}

input::-ms-thumb {
  margin: 0;
}
input:focus {
  outline: none;
}

input:focus::range-thumb {
  -webkit-appearance: none;
  @apply rounded-full p-1 w-5 h-5 elevation-3;
  margin-top: -0.5rem;
  background-color: var(--bg-focus);
}

input:focus::range-track {
  @apply rounded;
  height: 4px;
}
</style>

<label>{label}</label>
<input
  use:applyColor
  type="range"
  class="bg-{color}-50 w-full rounded cursor-pointer"
  {min}
  {max}
  {step}
  {disabled}
  class:disabled
  bind:value
  on:change
  style={style}
>
