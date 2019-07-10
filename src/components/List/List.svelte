<script>
  import ListItem from "./ListItem.svelte";

  export let items = [];
  export let item = {};
  export let value = "";
  export let text = "";
  export let dense = false;
  export let navigation = false;
  export let select = false;
  export let c = "";

  const props = {
    dense,
    navigation
  };

  const id = item => item.id || item.value || item.to || item.text;
</script>

<div class={c}>
  <ul class="py-2 rounded" class:rounded-t-none={select}>
    {#each items as item, i}
      {#if item.to}
        <slot name="item" {item} {dense} {navigation} {value}>
          <a href={item.to}>
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
            id={id(item)}
            selected={value === id(item)}
            {...props}
            on:change>
            {item.text}
          </ListItem>
        </slot>
      {/if}
    {/each}
  </ul>
</div>
