<script>
	import Checkbox from 'components/Checkbox';
	import RadioButton from 'components/RadioButton';
	import Switch from 'components/Switch';
	import Icon from 'components/Icon';

</script>

<h5 class="pb-8 pt-10" id="checkboxes">Checkboxes</h5>

<Checkbox label="A checkbox" />
<Checkbox disabled label="A disabled checkbox" />

<h5 class="pb-8 pt-10" id="radio-buttons">Radio buttons</h5>

<RadioButton.Group
  name="test"
  items={[
    { value: 1, label: 'One' },
    { value: 2, label: 'Two' }
  ]} />

<RadioButton.Group
  name="test-disabled"
  disabled
  items={[
    { value: 1, label: 'One' },
    { value: 2, label: 'Two' }
  ]} />

<h5 class="pb-8 pt-10" id="switches">Switches</h5>

<Switch />