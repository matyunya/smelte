<script context="module">
  import { writable } from 'svelte/store';

  const showId = writable(false);
  const uid = () => [...Array(64)].map(() => (Math.random() * 16 | 0).toString(16)).join('');
</script>

<script>
  import { scale, fade } from "svelte/transition";
  import debounce from "../../utils/debounce.js";
  import config from "./config";
  import smelter from "../../utils/smelter";

  export let show = false;

  export let timeout = null;
  export let inDelay = 0;
  export let outDelay = 1000;

  let id = uid();
  let tm;

  $: if (show) $showId = id;

  function showTooltip() {
    $showId = id;
    show = true;
    if (!timeout) return;

    tm = setTimeout(() => {
      show = false;
      $showId = false;
    }, timeout);
  }

  function hideTooltip() {
    if ($showId === id) {
      $showId = false;
      show = false;
    }

    if (timeout) clearTimeout(tm);
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
    on:mouseenter={debounce(showTooltip, 30)}
    on:mouseleave={debounce(hideTooltip, 200)}
    on:mouseenter
    on:mouseleave
    on:mouseover
    on:mouseout
  >
    <slot name="activator" />
  </div>

  {#if $showId === id}
    <div
      in:scale={{ duration: 30, delay: inDelay }}
      out:fade={{ duration: 75, delay: outDelay }}
      class={smelte.root.class}
    >
      <slot />
    </div>
  {/if}
</div>
