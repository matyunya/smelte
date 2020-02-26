<script>
  import ListItem from "./ListItem.svelte";
  import {
    writable
  } from "svelte/store";
  import config from "./config";
  import smelter from "../../utils/smelter";

  export let items = [];
  export let value = "";
  export let dense = false;
  export let select = false;

  export const level = null;
  export const text = "";
  export const item = {};
  export const to = null;
  export const selectedClasses = i => i;

  function id(i) {
    if (i.id !== undefined) return i.id;
    if (i.value !== undefined) return i.value;
    if (i.to !== undefined) return i.to;
    if (i.text !== undefined) return i.text;
    return i;
  }

  function getText(i) {
    if (i.text !== undefined) return i.text;
    if (i.value !== undefined) return i.value;
    return i;
  }

  const store = writable(config);

  $: smelte = smelter($store, $$props);
</script>

<ul class={smelte.root.class} class:rounded-t-none={select}>
  {#each items as item, i}
    {#if item.to !== undefined}
      <slot name="item" {item} {dense} {value}>
        <a tabindex={i + 1} href={item.to}>
          <ListItem class={smelte.listItem.class} bind:value {...item} id={id(item)} {dense} on:change>
            {item.text}
          </ListItem>
        </a>
      </slot>
    {:else}
      <slot name="item" {item} {dense} {value}>
        <ListItem
          bind:value
          class={smelte.listItem.class}
          {...item}
          tabindex={i + 1}
          id={id(item)}
          selected={value === id(item)}
          {dense}
          on:change
          on:contextmenu
          on:click>
          {getText(item)}
        </ListItem>
      </slot>
    {/if}
  {/each}
</ul>