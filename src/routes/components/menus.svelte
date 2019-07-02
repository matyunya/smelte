<script>
	import Button from 'components/Button';
	import Menu from 'components/Menu';
	import List from 'components/List';

  let open = true;
	let selected = '';

  const items = [
		{ value: 1, text: 'One' },
		{ value: 2, text: 'Two' },
		{ value: 3, text: 'Three' },
	];

</script>

<h4 class="pb-8">Menus</h4>

<caption>Selected: {selected || 'nothing'} {open}</caption>
<Menu bind:open {items}>
  <div slot="activator">
		<Button on:click={() => open = !open}>A menu</Button>
  </div>
	<List
		bind:value={selected}
		select
		{items}
		c="list"
		on:click={() => open = false}
	/>
</Menu>