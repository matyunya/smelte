<script>
  import ListItem from "./ListItem.svelte";

  export let items = [];
  export let value = "";
  export let dense = false;
  export let select = false;

  export const level = null;
  export const text = "";
  export const item = {};
  export const to = null;

  export let listClasses = "py-2 rounded";

  let className = "";
  export {className as class};

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
</script>

<div class={className}>
  <ul class={listClasses} class:rounded-t-none={select}>
    {#each items as item, i}
      {#if item.to !== undefined}
        <slot name="item" {item} {dense} {value}>
          <a tabindex={i + 1} href={item.to}>
            <ListItem bind:value {...item} id={id(item)} {dense} on:change>
              {item.text}
            </ListItem>
          </a>
        </slot>
      {:else}
        <slot name="item" {item} {dense} {value}>
          <ListItem
            bind:value
            {...item}
            tabindex={i + 1}
            id={id(item)}
            selected={value === id(item)}
            {dense}
            on:change
            on:click>
            {getText(item)}
          </ListItem>
        </slot>
      {/if}
    {/each}
  </ul>
</div>
