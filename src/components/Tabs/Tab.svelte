<script>
  import Icon from 'components/Icon';

  export let icon = '';
  export let name = '';
  export let value = '';
  export let text = '';
  export let navigation = true;
  export let to = '';

  $: selected = name && name === value;
</script>

<style>
  .tab-item {
    transition: background-color .2s ease-out;
    @apply w-32;
  }

  .navigation {
    &:hover {
      @apply bg-local;
    }

    &.selected {
      @apply bg-primary-50 text-white opacity-100;
      transition: background-color .2s ease-in;
    }
  }
</style>

{#if to}
  <a
    href={to}
    class="navigation tab-item p-4 ripple-white cursor-pointer text-white flex mx-auto items-center opacity-75 text-sm h-full"
    class:selected
  >
    <div class="flex flex-col items-center content-center mx-auto">
      {#if icon}
        <Icon
          color={selected && navigation ? 'text-primary-500' : ''}
        >{icon}</Icon>
      {/if}

      <div>
        <slot>{text}</slot>
      </div>
    </div>
  </a>
{:else}
  <li
    class="navigation tab-item p-4 ripple-white cursor-pointer text-white flex mx-auto items-center opacity-75 text-sm"
    class:selected
    on:click={() => {
      value = name;
    }}
  >
    {#if icon}
      <Icon
        c="pr-6"
        color={selected && navigation ? 'text-primary-500' : ''}
      >{icon}</Icon>
    {/if}

    <div class="flex flex-col p-0">
      <div>
        <slot>{text}</slot>
      </div>
    </div>
  </li>
{/if}