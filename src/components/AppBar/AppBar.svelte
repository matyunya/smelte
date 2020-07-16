<script>
  import { writable } from "svelte/store";
  import config from "./config";
  import smelter from "../../utils/smelter";

  const store = writable($$props.config || config);

  $: smelte = smelter($store, $$props);
</script>

<header class={smelte.root.class}>
  <slot />
</header>
