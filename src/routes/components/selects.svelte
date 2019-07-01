<script>
	import Select from 'components/Select';

	let value1 = '';
	let value2 = '';
</script>

	<h4 class="pb-8">Selects</h4>
	<p>One may bind to a select via <span class="body-2">change</span> event.</p>
	<caption>Selected: {value1}</caption>
	<Select
		label="A select"
		items={[
			{ value: 1, text: 'One' },
			{ value: 2, text: 'Two' }
		]}
		on:change={(v) => value1 = v.detail}
		/>
	<p>Or through binding <span class="body-2">value</span>.</p>
	<caption>Selected: {value2}</caption>
	<Select
		bind:value={value2}
		label="A select"
		items={[
			{ value: 1, text: 'One' },
			{ value: 2, text: 'Two' }
		]}
	/>

	<p>Select may be outlined</p>
	<Select
		bind:value={value2}
		outlined
		label="A select"
		items={[
			{ value: 1, text: 'One' },
			{ value: 2, text: 'Two' }
		]}
	/>