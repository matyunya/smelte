<script>
  import store from "./store";
  import builder from "../../utils/builder";

  const s = store($$props);

  $: c = builder($s, $$props);
</script>

<div class={c.root}>
  <slot name="title" />
  <slot name="media" />
  <slot />
  <slot name="text" />
  <slot name="actions" />
</div>
