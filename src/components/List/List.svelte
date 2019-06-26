<script>
  import ListItem from './ListItem.svelte';

  export let items = [];
  export let value = '';
  export let text = '';
  export let dense = false;
  export let navigation = false;
</script>

<ul class="py-2 rounded">
	{#each items as item, i}
    {#if item.to}
    <a href={item.to}>
      <ListItem bind:value {...item} {dense} {navigation} name={item.name || item.text}>
        {item.text}
      </ListItem>
    </a>
    {:else}
      <ListItem bind:value {...item} {dense} {navigation} name={item.name || item.text}>
        {item.text}
      </ListItem>
    {/if}
	{/each}
</ul>