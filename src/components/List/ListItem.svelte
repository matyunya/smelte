<script>
  import Icon from '../Icon.svelte';

  export let icon = '';
  export let name = '';
  export let value = '';
  export let text = '';
  export let subheading = '';
  export let dense = false;

  $: selected = name === value;
</script>

<li
  class="cursor-pointer ripple-gray hover:bg-gray-300 flex align-center items-center p-4"
  class:py-2={dense}
  class:bg-gray-200={selected}
  on:click={() => value = name}
>
  {#if icon}
    <Icon c="pr-6">{icon}</Icon>
  {/if}

  <div class="flex flex-col p-0">
    <div>
      <slot>{text}</slot>
    </div>
    {#if subheading}
      <div class="text-gray-600 p-0 text-sm">{subheading}</div>
    {/if}
  </div>
</li>