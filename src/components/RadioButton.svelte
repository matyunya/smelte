<script>
  import Icon from './Icon.svelte';

  export let selected = '';
  export let label = '';
  export let color = 'text-primary-500';
  export let disabled = false;
  export let name = '';
  export let value = '';

  function select() {
    if (disabled) return;

    selected = value;
  }
</script>

<div class="flex block align-center mb-4 cursor-pointer" on:click={select}>
  <input
    aria-label={label}
    class="hidden"
    type="radio"
    role="radio"
    selected={selected === value}
  />
  {#if selected === value}
    <Icon color={disabled ? 'text-gray-500' : color}>
      radio_button_checked
    </Icon>
  {:else}
    <Icon color={disabled ? 'text-gray-500' : 'text-gray-600'}>
      radio_button_unchecked
    </Icon>
  {/if}
  <label
    aria-hidden="true"
    class="pl-4 cursor-pointer"
    class:text-gray-500={disabled}
    class:text-gray-700={!disabled}
  >{label}</label>
</div>