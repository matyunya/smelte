<script>
  import Icon from 'components/Icon';

  export let icon = '';
  export let name = '';
  export let value = '';
  export let text = '';
  export let navigation = true;
  export let to = '';
  export let selected = false;
  export let color = 'primary-500';

  const classes = 'text-center w-32 p-4 cursor-pointer flex mx-auto items-center opacity-75 text-sm h-full';

  $: selected = to ? selected : name === value;
</script>

{#if to}
  <a
    href={to}
    class={`
      ${classes} ripple-${color} text-white
      ${selected ? `text-${color}` : ''}
    `}
    on:click
    class:text-{color}={selected}
  >
    <div class="flex flex-col items-center content-center mx-auto">
      {#if icon}
        <Icon
          color={selected && navigation ? `text-${color}-500` : ''}
        >{icon}</Icon>
      {/if}

      <div>
        <slot>{text}</slot>
      </div>
    </div>
  </a>
{:else}
  <li
    class={`
      ${classes} ripple-${color} text-white
      ${selected ? `text-${color}` : ''}
    `}
    on:click={() => {
      value = name;
    }}
    on:click
  >
    <div class="flex flex-col items-center content-center mx-auto">
      {#if icon}
        <Icon
          color={selected && navigation ? `text-${color}-500` : ''}
        >{icon}</Icon>
      {/if}

      <div>
        <slot>{text}</slot>
      </div>
    </div>
  </li>
{/if}