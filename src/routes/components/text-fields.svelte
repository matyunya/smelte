<script>
	import TextField from 'components/TextField';
	import Code from 'components/Code';
</script>

<h6 class="mb-3 mt-6">Basic</h6>
<TextField label="Test label" />
<Code code={`<TextField label="Test label" />`} />
<h6 class="mb-3 mt-6">With hint</h6>
<TextField label="Test label" hint="Test hint" persistentHint />
<Code code={`<TextField label="Test label" hint="Test hint" persistentHint />`} />
<h6 class="mb-3 mt-6">With error</h6>
<TextField label="Test label" error="Test error" />
<Code code={`<TextField label="Test label" error="Test error" />`} />
<h6 class="mb-3 mt-6">Outlined</h6>
<TextField label="Test label" outlined />
<Code code={`<TextField label="Test label" outlined />`} />
<h6 class="mb-3 mt-6">Outlined with hint</h6>
<TextField label="Test label" outlined hint="Test hint" />
<Code code={`<TextField label="Test label" outlined hint="Test hint" />`} />
<h6 class="mb-3 mt-6">Outlined with error</h6>
<TextField label="Test label" outlined error="Test error" />
<Code code={`<TextField label="Test label" outlined error="Test error" />`} />
<h6 class="mb-3 mt-6">Outlined textarea</h6>
<TextField label="Test label" textarea rows=5 outlined />
<Code code={`<TextField label="Test label" textarea rows=5 outlined />`} />
