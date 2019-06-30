<script>
	import { onMount } from 'svelte';

	import Indicator from './Indicator.svelte';
	import Tab from './Tab.svelte';

	export let value = null;
	export let items = [];
	export let indicator = true;

	let node;
	let indicatorWidth = 0;
	let indicatorOffset = 0;
	let offset = 0;

	function calcIndicator() {
		indicatorWidth = node ? node.children[0].offsetWidth : 0;
		const left = value
			? items.findIndex(i => value.includes(i.to || i.value))
			: 0;

		offset = left * indicatorWidth;
	}

	onMount(() => calcIndicator(value));

	$: calcIndicator(value);
</script>

<div class="py-0 h-full hidden md:flex items-center relative" bind:this={node}>
	{#each items as item, i}
		<slot name="item" {value}>
			<Tab bind:value {...item} name={item.name || item.text}>{item.text}</Tab>
		</slot>
	{/each}

	{#if indicator}
		<Indicator color="white" width={indicatorWidth} left={offset} />
	{/if}
	

	<slot {value} name="content" />
</div>