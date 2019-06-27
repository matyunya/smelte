<script>
	import AppBar from 'components/AppBar.svelte';
	import Tabs from 'components/Tabs';
	import Spacer from 'components/Spacer.svelte';
	import List from 'components/List/List.svelte';
	import NavigationDrawer from 'components/NavigationDrawer.svelte';

	import { right, elevation, persistent, showNav } from 'stores.js';

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
		{ to: "/color", text: 'Color' },
	];
</script>

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

<main class="container relative p-8 max-w-3xl mx-auto mb-10 mt-24">
	<NavigationDrawer
		bind:value={$showNav}
		right={$right}
		persistent={$persistent}
		elevation={$elevation}
	>
		<h6 class="p-6 ml-1 pb-2 text-lg font-normal text-gray-700">Components</h6>
		<List dense navigation items={menu} />
		<hr>
		<List dense navigation items={menuOther} />

	</NavigationDrawer>
	<slot></slot>
</main>