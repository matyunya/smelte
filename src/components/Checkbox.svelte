<script>
  import Icon from './Icon.svelte';

  export let checked = false;
  export let label = '';
  export let color = 'text-primary-700';
  export let disabled = false;

  function check() {
    if (disabled) return;

    checked = !checked;
  }

</script>

<div class="flex align-center mb-4 cursor-pointer" on:click={check}>
  <input
    class="hidden"
    type="checkbox"
  />
  {#if checked}
    <Icon color={disabled ? 'text-gray-500' : color}>
      check_box
    </Icon>
  {:else}
    <Icon color={disabled ? 'text-gray-500' : 'text-gray-600'}>
      check_box_outline_blank
    </Icon>
  {/if}
  <label
    aria-hidden="true"
    class="pl-4 cursor-pointer"
    class:text-gray-500={disabled}
    class:text-gray-700={!disabled}
  >{label}</label>
</div>