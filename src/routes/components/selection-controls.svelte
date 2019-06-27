<script>
	import Checkbox from 'components/Checkbox.svelte';
	import RadioButtonGroup from 'components/RadioButtonGroup.svelte';
	import Icon from 'components/Icon.svelte';

</script>

<h5 class="mt-4 mb-2" id="checkboxes">Checkboxes</h5>
<Checkbox label="A checkbox" />
<Checkbox disabled label="A disabled checkbox" />

<h5 class="mt-4 mb-2" id="checkboxes">Radio buttons</h5>
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