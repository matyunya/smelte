<script>
  import ListItem from 'components/List/ListItem.svelte';

  export let items = [];
  export let item = {};
  export let value = '';
  export let text = '';
  export let dense = false;
  export let navigation = false;

  const props = {
    dense,
    navigation,
    id: item.value || item.name,
  };
</script>

<ul class="py-2 rounded">
	{#each items as item, i}
    {#if item.to}
     <slot
        name="item"
        {item}
        {dense}
        {navigation}
        {value}
    >
      <a href={item.to}>
        <ListItem bind:value {...item} {...props}>
          {item.text}
        </ListItem>
      </a>
    </slot>
    {:else}
      <slot
        name="item"
        {item}
        {dense}
        {navigation}
        {value}
      >
        <ListItem bind:value {...item} {...props}>
          {item.text}
        </ListItem>
      </slot>
    {/if}
	{/each}
</ul>