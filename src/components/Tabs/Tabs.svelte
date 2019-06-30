<script>
	import { onMount } from 'svelte';

	import Indicator from './Indicator.svelte';
	import Tab from './Tab.svelte';

	export let value = null;
	export let items = [];

	let node;
	let indicatorWidth = 0;
	let indicatorOffset = 0;
	let offset = 0;

	function calcIndicator() {
		indicatorWidth = node ? node.children[0].offsetWidth : 0;
		const left = value ? items.findIndex(i => [i.value, i.to].includes(value)) : 0;
		offset = left * indicatorWidth;
	}

	onMount(() => calcIndicator(value));

	$: calcIndicator(value);
</script>

<div class="py-0 h-full hidden md:flex items-center relative" bind:this={node}>
	{#each items as item, i}
		<slot name="item" {value}>
			<Tab bind:value to={item.to} name={item.name || item.text}>{item.text}</Tab>
		</slot>
	{/each}
	<Indicator color="white" width={indicatorWidth} left={offset} />
</div>