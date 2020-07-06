<script>
  import { createEventDispatcher } from "svelte";
  import Icon from "../Icon";
  import createRipple from "../Ripple/ripple.js";
  import { writable } from "svelte/store";
  import { listItem } from "./config";
  import smelter from "../../utils/smelter";
  import filterProps from "../../utils/filter-props";

  export let icon = "";
  export let id = "";
  export let value = "";
  export let text = "";
  export let subheading = "";
  export let disabled = false;
  export let dense = false;
  export let selected = false;
  export let tabindex = null;


  export let to = "";
  export const item = null;
  export const items = [];
  export const level = null;

  const ripple = createRipple();
  const dispatch = createEventDispatcher();

  function change() {
    if (disabled) return;
    value = id;
    dispatch('change', id, to);
  }

  const store = writable(listItem);

  $: smelte = smelter($store, {
    ...$$props,
    selected,
    dense,
    disabled
  });

  const props = filterProps(["item"], $$props);
</script>

<li
  use:ripple
  class={smelte.root.class}
  {tabindex}
  on:keypress={change}
  on:click={change}
  on:click
  on:contextmenu
  on:contextmenu|preventDefault|stopPropagation={(e) => {
    dispatch('contextmenu', $$props);
  }}
  {...props}>
  {#if icon}
    <Icon
      class={smelte.icon.class}
      small={dense}
    >
      {icon}
    </Icon>
  {/if}

  <div class="flex flex-col p-0">
    <div class={smelte.item.class}>
      <slot>{text}</slot>
    </div>
    {#if subheading}
      <div class={smelte.subheading.class}>{subheading}</div>
    {/if}
  </div>
</li>
