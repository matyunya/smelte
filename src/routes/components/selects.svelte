<script>
	import Select from 'components/Select';

</script>

	<h5 class="mt-4 mb-2" id="selects">Selects</h5>
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