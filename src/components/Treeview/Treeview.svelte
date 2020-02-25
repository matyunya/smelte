<script>
  import List from "../List";
  import TreeviewItem from "./TreeviewItem.svelte";

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

    if (i && !i.id) {
      i.id = Date().valueOf();
    }

    expanded =
      i && !expanded.includes(i.id) ? [...expanded, i.id] :
      expanded.filter(si => si !== i.id);
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

  const dispatch = createEventDispatcher();

  const store = writable(config);

  $: smelte = smelter($store, $$props);
</script>

<List {items} {...$$props} class={smelte.root.class}>
  <span slot="item" let:item>
    <TreeviewItem class={smelte.listItem.class} {item} {text} {select} {showExpandIcon} {expandIcon} {selectable}
      {selected} {toggle} {smelte} on:click-expand>
      <slot {item}>{item.text}</slot>
    </TreeviewItem>
    {#if item.items && expanded.includes(item.id)}
      <div in:slide class={smelte.container.class}>
        <svelte:self
          {...$$props}
          {expanded}
          items={item.items}
          level={level + 1}
          on:click
          on:select
          let:item={item}>
          <slot {item} />
        </svelte:self>
      </div>
    {/if}
  </span>
</List>