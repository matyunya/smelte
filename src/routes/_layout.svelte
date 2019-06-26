<script>
	import Nav from '../components/Nav.svelte';

	export let segment;
</script>

<style>
	:global(body) {
		@apply bg-white text-black;
	}

	main {
		@apply relative p-8 max-w-4xl mx-auto my-10;
		box-sizing: border-box;
	}
</style>

<Nav {segment} />
<main class="bg-white rounded-lg p-5 mt-10 elevation-10">
	<slot></slot>
</main>