<script>
	import { onMount } from 'svelte';
	import TextField from '../components/TextField.svelte';
	import Button from '../components/Button.svelte';
	import Icon from '../components/Icon.svelte';
	import Checkbox from '../components/Checkbox.svelte';
	import RadioButtonGroup from '../components/RadioButtonGroup.svelte';
	import List from '../components/List/List.svelte';
	import ListItem from '../components/List/ListItem.svelte';
	import Select from '../components/Select.svelte';
	import Snackbar from '../components/Snackbar.svelte';
	import Dialog from '../components/Dialog.svelte';
	import NavigationDrawer from '../components/NavigationDrawer.svelte';

	onMount(() => {
		if (!process.browser || !window.location.hash) return;

		document
			.getElementById(window.location.hash.replace('#', ''))
			.scrollIntoView({ behavior: 'smooth' });
	});

	let radioVal = '1';

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

	const menu = [
		{ to: "#text-fields", text: 'Text fields' },
		{ to: "#buttons", text: 'Buttons' },
		{ to: "#checkboxes", text: 'Checkboxes' },
		{ to: "#checkboxes", text: 'Radio buttons' },
		{ to: "#lists", text: 'Lists' },
		{ to: "#selects", text: 'Selects' },
		{ to: "#snackbars", text: 'Snackbars' },
		{ to: "#dialogs", text: 'Dialogs' },
		{ to: "#navigation-drawers", text: 'Navigation drawers' },
	];

	let showSnackbar = false;
	let showDialog = false;
	let showNavigation = false;
	let persistent = true;
	let right = false;
	let elevation = true;
</script>

<svelte:head>
	<title>Melte: Material design using Tailwind CSS for Svelte</title>
</svelte:head>

<div>
	<h5 class="mt-4 mb-2" id="text-fields"><a href="#text-fields">Text fields</a></h5>
	<h6>Basic</h6>
	<TextField label="Test label" />
	<h6>With hint</h6>
	<TextField label="Test label" hint="Test hint" persistentHint />
	<h6>With error</h6>
	<TextField label="Test label" error="Test error" />
	<h6>Outlined</h6>
	<TextField label="Test label" outlined  />
	<h6>Outlined with hint</h6>
	<TextField label="Test label" outlined hint="Test hint" />
	<h6>Outlined with error</h6>
	<TextField label="Test label" outlined error="Test error" />
	<h6>Outlined textarea</h6>
	<TextField label="Test label" textarea rows=5 outlined />

	<h5 class="mt-4 mb-2" id="buttons"><a href="#buttons">Buttons</a></h5>
	<h6>Basic</h6>
	<div class="py-2">
		<Button>Button</Button>
	</div>
	<h6>Block</h6>
	<div class="py-2">
		<Button block>Button</Button>
	</div>
	<h6>Outlined</h6>
	<div class="py-2">
		<Button block outlined>Button</Button>
	</div>
	<h6>Text</h6>
	<div class="py-2">
		<Button text>Button</Button>
	</div>
	<h6>Disabled</h6>
	<div class="py-2">
		<Button block disabled>Button</Button>
	</div>
	<h6>Fab</h6>
	<div class="py-2">
		<Button icon="change_history" />
	</div>
	<h6>Fab flat</h6>
	<div class="py-2">
		<Button icon="change_history" text light />
	</div>

	<h5 class="mt-4 mb-2" id="checkboxes"><a href="#checkboxes">Checkboxes</a></h5>
	<Checkbox label="A checkbox" />
	<Checkbox disabled label="A disabled checkbox" />

	<h5 class="mt-4 mb-2" id="checkboxes"><a href="#checkboxes">Radio buttons</a></h5>
	<RadioButtonGroup
		name="test"
		items={[
			{ value: 1, label: 'One' },
			{ value: 2, label: 'Two' }
		]} />
	
	<RadioButtonGroup
		name="test-disabled"
		disabled
		items={[
			{ value: 1, label: 'One' },
			{ value: 2, label: 'Two' }
		]} />

	<h5 class="mt-4 mb-2" id="lists"><a href="#lists">Lists</a></h5>
	<h6>One-line</h6>
	<List items={listOneLine} />
	<h6>Two-line</h6>
	<List items={listTwoLines} />
	
	<h6>Dense</h6>
	<List dense items={listTwoLines} />

	<h5 class="mt-4 mb-2" id="selects"><a href="#selects">Selects</a></h5>
	<h6>A typical select</h6>
	<Select label="A select" items={[
		{ value: 1, text: 'One' },
		{ value: 2, text: 'Two' }
	]} />
	<h6>Outlined select</h6>
	<Select outlined label="A select" items={[
		{ value: 1, text: 'One' },
		{ value: 2, text: 'Two' }
	]} />

	<h5 class="mt-4 mb-2" id="snackbars"><a href="#snackbars">Snackbars</a></h5>
	<Snackbar bind:value={showSnackbar}>
		<div>Have a nice day.</div>
		<div slot="action">
			<Button text on:click={() => showSnackbar = false}>Dismiss</Button>
		</div>
	</Snackbar>
	<div class="py-2">
		<Button on:click={() => showSnackbar = true}>Show snackbar</Button>
	</div>
	
	<h5 class="mt-4 mb-2" id="dialogs"><a href="#dialogs">Dialogs</a></h5>
	<Dialog bind:value={showDialog}>
		<h5 slot="title">What do you think?</h5>
		<div class="text-gray-700">I'm not sure about today's weather.</div>
		<div slot="actions">
			<Button text on:click={() => showDialog = false}>Disagree</Button>
			<Button text on:click={() => showDialog = false}>Agree</Button>
		</div>
	</Dialog>
	<div class="py-2">
		<Button on:click={() => showDialog = true}>Show dialog</Button>
	</div>
	
	<h5 class="mt-4 mb-2" id="navigation-drawers"><a href="#navigation-drawers">Navigation drawers</a></h5>

	<Checkbox label="To the right" bind:value={right} />
	<Checkbox label="Persistent" bind:value={persistent} />
	<Checkbox label="With elevation" bind:value={elevation} />

	<NavigationDrawer
		bind:value={showNavigation}
		{right}
		{persistent}
		{elevation}
	>
		<List dense navigation items={menu} />
	</NavigationDrawer>

</div>

