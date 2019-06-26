<script>
  import ListItem from './ListItem.svelte';

  export let items = [];
  export let value = '';
  export let text = '';
</script>

<ul class="py-2 rounded">
	{#each items as item, i}
		<ListItem bind:value {...item} name={item.name || item.text}>
      {item.text}
    </ListItem>
	{/each}
</ul>