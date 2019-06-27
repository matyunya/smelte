<script>
	import AppBar from 'components/AppBar.svelte';
	import Tabs from 'components/Tabs';
	import Spacer from 'components/Spacer.svelte';
	import List from 'components/List/List.svelte';
	import NavigationDrawer from 'components/NavigationDrawer.svelte';

	const menu = [
		{ to: "/components/text-fields", text: 'Text fields' },
		{ to: "/components/buttons", text: 'Buttons' },
		{ to: "/components/selection-controls#checkboxes", text: 'Checkboxes' },
		{ to: "/components/selection-controls#radio-buttons", text: 'Radio buttons' },
		{ to: "/components/lists", text: 'Lists' },
		{ to: "/components/selects", text: 'Selects' },
		{ to: "/components/snackbars", text: 'Snackbars' },
		{ to: "/components/dialogs", text: 'Dialogs' },
		{ to: "/components/navigation-drawers", text: 'Navigation drawers' },
	];
	
	const menuOther = [
		{ to: "/typography", text: 'Typography' },
	];
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

<svelte:head>
	<title>Smelte: Material design using Tailwind CSS for Svelte</title>
</svelte:head>

<AppBar>
	<a href="." class="px-8 flex items-center">
		<img src="/logo.png" alt="Smelte logo" width="44">
		<h6 class="pl-3 text-white tracking-widest font-thin text-lg">
			SMELTE
		</h6>
	</a>
	<Spacer />
	<Tabs.Wrapper>
		<Tabs.Tab to="/components">Components</Tabs.Tab>
		<Tabs.Tab to="/typography">Typography</Tabs.Tab>
	</Tabs.Wrapper>
	<a href="https://github.com/matyunya/smelte" class="px-4">
		<img src="/github.png" alt="Github Smelte" width="24" height="24">
	</a>
</AppBar>

<main class="bg-white container rounded-lg p-5 elevation-10">
	<NavigationDrawer
		persistent
		elevation={false}
	>
		<h6 class="p-6 pb-2">Components</h6>
		<hr>
		<List dense navigation items={menu} />
		<hr>
		<List dense navigation items={menuOther} />

	</NavigationDrawer>
	<slot></slot>
</main>