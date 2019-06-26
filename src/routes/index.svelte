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
	<h2 class="text-xl pb-4" id="text-fields"><a href="#text-fields">Text fields</a></h2>
	<h4>Basic</h4>
	<TextField label="Test label" />
	<h4>With hint</h4>
	<TextField label="Test label" hint="Test hint" persistentHint />
	<h4>With error</h4>
	<TextField label="Test label" error="Test error" />
	<h4>Outlined</h4>
	<TextField label="Test label" outlined  />
	<h4>Outlined with hint</h4>
	<TextField label="Test label" outlined hint="Test hint" />
	<h4>Outlined with error</h4>
	<TextField label="Test label" outlined error="Test error" />
	<h4>Outlined textarea</h4>
	<TextField label="Test label" textarea rows=5 outlined />

	<h2 class="text-xl pb-4 pt-8" id="buttons"><a href="#buttons">Buttons</a></h2>
	<h4>Basic</h4>
	<Button>Button</Button>
	<h4>Block</h4>
	<Button block>Button</Button>
	<h4>Outlined</h4>
	<Button block outlined>Button</Button>
	<h4>Text</h4>
	<Button text>Button</Button>
	<h4>Disabled</h4>
	<Button block disabled>Button</Button>
	<h4>Fab</h4>
	<Button icon="change_history" />
	<h4>Fab flat</h4>
	<Button icon="change_history" text light />

	<h2 class="text-xl pb-4 pt-8" id="checkboxes"><a href="#checkboxes">Checkboxes</a></h2>
	<Checkbox label="A checkbox" />
	<Checkbox disabled label="A disabled checkbox" />

	<h2 class="text-xl pb-4 pt-8" id="checkboxes"><a href="#checkboxes">Radio buttons</a></h2>
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

	<h2 class="text-xl pb-4 pt-8" id="lists"><a href="#lists">Lists</a></h2>
	<h4>One-line</h4>
	<List items={listOneLine} />
	<h4>Two-line</h4>
	<List items={listTwoLines} />

	<h2 class="text-xl pb-4 pt-8" id="selects"><a href="#selects">Selects</a></h2>
	<h4>A typical select</h4>
	<Select label="A select" items={[
		{ value: 1, text: 'One' },
		{ value: 2, text: 'Two' }
	]} />
	<h4>Outlined select</h4>
	<Select outlined label="A select" items={[
		{ value: 1, text: 'One' },
		{ value: 2, text: 'Two' }
	]} />

	<h2 class="text-xl pb-4 pt-8" id="snackbars"><a href="#snackbars">Snackbars</a></h2>
	<Snackbar bind:value={showSnackbar}>
		<div>You are awesome.</div>
		<div slot="action">
			<Button text on:click={() => showSnackbar = false}>Dismiss</Button>
		</div>
	</Snackbar>
	<Button on:click={() => showSnackbar = true}>Show snackbar</Button>
	
	<h2 class="text-xl pb-4 pt-8" id="dialogs"><a href="#dialogs">Dialogs</a></h2>
	<Dialog bind:value={showDialog}>
		<h3 slot="title">What do you think?</h3>
		<div class="text-gray-700">I'm not sure about today's weather.</div>
		<div slot="actions">
			<Button text on:click={() => showDialog = false}>Disagree</Button>
			<Button text on:click={() => showDialog = false}>Agree</Button>
		</div>
	</Dialog>
	<Button on:click={() => showDialog = true}>Show dialog</Button>
	
	<h2 class="text-xl pb-4 pt-8" id="navigation-drawers">
		<a href="#navigation-drawers">Navigation drawers</a>
	</h2>

	<NavigationDrawer bind:value={showNavigation} {right} {persistent} {elevation}>
		<List dense items={menu} />
	</NavigationDrawer>
	<Button on:click={() => showNavigation = true}>Show navigation drawer</Button>
	<div class="my-4">
		<Checkbox label="To the right" bind:value={right} />
	</div>
	<div class="my-4">
		<Checkbox label="Persistent" bind:value={persistent} />
	</div>
	<div class="my-4">
		<Checkbox label="With elevation" bind:value={elevation} />
	</div>

</div>

