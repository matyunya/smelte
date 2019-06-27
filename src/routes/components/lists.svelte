<script>
	import List from 'components/List';
	import Icon from 'components/Icon.svelte';

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
</script>

<h5 class="mt-4 mb-2" id="lists">Lists</h5>
<h6>One-line</h6>
<List items={listOneLine} />
<h6>Two-line</h6>
<List items={listTwoLines} />

<h6>Dense</h6>
<List dense items={listTwoLines} />