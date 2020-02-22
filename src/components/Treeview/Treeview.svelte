<script>
  import List, {
    ListItem
  } from "../List";
  import Icon from "../Icon";

  import {
    writable
  } from "svelte/store";
  import config from "./config";
  import smelter from "../../utils/smelter";

  import {
    createEventDispatcher
  } from "svelte";
  import {
    slide
  } from "svelte/transition";

  function defaultToggle(i) {
    dispatch("select", i);

    if (selectable && !i.items) {
      selected = i;
    }

    expanded = i && !expanded.includes(i) ? [...expanded, i] :
      expanded.filter(si => si !== i);
  }

  export let items = [];
  export const value = "";
  export const text = "";
  export const dense = false;
  export const navigation = false;
  export const select = false;
  export let level = 0;
  export let showExpandIcon = true;
  export let expandIcon = "arrow_right";
  export let selectable = true;
  export let selected = null;
  export let expanded = [];
  export let toggle = defaultToggle;

  const className = "rounded";
  export {
    className as class
  };

  const dispatch = createEventDispatcher();

  const store = writable(config);

  $: smelte = smelter($store, $$props);
</script>


<List {items} {...$$props} {className}>
  <span slot="item" let:item>
    <ListItem {item} {...$$props} {...item} selected={selectable && selected===item} on:click
      class={smelte.listItem.class} on:click={()=> toggle(item)}>
      {#if showExpandIcon && !item.hideArrow && item.items}
        <Icon class={smelte.icon.class} tip={expanded.includes(item)}>{expandIcon}</Icon>
      {/if}
      <slot {item}><span class={smelte.itemContent.class}>{item.text}</span></slot>
    </ListItem>

    {#if item.items && expanded.includes(item)}
      <div in:slide class={smelte.container.class}>
        <svelte:self
          {...$$props}
          items={item.items}
          level={level + 1}
          on:click
          on:select
        >
          <slot {item}><span class={smelte.itemContent.class}>{item.text}</span></slot>
        </svelte:self>
      </div>
    {/if}
  </span> 
</List>