<script>
  import { writable } from "svelte/store";
  import Icon from "../Icon";
  import config from "./config";
  import filterProps from "../../utils/filter-props";
  import smelter from "../../utils/smelter";

  import createRipple from "../Ripple/ripple.js";

  let className = "";
  export let value = false;
  export let outlined = false;
  export let text = false;
  export let disabled = false;
  export let icon = null;
  export let small = false;
  export let color = "primary";
  export let href = null;
  export let fab = false;

  const ripple = createRipple((text || fab || outlined) ? color : "white");

  const props = filterProps([], $$props);

  const store = writable(config);

  $: smelte = smelter($store, $$props);
</script>


{#if href}
  <a
    {href}
    {...props}
  >
    <button
      use:ripple
      class={smelte.button.class}
      {...props}
      {disabled}
      on:click={() => (value = !value)}
      on:click
      on:mouseover
      on:*
    >
      {#if icon}
        <Icon class={smelte.icon.class} {small}>{icon}</Icon>
      {/if}
      <slot />
    </button>
  </a>
{:else}
  <button
    use:ripple
    class={smelte.button.class}
    {...props}
    {disabled}
    on:click={() => (value = !value)}
    on:click
    on:mouseover
    on:*
  >
    {#if icon}
      <Icon class={smelte.icon.class} {small}>{icon}</Icon>
    {/if}
    <slot />
  </button>
{/if}
