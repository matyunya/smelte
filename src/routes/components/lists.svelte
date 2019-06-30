<script>
	import List from 'components/List';
	import Icon from 'components/Icon';

  const listOneLine = [{
		text: 'Item 1',
		icon: 'favorite',
	}, {
		text: 'Item 2',
		icon: 'favorite',
	}, {
		text: 'Item 3',
		icon: 'favorite',
	}];
	
	const listTwoLines = [{
		text: 'Item 1',
		icon: 'favorite',
		subheading: 'Subheading 1',
	}, {
		text: 'Item 2',
		icon: 'favorite',
		subheading: 'Subheading 2',
	}, {
		text: 'Item 3',
		icon: 'favorite',
		subheading: 'Subheading 3',
	}];

	let selected = false;

	const menu = [
		{ to: "/components/text-fields", text: 'Text fields' },
		{ to: "/components/buttons", text: 'Buttons' },
		{ to: "/components/selection-controls#checkboxes", text: 'Checkboxes' },
		{ to: "/components/selection-controls#radio-buttons", text: 'Radio buttons' },
		{ to: "/components/selection-controls#switches", text: 'Switches' },
		{ to: "/components/lists", text: 'Lists' },
		{ to: "/components/selects", text: 'Selects' },
		{ to: "/components/snackbars", text: 'Snackbars' },
		{ to: "/components/dialogs", text: 'Dialogs' },
		{ to: "/components/navigation-drawers", text: 'Navigation drawers' },
		{ to: "/components/progress-indicators", text: 'Progress indicators' },
		{ to: "/components/chips", text: 'Chips' },
	];
</script>

<h4 class="pb-8">Buttons</h4>
<h6 class="mb-3 mt-6">One-line</h6>
<List items={listOneLine} />
<h6 class="mb-3 mt-6">Two-line</h6>
<List items={listTwoLines} />

<h6 class="mb-3 mt-6">Dense</h6>
<List dense items={listTwoLines} />

<h6 class="mb-3 mt-6">Custom list element using let:slots</h6>

<List bind:value={selected} items={menu} dense navigation>
	<span slot="item" let:item={item}>
		<div
			class="cursor-pointer ripple-green p-4 border-green-50 border my-2 border-solid" 
			on:click={() => selected = item.text}>
			{selected === item.text ? '👌' : '🙅‍'} {item.text}
		</div>
	</span>
</List>