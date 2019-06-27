<script>
	import Button from 'components/Button';
	import Icon from 'components/Icon.svelte';
</script>

<h5 class="mt-4 mb-2" id="buttons">Buttons</h5>

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