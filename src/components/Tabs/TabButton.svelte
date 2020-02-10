<script>
  import Icon from "../Icon";
  import createRipple from "../Ripple/ripple.js";
  import { writable } from "svelte/store";
  import { tabButton } from "./config";
  import smelter from "../../utils/smelter";

  export let icon = "";
  export let id = "";
  export let text = "";
  export let to = "";
  export let selected = "";
  export let color = "primary";

  const ripple = createRipple(color);

  const store = writable(tabButton);

  $: smelte = smelter($store, {
    ...$$props,
    id,
    selected
  });
</script>

{#if to}
  <a
    use:ripple
    href={to}
    class={smelte.root.class}
    on:click
  >
    <div class={smelte.tab.class}>
      {#if icon}
        <Icon class={smelte.icon.class}>{icon}</Icon>
      {/if}

      <div>
        <slot>{text}</slot>
      </div>
    </div>
  </a>
{:else}
  <li
    use:ripple
    class={smelte.root.class}
    on:click={() => selected = id }
    on:click
  >
    <div class={smelte.tab.class}>
      {#if icon}
        <Icon class={smelte.icon.class}>{icon}</Icon>
      {/if}

      <div>
        <slot>{text}</slot>
      </div>
    </div>
  </li>
{/if}
