<script>
	import Select from 'components/Select';

	let value1 = '';
	let value2 = '';
	let value3 = '';

	const items = [
		{ value: 1, text: 'One' },
		{ value: 2, text: 'Two' }
	];
	const label = 'A select';
</script>

<p>One may bind to a select via <span class="code-inline">on:change</span> event.</p>
<caption>Selected: {value1 || 'nothing'}</caption>
<Select
	{label}
	{items}
	on:change={(v) => value1 = v.detail}
/>

<p>Or through binding <span class="code-inline">on:value</span>.</p>
<caption>Selected: {value2 || 'nothing'}</caption>
<Select
	bind:value={value2}
	{label}
	{items}
/>

<p>Select may be outlined.</p>
<Select
	bind:value={value2}
	outlined
	{label}
	{items}
/>

<p>Select may even be an autocomplete search component.</p>
<caption>Selected: {value3 || 'nothing'}</caption>
<Select
	bind:value={value3}
	outlined
	autocomplete
	{label}
	{items}
/>