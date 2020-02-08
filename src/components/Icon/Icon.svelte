<script>
  import { writable } from "svelte/store";
  import config from "./config";
  import smelter from "../../utils/smelter";

  const store = writable(config);

  $: smelte = smelter($store, $$props);
</script>

<style>
  :global(.reverse) {
    transform: rotate(180deg);
  }

  :global(.tip) {
    transform: rotate(90deg);
  }
</style>

<i
  aria-hidden="true"
  class={smelte.root.class}
  on:click
>
  <slot />
</i>
