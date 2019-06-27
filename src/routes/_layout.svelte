<script>
	import AppBar from '../components/AppBar.svelte';
	import Tabs from '../components/Tabs';
	import Spacer from '../components/Spacer.svelte';
</script>

<style>
	:global(body) {
		@apply bg-gray-200;
	}

	main {
		@apply relative p-8 max-w-4xl mx-auto mb-10 mt-24;
		box-sizing: border-box;
	}
</style>

<AppBar>
	<h6 class="text-white tracking-widest px-8 font-thin text-xl">MELTÉ</h6>
	<Spacer />
	<Tabs.Wrapper>
		<Tabs.Tab to="/">Components</Tabs.Tab>
		<Tabs.Tab to="/typography">Typography</Tabs.Tab>
	</Tabs.Wrapper>
	<a href="https://github.com/matyunya/melte" class="px-4">
		<img src="/github.png" alt="Github Melte" width="24" height="24">
	</a>
</AppBar>

<main class="bg-white container rounded-lg p-5 elevation-10">
	<slot></slot>
</main>