<script>
  import { scale, fade } from "svelte/transition";
  import { ClassBuilder } from "../../utils/classes.js";
  import debounce from "../../utils/debounce.js";
  import { writable } from "svelte/store";
  import config from "./config";
  import smelter from "../../utils/smelter";

  export let show = false;

  export let timeout = null;

  function showTooltip() {
    if (show) return;

    show = true;

    if (!timeout) return;

    timeout = setTimeout(() => {
      show = false;
    }, timeout);
  }

  function hideTooltip() {
    if (!show) return;
    
    show = false;
    clearTimeout(timeout);
  }

  const store = writable(config);

  $: smelte = smelter($store, $$props);
</script>

<style>
.tooltip {
  left: 50%;
  transform: translateX(-50%);
}
</style>

<div class={smelte.wrapper.class}>
  <div
    on:mouseenter={debounce(showTooltip, 100)}
    on:mouseleave={debounce(hideTooltip, 500)}
    on:mouseenter
    on:mouseleave
    on:mouseover
    on:mouseout
  >
    <slot name="activator" />
  </div>

  {#if show}
    <div
      in:scale={{ duration: 150 }}
      out:scale={{ duration: 150, delay: 100 }}
      class={smelte.root.class}
    >
      <slot />
    </div>
  {/if}
</div>