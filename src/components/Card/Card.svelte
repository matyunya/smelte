<script>
  import { writable } from "svelte/store";
  import config from "./config";
  import smelter from "../../utils/smelter";

  const store = writable(config);

  $: smelte = smelter($store, $$props);
</script>

<div class={smelte.root.class}>
  <slot name="title" />
  <slot name="media" />
  <slot />
  <slot name="text" />
  <slot name="actions" />
</div>
