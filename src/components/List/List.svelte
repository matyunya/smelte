<script>
  import ListItem from "./ListItem.svelte";

  export let items = [];
  export const item = {};
  export let value = "";
  export const text = "";
  export let dense = false;
  export let navigation = false;
  export const level = null;
  export let select = false;
  let className = "";
  export {className as class};

  export let listClasses = "py-2 rounded";

  const props = {
    dense,
    navigation
  };

  const id = item => item.id !== undefined ? item.id :
    item.value !== undefined ? item.value :
    item.to !== undefined ? item.to :
    item.text !== undefined ? item.text :
    item;

  function getText(item) {
    if (item.text !== undefined) return item.text;
    if (item.value !== undefined) return item.value;
    return item;
  }
</script>

<div class={className}>
  <ul class={listClasses} class:rounded-t-none={select}>
    {#each items as item, i}
      {#if item.to !== undefined}
        <slot name="item" {item} {dense} {navigation} {value}>
          <a tabindex={i + 1} href={item.to}>
            <ListItem bind:value {...item} id={id(item)} {...props} on:change>
              {item.text}
            </ListItem>
          </a>
        </slot>
      {:else}
        <slot name="item" {item} {dense} {navigation} {value}>
          <ListItem
            bind:value
            {...item}
            tabindex={i + 1}
            id={id(item)}
            selected={value === id(item)}
            {...props}
            on:change
            on:click>
            {getText(item)}
          </ListItem>
        </slot>
      {/if}
    {/each}
  </ul>
</div>
