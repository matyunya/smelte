<script>
	import Select from 'components/Select';

</script>

	<h4 class="pb-8">Selects</h4>
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