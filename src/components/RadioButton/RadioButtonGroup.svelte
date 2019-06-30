<script>
  import RadioButton from './RadioButton.svelte';

  export let items = [];
  export let selected = '';
  export let name = '';
  export let disabled = false;

  let groupName = name || `radio-${Math.random()}`;
</script>

<div class="flex flex-col mb-4 cursor-pointer">
  {#each items as item}
    <slot
      {item}
    >
      <RadioButton
        bind:selected
        {...item}
        name={groupName}
        {disabled}
      />
    </slot>
	{/each}
</div>