<script>
	import Checkbox from 'components/Checkbox';
	import RadioButton from 'components/RadioButton';
	import Icon from 'components/Icon';

</script>

<h4 class="pb-8" id="checkboxes">Checkboxes</h4>

<Checkbox label="A checkbox" />
<Checkbox disabled label="A disabled checkbox" />

<h4 class="pb-8 pt-10" id="radio-buttons">Radio buttons</h4>

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