<script>
	import TextField from 'components/TextField.svelte';
</script>

<h5 class="mt-4 mb-2" id="text-fields">Text fields</h5>

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
