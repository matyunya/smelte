<script>
  import { createEventDispatcher } from "svelte";
 ;
  import createRipple from "../Ripple/ripple.js";
  import { writable } from "svelte/store";
  import config from "./config";
  import smelter from "../../utils/smelter";
  import filterProps from "../../utils/filter-props";

  import Icon from "../Icon";

  export let removable = false;
  export let icon = "";
  export let selected = false;
  export let selectable = true;
  export let color = "primary";

  $: ripple = createRipple(color);

  let value = true;

  const dispatch = createEventDispatcher();

  function close() {
    dispatch("close");
    value = false;
  }

  function select() {
    if (!selectable) return;

    selected = true;
  }

  const store = writable(config);
  $: smelte = smelter($store, $$props);

  const props = filterProps([], $$props);
</script>

<style>
  .p-1\/2 {
    padding: 0.125rem;
  }
</style>

{#if value}
  <button
    class={smelte.wrapper.class}
    on:click
    use:ripple
    {...props}
    on:click={select}>
    {#if icon}
      <Icon small class={smelte.icon.class}>
        {icon}
      </Icon>
    {/if}
    <span class={smelte.content.class}>
      <slot />
    </span>
    {#if removable}
      <span
        class={smelte.removable.class}
        on:click|stopPropagation={close}>
        <Icon class={smelte.removableIcon.class} xs>clear</Icon>
      </span>
    {/if}
  </button>
{/if}