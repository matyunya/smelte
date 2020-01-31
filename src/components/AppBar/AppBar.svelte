<script>
  import store from "./store";
  import builder from "../../utils/builder";

  const s = store($$props);

  $: c = builder($s, $$props);
</script>

<header class={c.root}>
  <slot />
</header>
