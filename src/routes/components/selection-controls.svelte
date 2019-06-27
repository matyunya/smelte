<script>
	import Checkbox from 'components/Checkbox';
	import RadioButtonGroup from 'components/RadioButtonGroup.svelte';
	import Icon from 'components/Icon.svelte';

</script>

<h4 class="pb-8" id="checkboxes">Checkboxes</h4>

<Checkbox label="A checkbox" />
<Checkbox disabled label="A disabled checkbox" />

<h4 class="pb-8 pt-10" id="radio-buttons">Radio buttons</h4>

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